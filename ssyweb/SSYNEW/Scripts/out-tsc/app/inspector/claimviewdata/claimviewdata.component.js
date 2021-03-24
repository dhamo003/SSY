var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InspectorDataService } from '../services/inspector-data.service';
import { EntryPoint, PFTypeOfClaim, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { UserService } from '../../UserService';
import { DomSanitizer } from '@angular/platform-browser';
var ClaimviewdataComponent = /** @class */ (function () {
    function ClaimviewdataComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.viewMetWithAnAccident = false;
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.isPrematureClaim = false;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
    }
    ClaimviewdataComponent.prototype.ngOnInit = function () {
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.transactionId, this.claimType);
    };
    ClaimviewdataComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
            }
            if (_this.claim.providentFundDetails != null) {
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                    _this.isPrematureClaim = true;
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
                        // this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.entryPoint == EntryPoint.Nominee || (_this.claim.entryPoint == EntryPoint.Agent && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == EntryPoint.CA && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == EntryPoint.Lwfc && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            //  this.getUrlOfPdf();
        });
    };
    ClaimviewdataComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ClaimviewdataComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ClaimviewdataComponent.prototype.getData = function (claim) {
        debugger;
        this.getPackages();
        this.claim = claim;
        //if (this.claim.educationDetails != null) {
        //    this.educationList = this.claim.educationDetails.educationDetailList;
        //    if (this.claim.educationDetails.educationDetailList.length > 0) {
        //        for (var i = 0; i < this.claim.educationDetails.educationDetailList.length; i++) {
        //            if (this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
        //                for (var j = 0; j < this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
        //                    let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
        //                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //                        attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //                    }
        //                    this.attachmentList.push(attachment);
        //                }
        //            }
        //        }
        //    }
        //}
        //if (this.claim.healthFamilyDetails != null) {
        //    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
        //        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
        //    }
        //    let data = this.claim.healthFamilyDetails.healthFamilyPackages;
        //    for (var i = 0; i < data.length; i++) {
        //        this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
        //    }
        //    this.selectedPackages = this.packages.filter(x => x.isChecked == true);
        //}
        //if (this.claim.providentFundDetails != null) {
        //    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
        //        this.isPrematureClaim = true;
        //    }
        //}
        //if (this.claim.deathDetails != null) {
        //    for (var j = 0; j < this.claim.deathDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.deathDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //}
        //if (this.claim.disabilityDetails != null) {
        //    for (var j = 0; j < this.claim.disabilityDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.disabilityDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //}
        //if (this.claim.attachment != null) {
        //    for (var k = 0; k < this.claim.attachment.length; k++) {
        //        let attachment = this.claim.attachment[k];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.claim.attachment[k] = attachment;
        //         this.attachmentList.push(attachment);
        //    }
        //}
        this.getBenBasicDetails(this.claim.benSno);
        console.log(this.claim);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "claimId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "claimType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "transactionId", void 0);
    ClaimviewdataComponent = __decorate([
        Component({
            selector: 'app-claimviewdata',
            templateUrl: './claimviewdata.component.html',
            styleUrls: ['./claimviewdata.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, InspectorDataService, UserService, DomSanitizer])
    ], ClaimviewdataComponent);
    return ClaimviewdataComponent;
}());
export { ClaimviewdataComponent };
//# sourceMappingURL=claimviewdata.component.js.map