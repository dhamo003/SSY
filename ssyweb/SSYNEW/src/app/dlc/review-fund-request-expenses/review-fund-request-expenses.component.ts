import { Component, OnInit, ViewChild } from '@angular/core';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FundClaimList, FundRequestDetailsModel } from '../../models/fundRequestedClaimsDetails.model';
import { ReviewModel } from '../../models/review.model';
import { WorkflowTrans, UserType, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { FundRequestExpensesHdr, FundRequestExpensesDtlList } from '../../models/expenses.model';

@Component({
  selector: 'app-review-fund-request-expenses',
  templateUrl: './review-fund-request-expenses.component.html',
  styleUrls: ['./review-fund-request-expenses.component.css']
})
export class ReviewFundRequestExpensesComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    private route$: Subscription;
    private fundRequestId: any;
    private workflowId: any;
    mode: string;
    fundrequestDetails: FundRequestExpensesHdr;
    expensesData: FundRequestExpensesDtlList[];
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    successMessage: string;
    dlcComments: string;
    fundReviewModel: ReviewModel = {} as ReviewModel;
    alcId: any;
    isVisible: boolean = false;
    sumofamount: number;
    commentsValid: boolean = true;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    alcComments: string;
    boardComments: string;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: DlcDataService, private userService: UserService) { }

    ngOnInit() {
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestId = params["fundRequestId"];
                this.alcId = params["alcId"];
                this.mode = params["mode"];
                if (this.mode == "pending") {
                    this.isVisible = true;
                }
                this.workflowId = params["workflowId"];
            }
        );

        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedExpensesById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    }


    getFundRequestedExpensesById(fundRequestId: any) {
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.expensesData = data.fundRequestExpensesDtlList;
                //this.claimsData = data.fundClaimList;
                debugger;
                this.expensesData.forEach(x => this.sumofamount += x.fundsRequired)
                this.dlcComments = this.fundrequestDetails.dlcComments;
                this.alcComments = this.fundrequestDetails.alcComments;
                this.boardComments = this.fundrequestDetails.boardComments;
                this.getClaimTrackDetailsByClaimId(this.fundRequestId, 0, this.workflowId);
            });
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

    updateFundRequest(id: any, type: string) {

        if (this.dlcComments == undefined || this.dlcComments == "") {
            this.commentsValid = false;
            return;
        }

        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.dlcComments = this.dlcComments;
        this.fundReviewModel.fundRequestType = 2;// Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then((data: any) => {
                    if (type.toLowerCase() == "forward") {
                        this.successMessage = "Fund request forwarded to CEO";
                    }
                    else
                        this.successMessage = "Fund request " + type + " successfully";
                    this.successModal.show();
                });
        }
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }
    cancelclick() {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/fundrequestedclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackfundrequestlist']);
        }
        else if (this.mode == "forward") {
            this.router.navigate(['dlc/forwardfundrequestlist']);
        }
    }
    okClick() {
        this.successModal.hide();
        this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
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
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
}
