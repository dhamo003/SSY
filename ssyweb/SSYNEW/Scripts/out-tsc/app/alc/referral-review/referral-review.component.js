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
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
var ReferralReviewComponent = /** @class */ (function () {
    function ReferralReviewComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.claimsTrack = {};
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.viewMetWithAnAccident = false;
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
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
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReferralReviewComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
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
            if (_this.claim.educationDetails != null) {
                _this.educationList = _this.claim.educationDetails.educationDetailList;
                if (_this.claim.educationDetails.educationDetailList.length > 0) {
                    for (var i = 0; i < _this.claim.educationDetails.educationDetailList.length; i++) {
                        if (_this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                            for (var j = 0; j < _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                var attachment = _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                    attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                }
                                _this.attachmentList.push(attachment);
                            }
                        }
                    }
                }
                _this.review.approvedAmount = _this.claim.educationDetails.approvedAmount;
                _this.review.alcComments = _this.claim.educationDetails.alcComments;
                _this.review.exceptionComments = _this.claim.educationDetails.exceptionComments;
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                _this.review.approvedAmount = _this.claim.healthFamilyDetails.approvedAmount;
                _this.review.alcComments = _this.claim.healthFamilyDetails.alcComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
            }
            if (_this.claim.disabilityDetails != null) {
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                _this.review.approvedAmount = _this.claim.disabilityDetails.approvedAmount;
                _this.review.alcComments = _this.claim.disabilityDetails.alcComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
            }
            if (_this.claim.deathDetails != null) {
                for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.alcComments = _this.claim.deathDetails.alcComments;
                _this.review.exceptionComments = _this.claim.deathDetails.exceptionComments;
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.alcComments = _this.claim.providentFundDetails.alcComments;
                _this.review.exceptionComments = _this.claim.providentFundDetails.exceptionComments;
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    var attachment = _this.claim.attachment[k];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.claim.attachment[k] = attachment;
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.entryPoint == EntryPoint.Nominee || (_this.claim.entryPoint == EntryPoint.Agent && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == EntryPoint.CA && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == EntryPoint.Lwfc && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
        });
    };
    ReferralReviewComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
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
    ReferralReviewComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReferralReviewComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflowreferral;
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
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReferralReviewComponent.prototype.cancelclick = function () {
        if (this.mode == "referal") {
            this.router.navigate(['alc/referclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/referralsendback']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/referralreject']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/referralapproval']);
        }
    };
    ReferralReviewComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        return isValid;
    };
    ReferralReviewComponent.prototype.getApprovalPremission = function (id, type) {
        this.dataService
            .GetApprovalPremission(id, type)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ReferralReviewComponent.prototype.formatDate = function (date) {
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
    ReferralReviewComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
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
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ReferralReviewComponent.prototype, "attachModel", void 0);
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
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService, DomSanitizer])
    ], ReferralReviewComponent);
    return ReferralReviewComponent;
}());
export { ReferralReviewComponent };
//# sourceMappingURL=referral-review.component.js.map