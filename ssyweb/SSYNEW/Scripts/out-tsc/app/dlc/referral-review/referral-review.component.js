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
import { Router, ActivatedRoute } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { ClaimConstants, WorkflowTrans, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
var ReferralReviewComponent = /** @class */ (function () {
    function ReferralReviewComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsHistoryData = [];
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isShowClaimsHistory = false;
        this.isApprovedAmountDisable = true;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
    }
    ReferralReviewComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReferralReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = ClaimConstants[params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            if (_this.mode != "referal") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                if (_this.claimType != ClaimConstants.HealthFamily && _this.claimType != ClaimConstants.PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
        });
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReferralReviewComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralReviewComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            if (_this.claim.entryPoint == EntryPoint.Nominee || (_this.claim.entryPoint == EntryPoint.Agent && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == EntryPoint.CA && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == EntryPoint.Lwfc && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
        });
    };
    ReferralReviewComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ReferralReviewComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.saveClaim = function (status, mode) {
        var _this = this;
        debugger;
        this.review.benDeathStatus = false;
        this.review.statusId = status;
        this.review.transactionId = this.tranctionId;
        this.review.claimType = this.claimType;
        this.review.wfId = WorkflowTrans.workflow;
        this.review.userId = this.userService.user.deptUserid;
        if (mode == "approved") {
            debugger;
            if (this.claim.deathDetails != null) {
                this.review.benDeathStatus = true;
            }
        }
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.review)
                .then(function (data) {
                _this.successMessage = "Claim updated successfully";
                _this.successModal.show();
            });
        }
    };
    ReferralReviewComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.validateClaim = function () {
        var isValid = true;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
            this.approvedAmountValid = isValid = false;
        }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        return isValid;
    };
    ReferralReviewComponent.prototype.viewHistory = function () {
        this.historyModal.show();
    };
    ReferralReviewComponent.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var _this = this;
        debugger;
        this.dataService
            .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType)
            .subscribe(function (data) {
            _this.claimsHistoryData = data;
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReferralReviewComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('historyModal'),
        __metadata("design:type", ModalDirective)
    ], ReferralReviewComponent.prototype, "historyModal", void 0);
    ReferralReviewComponent = __decorate([
        Component({
            selector: 'app-referral-review',
            templateUrl: './referral-review.component.html',
            styleUrls: ['./referral-review.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService])
    ], ReferralReviewComponent);
    return ReferralReviewComponent;
}());
export { ReferralReviewComponent };
//# sourceMappingURL=referral-review.component.js.map