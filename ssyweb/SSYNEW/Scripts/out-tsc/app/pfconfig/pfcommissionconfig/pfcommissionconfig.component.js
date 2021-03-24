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
var PfcommissionconfigComponent = /** @class */ (function () {
    function PfcommissionconfigComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.pfConfig = {};
        this.commissionCodeValid = false;
        this.percentageOnNormalAmountValid = false;
        this.fixedNormalAmountValid = false;
        this.effectiveDateFromValid = false;
        this.effectiveDateToValid = false;
        this.commissionTypeValid = false;
        this.agentTypeValid = false;
        this.commissionConfigId = 0;
        this.mode = "add";
        this.isSaveVisible = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    PfcommissionconfigComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    PfcommissionconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.commissionConfigId = params["commissionConfigId"];
            _this.mode = params["mode"];
            if (_this.mode == "view") {
                _this.isSaveVisible = false;
            }
            else {
                _this.isSaveVisible = true;
            }
            if (_this.commissionConfigId > 0) {
                _this.getPFCommissionConfigDetailsById(_this.commissionConfigId);
            }
        });
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = this.commissionTypeValid = this.agentTypeValid = true;
    };
    PfcommissionconfigComponent.prototype.clearData = function () {
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = this.commissionTypeValid = this.agentTypeValid = true;
        if (this.mode == "edit") {
            this.getPFCommissionConfigDetailsById(this.commissionConfigId);
        }
        else {
            this.pfConfig = {};
        }
    };
    PfcommissionconfigComponent.prototype.validatePFCommissionConfigData = function (pfConfigData) {
        var isValid = true;
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = true;
        if (pfConfigData.commissionCode == undefined) {
            this.commissionCodeValid = isValid = false;
        }
        if (pfConfigData.percentageOnNormalAmount <= 0 || pfConfigData.percentageOnNormalAmount == undefined) {
            this.percentageOnNormalAmountValid = isValid = false;
        }
        if (pfConfigData.fixedNormalAmount <= 0 || pfConfigData.fixedNormalAmount == undefined) {
            this.fixedNormalAmountValid = isValid = false;
        }
        if (pfConfigData.effectiveDateFrom == undefined) {
            this.effectiveDateFromValid = isValid = false;
        }
        if (pfConfigData.effectiveDateTo == undefined) {
            this.effectiveDateToValid = isValid = false;
        }
        if (pfConfigData.commissionType == undefined) {
            this.commissionTypeValid = isValid = false;
        }
        if (pfConfigData.agentType == undefined) {
            this.agentTypeValid = isValid = false;
        }
        return isValid;
    };
    PfcommissionconfigComponent.prototype.saveClaimsData = function (pfConfigData) {
        var _this = this;
        var isValid = true;
        if (this.validatePFCommissionConfigData(pfConfigData)) {
            this.successMessage = "";
            //  console.log(pfConfigData);
            pfConfigData.status = 1;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SavePFCommissionConfigData(pfConfigData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "PF Commission Configuration was saved successfully";
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
    PfcommissionconfigComponent.prototype.okClick = function () {
        //this.successModal.hide();
        window.location.href = "PFConfig/pfcommissionconfig";
    };
    PfcommissionconfigComponent.prototype.getHistoryData = function () {
        window.location.href = "PFConfig/pfcommissionconfiglist";
    };
    PfcommissionconfigComponent.prototype.getPFCommissionConfigDetailsById = function (id) {
        var _this = this;
        this.dataService
            .GetPFCommissionConfigDetailsById(id)
            .subscribe(function (data) {
            debugger;
            _this.pfConfig = data;
            _this.pfConfig.effectiveDateFrom = new Date(_this.pfConfig.effectiveDateFrom);
            _this.pfConfig.effectiveDateTo = new Date(_this.pfConfig.effectiveDateTo);
        });
    };
    PfcommissionconfigComponent.prototype.cancelClick = function () {
        window.location.href = "Home/DeptDashboard";
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PfcommissionconfigComponent.prototype, "successModal", void 0);
    PfcommissionconfigComponent = __decorate([
        Component({
            selector: 'app-pfcommissionconfig',
            templateUrl: './pfcommissionconfig.component.html',
            styleUrls: ['./pfcommissionconfig.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService])
    ], PfcommissionconfigComponent);
    return PfcommissionconfigComponent;
}());
export { PfcommissionconfigComponent };
//# sourceMappingURL=pfcommissionconfig.component.js.map