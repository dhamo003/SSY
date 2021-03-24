(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspector-inspector-module"],{

/***/ "./src/app/inspector/approval-claims/approval-claims.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inspector/approval-claims/approval-claims.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/approval-claims/approval-claims.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inspector/approval-claims/approval-claims.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Forwarded</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                                <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                                <button><i class=\"fa fa-search\"></i></button>\r\n                            </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"forwardedDateString\">Forwarded Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText, submittedDateString: searchText, forwardedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.forwardedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/approval-claims/approval-claims.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inspector/approval-claims/approval-claims.component.ts ***!
  \************************************************************************/
/*! exports provided: ApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalClaimsComponent", function() { return ApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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





var ApprovalClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ApprovalClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    ApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ApprovalClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "approve", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "approve", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    ApprovalClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ApprovalClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ApprovalClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ApprovalClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ApprovalClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ForwardtoALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
        }
    };
    ApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-claims',
            template: __webpack_require__(/*! ./approval-claims.component.html */ "./src/app/inspector/approval-claims/approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./approval-claims.component.css */ "./src/app/inspector/approval-claims/approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ApprovalClaimsComponent);
    return ApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/claim-status/claim-status.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inspector/claim-status/claim-status.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/claim-status/claim-status.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inspector/claim-status/claim-status.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"lastActionDateString\">Last Action Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,benName: searchText, benType: searchText, claimRefernceNo: searchText,\r\n       claimType: searchText, submittedDateString: searchText, claimAmount:searchText,  statusName: searchText,  lastActionDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.statusName}}</td>\r\n                                    <td>{{user.lastActionDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/claim-status/claim-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inspector/claim-status/claim-status.component.ts ***!
  \******************************************************************/
/*! exports provided: ClaimStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimStatusComponent", function() { return ClaimStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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





var ClaimStatusComponent = /** @class */ (function () {
    //Paging props end
    function ClaimStatusComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    ClaimStatusComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ClaimStatusComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "claimstatus", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ClaimStatusComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "claimstatus", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    ClaimStatusComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ClaimStatusComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ClaimStatusComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ClaimStatusComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ClaimStatusComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getClaimStatusClaims(id, type, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ClaimStatusComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ClaimStatusComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchClaimStatusClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ClaimStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claim-status',
            template: __webpack_require__(/*! ./claim-status.component.html */ "./src/app/inspector/claim-status/claim-status.component.html"),
            styles: [__webpack_require__(/*! ./claim-status.component.css */ "./src/app/inspector/claim-status/claim-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ClaimStatusComponent);
    return ClaimStatusComponent;
}());



/***/ }),

/***/ "./src/app/inspector/claimviewdata/claimviewdata.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/inspector/claimviewdata/claimviewdata.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/claimviewdata/claimviewdata.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/claimviewdata/claimviewdata.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Entry View </h2>\r\n                </header>\r\n\r\n                <div>\r\n\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>Beneficiary Details</header>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong> {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong>  {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD' && claim?.healthFamilyDetails?.claimFor == 5\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inspector/claimviewdata/claimviewdata.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inspector/claimviewdata/claimviewdata.component.ts ***!
  \********************************************************************/
/*! exports provided: ClaimviewdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimviewdataComponent", function() { return ClaimviewdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClaimviewdataComponent = /** @class */ (function () {
    function ClaimviewdataComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.viewMetWithAnAccident = false;
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.isPrematureClaim = false;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
    }
    ClaimviewdataComponent.prototype.ngOnInit = function () {
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.transactionId, this.claimType);
    };
    ClaimviewdataComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            if (_this.claim.educationDetails != null) {
                _this.educationList = _this.claim.educationDetails.educationDetailList;
                if (_this.claim.educationDetails.educationDetailList.length > 0) {
                    for (var i = 0; i < _this.claim.educationDetails.educationDetailList.length; i++) {
                        if (_this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                            for (var j = 0; j < _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                var attachment = _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                    attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                }
                                _this.attachmentList.push(attachment);
                            }
                        }
                    }
                }
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
            }
            if (_this.claim.providentFundDetails != null) {
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["PFTypeOfClaim"].Premature) {
                    _this.isPrematureClaim = true;
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    if (_this.claim.attachment[k].fileName != null) {
                        var attachment = _this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.claim.attachment[k] = attachment;
                        // this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            //  this.getUrlOfPdf();
        });
    };
    ClaimviewdataComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ClaimviewdataComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ClaimviewdataComponent.prototype.getData = function (claim) {
        debugger;
        this.getPackages();
        this.claim = claim;
        //if (this.claim.educationDetails != null) {
        //    this.educationList = this.claim.educationDetails.educationDetailList;
        //    if (this.claim.educationDetails.educationDetailList.length > 0) {
        //        for (var i = 0; i < this.claim.educationDetails.educationDetailList.length; i++) {
        //            if (this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
        //                for (var j = 0; j < this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
        //                    let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
        //                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //                        attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //                    }
        //                    this.attachmentList.push(attachment);
        //                }
        //            }
        //        }
        //    }
        //}
        //if (this.claim.healthFamilyDetails != null) {
        //    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
        //        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
        //    }
        //    let data = this.claim.healthFamilyDetails.healthFamilyPackages;
        //    for (var i = 0; i < data.length; i++) {
        //        this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
        //    }
        //    this.selectedPackages = this.packages.filter(x => x.isChecked == true);
        //}
        //if (this.claim.providentFundDetails != null) {
        //    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
        //        this.isPrematureClaim = true;
        //    }
        //}
        //if (this.claim.deathDetails != null) {
        //    for (var j = 0; j < this.claim.deathDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.deathDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //}
        //if (this.claim.disabilityDetails != null) {
        //    for (var j = 0; j < this.claim.disabilityDetails.attachmentDTOList.length; j++) {
        //        let attachment = this.claim.disabilityDetails.attachmentDTOList[j];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.attachmentList.push(attachment);
        //    }
        //}
        //if (this.claim.attachment != null) {
        //    for (var k = 0; k < this.claim.attachment.length; k++) {
        //        let attachment = this.claim.attachment[k];
        //        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
        //            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
        //        }
        //        this.claim.attachment[k] = attachment;
        //         this.attachmentList.push(attachment);
        //    }
        //}
        this.getBenBasicDetails(this.claim.benSno);
        console.log(this.claim);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "claimId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "claimType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ClaimviewdataComponent.prototype, "transactionId", void 0);
    ClaimviewdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claimviewdata',
            template: __webpack_require__(/*! ./claimviewdata.component.html */ "./src/app/inspector/claimviewdata/claimviewdata.component.html"),
            styles: [__webpack_require__(/*! ./claimviewdata.component.css */ "./src/app/inspector/claimviewdata/claimviewdata.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ClaimviewdataComponent);
    return ClaimviewdataComponent;
}());



/***/ }),

/***/ "./src/app/inspector/foececlose/foececlose.component.css":
/*!***************************************************************!*\
  !*** ./src/app/inspector/foececlose/foececlose.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/foececlose/foececlose.component.html":
/*!****************************************************************!*\
  !*** ./src/app/inspector/foececlose/foececlose.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Forced Close </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"forcedClosedDateString\">Force Close Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText, submittedDateString: searchText, forcedClosedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{user.claimType}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.forcedClosedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/foececlose/foececlose.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/inspector/foececlose/foececlose.component.ts ***!
  \**************************************************************/
