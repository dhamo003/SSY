(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pfconfig-pfconfig-module"],{

/***/ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Benefit Conguration</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Configuration\r\n                                    </th>\r\n                                    <th>\r\n                                        Benefit Name\r\n                                    </th>\r\n                                    <th>\r\n                                        Description\r\n                                    </th>\r\n                                    <th>\r\n                                        Status\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let calim of claimConfig\">\r\n                                    <td>\r\n                                        <a (click)=\"onEditClick(calim)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                        <a (click)=\"onHistoryClick(calim)\" title=\"History\" class=\"txt-color-red\"><i class=\"fa fa-list\" style=\"font-size:larger\" aria-hidden=\"true\"></i></a>\r\n                                    </td>\r\n                                    <td>{{calim.claimName}}</td>\r\n                                    <td>{{calim.claimDescription}}</td>\r\n                                    <td>{{calim.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BenefitconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitconfigurationComponent", function() { return BenefitconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BenefitconfigurationComponent = /** @class */ (function () {
    function BenefitconfigurationComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.claimConfig = [];
    }
    BenefitconfigurationComponent.prototype.ngOnInit = function () {
        this.GetBenefitConfigDetails();
    };
    BenefitconfigurationComponent.prototype.GetBenefitConfigDetails = function () {
        var _this = this;
        debugger;
        this.dataService
            .GetBenefitConfigDetails()
            .subscribe(function (data) {
            debugger;
            _this.claimConfig = data;
        });
    };
    BenefitconfigurationComponent.prototype.onEditClick = function (item) {
        switch (item.claimMasterId) {
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].PF: {
                this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: 0, mode: "edit" }], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Education: {
                this.router.navigate(['pfconfig/educationconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].HealthFamily: {
                this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Death: {
                this.router.navigate(['pfconfig/deathconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Disability: {
                this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            default: break;
        }
    };
    BenefitconfigurationComponent.prototype.onHistoryClick = function (item) {
        switch (item.claimMasterId) {
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].PF: {
                this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Education: {
                this.router.navigate(['pfconfig/educationconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].HealthFamily: {
                this.router.navigate(['pfconfig/healthfamilyconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Death: {
                this.router.navigate(['pfconfig/deathconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Disability: {
                this.router.navigate(['pfconfig/disabilityconfigurationlist'], { skipLocationChange: true });
                break;
            }
            default: break;
        }
    };
    BenefitconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-benefitconfiguration',
            template: __webpack_require__(/*! ./benefitconfiguration.component.html */ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./benefitconfiguration.component.css */ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_1__["PFConfigDataService"]])
    ], BenefitconfigurationComponent);
    return BenefitconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfiguration/deathconfiguration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfiguration/deathconfiguration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Death Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <header>Date of Death Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic\" [(ngModel)]=\"eduConfig.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value\" placeholder=\"Value\" [(ngModel)]=\"eduConfig.value\"\r\n                                                   #value=\"ngModel\" [ngClass]=\"{'invalid-data': value.invalid && ( !valueValid || value.touched ),\r\n                                                        'valid-data': valueValid && value.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value.invalid && (!valueValid || value.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                                        <label class=\"label\">Rule:<span [style.color]=\"!ruleValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"eduConfig.ruleName\"\r\n                                                   #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid || interestCode.touched ),\r\n                                                        'valid-data': ruleValid && interestCode.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestCode.invalid && (!ruleValid || interestCode.touched)\">\r\n                                            <span style=\"color: red;\">Rule is required </span>\r\n                                        </div>\r\n                                    </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"eduConfig.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <!--<div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"eduConfig.dateEffectiveFrom\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date:</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"eduConfig.dateEffectiveTo\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   required>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>-->\r\n                            </fieldset>\r\n                            <div class=\"row\">\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid2?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"eduConfig.dateEffectiveFrom\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid2), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid2}\"\r\n                                               required>\r\n                                    </label>\r\n                                    <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid2)\">\r\n                                        <span style=\"color: red;\">Effective From Date is required </span>\r\n                                    </div>\r\n                                </section>\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective To Date:</label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"eduConfig.dateEffectiveTo\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               required>\r\n                                    </label>\r\n                                </section>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveDeathConfigData(eduConfig)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfiguration/deathconfiguration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeathconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathconfigurationComponent", function() { return DeathconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], DeathconfigurationComponent.prototype, "successModal", void 0);
    DeathconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deathconfiguration',
            template: __webpack_require__(/*! ./deathconfiguration.component.html */ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./deathconfiguration.component.css */ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], DeathconfigurationComponent);
    return DeathconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Death Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                        Rule Name\r\n                                    </th>\r\n                                    <th>\r\n                                        Condition\r\n                                    </th>\r\n                                    <th>\r\n                                        Value\r\n                                    </th>\r\n                                    <th>\r\n                                        Description\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let deathConfig of deathConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"deathConfig.status == 1\" (click)=\"onEditClick(deathConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                        <a (click)=\"onViewClick(deathConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{deathConfig.ruleName}}</td>\r\n                                    <td>{{deathConfig.logic}}</td>\r\n                                    <td>{{deathConfig.value}}</td>\r\n                                    <td>{{deathConfig.description}}</td>\r\n                                    <td>{{deathConfig.dateEffectiveFromString}}</td>\r\n                                    <td>{{deathConfig.dateEffectiveToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <div *ngIf=\"deathConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <footer class=\"modal-footer\">\r\n                            <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeathconfigurationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathconfigurationlistComponent", function() { return DeathconfigurationlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeathconfigurationlistComponent = /** @class */ (function () {
    function DeathconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.deathConfigList = [];
    }
    DeathconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetDeathConfigDetails(this.page, this.pageSize);
    };
    DeathconfigurationlistComponent.prototype.GetDeathConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetDeathConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.deathConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    DeathconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetDeathConfigDetails(page, this.pageSize);
    };
    DeathconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DeathconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DeathconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DeathconfigurationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deathconfigurationlist',
            template: __webpack_require__(/*! ./deathconfigurationlist.component.html */ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.html"),
            styles: [__webpack_require__(/*! ./deathconfigurationlist.component.css */ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], DeathconfigurationlistComponent);
    return DeathconfigurationlistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Disability Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <header>Date of Release Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic\" [(ngModel)]=\"disConfig.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value\" placeholder=\"Value\" [(ngModel)]=\"disConfig.value\"\r\n                                                   #value=\"ngModel\" [ngClass]=\"{'invalid-data': value.invalid && ( !valueValid || value.touched ),\r\n                                                        'valid-data': valueValid && value.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value.invalid && (!valueValid || value.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                                        <label class=\"label\">Rule:<span [style.color]=\"!ruleValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"disConfig.ruleName\"\r\n                                                   #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid || interestCode.touched ),\r\n                                                        'valid-data': ruleValid && interestCode.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestCode.invalid && (!ruleValid || interestCode.touched)\">\r\n                                            <span style=\"color: red;\">Rule is required </span>\r\n                                        </div>\r\n                                    </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"disConfig.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <!--<div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"disConfig.dateEffectiveFrom\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date:</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"disConfig.dateEffectiveTo\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   required>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>-->\r\n                            </fieldset>\r\n                            <header>Reason For Delay Submission</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid1?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic1\" [(ngModel)]=\"disConfig1.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid1\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid1?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value1\" placeholder=\"Value\" [(ngModel)]=\"disConfig1.value\"\r\n                                                   #value1=\"ngModel\" [ngClass]=\"{'invalid-data': value1.invalid && ( !valueValid1 || value1.touched ),\r\n                                                        'valid-data': valueValid1 && value1.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value1.invalid && (!valueValid1 || value1.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                                        <label class=\"label\">Rule:<span [style.color]=\"!ruleValid1?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"disConfig1.ruleName\"\r\n                                                   #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid1 || interestCode.touched ),\r\n                                                        'valid-data': ruleValid1 && interestCode.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestCode.invalid && (!ruleValid1 || interestCode.touched)\">\r\n                                            <span style=\"color: red;\">Rule is required </span>\r\n                                        </div>\r\n                                    </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"disConfig1.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <!--<div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid1?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig1.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"disConfig1.dateEffectiveFrom\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid1), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid1}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid1)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date:</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig1.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"disConfig1.dateEffectiveTo\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   required>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>-->\r\n                            </fieldset>\r\n                           \r\n                            <div class=\"row\">\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid2?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"disConfig.dateEffectiveFrom\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid2), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid2}\"\r\n                                               required>\r\n                                    </label>\r\n                                    <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid2)\">\r\n                                        <span style=\"color: red;\">Effective From Date is required </span>\r\n                                    </div>\r\n                                </section>\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective To Date:</label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ disConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"disConfig.dateEffectiveTo\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               required>\r\n                                    </label>\r\n                                </section>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveDisabilityConfigData(disConfig,disConfig1)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DisabilityconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabilityconfigurationComponent", function() { return DisabilityconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], DisabilityconfigurationComponent.prototype, "successModal", void 0);
    DisabilityconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disabilityconfiguration',
            template: __webpack_require__(/*! ./disabilityconfiguration.component.html */ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./disabilityconfiguration.component.css */ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], DisabilityconfigurationComponent);
    return DisabilityconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Disability Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                        Rule Name\r\n                                    </th>\r\n                                    <th>\r\n                                        Condition\r\n                                    </th>\r\n                                    <th>\r\n                                        Value\r\n                                    </th>\r\n                                    <th>\r\n                                        Description\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let disConfig of disConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"disConfig.status == 1\" (click)=\"onEditClick(disConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                        <a (click)=\"onViewClick(disConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{disConfig.ruleName}}</td>\r\n                                    <td>{{disConfig.logic}}</td>\r\n                                    <td>{{disConfig.value}}</td>\r\n                                    <td>{{disConfig.description}}</td>\r\n                                    <td>{{disConfig.dateEffectiveFromString}}</td>\r\n                                    <td>{{disConfig.dateEffectiveToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <div *ngIf=\"disConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <footer class=\"modal-footer\">\r\n                            <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DisabilityconfigurationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabilityconfigurationlistComponent", function() { return DisabilityconfigurationlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisabilityconfigurationlistComponent = /** @class */ (function () {
    function DisabilityconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.disConfigList = [];
    }
    DisabilityconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetDisabilityConfigDetails(this.page, this.pageSize);
    };
    DisabilityconfigurationlistComponent.prototype.GetDisabilityConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetDisabilityConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.disConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    DisabilityconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetDisabilityConfigDetails(page, this.pageSize);
    };
    DisabilityconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DisabilityconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DisabilityconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DisabilityconfigurationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disabilityconfigurationlist',
            template: __webpack_require__(/*! ./disabilityconfigurationlist.component.html */ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.html"),
            styles: [__webpack_require__(/*! ./disabilityconfigurationlist.component.css */ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], DisabilityconfigurationlistComponent);
    return DisabilityconfigurationlistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfiguration/educationconfiguration.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfiguration/educationconfiguration.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Education Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <header>Date of Admission Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic\" [(ngModel)]=\"eduConfig.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value\" placeholder=\"Value\" [(ngModel)]=\"eduConfig.value\"\r\n                                                   #value=\"ngModel\" [ngClass]=\"{'invalid-data': value.invalid && ( !valueValid || value.touched ),\r\n                                                        'valid-data': valueValid && value.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value.invalid && (!valueValid || value.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"eduConfig.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid || interestCode.touched ),\r\n                                'valid-data': ruleValid && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"eduConfig.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <!--<div class=\"row\">\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span> </label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"eduConfig.dateEffectiveFrom\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\"\r\n                           required>\r\n                </label>\r\n                <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                    <span style=\"color: red;\">Effective From Date is required </span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective To Date:</label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"eduConfig.dateEffectiveTo\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           required>\r\n                </label>\r\n            </section>\r\n        </div>-->\r\n                            </fieldset>\r\n                            <header>Son Age Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid1?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic1\" [(ngModel)]=\"eduConfig1.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid1\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid1?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value1\" placeholder=\"Value\" [(ngModel)]=\"eduConfig1.value\"\r\n                                                   #value1=\"ngModel\" [ngClass]=\"{'invalid-data': value1.invalid && ( !valueValid1 || value1.touched ),\r\n                                                        'valid-data': valueValid1 && value1.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value1.invalid && (!valueValid1 || value1.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid1?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"eduConfig1.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid1 || interestCode.touched ),\r\n                                'valid-data': ruleValid1 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid1 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"eduConfig1.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <!--<div class=\"row\">\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid1?'red':''\"><b>*</b></span> </label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig1.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"eduConfig1.dateEffectiveFrom\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid1), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid1}\"\r\n                           required>\r\n                </label>\r\n                <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid1)\">\r\n                    <span style=\"color: red;\">Effective From Date is required </span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective To Date:</label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig1.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"eduConfig1.dateEffectiveTo\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           required>\r\n                </label>\r\n            </section>\r\n        </div>-->\r\n                            </fieldset>\r\n                            <header>Max Limit Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid2?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic2\" [(ngModel)]=\"eduConfig2.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid2\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid2?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value2\" placeholder=\"Value\" [(ngModel)]=\"eduConfig2.value\"\r\n                                                   #value2=\"ngModel\" [ngClass]=\"{'invalid-data': value2.invalid && ( !valueValid2 || value2.touched ),\r\n                                                        'valid-data': valueValid2 && value2.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value2.invalid && (!valueValid2 || value2.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid2?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"eduConfig2.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid2 || interestCode.touched ),\r\n                                'valid-data': ruleValid2 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid2 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"eduConfig2.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div class=\"row\">\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid2?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig2.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"eduConfig2.dateEffectiveFrom\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid2), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid2}\"\r\n                                               required>\r\n                                    </label>\r\n                                    <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid2)\">\r\n                                        <span style=\"color: red;\">Effective From Date is required </span>\r\n                                    </div>\r\n                                </section>\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective To Date:</label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ eduConfig2.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"eduConfig2.dateEffectiveTo\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               required>\r\n                                    </label>\r\n                                </section>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveEducationConfigData(eduConfig,eduConfig1,eduConfig2)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfiguration/educationconfiguration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EducationconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationconfigurationComponent", function() { return EducationconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], EducationconfigurationComponent.prototype, "successModal", void 0);
    EducationconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-educationconfiguration',
            template: __webpack_require__(/*! ./educationconfiguration.component.html */ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./educationconfiguration.component.css */ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], EducationconfigurationComponent);
    return EducationconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Education Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                        Rule Name\r\n                                    </th>\r\n                                    <th>\r\n                                        Condition\r\n                                    </th>\r\n                                    <th>\r\n                                        Value\r\n                                    </th>\r\n                                    <th>\r\n                                        Description\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let eduConfig of eduConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"eduConfig.status == 1\" (click)=\"onEditClick(eduConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                        <a (click)=\"onViewClick(eduConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{eduConfig.ruleName}}</td>\r\n                                    <td>{{eduConfig.logic}}</td>\r\n                                    <td>{{eduConfig.value}}</td>\r\n                                    <td>{{eduConfig.description}}</td>\r\n                                    <td>{{eduConfig.dateEffectiveFromString}}</td>\r\n                                    <td>{{eduConfig.dateEffectiveToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <div *ngIf=\"eduConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <footer class=\"modal-footer\">\r\n                            <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EducationconfigurationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationconfigurationlistComponent", function() { return EducationconfigurationlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EducationconfigurationlistComponent = /** @class */ (function () {
    function EducationconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.eduConfigList = [];
    }
    EducationconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetEducationConfigDetails(this.page, this.pageSize);
    };
    EducationconfigurationlistComponent.prototype.GetEducationConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetEducationConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.eduConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    EducationconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetEducationConfigDetails(page, this.pageSize);
    };
    EducationconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/educationconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    EducationconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/educationconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    EducationconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    EducationconfigurationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-educationconfigurationlist',
            template: __webpack_require__(/*! ./educationconfigurationlist.component.html */ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.html"),
            styles: [__webpack_require__(/*! ./educationconfigurationlist.component.css */ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], EducationconfigurationlistComponent);
    return EducationconfigurationlistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Health&Family Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <header>Date of First Appointment Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic\" [(ngModel)]=\"helConfig.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value\" placeholder=\"Value\" [(ngModel)]=\"helConfig.value\"\r\n                                                   #value=\"ngModel\" [ngClass]=\"{'invalid-data': value.invalid && ( !valueValid || value.touched ),\r\n                                                        'valid-data': valueValid && value.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value.invalid && (!valueValid || value.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"helConfig.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid || interestCode.touched ),\r\n                                'valid-data': ruleValid && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"helConfig.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <!--<div class=\"row\">\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span> </label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"helConfig.dateEffectiveFrom\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\"\r\n                           required>\r\n                </label>\r\n                <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                    <span style=\"color: red;\">Effective From Date is required </span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective To Date:</label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"helConfig.dateEffectiveTo\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           required>\r\n                </label>\r\n            </section>\r\n        </div>-->\r\n                            </fieldset>\r\n                            <header>Date of Discharge Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid1?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic1\" [(ngModel)]=\"helConfig1.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid1\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid1?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value1\" placeholder=\"Value\" [(ngModel)]=\"helConfig1.value\"\r\n                                                   #value1=\"ngModel\" [ngClass]=\"{'invalid-data': value1.invalid && ( !valueValid1 || value1.touched ),\r\n                                                        'valid-data': valueValid1 && value1.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value1.invalid && (!valueValid1 || value1.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid1?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"helConfig1.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid1 || interestCode.touched ),\r\n                                'valid-data': ruleValid1 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid1 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"helConfig1.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <!--<div class=\"row\">\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid1?'red':''\"><b>*</b></span> </label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig1.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"helConfig1.dateEffectiveFrom\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid1), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid1}\"\r\n                           required>\r\n                </label>\r\n                <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid1)\">\r\n                    <span style=\"color: red;\">Effective From Date is required </span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col col-6\">\r\n                <label class=\"label\">Effective To Date:</label>\r\n                <label class=\"input\">\r\n                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                    <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                           placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig1.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                           [(ngModel)]=\"helConfig1.dateEffectiveTo\" readonly\r\n                           #effectiveFromDate=\"ngModel\"\r\n                           required>\r\n                </label>\r\n            </section>\r\n        </div>-->\r\n                            </fieldset>\r\n                            <header>Loss Of Employment Date Differnce</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid2?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic2\" [(ngModel)]=\"helConfig2.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid2\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid2?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value2\" placeholder=\"Value\" [(ngModel)]=\"helConfig2.value\"\r\n                                                   #value2=\"ngModel\" [ngClass]=\"{'invalid-data': value2.invalid && ( !valueValid2 || value2.touched ),\r\n                                                        'valid-data': valueValid2 && value2.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value2.invalid && (!valueValid2 || value2.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid2?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"helConfig2.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid2 || interestCode.touched ),\r\n                                'valid-data': ruleValid2 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid2 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"helConfig2.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <header>Loss Of Employment Amount Exceeding</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid3?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic3\" [(ngModel)]=\"helConfig3.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid3\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid3?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value3\" placeholder=\"Value\" [(ngModel)]=\"helConfig3.value\"\r\n                                                   #value3=\"ngModel\" [ngClass]=\"{'invalid-data': value3.invalid && ( !valueValid3 || value3.touched ),\r\n                                                        'valid-data': valueValid3 && value3.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value3.invalid && (!valueValid3 || value3.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid3?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"helConfig3.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid3 || interestCode.touched ),\r\n                                'valid-data': ruleValid3 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid3 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"helConfig3.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <header>Reason For Delay Submission</header>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Condition:<span [style.color]=\"!logicValid4?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic4\" [(ngModel)]=\"helConfig4.logic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logicValid4\">\r\n                                            <span style=\"color: red;\">Logic is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Value:<span [style.color]=\"!valueValid4?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"value4\" placeholder=\"Value\" [(ngModel)]=\"helConfig4.value\"\r\n                                                   #value4=\"ngModel\" [ngClass]=\"{'invalid-data': value4.invalid && ( !valueValid4 || value4.touched ),\r\n                                                        'valid-data': valueValid4 && value4.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"value4.invalid && (!valueValid4 || value4.touched)\">\r\n                                            <span style=\"color: red;\">Value is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <!--<section class=\"col col-6\">\r\n                <label class=\"label\">Rule:<span [style.color]=\"!ruleValid4?'red':''\"><b>*</b></span></label>\r\n                <label class=\"input\">\r\n                    <input type=\"text\" name=\"interestCode\" placeholder=\"Rule\" [(ngModel)]=\"helConfig4.ruleName\"\r\n                           #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !ruleValid4 || interestCode.touched ),\r\n                                'valid-data': ruleValid4 && interestCode.valid  }\" required>\r\n                </label>\r\n                <div *ngIf=\"interestCode.invalid && (!ruleValid4 || interestCode.touched)\">\r\n                    <span style=\"color: red;\">Rule is required </span>\r\n                </div>\r\n            </section>-->\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"helConfig4.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div class=\"row\">\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid2?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig2.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"helConfig2.dateEffectiveFrom\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid2), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid2}\"\r\n                                               required>\r\n                                    </label>\r\n                                    <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid2)\">\r\n                                        <span style=\"color: red;\">Effective From Date is required </span>\r\n                                    </div>\r\n                                </section>\r\n                                <section class=\"col col-6\">\r\n                                    <label class=\"label\">Effective To Date:</label>\r\n                                    <label class=\"input\">\r\n                                        <i class=\"icon-append fa fa-calendar\"></i>\r\n                                        <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                               placeholder=\"DD/MM/YYYY\" value=\"{{ helConfig2.dateEffectiveTo | date: 'dd/MM/yyyy' }}\"\r\n                                               [(ngModel)]=\"helConfig2.dateEffectiveTo\" readonly\r\n                                               #effectiveFromDate=\"ngModel\"\r\n                                               required>\r\n                                    </label>\r\n                                </section>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveHealthFamilyConfigData(helConfig,helConfig1,helConfig2,helConfig3,helConfig4)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HealthfamilyconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthfamilyconfigurationComponent", function() { return HealthfamilyconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], HealthfamilyconfigurationComponent.prototype, "successModal", void 0);
    HealthfamilyconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthfamilyconfiguration',
            template: __webpack_require__(/*! ./healthfamilyconfiguration.component.html */ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./healthfamilyconfiguration.component.css */ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], HealthfamilyconfigurationComponent);
    return HealthfamilyconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Health&Family Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                        Rule Name\r\n                                    </th>\r\n                                    <th>\r\n                                        Condition\r\n                                    </th>\r\n                                    <th>\r\n                                        Value\r\n                                    </th>\r\n                                    <th>\r\n                                        Description\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let helConfig of helConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"helConfig.status == 1\" (click)=\"onEditClick(helConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                        <a (click)=\"onViewClick(helConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{helConfig.ruleName}}</td>\r\n                                    <td>{{helConfig.logic}}</td>\r\n                                    <td>{{helConfig.value}}</td>\r\n                                    <td>{{helConfig.description}}</td>\r\n                                    <td>{{helConfig.dateEffectiveFromString}}</td>\r\n                                    <td>{{helConfig.dateEffectiveToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <div *ngIf=\"helConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <footer class=\"modal-footer\">\r\n                            <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: HealthfamilyconfigurationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthfamilyconfigurationlistComponent", function() { return HealthfamilyconfigurationlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HealthfamilyconfigurationlistComponent = /** @class */ (function () {
    function HealthfamilyconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.helConfigList = [];
    }
    HealthfamilyconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetHealthFamilyConfigDetails(this.page, this.pageSize);
    };
    HealthfamilyconfigurationlistComponent.prototype.GetHealthFamilyConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetHealthFamilyConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.helConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    HealthfamilyconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetHealthFamilyConfigDetails(page, this.pageSize);
    };
    HealthfamilyconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    HealthfamilyconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    HealthfamilyconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    HealthfamilyconfigurationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthfamilyconfigurationlist',
            template: __webpack_require__(/*! ./healthfamilyconfigurationlist.component.html */ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.html"),
            styles: [__webpack_require__(/*! ./healthfamilyconfigurationlist.component.css */ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], HealthfamilyconfigurationlistComponent);
    return HealthfamilyconfigurationlistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>PF Commission Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <fieldset>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Commission Code:<span [style.color]=\"!commissionCodeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"commissionCode\" placeholder=\"Commission Code\" [(ngModel)]=\"pfConfig.commissionCode\"\r\n                                                   #commissionCode=\"ngModel\" [ngClass]=\"{'invalid-data': commissionCode.invalid && ( !commissionCodeValid || commissionCode.touched ),\r\n                                                        'valid-data': commissionCodeValid && commissionCode.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"commissionCode.invalid && (!commissionCodeValid || commissionCode.touched)\">\r\n                                            <span style=\"color: red;\">Commission Code is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    \r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Commission Type:<span [style.color]=\"!commissionTypeValid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control select\" name=\"commissionType\" [(ngModel)]=\"pfConfig.commissionType\" #commissionType=\"ngModel\"\r\n                                                [ngClass]=\"{'invalid-data': commissionType.invalid && ( !commissionTypeValid || commissionType.touched ),\r\n                                        'valid-data': commissionTypeValid && commissionType.valid  }\"\r\n                                                required>\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\"Registration\">Registration</option>\r\n                                            <option value=\"Ledger\">Ledger</option>\r\n                                            <option value=\"Ledger\">Ledger</option>\r\n                                        </select><i></i>\r\n                                        <div *ngIf=\"commissionType.invalid && (!commissionTypeValid || commissionType.touched)\">\r\n                                            <span style=\"color: red;\">Select Commission Type </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Agent Type:<span [style.color]=\"!agentTypeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <select class=\"form-control select\" name=\"agentType\" [(ngModel)]=\"pfConfig.agentType\" #agentType=\"ngModel\"\r\n                                                [ngClass]=\"{'invalid-data': agentType.invalid && ( !agentTypeValid || agentType.touched ),\r\n                                        'valid-data': agentTypeValid && agentType.valid  }\"\r\n                                                required>\r\n                                                <option value=\"0\" selected>Choose an Option</option>\r\n                                                <option value=\"1\">CA</option>\r\n                                                <option value=\"2\">SLO</option>\r\n                                                <option value=\"3\">RP</option>\r\n                                            </select>\r\n                                        </label>\r\n                                        <div *ngIf=\"agentType.invalid && (!agentTypeValid || agentType.touched)\">\r\n                                            <span style=\"color: red;\">Select an Agent Type </span>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Percentage On Normal Amount:<span [style.color]=\"!percentageOnNormalAmountValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"percentageOnNormalAmount\" placeholder=\"Percentage On Normal Amount\" [(ngModel)]=\"pfConfig.percentageOnNormalAmount\"\r\n                                                   #percentageOnNormalAmount=\"ngModel\" [ngClass]=\"{'invalid-data': percentageOnNormalAmount.invalid && ( !percentageOnNormalAmountValid || percentageOnNormalAmount.touched ),\r\n                                                        'valid-data': percentageOnNormalAmountValid && percentageOnNormalAmount.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"percentageOnNormalAmount.invalid && (!percentageOnNormalAmountValid || percentageOnNormalAmount.touched)\">\r\n                                            <span style=\"color: red;\">Percentage On Normal Amount is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Percentage On Arrear Amount:</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"percentageOnArrearAmount\" placeholder=\"Percentage On Arrear Amount\" [(ngModel)]=\"pfConfig.percentageOnArrearAmount\"\r\n                                                   #percentageOnArrearAmount=\"ngModel\">\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Fixed Normal Amount:<span [style.color]=\"!fixedNormalAmountValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"fixedNormalAmount\" placeholder=\"Fixed Normal Amount\" [(ngModel)]=\"pfConfig.fixedNormalAmount\"\r\n                                                   #fixedNormalAmount=\"ngModel\" [ngClass]=\"{'invalid-data': fixedNormalAmount.invalid && ( !fixedNormalAmountValid || fixedNormalAmount.touched ),\r\n                                                        'valid-data': fixedNormalAmountValid && fixedNormalAmount.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"fixedNormalAmount.invalid && (!fixedNormalAmountValid || fixedNormalAmount.touched)\">\r\n                                            <span style=\"color: red;\">Fixed Normal Amount is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Fixed Arrear Amount:</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"fixedArrearAmount\" placeholder=\"Fixed Arrear Amount\" [(ngModel)]=\"pfConfig.fixedArrearAmount\"\r\n                                                   #fixedArrearAmount=\"ngModel\">\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveDateFromValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveDateFrom\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ pfConfig.effectiveDateFrom | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"pfConfig.effectiveDateFrom\" readonly\r\n                                                   #effectiveDateFrom=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveDateFrom.invalid && (!effectiveDateFromValid), 'valid-data': effectiveDateFrom.valid && effectiveDateFromValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveDateFrom.invalid && (!effectiveDateFromValid)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date:<span [style.color]=\"!effectiveDateToValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveDateTo\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ pfConfig.effectiveToDate | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"pfConfig.effectiveDateTo\" readonly\r\n                                                   #effectiveDateTo=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveDateTo.invalid && (!effectiveDateToValid), 'valid-data': effectiveDateTo.valid && effectiveDateToValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveDateTo.invalid && (!effectiveDateToValid)\">\r\n                                            <span style=\"color: red;\">Effective To Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n\r\n\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveClaimsData(pfConfig)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PfcommissionconfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfcommissionconfigComponent", function() { return PfcommissionconfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], PfcommissionconfigComponent.prototype, "successModal", void 0);
    PfcommissionconfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfcommissionconfig',
            template: __webpack_require__(/*! ./pfcommissionconfig.component.html */ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.html"),
            styles: [__webpack_require__(/*! ./pfcommissionconfig.component.css */ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], PfcommissionconfigComponent);
    return PfcommissionconfigComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>PF Commission Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <!--<thead>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssI_Number\">Commission Code</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benFullName\">Percentage On Normal Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"receiptNo\">Percentage On Arrear Amount</mfDefaultSorter>\r\n\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"bookNo\">Fixed Normal Amount</mfDefaultSorter>\r\n\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"collectionDateString\">Fixed Arrear Amount</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paidFromMonth\">Commission Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paidToMonth\">Effective From Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"collectionAmount\">Effective To Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>-->\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                        Commission Code\r\n                                    </th>\r\n                                    <th>\r\n                                        Percentage On Normal Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Percentage On Arrear Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Fixed Normal Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Fixed Arrear Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Commission Type\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let pfConfig of pfConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"pfConfig.status == 1\" (click)=\"onEditClick(pfConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onViewClick(pfConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{pfConfig.commissionCode}}</td>\r\n                                    <td>{{pfConfig.percentageOnNormalAmount}}</td>\r\n                                    <td>{{pfConfig.percentageOnArrearAmount}}</td>\r\n                                    <td>{{pfConfig.fixedNormalAmount}}</td>\r\n                                    <td>{{pfConfig.fixedArrearAmount}}</td>\r\n                                    <td>{{pfConfig.commissionType}}</td>\r\n                                    <td>{{pfConfig.effectiveDateFromString}}</td>\r\n                                    <td>{{pfConfig.effectiveDateToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"pfConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PfcommissionconfiglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfcommissionconfiglistComponent", function() { return PfcommissionconfiglistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PfcommissionconfiglistComponent = /** @class */ (function () {
    function PfcommissionconfiglistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.pfConfigList = [];
    }
    PfcommissionconfiglistComponent.prototype.ngOnInit = function () {
        this.GetPFCommissionConfigDetails(this.page, this.pageSize);
    };
    PfcommissionconfiglistComponent.prototype.GetPFCommissionConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPFCommissionConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pfConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfcommissionconfiglistComponent.prototype.changePage = function (page) {
        this.GetPFCommissionConfigDetails(page, this.pageSize);
    };
    PfcommissionconfiglistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "edit" }], { skipLocationChange: true });
    };
    PfcommissionconfiglistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "view" }], { skipLocationChange: true });
    };
    PfcommissionconfiglistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfcommissionconfiglist',
            template: __webpack_require__(/*! ./pfcommissionconfiglist.component.html */ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.html"),
            styles: [__webpack_require__(/*! ./pfcommissionconfiglist.component.css */ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], PfcommissionconfiglistComponent);
    return PfcommissionconfiglistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfconfig.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pfconfig/pfconfig.module.ts ***!
  \*********************************************/
/*! exports provided: PfconfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfconfigModule", function() { return PfconfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pfconfiglanding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pfconfiglanding.component */ "./src/app/pfconfig/pfconfiglanding.component.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _pfintertconfig_pfintertconfig_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pfintertconfig/pfintertconfig.component */ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.ts");
/* harmony import */ var _pfinterestconfiglist_pfinterestconfiglist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pfinterestconfiglist/pfinterestconfiglist.component */ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.ts");
/* harmony import */ var _pfcommissionconfig_pfcommissionconfig_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pfcommissionconfig/pfcommissionconfig.component */ "./src/app/pfconfig/pfcommissionconfig/pfcommissionconfig.component.ts");
/* harmony import */ var _pfcommissionconfiglist_pfcommissionconfiglist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pfcommissionconfiglist/pfcommissionconfiglist.component */ "./src/app/pfconfig/pfcommissionconfiglist/pfcommissionconfiglist.component.ts");
/* harmony import */ var _pfconfiguration_pfconfiguration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pfconfiguration/pfconfiguration.component */ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.ts");
/* harmony import */ var _pfconfigurationlist_pfconfigurationlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pfconfigurationlist/pfconfigurationlist.component */ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.ts");
/* harmony import */ var _receiptbook_receiptbook_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./receiptbook/receiptbook.component */ "./src/app/pfconfig/receiptbook/receiptbook.component.ts");
/* harmony import */ var _receiptbooklist_receiptbooklist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./receiptbooklist/receiptbooklist.component */ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.ts");
/* harmony import */ var _educationconfiguration_educationconfiguration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./educationconfiguration/educationconfiguration.component */ "./src/app/pfconfig/educationconfiguration/educationconfiguration.component.ts");
/* harmony import */ var _educationconfigurationlist_educationconfigurationlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./educationconfigurationlist/educationconfigurationlist.component */ "./src/app/pfconfig/educationconfigurationlist/educationconfigurationlist.component.ts");
/* harmony import */ var _healthfamilyconfigurationlist_healthfamilyconfigurationlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./healthfamilyconfigurationlist/healthfamilyconfigurationlist.component */ "./src/app/pfconfig/healthfamilyconfigurationlist/healthfamilyconfigurationlist.component.ts");
/* harmony import */ var _healthfamilyconfiguration_healthfamilyconfiguration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./healthfamilyconfiguration/healthfamilyconfiguration.component */ "./src/app/pfconfig/healthfamilyconfiguration/healthfamilyconfiguration.component.ts");
/* harmony import */ var _disabilityconfigurationlist_disabilityconfigurationlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./disabilityconfigurationlist/disabilityconfigurationlist.component */ "./src/app/pfconfig/disabilityconfigurationlist/disabilityconfigurationlist.component.ts");
/* harmony import */ var _disabilityconfiguration_disabilityconfiguration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./disabilityconfiguration/disabilityconfiguration.component */ "./src/app/pfconfig/disabilityconfiguration/disabilityconfiguration.component.ts");
/* harmony import */ var _deathconfiguration_deathconfiguration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./deathconfiguration/deathconfiguration.component */ "./src/app/pfconfig/deathconfiguration/deathconfiguration.component.ts");
/* harmony import */ var _deathconfigurationlist_deathconfigurationlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./deathconfigurationlist/deathconfigurationlist.component */ "./src/app/pfconfig/deathconfigurationlist/deathconfigurationlist.component.ts");
/* harmony import */ var _benefitconfiguration_benefitconfiguration_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./benefitconfiguration/benefitconfiguration.component */ "./src/app/pfconfig/benefitconfiguration/benefitconfiguration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    {
        path: '',
        component: _pfconfiglanding_component__WEBPACK_IMPORTED_MODULE_6__["PfconfiglandingComponent"],
        children: [
            { path: '', redirectTo: 'pfinterestconfig', pathMatch: 'full' },
            { path: 'pfinterestconfig', component: _pfintertconfig_pfintertconfig_component__WEBPACK_IMPORTED_MODULE_8__["PfintertconfigComponent"] },
            { path: 'pfinterestconfiglist', component: _pfinterestconfiglist_pfinterestconfiglist_component__WEBPACK_IMPORTED_MODULE_9__["PfinterestconfiglistComponent"] },
            { path: 'pfcommissionconfig', component: _pfcommissionconfig_pfcommissionconfig_component__WEBPACK_IMPORTED_MODULE_10__["PfcommissionconfigComponent"] },
            { path: 'pfcommissionconfiglist', component: _pfcommissionconfiglist_pfcommissionconfiglist_component__WEBPACK_IMPORTED_MODULE_11__["PfcommissionconfiglistComponent"] },
            { path: 'pfconfiguration', component: _pfconfiguration_pfconfiguration_component__WEBPACK_IMPORTED_MODULE_12__["PfconfigurationComponent"] },
            { path: 'pfconfigurationlist', component: _pfconfigurationlist_pfconfigurationlist_component__WEBPACK_IMPORTED_MODULE_13__["PfconfigurationlistComponent"] },
            { path: 'receiptbook', component: _receiptbook_receiptbook_component__WEBPACK_IMPORTED_MODULE_14__["ReceiptbookComponent"] },
            { path: 'receiptbooklist', component: _receiptbooklist_receiptbooklist_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptbooklistComponent"] },
            { path: 'educationconfiguration', component: _educationconfiguration_educationconfiguration_component__WEBPACK_IMPORTED_MODULE_16__["EducationconfigurationComponent"] },
            { path: 'educationconfigurationlist', component: _educationconfigurationlist_educationconfigurationlist_component__WEBPACK_IMPORTED_MODULE_17__["EducationconfigurationlistComponent"] },
            { path: 'healthfamilyconfiguration', component: _healthfamilyconfiguration_healthfamilyconfiguration_component__WEBPACK_IMPORTED_MODULE_19__["HealthfamilyconfigurationComponent"] },
            { path: 'healthfamilyconfigurationlist', component: _healthfamilyconfigurationlist_healthfamilyconfigurationlist_component__WEBPACK_IMPORTED_MODULE_18__["HealthfamilyconfigurationlistComponent"] },
            { path: 'disabilityconfiguration', component: _disabilityconfiguration_disabilityconfiguration_component__WEBPACK_IMPORTED_MODULE_21__["DisabilityconfigurationComponent"] },
            { path: 'disabilityconfigurationlist', component: _disabilityconfigurationlist_disabilityconfigurationlist_component__WEBPACK_IMPORTED_MODULE_20__["DisabilityconfigurationlistComponent"] },
            { path: 'deathconfiguration', component: _deathconfiguration_deathconfiguration_component__WEBPACK_IMPORTED_MODULE_22__["DeathconfigurationComponent"] },
            { path: 'deathconfigurationlist', component: _deathconfigurationlist_deathconfigurationlist_component__WEBPACK_IMPORTED_MODULE_23__["DeathconfigurationlistComponent"] },
            { path: 'benefitconfiguration', component: _benefitconfiguration_benefitconfiguration_component__WEBPACK_IMPORTED_MODULE_24__["BenefitconfigurationComponent"] },
        ]
    },
];
var PfconfigModule = /** @class */ (function () {
    function PfconfigModule() {
    }
    PfconfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            providers: [_services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_7__["PFConfigDataService"]],
            declarations: [_pfconfiglanding_component__WEBPACK_IMPORTED_MODULE_6__["PfconfiglandingComponent"], _pfintertconfig_pfintertconfig_component__WEBPACK_IMPORTED_MODULE_8__["PfintertconfigComponent"], _pfinterestconfiglist_pfinterestconfiglist_component__WEBPACK_IMPORTED_MODULE_9__["PfinterestconfiglistComponent"], _pfcommissionconfig_pfcommissionconfig_component__WEBPACK_IMPORTED_MODULE_10__["PfcommissionconfigComponent"], _pfcommissionconfiglist_pfcommissionconfiglist_component__WEBPACK_IMPORTED_MODULE_11__["PfcommissionconfiglistComponent"], _pfconfiguration_pfconfiguration_component__WEBPACK_IMPORTED_MODULE_12__["PfconfigurationComponent"], _pfconfigurationlist_pfconfigurationlist_component__WEBPACK_IMPORTED_MODULE_13__["PfconfigurationlistComponent"], _receiptbook_receiptbook_component__WEBPACK_IMPORTED_MODULE_14__["ReceiptbookComponent"], _receiptbooklist_receiptbooklist_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptbooklistComponent"], _educationconfiguration_educationconfiguration_component__WEBPACK_IMPORTED_MODULE_16__["EducationconfigurationComponent"], _educationconfigurationlist_educationconfigurationlist_component__WEBPACK_IMPORTED_MODULE_17__["EducationconfigurationlistComponent"], _healthfamilyconfigurationlist_healthfamilyconfigurationlist_component__WEBPACK_IMPORTED_MODULE_18__["HealthfamilyconfigurationlistComponent"], _healthfamilyconfiguration_healthfamilyconfiguration_component__WEBPACK_IMPORTED_MODULE_19__["HealthfamilyconfigurationComponent"], _disabilityconfigurationlist_disabilityconfigurationlist_component__WEBPACK_IMPORTED_MODULE_20__["DisabilityconfigurationlistComponent"], _disabilityconfiguration_disabilityconfiguration_component__WEBPACK_IMPORTED_MODULE_21__["DisabilityconfigurationComponent"], _deathconfiguration_deathconfiguration_component__WEBPACK_IMPORTED_MODULE_22__["DeathconfigurationComponent"], _deathconfigurationlist_deathconfigurationlist_component__WEBPACK_IMPORTED_MODULE_23__["DeathconfigurationlistComponent"], _benefitconfiguration_benefitconfiguration_component__WEBPACK_IMPORTED_MODULE_24__["BenefitconfigurationComponent"]]
        })
    ], PfconfigModule);
    return PfconfigModule;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfconfiglanding.component.css":
