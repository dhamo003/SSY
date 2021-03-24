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
var EducationconfigurationComponent = /** @class */ (function () {
    function EducationconfigurationComponent(router, route, dataService) {
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
        this.effectiveFromDateValid2 = false;
        this.educationBenefitConfigDetails = [];
        this.eduConfig = {};
        this.eduConfig1 = {};
        this.eduConfig2 = {};
        this.isSaveVisible = true;
        this.rowId = 0;
        this.noofTimesId = 0;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    EducationconfigurationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    EducationconfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
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
                _this.getEducationConfigDetailsById(_this.noofTimesId);
                _this.nextId = _this.noofTimesId + 1;
            }
            else {
                if (_this.mode == "edit") {
                    _this.getEducationConfigDetailsById(_this.noofTimesId);
                }
            }
        });
    };
    EducationconfigurationComponent.prototype.clearData = function () {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getEducationConfigDetailsById(this.noofTimesId);
        }
        else {
            this.eduConfig = {};
            this.eduConfig1 = {};
            this.eduConfig2 = {};
        }
    };
    EducationconfigurationComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    EducationconfigurationComponent.prototype.validateEducationConfigData = function (eduConfig, eduConfig1, eduConfig2) {
        var isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        if (eduConfig.logic == undefined) {
            this.logicValid = isValid = false;
        }
        if (eduConfig1.logic == undefined) {
            this.logicValid1 = isValid = false;
        }
        if (eduConfig2.logic == undefined) {
            this.logicValid2 = isValid = false;
        }
        if (eduConfig.value == undefined) {
            this.valueValid = isValid = false;
        }
        if (eduConfig1.value == undefined) {
            this.valueValid1 = isValid = false;
        }
        if (eduConfig2.value == undefined) {
            this.valueValid2 = isValid = false;
        }
        if (eduConfig2.dateEffectiveFrom == undefined) {
            this.effectiveFromDateValid2 = isValid = false;
        }
        return isValid;
    };
    EducationconfigurationComponent.prototype.saveEducationConfigData = function (eduConfig, eduConfig1, eduConfig2) {
        var _this = this;
        var isValid = true;
        if (this.validateEducationConfigData(eduConfig, eduConfig1, eduConfig2)) {
            this.successMessage = "";
            debugger;
            eduConfig.noofTimes = this.nextId;
            eduConfig.ruleName = "Date of Admission Exceeding";
            eduConfig.status = true;
            eduConfig.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);
            eduConfig1.noofTimes = this.nextId;
            eduConfig1.ruleName = "Son Age Exceeding";
            eduConfig1.status = true;
            eduConfig1.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig1.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);
            eduConfig2.noofTimes = this.nextId;
            eduConfig2.ruleName = "MaxLimitExceeded";
            eduConfig2.status = true;
            eduConfig2.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig2.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);
            this.educationBenefitConfigDetails[0] = eduConfig;
            this.educationBenefitConfigDetails[1] = eduConfig1;
            this.educationBenefitConfigDetails[2] = eduConfig2;
            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveEducationConfigData(this.educationBenefitConfigDetails)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Education Configuration was saved successfully";
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
    EducationconfigurationComponent.prototype.okClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    EducationconfigurationComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/educationconfigurationlist";
    };
    EducationconfigurationComponent.prototype.getEducationConfigDetailsById = function (noofTimesId) {
        var _this = this;
        this.dataService
            .GetEducationConfigDetailsById(noofTimesId)
            .subscribe(function (data) {
            debugger;
            _this.educationBenefitConfigDetails = data;
            if (_this.educationBenefitConfigDetails != null && _this.educationBenefitConfigDetails.length > 0) {
                _this.eduConfig = _this.educationBenefitConfigDetails[0];
                _this.eduConfig1 = _this.educationBenefitConfigDetails[1];
                _this.eduConfig2 = _this.educationBenefitConfigDetails[2];
            }
            _this.eduConfig2.dateEffectiveFrom = new Date(_this.eduConfig2.dateEffectiveFrom);
            _this.eduConfig2.dateEffectiveTo = new Date(_this.eduConfig2.dateEffectiveTo);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], EducationconfigurationComponent.prototype, "successModal", void 0);
    EducationconfigurationComponent = __decorate([
        Component({
            selector: 'app-educationconfiguration',
            templateUrl: './educationconfiguration.component.html',
            styleUrls: ['./educationconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], EducationconfigurationComponent);
    return EducationconfigurationComponent;
}());
export { EducationconfigurationComponent };
//# sourceMappingURL=educationconfiguration.component.js.map