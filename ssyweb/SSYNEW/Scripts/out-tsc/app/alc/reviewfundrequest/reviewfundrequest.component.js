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
import { ClaimConstants, ClaimStatus } from '../../claim/pipes/constnts.model';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { DomSanitizer } from '@angular/platform-browser';
var ReviewfundrequestComponent = /** @class */ (function () {
    function ReviewfundrequestComponent(router, route, dataService, userService, sanitizer) {
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
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.GetClaimVisible = false;
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.claim = {};
        this.commentsValid = true;
    }
    ReviewfundrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.mode = params["mode"];
            if (_this.mode == "edit") {
                _this.editmode = true;
                _this.selectedAll = true;
            }
            else
                _this.editmode = false;
            _this.workflowId = params["workflowId"];
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getClaimTypesMasterDetails();
        this.getFundRequestedClaimsById(this.fundRequestId);
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'claimMasterId',
            textField: 'claimName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.locationSettings = {
            singleSelection: false,
            idField: 'blockSno',
            textField: 'blockName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    ReviewfundrequestComponent.prototype.getFundRequestedClaimsById = function (fundRequestId) {
        var _this = this;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.fundClaimList;
            _this.alcComments = data.alcComments;
            _this.dlcComments = data.dlcComments;
            _this.boardComments = data.boardComments;
            _this.selectAll();
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewfundrequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
            _this.getLocationDetailsByRloId(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    ReviewfundrequestComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    };
    ReviewfundrequestComponent.prototype.checkIfAllSelected = function () {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
        // if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        // else { this.sumofAmount -= itemData.approvedAmount; }
    };
    ReviewfundrequestComponent.prototype.selectedClaims = function () {
        this.sumofAmount = 0;
        var res = this.claimsData;
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
            if (res[i].selected == true) {
                this.sumofAmount += res[i].approvedAmount;
            }
        }
    };
    ReviewfundrequestComponent.prototype.SubmitRequest = function () {
        var _this = this;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(function (x) { return x.statusId == 1; }).length > 0) {
            debugger;
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                this.claimData.updatedBy = this.userService.user.deptUserid;
                this.claimData.updatedDate = new Date();
                this.claimData.statusId = ClaimStatus.FundRequestFromALC;
                this.claimData.fundRequestClaims = this.selectedClaimList;
                this.claimData.fundRequestHdrId = this.fundRequestId;
                this.claimData.fundRequestDate = new Date();
                //this.claimData.boardId = this.boardId;
                this.claimData.aLCComments = this.alcComments.trim();
                this.claimData.fundRequested = this.sumofAmount;
                //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequesteClaims(this.claimData)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Fund request was successfully updated";
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                        }
                        _this.successModal.show();
                    });
                    //}
                }
            }
            else
                this.commentsValid = false;
        }
        else {
            this.showErrorMessage = true;
        }
    };
    ReviewfundrequestComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewfundrequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.GetClaims();
    };
    ReviewfundrequestComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    ReviewfundrequestComponent.prototype.ShowAddClaims = function () {
        this.resetModelPopup();
        this.addClaimsModal.show();
    };
    ReviewfundrequestComponent.prototype.CancelAddClaims = function () {
        this.resetModelPopup();
        this.addClaimsModal.hide();
    };
    ReviewfundrequestComponent.prototype.getLocationDetailsByRloId = function (id) {
        var _this = this;
        this.dataService
            .getLocationsMasterData(id)
            .subscribe(function (data) {
            _this.LocationList = data;
        });
    };
    ReviewfundrequestComponent.prototype.getClaimTypesMasterDetails = function () {
        var _this = this;
        this.dataService
            .getClaimTypesMasterData()
            .subscribe(function (data) {
            _this.claimTypesList = data;
        });
    };
    ReviewfundrequestComponent.prototype.GetClaims = function () {
        debugger;
        if (this.fundrequestDetails.boardId > 0) {
            this.boardIdValid = true;
            var claimMaster = void 0;
            var locationId = void 0;
            if (this.claimMasterIds.length > 0) {
                claimMaster = this.claimMasterIds.map(function (e) {
                    return e.claimMasterId;
                }).join(', ');
            }
            else {
                claimMaster = 0;
            }
            if (this.locationsIds.length > 0) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ');
            }
            else {
                locationId = 0;
            }
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.fundrequestDetails.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    };
    ReviewfundrequestComponent.prototype.getAllApprovalClaims = function (deptUserid, type, boardId, claimTypeIds, locationsIds) {
        var _this = this;
        this.newclaimsData = [];
        this.newselectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe(function (data) {
            _this.newclaimsData = data;
            _this.GetClaimVisible = true;
        });
    };
    ReviewfundrequestComponent.prototype.newselectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.newclaimsData.length; i++) {
            this.newclaimsData[i].selected = this.newselectedAll;
        }
    };
    ReviewfundrequestComponent.prototype.newcheckIfAllSelected = function () {
        this.showErrorMessage = false;
        this.newselectedAll = this.newclaimsData.every(function (item) {
            return item.selected == true;
        });
    };
    ReviewfundrequestComponent.prototype.AddNewClaims = function () {
        debugger;
        if (this.newclaimsData != null && this.newclaimsData.length > 0) {
            var res = this.newclaimsData.filter(function (x) { return x.selected == true; });
            if (res != null && res.length > 0) {
                this.addclaimsData = [];
                for (var i = 0; i < res.length; i++) {
                    this.addclaimsData.push(res[i]);
                    this.claimsData.push(res[i]);
                }
                this.claimsData = this.claimsData.filter(function (el, i, a) { return i === a.indexOf(el); });
                this.resetModelPopup();
                this.addClaimsModal.hide();
            }
        }
    };
    ReviewfundrequestComponent.prototype.removeDuplicateUsingFilter = function (arr) {
        var unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array;
    };
    ReviewfundrequestComponent.prototype.resetModelPopup = function () {
        this.locationSettings = {};
        this.dropdownSettings = {};
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.GetClaimVisible = false;
    };
    ReviewfundrequestComponent.prototype.formatDate = function (date) {
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
    ReviewfundrequestComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewfundrequestComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewfundrequestComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, ClaimConstants[this.claimType]);
    };
    ReviewfundrequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
    ], ReviewfundrequestComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('addClaimsModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewfundrequestComponent.prototype, "addClaimsModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewfundrequestComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('child'),
        __metadata("design:type", ClaimviewdataComponent)
    ], ReviewfundrequestComponent.prototype, "child", void 0);
    ReviewfundrequestComponent = __decorate([
        Component({
            selector: 'app-reviewfundrequest',
            templateUrl: './reviewfundrequest.component.html',
            styleUrls: ['./reviewfundrequest.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService, DomSanitizer])
    ], ReviewfundrequestComponent);
    return ReviewfundrequestComponent;
}());
export { ReviewfundrequestComponent };
//# sourceMappingURL=reviewfundrequest.component.js.map