/*!********************************************************!*\
  !*** ./src/app/pfconfig/pfconfiglanding.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfconfiglanding.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pfconfig/pfconfiglanding.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pfconfig/pfconfiglanding.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pfconfig/pfconfiglanding.component.ts ***!
  \*******************************************************/
/*! exports provided: PfconfiglandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfconfiglandingComponent", function() { return PfconfiglandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PfconfiglandingComponent = /** @class */ (function () {
    function PfconfiglandingComponent() {
    }
    PfconfiglandingComponent.prototype.ngOnInit = function () {
    };
    PfconfiglandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfconfiglanding',
            template: __webpack_require__(/*! ./pfconfiglanding.component.html */ "./src/app/pfconfig/pfconfiglanding.component.html"),
            styles: [__webpack_require__(/*! ./pfconfiglanding.component.css */ "./src/app/pfconfig/pfconfiglanding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PfconfiglandingComponent);
    return PfconfiglandingComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pfconfig/pfconfiguration/pfconfiguration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pfconfig/pfconfiguration/pfconfiguration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>PF Configuration</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form\">\r\n                            <header>Contribution</header>\r\n                            <fieldset id=\"contribution\">\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date <span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ configuration.dateEffectiveFrom | date: 'dd/MM/yyyy' }}\" [(ngModel)]=\"configuration.dateEffectiveFrom\"\r\n                                                   readonly\r\n                                                   #effectiveFromDate=\"ngModel\" required\r\n                                                   [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\" />\r\n                                            <i></i>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date <span [style.color]=\"!effectiveToDateValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ configuration.dateEffectiveTo | date: 'dd/MM/yyyy' }}\" [(ngModel)]=\"configuration.dateEffectiveTo\"\r\n                                                   readonly\r\n                                                   #effectiveToDate=\"ngModel\" required\r\n                                                   [ngClass]=\"{'invalid-data':effectiveToDate.invalid && (!effectiveToDateValid), 'valid-data': effectiveToDate.valid && effectiveToDateValid}\" />\r\n                                            <i></i>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveToDate.invalid && (!effectiveToDateValid)\">\r\n                                            <span style=\"color: red;\">Effective To Date is required </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Beneficiary Monthly Contribution <span [style.color]=\"!benMonthlyContributionValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"benMonthlyContribution\" placeholder=\"Beneficiary Monthly Contribution\" NumbersOnly [(ngModel)]=\"configuration.beneficiaryPFContribution\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!benMonthlyContributionValid\">\r\n                                            <span style=\"color: red;\">Beneficiary Monthly Contribution is required </span>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                    <section class=\"col col-6\">\r\n\r\n                                        <label class=\"label\">Government Monthly Contribution <span [style.color]=\"!govMonthlyContributionValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"govMonthlyContribution\" placeholder=\"Government Monthly Contribution\" NumbersOnly [(ngModel)]=\"configuration.governmentPFContribution\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!govMonthlyContributionValid\">\r\n                                            <span style=\"color: red;\">Government Monthly Contribution is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"beneficiaryEligibilityFS\">\r\n                                <header>Beneficiary Eligibility</header>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Minimum Age in year <span [style.color]=\"!minAgeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"minAge\" placeholder=\"Minimum Age in year\" NumbersOnly [(ngModel)]=\"configuration.minAge\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!minAgeValid\">\r\n                                            <span style=\"color: red;\">Minimum Age in year is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Maximum Age in year <span [style.color]=\"!maxAgeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"maxAge\" placeholder=\"Maximum Age in year\" NumbersOnly [(ngModel)]=\"configuration.maxAge\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!maxAgeValid\">\r\n                                            <span style=\"color: red;\">Maximum Age in year is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Maximum Average Monthly Family Income <span [style.color]=\"!avgFamilyIncomeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"avgFamilyIncome\" placeholder=\"Maximum Average Monthly Family Income\" NumbersOnly [(ngModel)]=\"configuration.averageMonthlyIncome\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!avgFamilyIncomeValid\">\r\n                                            <span style=\"color: red;\">Maximum Average Monthly Family Income is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"closureFS\">\r\n                                <header>Closure/Maturity </header>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Lock in Period (Months) <span [style.color]=\"!lockPeriodValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"lockPeriod\" placeholder=\"Lock in Period (Months)\" NumbersOnly [(ngModel)]=\"configuration.pfLockingPeriodMonths\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!lockPeriodValid\">\r\n                                            <span style=\"color: red;\">Lock in Period is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Inactive Period (months)  <span [style.color]=\"!inactivePeriodValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"inactivePeriod\" placeholder=\"Inactive Period (months) \" NumbersOnly [(ngModel)]=\"configuration.inActivePeriodMonths\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!inactivePeriodValid\">\r\n                                            <span style=\"color: red;\">Inactive Period is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">A/c Maturity Age (Years) <span [style.color]=\"!maturityAgeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"maturityAge\" placeholder=\"A/c Maturity Age (Years)\" NumbersOnly [(ngModel)]=\"configuration.maturityAge\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!maturityAgeValid\">\r\n                                            <span style=\"color: red;\">A/c Maturity Age is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">A/c Maturity Age Condition:<span [style.color]=\"!logic2Valid?'red':''\"><b>*</b></span></label>\r\n                                        <select class=\"form-control\" name=\"logic\" [(ngModel)]=\"configuration.maturityAgeLogic\">\r\n                                            <option value=\"0\" selected>Choose an Option</option>\r\n                                            <option value=\">\">></option>\r\n                                            <option value=\"<\"><</option>\r\n                                            <option value=\">=\">>=</option>\r\n                                            <option value=\"<=\"><=</option>\r\n                                            <option value=\"==\">==</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"!logic2Valid\">\r\n                                            <span style=\"color: red;\">A/c Maturity Age Condition is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"interestFS\">\r\n                                <header>Interest </header>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Collection CutOff:<span [style.color]=\"!collectionCutOffValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"collectionCutOff\" placeholder=\"Collection CutOff\" [(ngModel)]=\"configuration.collectionCutoff\"\r\n                                                   #collectionCutOff=\"ngModel\" [ngClass]=\"{'invalid-data': collectionCutOff.invalid && ( !collectionCutOffValid || collectionCutOff.touched ),\r\n                                                        'valid-data': collectionCutOffValid && collectionCutOff.valid  }\" required max=\"30\" min=\"1\" maxlength=\"2\">\r\n                                        </label>\r\n                                        <div *ngIf=\"collectionCutOff.invalid && (!collectionCutOffValid || collectionCutOff.touched)\">\r\n                                            <span style=\"color: red;\">Collection CutOff is required </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"!collectionCutOffRange\">\r\n                                            <span style=\"color: red;\">Collection CutOff should be in the (1-30) range </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Interest Rate(%):<span [style.color]=\"!interestRateValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"interestRate\" placeholder=\"Interest Rate\" [(ngModel)]=\"configuration.pfInterestRate\"\r\n                                                   #interestRate=\"ngModel\" [ngClass]=\"{'invalid-data': interestRate.invalid && ( !interestRateValid || interestRate.touched ),\r\n                                                        'valid-data': interestRateValid && interestRate.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestRate.invalid && (!interestRateValid || interestRate.touched)\">\r\n                                            <span style=\"color: red;\">Interest Rate is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"agentFS\">\r\n                                <header>Agent Collection Limit </header>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Agent Collection Limit:<span [style.color]=\"!agentCollectionLimitValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"agentCollectionLimit\" placeholder=\"Agent Collection Limit\" [(ngModel)]=\"configuration.agentCollectionLimit\"\r\n                                                   #agentCollectionLimit=\"ngModel\" [ngClass]=\"{'invalid-data': agentCollectionLimit.invalid && ( !agentCollectionLimitValid || agentCollectionLimit.touched ),\r\n                                                        'valid-data': agentCollectionLimitValid && agentCollectionLimit.valid  }\" required >\r\n                                        </label>\r\n                                        <div *ngIf=\"agentCollectionLimit.invalid && (!agentCollectionLimitValid || agentCollectionLimit.touched)\">\r\n                                            <span style=\"color: red;\">Agent Collection Limit is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <footer>\r\n                                <a *ngIf=\"mode != 'view'\" class=\"btn btn-primary\" (click)=\"saveContribution(configuration)\">Submit</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"showHistory()\">History</a>\r\n                                <a *ngIf=\"mode != 'view'\" class=\"btn btn-default\" (click)=\"clearContribution()\">Reset</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\">Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                    <!-- end widget content -->\r\n                </div>\r\n                <!-- end widget div -->\r\n            </div>\r\n            <!-- end widget -->\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n    <!-- end row -->\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Configuration List</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px; overflow-x:scroll\">\r\n                    <table class=\"table table-striped\" [mfData]=\"configurationData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"effectiveFromDateString\">Effective From Date</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"effectiveToDateString\">Effective To Date</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"beneficiaryPFContribution\">Beneficiary PF Contribution</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"governmentPFContribution\">Government PF Contribution</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"pfLockingPeriodMonths\">Lock in Period (Months)</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"inActivePeriodMonths\">InActive Period</mfDefaultSorter>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let config of mf.data|grdFilter: {effectiveFromDateString: searchText,effectiveToDateString: searchText, beneficiaryPFContribution: searchText,\r\n       governmentPFContribution: searchText, pfLockingPeriodMonths: searchText, inActivePeriodMonths:searchText,  maturityAge: searchText, averageMonthlyIncome: searchText}; let i=index;\">\r\n                                <td class=\"\">\r\n                                    <a (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                    <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                </td>\r\n                                <td>{{config.effectiveFromDateString}}</td>\r\n                                <td>{{config.effectiveToDateString}}</td>\r\n                                <td>{{config.beneficiaryPFContribution}}</td>\r\n                                <td>{{config.governmentPFContribution}}</td>\r\n                                <td>{{config.pfLockingPeriodMonths}}</td>\r\n                                <td>{{config.inActivePeriodMonths}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                    </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitClick()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->"

/***/ }),

/***/ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pfconfig/pfconfiguration/pfconfiguration.component.ts ***!
  \***********************************************************************/
/*! exports provided: PfconfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfconfigurationComponent", function() { return PfconfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PfconfigurationComponent.prototype, "successModal", void 0);
    PfconfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfconfiguration',
            template: __webpack_require__(/*! ./pfconfiguration.component.html */ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.html"),
            styles: [__webpack_require__(/*! ./pfconfiguration.component.css */ "./src/app/pfconfig/pfconfiguration/pfconfiguration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__["PFConfigDataService"]])
    ], PfconfigurationComponent);
    return PfconfigurationComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Configuration List </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Action\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                    <th>\r\n                                       Interest Rate\r\n                                    </th>\r\n                                    <th>\r\n                                        Beneficiary PF Contribution\r\n                                    </th>\r\n                                    <th>\r\n                                        Government PF Contribution\r\n                                    </th>\r\n                                    <th>\r\n                                        Lock in Period (Months)\r\n                                    </th>\r\n                                    <th>\r\n                                        InActive Period\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let config of configurationData\">\r\n                                    <td class=\"\">\r\n\r\n                                        <a *ngIf=\"config.status == 1\" (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{config.effectiveFromDateString}}</td>\r\n                                    <td>{{config.effectiveToDateString}}</td>\r\n                                    <td>{{config.pfInterestRate}}</td>\r\n                                    <td>{{config.beneficiaryPFContribution}}</td>\r\n                                    <td>{{config.governmentPFContribution}}</td>\r\n                                    <td>{{config.pfLockingPeriodMonths}}</td>\r\n                                    <td>{{config.inActivePeriodMonths}}</td>\r\n\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"configurationData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <!--<table class=\"table table-striped\" [mfData]=\"configurationData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                         <thead>\r\n                             <tr>\r\n                                 <th>\r\n                                     <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"effectiveFromDateString\">Effective From Date</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"effectiveToDateString\">Effective To Date</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"beneficiaryPFContribution\">Beneficiary PF Contribution</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"governmentPFContribution\">Government PF Contribution</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"pfLockingPeriodMonths\">Lock in Period (Months)</mfDefaultSorter>\r\n                                 </th>\r\n                                 <th>\r\n                                     <mfDefaultSorter by=\"inActivePeriodMonths\">InActive Period</mfDefaultSorter>\r\n                                 </th>\r\n                             </tr>\r\n                         </thead>\r\n                         <tbody>\r\n                             <tr *ngFor=\"let config of mf.data|grdFilter: {effectiveFromDateString: searchText,effectiveToDateString: searchText, beneficiaryPFContribution: searchText,\r\n    governmentPFContribution: searchText, pfLockingPeriodMonths: searchText, inActivePeriodMonths:searchText,  maturityAge: searchText, averageMonthlyIncome: searchText}; let i=index;\">\r\n                                 <td class=\"\">\r\n                                     <a (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                     <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                 </td>\r\n                                 <td>{{config.effectiveFromDateString}}</td>\r\n                                 <td>{{config.effectiveToDateString}}</td>\r\n                                 <td>{{config.beneficiaryPFContribution}}</td>\r\n                                 <td>{{config.governmentPFContribution}}</td>\r\n                                 <td>{{config.pfLockingPeriodMonths}}</td>\r\n                                 <td>{{config.inActivePeriodMonths}}</td>\r\n                             </tr>\r\n                         </tbody>\r\n\r\n\r\n                         <tfoot>\r\n                             <tr>\r\n                                 <td colspan=\"9\">\r\n                                     <div *ngIf=\"configurationData.length>0\">\r\n                                         <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                     </div>\r\n                                 </td>\r\n                             </tr>\r\n                         </tfoot>\r\n                     </table>-->\r\n                        <footer class=\"modal-footer\">\r\n                            <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PfconfigurationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfconfigurationlistComponent", function() { return PfconfigurationlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PfconfigurationlistComponent = /** @class */ (function () {
    //Paging props end
    function PfconfigurationlistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.configurationData = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
    }
    PfconfigurationlistComponent.prototype.ngOnInit = function () {
        this.getPFConfigurations(this.page, this.pageSize);
    };
    PfconfigurationlistComponent.prototype.getPFConfigurations = function (pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPFConfigurations(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.configurationData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfconfigurationlistComponent.prototype.changepage = function (page) {
        this.getPFConfigurations(this.page, this.pageSize);
    };
    PfconfigurationlistComponent.prototype.onEditClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "edit" }], { skipLocationChange: true });
    };
    PfconfigurationlistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "view" }], { skipLocationChange: true });
    };
    PfconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    PfconfigurationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfconfigurationlist',
            template: __webpack_require__(/*! ./pfconfigurationlist.component.html */ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.html"),
            styles: [__webpack_require__(/*! ./pfconfigurationlist.component.css */ "./src/app/pfconfig/pfconfigurationlist/pfconfigurationlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__["PFConfigDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PfconfigurationlistComponent);
    return PfconfigurationlistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>PF Interest Conguration History </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>\r\n                                       Interest Code\r\n                                    </th>\r\n                                    <th>\r\n                                        Interest Rate(%)\r\n                                    </th>\r\n                                    <th>\r\n                                        Interest Calculation Day\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective From Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Effective To Date\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let pfConfig of pfConfigList\">\r\n                                    <td>\r\n                                        <a *ngIf=\"pfConfig.status == 1\" (click)=\"onEditClick(pfConfig)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onViewClick(pfConfig)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{pfConfig.interestCode}}</td>\r\n                                    <td>{{pfConfig.interestRate}}</td>\r\n                                    <td>{{pfConfig.interestCalculationDay}}</td>\r\n                                    <td>{{pfConfig.effectiveDateFromString}}</td>\r\n                                    <td>{{pfConfig.effectiveDateToString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"6\">\r\n                                        <div *ngIf=\"pfConfigList.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changePage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PfinterestconfiglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfinterestconfiglistComponent", function() { return PfinterestconfiglistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PfinterestconfiglistComponent = /** @class */ (function () {
    function PfinterestconfiglistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = src_app_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
        this.pfConfigList = [];
    }
    PfinterestconfiglistComponent.prototype.ngOnInit = function () {
        this.GetPFInterestConfigDetails(this.page, this.pageSize);
    };
    PfinterestconfiglistComponent.prototype.GetPFInterestConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPFInterestConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pfConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfinterestconfiglistComponent.prototype.changePage = function (page) {
        this.GetPFInterestConfigDetails(page, this.pageSize);
    };
    PfinterestconfiglistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "edit" }], { skipLocationChange: true });
    };
    PfinterestconfiglistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "view" }], { skipLocationChange: true });
    };
    PfinterestconfiglistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfinterestconfiglist',
            template: __webpack_require__(/*! ./pfinterestconfiglist.component.html */ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.html"),
            styles: [__webpack_require__(/*! ./pfinterestconfiglist.component.css */ "./src/app/pfconfig/pfinterestconfiglist/pfinterestconfiglist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], PfinterestconfiglistComponent);
    return PfinterestconfiglistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pfconfig/pfintertconfig/pfintertconfig.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pfconfig/pfintertconfig/pfintertconfig.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>PF Interest Configuration</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <fieldset>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Interest Code:<span [style.color]=\"!interestCodeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"interestCode\" placeholder=\"Interest Code\" [(ngModel)]=\"pfConfig.interestCode\"\r\n                                                   #interestCode=\"ngModel\" [ngClass]=\"{'invalid-data': interestCode.invalid && ( !interestCodeValid || interestCode.touched ),\r\n                                                        'valid-data': interestCodeValid && interestCode.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestCode.invalid && (!interestCodeValid || interestCode.touched)\">\r\n                                            <span style=\"color: red;\">Interest Code is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Description:</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea rows=\"3\" cols=\"72\" class=\"custom-scroll\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"pfConfig.description\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Interest Calculation Day:<span [style.color]=\"!interestCalculationDayValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"interestCalculationDay\" placeholder=\"Interest Calculation Day\" [(ngModel)]=\"pfConfig.interestCalculationDay\"\r\n                                                   #interestCalculationDay=\"ngModel\" [ngClass]=\"{'invalid-data': interestCalculationDay.invalid && ( !interestCalculationDayValid || interestCalculationDay.touched ),\r\n                                                        'valid-data': interestCalculationDayValid && interestCalculationDay.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestCalculationDay.invalid && (!interestCalculationDayValid || interestCalculationDay.touched)\">\r\n                                            <span style=\"color: red;\">Interest Calculation Day is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Interest Rate(%):<span [style.color]=\"!interestRateValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"interestRate\" placeholder=\"Interest Rate\" [(ngModel)]=\"pfConfig.interestRate\"\r\n                                                   #interestRate=\"ngModel\" [ngClass]=\"{'invalid-data': interestCalculationDay.invalid && ( !interestRateValid || interestRate.touched ),\r\n                                                        'valid-data': interestRateValid && interestRate.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"interestRate.invalid && (!interestRateValid || interestRate.touched)\">\r\n                                            <span style=\"color: red;\">Interest Rate is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective From Date:<span [style.color]=\"!effectiveFromDateValid?'red':''\"><b>*</b></span> </label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveFromDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ pfConfig.effectiveDateFrom | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"pfConfig.effectiveDateFrom\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':effectiveFromDate.invalid && (!effectiveFromDateValid), 'valid-data': effectiveFromDate.valid && effectiveFromDateValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"effectiveFromDate.invalid && (!effectiveFromDateValid)\">\r\n                                            <span style=\"color: red;\">Effective From Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Effective To Date:</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"effectiveToDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ pfConfig.effectiveToDate | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"pfConfig.effectiveDateTo\" readonly\r\n                                                   #effectiveFromDate=\"ngModel\"\r\n                                                   required>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"getHistoryData()\">History</a>\r\n                                <a class=\"btn btn-default\" *ngIf=\"isSaveVisible\" (click)=\"clearData()\">Reset</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSaveVisible\" (click)=\"saveClaimsData(pfConfig)\">Save</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pfconfig/pfintertconfig/pfintertconfig.component.ts ***!
  \*********************************************************************/
/*! exports provided: PfintertconfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfintertconfigComponent", function() { return PfintertconfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], PfintertconfigComponent.prototype, "successModal", void 0);
    PfintertconfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfintertconfig',
            template: __webpack_require__(/*! ./pfintertconfig.component.html */ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.html"),
            styles: [__webpack_require__(/*! ./pfintertconfig.component.css */ "./src/app/pfconfig/pfintertconfig/pfintertconfig.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_2__["PFConfigDataService"]])
    ], PfintertconfigComponent);
    return PfintertconfigComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/receiptbook/receiptbook.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pfconfig/receiptbook/receiptbook.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/receiptbook/receiptbook.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pfconfig/receiptbook/receiptbook.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Receipt Book</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form\">\r\n                            <header>Issue Receipt Book</header>\r\n                            <fieldset id=\"contribution\">\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Issued Date <span [style.color]=\"!dateValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"date\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   placeholder=\"DD/MM/YYYY\" value=\"{{ receiptBook.date | date: 'dd/MM/yyyy' }}\" [(ngModel)]=\"receiptBook.date\"\r\n                                                   [maxDate]=\"maxDate\" (bsValueChange)=\"issueDateChange($event)\"\r\n                                                   #date=\"ngModel\" required\r\n                                                   [ngClass]=\"{'invalid-data':date.invalid && (!dateValid), 'valid-data': date.valid && dateValid}\" />\r\n                                            <i></i>\r\n                                        </label>\r\n                                        <div *ngIf=\"date.invalid && (!dateValid)\">\r\n                                            <span style=\"color: red;\">Issued Date is required </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"todayMinIssueDateReq\">\r\n                                            <span style=\"color: red;\">Issued Date should be less than or equal to Today Date </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Agent Code <span [style.color]=\"!agentCodeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <select class=\"form-control select\" name=\"agentName\" id=\"ddlAgentName\" [(ngModel)]=\"receiptBook.agentCode\"\r\n                                                    (change)=\"agentChange($event.target.value)\">\r\n                                                <option value=\"{{agent.userid}}\" *ngFor=\"let agent of agentList\">{{agent.userCode}}</option>\r\n                                            </select>\r\n                                            <!--<input type=\"text\" name=\"agentCode\" placeholder=\"Agent Code\" [(ngModel)]=\"receiptBook.agentCode\">-->\r\n                                        </label>\r\n                                        <div *ngIf=\"!agentCodeValid\">\r\n                                            <span style=\"color: red;\">Agent Code is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Receipt Book No <span [style.color]=\"!bookNoValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"bookNo\" placeholder=\"Book No\" [(ngModel)]=\"receiptBook.bookNo\" \r\n                                                   (change)=\"validateReceiptBookName()\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!bookNoValid\">\r\n                                            <span style=\"color: red;\">Receipt Book No is required </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"bookNameValid\">\r\n                                            <span style=\"color: red;\">Receipt Book No is already generated </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Receipt No From <span [style.color]=\"!receiptNoFromValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"receiptNoFrom\" placeholder=\"Receipt No From\" NumbersOnly [(ngModel)]=\"receiptBook.receiptNoFrom\" >\r\n                                        </label>\r\n                                        <div *ngIf=\"!receiptNoFromValid\">\r\n                                            <span style=\"color: red;\">Receipt No From is required </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Receipt No To <span [style.color]=\"!receiptNoToValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"receiptNoTo\" placeholder=\"Receipt No From\" NumbersOnly [(ngModel)]=\"receiptBook.receiptNoTo\">\r\n                                        </label>\r\n                                        <div *ngIf=\"!receiptNoToValid\">\r\n                                            <span style=\"color: red;\">Receipt No To is required </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n\r\n                                </div>\r\n                            </fieldset>\r\n                            <footer>\r\n                                <a *ngIf=\"mode != 'view'\" class=\"btn btn-primary\" (click)=\"saveReceiptBook(receiptBook)\">Submit</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"showHistory()\">History</a>\r\n                                <a *ngIf=\"mode != 'view'\" class=\"btn btn-default\" (click)=\"clearContribution()\">Reset</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelClick()\">Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                    <!-- end widget content -->\r\n                </div>\r\n                <!-- end widget div -->\r\n            </div>\r\n            <!-- end widget -->\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n    <!-- end row -->\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow-y:scroll\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Configuration List</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px; overflow-x:scroll\">\r\n                    <table class=\"table table-striped\" [mfData]=\"configurationData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"effectiveFromDateString\">Effective From Date</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"effectiveToDateString\">Effective To Date</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"beneficiaryPFContribution\">Beneficiary PF Contribution</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"governmentPFContribution\">Government PF Contribution</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"pfLockingPeriodMonths\">Lock in Period (Months)</mfDefaultSorter>\r\n                                </th>\r\n                                <th>\r\n                                    <mfDefaultSorter by=\"inActivePeriodMonths\">InActive Period</mfDefaultSorter>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let config of mf.data|grdFilter: {effectiveFromDateString: searchText,effectiveToDateString: searchText, beneficiaryPFContribution: searchText,\r\n       governmentPFContribution: searchText, pfLockingPeriodMonths: searchText, inActivePeriodMonths:searchText,  maturityAge: searchText, averageMonthlyIncome: searchText}; let i=index;\">\r\n                                <td class=\"\">\r\n                                    <a (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                    <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                </td>\r\n                                <td>{{config.effectiveFromDateString}}</td>\r\n                                <td>{{config.effectiveToDateString}}</td>\r\n                                <td>{{config.beneficiaryPFContribution}}</td>\r\n                                <td>{{config.governmentPFContribution}}</td>\r\n                                <td>{{config.pfLockingPeriodMonths}}</td>\r\n                                <td>{{config.inActivePeriodMonths}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                    </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitClick()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/pfconfig/receiptbook/receiptbook.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pfconfig/receiptbook/receiptbook.component.ts ***!
  \***************************************************************/
/*! exports provided: ReceiptbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptbookComponent", function() { return ReceiptbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReceiptbookComponent = /** @class */ (function () {
    function ReceiptbookComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.dateValid = true;
        this.receiptNoFromValid = true;
        this.receiptNoToValid = true;
        this.agentCodeValid = true;
        this.bookNoValid = true;
        this.receiptBook = {};
        this.mode = "add";
        this.agentList = [];
        this.bookNameValid = false;
        this.todayMinIssueDateReq = false;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ReceiptbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.getAgentList();
        this.route$ = this.route.params.subscribe(function (params) {
            _this.id = params["id"] != null ? Number(params["id"]) : 0;
            _this.mode = params["mode"] == undefined ? 'add' : params["mode"];
            if (_this.mode == "edit" || _this.mode == "view")
                _this.getReceiptBookDetails(_this.id);
        });
        //console.log(this.receiptBook);
    };
    ReceiptbookComponent.prototype.getReceiptBookDetails = function (id) {
        var _this = this;
        this.dataService
            .getReceiptBookDetails(id)
            .subscribe(function (data) {
            debugger;
            _this.receiptBook = data;
            _this.receiptBook.date = new Date(_this.receiptBook.date);
            //this.receiptBook.receiptNoFrom = new Date(this.receiptBook.receiptNoFrom);
            //this.receiptBook.receiptNoTo = new Date(this.receiptBook.receiptNoTo);
        });
    };
    ReceiptbookComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReceiptbookComponent.prototype.saveReceiptBook = function (ReceiptBookModel) {
        var _this = this;
        debugger;
        if (this.validateConfiguration()) {
            if (this.mode != "view") {
                this.receiptBook.createdBy = this.userService.user.deptUserid;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveReceiptBook(this.receiptBook)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "The Receipt Book issuance is completed successfully";
                            _this.successModal.show();
                        }
                        else {
                            _this.successMessage = "The Receipt Book issuance is not completed";
                            _this.successModal.show();
                        }
                    });
                }
            }
        }
    };
    ReceiptbookComponent.prototype.validateConfiguration = function () {
        debugger;
        var isValid = true;
        if (this.receiptBook.date == undefined) {
            this.dateValid = isValid = false;
        }
        if (this.receiptBook.agentCode == undefined) {
            this.agentCodeValid = isValid = false;
        }
        if (this.receiptBook.bookNo == undefined) {
            this.bookNoValid = isValid = false;
        }
        if (this.receiptBook.receiptNoFrom == undefined) {
            this.receiptNoFromValid = isValid = false;
        }
        if (this.receiptBook.receiptNoTo == undefined) {
            this.receiptNoToValid = isValid = false;
        }
        if (this.bookNameValid == true) {
            isValid = false;
        }
        if (this.todayMinIssueDateReq == true) {
            isValid = false;
        }
        return isValid;
    };
    ReceiptbookComponent.prototype.clearContribution = function () {
        if (this.mode == "add") {
            this.receiptBook = {};
        }
    };
    ReceiptbookComponent.prototype.cancelClick = function () {
        if (this.userService.user.userTpe == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["UserType"].SuperAdmin.toString())
            this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
        else
            this.router.navigate(['claim/bulkpfdeposit'], { skipLocationChange: true });
    };
    ReceiptbookComponent.prototype.showHistory = function () {
        this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
    };
    ReceiptbookComponent.prototype.okClick = function () {
        this.successModal.hide();
    };
    ReceiptbookComponent.prototype.getAgentList = function () {
        var _this = this;
        this.dataService
            .getAgentList(0)
            .subscribe(function (data) {
            _this.agentList = data;
        });
    };
    ReceiptbookComponent.prototype.agentChange = function (eve) {
        this.receiptBook.agentCode = eve;
    };
    ReceiptbookComponent.prototype.validateReceiptBookName = function () {
        var _this = this;
        this.bookNameValid = false;
        this.dataService
            .validateReceiptBookName(this.receiptBook.bookNo)
            .subscribe(function (data) {
            if (data)
                _this.bookNameValid = true;
            ;
        });
    };
    ReceiptbookComponent.prototype.issueDateChange = function (eve) {
        debugger;
        this.todayMinIssueDateReq = false;
        if (eve != undefined) {
            var issueDate = new Date(eve);
            var timeDiff = (this.maxDate.getTime() - issueDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 0) {
                this.todayMinIssueDateReq = true;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ReceiptbookComponent.prototype, "successModal", void 0);
    ReceiptbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receiptbook',
            template: __webpack_require__(/*! ./receiptbook.component.html */ "./src/app/pfconfig/receiptbook/receiptbook.component.html"),
            styles: [__webpack_require__(/*! ./receiptbook.component.css */ "./src/app/pfconfig/receiptbook/receiptbook.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__["PFConfigDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ReceiptbookComponent);
    return ReceiptbookComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pfconfig/receiptbooklist/receiptbooklist.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pfconfig/receiptbooklist/receiptbooklist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Receipt Book List </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Action\r\n                                    </th>\r\n                                    <th>\r\n                                        Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Agent Code\r\n                                    </th>\r\n                                    <th>\r\n                                        Book No\r\n                                    </th>\r\n                                    <th>\r\n                                        Receipt No From\r\n                                    </th>\r\n                                    <th>\r\n                                        Receipt No To\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let config of receiptBookData\">\r\n                                    <td class=\"\">\r\n\r\n                                        <!--<a *ngIf=\"config.status == 1\" (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>-->\r\n                                        <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{config.dateString}}</td>\r\n                                    <td>{{config.agentCode}}</td>\r\n                                    <td>{{config.bookNo}}</td>\r\n                                    <td>{{config.receiptNoFrom}}</td>\r\n                                    <td>{{config.receiptNoTo}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"receiptBookData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <!--<table class=\"table table-striped\" [mfData]=\"configurationData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                             <thead>\r\n                                                 <tr>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"effectiveFromDateString\">Effective From Date</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"effectiveToDateString\">Effective To Date</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"beneficiaryPFContribution\">Beneficiary PF Contribution</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"governmentPFContribution\">Government PF Contribution</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"pfLockingPeriodMonths\">Lock in Period (Months)</mfDefaultSorter>\r\n                                                     </th>\r\n                                                     <th>\r\n                                                         <mfDefaultSorter by=\"inActivePeriodMonths\">InActive Period</mfDefaultSorter>\r\n                                                     </th>\r\n                                                 </tr>\r\n                                             </thead>\r\n                                             <tbody>\r\n                                                 <tr *ngFor=\"let config of mf.data|grdFilter: {effectiveFromDateString: searchText,effectiveToDateString: searchText, beneficiaryPFContribution: searchText,\r\n                        governmentPFContribution: searchText, pfLockingPeriodMonths: searchText, inActivePeriodMonths:searchText,  maturityAge: searchText, averageMonthlyIncome: searchText}; let i=index;\">\r\n                                                     <td class=\"\">\r\n                                                         <a (click)=\"onEditClick(config)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                                         <a (click)=\"onViewClick(config)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                                     </td>\r\n                                                     <td>{{config.effectiveFromDateString}}</td>\r\n                                                     <td>{{config.effectiveToDateString}}</td>\r\n                                                     <td>{{config.beneficiaryPFContribution}}</td>\r\n                                                     <td>{{config.governmentPFContribution}}</td>\r\n                                                     <td>{{config.pfLockingPeriodMonths}}</td>\r\n                                                     <td>{{config.inActivePeriodMonths}}</td>\r\n                                                 </tr>\r\n                                             </tbody>\r\n\r\n\r\n                                             <tfoot>\r\n                                                 <tr>\r\n                                                     <td colspan=\"9\">\r\n                                                         <div *ngIf=\"configurationData.length>0\">\r\n                                                             <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                                         </div>\r\n                                                     </td>\r\n                                                 </tr>\r\n                                             </tfoot>\r\n                                         </table>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pfconfig/receiptbooklist/receiptbooklist.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReceiptbooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptbooklistComponent", function() { return ReceiptbooklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pfconfig-data.services */ "./src/app/pfconfig/services/pfconfig-data.services.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiptbooklistComponent = /** @class */ (function () {
    //Paging props end
    function ReceiptbooklistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.receiptBookData = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_1__["pagination"].pageSize;
    }
    ReceiptbooklistComponent.prototype.ngOnInit = function () {
        this.getReceiptBooks(this.page, this.pageSize);
    };
    ReceiptbooklistComponent.prototype.getReceiptBooks = function (pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getReceiptBooks(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.receiptBookData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ReceiptbooklistComponent.prototype.changepage = function (page) {
        this.getReceiptBooks(this.page, this.pageSize);
    };
    ReceiptbooklistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/receiptbook', { id: item.id, mode: "view" }], { skipLocationChange: true });
    };
    ReceiptbooklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receiptbooklist',
            template: __webpack_require__(/*! ./receiptbooklist.component.html */ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.html"),
            styles: [__webpack_require__(/*! ./receiptbooklist.component.css */ "./src/app/pfconfig/receiptbooklist/receiptbooklist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_pfconfig_data_services__WEBPACK_IMPORTED_MODULE_3__["PFConfigDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ReceiptbooklistComponent);
    return ReceiptbooklistComponent;
}());



/***/ }),

/***/ "./src/app/pfconfig/services/api-dictionary.ts":
/*!*****************************************************!*\
  !*** ./src/app/pfconfig/services/api-dictionary.ts ***!
  \*****************************************************/
/*! exports provided: ApiDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDictionary", function() { return ApiDictionary; });
var ApiDictionary = {
    getPFConfigurations: {
        url: 'getPFConfigurations',
        params: null
    },
    getPFConfigurationDetails: {
        url: 'getPFConfigurationDetails',
        params: null
    },
    savePFConfiguration: {
        url: 'savePFConfiguration',
        params: null
    },
    getReceiptBooks: {
        url: 'getReceiptBooks',
        params: null
    },
    getReceiptBookDetails: {
        url: 'getReceiptBookDetails',
        params: null
    },
    saveReceiptBook: {
        url: 'saveReceiptBook',
        params: null
    },
    GetPFInterestConfigDetails: {
        url: 'GetPFInterestConfigDetails',
        params: null
    },
    SavePFInterestConfigData: {
        url: 'SavePFInterestConfigDetails',
        params: null
    },
    GetPFInterestConfigDetailsById: {
        url: 'GetPFInterestConfigDetailsById',
        params: null
    },
    SavePFCommissionConfigData: {
        url: 'SavePFCommissionConfigDetails',
        params: null
    },
    GetPFCommissionConfigDetailsById: {
        url: 'GetPFCommissionConfigDetailsById',
        params: null
    },
    GetPFCommissionConfigDetails: {
        url: 'GetPFCommissionConfigDetails',
        params: null
    },
    SaveEducationConfigData: {
        url: 'SaveEducationConfigData',
        params: null
    },
    SaveHealthFamilyConfigData: {
        url: 'SaveHealthFamilyConfigData',
        params: null
    },
    SaveDeathConfigData: {
        url: 'SaveDeathConfigData',
        params: null
    },
    SaveDisabilityConfigData: {
        url: 'SaveDisabilityConfigData',
        params: null
    },
    GetEducationConfigDetails: {
        url: 'GetEducationConfigDetails',
        params: null
    },
    GetHealthFamilyConfigDetails: {
        url: 'GetHealthFamilyConfigDetails',
        params: null
    },
    GetDeathConfigDetails: {
        url: 'GetDeathConfigDetails',
        params: null
    },
    GetDisabilityConfigDetails: {
        url: 'GetDisabilityConfigDetails',
        params: null
    },
    GetEducationConfigDetailsById: {
        url: 'GetEducationConfigDetailsById',
        params: null
    },
    GetHealthFamilyConfigDetailsById: {
        url: 'GetHealthFamilyConfigDetailsById',
        params: null
    },
    GetDeathConfigDetailsById: {
        url: 'GetDeathConfigDetailsById',
        params: null
    },
    GetDisabilityConfigDetailsById: {
        url: 'GetDisabilityConfigDetailsById',
        params: null
    },
    GetBenefitConfigDetails: {
        url: 'GetBenefitConfigDetails',
        params: null
    },
    getAgentList: {
        url: "GetDeptUsers"
    },
    validateReceiptBookName: {
        url: "validateReceiptBookName",
        params: null
    }
};


/***/ }),