/*! exports provided: FoececloseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoececloseComponent", function() { return FoececloseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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





var FoececloseComponent = /** @class */ (function () {
    //Paging props end
    function FoececloseComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    FoececloseComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "force", chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    FoececloseComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    FoececloseComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    FoececloseComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    FoececloseComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForcedClosed, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    FoececloseComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    FoececloseComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForcedClosed, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    FoececloseComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ForcedClosed, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForcedClosed, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    FoececloseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foececlose',
            template: __webpack_require__(/*! ./foececlose.component.html */ "./src/app/inspector/foececlose/foececlose.component.html"),
            styles: [__webpack_require__(/*! ./foececlose.component.css */ "./src/app/inspector/foececlose/foececlose.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FoececloseComponent);
    return FoececloseComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widget-grid\">\r\n    <!--content-->\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Legacy Claim Entry</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form \">\r\n                            <!--smart-form-main-->\r\n                            <fieldset id=\"legacyEntry\">\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">SSIN <span [style.color]=\"!ssnNoValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"benSno\" class=\"form-control\" [(ngModel)]=\"claim.ssinNumber\" placeholder=\"Enter SSIN\"\r\n                                                   NumbersOnly maxlength=\"50\"\r\n                                                   #benSno=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': benSno.invalid && (!ssnNoValid || benSno.touched), 'valid-data': benSno.valid && ssnNoValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"benSno.invalid && (!ssnNoValid ||benSno.touched)\">\r\n                                                <span style=\"color: red;\">SSIN is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Date of Payment <span [style.color]=\"!dateofPaymentValid?'red':''\"><b>*</b></span></label>\r\n                                            <label class=\"input\">\r\n                                                <i class=\"icon-append fa fa-calendar\"></i>\r\n                                                <input type=\"text\" name=\"date\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                       placeholder=\"DD/MM/YYYY\" value=\"{{ claim.claimDate | date: 'dd/MM/yyyy' }}\"\r\n                                                       [(ngModel)]=\"claim.claimDate\" readonly\r\n                                                       #date=\"ngModel\"\r\n                                                       [ngClass]=\"{'invalid-data':date.invalid && (!dateofPaymentValid), 'valid-data': date.valid && dateofPaymentValid}\"\r\n                                                       required>\r\n                                            </label>\r\n                                            <div *ngIf=\"date.invalid && (!dateofPaymentValid)\">\r\n                                                <span style=\"color: red;\">Date of Payment is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Category <span [style.color]=\"!categoryValid?'red':''\"><b>*</b></span></label>\r\n                                            <select class=\"form-control select\" name=\"category\" [(ngModel)]=\"claim.claimCategory\">\r\n                                                <option value=\"0\" selected disabled>Choose an Option</option>\r\n                                                <option value=\"{{category.lovDtlId}}\" *ngFor=\"let category of categoryLov\">{{category.optionName}}</option>\r\n                                                <!--<option value=\"1\">PF</option>\r\n                                                    <option value=\"2\">Health&Family</option>\r\n                                                    <option value=\"3\">DisabIlity</option>\r\n                                                    <option value=\"4\">Death</option>\r\n                                                    <option value=\"5\">Education</option>-->\r\n                                            </select>\r\n                                            <div *ngIf=\"!categoryValid\">\r\n                                                <span style=\"color: red;\">Category is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Claim Amount Received <span [style.color]=\"!claimAmountValid?'red':''\"><b>*</b></span> </label>\r\n                                            <label class=\"input\">\r\n                                                <input type=\"text\" name=\"claimAmount\" placeholder=\"Claim Amount Received\" [(ngModel)]=\"claim.claimAmount\">\r\n                                            </label>\r\n                                            <div *ngIf=\"!claimAmountValid\">\r\n                                                <span style=\"color: red;\">Claim Amount Received is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Old Regd No. <span [style.color]=\"!oldRegdNoValid?'red':''\"><b>*</b></span> </label>\r\n                                            <label class=\"input\">\r\n                                                <input type=\"text\" name=\"oldRegdNo\" placeholder=\"Old Regd No.\" [(ngModel)]=\"claim.oldRegdNo\">\r\n                                            </label>\r\n                                            <div *ngIf=\"!oldRegdNoValid\">\r\n                                                <span style=\"color: red;\">Old Regd No is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Remarks: </label>\r\n                                            <label class=\"textarea textarea-resizable\">\r\n                                                <textarea rows=\"3\" class=\"custom-scroll\" name=\"remarks\" [(ngModel)]=\"claim.remarks\" placeholder=\"Remarks\"></textarea>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!--<div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label class=\"label\">Status:</label>\r\n                                                    <select class=\"form-control\" name=\"status\" [(ngModel)]=\"claim.status\">\r\n                                                        <option value=\"0\" selected>Choose an Option</option>\r\n                                                        <option value=\"1\">Saved</option>\r\n                                                        <option value=\"2\">Submitted</option>\r\n                                                        <option value=\"3\">Sendback from Inspector</option>\r\n                                                        <option value=\"4\">Forwarded to ALC</option>\r\n                                                        <option value=\"5\">Sendback from ALC</option>\r\n                                                        <option value=\"5\">Reject from ALC</option>\r\n                                                        <option value=\"5\">Approved by ALC</option>\r\n                                                        <option value=\"5\">Forced Closed</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                        </div>-->\r\n                                    <!--<div class=\"row\">\r\n                                       \r\n                                    </div>-->\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <form class=\"smart-form\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a id=\"btnSava\" class=\"btn btn-success\" (click)=\"SaveLegacyClaim(claim)\"> Save </a>\r\n                    <a class=\"btn btn-danger\" (click)=\"CancelClick()\"> Cancel</a>\r\n                </footer>\r\n            </form>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InspectorLegacyClaimEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorLegacyClaimEntryComponent", function() { return InspectorLegacyClaimEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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






var InspectorLegacyClaimEntryComponent = /** @class */ (function () {
    function InspectorLegacyClaimEntryComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claim = {};
        //isInspector: boolean = false;
        this.ssnNoValid = true;
        this.dateofPaymentValid = true;
        this.categoryValid = true;
        this.claimAmountValid = true;
        this.oldRegdNoValid = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    InspectorLegacyClaimEntryComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    InspectorLegacyClaimEntryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    InspectorLegacyClaimEntryComponent.prototype.SaveLegacyClaim = function (claimData) {
        var _this = this;
        debugger;
        if (this.validate(claimData)) {
            claimData.userId = this.userService.user.deptUserid;
            claimData.userType = Number(this.userService.user.userTpe);
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveLegacyClaimDetails(claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Legacy claim successfully Saved";
                        _this.successModal.show();
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                        _this.successModal.show();
                    }
                });
            }
        }
        else
            return;
    };
    InspectorLegacyClaimEntryComponent.prototype.validate = function (claimData) {
        var isValid = true;
        if (claimData.ssinNumber == null || claimData.ssinNumber == undefined) {
            this.ssnNoValid = isValid = false;
        }
        if (claimData.claimDate == null || claimData.claimDate == undefined) {
            this.dateofPaymentValid = isValid = false;
        }
        if (claimData.claimCategory == 0 || claimData.claimCategory == undefined) {
            this.categoryValid = isValid = false;
        }
        if (claimData.claimAmount == null || claimData.claimAmount == undefined) {
            this.claimAmountValid = isValid = false;
        }
        if (claimData.oldRegdNo == null || claimData.oldRegdNo == undefined) {
            this.oldRegdNoValid = isValid = false;
        }
        return isValid;
    };
    InspectorLegacyClaimEntryComponent.prototype.CancelClick = function () {
        debugger;
        this.router.navigate(['inspector/inspectorlegacylist']);
    };
    InspectorLegacyClaimEntryComponent.prototype.okClick = function () {
        debugger;
        this.successModal.hide();
        this.router.navigate(['inspector/inspectorlegacylist']);
    };
    InspectorLegacyClaimEntryComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["LovConstants"].LegacyClaimCategory)
            .subscribe(function (data) {
            _this.categoryLov = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], InspectorLegacyClaimEntryComponent.prototype, "successModal", void 0);
    InspectorLegacyClaimEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inspector-legacy-claim-entry',
            template: __webpack_require__(/*! ./inspector-legacy-claim-entry.component.html */ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.html"),
            styles: [__webpack_require__(/*! ./inspector-legacy-claim-entry.component.css */ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_3__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], InspectorLegacyClaimEntryComponent);
    return InspectorLegacyClaimEntryComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Legacy Claim Status </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"legacyClaimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <!--<th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssinNumber\">SSIN No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"oldRegdNo\">Old Regd No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <!--<th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Refernce No.</mfDefaultSorter>\r\n                                    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimDateString\">Claim Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Claim Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <!--<th>\r\n                                        <mfDefaultSorter by=\"statusName\">Satus</mfDefaultSorter>\r\n                                    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimCategoryName\">Claim Catagory</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {ssinNumber: searchText,oldRegdNo: searchText,claimDateString:searchText,claimAmount:searchText,claimCategoryName:searchText\r\n                                    }; let i=index;\">\r\n                                    <!--<td class=\"\">\r\n                                    <a (click)=\"onreviewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-eye\"></i></a>\r\n                                                                </td>-->\r\n                                    <td>{{data.ssinNumber}}</td>\r\n                                    <td>{{data.oldRegdNo}}</td>\r\n                                    <!--<td>{{data.claimRefernceNo}}</td>-->\r\n                                    <td>{{data.claimDateString}}</td>\r\n                                    <td>{{data.claimAmount}}</td>\r\n                                    <!--<td>{{data.statusName}}</td>-->\r\n                                    <td>{{data.claimCategoryName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"7\">\r\n                                        <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: InspectorLegacyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorLegacyListComponent", function() { return InspectorLegacyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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





var InspectorLegacyListComponent = /** @class */ (function () {
    //Paging props end
    function InspectorLegacyListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    InspectorLegacyListComponent.prototype.ngOnInit = function () {
        this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    InspectorLegacyListComponent.prototype.getLegacyClaimsList = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getLegacyClaimsList(id, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.legacyClaimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    InspectorLegacyListComponent.prototype.onreviewClick = function (item) {
        debugger;
        // this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view", statusId: item.statusId }], { skipLocationChange: true });
    };
    InspectorLegacyListComponent.prototype.changepage = function (page) {
        this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    InspectorLegacyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inspector-legacy-list',
            template: __webpack_require__(/*! ./inspector-legacy-list.component.html */ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.html"),
            styles: [__webpack_require__(/*! ./inspector-legacy-list.component.css */ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], InspectorLegacyListComponent);
    return InspectorLegacyListComponent;
}());



/***/ }),

/***/ "./src/app/inspector/inspector.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inspector/inspector.module.ts ***!
  \***********************************************/
/*! exports provided: InspectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorModule", function() { return InspectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inspectorlanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorlanding.component */ "./src/app/inspector/inspectorlanding.component.ts");
/* harmony import */ var _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-approval-claims/pending-approval-claims.component */ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.ts");
/* harmony import */ var _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-claims/approval-claims.component */ "./src/app/inspector/approval-claims/approval-claims.component.ts");
/* harmony import */ var _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reject-claims/reject-claims.component */ "./src/app/inspector/reject-claims/reject-claims.component.ts");
/* harmony import */ var _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sendback-claims/sendback-claims.component */ "./src/app/inspector/sendback-claims/sendback-claims.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../claim/pipes/grd-filter.pipe */ "./src/app/claim/pipes/grd-filter.pipe.ts");
/* harmony import */ var _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviewclaims/reviewclaims.component */ "./src/app/inspector/reviewclaims/reviewclaims.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _foececlose_foececlose_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./foececlose/foececlose.component */ "./src/app/inspector/foececlose/foececlose.component.ts");
/* harmony import */ var _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timetrack/timetrack.component */ "./src/app/inspector/timetrack/timetrack.component.ts");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./claimviewdata/claimviewdata.component */ "./src/app/inspector/claimviewdata/claimviewdata.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./claim-status/claim-status.component */ "./src/app/inspector/claim-status/claim-status.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _inspector_legacy_list_inspector_legacy_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inspector-legacy-list/inspector-legacy-list.component */ "./src/app/inspector/inspector-legacy-list/inspector-legacy-list.component.ts");
/* harmony import */ var _inspector_legacy_claim_entry_inspector_legacy_claim_entry_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inspector-legacy-claim-entry/inspector-legacy-claim-entry.component */ "./src/app/inspector/inspector-legacy-claim-entry/inspector-legacy-claim-entry.component.ts");
/* harmony import */ var _search_student_search_student_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search-student/search-student.component */ "./src/app/inspector/search-student/search-student.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: '',
        component: _inspectorlanding_component__WEBPACK_IMPORTED_MODULE_2__["InspectorlandingComponent"],
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["PendingApprovalClaimsComponent"] },
            { path: 'approvalclaims', component: _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalClaimsComponent"] },
            { path: 'rejectclaims', component: _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__["RejectClaimsComponent"] },
            { path: 'sendbackclaims', component: _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__["SendbackClaimsComponent"] },
            { path: 'reviewclaims', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'forcecloseclaims', component: _foececlose_foececlose_component__WEBPACK_IMPORTED_MODULE_14__["FoececloseComponent"] },
            { path: 'forcecloseclaims', component: _foececlose_foececlose_component__WEBPACK_IMPORTED_MODULE_14__["FoececloseComponent"] },
            { path: 'claimtrack', component: _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_15__["TimetrackComponent"] },
            { path: 'claimstatus', component: _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_18__["ClaimStatusComponent"] },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'inspectorlegacylist', component: _inspector_legacy_list_inspector_legacy_list_component__WEBPACK_IMPORTED_MODULE_20__["InspectorLegacyListComponent"] },
            { path: 'inspectorlegacyclaimentry', component: _inspector_legacy_claim_entry_inspector_legacy_claim_entry_component__WEBPACK_IMPORTED_MODULE_21__["InspectorLegacyClaimEntryComponent"] },
            { path: 'searchstudent', component: _search_student_search_student_component__WEBPACK_IMPORTED_MODULE_22__["SearchStudentComponent"] },
        ]
    },
];
var InspectorModule = /** @class */ (function () {
    function InspectorModule() {
    }
    InspectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["AccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"], angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot()
            ],
            providers: [_services_inspector_data_service__WEBPACK_IMPORTED_MODULE_9__["InspectorDataService"]],
            declarations: [_inspectorlanding_component__WEBPACK_IMPORTED_MODULE_2__["InspectorlandingComponent"], _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["GrdFilterPipe"], _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["PendingApprovalClaimsComponent"], _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalClaimsComponent"], _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__["RejectClaimsComponent"], _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__["SendbackClaimsComponent"], _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"], _foececlose_foececlose_component__WEBPACK_IMPORTED_MODULE_14__["FoececloseComponent"], _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_15__["TimetrackComponent"], _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_16__["ClaimviewdataComponent"], _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_18__["ClaimStatusComponent"], _inspector_legacy_list_inspector_legacy_list_component__WEBPACK_IMPORTED_MODULE_20__["InspectorLegacyListComponent"], _inspector_legacy_claim_entry_inspector_legacy_claim_entry_component__WEBPACK_IMPORTED_MODULE_21__["InspectorLegacyClaimEntryComponent"], _search_student_search_student_component__WEBPACK_IMPORTED_MODULE_22__["SearchStudentComponent"]]
        })
    ], InspectorModule);
    return InspectorModule;
}());



