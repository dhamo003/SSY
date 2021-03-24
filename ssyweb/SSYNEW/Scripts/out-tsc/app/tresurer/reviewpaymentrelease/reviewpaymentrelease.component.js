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
import { UserService } from '../../UserService';
import { TresurerDataService } from '../services/tresurer-data.service';
import { ClaimConstants } from '../../claim/pipes/constnts.model';
import { ExcelService } from '../../services/excel.service';
var ReviewpaymentreleaseComponent = /** @class */ (function () {
    function ReviewpaymentreleaseComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
    }
    ReviewpaymentreleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.releaseId = params["releaseId"];
            _this.userId = params["userId"];
            _this.processId = params["processId"];
        });
        this.getPaymentReleaseById(this.releaseId);
        if (this.processId != null)
            this.GetRLOOfficeUserInformation(this.processId);
    };
    ReviewpaymentreleaseComponent.prototype.getPaymentReleaseById = function (releaseId) {
        var _this = this;
        debugger;
        this.claimsData = [];
        this.dataService
            .getPaymentReleaseById(releaseId)
            .subscribe(function (data) {
            debugger;
            _this.paymentReleaseDetails = data;
            _this.claimsData = data.paymentClaimList;
        });
    };
    ReviewpaymentreleaseComponent.prototype.GetRLOOfficeUserInformation = function (processId) {
        var _this = this;
        this.dataService
            .getRLOUserInfoByProcessingId(this.processId)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
        });
    };
    ReviewpaymentreleaseComponent.prototype.cancelclick = function () {
        debugger;
        this.router.navigate(['tresurer/paymentreleasedlist']);
    };
    ReviewpaymentreleaseComponent.prototype.downloadNeftDocument = function () {
        var downloadClaimDetails = this.claimDetails.filter(function (x) { return x.selected == true; });
        if (downloadClaimDetails != null && downloadClaimDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadClaimDetails, "Neft Document");
        }
    };
    ReviewpaymentreleaseComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewpaymentreleaseComponent = __decorate([
        Component({
            selector: 'app-reviewpaymentrelease',
            templateUrl: './reviewpaymentrelease.component.html',
            styleUrls: ['./reviewpaymentrelease.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, TresurerDataService, UserService, ExcelService])
    ], ReviewpaymentreleaseComponent);
    return ReviewpaymentreleaseComponent;
}());
export { ReviewpaymentreleaseComponent };
//# sourceMappingURL=reviewpaymentrelease.component.js.map