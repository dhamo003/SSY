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
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
var PaymentProcessingComponent = /** @class */ (function () {
    function PaymentProcessingComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimData = {};
        this.date = new Date();
        this.GetClaimVisible = false;
        this.showErrorMessage = false;
        this.selectedClaimList = [];
        this.GetFundVisible = false;
        this.ReleaseDetailsVisible = false;
        this.isSearch = false;
    }
    PaymentProcessingComponent.prototype.ngOnInit = function () {
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetFundRequestDetails();
    };
    PaymentProcessingComponent.prototype.GetClaims = function () {
        if (!this.GetFundVisible)
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe);
        else if (this.GetFundVisible)
            this.getFundRequestClaims(this.selectedFundRequestId);
    };
    PaymentProcessingComponent.prototype.getAllApprovalClaims = function (deptUserid, type) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.GetFundVisible = false;
            if (_this.isSearch)
                _this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.GetAlcInformation = function (deptUserid) {
        var _this = this;
        this.dataService
            .GetAlcInformation(deptUserid)
            .subscribe(function (data) {
            _this.alcDetails = data;
            if (_this.alcDetails.approvedClaimsAmount > _this.alcDetails.balanceOfTheAmount)
                _this.AmountShortfall = (_this.alcDetails.approvedClaimsAmount - _this.alcDetails.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
        });
    };
    PaymentProcessingComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    PaymentProcessingComponent.prototype.SubmitRequest = function () {
        var _this = this;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.paymentProcessingDate = new Date();
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = ClaimStatus.PaymentProcessingbyALC;
            this.claimData.paymentProcessingClaims = this.selectedClaimList; // this.normalizeArray(this.claimsList1, ClaimConstants.Education.toString());//this.claimsList;
            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            //teja
            if (this.GetFundVisible)
                this.claimData.fundrequestId = this.selectedFundRequestId;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveProcessingClaims(this.claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Payment processing successfully submitted";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
            //}
        }
        else {
            this.showErrorMessage = true;
        }
    };
    PaymentProcessingComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.CancelClick();
    };
    PaymentProcessingComponent.prototype.selectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
        }
    };
    PaymentProcessingComponent.prototype.checkIfAllSelected = function () {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
    };
    PaymentProcessingComponent.prototype.selectedClaims = function () {
        var res = this.claimsData.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId });
        }
    };
    //teja
    PaymentProcessingComponent.prototype.GetFundRequestDetails = function () {
        this.GetClaimVisible = false;
        this.GetFundRequestsByUserID(this.userService.user.deptUserid, ClaimStatus.Release);
    };
    PaymentProcessingComponent.prototype.GetFundRequestsByUserID = function (id, statusId) {
        var _this = this;
        this.dataService
            .getReleaseFundRequest(id, statusId)
            .subscribe(function (data) {
            _this.fundRequest = data;
            _this.GetFundVisible = true;
        });
    };
    PaymentProcessingComponent.prototype.PaymentWithoutReleaseOrder = function () {
        this.releaseDate = "";
        this.selectedFundRequestId = "";
        this.GetFundVisible = false;
        this.GetClaimVisible = false;
        this.ReleaseDetailsVisible = false;
    };
    PaymentProcessingComponent.prototype.selectChange = function (args) {
        var _this = this;
        this.selectedFundRequestId = args.target.value;
        if (this.fundRequest != null) {
            this.ReleaseDetailsVisible = true;
            this.fundRequest.forEach(function (x) {
                if (x.fundReleaseOrderHdrId == _this.selectedFundRequestId) {
                    _this.releaseDate = x.fundReleaseDateString;
                }
            });
        }
        this.claimsData = [];
        this.selectedAll = false;
    };
    PaymentProcessingComponent.prototype.getFundRequestClaims = function (fundRequestId) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundReleaseClaimsByFundReleaseHdrId(fundRequestId)
            .subscribe(function (data) {
            _this.claimsData = data; //.fundClaimList;
            _this.GetClaimVisible = true;
            if (_this.isSearch)
                _this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    PaymentProcessingComponent.prototype.CancelClick = function () {
        this.router.navigate(['alc/paymentprocessedlist']);
    };
    PaymentProcessingComponent.prototype.GetResults = function () {
        this.isSearch = true;
        this.GetClaims();
    };
    PaymentProcessingComponent.prototype.GetSearchResults = function () {
        this.isSearch = false;
        if (this.claimsData != null && this.claimsData.length > 0) {
            if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.nameSearchText != null && this.nameSearchText != undefined) || (this.mobileSearchText != null && this.mobileSearchText != undefined)) {
                //const results = Object.assign([], this.claimsData); 
                //if (results != null && results.length > 0) {
                //    this.resultsData = results.filter(x => x.ssin == this.ssinSearchText.trim() || x.benName == this.nameSearchText.trim() || x.benMobileNumber == this.mobileSearchText.trim());
                //    this.claimsData = this.resultsData;
                //   // console.log(this.claimsData);
                //}
                if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                    this.strSSIN = this.ssinSearchText.trim();
                else
                    this.strSSIN = "0";
                if (this.nameSearchText != null && this.nameSearchText != undefined && this.nameSearchText != "")
                    this.strName = this.nameSearchText.trim();
                else
                    this.strName = "0";
                if (this.mobileSearchText != null && this.mobileSearchText != undefined && this.mobileSearchText != "")
                    this.strMobile = this.mobileSearchText.trim();
                else
                    this.strMobile = "0";
                if (!this.GetFundVisible)
                    this.getAllApprovalSearchClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.strSSIN, this.strName, this.strMobile);
                else if (this.GetFundVisible)
                    this.getFundRequestSearchClaims(this.selectedFundRequestId, this.strSSIN, this.strName, this.strMobile);
            }
        }
    };
    PaymentProcessingComponent.prototype.getAllApprovalSearchClaims = function (deptUserid, type, ssin, benName, benMobile) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getAllApprovalSearchClaims(deptUserid, type, ssin, benName, benMobile)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.GetFundVisible = false;
            //if (this.isSearch)
            //    this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.getFundRequestSearchClaims = function (fundRequestId, ssin, benName, benMobile) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundRequestSearchClaims(fundRequestId, ssin, benName, benMobile)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            //if (this.isSearch)
            //    this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PaymentProcessingComponent.prototype, "successModal", void 0);
    PaymentProcessingComponent = __decorate([
        Component({
            selector: 'app-payment-processing',
            templateUrl: './payment-processing.component.html',
            styleUrls: ['./payment-processing.component.css']
        }),
        __metadata("design:paramtypes", [Router, AlcDataService, UserService])
    ], PaymentProcessingComponent);
    return PaymentProcessingComponent;
}());
export { PaymentProcessingComponent };
//# sourceMappingURL=payment-processing.component.js.map