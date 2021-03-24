import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
    selector: 'app-claim-view',
    templateUrl: './claim-view.component.html',
    styleUrls: ['./claim-view.component.css']
})
export class ClaimViewComponent implements OnInit, OnDestroy {
    @ViewChild('attachModal') public attachModel: ModalDirective;
    private route$: Subscription;
    private claimId: number;
    private claimType: number;
    private transactionId: any;
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
    constructor(public router: Router
        , private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService, private sanitizer: DomSanitizer) {
        //this.route$ = this.route.params.subscribe(
        //    (params: Params) => {
        //        this.claimId = params["claimId"];
        //        this.claimType = ClaimConstants.Education;
        //        this.tranctionId = params["claimRefernceNo"]
        //    }
        //);
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"];
                this.claimType = params["tranctionType"];
                this.transactionId = params["transactionId"];
                this.mode = params["mode"];
                this.workflowId = params["workflowId"];
            }
        );
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.transactionId, ClaimConstants[this.claimType]);
        
    }
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {debugger;
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
                    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length;j++) {
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
                if (this.claim.disabilityDetails != null) {
                    if (this.claim.disabilityDetails.attachmentDTOList != null) {
                        for (var j = 0; j < this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                            let attachment = this.claim.disabilityDetails.attachmentDTOList[j];
                            if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                            }
                            this.attachmentList.push(attachment);
                        }
                    }
                }
                if (this.claim.deathDetails != null) {
                    if (this.claim.deathDetails.attachmentDTOList != null) {
                        for (var j = 0; j < this.claim.deathDetails.attachmentDTOList.length; j++) {
                            let attachment = this.claim.deathDetails.attachmentDTOList[j];
                            if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                            }
                            this.attachmentList.push(attachment);
                        }
                    }
                }
                if (this.claim.providentFundDetails != null) {
                    
                    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        this.isPrematureClaim = true;
                    }
                }
                if (this.claim.attachment != null) {
                    debugger;
                    for (var k = 0; k < this.claim.attachment.length; k++) {
                        if (this.claim.attachment[k].fileName != null) {
                            let attachment = this.claim.attachment[k];
                            if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                            }

                            this.claim.attachment[k] = attachment;
                            this.attachmentList.push(attachment);
                        }
                    }
                }
                this.getBenBasicDetails(this.claim.benSno);
                this.getClaimTrackDetailsByClaimId(this.transactionId, ClaimConstants[this.claimType], this.workflowId);
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
        debugger;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe((data: any) => {
                this.beneficiary = data;
                console.log(this.beneficiary);
            });
    }
    viewAttachment() {
        this.attachModel.show();
    }
    Getimage(imageData: AttachmentModel) {
        const data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any,wfId:any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;

            });
    }

    formatDate(date: any) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        let dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();

        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    }
    nthDay(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    getUrlOfPdf(imageData?: AttachmentModel) {
        this.dataService
            .getAttachment()
            .then((data: any) => {
                var url = URL.createObjectURL(data);
                console.log(url);
            });

    }

    getPdfUrl1(imageData: AttachmentModel) {
       
        const file = new Blob([(imageData.fileContent)], {
            type: 'application/pdf'
        });
        return file;
    }
    onBackClaimClick() {
        if (this.userService.user.userid != undefined && this.userService.user.userid != 0 && this.userService.user.userid.toString() != "") {
            if (this.mode == "referal") {
                this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });

            }
            else {
                this.router.navigate(['claim/Claims'], { skipLocationChange: true });
            }
        }
        else {
            if (this.mode == "referal") {
                this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });
            }
            else {
                this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
            }
        }
    }
}