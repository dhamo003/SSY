var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants } from '../../claim/pipes/constnts.model';
var ReviewpaymentprocessComponent = /** @class */ (function () {
    function ReviewpaymentprocessComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.editmode = false;
        this.GetFundVisible = false;
    }
    ReviewpaymentprocessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.paymentProcessId = params["paymentProcessId"];
            _this.mode = params["mode"];
            _this.statusId = params["statusId"];
            if (_this.statusId == ClaimStatus.PaymentProcessingbyALC) {
                _this.pageHeader = "Payment Process View";
            }
            else if (_this.statusId == ClaimStatus.PaymentReleasebyTreasurer) {
                _this.pageHeader = "Payment Release View";
            }
            if (_this.mode == "edit") {
                _this.editmode = true;
            }
            else
                _this.editmode = false;
        });
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getPaymentProcessById(this.paymentProcessId);
    };
    ReviewpaymentprocessComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/paymentprocessedlist']);
    };
    ReviewpaymentprocessComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    ReviewpaymentprocessComponent.prototype.getPaymentProcessById = function (paymentProcessId) {
        var _this = this;
        debugger;
        this.claimsData = [];
        this.dataService
            .getPaymentProcessById(paymentProcessId)
            .subscribe(function (data) {
            debugger;
            _this.paymentProcessDetails = data;
            _this.claimsData = data.paymentClaimList;
            _this.fundRequestId = _this.paymentProcessDetails.fundRequestId;
            debugger;
            if (_this.fundRequestId != null) {
                _this.GetFundVisible = true;
            }
            else
                _this.GetFundVisible = false;
        });
    };
    ReviewpaymentprocessComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewpaymentprocessComponent = __decorate([
        Component({
            selector: 'app-reviewpaymentprocess',
            templateUrl: './reviewpaymentprocess.component.html',
            styleUrls: ['./reviewpaymentprocess.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService])
    ], ReviewpaymentprocessComponent);
    return ReviewpaymentprocessComponent;
}());
export { ReviewpaymentprocessComponent };
//# sourceMappingURL=reviewpaymentprocess.component.js.map