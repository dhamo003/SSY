import { Component, OnInit, ViewChild } from '@angular/core';
import { RloBankDetails } from '../../models/rlobankdetails.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../UserService';
import { TresurerDataService } from '../services/tresurer-data.service';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
//import { PaymentProcessModel, PaymentClaims, PaymentClaimList } from '../../claim/models/paymentprocess.model';
import { PaymentReleaseDetailsModel, PaymentClaimList } from '../../models/paymentReleaseDetails.model';
import { ClaimStatus, ClaimConstants, UserType } from '../../claim/pipes/constnts.model';
import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';
import { ExcelService } from '../../services/excel.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-reviewpaymentrelease',
    templateUrl: './reviewpaymentrelease.component.html',
    styleUrls: ['./reviewpaymentrelease.component.css']
})
export class ReviewpaymentreleaseComponent implements OnInit {

    private route$: Subscription;
    releaseId: any;
    userId: any;
    processId: any;
    claimDetails: Claims[];
    RloOfficeAddress: RloOffice;
    officeDetails: RloOfficeInformation;
    paymentReleaseDetails: PaymentReleaseDetailsModel;
    claimsData: PaymentClaimList[];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: TresurerDataService, private userService: UserService, private excelService: ExcelService) { }

    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.releaseId = params["releaseId"];
                this.userId = params["userId"];
                this.processId = params["processId"];
            }
        );
        this.getPaymentReleaseById(this.releaseId);
        if (this.processId != null)
            this.GetRLOOfficeUserInformation(this.processId);
    }
    getPaymentReleaseById(releaseId: any) {
        debugger;
        this.claimsData = [];
        this.dataService
            .getPaymentReleaseById(releaseId)
            .subscribe((data: any) => {
                debugger;
                this.paymentReleaseDetails = data;
                this.claimsData = data.paymentClaimList;
                    
            });
    }
    GetRLOOfficeUserInformation(processId: any) {
        this.dataService
            .getRLOUserInfoByProcessingId(this.processId)
            .subscribe((data: any) => {
                this.officeDetails = data;
                this.RloOfficeAddress = data.rloOffices[0];

            });
    }
    cancelclick() {
        debugger;
        this.router.navigate(['tresurer/paymentreleasedlist']);
    }
    downloadNeftDocument() {
        let downloadClaimDetails = this.claimDetails.filter(x => x.selected == true);
        if (downloadClaimDetails != null && downloadClaimDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadClaimDetails, "Neft Document");
        }
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }

}
