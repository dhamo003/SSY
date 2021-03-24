var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimConstants, ClaimStatus, LovConstants } from '../../claim/pipes/constnts.model';
var ReviewfundrequestexpensesComponent = /** @class */ (function () {
    function ReviewfundrequestexpensesComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.editmode = false;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.sumofAmount = 0;
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.GetClaimVisible = false;
        this.claimsTrack = {};
        this.expenseTypeValid = true;
        this.rowIndex = -1;
        this.fundRequestExpensesData = {};
        this.expensesDetailsArray = [];
        this.expensesDetails = {};
        this.fundRequestType = "claims";
        this.fundRequiredValid = true;
        this.commentsValid = true;
    }
    ReviewfundrequestexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestHdrId = params["fundRequestId"];
            _this.mode = params["mode"];
            if (_this.mode == "edit") {
                _this.editmode = true;
            }
            else
                _this.editmode = false;
            _this.workflowId = params["workflowId"];
        });
        this.getExpenses();
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getFundRequestedExpensesById(this.fundRequestHdrId);
    };
    ReviewfundrequestexpensesComponent.prototype.getFundRequestedExpensesById = function (fundRequestId) {
        var _this = this;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.fundRequestExpensesDtlList;
            _this.expensesDetailsArray = _this.expensesData;
            _this.alcComments = data.alcComments;
            _this.dlcComments = data.dlcComments;
            _this.boardComments = data.boardComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestHdrId, 0, _this.workflowId);
        });
    };
    ReviewfundrequestexpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            if (_this.officeDetails.approvedClaimsAmount > _this.RloOfficeAddress.balanceOfTheAmount)
                _this.AmountShortfall = (_this.officeDetails.approvedClaimsAmount - _this.RloOfficeAddress.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
        });
    };
    ReviewfundrequestexpensesComponent.prototype.SubmitRequest = function () {
        var _this = this;
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
                var sumofExpenses = 0;
                for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                    sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                }
                this.fundRequestExpensesData.fundRequested = sumofExpenses;
                this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                this.fundRequestExpensesData.alcComments = this.alcComments.trim();
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequestExpenses(this.fundRequestExpensesData)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                            _this.sumofAmount = 0;
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                        }
                        _this.successModal.show();
                    });
                }
            }
            else
                this.commentsValid = false;
        }
        else {
            this.showErrorMessage = true;
        }
    };
    ReviewfundrequestexpensesComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewfundrequestexpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
    };
    ReviewfundrequestexpensesComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    ReviewfundrequestexpensesComponent.prototype.removeDuplicateUsingFilter = function (arr) {
        var unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array;
    };
    ReviewfundrequestexpensesComponent.prototype.formatDate = function (date) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        var dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    };
    ReviewfundrequestexpensesComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewfundrequestexpensesComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewfundrequestexpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ExpensesType)
            .subscribe(function (data) {
            _this.expensesTypesLov = data;
        });
    };
    ReviewfundrequestexpensesComponent.prototype.openModel = function () {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.addExpenseDetails1 = function (details) {
        debugger;
        if (this.validateExpenseDetails(details)) {
            if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesModal.hide();
                this.expensesData.push(details);
            }
            else if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        this.expensesData.splice(this.rowIndex, 1);
                        details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                        //this.expensesData.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
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
    };
    ReviewfundrequestexpensesComponent.prototype.editExpenseDetails1 = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.removeExpenseDetails1 = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
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
    };
    ReviewfundrequestexpensesComponent.prototype.addExpenseDetails = function (details) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        //this.expensesDetailsArray.splice(this.rowIndex, 1);
                        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                        //this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
                    }
                }
            }
            this.expensesDetails = {};
        }
    };
    ReviewfundrequestexpensesComponent.prototype.editExpenseDetails = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.removeExpenseDetails = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
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
    };
    ReviewfundrequestexpensesComponent.prototype.clearExpenses = function () {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    };
    ReviewfundrequestexpensesComponent.prototype.validateExpenseDetails = function (details) {
        var isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) {
            this.expenseTypeValid = isValid = false;
        }
        if (details.fundsRequired == undefined) {
            this.fundRequiredValid = isValid = false;
        }
        return isValid;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewfundrequestexpensesComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewfundrequestexpensesComponent.prototype, "expensesModal", void 0);
    ReviewfundrequestexpensesComponent = __decorate([
        Component({
            selector: 'app-reviewfundrequestexpenses',
            templateUrl: './reviewfundrequestexpenses.component.html',
            styleUrls: ['./reviewfundrequestexpenses.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService])
    ], ReviewfundrequestexpensesComponent);
    return ReviewfundrequestexpensesComponent;
}());
export { ReviewfundrequestexpensesComponent };
//# sourceMappingURL=reviewfundrequestexpenses.component.js.map