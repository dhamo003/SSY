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
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { WorkflowTrans, UserType, ClaimConstants } from '../../claim/pipes/constnts.model';
var ReviewFundRequestExpensesComponent = /** @class */ (function () {
    function ReviewFundRequestExpensesComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.isVisible = false;
        this.commentsValid = true;
        this.claimsTrack = {};
    }
    ReviewFundRequestExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.alcId = params["alcId"];
            _this.mode = params["mode"];
            if (_this.mode == "pending") {
                _this.isVisible = true;
            }
            _this.workflowId = params["workflowId"];
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedExpensesById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    };
    ReviewFundRequestExpensesComponent.prototype.getFundRequestedExpensesById = function (fundRequestId) {
        var _this = this;
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.fundRequestExpensesDtlList;
            //this.claimsData = data.fundClaimList;
            debugger;
            _this.expensesData.forEach(function (x) { return _this.sumofamount += x.fundsRequired; });
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.boardComments = _this.fundrequestDetails.boardComments;
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
    ReviewFundRequestExpensesComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
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
        this.fundReviewModel.fundRequestType = 2; // Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                if (type.toLowerCase() == "forward") {
                    _this.successMessage = "Fund request forwarded to CEO";
                }
                else
                    _this.successMessage = "Fund request " + type + " successfully";
                _this.successModal.show();
            });
        }
    };
    ReviewFundRequestExpensesComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewFundRequestExpensesComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/fundrequestedclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackfundrequestlist']);
        }
        else if (this.mode == "forward") {
            this.router.navigate(['dlc/forwardfundrequestlist']);
        }
    };
    ReviewFundRequestExpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
    };
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
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService])
    ], ReviewFundRequestExpensesComponent);
    return ReviewFundRequestExpensesComponent;
}());
export { ReviewFundRequestExpensesComponent };
//# sourceMappingURL=review-fund-request-expenses.component.js.map