/***/ }),

/***/ "./src/app/inspector/inspectorlanding.component.css":
/*!**********************************************************!*\
  !*** ./src/app/inspector/inspectorlanding.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/inspectorlanding.component.html":
/*!***********************************************************!*\
  !*** ./src/app/inspector/inspectorlanding.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/inspector/inspectorlanding.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/inspector/inspectorlanding.component.ts ***!
  \*********************************************************/
/*! exports provided: InspectorlandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorlandingComponent", function() { return InspectorlandingComponent; });
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

var InspectorlandingComponent = /** @class */ (function () {
    function InspectorlandingComponent() {
    }
    InspectorlandingComponent.prototype.ngOnInit = function () {
    };
    InspectorlandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inspectorlanding',
            template: __webpack_require__(/*! ./inspectorlanding.component.html */ "./src/app/inspector/inspectorlanding.component.html"),
            styles: [__webpack_require__(/*! ./inspectorlanding.component.css */ "./src/app/inspector/inspectorlanding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InspectorlandingComponent);
    return InspectorlandingComponent;
}());



/***/ }),

/***/ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/inspector/pending-approval-claims/pending-approval-claims.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/inspector/pending-approval-claims/pending-approval-claims.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Pending  </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <!--*ngIf=\"user.isEdit\"-->\r\n                                        <a (click)=\"onreviewClick(user, i)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                        <!--<a *ngIf=\"!user.isEdit\" (click)=\"onViewClick(user, i)\"  title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-minus-square-o\"></i></a>-->\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/inspector/pending-approval-claims/pending-approval-claims.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PendingApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingApprovalClaimsComponent", function() { return PendingApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
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





var PendingApprovalClaimsComponent = /** @class */ (function () {
    //Paging props end
    function PendingApprovalClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        // status: any = {};
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize;
    }
    PendingApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    PendingApprovalClaimsComponent.prototype.onreviewClick = function (item, index) {
        debugger;
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "pending", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, claimAmount: item.claimAmount, chronologicalOrder: index }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "pending", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    //onViewClick(item: any, index: any) {
    //    this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "view", workflowId: WorkflowTrans.workflow, claimAmount: item.claimAmount, chronologicalOrder: -1 }], { skipLocationChange: true });
    //}
    PendingApprovalClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    PendingApprovalClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    PendingApprovalClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    PendingApprovalClaimsComponent.prototype.ngOnInit = function () {
        // this.status = [ClaimStatus.Submitted, ClaimStatus.SendbackfromALC];
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].Submitted, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PendingApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].Submitted, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.Submitted, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].Submitted, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize);
        }
    };
    PendingApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-approval-claims',
            template: __webpack_require__(/*! ./pending-approval-claims.component.html */ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./pending-approval-claims.component.css */ "./src/app/inspector/pending-approval-claims/pending-approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PendingApprovalClaimsComponent);
    return PendingApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/reject-claims/reject-claims.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/inspector/reject-claims/reject-claims.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/reject-claims/reject-claims.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/reject-claims/reject-claims.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Rejected </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDate\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rejectedDate\">Rejected Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText, rejectedDate: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.rejectedDate}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/reject-claims/reject-claims.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inspector/reject-claims/reject-claims.component.ts ***!
  \********************************************************************/
/*! exports provided: RejectClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectClaimsComponent", function() { return RejectClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
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





var RejectClaimsComponent = /** @class */ (function () {
    //Paging props end
    function RejectClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    RejectClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    RejectClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "reject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "reject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    RejectClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    RejectClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    RejectClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    RejectClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    RejectClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reject-claims',
            template: __webpack_require__(/*! ./reject-claims.component.html */ "./src/app/inspector/reject-claims/reject-claims.component.html"),
            styles: [__webpack_require__(/*! ./reject-claims.component.css */ "./src/app/inspector/reject-claims/reject-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RejectClaimsComponent);
    return RejectClaimsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/reviewclaims/reviewclaims.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inspector/reviewclaims/reviewclaims.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/inspector/reviewclaims/reviewclaims.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inspector/reviewclaims/reviewclaims.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Claim View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div style=\"text-align:right\" *ngIf=\"enableSearchStudentLink\">\r\n                        <a (click)=\"searchLinkClick()\" class=\"smart-form-link\">Search Student</a>\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <div *ngIf=\"isVisibleClaimExceptions\">\r\n                                <header>Exceptions</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <!--<ul ><li ng-repeat=\"exception in claimExceptionDetailsList\">{{exception.exceptionText}}</li></ul>-->\r\n                                        <div [innerHTML]=\"claimExceptionDetails\"></div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset disabled=\"true\">\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\" [checked]=\"claim.providentFundDetails != null\"><i></i>PF(Provident Fund)</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Health & Family\" [checked]=\"claim.healthFamilyDetails != null\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death\" [checked]=\"claim.deathDetails != null\"><i></i>Death</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Disability\" [checked]=\"claim.disabilityDetails != null\"><i></i>Disability</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Education\" [checked]=\"claim.educationDetails != null\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong> {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong>  {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>PF Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Educational Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD'\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n                                <header>Health & Family Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Disability Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Death Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Time Line</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <!-- row -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                            <div class=\"well well-sm\">\r\n                                                <div class=\"smart-timeline\">\r\n                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                            <div class=\"smart-timeline-icon\">\r\n                                                                <i class=\"fa fa-user\"></i>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-time\">\r\n                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-content\">\r\n                                                                <p>\r\n                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                </p>\r\n                                                                <p>\r\n                                                                    {{item.actionComments}}\r\n                                                                </p>\r\n                                                            </div>\r\n                                                        </li>\r\n\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isShowClaimsHistory\">\r\n                                <header>Claims History</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewHistory()\" class=\"smart-form-link\">View Claims History</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"isMapForcedClaim\">\r\n                                <header>Forced Closed Claims</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <!--<div class=\"col col-6\">-->\r\n                                            <table class=\"table table-striped\" [mfData]=\"forcedClaimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><input type=\"checkbox\" name=\"selectedAll\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>\r\n                                                        <th>\r\n                                                            Claim Reference No.\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Submission Date\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Claim Amount\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Approved Amount\r\n\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Status\r\n                                                        </th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let forcedClaim of mf.data; let i=index;\">\r\n                                                        <td class=\"\">\r\n                                                            <input type=\"checkbox\" [(ngModel)]=\"forcedClaim.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"checkIfAllSelected();\">\r\n                                                        </td>\r\n                                                        <td>{{forcedClaim.claimRefernceNo}}</td>\r\n                                                        <td>{{forcedClaim.submittedDateString}}</td>\r\n                                                        <td>{{forcedClaim.claimAmount}}</td>\r\n                                                        <td>{{forcedClaim.approvedAmount}}</td>\r\n                                                        <td>{{forcedClaim.statusName}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"6\">\r\n                                                            <!--<div *ngIf=\"claimsData.length>0\">\r\n                                                <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            </div>-->\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n                                            <!--</div>-->\r\n                                        </div>\r\n                                        <div *ngIf=\"!forcedClaimsDataSelected\">\r\n                                            <span style=\"color: red;\">Map at least one forced closed claim </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <!--(March-15-2019 ) committed this code based on suman/client request-->\r\n                            <!--<div *ngIf=\"isInvalidNominee\">\r\n                <header>Nominee Details</header>\r\n                <fieldset>\r\n                    <section>\r\n                        <div class=\"row\">\r\n                            <a class=\"btn btn-primary\" (click)=\"openModel()\" style=\"width :55px;height:30px;padding:5px;\" button> Add </a>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <table class=\"table table-striped\" [mfData]=\"benficiaryNominee\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th>\r\n                                            Name\r\n                                        </th>\r\n                                        <th>\r\n                                            Relationship with applicant\r\n                                        </th>\r\n                                        <th>\r\n                                            Gender\r\n                                        </th>\r\n                                        <th>\r\n                                            DOB\r\n                                        </th>\r\n                                        <th>\r\n                                            Age (Years)\r\n                                        </th>\r\n                                        <th>\r\n                                            Share Allocation\r\n                                        </th>\r\n                                        <th>\r\n                                            Bank Name\r\n                                        </th>\r\n                                        <th>\r\n                                            Bank Account No.\r\n                                        </th>\r\n                                        <th>\r\n                                            Branch Name\r\n                                        </th>\r\n                                        <th>\r\n                                            IFSC Code\r\n                                        </th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngIf=\"benficiaryNominee.length==0\"><td colspan=\"11\">No nominee details</td></tr>\r\n                                    <tr *ngFor=\"let nomi of mf.data; let i=index;\">\r\n                                        <td class=\"\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"nomi.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"mappingNominee(nomi);\">\r\n                                        </td>\r\n                                        <td>{{nomi.benNomineeName}}</td>\r\n                                        <td>{{nomi.benNomineeRelation}}</td>\r\n                                        <td>{{nomi.benNomineeGender}}</td>\r\n                                        <td>{{nomi.dob | date: 'dd/MM/yyyy'}}</td>\r\n                                        <td>{{nomi.benNomineeAge}}</td>\r\n                                        <td>{{nomi.benNomineeShareAllocation}}</td>\r\n                                        <td>{{nomi.benNomineeBankName}}</td>\r\n                                        <td>{{nomi.benNomineeBankAccNo}}</td>\r\n                                        <td>{{nomi.benNomineeBankBranch}}</td>\r\n                                        <td>{{nomi.benNomineeBankIfscCode}}</td>\r\n                                        <td>\r\n                                            <a class=\"btn btn-labeled btn-primary\" (click)=\"editNomineeDetails(nomi)\" style=\"margin-right:5px;\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td colspan=\"11\"></td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n                </fieldset>\r\n            </div>-->\r\n                            <div>\r\n                                <header>Dependency Section</header>\r\n                                <div class=\"form-group\">\r\n                                    <label *ngIf=\"isvisable\">\r\n                                        <input type=\"checkbox\"\r\n                                               name=\"OptionsHead\"\r\n                                               [(ngModel)]=\"isOptionHead\" />\r\n                                        Hard copy is awaited from beneficiary\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <header>Hardcopy Received</header>\r\n                                <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <!--<label *ngIf=\"isvisable\">\r\n                            <input type=\"checkbox\"\r\n                                   name=\"pfOptionsHead\"\r\n                                   [(ngModel)]=\"isPFOptionHead\" />\r\n                            Hard copy is awaited from beneficiary\r\n                        </label>-->\r\n                                        <div *ngFor=\"let pf of pfCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"pfOptions\" [disabled]=\"!isvisable\"\r\n                                                       value=\"{{pf.checkListDtlId}}\"\r\n                                                       [checked]=\"pf.checked\" (change)=\"pfCheckedListChange($event, pf.checkListDtlId)\" />\r\n                                                {{pf.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"claim.educationDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <!--<label *ngIf=\"isvisable\">\r\n                            <input type=\"checkbox\"\r\n                                   name=\"eduOptionsHead\"\r\n                                   [(ngModel)]=\"isEduOptionHead\" />\r\n                            Hard copy is awaited from beneficiary\r\n                        </label>-->\r\n                                        <div *ngFor=\"let edu of educationCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"eduOptions\" [disabled]=\"!isvisable\"\r\n                                                       value=\"{{edu.checkListDtlId}}\"\r\n                                                       [checked]=\"edu.checked\" (change)=\"educationCheckedListChange($event, edu.checkListDtlId)\" />\r\n                                                {{edu.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <!--<label *ngIf=\"isvisable\">\r\n                            <input type=\"checkbox\"\r\n                                   name=\"healthOptionsHead\"\r\n                                   [(ngModel)]=\"isHealthOptionHead\" />\r\n                            Hard copy is awaited from beneficiary\r\n                        </label>-->\r\n                                        <div *ngFor=\"let health of healthCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"healthOptions\" [disabled]=\"!isvisable\"\r\n                                                       value=\"{{health.checkListDtlId}}\"\r\n                                                       [checked]=\"health.checked\" (change)=\"healthCheckedListChange($event, health.checkListDtlId)\" />\r\n                                                {{health.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <!--<label *ngIf=\"isvisable\">\r\n                            <input type=\"checkbox\"\r\n                                   name=\"disOptionsHead\"\r\n                                   [(ngModel)]=\"isDisOptionHead\" />\r\n                            Hard copy is awaited from beneficiary\r\n                        </label>-->\r\n                                        <div *ngFor=\"let dis of disabilityCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" name=\"disOptions\" value=\"{{dis.checkListDtlId}}\" [disabled]=\"!isvisable\" [checked]=\"dis.checked\" (change)=\"disabilityCheckedListChange($event, dis.checkListDtlId)\" />\r\n                                                {{dis.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <!--<label *ngIf=\"isvisable\">\r\n                            <input type=\"checkbox\"\r\n                                   name=\"deathOptionsHead\"\r\n                                   [(ngModel)]=\"isDeathOptionHead\" />\r\n                            Hard copy is awaited from beneficiary\r\n                        </label>-->\r\n                                        <div *ngFor=\"let death of deathCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"deathOptions\" [disabled]=\"!isvisable\" [checked]=\"death.checked\" (change)=\"deathCheckedListChange($event, death.checkListDtlId)\"\r\n                                                       value=\"{{death.checkListDtlId}}\" />\r\n                                                {{death.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <fieldset>\r\n\r\n                                <section>\r\n                                    <label>Approved Amount<span [style.color]=\"!approvedAmountValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"input\">\r\n                                        <input type=\"number\" name=\"approvedAmount\" [(ngModel)]=\"review.approvedAmount\" [disabled]=\"!isApprovedAmountDisable\" placeholder=\"Approved Amount\">\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Inspector Comments<span [style.color]=\"!inspectorCommentsValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"inspectorComments\" [disabled]=\"!isvisable\" [(ngModel)]=\"review.inspectorComments\"\r\n                                                  #inspectorComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': inspectorComments.invalid && (!inspectorCommentsValid || inspectorComments.touched), 'valid-data': inspectorComments.valid && inspectorCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"inspectorComments.invalid && (!inspectorCommentsValid ||inspectorComments.touched)\">\r\n                                        <span style=\"color: red;\">Inspector Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Exception Comments</label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"exceptionComments\" [disabled]=\"!isvisable\" [(ngModel)]=\"review.exceptionComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset *ngIf=\"isCOExceptionCommentsReq\">\r\n                                <section>\r\n                                    <label>Chronological Order Exception Comments <span [style.color]=\"!coexceptionCommentsValid?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"chronologicOrderExceptionComments\" [disabled]=\"!isvisable\" [(ngModel)]=\"review.inspChronologicalOrderComments\"\r\n                                                  #chronologicOrderExceptionComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid || chronologicOrderExceptionComments.touched), 'valid-data': chronologicOrderExceptionComments.valid && coexceptionCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid ||chronologicOrderExceptionComments.touched)\">\r\n                                        <span style=\"color: red;\">Chronological Order Exception Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-warning\" (click)=\"forcedCloseClick(1)\" [disabled]=\"isDeathBenDisable\" *ngIf=\"isvisable\">\r\n                                    Forced Close\r\n                                </button>\r\n                                <!--<a class=\"btn btn-warning\" (click)=\"forcedCloseClick()\" [disabled]=\"isDeathBenDisable\" *ngIf=\"isvisable\">Forced Close</a>-->\r\n                                <a class=\"btn btn-success\" (click)=\"saveClaim(4,0,'Forward')\" *ngIf=\"isvisable\">Forward</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"saveClaim(3,1,'send back')\" *ngIf=\"isvisable && showSendBack\"> Send Back</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Attachment Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claims History</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <table class=\"table table-striped\" [mfData]=\"claimsHistoryData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Claim Reference No.\r\n                                </th>\r\n                                <th>\r\n                                    Submission Date\r\n                                </th>\r\n                                <th>\r\n                                    Amount\r\n                                </th>\r\n                                <th>\r\n                                    Approved Amount\r\n                                </th>\r\n                                <th>\r\n                                    Status\r\n                                </th>\r\n                                <th>\r\n                                    Submitted By\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                <td><a (click)=\"viewClaimInfo(user)\">{{user.claimRefernceNo}}</a> </td>\r\n                                <!--<td>{{user.claimRefernceNo}}</td>-->\r\n                                <td>{{user.submittedDateString}}</td>\r\n                                <td>{{user.claimAmount}}</td>\r\n                                <td>{{user.approvedAmount}}</td>\r\n                                <td>{{user.statusName}}</td>\r\n                                <td>{{user.submittedByName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td colspan=\"6\"></td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"historyModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{typeOfMode}} Nominee Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset id=\"divAddNomineeDetails\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Name <span [style.color]=\"!nomineeNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeName\" class=\"form-control\" placeholder=\"Nominee Name\" [(ngModel)]=\"benNomineenDetails.benNomineeName\" maxlength=\"100\"\r\n                                       #nomineeName=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeNameValid , 'valid-data':nomineeNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeNameValid\">\r\n                                    <span style=\"color: red;\">Nominee Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Relationship with applicant <span [style.color]=\"!relationshipValid?'red':''\"><b>*</b></span></label>\r\n                                <select class=\"form-control select\" name=\"dependentId\" [(ngModel)]=\"benNomineenDetails.relationshipID\"\r\n                                        #dependentId=\"ngModel\" (change)=\"selectRelationship($event,benNomineenDetails)\"\r\n                                        [ngClass]=\"{'invalid-data': !relationshipValid, 'valid-data': relationshipValid }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose an option</option>\r\n                                    <option value=\"1\">Father</option>\r\n                                    <option value=\"2\">Mother</option>\r\n                                    <option value=\"3\">Spouse</option>\r\n                                    <option value=\"4\">Son</option>\r\n                                    <option value=\"5\">Daughter</option>\r\n                                </select>\r\n                                <div *ngIf=\"!relationshipValid\">\r\n                                    <span style=\"color: red;\">Relationship with applicant is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Gender <span [style.color]=\"!genderValid?'red':''\"><b>*</b></span></label>\r\n                                <select class=\"form-control select\" name=\"genderId\" [(ngModel)]=\"benNomineenDetails.benNomineeGender\"\r\n                                        #genderId=\"ngModel\"\r\n                                        [ngClass]=\"{'invalid-data': !genderValid ,  'valid-data': genderValid  }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose an option</option>\r\n                                    <option value=\"Male\">Male</option>\r\n                                    <option value=\"Female\">Female</option>\r\n                                </select>\r\n                                <div *ngIf=\"!genderValid \">\r\n                                    <span style=\"color: red;\">Gender is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Date of Birth <span [style.color]=\"!nomineeDOBValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeDOB\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                       placeholder=\"DD/MM/YYYY\" [(ngModel)]=\" benNomineenDetails.dob\" #nomineeDOB=\"ngModel\" [maxDate]=\"maxDate\"\r\n                                       value=\"{{ benNomineenDetails.dob | date: 'dd/MM/yyyy' }}\" readonly\r\n                                       [ngClass]=\"{'invalid-data':!nomineeDOBValid, 'valid-data': nomineeDOBValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeDOBValid\">\r\n                                    <span style=\"color: red;\">Nominee Date of Birth is required </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Share Allocation  <span [style.color]=\"!nomineeShareValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"number\" name=\"nomineeShare\" class=\"form-control\" placeholder=\"Share Allocation\" [(ngModel)]=\"benNomineenDetails.benNomineeShareAllocation\" maxlength=\"3\" max=\"100\" min=\"1\"\r\n                                       #nomineeShare=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeShareValid , 'valid-data': nomineeShareValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeShareValid\">\r\n                                    <span style=\"color: red;\">Share Allocation is required </span>\r\n                                </div>\r\n                                <!--<div *ngIf=\"nomineeShare.errors.min && nomineeShare.errors.max\">\r\n                                    <span style=\"color: red;\">Invalid Share Allocation </span>\r\n                                </div>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Bank Name <span [style.color]=\"!nomineeBankNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeBankName\" class=\"form-control\" placeholder=\"Nominee Bank Name\" [(ngModel)]=\"benNomineenDetails.benNomineeBankName\"\r\n                                       #nomineeBankName=\"ngModel\" [ngClass]=\"{'invalid-data': !nomineeBankNameValid, 'valid-data':nomineeBankNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBankNameValid\">\r\n                                    <span style=\"color: red;\">Nominee Bank Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Bank Account <span [style.color]=\"!nomineeBankAccountValid?'red':''\"><b>*</b></span> </label>\r\n                                <input type=\"text\" name=\"nomineeBankAccount\" class=\"form-control\" placeholder=\"Nominee Bank Account \" [(ngModel)]=\"benNomineenDetails.benNomineeBankAccNo\"\r\n                                       minlength=\"9\" maxlength=\"18\" NumbersOnly #nomineeBankAccount=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeBankAccountValid, 'valid-data': nomineeBankAccountValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBankAccountValid\">\r\n                                    <span style=\"color: red;\">Nominee Bank Account is required </span>\r\n                                </div>\r\n                                <div *ngIf=\"nomineeBankAccount.invalid && (nomineeBankAccount.errors.minlength)\">\r\n                                    <span style=\"color: red;\">Invalid Bank Account Number </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Branch Name <span [style.color]=\"!nomineeBranchNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeBankBranch\" class=\"form-control\" placeholder=\"Branch Name\" [(ngModel)]=\"benNomineenDetails.benNomineeBankBranch\"\r\n                                       #nomineeBankBranch=\"ngModel\" [ngClass]=\"{'invalid-data': !nomineeBranchNameValid , 'valid-data': nomineeBranchNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBranchNameValid\">\r\n                                    <span style=\"color: red;\">Branch Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">IFSC Code <span [style.color]=\"!nomineeIFSCCodeValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeIFSCCode\" class=\"form-control\" placeholder=\"IFSC Code\" [(ngModel)]=\"benNomineenDetails.benNomineeBankIfscCode\"\r\n                                       maxlength=\"11\" #nomineeIFSCCode=\"ngModel\" [ngClass]=\"{'invalid-data':!nomineeIFSCCodeValid, 'valid-data': nomineeIFSCCodeValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeIFSCCodeValid \">\r\n                                    <span style=\"color: red;\">IFSC Code is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"col col-6\">\r\n\r\n                        </div>-->\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"lgModal.hide()\">\r\n                    Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNomineeDetails(benNomineenDetails)\">\r\n                    {{typeOfMode}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #claimModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"claimModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claim Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:100%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata #child [claimId]=\"claimId1\" [claimType]=\"claimType1\" [transactionId]=\"tranctionId1\"></app-claimviewdata>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"claimModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #confirmForcedCloseModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Confirmation Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">Are you sure to Forced Close (confirmation for death of beneficiary)? </p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"saveClaim(16,1,'force close')\">\r\n                   Yes\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"noClick()\">\r\n                    No\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #searchStudentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"searchStudentModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Search Student</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:520px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:100%;padding:5px;overflow:scroll;max-height:480px\">\r\n                        <app-search-student></app-search-student>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchStudentModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inspector/reviewclaims/reviewclaims.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inspector/reviewclaims/reviewclaims.component.ts ***!
  \******************************************************************/
/*! exports provided: ReviewclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewclaimsComponent", function() { return ReviewclaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../claimviewdata/claimviewdata.component */ "./src/app/inspector/claimviewdata/claimviewdata.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReviewclaimsComponent = /** @class */ (function () {
    //If Paging required in future
    ////Paging props start
    //page: number = pagination.pageNo;
    //totalRows: any;
    //pageSize: number = pagination.pageSize;
    ////Paging props end
    function ReviewclaimsComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.forcedClaimsData = [];
        this.claim = {};
        this.claim1 = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.showSendBack = true;
        this.approvedAmountValid = true;
        this.inspectorCommentsValid = true;
        this.review = {};
        this.claimsTrack = {};
        this.isvisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.viewMetWithAnAccident = false;
        this.claimExceptionDetails = "";
        this.isVisibleClaimExceptions = false;
        this.claimAmount = 0;
        this.expection = [];
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
        this.isMapForcedClaim = false;
        this.selectedAll = false;
        this.forcedClaimsDataSelected = true;
        this.forcedCloseClaims = [];
        this.allForcedCloseClaims = [];
        // isInvalidNominee: boolean = false;
        this.benficiaryNominee = [];
        this.benNomineenDetails = {};
        //Validation Nominee variables
        this.nomineeNameValid = true;
        this.relationshipValid = true;
        this.genderValid = true;
        this.nomineeDOBValid = true;
        this.nomineeShareValid = true;
        this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = true;
        this.nomineeIFSCCodeValid = true;
        this.rowIndex = -1;
        this.checkList = [];
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        //isEduOptionHead: boolean = true;
        //isPFOptionHead: boolean = true;
        //isHealthOptionHead: boolean = true;
        //isDisOptionHead: boolean = true;
        //isDeathOptionHead: boolean = true;
        this.isOptionHead = true;
        this.isDeathBenDisable = false;
        this.enableSearchStudentLink = true;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            _this.claimAmount = params["claimAmount"];
            if (_this.mode != "pending") {
                _this.isvisable = _this.isApprovedAmountDisable = false;
                _this.enableSearchStudentLink = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                _this.enableSearchStudentLink = true;
                if (_this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].HealthFamily && _this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                debugger;
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        this.getPackages();
        this.getHealthCheckList();
        this.getEducationCheckList();
        this.getDisabilityCheckList();
        this.getDeathCheckList();
        this.getPFCheckList();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReviewclaimsComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            debugger;
            if (_this.claim.educationDetails != null) {
                _this.educationList = _this.claim.educationDetails.educationDetailList;
                if (_this.claim.educationDetails.educationDetailList.length > 0) {
                    for (var i = 0; i < _this.claim.educationDetails.educationDetailList.length; i++) {
                        if (_this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                            for (var j = 0; j < _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                var attachment = _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                    attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                }
                                _this.attachmentList.push(attachment);
                            }
                        }
                    }
                }
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.educationDetails.claimAmount;
                }
                else
                    _this.review.approvedAmount = _this.claim.educationDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.educationDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.educationDetails.exceptionComments;
                //educationClaimExceptionDetails
                if (_this.claim.educationDetails.educationClaimExceptionDetails != null) {
                    if (_this.claim.educationDetails.educationClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.educationDetails.educationClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.educationDetails.educationClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                debugger;
                //check list
                if (_this.claim.educationDetails.educationClaimCheckListDetails != null) {
                    if (_this.claim.educationDetails.educationClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.educationDetails.educationClaimCheckListDetails.length; i++) {
                            if (_this.educationCheckList.length > 0) {
                                for (var j = 0; j < _this.educationCheckList.length; j++) {
                                    if (_this.claim.educationDetails.educationClaimCheckListDetails[i].checkListDtlId == _this.educationCheckList[j].checkListDtlId) {
                                        _this.educationCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
                _this.review.approvedAmount = _this.claim.healthFamilyDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.healthFamilyDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                //healthClaimExceptionDetails
                if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                        debugger;
                        // this.claimExceptionDetailsList = this.claim.healthFamilyDetails.healthClaimExceptionDetails;
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimCheckListDetails.length; i++) {
                            if (_this.healthCheckList.length > 0) {
                                for (var j = 0; j < _this.healthCheckList.length; j++) {
                                    if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails[i].checkListDtlId == _this.healthCheckList[j].checkListDtlId) {
                                        _this.healthCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.disabilityDetails != null) {
                debugger;
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.disabilityDetails.claimAmount;
                }
                else
                    _this.review.approvedAmount = _this.claim.disabilityDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.disabilityDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
                //disabilityClaimExceptionDetails
                if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                debugger;
                if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimCheckListDetails.length; i++) {
                            if (_this.disabilityCheckList.length > 0) {
                                for (var j = 0; j < _this.disabilityCheckList.length; j++) {
                                    if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails[i].checkListDtlId == _this.disabilityCheckList[j].checkListDtlId) {
                                        _this.disabilityCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.deathDetails != null) {
                for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.deathDetails.claimAmount;
                    _this.isDeathBenDisable = true;
                }
                else
                    _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.deathDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.deathDetails.exceptionComments;
                //deathClaimExceptionDetails
                if (_this.claim.deathDetails.deathClaimExceptionDetails != null) {
                    if (_this.claim.deathDetails.deathClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.deathDetails.deathClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.deathDetails.deathClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.deathDetails.deathClaimCheckListDetails != null) {
                    if (_this.claim.deathDetails.deathClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.deathDetails.deathClaimCheckListDetails.length; i++) {
                            if (_this.deathCheckList.length > 0) {
                                for (var j = 0; j < _this.deathCheckList.length; j++) {
                                    if (_this.claim.deathDetails.deathClaimCheckListDetails[i].checkListDtlId == _this.deathCheckList[j].checkListDtlId) {
                                        _this.deathCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["PFTypeOfClaim"].Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.providentFundDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.providentFundDetails.exceptionComments;
                //pfClaimExceptionDetails
                if (_this.claim.providentFundDetails.pfClaimExceptionDetails != null) {
                    if (_this.claim.providentFundDetails.pfClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.providentFundDetails.pfClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.providentFundDetails.pfClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.providentFundDetails.pfClaimCheckListDetails != null) {
                    if (_this.claim.providentFundDetails.pfClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.providentFundDetails.pfClaimCheckListDetails.length; i++) {
                            if (_this.pfCheckList.length > 0) {
                                for (var j = 0; j < _this.pfCheckList.length; j++) {
                                    if (_this.claim.providentFundDetails.pfClaimCheckListDetails[i].checkListDtlId == _this.pfCheckList[j].checkListDtlId) {
                                        _this.pfCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    if (_this.claim.attachment[k].fileName != null) {
                        var attachment = _this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.claim.attachment[k] = attachment;
                        _this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Nominee) {
                //this.showSendBack = false;
                if (_this.mode == "pending") {
                    if (_this.claimType == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].HealthFamily || _this.claimType == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"].Education) {
                        _this.isMapForcedClaim = true;
                        _this.getBeneficiaryForcedClosedClaims(_this.claim.benSno, claimType);
                    }
                    ////(March-15-2019 ) committed this code based on suman/client request
                    //if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
                    //    this.isInvalidNominee = true;
                    //    this.getBeneficiaryNomineeDetails(this.claim.benSno);
                    //    this.rowIndex = this.rowIndex + this.benficiaryNominee.length;
                    //}
                }
            }
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
            //this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, claimType, this.page, this.pageSize);
        });
    };
    ReviewclaimsComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            _this.benficiaryNominee = data;
        });
    };
    ReviewclaimsComponent.prototype.openModel = function () {
        this.typeOfMode = "Add";
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        this.rowIndex = -1;
        this.benNomineenDetails = {};
        this.benNomineenDetails.benSno = this.claim.benSno;
        this.lgModal.show();
    };
    ReviewclaimsComponent.prototype.selectRelationship = function (args, benNominee) {
        this.benNomineenDetails.benNomineeRelation = args.target.options[args.target.selectedIndex].text;
        //this.benNomineenDetails.dob = new Date();
    };
    ReviewclaimsComponent.prototype.mappingNominee = function (item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;
    };
    ReviewclaimsComponent.prototype.addNomineeDetails = function (details) {
        debugger;
        if (this.validateNomineeDetails(details)) {
            if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) == -1 && this.rowIndex == -1) {
                details.createdBy = this.userService.user.deptUserid;
                details.createdDate = new Date();
                // details.dob = new Date(this.dobNominee);
                this.benficiaryNominee.push(details);
                this.lgModal.hide();
            }
            else if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) != -1 && this.rowIndex == -1) {
                alert("already added please enter another nominee details");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    //this.benficiaryNominee.splice(this.rowIndex, 1);
                    if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) == this.rowIndex) {
                        //this.benficiaryNominee.push(details);
                        this.rowIndex = -1;
                        this.lgModal.hide();
                    }
                }
            }
            this.benNomineenDetails = {};
        }
    };
    ReviewclaimsComponent.prototype.editNomineeDetails = function (details) {
        debugger;
        this.typeOfMode = "Edit";
        this.benNomineenDetails = details;
        this.rowIndex = this.benficiaryNominee.indexOf(details);
        this.lgModal.show();
    };
    ReviewclaimsComponent.prototype.clearNomineeDetails = function () {
    };
    ReviewclaimsComponent.prototype.validateNomineeDetails = function (details) {
        var isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        if (details.relationshipID == undefined || details.relationshipID <= 0) {
            this.relationshipValid = isValid = false;
        }
        if (details.benNomineeGender == undefined || details.benNomineeGender == "") {
            this.genderValid = isValid = false;
        }
        if (details.dob == undefined) {
            this.nomineeDOBValid = isValid = false;
        }
        if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") {
            this.nomineeShareValid = isValid = false;
        }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") {
            this.nomineeBankNameValid = isValid = false;
        }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") {
            this.nomineeBranchNameValid = isValid = false;
        }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") {
            this.nomineeIFSCCodeValid = isValid = false;
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ReviewclaimsComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewclaimsComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
    };
    ReviewclaimsComponent.prototype.Getimage = function (imageData) {
        var data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    };
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getUrlOfPdf = function (imageData) {
        this.dataService
            .getAttachment()
            .then(function (data) {
            var url = URL.createObjectURL(data);
            console.log(url);
        });
    };
    ReviewclaimsComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        debugger;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.inspChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;
                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
                    debugger;
                    if (this.review.approvedAmount != undefined || this.review.approvedAmount != 0) {
                        ////Exception Rule - 6	When Claimamount>Approved Amount
                        //if (this.claimAmount > this.review.approvedAmount) {
                        //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                        //    exp.exceptionText = "Approved Amount lessthan Claim Amount";
                        //    exp.exceptionCapturedDate = new Date();
                        //    exp.raisedBy = this.userService.user.deptUserid;
                        //    this.expection.push(exp);
                        //}
                        //Exception Rule - 7	When Claimamount<Approved Amount
                        if (this.claimAmount < this.review.approvedAmount) {
                            var exp = {};
                            exp.exceptionText = "Approved amount greater than claim amount";
                            exp.exceptionCapturedDate = new Date();
                            exp.raisedBy = this.userService.user.deptUserid;
                            this.expection.push(exp);
                        }
                    }
                }
                this.review.claimExceptionDetails = this.expection;
            }
            if (this.isMapForcedClaim) {
                if (this.forcedClaimsData != undefined && this.forcedClaimsData.length > 0) {
                    for (var k = 0; k < this.forcedClaimsData.length; k++) {
                        if (this.forcedClaimsData[k].selected) {
                            this.forcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                        }
                        this.allForcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                    }
                }
                this.review.UpdateForcedClaims = this.forcedCloseClaims;
                this.review.AllForcedClaims = this.allForcedCloseClaims;
            }
            //if (this.isInvalidNominee) {
            //    debugger;
            //    this.review.benficiaryNomineeDetails = this.benficiaryNominee;
            //}
            this.checkList = [];
            debugger;
            if (mode == "Forward") {
                if (this.claim.providentFundDetails != null) {
                    if (this.pfCheckList.length > 0) {
                        for (var i = 0; i < this.pfCheckList.length; i++) {
                            var chk = {};
                            if (this.pfCheckList[i].checked) {
                                chk.checkListDtlId = this.pfCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.healthFamilyDetails != null) {
                    if (this.healthCheckList.length > 0) {
                        for (var i = 0; i < this.healthCheckList.length; i++) {
                            var chk = {};
                            if (this.healthCheckList[i].checked) {
                                chk.checkListDtlId = this.healthCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                    if (this.deathCheckList.length > 0) {
                        for (var i = 0; i < this.deathCheckList.length; i++) {
                            var chk = {};
                            if (this.deathCheckList[i].checked) {
                                chk.checkListDtlId = this.deathCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.disabilityDetails != null) {
                    if (this.disabilityCheckList.length > 0) {
                        for (var i = 0; i < this.disabilityCheckList.length; i++) {
                            var chk = {};
                            if (this.disabilityCheckList[i].checked) {
                                chk.checkListDtlId = this.disabilityCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.educationDetails != null) {
                    if (this.educationCheckList.length > 0) {
                        for (var i = 0; i < this.educationCheckList.length; i++) {
                            var chk = {};
                            if (this.educationCheckList[i].checked) {
                                chk.checkListDtlId = this.educationCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                this.review.claimCheckListDetails = this.checkList;
            }
            else if (mode == "force close") {
                this.confirmForcedCloseModal.hide();
                this.review.benDeathStatus = true;
            }
            //-----------------
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateComments(this.review)
                    .then(function (data) {
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReviewclaimsComponent.prototype.cancelclick = function () {
        //|| this.mode == "view"
        if (this.mode == "pending") {
            this.router.navigate(['inspector/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['inspector/sendbackclaims']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['inspector/rejectclaims']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "force") {
            this.router.navigate(['inspector/forcecloseclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });
        }
        else if (this.mode == "search") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        debugger;
        var isValid = true;
        var sharePercentage = 0;
        var count = 0;
        var chkListCount = 0;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
            if (this.claim.providentFundDetails != null) {
                if (this.pfCheckList.length > 0) {
                    for (var i = 0; i < this.pfCheckList.length; i++) {
                        if (this.pfCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.healthFamilyDetails != null) {
                if (this.healthCheckList.length > 0) {
                    for (var i = 0; i < this.healthCheckList.length; i++) {
                        if (this.healthCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.deathDetails != null) {
                if (this.deathCheckList.length > 0) {
                    for (var i = 0; i < this.deathCheckList.length; i++) {
                        if (this.deathCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.disabilityDetails != null) {
                if (this.disabilityCheckList.length > 0) {
                    for (var i = 0; i < this.disabilityCheckList.length; i++) {
                        if (this.disabilityCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.educationDetails != null) {
                if (this.educationCheckList.length > 0) {
                    for (var i = 0; i < this.educationCheckList.length; i++) {
                        if (this.educationCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (chkListCount <= 0) {
                alert("At least one document needs to be checked");
                isValid = false;
            }
        }
        if (this.review.inspectorComments == undefined || this.review.inspectorComments == "") {
            this.inspectorCommentsValid = isValid = false;
        }
        if ((this.review.inspChronologicalOrderComments == undefined || this.review.inspChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
        if (this.isMapForcedClaim) {
            if (this.forcedClaimsData.find(function (c) { return c.selected == true; }) == undefined) {
                this.forcedClaimsDataSelected = isValid = false;
            }
        }
        ////Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        //if (this.isInvalidNominee) {
        //    debugger;
        //    if (this.benficiaryNominee.length > 0) {
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
        //        }
        //        if (sharePercentage != 100) {
        //            alert("Share Allocation Accepts only 100%");
        //            isValid = false;
        //        }
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            if (this.benficiaryNominee[i].isMappingNominee) {
        //                count++;
        //            }
        //        }
        //        if (count != 1) {
        //            alert("Please select one nominee to mapping ");
        //            isValid = false;
        //        }
        //    }
        //    else {
        //        alert("Please map one nominee to this claim ");
        //        isValid = false;
        //    }
        //}
        return isValid;
    };
    ReviewclaimsComponent.prototype.formatDate = function (date) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        var dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    };
    ReviewclaimsComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewclaimsComponent.prototype.viewHistory = function () {
        this.historyModal.show();
    };
    ReviewclaimsComponent.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var _this = this;
        debugger;
        this.dataService
            .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType)
            .subscribe(function (data) {
            _this.claimsHistoryData = data;
        });
    };
    //If Paging required in future
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    debugger;
    //    this.dataService
    //        .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType, pageNo, pageSize)
    //        .subscribe((data: any) => {
    //            this.claimsHistoryData = data.results;
    //            this.totalRows = data.rowCount;
    //        });
    //}
    //changepage(page) {
    //    this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, this.claimType, this.page, this.pageSize);
    //}
    ReviewclaimsComponent.prototype.getBeneficiaryForcedClosedClaims = function (benSNo, tranctionType) {
        var _this = this;
        this.dataService
            .getBeneficiaryForcedClosedClaims(benSNo, tranctionType)
            .subscribe(function (data) {
            _this.forcedClaimsData = data;
        });
    };
    ReviewclaimsComponent.prototype.selectAll = function () {
        this.forcedClaimsDataSelected = true;
        for (var i = 0; i < this.forcedClaimsData.length; i++) {
            this.forcedClaimsData[i].selected = this.selectedAll;
        }
    };
    ReviewclaimsComponent.prototype.checkIfAllSelected = function () {
        this.forcedClaimsDataSelected = true;
        this.selectedAll = this.forcedClaimsData.every(function (item) {
            return item.selected == true;
        });
    };
    ReviewclaimsComponent.prototype.getHealthCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimCheckList"].HealthFamilyCheckList)
            .subscribe(function (data) {
            _this.healthCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getEducationCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimCheckList"].EducationCheckList)
            .subscribe(function (data) {
            _this.educationCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDisabilityCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimCheckList"].DisabilityCheckList)
            .subscribe(function (data) {
            _this.disabilityCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDeathCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimCheckList"].DeathCheckList)
            .subscribe(function (data) {
            _this.deathCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getPFCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimCheckList"].PFCheckList)
            .subscribe(function (data) {
            _this.pfCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.disabilityCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.disabilityCheckList != null) {
            for (var i = 0; i < this.disabilityCheckList.length; i++) {
                if (this.disabilityCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.disabilityCheckList[i].checked = true;
                    else
                        this.disabilityCheckList[i].checked = false;
                }
            }
            if (this.disabilityCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.pfCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.pfCheckList != null) {
            for (var i = 0; i < this.pfCheckList.length; i++) {
                if (this.pfCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.pfCheckList[i].checked = true;
                    else
                        this.pfCheckList[i].checked = false;
                }
            }
            if (this.pfCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.educationCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.educationCheckList != null) {
            for (var i = 0; i < this.educationCheckList.length; i++) {
                if (this.educationCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.educationCheckList[i].checked = true;
                    else
                        this.educationCheckList[i].checked = false;
                }
            }
            if (this.educationCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.healthCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.healthCheckList != null) {
            for (var i = 0; i < this.healthCheckList.length; i++) {
                if (this.healthCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.healthCheckList[i].checked = true;
                    else
                        this.healthCheckList[i].checked = false;
                }
            }
            if (this.healthCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.deathCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.deathCheckList != null) {
            for (var i = 0; i < this.deathCheckList.length; i++) {
                if (this.deathCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.deathCheckList[i].checked = true;
                    else
                        this.deathCheckList[i].checked = false;
                }
            }
            if (this.deathCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.viewClaimInfo1 = function (claim) {
        this.claimId = claim.claimId;
        this.claimType = this.claimType;
        this.tranctionId = 16;
        this.claimModal.show();
    };
    ReviewclaimsComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId1 = claim.claimId;
        this.claimType1 = this.claimType;
        this.tranctionId1 = claim.transactionId;
        //this.attachmentList = [];
        this.getClaimDetailsByClaimId1(this.claimId1, this.tranctionId1, this.claimType1);
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId1 = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            debugger;
            _this.claim1 = data;
            _this.child.getData(_this.claim1);
            _this.claimModal.show();
        });
    };
    ReviewclaimsComponent.prototype.noClick = function () {
        this.confirmForcedCloseModal.hide();
    };
    ReviewclaimsComponent.prototype.forcedCloseClick = function (type) {
        if (this.validateClaim(type)) {
            this.confirmForcedCloseModal.show();
        }
    };
    ReviewclaimsComponent.prototype.searchLinkClick = function () {
        window.open('/inspector/searchstudent', 'searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('historyModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "historyModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lgModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "lgModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('claimModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "claimModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child'),
        __metadata("design:type", _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_7__["ClaimviewdataComponent"])
    ], ReviewclaimsComponent.prototype, "child", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmForcedCloseModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "confirmForcedCloseModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchStudentModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "searchStudentModal", void 0);
    ReviewclaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewclaims',
            template: __webpack_require__(/*! ./reviewclaims.component.html */ "./src/app/inspector/reviewclaims/reviewclaims.component.html"),
            styles: [__webpack_require__(/*! ./reviewclaims.component.css */ "./src/app/inspector/reviewclaims/reviewclaims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/search-student/search-student.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/inspector/search-student/search-student.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/search-student/search-student.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inspector/search-student/search-student.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Search Student </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <label class=\"label\">Student Name </label>\r\n                            <input type=\"text\" name=\"name\" class=\"advancedSearchTextbox\" [(ngModel)]=\"studentName\" placeholder=\"Search Student Name\"\r\n                                   maxlength=\"50\" #name=\"ngModel\" required>\r\n                            <button (click)=\"searchStudent()\"><i class=\"fa fa-search\"></i></button>\r\n                            <!--<span [style.color]=\"!nameValid?'red':''\"><b>*</b></span>\r\n                                <div *ngIf=\"!nameValid\">\r\n                                <span style=\"color: red;\">Student Name is required </span>\r\n                            </div>-->\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>Education</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/search-student/search-student.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inspector/search-student/search-student.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentComponent", function() { return SearchStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchStudentComponent = /** @class */ (function () {
    //Paging props end
    function SearchStudentComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.nameValid = true;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize;
    }
    SearchStudentComponent.prototype.searchStudent = function () {
        debugger;
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    };
    SearchStudentComponent.prototype.ngOnInit = function () {
        //this.getEducationClaimsSubmittedbyStudentName('montu', this.page, this.pageSize);
    };
    SearchStudentComponent.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getEducationClaimsSubmittedbyStudentName(name, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    SearchStudentComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "search", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "search", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.changepage = function (page) {
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    };
    SearchStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-student',
            template: __webpack_require__(/*! ./search-student.component.html */ "./src/app/inspector/search-student/search-student.component.html"),
            styles: [__webpack_require__(/*! ./search-student.component.css */ "./src/app/inspector/search-student/search-student.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_1__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchStudentComponent);
    return SearchStudentComponent;
}());



/***/ }),

/***/ "./src/app/inspector/sendback-claims/sendback-claims.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inspector/sendback-claims/sendback-claims.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/sendback-claims/sendback-claims.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inspector/sendback-claims/sendback-claims.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Sent Back </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"sentBackDateString\">Sent back Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText, claimAmount: searchText,submittedDateString: searchText, sentBackDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.sentBackDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inspector/sendback-claims/sendback-claims.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inspector/sendback-claims/sendback-claims.component.ts ***!
  \************************************************************************/
/*! exports provided: SendbackClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendbackClaimsComponent", function() { return SendbackClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
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





var SendbackClaimsComponent = /** @class */ (function () {
    //Paging props end
    function SendbackClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize;
    }
    SendbackClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    SendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    SendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        this.pageOfItems = pageOfItems;
    };
    SendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    SendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    SendbackClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    SendbackClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    SendbackClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].SendbackfromInspector, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize);
        }
    };
    SendbackClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendback-claims',
            template: __webpack_require__(/*! ./sendback-claims.component.html */ "./src/app/inspector/sendback-claims/sendback-claims.component.html"),
            styles: [__webpack_require__(/*! ./sendback-claims.component.css */ "./src/app/inspector/sendback-claims/sendback-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_2__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SendbackClaimsComponent);
    return SendbackClaimsComponent;
}());



/***/ }),

/***/ "./src/app/inspector/services/api-dictionary.ts":
/*!******************************************************!*\
  !*** ./src/app/inspector/services/api-dictionary.ts ***!
  \******************************************************/
/*! exports provided: ApiDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDictionary", function() { return ApiDictionary; });
var ApiDictionary = {
    beneficiaryBasicDetails: {
        url: 'GetBeneficiaryBasicDetailsByID',
        params: { id: 'id' }
    },
    beneficiaryBankDetails: {
        url: 'GetBeneficiaryBankDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    beneficiaryNomineeDetails: {
        url: 'GetBeneficiaryNomineeDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    beneficiaryFamilyDetails: {
        url: 'GetBeneficiaryFamilyDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    getClaims: {
        url: 'src/assets/data/inspectorClaims.json',
        params: { roleId: 'benSno' }
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    getPendingApprovals: {
        url: 'GetPendingApprovals',
        params: { roleId: 'benSno' }
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getBeneficiaryClaimsHistory: {
        url: "getBeneficiaryClaimsHistory",
        params: { claimId: 'claimId', benSno: 'benSno', claimType: 'claimType' }
    },
    //getBeneficiaryClaimsHistory: {
    //    url: "getBeneficiaryClaimsHistory",
    //    params: { claimId: 'claimId', benSno: 'benSno', claimType: 'claimType', page: 'page', pageSize: 'pageSize' }
    //},
    getClaimStatusClaims: {
        url: "getClaimStatusClaims",
        params: null
    },
    getBeneficiaryForcedClosedClaims: {
        url: "getBeneficiaryForcedClosedClaims",
        params: { benSno: 'benSno', claimType: 'claimType' }
    },
    getClaimCheckListDetails: {
        url: "GetClaimCheckListDetails",
        params: null
    },
    getLegacyClaimsList: {
        url: 'GetLegacyClaimsList',
        params: null
    },
    saveLegacyClaimDetails: {
        url: 'SaveLegacyClaimDetails',
        params: null
    },
    getEducationClaimsSubmittedbyStudentName: {
        url: 'getEducationClaimsSubmittedbyStudentName',
        params: null
    },
    GetLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
};


/***/ }),

/***/ "./src/app/inspector/services/inspector-data.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/inspector/services/inspector-data.service.ts ***!
  \**************************************************************/
/*! exports provided: InspectorDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorDataService", function() { return InspectorDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/inspector/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InspectorDataService = /** @class */ (function () {
    function InspectorDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    InspectorDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id) {
        var paramsMap = new Map();
        paramsMap.set('ssiNum', id);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
        var paramsMap = new Map();
        paramsMap.set('benSno', id);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryBankDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    InspectorDataService.prototype.getClaimsByInspector = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    InspectorDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getAttachment = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    InspectorDataService.prototype.getPackages = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    let params = new HttpParams();
    //    const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType + "/" + pageNo + "/" + pageSize, { params: params });
    //    return this.apiService.getDropdownData(options).map((res: any) => {
    //        return res;
    //    });
    //}
    InspectorDataService.prototype.getBeneficiaryForcedClosedClaims = function (benSNo, tranctionType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryForcedClosedClaims.url + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimCheckListDetails = function (checkLisiId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getLegacyClaimsList = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getLegacyClaimsList.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.saveLegacyClaimDetails = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveLegacyClaimDetails.url, claim).then(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getlovDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InspectorDataService);
    return InspectorDataService;
}());



/***/ }),

/***/ "./src/app/inspector/timetrack/timetrack.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inspector/timetrack/timetrack.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inspector/timetrack/timetrack.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inspector/timetrack/timetrack.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Track Claim</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <fieldset>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                        <div class=\"well well-sm\">\r\n                                            <div class=\"smart-timeline\">\r\n                                                <ul class=\"smart-timeline-list\">\r\n\r\n                                                    <li *ngFor=\"let item of claimsTrack\">\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>{{formatDate(item.actionDate)}}</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                {{item.actionComments}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <!--<li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>25th july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>ALC Review - Send Back </strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Provided Bill is out of the date, for which claim can't be processed. Resubmit the right bill\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>23rd july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Forwarded to ALC</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Forwarded to AL at 10.30am\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>22nd July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Resubmission by Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Here attached the document\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>21st july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Sent Back</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Can you please submit your Medicall Bill?\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-pencil\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>18th July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Claim Submission - Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Sir, Can you please review and approve my claim\r\n                                                            </p>\r\n\r\n                                                        </div>\r\n                                                    </li>-->\r\n                                                    <!--<li class=\"text-center\">\r\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-arrow-down text-muted\"></i> LOAD MORE</a>\r\n                                                    </li>-->\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </article>\r\n    </div>\r\n    <div class=\"smart-form\">\r\n        <footer>\r\n            <a class=\"btn btn-danger\" (click)=\"onBackClaimClick()\">Cancel</a>\r\n        </footer>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/inspector/timetrack/timetrack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inspector/timetrack/timetrack.component.ts ***!
  \************************************************************/
/*! exports provided: TimetrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetrackComponent", function() { return TimetrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/inspector-data.service */ "./src/app/inspector/services/inspector-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimetrackComponent = /** @class */ (function () {
    function TimetrackComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsTrack = {};
        this.educationDetails = {};
        this.beneficiary = {};
    }
    TimetrackComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    TimetrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.transactionId = params["transactionId"];
            _this.tranctionType = params["tranctionType"];
            _this.mode = params["mode"];
            _this.workflowId = params["workflowId"];
        });
        this.getClaimDetailsByClaimId(this.transactionId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][this.tranctionType], this.workflowId);
    };
    TimetrackComponent.prototype.getClaimDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    TimetrackComponent.prototype.onBackClaimClick = function () {
        if (this.mode == "reject") {
            this.router.navigate(['inspector/rejectclaims'], { skipLocationChange: true });
        }
        if (this.mode == "sendback") {
            this.router.navigate(['inspector/sendbackclaims'], { skipLocationChange: true });
        }
        if (this.mode == "pending") {
            this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "approve") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });
        }
        if (this.mode == "search") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });
        }
    };
    TimetrackComponent.prototype.formatDate = function (date) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        var dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    };
    TimetrackComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    TimetrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timetrack',
            template: __webpack_require__(/*! ./timetrack.component.html */ "./src/app/inspector/timetrack/timetrack.component.html"),
            styles: [__webpack_require__(/*! ./timetrack.component.css */ "./src/app/inspector/timetrack/timetrack.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_inspector_data_service__WEBPACK_IMPORTED_MODULE_4__["InspectorDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TimetrackComponent);
    return TimetrackComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inspector-inspector-module.js.map