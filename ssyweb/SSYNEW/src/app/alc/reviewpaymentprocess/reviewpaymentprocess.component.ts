import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants} from '../../claim/pipes/constnts.model';
import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { PaymentProcessModel, PaymentClaims, PaymentClaimList } from '../../claim/models/paymentprocess.model';
import { ClaimTypes } from '../../models/ClaimTypes.model';
import { FundRequestModel, PaymentModel } from '../../models/fundRequestProcess.model';
import { FundRequest } from '../../models/fundRequest.model';

@Component({
  selector: 'app-reviewpaymentprocess',
  templateUrl: './reviewpaymentprocess.component.html',
  styleUrls: ['./reviewpaymentprocess.component.css']
})
export class ReviewpaymentprocessComponent implements OnInit {
    private route$: Subscription;
    private paymentProcessId: any;
    mode: string;
    editmode: boolean = false;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    paymentProcessDetails: PaymentProcessModel;
    claimsData: PaymentClaimList[];
    GetFundVisible: boolean = false;
    fundRequestId: any;
    pageHeader: string;
    statusId: any;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService) {

    }

    ngOnInit() {
        
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.paymentProcessId = params["paymentProcessId"];
                this.mode = params["mode"];
                this.statusId = params["statusId"];
                if (this.statusId == ClaimStatus.PaymentProcessingbyALC) {
                    this.pageHeader = "Payment Process View";
                }
                else if (this.statusId == ClaimStatus.PaymentReleasebyTreasurer) {
                    this.pageHeader = "Payment Release View";
                }
                if (this.mode == "edit") {
                    this.editmode = true;
                }
                else
                    this.editmode = false;
            });
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getPaymentProcessById(this.paymentProcessId);
  }
    cancelclick() {
        this.router.navigate(['alc/paymentprocessedlist']);
    }
    GetRLOOfficeUserInformation(deptUserid: number, userType: any) {
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe((data: any) => {
                this.officeDetails = data;
                this.RloOfficeAddress = data.rloOffices[0];
                if (this.officeDetails.approvedClaimsAmount > this.RloOfficeAddress.balanceOfTheAmount)
                    this.AmountShortfall = (this.officeDetails.approvedClaimsAmount - this.RloOfficeAddress.balanceOfTheAmount);
                else
                    this.AmountShortfall = 0;

            });
    }

    getPaymentProcessById(paymentProcessId: any) {
        debugger;
        this.claimsData = [];
        this.dataService
            .getPaymentProcessById(paymentProcessId)
            .subscribe((data: any) => {
                debugger;
                this.paymentProcessDetails = data;
                this.claimsData = data.paymentClaimList;
                this.fundRequestId = this.paymentProcessDetails.fundRequestId;
                debugger;
                if (this.fundRequestId != null) {
                        this.GetFundVisible = true;
                }
                else
                    this.GetFundVisible = false;
            });
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
}
