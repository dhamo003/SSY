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
import { ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
var PfconfigurationComponent = /** @class */ (function () {
    function PfconfigurationComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.effectiveFromDateValid = true;
        this.effectiveToDateValid = true;
        this.benMonthlyContributionValid = true;
        this.govMonthlyContributionValid = true;
        this.minAgeValid = true;
        this.maxAgeValid = true;
        this.avgFamilyIncomeValid = true;
        this.lockPeriodValid = true;
        this.inactivePeriodValid = true;
        this.maturityAgeValid = true;
        this.logic2Valid = true;
        this.collectionCutOffValid = true;
        this.interestRateValid = true;
        this.collectionCutOffRange = true;
        this.agentCollectionLimitValid = true;
        this.configuration = {};
        this.mode = "add";
        this.maxDate = new Date();
        //this.mode = "add";
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    PfconfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.pfConfigurationId = params["pfConfigurationId"] != null ? Number(params["pfConfigurationId"]) : 0;
            _this.mode = params["mode"] == undefined ? 'add' : params["mode"];
            if (_this.mode == "edit" || _this.mode == "view")
                _this.getConfigurationDetails(_this.pfConfigurationId);
        });
        //console.log(this.configuration);
    };
    PfconfigurationComponent.prototype.getConfigurationDetails = function (id) {
        var _this = this;
        this.dataService
            .getPFConfigurationDetails(id)
            .subscribe(function (data) {
            debugger;
            _this.configuration = data;
            _this.configuration.dateEffectiveFrom = new Date(_this.configuration.dateEffectiveFrom);
            _this.configuration.dateEffectiveTo = new Date(_this.configuration.dateEffectiveTo);
        });
    };
    PfconfigurationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    PfconfigurationComponent.prototype.saveContribution = function (configurationModel) {
        var _this = this;
        if (this.validateConfiguration()) {
            if (this.mode != "view") {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .savePFConfiguration(this.configuration)
                        .then(function (data) {
                        _this.successMessage = "Configuration updated successfully";
                        _this.successModal.show();
                    });
                }
            }
        }
    };
    PfconfigurationComponent.prototype.validateConfiguration = function () {
        var isValid = true;
        this.effectiveFromDateValid = this.effectiveToDateValid = this.benMonthlyContributionValid = this.govMonthlyContributionValid = true;
        this.minAgeValid = this.maxAgeValid = this.avgFamilyIncomeValid = this.lockPeriodValid = this.inactivePeriodValid = this.maturityAgeValid = true;
        this.logic2Valid = this.collectionCutOffValid = this.collectionCutOffRange = this.interestRateValid = true;
        if (this.configuration.dateEffectiveFrom == undefined) {
            this.effectiveFromDateValid = isValid = false;
        }
        if (this.configuration.dateEffectiveTo == undefined) {
            this.effectiveToDateValid = isValid = false;
        }
        if (this.configuration.beneficiaryPFContribution == undefined) {
            this.benMonthlyContributionValid = isValid = false;
        }
        if (this.configuration.governmentPFContribution == undefined) {
            this.govMonthlyContributionValid = isValid = false;
        }
        if (this.configuration.minAge == undefined) {
            this.minAgeValid = isValid = false;
        }
        if (this.configuration.maxAge == undefined) {
            this.maxAgeValid = isValid = false;
        }
        if (this.configuration.averageMonthlyIncome == undefined) {
            this.avgFamilyIncomeValid = isValid = false;
        }
        if (this.configuration.pfLockingPeriodMonths == undefined) {
            this.lockPeriodValid = isValid = false;
        }
        if (this.configuration.inActivePeriodMonths == undefined) {
            this.inactivePeriodValid = isValid = false;
        }
        if (this.configuration.maturityAge == undefined) {
            this.maturityAgeValid = isValid = false;
        }
        if (this.configuration.maturityAgeLogic == undefined) {
            this.logic2Valid = isValid = false;
        }
        debugger;
        if (this.configuration.collectionCutoff == undefined) {
            this.collectionCutOffValid = isValid = false;
        }
        else if (this.configuration.collectionCutoff < 1 || this.configuration.collectionCutoff > 30) {
            this.collectionCutOffRange = isValid = false;
        }
        if (this.configuration.pfInterestRate == undefined) {
            this.interestRateValid = isValid = false;
        }
        if (this.configuration.agentCollectionLimit == undefined) {
            this.agentCollectionLimitValid = isValid = false;
        }
        return isValid;
    };
    PfconfigurationComponent.prototype.clearContribution = function () {
        debugger;
        if (this.mode == "edit") {
            this.getConfigurationDetails(this.pfConfigurationId);
        }
        if (this.mode == "add") {
            this.configuration = {};
        }
    };
    PfconfigurationComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    PfconfigurationComponent.prototype.showHistory = function () {
        this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
        //this.getPFConfigurations(1,10);
        //this.historyModal.show();
    };
    PfconfigurationComponent.prototype.okClick = function () {
        this.successModal.hide();
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PfconfigurationComponent.prototype, "successModal", void 0);
    PfconfigurationComponent = __decorate([
        Component({
            selector: 'app-pfconfiguration',
            templateUrl: './pfconfiguration.component.html',
            styleUrls: ['./pfconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], PfconfigurationComponent);
    return PfconfigurationComponent;
}());
export { PfconfigurationComponent };
//# sourceMappingURL=pfconfiguration.component.js.map