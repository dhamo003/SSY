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
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimviewdataComponent } from 'src/app/alc/claimviewdata/claimviewdata.component';
var FundRequestComponent = /** @class */ (function () {
    function FundRequestComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
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
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
        this.isVisibleCOExceptions = false;
        this.attachmentList = [];
        this.educationList = [];
        this.claim = {};
    }
    FundRequestComponent.prototype.ngOnInit = function () {
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
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
            //this.editmode = true;
        });
        debugger;
        this.getFundRequestedClaimsById(this.fundRequestId, this.userService.user.userTpe);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    };
    FundRequestComponent.prototype.getFundRequestedClaimsById = function (fundRequestId, userType) {
        var _this = this;
        this.sumofAmount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId, userType)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.fundClaimList;
            _this.claimsData.forEach(function (x) { return _this.sumofAmount += x.approvedAmount; });
            //if (this.editmode)
            _this.selectAll();
            _this.boardComments = _this.fundrequestDetails.boardComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            //Chronological Order Exception Details
            if (_this.fundrequestDetails.dlcChronologicalOrderComments != null) {
                _this.claimCOExceptionDetails = _this.fundrequestDetails.dlcChronologicalOrderComments;
                _this.isVisibleCOExceptions = true;
            }
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    FundRequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    FundRequestComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    FundRequestComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            debugger;
            if (this.claimsData[i].paymentStatus == 0)
                this.claimsData[i].selected = this.selectedAll;
            else
                this.claimsData[i].selected = false;
            if (this.selectedAll && this.claimsData[i].paymentStatus == 0) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    };
    FundRequestComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    FundRequestComponent.prototype.selectedClaims = function () {
        debugger;
        var res = this.claimsData.filter(function (x) { return x.selected == true; });
        ;
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
        }
    };
    FundRequestComponent.prototype.SubmitRequest = function (Id) {
        var _this = this;
        debugger;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(function (x) { return x.statusId == 1; }).length > 0) {
            this.claimData.updatedBy = this.userService.user.deptUserid;
            this.claimData.updatedDate = new Date();
            this.claimData.statusId = Id;
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
    FundRequestComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
        if (this.boardComments == undefined || this.boardComments == "") {
            this.commentsValid = false;
            // return;
        }
        if ((this.ceoChronologicalOrderComments == undefined || this.ceoChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = false;
            // return;
        }
        if (!this.commentsValid || !this.coexceptionCommentsValid) {
            return;
        }
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(function (x) { return x.statusId == 1; }).length > 0) {
            this.fundReviewModel.statusId = id;
            this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
            this.fundReviewModel.claimType = null;
            this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
            this.fundReviewModel.userId = this.userService.user.deptUserid;
            this.fundReviewModel.boardComments = this.boardComments;
            this.fundReviewModel.ceoChronologicalOrderComments = this.ceoChronologicalOrderComments;
            this.fundReviewModel.partialFundRequestClaims = this.selectedClaimList;
            this.fundReviewModel.partialFundRequestClaimsAmount = this.sumofAmount;
            this.fundReviewModel.fundRequestType = 1; // Claims
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
        }
        else {
            this.showErrorMessage = true;
        }
    };
    FundRequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
    };
    FundRequestComponent.prototype.cancelclick = function () {
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
    FundRequestComponent.prototype.formatDate = function (date) {
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
    FundRequestComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    FundRequestComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    FundRequestComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, ClaimConstants[this.claimType]);
    };
    FundRequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
    ], FundRequestComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], FundRequestComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('child'),
        __metadata("design:type", ClaimviewdataComponent)
    ], FundRequestComponent.prototype, "child", void 0);
    FundRequestComponent = __decorate([
        Component({
            selector: 'app-fund-request',
            templateUrl: './fund-request.component.html',
            styleUrls: ['./fund-request.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, CeoDataService, UserService, DomSanitizer])
    ], FundRequestComponent);
    return FundRequestComponent;
}());
export { FundRequestComponent };
//# sourceMappingURL=fund-request.component.js.map