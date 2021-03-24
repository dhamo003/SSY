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
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { DlcDataService } from '../services/dlc-data.service';
import { ModalDirective } from 'ngx-bootstrap';
import { UserService } from '../../UserService';
import { DomSanitizer } from '@angular/platform-browser';
var ReviewclaimsComponent = /** @class */ (function () {
    function ReviewclaimsComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.attachmentList = [];
        this.educationList = [];
        this.approvedAmountValid = true;
        this.dlcCommentsValid = true;
        this.review = {};
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.claimsTrack = {};
        this.isVisable = true;
        this.viewMetWithAnAccident = false;
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.claimExceptionDetails = "";
        this.isVisibleClaimExceptions = false;
        this.claimAmount = 0;
        this.expection = [];
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
        this.isApprovedAmountDisable = true;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
        this.isVisibleCOExceptions = false;
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = ClaimConstants[params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.claimAmount = params["claimAmount"];
            _this.mode = params["mode"];
            if (_this.mode != "pending") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                if (_this.claimType != ClaimConstants.HealthFamily && _this.claimType != ClaimConstants.PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReviewclaimsComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ReviewclaimsComponent.prototype.getClaimsByDlc = function (id, status) {
        var _this = this;
        this.dataService
            .getClaimsByDlc(id)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
                _this.review.dlcComments = _this.claim.educationDetails.dlcComments;
                _this.review.exceptionComments = _this.claim.educationDetails.exceptionComments;
                //educationClaimExceptionDetails
                if (_this.claim.educationDetails.educationClaimExceptionDetails != null) {
                    if (_this.claim.educationDetails.educationClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.educationDetails.educationClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.educationDetails.educationClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.educationDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.educationDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
                _this.review.approvedAmount = _this.claim.healthFamilyDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.healthFamilyDetails.dlcComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                //healthClaimExceptionDetails
                if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.healthFamilyDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.healthFamilyDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
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
                _this.review.dlcComments = _this.claim.disabilityDetails.dlcComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
                //disabilityClaimExceptionDetails
                if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.disabilityDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.disabilityDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
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
                _this.review.dlcComments = _this.claim.deathDetails.dlcComments;
                _this.review.exceptionComments = _this.claim.deathDetails.exceptionComments;
                //deathClaimExceptionDetails
                if (_this.claim.deathDetails.deathClaimExceptionDetails != null) {
                    if (_this.claim.deathDetails.deathClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.deathDetails.deathClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.deathDetails.deathClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.deathDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.deathDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.providentFundDetails.dlcComments;
                _this.review.exceptionComments = _this.claim.providentFundDetails.exceptionComments;
                //pfClaimExceptionDetails
                if (_this.claim.providentFundDetails.pfClaimExceptionDetails != null) {
                    if (_this.claim.providentFundDetails.pfClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.providentFundDetails.pfClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.providentFundDetails.pfClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.providentFundDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.providentFundDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    if (_this.claim.attachment[k].fileName != null) {
                        var attachment = _this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.claim.attachment[k] = attachment;
                        _this.attachmentList.push(attachment);
                    }
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
    ReviewclaimsComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ReviewclaimsComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewclaimsComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
    };
    ReviewclaimsComponent.prototype.Getimage = function (imageData) {
        var data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    };
    ReviewclaimsComponent.prototype.getUrlOfPdf = function (imageData) {
        this.dataService
            .getAttachment()
            .then(function (data) {
            var url = URL.createObjectURL(data);
            console.log(url);
        });
    };
    ReviewclaimsComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['dlc/pendingapprovalclaims']);
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflowreferral;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.dlcChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;
                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
                    if (this.review.approvedAmount != undefined || this.review.approvedAmount != 0) {
                        ////Exception Rule - 6	When Claimamount>Approved Amount
                        //if (this.claimAmount > this.review.approvedAmount) {
                        //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                        //    exp.exceptionText = "Approved Amount lessthan Claim Amount";
                        //    exp.exceptionCapturedDate = new Date();
                        //    exp.raisedBy = this.userService.user.deptUserid;
                        //    this.expection.push(exp);
                        //}
                        //Exception Rule - 7	When Claimamount<Approved Amount
                        if (this.claimAmount < this.review.approvedAmount) {
                            var exp = {};
                            exp.exceptionText = "Approved amount greater than claim amount";
                            exp.exceptionCapturedDate = new Date();
                            exp.raisedBy = this.userService.user.deptUserid;
                            this.expection.push(exp);
                        }
                    }
                }
                this.review.claimExceptionDetails = this.expection;
            }
            if (mode == "accepted") {
                debugger;
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                }
            }
            //-----------------
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
    ReviewclaimsComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "reject") {
            this.router.navigate(['dlc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "approve") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        this.approvedAmountValid = this.dlcCommentsValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
        if (this.review.dlcComments == undefined || this.review.dlcComments == "") {
            this.dlcCommentsValid = isValid = false;
        }
        if ((this.review.dlcChronologicalOrderComments == undefined || this.review.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.formatDate = function (date) {
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
    ReviewclaimsComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewclaimsComponent.prototype.viewHistory = function () {
        this.historyModal.show();
    };
    ReviewclaimsComponent.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
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
    ], ReviewclaimsComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('historyModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "historyModal", void 0);
    ReviewclaimsComponent = __decorate([
        Component({
            selector: 'app-reviewclaims',
            templateUrl: './reviewclaims.component.html',
            styleUrls: ['./reviewclaims.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService, DomSanitizer])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());
export { ReviewclaimsComponent };
//# sourceMappingURL=reviewclaims.component.js.map