import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { Subscription, concat } from 'rxjs';
import { EducationDetailModel, EducationHdrModel } from '../models/education.model';
import { ClaimView } from '../models/claimview.model';
import { Beneficiary } from '../models/ben.model';
import { window } from 'rxjs-compat/operator/window';
import { ClaimsComponent } from '../claims/claims.component';
import { ModalDirective } from 'ngx-bootstrap';
import { AttachmentModel } from '../models/attachment.model';
import { ClaimTrack } from '../models/track.model';
import { DomSanitizer } from '@angular/platform-browser';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, PFTypeOfClaim } from '../pipes/constnts.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';

@Component({
    selector: 'app-claimviewdata',
    templateUrl: './claimviewdata.component.html',
    styleUrls: ['./claimviewdata.component.css']
})
export class ClaimviewdataComponent implements OnInit {
    @Input() claimId: number;
    @Input() claimType: number;
    @Input() transactionId: number;
    private workflowId: any;
    claim: ClaimView = {} as ClaimView;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    viewMetWithAnAccident: boolean = false;
    mode: string;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    isPrematureClaim: boolean = false;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService, private sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.transactionId, ClaimConstants[this.claimType]);
    }
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                this.claim = data
                if (this.claim.educationDetails != null) {
                    this.educationList = this.claim.educationDetails.educationDetailList;
                    if (this.claim.educationDetails.educationDetailList.length > 0) {
                        for (var i = 0; i < this.claim.educationDetails.educationDetailList.length; i++) {
                            if (this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                                for (var j = 0; j < this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                    let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                        attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                    }
                                    this.attachmentList.push(attachment);
                                }
                            }
                        }
                    }
                }
                if (this.claim.healthFamilyDetails != null) {
                    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }

                    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                    }
                    let data = this.claim.healthFamilyDetails.healthFamilyPackages;
                    for (var i = 0; i < data.length; i++) {
                        this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
                    }
                    this.selectedPackages = this.packages.filter(x => x.isChecked == true);
                }
                if (this.claim.providentFundDetails != null) {

                    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        this.isPrematureClaim = true;
                    }
                }
                if (this.claim.attachment != null) {
                    for (var k = 0; k < this.claim.attachment.length; k++) {
                        let attachment = this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.claim.attachment[k] = attachment;
                        // this.attachmentList.push(attachment);
                    }
                }
                this.getBenBasicDetails(this.claim.benSno);
                console.log(this.claim);
                //  this.getUrlOfPdf();
            });
    }
    getPackages() {
        this.dataService
            .getPackages()
            .subscribe((data: any) => {
                this.packages = data;
                console.log(this.packages);
                var groups = new Set(this.packages.map(item => item.ailmentName));
            });
    }
    getBenBasicDetails(benNo: any) {
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe((data: any) => {
                this.beneficiary = data;
                console.log(this.beneficiary);
            });
    }
}
