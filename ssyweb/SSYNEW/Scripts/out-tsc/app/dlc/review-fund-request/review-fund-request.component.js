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
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { DomSanitizer } from '@angular/platform-browser';
var ReviewFundRequestComponent = /** @class */ (function () {
    function ReviewFundRequestComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.isVisible = false;
        this.commentsValid = true;
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.claim = {};
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
    }
    ReviewFundRequestComponent.prototype.ngOnInit = function () {
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
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedClaimsById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    };
    ReviewFundRequestComponent.prototype.getFundRequestedClaimsById = function (fundRequestId) {
        var _this = this;
        this.sumofamount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.fundClaimList;
            _this.claimsData.forEach(function (x) { return _this.sumofamount += x.approvedAmount; });
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.boardComments = _this.fundrequestDetails.boardComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewFundRequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    ReviewFundRequestComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
        debugger;
        if (this.dlcComments == undefined || this.dlcComments == "") {
            this.commentsValid = false;
            // return;
        }
        if ((this.dlcChronologicalOrderComments == undefined || this.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = false;
            // return;
        }
        if (!this.commentsValid || !this.coexceptionCommentsValid) {
            return;
        }
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.dlcComments = this.dlcComments;
        this.fundReviewModel.dlcChronologicalOrderComments = this.dlcChronologicalOrderComments;
        this.fundReviewModel.fundRequestType = 1; // Claims
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
    ReviewFundRequestComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewFundRequestComponent.prototype.cancelclick = function () {
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
    ReviewFundRequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
    };
    ReviewFundRequestComponent.prototype.formatDate = function (date) {
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
    ReviewFundRequestComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewFundRequestComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewFundRequestComponent.prototype.viewClaimInfo = function (claim) {
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, ClaimConstants[this.claimType]);
    };
    ReviewFundRequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            _this.child.getData(_this.claim);
            _this.attachModel.show();
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
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.deathDetails != null) {
                debugger;
                for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
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
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewFundRequestComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewFundRequestComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('child'),
        __metadata("design:type", ClaimviewdataComponent)
    ], ReviewFundRequestComponent.prototype, "child", void 0);
    ReviewFundRequestComponent = __decorate([
        Component({
            selector: 'app-review-fund-request',
            templateUrl: './review-fund-request.component.html',
            styleUrls: ['./review-fund-request.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService, DomSanitizer])
    ], ReviewFundRequestComponent);
    return ReviewFundRequestComponent;
}());
export { ReviewFundRequestComponent };
//# sourceMappingURL=review-fund-request.component.js.map