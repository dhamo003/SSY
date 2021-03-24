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
var HealthfamilyconfigurationComponent = /** @class */ (function () {
    function HealthfamilyconfigurationComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        //ruleValid: boolean = false;
        this.logicValid = false;
        this.valueValid = false;
        //effectiveFromDateValid: boolean = false;
        //ruleValid1: boolean = false;
        this.logicValid1 = false;
        this.valueValid1 = false;
        //effectiveFromDateValid1: boolean = false;
        //ruleValid2: boolean = false;
        this.logicValid2 = false;
        this.valueValid2 = false;
        this.logicValid3 = false;
        this.valueValid3 = false;
        this.logicValid4 = false;
        this.valueValid4 = false;
        this.effectiveFromDateValid2 = false;
        this.healthBenefitConfigDetails = [];
        this.helConfig = {};
        this.helConfig1 = {};
        this.helConfig2 = {};
        this.helConfig3 = {};
        this.helConfig4 = {};
        this.isSaveVisible = true;
        this.rowId = 0;
        this.noofTimesId = 0;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    HealthfamilyconfigurationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    HealthfamilyconfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;
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
                _this.getHealthFamilyConfigDetailsById(_this.noofTimesId);
                _this.nextId = _this.noofTimesId + 1;
            }
            else {
                if (_this.mode == "edit") {
                    _this.getHealthFamilyConfigDetailsById(_this.noofTimesId);
                }
            }
        });
    };
    HealthfamilyconfigurationComponent.prototype.clearData = function () {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;
        if (this.mode == "edit") {
            this.getHealthFamilyConfigDetailsById(this.noofTimesId);
        }
        else {
            this.helConfig = {};
            this.helConfig1 = {};
            this.helConfig2 = {};
            this.helConfig3 = {};
            this.helConfig4 = {};
        }
    };
    HealthfamilyconfigurationComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    HealthfamilyconfigurationComponent.prototype.validateHealthFamilyConfigData = function (helConfig, helConfig1, helConfig2, helConfig3, helConfig4) {
        var isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;
        if (helConfig.logic == undefined) {
            this.logicValid = isValid = false;
        }
        if (helConfig1.logic == undefined) {
            this.logicValid1 = isValid = false;
        }
        if (helConfig2.logic == undefined) {
            this.logicValid2 = isValid = false;
        }
        if (helConfig3.logic == undefined) {
            this.logicValid3 = isValid = false;
        }
        if (helConfig4.logic == undefined) {
            this.logicValid4 = isValid = false;
        }
        if (helConfig.value == undefined) {
            this.valueValid = isValid = false;
        }
        if (helConfig1.value == undefined) {
            this.valueValid1 = isValid = false;
        }
        if (helConfig2.value == undefined) {
            this.valueValid2 = isValid = false;
        }
        if (helConfig3.value == undefined) {
            this.valueValid3 = isValid = false;
        }
        if (helConfig4.value == undefined) {
            this.valueValid4 = isValid = false;
        }
        if (helConfig2.dateEffectiveFrom == undefined) {
            this.effectiveFromDateValid2 = isValid = false;
        }
        return isValid;
    };
    HealthfamilyconfigurationComponent.prototype.saveHealthFamilyConfigData = function (helConfig, helConfig1, helConfig2, helConfig3, helConfig4) {
        var _this = this;
        var isValid = true;
        if (this.validateHealthFamilyConfigData(helConfig, helConfig1, helConfig2, helConfig3, helConfig4)) {
            this.successMessage = "";
            debugger;
            helConfig.noofTimes = this.nextId;
            helConfig.ruleName = "Date of First Appointment Exceeding";
            helConfig.status = true;
            helConfig.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);
            helConfig1.noofTimes = this.nextId;
            helConfig1.ruleName = "Date of Discharge Exceeding";
            helConfig1.status = true;
            helConfig1.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig1.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);
            helConfig2.noofTimes = this.nextId;
            helConfig2.ruleName = "Loss Of Employment Date Differnce";
            helConfig2.status = true;
            helConfig2.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig2.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);
            helConfig3.noofTimes = this.nextId;
            helConfig3.ruleName = "Loss Of Employment Amount Exceeding";
            helConfig3.status = true;
            helConfig3.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig3.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);
            helConfig4.noofTimes = this.nextId;
            helConfig4.ruleName = "Reason For Delay Submission";
            helConfig4.status = true;
            helConfig4.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig4.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);
            this.healthBenefitConfigDetails[0] = helConfig;
            this.healthBenefitConfigDetails[1] = helConfig1;
            this.healthBenefitConfigDetails[2] = helConfig2;
            this.healthBenefitConfigDetails[3] = helConfig3;
            this.healthBenefitConfigDetails[4] = helConfig4;
            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveHealthFamilyConfigData(this.healthBenefitConfigDetails)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Health&Family Configuration was saved successfully";
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
    HealthfamilyconfigurationComponent.prototype.okClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    HealthfamilyconfigurationComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/healthfamilyconfigurationlist";
    };
    HealthfamilyconfigurationComponent.prototype.getHealthFamilyConfigDetailsById = function (noofTimesId) {
        var _this = this;
        this.dataService
            .GetHealthFamilyConfigDetailsById(noofTimesId)
            .subscribe(function (data) {
            debugger;
            _this.healthBenefitConfigDetails = data;
            if (_this.healthBenefitConfigDetails != null && _this.healthBenefitConfigDetails.length > 0) {
                _this.helConfig = _this.healthBenefitConfigDetails[0];
                _this.helConfig1 = _this.healthBenefitConfigDetails[1];
                _this.helConfig2 = _this.healthBenefitConfigDetails[2];
                _this.helConfig3 = _this.healthBenefitConfigDetails[3];
                _this.helConfig4 = _this.healthBenefitConfigDetails[4];
            }
            _this.helConfig2.dateEffectiveFrom = new Date(_this.helConfig2.dateEffectiveFrom);
            _this.helConfig2.dateEffectiveTo = new Date(_this.helConfig2.dateEffectiveTo);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], HealthfamilyconfigurationComponent.prototype, "successModal", void 0);
    HealthfamilyconfigurationComponent = __decorate([
        Component({
            selector: 'app-healthfamilyconfiguration',
            templateUrl: './healthfamilyconfiguration.component.html',
            styleUrls: ['./healthfamilyconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], HealthfamilyconfigurationComponent);
    return HealthfamilyconfigurationComponent;
}());
export { HealthfamilyconfigurationComponent };
//# sourceMappingURL=healthfamilyconfiguration.component.js.map