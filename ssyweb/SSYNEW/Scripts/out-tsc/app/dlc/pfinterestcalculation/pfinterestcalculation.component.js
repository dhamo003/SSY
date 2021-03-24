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
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { ModalDirective } from 'ngx-bootstrap';
var PfinterestcalculationComponent = /** @class */ (function () {
    function PfinterestcalculationComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.pfInterest = {};
        this.districtValid = true;
        this.locationCodeValid = true;
        this.ssinFromValid = true;
        //ssinToValid: boolean = true;
        this.financialYearValid = true;
    }
    PfinterestcalculationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    PfinterestcalculationComponent.prototype.ngOnInit = function () {
        this.GetDistricts();
        this.GetFinancialYears();
    };
    PfinterestcalculationComponent.prototype.GetDistricts = function () {
        var _this = this;
        this.dataService
            .GetDistricts()
            .subscribe(function (data) {
            _this.districts = data;
        });
    };
    PfinterestcalculationComponent.prototype.GetFinancialYears = function () {
        var _this = this;
        this.dataService
            .GetFinancialYears()
            .subscribe(function (data) {
            _this.financialYears = data;
        });
    };
    PfinterestcalculationComponent.prototype.districtChange = function (districtId) {
        var _this = this;
        this.dataService
            .GetLocationCodes(districtId)
            .subscribe(function (data) {
            _this.blocks = data;
        });
    };
    PfinterestcalculationComponent.prototype.calculatePFInterest = function () {
        var _this = this;
        if (this.validateDetails()) {
            if (this.pfInterest.districtId == 0) {
                this.pfInterest.locationId = 0;
            }
            if (this.pfInterest.ssinTo == undefined || this.pfInterest.ssinTo == null) {
                this.pfInterest.ssinTo = this.pfInterest.ssinFrom;
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .CalculatePFInterest(this.pfInterest)
                    .then(function (data) {
                    debugger;
                    if (data) {
                        _this.successMessage = "PF Interest Calculated Successfully";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
    };
    PfinterestcalculationComponent.prototype.validateDetails = function () {
        debugger;
        var isValid = true;
        this.districtValid = this.locationCodeValid = this.ssinFromValid = this.financialYearValid = true;
        if (this.pfInterest.districtId == -1 || this.pfInterest.districtId == undefined) {
            this.districtValid = isValid = false;
        }
        if (this.pfInterest.districtId != 0)
            if (this.pfInterest.locationId == -1 || this.pfInterest.locationId == undefined) {
                this.locationCodeValid = isValid = false;
            }
        if (this.pfInterest.ssinFrom == undefined) {
            this.ssinFromValid = isValid = false;
        }
        if (this.pfInterest.financialYearId == 0 || this.pfInterest.financialYearId == undefined) {
            this.financialYearValid = isValid = false;
        }
        return isValid;
    };
    PfinterestcalculationComponent.prototype.okClick = function () {
        this.successModal.hide();
        window.location.href = "alc/pfinterestcalculation";
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PfinterestcalculationComponent.prototype, "successModal", void 0);
    PfinterestcalculationComponent = __decorate([
        Component({
            selector: 'app-pfinterestcalculation',
            templateUrl: './pfinterestcalculation.component.html',
            styleUrls: ['./pfinterestcalculation.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService])
    ], PfinterestcalculationComponent);
    return PfinterestcalculationComponent;
}());
export { PfinterestcalculationComponent };
//# sourceMappingURL=pfinterestcalculation.component.js.map