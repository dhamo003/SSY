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
import { ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router, ActivatedRoute } from '@angular/router';
var PfintertconfigComponent = /** @class */ (function () {
    function PfintertconfigComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.pfConfig = {};
        this.interestCodeValid = false;
        this.interestCalculationDayValid = false;
        this.interestRateValid = false;
        this.effectiveFromDateValid = false;
        this.interestConfigId = 0;
        this.mode = "add";
        this.isSaveVisible = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    PfintertconfigComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    PfintertconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.interestConfigId = params["interestConfigId"];
            _this.mode = params["mode"];
            if (_this.mode == "view") {
                _this.isSaveVisible = false;
            }
            else {
                _this.isSaveVisible = true;
            }
            if (_this.interestConfigId > 0) {
                _this.getPFInterestConfigDetailsById(_this.interestConfigId);
            }
        });
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true;
    };
    PfintertconfigComponent.prototype.clearData = function () {
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true;
        debugger;
        if (this.mode == "edit") {
            this.getPFInterestConfigDetailsById(this.interestConfigId);
        }
        else {
            this.pfConfig = {};
        }
    };
    PfintertconfigComponent.prototype.validatePFInterestConfigData = function (pfConfigData) {
        var isValid = true;
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true;
        if (pfConfigData.interestCode == undefined) {
            this.interestCodeValid = isValid = false;
        }
        if (pfConfigData.interestCalculationDay <= 0 || pfConfigData.interestCalculationDay == undefined) {
            this.interestCalculationDayValid = isValid = false;
        }
        if (pfConfigData.interestRate <= 0 || pfConfigData.interestRate == undefined) {
            this.interestRateValid = isValid = false;
        }
        if (pfConfigData.effectiveDateFrom == undefined) {
            this.effectiveFromDateValid = isValid = false;
        }
        return isValid;
    };
    PfintertconfigComponent.prototype.saveClaimsData = function (pfConfigData) {
        var _this = this;
        var isValid = true;
        if (this.validatePFInterestConfigData(pfConfigData)) {
            this.successMessage = "";
            //  console.log(pfConfigData);
            pfConfigData.status = 1;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SavePFInterestConfigData(pfConfigData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "PF Interest Configuration was saved successfully";
                        _this.successModal.show();
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                        _this.successModal.show();
                    }
                });
            }
        }
        else {
            return;
        }
    };
    PfintertconfigComponent.prototype.okClick = function () {
        //this.successModal.hide();
        window.location.href = "PFConfig/pfinterestconfig";
    };
    PfintertconfigComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/pfinterestconfiglist";
    };
    PfintertconfigComponent.prototype.getPFInterestConfigDetailsById = function (id) {
        var _this = this;
        this.dataService
            .GetPFInterestConfigDetailsById(id)
            .subscribe(function (data) {
            debugger;
            _this.pfConfig = data;
            _this.pfConfig.effectiveDateFrom = new Date(_this.pfConfig.effectiveDateFrom);
            _this.pfConfig.effectiveDateTo = new Date(_this.pfConfig.effectiveDateTo);
        });
    };
    PfintertconfigComponent.prototype.cancelClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PfintertconfigComponent.prototype, "successModal", void 0);
    PfintertconfigComponent = __decorate([
        Component({
            selector: 'app-pfintertconfig',
            templateUrl: './pfintertconfig.component.html',
            styleUrls: ['./pfintertconfig.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], PfintertconfigComponent);
    return PfintertconfigComponent;
}());
export { PfintertconfigComponent };
//# sourceMappingURL=pfintertconfig.component.js.map