import { Component, OnInit, ViewChild } from '@angular/core';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FundRequestExpensesHdr, FundRequestExpensesDtlList } from '../../models/expenses.model';
import { ClaimConstants, ClaimStatus, WorkflowTrans, LovConstants } from '../../claim/pipes/constnts.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { LovDetails } from '../../claim/models/Lov.model';

@Component({
  selector: 'app-reviewfundrequestexpenses',
  templateUrl: './reviewfundrequestexpenses.component.html',
  styleUrls: ['./reviewfundrequestexpenses.component.css']
})
export class ReviewfundrequestexpensesComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('expensesModal') public expensesModal: ModalDirective;
    private route$: Subscription;
    private fundRequestHdrId: any;
    private workflowId: any;
    editmode: boolean = false;
    fundrequestDetails: FundRequestExpensesHdr;
    expensesData: FundRequestExpensesDtlList[];
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    successMessage: string;
    sumofAmount: any = 0;
    mode: string;
    dropdownSettings = {};
    locationSettings = {};
    GetClaimVisible: boolean = false;
    claimsTrack: ClaimTrack = {} as ClaimTrack;

    expensesTypesLov: LovDetails[];
    expenseTypeValid: boolean = true;
    rowIndex = -1;
    fundRequestExpensesData: FundRequestExpensesHdr = {} as FundRequestExpensesHdr;
    expensesDetailsArray: Array<FundRequestExpensesDtlList> = [];
    expensesDetails: FundRequestExpensesDtlList = {} as FundRequestExpensesDtlList;
    fundRequestType: string = "claims";
    fundRequiredValid: boolean = true;
    commentsValid: boolean = true;
    alcComments: string;
    dlcComments: string;
    boardComments: string;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService) { }

    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestHdrId = params["fundRequestId"];
                this.mode = params["mode"];
                if (this.mode == "edit") {
                    this.editmode = true;
                }
                else
                    this.editmode = false;
                this.workflowId = params["workflowId"];
            }
        );
        this.getExpenses();
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getFundRequestedExpensesById(this.fundRequestHdrId);
    }

    getFundRequestedExpensesById(fundRequestId: any) {
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.expensesData = data.fundRequestExpensesDtlList;
                this.expensesDetailsArray = this.expensesData;
                this.alcComments = data.alcComments;
                this.dlcComments = data.dlcComments;
                this.boardComments = data.boardComments;
                this.getClaimTrackDetailsByClaimId(this.fundRequestHdrId, 0, this.workflowId);
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
    SubmitRequest() {
        debugger;
        this.showErrorMessage = false;
        
        if (this.expensesDetailsArray != null && this.expensesDetailsArray.length > 0) {
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                this.fundRequestExpensesData.updatedBy = this.userService.user.deptUserid;
                this.fundRequestExpensesData.fundRequestDate = new Date();
                this.fundRequestExpensesData.updatedDate = new Date();
                //this.fundRequestExpensesData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                this.fundRequestExpensesData.statusId = ClaimStatus.FundRequestFromALC;
                this.fundRequestExpensesData.fundRequestHdrId = this.fundRequestHdrId;
                //this.fundRequestExpensesData.boardId = this.boardId;


                let sumofExpenses: number = 0;
                for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                    sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                }
                this.fundRequestExpensesData.fundRequested = sumofExpenses;
                this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                this.fundRequestExpensesData.alcComments = this.alcComments.trim();

                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequestExpenses(this.fundRequestExpensesData)
                        .then((data: any) => {
                            if (data) {
                                this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                this.sumofAmount = 0;
                            }
                            else {
                                this.successMessage = "Invalid transaction";
                            }
                            this.successModal.show();
                        });
                }
            }
            else
                this.commentsValid = false;
        }
        else { this.showErrorMessage = true; }
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }
    okClick() {
        this.successModal.hide();
        this.cancelclick();
    }
    cancelclick() {
        this.router.navigate(['alc/fundrequestedclaims']);
    }

    removeDuplicateUsingFilter(arr) {
        let unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array
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
    getExpenses() {
        this.dataService
            .getlovDetails(LovConstants.ExpensesType)
            .subscribe((data: any) => {
                this.expensesTypesLov = data;
            });
    }
    openModel() {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    }
    addExpenseDetails1(details: FundRequestExpensesDtlList)
    {
        debugger;
        if (this.validateExpenseDetails(details)) {

            if (this.expensesData.findIndex(x => x.itemId == details.itemId) == -1 && this.rowIndex == -1) 
                {
                    details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                    this.expensesModal.hide();
                    this.expensesData.push(details);
                }
             else if (this.expensesData.findIndex(x => x.itemId == details.itemId) != -1 && this.rowIndex == -1) {
                    alert("already added please select another expense type"); return;
                }
                else {
                    if (this.rowIndex != -1) {
                        if (this.expensesData.findIndex(x => x.itemId == details.itemId) == this.rowIndex) {
                            this.expensesData.splice(this.rowIndex, 1);
                            details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                            //this.expensesData.push(details);
                            this.rowIndex = -1;
                            this.expensesModal.hide();
                        }
                        else {
                            alert("already added please select another expense type"); return;
                        }
                    }
                }



                ////details.statusId = ClaimStatus.Submitted;
                //if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == -1 && this.rowIndex == -1) {

                //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                //    this.expensesDetailsArray.push(details);
                //    this.expensesData.push(details);
                //this.expensesModal.hide();
                //}
                //else if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) != -1 && this.rowIndex == -1) {
                //    alert("already added please select another expense type"); return;
                //}
                //else {
                //    if (this.rowIndex != -1) {
                //        if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == this.rowIndex) {
                //            this.expensesDetailsArray.splice(this.rowIndex, 1);
                //            details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                //            this.expensesDetailsArray.push(details);
                //            this.expensesData.push(details);
                //            this.rowIndex = -1;
                //            this.expensesModal.hide();
                //        }
                //        else {
                //            alert("already added please select another expense type"); return;
                //        }
                //    }
                //}
                //this.expensesDetails = {} as FundRequestExpensesDtlList;

            
        }
    }
    editExpenseDetails1(details: FundRequestExpensesDtlList) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    }
    removeExpenseDetails1(details: FundRequestExpensesDtlList) {
        const index: number = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    }
    addExpenseDetails(details: FundRequestExpensesDtlList) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type"); return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == this.rowIndex) {
                        //this.expensesDetailsArray.splice(this.rowIndex, 1);
                        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                        //this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type"); return;
                    }
                }
            }
            this.expensesDetails = {} as FundRequestExpensesDtlList;
        }
    }
    editExpenseDetails(details: FundRequestExpensesDtlList) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    }
    removeExpenseDetails(details: FundRequestExpensesDtlList) {
        const index: number = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    }
    clearExpenses() {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    }
    validateExpenseDetails(details: FundRequestExpensesDtlList): boolean {
        let isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) { this.expenseTypeValid = isValid = false; }
        if (details.fundsRequired == undefined) { this.fundRequiredValid = isValid = false; }
        return isValid;
    }
}
