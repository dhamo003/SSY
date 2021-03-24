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
var DisabilityconfigurationComponent = /** @class */ (function () {
    function DisabilityconfigurationComponent(router, route, dataService) {
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
        this.effectiveFromDateValid2 = false;
        this.disabilityBenefitConfigDetails = [];
        this.disConfig = {};
        this.disConfig1 = {};
        this.isSaveVisible = true;
        this.rowId = 0;
        this.noofTimesId = 0;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    DisabilityconfigurationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    DisabilityconfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
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
                _this.getDisabilityConfigDetailsById(_this.noofTimesId);
                _this.nextId = _this.noofTimesId + 1;
            }
            else {
                if (_this.mode == "edit") {
                    _this.getDisabilityConfigDetailsById(_this.noofTimesId);
                }
            }
        });
    };
    DisabilityconfigurationComponent.prototype.clearData = function () {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getDisabilityConfigDetailsById(this.noofTimesId);
        }
        else {
            this.disConfig = {};
            this.disConfig1 = {};
        }
    };
    DisabilityconfigurationComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DisabilityconfigurationComponent.prototype.validateDisabilityConfigData = function (disConfig, disConfig1) {
        var isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.effectiveFromDateValid2 = true;
        if (disConfig.logic == undefined) {
            this.logicValid = isValid = false;
        }
        if (disConfig1.logic == undefined) {
            this.logicValid1 = isValid = false;
        }
        if (disConfig.value == undefined) {
            this.valueValid = isValid = false;
        }
        if (disConfig1.value == undefined) {
            this.valueValid1 = isValid = false;
        }
        if (disConfig.dateEffectiveFrom == undefined) {
            this.effectiveFromDateValid2 = isValid = false;
        }
        return isValid;
    };
    DisabilityconfigurationComponent.prototype.saveDisabilityConfigData = function (disConfig, disConfig1) {
        var _this = this;
        var isValid = true;
        if (this.validateDisabilityConfigData(disConfig, disConfig1)) {
            this.successMessage = "";
            debugger;
            disConfig.noofTimes = this.nextId;
            disConfig.ruleName = "Date of Release Exceeding";
            disConfig.status = true;
            disConfig.dateEffectiveFrom = new Date(disConfig.dateEffectiveFrom);
            disConfig.dateEffectiveTo = new Date(disConfig.dateEffectiveTo);
            disConfig1.noofTimes = this.nextId;
            disConfig1.ruleName = "Reason For Delay Submission";
            disConfig1.status = true;
            disConfig1.dateEffectiveFrom = new Date(disConfig.dateEffectiveFrom);
            disConfig1.dateEffectiveTo = new Date(disConfig.dateEffectiveTo);
            this.disabilityBenefitConfigDetails[0] = disConfig;
            this.disabilityBenefitConfigDetails[1] = disConfig1;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveDisabilityConfigData(this.disabilityBenefitConfigDetails)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Disability Configuration was saved successfully";
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
    DisabilityconfigurationComponent.prototype.okClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    DisabilityconfigurationComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/disabilityconfigurationlist";
    };
    DisabilityconfigurationComponent.prototype.getDisabilityConfigDetailsById = function (noofTimesId) {
        var _this = this;
        this.dataService
            .GetDisabilityConfigDetailsById(noofTimesId)
            .subscribe(function (data) {
            debugger;
            _this.disabilityBenefitConfigDetails = data;
            if (_this.disabilityBenefitConfigDetails != null && _this.disabilityBenefitConfigDetails.length > 0) {
                _this.disConfig = _this.disabilityBenefitConfigDetails[0];
                _this.disConfig1 = _this.disabilityBenefitConfigDetails[1];
            }
            _this.disConfig.dateEffectiveFrom = new Date(_this.disConfig.dateEffectiveFrom);
            _this.disConfig.dateEffectiveTo = new Date(_this.disConfig.dateEffectiveTo);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], DisabilityconfigurationComponent.prototype, "successModal", void 0);
    DisabilityconfigurationComponent = __decorate([
        Component({
            selector: 'app-disabilityconfiguration',
            templateUrl: './disabilityconfiguration.component.html',
            styleUrls: ['./disabilityconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], DisabilityconfigurationComponent);
    return DisabilityconfigurationComponent;
}());
export { DisabilityconfigurationComponent };
//# sourceMappingURL=disabilityconfiguration.component.js.map