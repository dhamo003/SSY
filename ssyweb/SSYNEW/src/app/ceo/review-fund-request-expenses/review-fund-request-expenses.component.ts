import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { FundRequestModel, PaymentModel } from '../../models/fundRequestProcess.model';
import { BoardMasterDetails } from '../../models/boardDetails.model';
import { WorkFlowMaster } from '../../models/workerTypeDetails.model';
import { LocationsMaster } from '../../models/locationsDetails.model';
import { FundClaimList, FundRequestDetailsModel } from '../../models/fundRequestedClaimsDetails.model';
import { Subscription } from 'rxjs';
import { CeoDataService } from '../services/ceo-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../UserService';
import { UserType, ClaimConstants, ClaimStatus, WorkflowTrans } from '../../claim/pipes/constnts.model';
import { ReviewModel } from '../../models/review.model';
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
    editmode: boolean = false;
    fundrequestDetails: FundRequestExpensesHdr;
    expensesData: FundRequestExpensesDtlList[];
    claimData: FundRequestExpensesDtlList = {} as FundRequestExpensesDtlList;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    selectedAll: boolean = false;
    successMessage: string;
    sumofAmount: any = 0;
    mode: string;
    selectedClaimList: Array<PaymentModel> = [];
    boardComments: any;
    fundReviewModel: ReviewModel = {} as ReviewModel;
    alcId: any;
    routeMode: string;
    commentsValid: boolean = true;
    isVisible: boolean = false;
    allClaimsRequested: any;

    claimsTrack: ClaimTrack = {} as ClaimTrack;
    dlcComments: string;
    alcComments: string;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: CeoDataService, private userService: UserService) { }

    ngOnInit() {

        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestId = params["fundRequestId"];
                this.mode = params["mode"];
                this.alcId = params["alcId"];
                this.routeMode = params["routeMode"];
                this.allClaimsRequested = params["allClaimsRequested"];
                debugger;
                if (this.mode == "edit") {
                    this.editmode = true;
                    this.selectedAll = true;
                    this.isVisible = true;
                }
                else if (this.mode == "view") {
                    this.isVisible = false;
                }
                else {
                    this.editmode = false;
                    this.isVisible = false;
                }
                this.workflowId = params["workflowId"];
                //this.editmode = true;
            }
        );
        debugger;
        this.getFundRequestedExpensesById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    }


    getFundRequestedExpensesById(fundRequestId: any) {
        this.sumofAmount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.expensesData = data.fundRequestExpensesDtlList;
                debugger;
                this.expensesData.forEach(x => this.sumofAmount += x.fundsRequired)
                //if (this.editmode)
                //this.selectAll();
                this.boardComments = this.fundrequestDetails.boardComments;
                this.alcComments = this.fundrequestDetails.alcComments;
                this.dlcComments = this.fundrequestDetails.dlcComments;
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
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }

    selectAll() {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        //for (var i = 0; i < this.expensesData.length; i++) {
        //    debugger;
        //    if (this.expensesData[i].paymentStatus == 0)
        //        this.expensesData[i].selected = this.selectedAll;
        //    else
        //        this.expensesData[i].selected = false;
        //    if (this.selectedAll && this.expensesData[i].paymentStatus == 0) {
        //        this.sumofAmount += this.expensesData[i].approvedAmount;
        //    }
        //}
    }
    checkIfAllSelected(itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.expensesData.every(function (item: any) {
            return item.selected == true;
        })

        if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        else { this.sumofAmount -= itemData.approvedAmount; }
    }
    selectedClaims() {
        debugger;
        //var res = this.expensesData.filter(x => x.selected == true);;
        //this.selectedClaimList = [];
        //for (var i = 0; i < res.length; i++) {
        //    let claimtypeId = ClaimConstants[res[i].claimType];
        //    this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
        //}
    }
    SubmitRequest(Id: any) {
        debugger;
        this.selectedClaims();
        this.showErrorMessage = false;

        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(x => x.statusId == 1).length > 0) {
            //this.claimData.updatedBy = this.userService.user.deptUserid;
            //this.claimData.updatedDate = new Date();
            //this.claimData.statusId = Id;

            this.claimData.fundRequestHdrId = this.fundRequestId;

            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveFundRequesteClaims(this.claimData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Fund request updated successfully";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
                //}
            }
        }
        else { this.showErrorMessage = true; }
    }


    updateFundRequest(id: any, type: string) {

        if (this.boardComments == undefined || this.boardComments == "") {
            this.commentsValid = false;
            return;
        }
        //this.selectedClaims();
        //this.showErrorMessage = false;
        //if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(x => x.statusId == 1).length > 0) {
            this.fundReviewModel.statusId = id;
            this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
            this.fundReviewModel.claimType = null;
            this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
            this.fundReviewModel.userId = this.userService.user.deptUserid;
            this.fundReviewModel.boardComments = this.boardComments;
            //this.fundReviewModel.partialFundRequestClaims = this.selectedClaimList;
            //this.fundReviewModel.partialFundRequestClaimsAmount = this.sumofAmount;
            this.fundReviewModel.approvedAmount = this.sumofAmount;
        this.fundReviewModel.fundRequestType = 2;// Expenses
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateWorkFlowStatus(this.fundReviewModel)
                .then((data: any) => {
                    if (data) {
                        this.successMessage = "Fund request " + type + " successfully";
                    }
                    else {
                        this.successMessage = "Invalid transaction";
                    }
                    this.successModal.show();
                });
        }
        //}
        //else { this.showErrorMessage = true; }
    }

    okClick() {
        this.successModal.hide();
        this.cancelclick();

    }
    cancelclick() {
        if (this.routeMode == "forward") {
            this.router.navigate(['ceo/fundrequestlist']);
        }
        else if (this.routeMode == "sendback") {
            this.router.navigate(['ceo/sendbackfundrequestlist']);
        }
        else if (this.routeMode == "approved") {
            this.router.navigate(['ceo/approvedfundrequestlist']);
        }
        else if (this.routeMode == "rejected") {
            this.router.navigate(['ceo/rejectedfundrequestlist']);
        }
    }
    //cancelclick() {
    //    this.router.navigate(['ceo/fundrequestlist']);
    //}

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
