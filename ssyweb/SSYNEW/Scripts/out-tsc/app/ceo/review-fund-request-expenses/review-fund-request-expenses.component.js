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
import { CeoDataService } from '../services/ceo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../UserService';
import { UserType, ClaimConstants, WorkflowTrans } from '../../claim/pipes/constnts.model';
var ReviewFundRequestExpensesComponent = /** @class */ (function () {
    function ReviewFundRequestExpensesComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.editmode = false;
        this.claimData = {};
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.selectedAll = false;
        this.sumofAmount = 0;
        this.selectedClaimList = [];
        this.fundReviewModel = {};
        this.commentsValid = true;
        this.isVisible = false;
        this.claimsTrack = {};
    }
    ReviewFundRequestExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.mode = params["mode"];
            _this.alcId = params["alcId"];
            _this.routeMode = params["routeMode"];
            _this.allClaimsRequested = params["allClaimsRequested"];
            debugger;
            if (_this.mode == "edit") {
                _this.editmode = true;
                _this.selectedAll = true;
                _this.isVisible = true;
            }
            else if (_this.mode == "view") {
                _this.isVisible = false;
            }
            else {
                _this.editmode = false;
                _this.isVisible = false;
            }
            _this.workflowId = params["workflowId"];
            //this.editmode = true;
        });
        debugger;
        this.getFundRequestedExpensesById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    };
    ReviewFundRequestExpensesComponent.prototype.getFundRequestedExpensesById = function (fundRequestId) {
        var _this = this;
        this.sumofAmount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.fundRequestExpensesDtlList;
            debugger;
            _this.expensesData.forEach(function (x) { return _this.sumofAmount += x.fundsRequired; });
            //if (this.editmode)
            //this.selectAll();
            _this.boardComments = _this.fundrequestDetails.boardComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewFundRequestExpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    ReviewFundRequestExpensesComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewFundRequestExpensesComponent.prototype.selectAll = function () {
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
    };
    ReviewFundRequestExpensesComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.expensesData.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    ReviewFundRequestExpensesComponent.prototype.selectedClaims = function () {
        debugger;
        //var res = this.expensesData.filter(x => x.selected == true);;
        //this.selectedClaimList = [];
        //for (var i = 0; i < res.length; i++) {
        //    let claimtypeId = ClaimConstants[res[i].claimType];
        //    this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
        //}
    };
    ReviewFundRequestExpensesComponent.prototype.SubmitRequest = function (Id) {
        var _this = this;
        debugger;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(function (x) { return x.statusId == 1; }).length > 0) {
            //this.claimData.updatedBy = this.userService.user.deptUserid;
            //this.claimData.updatedDate = new Date();
            //this.claimData.statusId = Id;
            this.claimData.fundRequestHdrId = this.fundRequestId;
            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveFundRequesteClaims(this.claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Fund request updated successfully";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
                //}
            }
        }
        else {
            this.showErrorMessage = true;
        }
    };
    ReviewFundRequestExpensesComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
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
        this.fundReviewModel.fundRequestType = 2; // Expenses
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateWorkFlowStatus(this.fundReviewModel)
                .then(function (data) {
                if (data) {
                    _this.successMessage = "Fund request " + type + " successfully";
                }
                else {
                    _this.successMessage = "Invalid transaction";
                }
                _this.successModal.show();
            });
        }
        //}
        //else { this.showErrorMessage = true; }
    };
    ReviewFundRequestExpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
    };
    ReviewFundRequestExpensesComponent.prototype.cancelclick = function () {
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
    };
    //cancelclick() {
    //    this.router.navigate(['ceo/fundrequestlist']);
    //}
    ReviewFundRequestExpensesComponent.prototype.formatDate = function (date) {
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
    ReviewFundRequestExpensesComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewFundRequestExpensesComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewFundRequestExpensesComponent.prototype, "successModal", void 0);
    ReviewFundRequestExpensesComponent = __decorate([
        Component({
            selector: 'app-review-fund-request-expenses',
            templateUrl: './review-fund-request-expenses.component.html',
            styleUrls: ['./review-fund-request-expenses.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, CeoDataService, UserService])
    ], ReviewFundRequestExpensesComponent);
    return ReviewFundRequestExpensesComponent;
}());
export { ReviewFundRequestExpensesComponent };
//# sourceMappingURL=review-fund-request-expenses.component.js.map