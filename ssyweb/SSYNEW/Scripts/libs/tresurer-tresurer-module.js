(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tresurer-tresurer-module"],{

/***/ "./src/app/tresurer/fund-release-list/fund-release-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/tresurer/fund-release-list/fund-release-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/fund-release-list/fund-release-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/tresurer/fund-release-list/fund-release-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2> Fund Release List</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundReleaseOrder\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO</mfDefaultSorter>\r\n                                    </th>\r\n                                    <!--<th>\r\n                                        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n                                    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                    refernceNumber: searchText, requestDateString: searchText, amount: searchText, statusName: searchText, boardName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <!--<td>{{data.requestedBy}}</td>-->\r\n                                    <td>{{data.fundRequestNumber}}</td>\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"fundReleaseOrder.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/tresurer/fund-release-list/fund-release-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tresurer/fund-release-list/fund-release-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: FundReleaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundReleaseListComponent", function() { return FundReleaseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FundReleaseListComponent = /** @class */ (function () {
    //Paging props end
    function FundReleaseListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //public claimsData: Claims[];
        this.fundReleaseOrder = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    FundReleaseListComponent.prototype.ngOnInit = function () {
        //this.getFundReleaseDetails(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.Release);
        this.getFundReleaseDetails(this.userService.user.deptUserid, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Release, this.page, this.pageSize);
    };
    FundReleaseListComponent.prototype.getFundReleaseDetails = function (id, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundReleaseDetails(id, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundReleaseOrder = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    FundReleaseListComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['tresurer/fundrelease', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId, mode: "released" }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['tresurer/reviewfundreleaseexpenses', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId }], { skipLocationChange: true });
    };
    FundReleaseListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    FundReleaseListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    FundReleaseListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    FundReleaseListComponent.prototype.changepage = function (page) {
        this.getFundReleaseDetails(this.userService.user.deptUserid, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Release, this.page, this.pageSize);
    };
    FundReleaseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-release-list',
            template: __webpack_require__(/*! ./fund-release-list.component.html */ "./src/app/tresurer/fund-release-list/fund-release-list.component.html"),
            styles: [__webpack_require__(/*! ./fund-release-list.component.css */ "./src/app/tresurer/fund-release-list/fund-release-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FundReleaseListComponent);
    return FundReleaseListComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/fund-release/fund-release.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tresurer/fund-release/fund-release.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/tresurer/fund-release/fund-release.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tresurer/fund-release/fund-release.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <header>\r\n                    <h2>Fund Release View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Alc Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails.requestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset style=\"display:none\">\r\n                                <section>\r\n                                    <label class=\"label\">Fund Status at RLO:</label>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails.boardName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails.claimTypes}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section *ngIf=\"showReleaseLabel\">\r\n                                    <label><strong>Release Type : </strong>{{fundrequestDetails.releaseTypeName}}</label>\r\n                                </section>\r\n                                <section *ngIf=\"!showReleaseLabel\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-10\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" value=\"1\" (change)=\"radioChange($event.target.value)\" checked=\"checked\">\r\n                                                    <i></i>Release Against RLO Office\r\n                                                </label>\r\n                                                <label class=\"radio\" style=\"margin-top:10px !important; font-weight:normal!important\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" value=\"2\" (change)=\"radioChange($event.target.value)\">\r\n                                                    <i></i>Release Against Beneficiaries\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                               [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>SSIN</th>\r\n                                                    <th>Beneficiary Name</th>\r\n                                                    <th>Beneficiary Type</th>\r\n                                                    <th>Claim Reference No.</th>\r\n                                                    <th>Claim Category</th>\r\n                                                    <th>Submission Date</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let claim of mf.data\">\r\n                                                    <td>{{claim.ssin}}</td>\r\n                                                    <td>{{claim.benName}}</td>\r\n                                                    <td>{{claim.benType}}</td>\r\n                                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                    <td>{{claim.submittedDateString}}</td>\r\n                                                    <td>{{claim.approvedAmount}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"7\"><mfBootstrapPaginator></mfBootstrapPaginator></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n                                    </div>\r\n                                    <form class=\"smart-form smart-form-main\">\r\n                                        <fieldset>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-4\">\r\n                                                    <label><strong>Amount Transferred:</strong>{{sumofamount}}</label>\r\n                                                    \r\n                                                </div>\r\n                                                <div class=\"col col-4 selectContainer\" *ngIf=\"fundrequestDetails.statusId == 24 && releaseValue == 1\">\r\n                                                    <label><strong>RLO Bank Account:<span [style.color]=\"!bankIsValid?'red':''\"><b>*</b></span></strong></label>\r\n                                                    <select class=\"form-control\" name=\"rloBankId\" [(ngModel)]=\"rloBankId\"\r\n                                                            [ngClass]=\"{'invalid-data': (!bankIsValid ), 'valid-data': bankIsValid}\"\r\n                                                                  required>\r\n                                                        <option value=\"0\" disabled>Choose an Option</option>\r\n                                                        <option value=\"{{bank.rloOfficeBankId}}\" *ngFor=\"let bank of bankDetails\">{{bank.bankAccountNo}}</option>\r\n                                                        <i></i>\r\n                                                    </select>\r\n                                                    <div *ngIf=\"(!bankIsValid)\">\r\n                                                        <span style=\"color: red;\">Bank account is required </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col col-4 selectContainer\" *ngIf=\"fundrequestDetails.statusId != 24 && releaseValue == 1\">\r\n                                                    <label><strong> Bank Account Name: </strong>{{fundrequestDetails.rloBankName}}</label> \r\n                                                    \r\n                                                </div>\r\n                                                <div class=\"col col-4\">\r\n                                                    <label><strong>Download Bank NEFT Document:</strong></label>\r\n                                                    <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"color: green;zoom: 3;\" (click)=\"download()\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n                                        <footer>\r\n                                            <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                            <a class=\"btn btn-primary\" *ngIf=\"fundrequestDetails.statusId == 24\" (click)=\"updateFundRequest(25)\">Release</a>\r\n                                          \r\n                                        </footer>\r\n\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n           \r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n               \r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tresurer/fund-release/fund-release.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tresurer/fund-release/fund-release.component.ts ***!
  \*****************************************************************/
/*! exports provided: FundReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundReleaseComponent", function() { return FundReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FundReleaseComponent = /** @class */ (function () {
    function FundReleaseComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.bankDetails = [];
        this.bankIsValid = true;
        this.NEFTDetails = [];
        this.NEFTData = {};
        this.enableNEFT = false;
        this.releaseValue = 1;
        this.showReleaseLabel = false;
        this.chronologicalOrder = 0;
    }
    FundReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundReleaseOrderHdrId = params["fundReleaseOrderHdrId"];
            _this.alcId = params["alcId"];
            _this.mode = params["mode"];
            //if (this.mode != "pending") {
            //    this.isVisable = false;
            //}
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
            }
        });
        this.getFundRequestedClaimsById(this.fundReleaseOrderHdrId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["UserType"].AsstLabourCom);
        // this.getRLOBankDetails(this.alcId, UserType.AsstLabourCom);
    };
    FundReleaseComponent.prototype.getFundRequestedClaimsById = function (fundReleaseOrderHdrId) {
        var _this = this;
        this.sumofamount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundReleaseOrderHdrId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.claimsList;
            _this.claimsData.forEach(function (x) { return _this.sumofamount += x.approvedAmount; });
            if (_this.mode == "released") {
                _this.showReleaseLabel = true;
                _this.releaseValue = _this.fundrequestDetails.releaseType;
            }
            else {
                _this.showReleaseLabel = false;
            }
        });
    };
    FundReleaseComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            if (_this.officeDetails.approvedClaimsAmount > _this.RloOfficeAddress.balanceOfTheAmount)
                _this.AmountShortfall = (_this.officeDetails.approvedClaimsAmount - _this.RloOfficeAddress.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
            _this.getRLOBankDetails(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    FundReleaseComponent.prototype.updateFundRequest = function (id) {
        var _this = this;
        debugger;
        if (this.releaseValue == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ReleaseType"].ReleaseAgainstRLOOffice) {
            if (this.rloBankId == undefined || this.rloBankId <= 0) {
                this.bankIsValid = false;
                return;
            }
        }
        this.fundReviewModel.releaseType = this.releaseValue;
        this.fundReviewModel.rloBankAccountId = this.rloBankId;
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["WorkflowTrans"].fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.fundReleaseOrderHdrId = this.fundrequestDetails.fundReleaseOrderHdrId;
        this.fundReviewModel.fundRequestType = 1; // Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                _this.successMessage = "Fund request updated successfully";
                _this.successModal.show();
            });
        }
    };
    FundReleaseComponent.prototype.cancelclick = function () {
        //if (this.mode == "pending") {
        this.router.navigate(['tresurer/fundreleaselist']);
        //}
    };
    FundReleaseComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: false });
    };
    FundReleaseComponent.prototype.setNEFTDetails = function () {
        var _this = this;
        this.NEFTDetails = [];
        var rloBankAccountId = this.fundrequestDetails.rloBankAccountId;
        var rloBankId = this.rloBankId;
        var bankId = ((rloBankAccountId != undefined && rloBankAccountId != null) ? rloBankAccountId : ((rloBankId != undefined && rloBankId != 0) ? rloBankId : 0));
        if (this.bankDetails != undefined) {
            this.bankDetails.forEach(function (eachObj) {
                if (eachObj.rloOfficeBankId == bankId) {
                    _this.bank = eachObj;
                }
            });
        }
        if (bankId != 0 && this.bank != undefined) {
            var tempNEFTData = this.NEFTData;
            this.enableNEFT = true;
            this.NEFTFileName = "NEFT Document";
            if (this.RloOfficeAddress != undefined) {
                tempNEFTData.nameofthePayee = this.RloOfficeAddress.rloOfficeName;
            }
            else {
                tempNEFTData.nameofthePayee = "";
            }
            tempNEFTData.contactNumber = "";
            tempNEFTData.idNumber = "";
            tempNEFTData.natureOfId = "";
            tempNEFTData.nameOfBank = this.bank.bankName;
            tempNEFTData.bankBranchCode = this.bank.bankBranch;
            tempNEFTData.accountNumber = this.bank.bankAccountNo;
            tempNEFTData.IFSCCode = this.bank.ifsc;
            tempNEFTData.amount = this.sumofamount.toString();
            tempNEFTData.narration = "";
            this.NEFTDetails.push(tempNEFTData);
        }
    };
    FundReleaseComponent.prototype.getRLOBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getRLOBankDetailsByUserId(id, this.userService.user.deptUserid, this.mode == "released" ? 0 : 1)
            .subscribe(function (data) {
            _this.bankDetails = data;
            _this.rloBankId = _this.bankDetails[0].rloOfficeBankId;
        });
    };
    FundReleaseComponent.prototype.download = function () {
        if (this.releaseValue == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ReleaseType"].ReleaseAgainstRLOOffice) {
            this.downloadNeftDocument();
        }
        else {
            this.downloadNeftDocumentforBeneficiaries();
        }
    };
    FundReleaseComponent.prototype.downloadNeftDocument = function () {
        this.setNEFTDetails();
        this.showErrorMessage = false;
        var downloadNEFTDetails = this.NEFTDetails;
        if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadNEFTDetails, this.NEFTFileName);
        }
    };
    FundReleaseComponent.prototype.downloadNeftDocumentforBeneficiaries = function () {
        var _this = this;
        //this.ifmsVisible = false;
        this.IFMSData = [];
        this.showErrorMessage = false;
        this.IFMSFileName = "NEFT Details";
        //this.selectedClaims();
        this.dataService
            .getBeneficiaryPaymentNEFTDetails(this.fundrequestDetails.fundReleaseOrderHdrId)
            .subscribe(function (data) {
            debugger;
            _this.IFMSData = data;
            var downloadNEFTDetails = _this.IFMSData;
            if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
                _this.excelService.exportAsExcelFile(downloadNEFTDetails, _this.IFMSFileName);
            }
        });
    };
    FundReleaseComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    FundReleaseComponent.prototype.radioChange = function (id) {
        this.releaseValue = id;
        //alert(this.releaseValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], FundReleaseComponent.prototype, "successModal", void 0);
    FundReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-release',
            template: __webpack_require__(/*! ./fund-release.component.html */ "./src/app/tresurer/fund-release/fund-release.component.html"),
            styles: [__webpack_require__(/*! ./fund-release.component.css */ "./src/app/tresurer/fund-release/fund-release.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], FundReleaseComponent);
    return FundReleaseComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/tresurer/payment-processed-list/payment-processed-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/tresurer/payment-processed-list/payment-processed-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Payment Process Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"paymentProcessData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentProcessingID\">Process Id</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">Rlo office</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestId\">Release Order No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNo\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentProcessingDateString\">Payment Processed Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {paymentProcessingID: searchText,rloOfficeName: searchText,fundRequestId: searchText,fundRequestNo: searchText\r\n                                    }; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.paymentProcessingID}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.fundRequestId}}</td>\r\n                                    <td>{{data.fundRequestNo}}</td>\r\n                                    <td>{{data.paymentProcessingDateString}}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <div *ngIf=\"paymentProcessData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tresurer/payment-processed-list/payment-processed-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PaymentProcessedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProcessedListComponent", function() { return PaymentProcessedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentProcessedListComponent = /** @class */ (function () {
    //Paging props end
    function PaymentProcessedListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentProcessData = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    PaymentProcessedListComponent.prototype.ngOnInit = function () {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
    };
    PaymentProcessedListComponent.prototype.getPaymentProcessDetails = function (id, type, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getTreasurerPaymentProcesses(id, type, pageNo, pageSize)
            .subscribe(function (data) {
            _this.paymentProcessData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentProcessedListComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['tresurer/paymentrelease', { processId: item.paymentProcessingID, alcId: item.createdBy }], { skipLocationChange: true });
    };
    PaymentProcessedListComponent.prototype.changepage = function (page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
    };
    PaymentProcessedListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-processed-list',
            template: __webpack_require__(/*! ./payment-processed-list.component.html */ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.html"),
            styles: [__webpack_require__(/*! ./payment-processed-list.component.css */ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PaymentProcessedListComponent);
    return PaymentProcessedListComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/payment-release/payment-release.component.css":
/*!************************************************************************!*\
  !*** ./src/app/tresurer/payment-release/payment-release.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/tresurer/payment-release/payment-release.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tresurer/payment-release/payment-release.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"widget-grid\" class=\"\">\r\n    <!-- row -->\r\n    <div class=\"row\">\r\n        <!-- NEW WIDGET START -->\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <!-- Widget ID (each widget will need unique ID)-->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header><h2>Payment Release </h2></header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            \r\n                            <!--<header>Please select the claims to forward to Tresurer for payment</header>-->\r\n                            <fieldset>\r\n                                <section>\r\n\r\n                                    <!--<div class=\"row\">\r\n                <div class=\"col col-6\">\r\n                    <label class=\"label\"> Payment Process Id <span [style.color]=\"!paymentIdValid?'red':''\"><b>*</b></span></label>\r\n                    <label class=\"select\">\r\n                        <select class=\"form-control select\" name=\"processId\" [(ngModel)]=\"processId\" (change)=\"selectPaymentProcessId(processId)\">\r\n                            <option value=\"0\">Choose a Process Id</option>\r\n                            <option value=\"{{process.paymentProcessingID}}\" *ngFor=\"let process of paymentProcessIds\"> {{process.rloOfficeName}} - {{process.paymentProcessingID}} </option>\r\n                        </select> <i></i>\r\n                    </label>\r\n\r\n                </div>\r\n            </div>-->\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"processedClaimsView\">\r\n                                <header>ALC Details </header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                            <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                                <label>Please select atleast one record to proceed.</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Payment Processing Date: </strong>{{date | date: 'dd/MM/yyyy'}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n\r\n                                <fieldset style=\"display:none\">\r\n                                    <section>\r\n                                        <header>Fund Status at RLO</header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <fieldset>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <table id=\"dt_basic\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <!--<th><input type=\"checkbox\" name=\"selectedAll\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>-->\r\n                                                    <th>SSIN</th>\r\n                                                    <th>Beneficiary Name</th>\r\n                                                    <th>Beneficiary Type</th>\r\n                                                    <th>Claim Reference No.</th>\r\n                                                    <th>Claim Category</th>\r\n                                                    <th>Submission Date</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <!--<tr *ngIf=\"claimDetails.length==0\">\r\n                        <td colspan=\"8\">\r\n                            No data available\r\n                        </td>\r\n                    </tr>-->\r\n                                                <tr *ngFor=\"let claim of claimDetails\">\r\n                                                    <!--<td class=\"\">\r\n                            <input type=\"checkbox\" name=\"selected\" [(ngModel)]=\"claim.selected\" (change)=\"checkIfAllSelected(claim);\">\r\n                        </td>-->\r\n                                                    <td>{{claim.ssin}}</td>\r\n                                                    <td>{{claim.benName}}</td>\r\n                                                    <td>{{claim.benType}}</td>\r\n                                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                    <td>{{claim.submittedDateString}}</td>\r\n                                                    <td>{{claim.approvedAmount}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"7\"></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </fieldset>\r\n                                <fieldset>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-4\">\r\n                                            <label class=\"control-label\">Amount Transferred:</label>\r\n                                            <label class=\"form-control\" disabled>{{sumofAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-4 selectContainer\">\r\n                                            <label class=\"control-label\">Source Bank Account:<span [style.color]=\"!bankIsValid?'red':''\"><b>*</b></span></label>\r\n                                            <select class=\"form-control\" name=\"rloBankId\" [(ngModel)]=\"rloBankId\"\r\n                                                    [ngClass]=\"{'invalid-data': (!bankIsValid ), 'valid-data': bankIsValid}\"\r\n                                                    required>\r\n                                                <option value=\"\" disabled>Choose an Option</option>\r\n                                                <option value=\"{{bank.rloOfficeBankId}}\" *ngFor=\"let bank of bankDetails\">{{bank.bankAccountNo}}</option>\r\n                                                <i></i>\r\n                                            </select>\r\n                                            <div *ngIf=\"(!bankIsValid)\">\r\n                                                <span style=\"color: red;\">Bank account is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--<div class=\"col col-4 selectContainer\" *ngIf=\"fundrequestDetails.statusId != 24\">\r\n                <label class=\"control-label\"> Bank Account Name </label> <br />\r\n                {{fundrequestDetails.rloBankName}}\r\n            </div>-->\r\n                                        <!--<div class=\"col col-4\">\r\n                                            <label class=\"control-label\">Download IFMS Document:</label>\r\n                                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"color: green;zoom: 3;\" (click)=\"downloadNeftDocument()\"></i>\r\n                                        </div>-->\r\n                                    </div>\r\n                                </fieldset>\r\n                                <footer *ngIf=\"ifmsVisible\"><a class=\"btn btn-success\" (click)=\"downloadNeftDocument()\">Download IFMS Document</a></footer>\r\n                                <footer>\r\n                                    <a *ngIf=\"!ifmsVisible\" id=\"btnSava\" class=\"btn btn-success\" (click)=\"paymentRelease()\"><i class=\"fa fa-warning-sign\"></i> Release </a>\r\n                                    <a class=\"btn btn-danger\" (click)=\"cancelClick()\"><i class=\"fa fa-remove\"></i> Cancel</a>\r\n                                    <!--<a class=\"btn btn-success\" (click)=\"downloadNeftDocument()\" [attr.disabled]=\"tr\">Download IFMS Document</a>-->\r\n                                </footer>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n\r\n    <!-- end row -->\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <!--<button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>-->\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/tresurer/payment-release/payment-release.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tresurer/payment-release/payment-release.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReleaseComponent", function() { return PaymentReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentReleaseComponent = /** @class */ (function () {
    function PaymentReleaseComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
        this.bankDetails = [];
        this.claimData = {};
        this.normalizedObject = {};
        this.date = new Date();
        this.selectedAll = true;
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        this.processedClaimsView = false;
        this.paymentIdValid = true;
        this.selectedClaimList = [];
        this.bankIsValid = true;
        this.ifmsVisible = true;
    }
    PaymentReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.processId = params["processId"];
            _this.alcId = params["alcId"];
            //this.mode = params["mode"];
            //if (this.mode != "pending") {
            //    this.isVisable = false;
            //}
        });
        //this.getPaymentProcessIds(this.userService.user.deptUserid, this.userService.user.userTpe);
        //this.getRLOBankDetails(3075, 6);
        //this.getPaymentProcessIds(14844, 13);
        this.selectPaymentProcessId(this.processId);
    };
    //Not used now
    //Fill the dropdown values 
    //getPaymentProcessIds(id:any,type:any) {
    //    this.dataService
    //        .getTreasurerPaymentProcesses(id, type)
    //        .subscribe((data: any) => {
    //            this.paymentProcessIds = data;
    //        });
    //}
    //Drop down change event
    PaymentReleaseComponent.prototype.selectPaymentProcessId = function (processId) {
        this.showErrorMessage = false;
        this.sumofAmount = 0;
        if (processId > 0) {
            this.paymentIdValid = true;
            this.getPaymentProcessedDetails(processId);
            //Rlo office Info
            this.GetRLOOfficeUserInformation(processId);
            this.processedClaimsView = true;
        }
        else
            this.paymentIdValid = false;
    };
    PaymentReleaseComponent.prototype.getPaymentProcessedDetails = function (id) {
        var _this = this;
        this.claimDetails = [];
        //this.selectedAll = false;
        this.dataService
            .getPaymentProcessedDetails(id)
            .subscribe(function (data) {
            _this.claimDetails = data;
            //if (this.claimDetails != null && this.claimDetails.length > 0) {
            _this.selectAll();
            // }
        });
    };
    PaymentReleaseComponent.prototype.getRLOBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getRLOBankDetails(id)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    PaymentReleaseComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimDetails.length; i++) {
            this.claimDetails[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimDetails[i].approvedAmount;
            }
        }
    };
    PaymentReleaseComponent.prototype.GetRLOOfficeUserInformation = function (processId) {
        var _this = this;
        this.dataService
            .getRLOUserInfoByProcessingId(this.processId)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            _this.getRLOBankDetails(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    PaymentReleaseComponent.prototype.paymentRelease = function () {
        var _this = this;
        debugger;
        if (this.rloBankId == undefined || this.rloBankId <= 0) {
            this.bankIsValid = false;
            return;
        }
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].PaymentReleasebyTreasurer;
            this.claimData.paymentReleasedClaims = this.selectedClaimList; //this.claimsList;
            this.claimData.rloBankAccountId = this.rloBankId;
            this.claimData.paymentProcessingId = this.processId;
            this.claimData.paymentReleaseDate = null;
            this.claimData.releasedAmount = this.sumofAmount;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePaymentReleaseClaims(this.claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Payment released succesfully.";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
        else {
            this.showErrorMessage = true;
        }
    };
    PaymentReleaseComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.sumofAmount = 0;
        // this.getPaymentProcessedDetails(this.processId);
        this.cancelClick();
    };
    PaymentReleaseComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimDetails.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    PaymentReleaseComponent.prototype.selectedClaims = function () {
        var res = this.claimDetails.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][res[i].claimType] });
        }
    };
    PaymentReleaseComponent.prototype.downloadNeftDocument = function () {
        var _this = this;
        this.ifmsVisible = false;
        this.NEFTData = [];
        this.showErrorMessage = false;
        this.NEFTFileName = "NEFT Details";
        this.selectedClaims();
        this.dataService
            .getPaymentNEFTDetails(this.selectedClaimList)
            .then(function (data) {
            debugger;
            _this.NEFTData = data;
            var downloadNEFTDetails = _this.NEFTData;
            if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
                _this.excelService.exportAsExcelFile(downloadNEFTDetails, _this.NEFTFileName);
            }
        });
    };
    PaymentReleaseComponent.prototype.cancelClick = function () {
        this.router.navigate(['tresurer/paymentprocessedlist'], { skipLocationChange: true });
    };
    PaymentReleaseComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], PaymentReleaseComponent.prototype, "successModal", void 0);
    PaymentReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-release',
            template: __webpack_require__(/*! ./payment-release.component.html */ "./src/app/tresurer/payment-release/payment-release.component.html"),
            styles: [__webpack_require__(/*! ./payment-release.component.css */ "./src/app/tresurer/payment-release/payment-release.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
    ], PaymentReleaseComponent);
    return PaymentReleaseComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/payment-released-list/payment-released-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/tresurer/payment-released-list/payment-released-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/payment-released-list/payment-released-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/tresurer/payment-released-list/payment-released-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Payment Release Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"paymentReleaseData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentReleaseId\">Payment Release Id</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentReleaseDateString\">Payment Release Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"releasedAmount\">Released Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {paymentReleaseId: searchText,creadtedDateString: searchText,releasedAmount: searchText,statusName:searchText\r\n                                    }; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.paymentReleaseId}}</td>\r\n                                    <td>{{data.paymentReleaseDateString}}</td>\r\n                                    <td>{{data.releasedAmount}}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"paymentReleaseData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/tresurer/payment-released-list/payment-released-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tresurer/payment-released-list/payment-released-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PaymentReleasedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReleasedListComponent", function() { return PaymentReleasedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentReleasedListComponent = /** @class */ (function () {
    //Paging props end
    function PaymentReleasedListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentReleaseData = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    PaymentReleasedListComponent.prototype.ngOnInit = function () {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    PaymentReleasedListComponent.prototype.getPaymentReleaseDetails = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPaymentReleaseDetails(id, pageNo, pageSize)
            .subscribe(function (data) {
            _this.paymentReleaseData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentReleasedListComponent.prototype.onreviewClick = function (item) {
        debugger;
        this.router.navigate(['tresurer/reviewpaymentrelease', { releaseId: item.paymentReleaseId, processId: item.paymentProcessingId, userId: item.createdBy }], { skipLocationChange: true });
    };
    PaymentReleasedListComponent.prototype.changepage = function (page) {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    PaymentReleasedListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-released-list',
            template: __webpack_require__(/*! ./payment-released-list.component.html */ "./src/app/tresurer/payment-released-list/payment-released-list.component.html"),
            styles: [__webpack_require__(/*! ./payment-released-list.component.css */ "./src/app/tresurer/payment-released-list/payment-released-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PaymentReleasedListComponent);
    return PaymentReleasedListComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Pending </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundRequest\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO Office</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundReleaseOrderHdrId\">Release Order No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                    refernceNumber: searchText, requestDateString: searchText, amount: searchText, statusName: searchText, boardName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data, i)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.requestedBy}}</td>\r\n                                    <td>{{data.fundReleaseOrderHdrId}}</td>\r\n                                    <td>{{data.fundRequestNumber}}</td>\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <div *ngIf=\"fundRequest.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PendingFundReleaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingFundReleaseListComponent", function() { return PendingFundReleaseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingFundReleaseListComponent = /** @class */ (function () {
    //Paging props end
    function PendingFundReleaseListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //public claimsData: Claims[]=[];
        this.fundRequest = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    PendingFundReleaseListComponent.prototype.ngOnInit = function () {
        debugger;
        //this.getFundReleaseDetails(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard);
        this.getFundReleaseDetails(this.userService.user.deptUserid, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovebyBoard, this.page, this.pageSize);
    };
    PendingFundReleaseListComponent.prototype.getFundReleaseDetails = function (id, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundReleaseDetails(id, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    PendingFundReleaseListComponent.prototype.onreviewClick = function (item, index) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['tresurer/fundrelease', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId, mode: "pending", chronologicalOrder: index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['tresurer/reviewfundreleaseexpenses', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId }], { skipLocationChange: true });
    };
    PendingFundReleaseListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    PendingFundReleaseListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    PendingFundReleaseListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    PendingFundReleaseListComponent.prototype.changepage = function (page) {
        this.getFundReleaseDetails(this.userService.user.deptUserid, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovebyBoard, this.page, this.pageSize);
    };
    PendingFundReleaseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-fund-release-list',
            template: __webpack_require__(/*! ./pending-fund-release-list.component.html */ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.html"),
            styles: [__webpack_require__(/*! ./pending-fund-release-list.component.css */ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_2__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PendingFundReleaseListComponent);
    return PendingFundReleaseListComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <header>\r\n                    <h2>Fund Release View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Alc Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails.requestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset style=\"display:none\">\r\n                                <section>\r\n                                    <label class=\"label\">Fund Status at RLO:</label>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails.boardName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails.claimTypes}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                               [mfData]=\"expensesData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Item</th>\r\n                                                    <th>Fund Required</th>\r\n                                                    <th>Physical Target</th>\r\n                                                    <th>Expenditure incurred during last financial year</th>\r\n                                                </tr>\r\n                                            </thead>\r\n\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let expenses of mf.data\">\r\n                                                    <td>{{expenses.itemName}}</td>\r\n                                                    <td>{{expenses.fundsRequired}}</td>\r\n                                                    <td>{{expenses.physicalTarget}}</td>\r\n                                                    <td>{{expenses.expenditureIncurredDuringLastFinYear}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n                                    </div>\r\n                                    <form class=\"smart-form smart-form-main\">\r\n                                        <fieldset>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-4\">\r\n                                                    <label><strong>Amount Transferred:</strong>{{sumofamount}}</label>\r\n\r\n                                                </div>\r\n                                                <div class=\"col col-4 selectContainer\" *ngIf=\"fundrequestDetails.statusId == 24\">\r\n                                                    <label><strong>RLO Bank Account:<span [style.color]=\"!bankIsValid?'red':''\"><b>*</b></span></strong></label>\r\n                                                    <select class=\"form-control\" name=\"rloBank\" [(ngModel)]=\"rloBankId\"\r\n                                                            [ngClass]=\"{'invalid-data': (!bankIsValid ), 'valid-data': bankIsValid}\"\r\n                                                            required>\r\n                                                        <option value=\"0\" disabled>Choose an Option</option>\r\n                                                        <option value=\"{{bank.rloOfficeBankId}}\" *ngFor=\"let bank of bankDetails\">{{bank.bankAccountNo}}</option>\r\n                                                        <i></i>\r\n                                                    </select>\r\n                                                    <div *ngIf=\"(!bankIsValid)\">\r\n                                                        <span style=\"color: red;\">Bank account is required </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col col-4 selectContainer\" *ngIf=\"fundrequestDetails.statusId != 24\">\r\n                                                    <label><strong> Bank Account Name: </strong>{{fundrequestDetails.rloBankName}}</label>\r\n\r\n                                                </div>\r\n                                                <div class=\"col col-4\">\r\n                                                    <label><strong>Download Bank NEFT Document:</strong></label>\r\n                                                    <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"color: green;zoom: 3;\" (click)=\"downloadNeftDocument()\"></i>\r\n                                                </div>\r\n                                            </div>\r\n                                        </fieldset>\r\n                                        <footer>\r\n                                            <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                            <a class=\"btn btn-primary\" *ngIf=\"fundrequestDetails.statusId == 24\" (click)=\"updateFundRequest(25)\">Release</a>\r\n\r\n                                        </footer>\r\n\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ReviewFundReleaseExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFundReleaseExpensesComponent", function() { return ReviewFundReleaseExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewFundReleaseExpensesComponent = /** @class */ (function () {
    function ReviewFundReleaseExpensesComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.bankDetails = [];
        this.bankIsValid = true;
        this.NEFTDetails = [];
        this.NEFTData = {};
        this.enableNEFT = false;
    }
    ReviewFundReleaseExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundReleaseOrderHdrId = params["fundReleaseOrderHdrId"];
            _this.alcId = params["alcId"];
            //this.mode = params["mode"];
            //if (this.mode != "pending") {
            //    this.isVisable = false;
            //}
        });
        this.getFundRequestedExpensesById(this.fundReleaseOrderHdrId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["UserType"].AsstLabourCom);
        // this.getRLOBankDetails(this.alcId, UserType.AsstLabourCom);
    };
    ReviewFundReleaseExpensesComponent.prototype.getFundRequestedExpensesById = function (fundReleaseOrderHdrId) {
        var _this = this;
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundReleaseOrderHdrId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.expensesList;
            _this.expensesData.forEach(function (x) { return _this.sumofamount += x.fundsRequired; });
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            if (_this.officeDetails.approvedClaimsAmount > _this.RloOfficeAddress.balanceOfTheAmount)
                _this.AmountShortfall = (_this.officeDetails.approvedClaimsAmount - _this.RloOfficeAddress.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
            _this.getRLOBankDetails(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.updateFundRequest = function (id) {
        var _this = this;
        if (this.rloBankId == undefined || this.rloBankId <= 0) {
            this.bankIsValid = false;
            return;
        }
        this.fundReviewModel.rloBankAccountId = this.rloBankId;
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["WorkflowTrans"].fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.fundReleaseOrderHdrId = this.fundrequestDetails.fundReleaseOrderHdrId;
        this.fundReviewModel.fundRequestType = 2; // Expenses
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                _this.successMessage = "Fund request updated successfully";
                _this.successModal.show();
            });
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.cancelclick = function () {
        //if (this.mode == "pending") {
        this.router.navigate(['tresurer/fundreleaselist']);
        //}
    };
    ReviewFundReleaseExpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: false });
    };
    ReviewFundReleaseExpensesComponent.prototype.setNEFTDetails = function () {
        var _this = this;
        this.NEFTDetails = [];
        var rloBankAccountId = this.fundrequestDetails.rloBankAccountId;
        var rloBankId = this.rloBankId;
        var bankId = ((rloBankAccountId != undefined && rloBankAccountId != null) ? rloBankAccountId : ((rloBankId != undefined && rloBankId != 0) ? rloBankId : 0));
        if (this.bankDetails != undefined) {
            this.bankDetails.forEach(function (eachObj) {
                if (eachObj.rloOfficeBankId == bankId) {
                    _this.bank = eachObj;
                }
            });
        }
        if (bankId != 0 && this.bank != undefined) {
            var tempNEFTData = this.NEFTData;
            this.enableNEFT = true;
            this.NEFTFileName = "NEFT Document";
            if (this.RloOfficeAddress != undefined) {
                tempNEFTData.nameofthePayee = this.RloOfficeAddress.rloOfficeName;
            }
            else {
                tempNEFTData.nameofthePayee = "";
            }
            tempNEFTData.contactNumber = "";
            tempNEFTData.idNumber = "";
            tempNEFTData.natureOfId = "";
            tempNEFTData.nameOfBank = this.bank.bankName;
            tempNEFTData.bankBranchCode = this.bank.bankBranch;
            tempNEFTData.accountNumber = this.bank.bankAccountNo;
            tempNEFTData.IFSCCode = this.bank.ifsc;
            tempNEFTData.amount = this.sumofamount.toString();
            tempNEFTData.narration = "";
            this.NEFTDetails.push(tempNEFTData);
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.getRLOBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getRLOBankDetails(id)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.downloadNeftDocument = function () {
        this.setNEFTDetails();
        this.showErrorMessage = false;
        var downloadNEFTDetails = this.NEFTDetails;
        if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadNEFTDetails, this.NEFTFileName);
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewFundReleaseExpensesComponent.prototype, "successModal", void 0);
    ReviewFundReleaseExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-fund-release-expenses',
            template: __webpack_require__(/*! ./review-fund-release-expenses.component.html */ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.html"),
            styles: [__webpack_require__(/*! ./review-fund-release-expenses.component.css */ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], ReviewFundReleaseExpensesComponent);
    return ReviewFundReleaseExpensesComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"widget-grid\" class=\"\">\r\n    <!-- row -->\r\n    <div class=\"row\">\r\n        <!-- NEW WIDGET START -->\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <!-- Widget ID (each widget will need unique ID)-->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header><h2>Payment Release View</h2></header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <!--<header>Please select the claims to forward to Tresurer for payment</header>-->\r\n                            <div>\r\n                                <header>ALC Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                            </div>\r\n                                           \r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n\r\n                                <fieldset style=\"display:none\">\r\n                                    <section>\r\n                                        <header>Fund Status at RLO</header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <fieldset>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <table id=\"dt_basic\" class=\"table table-striped table-bordered table-hover\" width=\"100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>SSIN</th>\r\n                                                    <th>Beneficiary Name</th>\r\n                                                    <th>Beneficiary Type</th>\r\n                                                    <th>Claim Reference No.</th>\r\n                                                    <th>Claim Category</th>\r\n                                                    <th>Submission Date</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let claim of claimsData\">\r\n                                                    <td>{{claim.ssin}}</td>\r\n                                                    <td>{{claim.benName}}</td>\r\n                                                    <td>{{claim.benType}}</td>\r\n                                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                    <td>{{claim.submittedDateString}}</td>\r\n                                                    <td>{{claim.approvedAmount}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"7\"></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </fieldset>\r\n                                <fieldset>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-4\">\r\n                                            <label class=\"control-label\"><strong>Amount Transferred:</strong>{{paymentReleaseDetails.releasedAmount}}</label>\r\n                                            \r\n                                        </div>\r\n                                        <!--<div class=\"col col-4 selectContainer\">\r\n                <label class=\"control-label\">Source Bank Account<span [style.color]=\"!bankIsValid?'red':''\"><b>*</b></span></label>\r\n                <select class=\"form-control\" name=\"rloBankId\" [(ngModel)]=\"rloBankId\">\r\n                    <option value=\"\">Choose a Bank Account</option>\r\n                    <option value=\"{{bank.rloOfficeBankId}}\" *ngFor=\"let bank of bankDetails\">{{bank.bankAccountNo}}</option>\r\n                    <i></i>\r\n                </select>\r\n            </div>-->\r\n                                        <div class=\"col col-4 selectContainer\">\r\n                                            <label class=\"control-label\"><strong> Bank Name: </strong>{{paymentReleaseDetails.bankName}}</label>\r\n                                            \r\n                                        </div>\r\n                                        <!--<div class=\"col col-4\">\r\n                                            <label class=\"control-label\"><strong>Download Bank NEFT Document:</strong></label>\r\n                                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"color: green;zoom: 3;\" (click)=\"downloadNeftDocument()\"></i>\r\n                                        </div>-->\r\n                                    </div>\r\n                                </fieldset>\r\n                                <footer>\r\n                                    <a class=\"btn btn-danger\" (click)=\"cancelclick()\"><i class=\"fa fa-remove\"></i> Cancel</a>\r\n                                </footer>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n\r\n    <!-- end row -->\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReviewpaymentreleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewpaymentreleaseComponent", function() { return ReviewpaymentreleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewpaymentreleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewpaymentrelease',
            template: __webpack_require__(/*! ./reviewpaymentrelease.component.html */ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.html"),
            styles: [__webpack_require__(/*! ./reviewpaymentrelease.component.css */ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_3__["TresurerDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
    ], ReviewpaymentreleaseComponent);
    return ReviewpaymentreleaseComponent;
}());



/***/ }),

/***/ "./src/app/tresurer/services/api-dictionary.ts":
/*!*****************************************************!*\
  !*** ./src/app/tresurer/services/api-dictionary.ts ***!
  \*****************************************************/
/*! exports provided: ApiDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDictionary", function() { return ApiDictionary; });
var ApiDictionary = {
    getRLOBankDetails: {
        url: 'GetRLOBankAccounts',
        params: null
    },
    getPaymentProcessedDetails: {
        url: 'getAllClaimsByPaymentProcessingId',
        params: null
    },
    GetRLOUserInfoByProcessingId: {
        url: 'GetRLOUserInfoByProcessingId',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    savePaymentRelease: {
        url: 'savePaymentRelease',
        params: null
    },
    getTreasurerPaymentProcesses: {
        url: 'getTreasurerPaymentProcesses',
        params: null
    },
    getFundReleaseDetails: {
        url: 'getTreasurerReleaseOrders',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundReleaseOrderByFundReleaseOrderId',
        params: null
    },
    getNEFTDetailsById: {
        url: 'GetNEFTDetailsForReleasedClaims',
        //url: 'src/assets/data/NEFTdetails.json',
        params: null
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getPaymentReleaseDetails: {
        url: 'GetPaymentReleasedList',
        params: null
    },
    getPaymentReleaseById: {
        url: 'GetPaymentReleaseHdrDetails',
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundReleaseOrderExpensesByFundReleaseOrderId',
        params: null
    },
    getBeneficiaryPaymentNEFTDetails: {
        url: 'getBeneficiaryPaymentNEFTDetails',
        params: null
    },
};


/***/ }),

/***/ "./src/app/tresurer/services/tresurer-data.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tresurer/services/tresurer-data.service.ts ***!
  \************************************************************/
/*! exports provided: TresurerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresurerDataService", function() { return TresurerDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/tresurer/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TresurerDataService = /** @class */ (function () {
    function TresurerDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    TresurerDataService.prototype.getRLOBankDetails = function (id, bankStatusId) {
        if (bankStatusId === void 0) { bankStatusId = 1; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRLOBankDetails.url + "/" + id + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOBankDetailsByUserId = function (id, userId, bankStatusId) {
        if (bankStatusId === void 0) { bankStatusId = 1; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRLOBankDetails.url + "/" + id + "/" + userId + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentProcessedDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPaymentProcessedDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOUserInfoByProcessingId = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetRLOUserInfoByProcessingId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.savePaymentReleaseClaims = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].savePaymentRelease.url, claim).then(function (res) {
            return res;
        });
    };
    //dropdown services
    TresurerDataService.prototype.getTreasurerPaymentProcesses = function (id, type, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getTreasurerPaymentProcesses.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundReleaseDetails = function (id, statusId, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getFundReleaseDetails.url + "/" + id + "/" + type + "/" + wfId + "/" + statusId, { params: params });
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundReleaseDetails.url + "/" + id + "/" + statusId + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getNEFTDetailsById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getNEFTDetailsById.url + "/" + Id, { params: params });
        //return this.apiService.getDropdownData(options).map((res: any) => {
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getNEFTDetailsById.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentNEFTDetails = function (claims) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getNEFTDetailsById.url, claims).then(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getBeneficiaryPaymentNEFTDetails = function (fundReleaseOrderHdrId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryPaymentNEFTDetails.url + "/" + fundReleaseOrderHdrId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentReleaseDetails = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPaymentReleaseDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentReleaseById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPaymentReleaseById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TresurerDataService);
    return TresurerDataService;
}());



/***/ }),

/***/ "./src/app/tresurer/tresurer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tresurer/tresurer.module.ts ***!
  \*********************************************/
/*! exports provided: TresurerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresurerModule", function() { return TresurerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../claim/pipes/grd-filter.pipe */ "./src/app/claim/pipes/grd-filter.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tresurerlanding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tresurerlanding.component */ "./src/app/tresurer/tresurerlanding.component.ts");
/* harmony import */ var _payment_release_payment_release_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-release/payment-release.component */ "./src/app/tresurer/payment-release/payment-release.component.ts");
/* harmony import */ var _services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/tresurer-data.service */ "./src/app/tresurer/services/tresurer-data.service.ts");
/* harmony import */ var _fund_release_list_fund_release_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fund-release-list/fund-release-list.component */ "./src/app/tresurer/fund-release-list/fund-release-list.component.ts");
/* harmony import */ var _fund_release_fund_release_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fund-release/fund-release.component */ "./src/app/tresurer/fund-release/fund-release.component.ts");
/* harmony import */ var _payment_processed_list_payment_processed_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-processed-list/payment-processed-list.component */ "./src/app/tresurer/payment-processed-list/payment-processed-list.component.ts");
/* harmony import */ var _pending_fund_release_list_pending_fund_release_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pending-fund-release-list/pending-fund-release-list.component */ "./src/app/tresurer/pending-fund-release-list/pending-fund-release-list.component.ts");
/* harmony import */ var _payment_released_list_payment_released_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment-released-list/payment-released-list.component */ "./src/app/tresurer/payment-released-list/payment-released-list.component.ts");
/* harmony import */ var _reviewpaymentrelease_reviewpaymentrelease_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reviewpaymentrelease/reviewpaymentrelease.component */ "./src/app/tresurer/reviewpaymentrelease/reviewpaymentrelease.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _review_fund_release_expenses_review_fund_release_expenses_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./review-fund-release-expenses/review-fund-release-expenses.component */ "./src/app/tresurer/review-fund-release-expenses/review-fund-release-expenses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















