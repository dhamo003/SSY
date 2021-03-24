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
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { ModalDirective } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimConstants, PFTypeOfClaim } from '../pipes/constnts.model';
var ClaimViewComponent = /** @class */ (function () {
    function ClaimViewComponent(router, route, dataService, userService, sanitizer) {
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
        //this.route$ = this.route.params.subscribe(
        //    (params: Params) => {
        //        this.claimId = params["claimId"];
        //        this.claimType = ClaimConstants.Education;
        //        this.tranctionId = params["claimRefernceNo"]
        //    }
        //);
    }
    ClaimViewComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ClaimViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = params["tranctionType"];
            _this.transactionId = params["transactionId"];
            _this.mode = params["mode"];
            _this.workflowId = params["workflowId"];
        });
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.transactionId, ClaimConstants[this.claimType]);
    };
    ClaimViewComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            debugger;
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
            if (_this.claim.disabilityDetails != null) {
                if (_this.claim.disabilityDetails.attachmentDTOList != null) {
                    for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                        var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.deathDetails != null) {
                if (_this.claim.deathDetails.attachmentDTOList != null) {
                    for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                        var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.providentFundDetails != null) {
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                    _this.isPrematureClaim = true;
                }
            }
            if (_this.claim.attachment != null) {
                debugger;
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
            _this.getBenBasicDetails(_this.claim.benSno);
            _this.getClaimTrackDetailsByClaimId(_this.transactionId, ClaimConstants[_this.claimType], _this.workflowId);
            console.log(_this.claim);
            //  this.getUrlOfPdf();
        });
    };
    ClaimViewComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ClaimViewComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        debugger;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ClaimViewComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
    };
    ClaimViewComponent.prototype.Getimage = function (imageData) {
        var data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    };
    ClaimViewComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ClaimViewComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ClaimViewComponent.prototype.formatDate = function (date) {
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
    ClaimViewComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ClaimViewComponent.prototype.getUrlOfPdf = function (imageData) {
        this.dataService
            .getAttachment()
            .then(function (data) {
            var url = URL.createObjectURL(data);
            console.log(url);
        });
    };
    ClaimViewComponent.prototype.getPdfUrl1 = function (imageData) {
        var file = new Blob([(imageData.fileContent)], {
            type: 'application/pdf'
        });
        return file;
    };
    ClaimViewComponent.prototype.onBackClaimClick = function () {
        if (this.userService.user.userid != undefined && this.userService.user.userid != 0 && this.userService.user.userid.toString() != "") {
            if (this.mode == "referal") {
                this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });
            }
            else {
                this.router.navigate(['claim/Claims'], { skipLocationChange: true });
            }
        }
        else {
            if (this.mode == "referal") {
                this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });
            }
            else {
                this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
            }
        }
    };
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimViewComponent.prototype, "attachModel", void 0);
    ClaimViewComponent = __decorate([
        Component({
            selector: 'app-claim-view',
            templateUrl: './claim-view.component.html',
            styleUrls: ['./claim-view.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute, ClaimDataService, UserService, DomSanitizer])
    ], ClaimViewComponent);
    return ClaimViewComponent;
}());
export { ClaimViewComponent };
//# sourceMappingURL=claim-view.component.js.map