/***/ "./src/app/pfconfig/services/pfconfig-data.services.ts":
/*!*************************************************************!*\
  !*** ./src/app/pfconfig/services/pfconfig-data.services.ts ***!
  \*************************************************************/
/*! exports provided: PFConfigDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PFConfigDataService", function() { return PFConfigDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/pfconfig/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PFConfigDataService = /** @class */ (function () {
    function PFConfigDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    PFConfigDataService.prototype.GetPFInterestConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetPFInterestConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SavePFInterestConfigData = function (pfConfigData) {
        debugger;
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SavePFInterestConfigData.url, pfConfigData).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFInterestConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetPFInterestConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SavePFCommissionConfigData = function (pfConfigData) {
        debugger;
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SavePFCommissionConfigData.url, pfConfigData).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFCommissionConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetPFCommissionConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getPFConfigurations = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPFConfigurations.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getPFConfigurationDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPFConfigurationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.savePFConfiguration = function (configuration) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].savePFConfiguration.url, configuration).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getReceiptBooks = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getReceiptBooks.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFCommissionConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetPFCommissionConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getReceiptBookDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getReceiptBookDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.saveReceiptBook = function (configuration) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveReceiptBook.url, configuration).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveEducationConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SaveEducationConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveHealthFamilyConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SaveHealthFamilyConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveDeathConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SaveDeathConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveDisabilityConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].SaveDisabilityConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetEducationConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetEducationConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetHealthFamilyConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetHealthFamilyConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDeathConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetDeathConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDisabilityConfigDetails = function (pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetDisabilityConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetEducationConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetEducationConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetHealthFamilyConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetHealthFamilyConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDeathConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetDeathConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDisabilityConfigDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetDisabilityConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetBenefitConfigDetails = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetBenefitConfigDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getAgentList = function (userTypeId) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAgentList.url + "/" + userTypeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.validateReceiptBookName = function (bookName) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].validateReceiptBookName.url + "/" + bookName, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PFConfigDataService);
    return PFConfigDataService;
}());



/***/ })

}]);
//# sourceMappingURL=pfconfig-pfconfig-module.js.map