;

var routes = [
    {
        path: '',
        component: _tresurerlanding_component__WEBPACK_IMPORTED_MODULE_7__["TresurerlandingComponent"],
        children: [
            { path: '', redirectTo: 'paymentrelease', pathMatch: 'full' },
            { path: 'paymentrelease', component: _payment_release_payment_release_component__WEBPACK_IMPORTED_MODULE_8__["PaymentReleaseComponent"] },
            { path: 'fundreleaselist', component: _fund_release_list_fund_release_list_component__WEBPACK_IMPORTED_MODULE_10__["FundReleaseListComponent"] },
            { path: 'fundrelease', component: _fund_release_fund_release_component__WEBPACK_IMPORTED_MODULE_11__["FundReleaseComponent"] },
            { path: 'paymentprocessedlist', component: _payment_processed_list_payment_processed_list_component__WEBPACK_IMPORTED_MODULE_12__["PaymentProcessedListComponent"] },
            { path: 'pendingfundreleaselist', component: _pending_fund_release_list_pending_fund_release_list_component__WEBPACK_IMPORTED_MODULE_13__["PendingFundReleaseListComponent"] },
            { path: 'paymentreleasedlist', component: _payment_released_list_payment_released_list_component__WEBPACK_IMPORTED_MODULE_14__["PaymentReleasedListComponent"] },
            { path: 'reviewpaymentrelease', component: _reviewpaymentrelease_reviewpaymentrelease_component__WEBPACK_IMPORTED_MODULE_15__["ReviewpaymentreleaseComponent"] },
            { path: 'reviewfundreleaseexpenses', component: _review_fund_release_expenses_review_fund_release_expenses_component__WEBPACK_IMPORTED_MODULE_17__["ReviewFundReleaseExpensesComponent"] }
        ]
    },
];
var TresurerModule = /** @class */ (function () {
    function TresurerModule() {
    }
    TresurerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"], angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            providers: [_services_tresurer_data_service__WEBPACK_IMPORTED_MODULE_9__["TresurerDataService"]],
            declarations: [_tresurerlanding_component__WEBPACK_IMPORTED_MODULE_7__["TresurerlandingComponent"], _payment_release_payment_release_component__WEBPACK_IMPORTED_MODULE_8__["PaymentReleaseComponent"], _fund_release_list_fund_release_list_component__WEBPACK_IMPORTED_MODULE_10__["FundReleaseListComponent"], _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["GrdFilterPipe"], _fund_release_fund_release_component__WEBPACK_IMPORTED_MODULE_11__["FundReleaseComponent"], _payment_processed_list_payment_processed_list_component__WEBPACK_IMPORTED_MODULE_12__["PaymentProcessedListComponent"], _pending_fund_release_list_pending_fund_release_list_component__WEBPACK_IMPORTED_MODULE_13__["PendingFundReleaseListComponent"], _payment_released_list_payment_released_list_component__WEBPACK_IMPORTED_MODULE_14__["PaymentReleasedListComponent"], _reviewpaymentrelease_reviewpaymentrelease_component__WEBPACK_IMPORTED_MODULE_15__["ReviewpaymentreleaseComponent"], _review_fund_release_expenses_review_fund_release_expenses_component__WEBPACK_IMPORTED_MODULE_17__["ReviewFundReleaseExpensesComponent"]],
        })
    ], TresurerModule);
    return TresurerModule;
}());



/***/ }),

/***/ "./src/app/tresurer/tresurerlanding.component.html":
/*!*********************************************************!*\
  !*** ./src/app/tresurer/tresurerlanding.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/tresurer/tresurerlanding.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tresurer/tresurerlanding.component.ts ***!
  \*******************************************************/
/*! exports provided: TresurerlandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresurerlandingComponent", function() { return TresurerlandingComponent; });
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

var TresurerlandingComponent = /** @class */ (function () {
    function TresurerlandingComponent() {
    }
    TresurerlandingComponent.prototype.ngOnInit = function () {
    };
    TresurerlandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tresurerlanding',
            template: __webpack_require__(/*! ./tresurerlanding.component.html */ "./src/app/tresurer/tresurerlanding.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TresurerlandingComponent);
    return TresurerlandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tresurer-tresurer-module.js.map