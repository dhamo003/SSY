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
var DeathconfigurationComponent = /** @class */ (function () {
    function DeathconfigurationComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        //ruleValid: boolean = false;
        this.logicValid = false;
        this.valueValid = false;
        this.effectiveFromDateValid2 = false;
        this.deathBenefitConfigDetails = [];
        this.eduConfig = {};
        this.isSaveVisible = true;
        this.rowId = 0;
        this.noofTimesId = 0;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    DeathconfigurationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    DeathconfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logicValid = this.valueValid = true;
        this.effectiveFromDateValid2 = true;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.rowId = params["rowId"];
            _this.mode = params["mode"];
            _this.status = params["status"];
            _this.noofTimesId = Number(params["noofTimesId"]);
            if (_this.mode == "view") {
                _this.isSaveVisible = false;
            }
            else {
                _this.isSaveVisible = true;
            }
            if (_this.noofTimesId > 0) {
                _this.getDeathConfigDetailsById(_this.noofTimesId);
                _this.nextId = _this.noofTimesId + 1;
            }
            else {
                if (_this.mode == "edit") {
                    _this.getDeathConfigDetailsById(_this.noofTimesId);
                }
            }
        });
    };
    DeathconfigurationComponent.prototype.clearData = function () {
        this.logicValid = this.valueValid = true;
        this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getDeathConfigDetailsById(this.noofTimesId);
        }
        else {
            this.eduConfig = {};
        }
    };
    DeathconfigurationComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DeathconfigurationComponent.prototype.validateDeathConfigData = function (eduConfig) {
        var isValid = true;
        this.logicValid = this.valueValid = true;
        this.effectiveFromDateValid2 = true;
        if (eduConfig.logic == undefined) {
            this.logicValid = isValid = false;
        }
        if (eduConfig.value == undefined) {
            this.valueValid = isValid = false;
        }
        if (eduConfig.dateEffectiveFrom == undefined) {
            this.effectiveFromDateValid2 = isValid = false;
        }
        return isValid;
    };
    DeathconfigurationComponent.prototype.saveDeathConfigData = function (eduConfig) {
        var _this = this;
        var isValid = true;
        if (this.validateDeathConfigData(eduConfig)) {
            this.successMessage = "";
            debugger;
            eduConfig.noofTimes = this.nextId;
            eduConfig.ruleName = "Date of Death Exceeding";
            eduConfig.status = true;
            eduConfig.dateEffectiveFrom = new Date(eduConfig.dateEffectiveFrom);
            eduConfig.dateEffectiveTo = new Date(eduConfig.dateEffectiveTo);
            this.deathBenefitConfigDetails[0] = eduConfig;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveDeathConfigData(this.deathBenefitConfigDetails)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Death Configuration was saved successfully";
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
    DeathconfigurationComponent.prototype.okClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    DeathconfigurationComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/deathconfigurationlist";
    };
    DeathconfigurationComponent.prototype.getDeathConfigDetailsById = function (noofTimesId) {
        var _this = this;
        debugger;
        this.dataService
            .GetDeathConfigDetailsById(noofTimesId)
            .subscribe(function (data) {
            debugger;
            _this.deathBenefitConfigDetails = data;
            if (_this.deathBenefitConfigDetails != null && _this.deathBenefitConfigDetails.length > 0) {
                _this.eduConfig = _this.deathBenefitConfigDetails[0];
            }
            _this.eduConfig.dateEffectiveFrom = new Date(_this.eduConfig.dateEffectiveFrom);
            _this.eduConfig.dateEffectiveTo = new Date(_this.eduConfig.dateEffectiveTo);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], DeathconfigurationComponent.prototype, "successModal", void 0);
    DeathconfigurationComponent = __decorate([
        Component({
            selector: 'app-deathconfiguration',
            templateUrl: './deathconfiguration.component.html',
            styleUrls: ['./deathconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], DeathconfigurationComponent);
    return DeathconfigurationComponent;
}());
export { DeathconfigurationComponent };
//# sourceMappingURL=deathconfiguration.component.js.map