(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dlc-dlc-module"],{

/***/ "./src/app/dlc/approval-claims/approval-claims.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dlc/approval-claims/approval-claims.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/approval-claims/approval-claims.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dlc/approval-claims/approval-claims.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Approved </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"approvedDateString\">Approved Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText, submittedDateString: searchText, approvedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.approvedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dlc/approval-claims/approval-claims.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dlc/approval-claims/approval-claims.component.ts ***!
  \******************************************************************/
/*! exports provided: ApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalClaimsComponent", function() { return ApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
    //Paging props end
    ApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ApprovalClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "approve", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "approval", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-claims',
            template: __webpack_require__(/*! ./approval-claims.component.html */ "./src/app/dlc/approval-claims/approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./approval-claims.component.css */ "./src/app/dlc/approval-claims/approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ApprovalClaimsComponent);
    return ApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/claim-status/claim-status.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dlc/claim-status/claim-status.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/claim-status/claim-status.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dlc/claim-status/claim-status.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Status </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"lastActionDateString\">Last Action Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,benName: searchText, benType: searchText, claimRefernceNo: searchText,\r\n       claimType: searchText, submittedDateString: searchText, claimAmount:searchText,  statusName: searchText,  lastActionDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.statusName}}</td>\r\n                                    <td>{{user.lastActionDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dlc/claim-status/claim-status.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dlc/claim-status/claim-status.component.ts ***!
  \************************************************************/
/*! exports provided: ClaimStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimStatusComponent", function() { return ClaimStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
    //Paging props end
    ClaimStatusComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ClaimStatusComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "claimstatus", workflowId: ((item.statusId >= 2 && item.statusId <= 7 || item.statusId == 16) ? _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow : _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral), chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ClaimStatusComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "claimstatus", workflowId: ((item.statusId >= 2 && item.statusId <= 7 || item.statusId == 16) ? _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow : _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral) }], { skipLocationChange: true });
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ClaimStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claim-status',
            template: __webpack_require__(/*! ./claim-status.component.html */ "./src/app/dlc/claim-status/claim-status.component.html"),
            styles: [__webpack_require__(/*! ./claim-status.component.css */ "./src/app/dlc/claim-status/claim-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ClaimStatusComponent);
    return ClaimStatusComponent;
}());



/***/ }),

/***/ "./src/app/dlc/claimviewdata/claimviewdata.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dlc/claimviewdata/claimviewdata.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/claimviewdata/claimviewdata.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dlc/claimviewdata/claimviewdata.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Entry View </h2>\r\n                </header>\r\n\r\n                <div>\r\n\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>Beneficiary Details</header>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong> {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong>  {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.providentFundDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.educationDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.healthFamilyDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD' && claim?.healthFamilyDetails?.claimFor == 5\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.disabilityDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.deathDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dlc/claimviewdata/claimviewdata.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dlc/claimviewdata/claimviewdata.component.ts ***!
  \**************************************************************/
/*! exports provided: ClaimviewdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimviewdataComponent", function() { return ClaimviewdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
        this.onDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["PFTypeOfClaim"].Premature) {
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
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
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
        this.getPackages();
        this.claim = claim;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClaimviewdataComponent.prototype, "onDataChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClaimviewdataComponent.prototype, "cliamdata", void 0);
    ClaimviewdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claimviewdata',
            template: __webpack_require__(/*! ./claimviewdata.component.html */ "./src/app/dlc/claimviewdata/claimviewdata.component.html"),
            styles: [__webpack_require__(/*! ./claimviewdata.component.css */ "./src/app/dlc/claimviewdata/claimviewdata.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ClaimviewdataComponent);
    return ClaimviewdataComponent;
}());



/***/ }),

/***/ "./src/app/dlc/dlc.module.ts":
/*!***********************************!*\
  !*** ./src/app/dlc/dlc.module.ts ***!
  \***********************************/
/*! exports provided: DlcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DlcModule", function() { return DlcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendback-claims/sendback-claims.component */ "./src/app/dlc/sendback-claims/sendback-claims.component.ts");
/* harmony import */ var _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approval-claims/approval-claims.component */ "./src/app/dlc/approval-claims/approval-claims.component.ts");
/* harmony import */ var _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reject-claims/reject-claims.component */ "./src/app/dlc/reject-claims/reject-claims.component.ts");
/* harmony import */ var _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-approval-claims/pending-approval-claims.component */ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.ts");
/* harmony import */ var _dlclanding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dlclanding.component */ "./src/app/dlc/dlclanding.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../claim/pipes/grd-filter.pipe */ "./src/app/claim/pipes/grd-filter.pipe.ts");
/* harmony import */ var _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviewclaims/reviewclaims.component */ "./src/app/dlc/reviewclaims/reviewclaims.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refer-claims/refer-claims.component */ "./src/app/dlc/refer-claims/refer-claims.component.ts");
/* harmony import */ var _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./referral-review/referral-review.component */ "./src/app/dlc/referral-review/referral-review.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fund-requested-claims/fund-requested-claims.component */ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.ts");
/* harmony import */ var _review_fund_request_review_fund_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./review-fund-request/review-fund-request.component */ "./src/app/dlc/review-fund-request/review-fund-request.component.ts");
/* harmony import */ var _sendback_fund_request_list_sendback_fund_request_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sendback-fund-request-list/sendback-fund-request-list.component */ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.ts");
/* harmony import */ var _forward_fund_request_list_forward_fund_request_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forward-fund-request-list/forward-fund-request-list.component */ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.ts");
/* harmony import */ var _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timetrack/timetrack.component */ "./src/app/dlc/timetrack/timetrack.component.ts");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./claimviewdata/claimviewdata.component */ "./src/app/dlc/claimviewdata/claimviewdata.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./claim-status/claim-status.component */ "./src/app/dlc/claim-status/claim-status.component.ts");
/* harmony import */ var _review_fund_request_expenses_review_fund_request_expenses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./review-fund-request-expenses/review-fund-request-expenses.component */ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.ts");
/* harmony import */ var _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utilizationcertificate/utilizationcertificate.component */ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.ts");
/* harmony import */ var _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utilizationcertificatelist/utilizationcertificatelist.component */ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.ts");
/* harmony import */ var _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pfinterestcalculation/pfinterestcalculation.component */ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    {
        path: '',
        component: _dlclanding_component__WEBPACK_IMPORTED_MODULE_6__["DlclandingComponent"],
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_5__["PendingApprovalClaimsComponent"] },
            { path: 'approvalclaims', component: _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["ApprovalClaimsComponent"] },
            { path: 'rejectclaims', component: _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_4__["RejectClaimsComponent"] },
            { path: 'sendbackclaims', component: _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_2__["SendbackClaimsComponent"] },
            { path: 'reviewclaims', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'referclaims', component: _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__["ReferClaimsComponent"] },
            { path: 'referralreview', component: _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__["ReferralReviewComponent"] },
            { path: 'fundrequestedclaims', component: _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_17__["FundRequestedClaimsComponent"] },
            { path: 'reviewfundrequest', component: _review_fund_request_review_fund_request_component__WEBPACK_IMPORTED_MODULE_18__["ReviewFundRequestComponent"] },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'sendbackfundrequestlist', component: _sendback_fund_request_list_sendback_fund_request_list_component__WEBPACK_IMPORTED_MODULE_19__["SendbackFundRequestListComponent"] },
            { path: 'forwardfundrequestlist', component: _forward_fund_request_list_forward_fund_request_list_component__WEBPACK_IMPORTED_MODULE_20__["ForwardFundRequestListComponent"] },
            { path: 'claimtrack', component: _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_21__["TimetrackComponent"] },
            { path: 'claimstatus', component: _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_24__["ClaimStatusComponent"] },
            { path: 'reviewfundrequestexpenses', component: _review_fund_request_expenses_review_fund_request_expenses_component__WEBPACK_IMPORTED_MODULE_25__["ReviewFundRequestExpensesComponent"] },
            { path: 'utilizationcertificatelist', component: _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_27__["UtilizationcertificatelistComponent"] },
            { path: 'utilizationcertificate', component: _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_26__["UtilizationcertificateComponent"] },
            { path: 'pfinterestcalculation', component: _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_28__["PfinterestcalculationComponent"] },
        ]
    },
];
var DlcModule = /** @class */ (function () {
    function DlcModule() {
    }
    DlcModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"], angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot()
            ],
            providers: [_services_dlc_data_service__WEBPACK_IMPORTED_MODULE_9__["DlcDataService"]],
            declarations: [_sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_2__["SendbackClaimsComponent"], _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["GrdFilterPipe"], _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["ApprovalClaimsComponent"], _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_4__["RejectClaimsComponent"], _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_5__["PendingApprovalClaimsComponent"], _dlclanding_component__WEBPACK_IMPORTED_MODULE_6__["DlclandingComponent"], _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"], _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__["ReferClaimsComponent"], _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__["ReferralReviewComponent"], _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_17__["FundRequestedClaimsComponent"], _review_fund_request_review_fund_request_component__WEBPACK_IMPORTED_MODULE_18__["ReviewFundRequestComponent"], _sendback_fund_request_list_sendback_fund_request_list_component__WEBPACK_IMPORTED_MODULE_19__["SendbackFundRequestListComponent"], _forward_fund_request_list_forward_fund_request_list_component__WEBPACK_IMPORTED_MODULE_20__["ForwardFundRequestListComponent"], _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_21__["TimetrackComponent"], _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_22__["ClaimviewdataComponent"], _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_24__["ClaimStatusComponent"], _review_fund_request_expenses_review_fund_request_expenses_component__WEBPACK_IMPORTED_MODULE_25__["ReviewFundRequestExpensesComponent"], _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_26__["UtilizationcertificateComponent"], _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_27__["UtilizationcertificatelistComponent"], _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_28__["PfinterestcalculationComponent"]]
        })
    ], DlcModule);
    return DlcModule;
}());



/***/ }),

/***/ "./src/app/dlc/dlclanding.component.css":
/*!**********************************************!*\
  !*** ./src/app/dlc/dlclanding.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/dlclanding.component.html":
/*!***********************************************!*\
  !*** ./src/app/dlc/dlclanding.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dlc/dlclanding.component.ts":
/*!*********************************************!*\
  !*** ./src/app/dlc/dlclanding.component.ts ***!
  \*********************************************/
/*! exports provided: DlclandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DlclandingComponent", function() { return DlclandingComponent; });
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

var DlclandingComponent = /** @class */ (function () {
    function DlclandingComponent() {
    }
    DlclandingComponent.prototype.ngOnInit = function () {
    };
    DlclandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dlclanding',
            template: __webpack_require__(/*! ./dlclanding.component.html */ "./src/app/dlc/dlclanding.component.html"),
            styles: [__webpack_require__(/*! ./dlclanding.component.css */ "./src/app/dlc/dlclanding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DlclandingComponent);
    return DlclandingComponent;
}());



/***/ }),

/***/ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Forwarded </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundRequest\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO Office</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                   requestDateString: searchText, amount: searchText, statusName: searchText, boardName:searchText,fundRequestTypeName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.requestedBy}}</td>\r\n                                    <td><a (click)=\"getDetails(data.fundRequestTypeName,data.fundRequestNumber)\">{{data.fundRequestNumber}}</a> </td>\r\n                                    <!--<td>{{data.fundRequestNumber}}</td>-->\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <div *ngIf=\"fundRequest != null && fundRequest.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{headertext}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <table id=\"id1\" *ngIf=\"!isclaimDta\" class=\"table table-striped table-bordered\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Fund Required</th>\r\n                            <th>Physical Target</th>\r\n                            <th>Expenditure incurred during last financial year</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expense of expensesData\">\r\n                            <td>{{expense.itemName}}</td>\r\n                            <td>{{expense.fundsRequired}}</td>\r\n                            <td>{{expense.physicalTarget}}</td>\r\n                            <td>{{expense.expenditureIncurredDuringLastFinYear}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <table id=\"datatable_fixed_column\" *ngIf=\"isclaimDta\" class=\"table table-striped table-bordered\"\r\n                       width=\"100%\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>SSIN</th>\r\n                            <th>Beneficiary Name</th>\r\n                            <th>Beneficiary Type</th>\r\n                            <th>Claim Reference No.</th>\r\n                            <th>Claim Category</th>\r\n                            <th>Submission Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let claim of claimsReqData\">\r\n                            <td>{{claim.ssin}}</td>\r\n                            <td>{{claim.benName}}</td>\r\n                            <td>{{claim.benType}}</td>\r\n                            <td>{{claim.claimRefernceNo}}</td>\r\n                            <td>{{getTypeName(claim.claimType)}}</td>\r\n                            <td>{{claim.submittedDateString}}</td>\r\n                            <td>{{claim.approvedAmount}}</td>\r\n                            <td>{{claim.paymentStatusName}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                    Ok\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ForwardFundRequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardFundRequestListComponent", function() { return ForwardFundRequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForwardFundRequestListComponent = /** @class */ (function () {
    function ForwardFundRequestListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
        this.isclaimDta = false;
    }
    ForwardFundRequestListComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'forward', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, chronologicalOrder: -1 }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'forward', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
    };
    ForwardFundRequestListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ForwardFundRequestListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ForwardFundRequestListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ForwardFundRequestListComponent.prototype.ngOnInit = function () {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoBoard, this.page, this.pageSize);
    };
    ForwardFundRequestListComponent.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ForwardFundRequestListComponent.prototype.changepage = function (page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoBoard, this.page, this.pageSize);
    };
    ForwardFundRequestListComponent.prototype.getDetails = function (type, id) {
        var _this = this;
        if (type == "Expenses") {
            this.dataService
                .getFundRequestedExpensesById(id)
                .subscribe(function (data) {
                _this.expensesData = data.fundRequestExpensesDtlList;
                _this.headertext = "Expenses Details";
                _this.isclaimDta = false;
                _this.expensesModal.show();
            });
        }
        else {
            this.dataService
                .getFundRequestedClaimsById(id)
                .subscribe(function (data) {
                debugger;
                _this.claimsReqData = data.fundClaimList;
                _this.headertext = "Claims Details";
                _this.isclaimDta = true;
                _this.expensesModal.show();
            });
        }
    };
    ForwardFundRequestListComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ForwardFundRequestListComponent.prototype, "expensesModal", void 0);
    ForwardFundRequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forward-fund-request-list',
            template: __webpack_require__(/*! ./forward-fund-request-list.component.html */ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.html"),
            styles: [__webpack_require__(/*! ./forward-fund-request-list.component.css */ "./src/app/dlc/forward-fund-request-list/forward-fund-request-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ForwardFundRequestListComponent);
    return ForwardFundRequestListComponent;
}());



/***/ }),

/***/ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dlc/fund-requested-claims/fund-requested-claims.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dlc/fund-requested-claims/fund-requested-claims.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Pending</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundRequest\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO</mfDefaultSorter>\r\n                                    </th>\r\n                                    <!--<th>\r\n        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                    refernceNumber: searchText, requestDateString: searchText, amount: searchText, statusName: searchText, boardName:searchText,fundRequestTypeName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data, i)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <!--<td>{{data.requestedBy}}</td>-->\r\n                                    <td><a (click)=\"getDetails(data.fundRequestTypeName,data.fundRequestNumber)\">{{data.fundRequestNumber}}</a> </td>\r\n                                    <!--<td>{{data.fundRequestNumber}}</td>-->\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"fundRequest.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n<div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{headertext}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <table id=\"id1\" *ngIf=\"!isclaimDta\" class=\"table table-striped table-bordered\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Fund Required</th>\r\n                            <th>Physical Target</th>\r\n                            <th>Expenditure incurred during last financial year</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expense of expensesData\">\r\n                            <td>{{expense.itemName}}</td>\r\n                            <td>{{expense.fundsRequired}}</td>\r\n                            <td>{{expense.physicalTarget}}</td>\r\n                            <td>{{expense.expenditureIncurredDuringLastFinYear}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <table id=\"datatable_fixed_column\" *ngIf=\"isclaimDta\" class=\"table table-striped table-bordered\"\r\n                       width=\"100%\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>SSIN</th>\r\n                            <th>Beneficiary Name</th>\r\n                            <th>Beneficiary Type</th>\r\n                            <th>Claim Reference No.</th>\r\n                            <th>Claim Category</th>\r\n                            <th>Submission Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let claim of claimsReqData\">\r\n                            <td>{{claim.ssin}}</td>\r\n                            <td>{{claim.benName}}</td>\r\n                            <td>{{claim.benType}}</td>\r\n                            <td>{{claim.claimRefernceNo}}</td>\r\n                            <td>{{getTypeName(claim.claimType)}}</td>\r\n                            <td>{{claim.submittedDateString}}</td>\r\n                            <td>{{claim.approvedAmount}}</td>\r\n                            <td>{{claim.paymentStatusName}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                    Ok\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dlc/fund-requested-claims/fund-requested-claims.component.ts ***!
  \******************************************************************************/
/*! exports provided: FundRequestedClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRequestedClaimsComponent", function() { return FundRequestedClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FundRequestedClaimsComponent = /** @class */ (function () {
    function FundRequestedClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
        this.isclaimDta = false;
    }
    FundRequestedClaimsComponent.prototype.onreviewClick = function (item, index) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, chronologicalOrder: index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
    };
    FundRequestedClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    FundRequestedClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    FundRequestedClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    FundRequestedClaimsComponent.prototype.ngOnInit = function () {
        this.claimStatusIds = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].FundRequestFromALC + "," + _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, this.claimStatusIds, this.page, this.pageSize);
    };
    FundRequestedClaimsComponent.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    FundRequestedClaimsComponent.prototype.changepage = function (page) {
        this.claimStatusIds = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].FundRequestFromALC + "," + _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, this.claimStatusIds, this.page, this.pageSize);
    };
    FundRequestedClaimsComponent.prototype.getDetails = function (type, id) {
        var _this = this;
        if (type == "Expenses") {
            this.dataService
                .getFundRequestedExpensesById(id)
                .subscribe(function (data) {
                _this.expensesData = data.fundRequestExpensesDtlList;
                _this.headertext = "Expenses Details";
                _this.isclaimDta = false;
                _this.expensesModal.show();
            });
        }
        else {
            this.dataService
                .getFundRequestedClaimsById(id)
                .subscribe(function (data) {
                debugger;
                _this.claimsReqData = data.fundClaimList;
                _this.headertext = "Claims Details";
                _this.isclaimDta = true;
                _this.expensesModal.show();
            });
        }
    };
    FundRequestedClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], FundRequestedClaimsComponent.prototype, "expensesModal", void 0);
    FundRequestedClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-requested-claims',
            template: __webpack_require__(/*! ./fund-requested-claims.component.html */ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.html"),
            styles: [__webpack_require__(/*! ./fund-requested-claims.component.css */ "./src/app/dlc/fund-requested-claims/fund-requested-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FundRequestedClaimsComponent);
    return FundRequestedClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/dlc/pending-approval-claims/pending-approval-claims.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dlc/pending-approval-claims/pending-approval-claims.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Pending </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"referDateString\">Refer Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText, referDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user, i)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.referDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dlc/pending-approval-claims/pending-approval-claims.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PendingApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingApprovalClaimsComponent", function() { return PendingApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "pending", claimAmount: item.claimAmount, chronologicalOrder: index }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    PendingApprovalClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    PendingApprovalClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    PendingApprovalClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedtoDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "pending", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    PendingApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedtoDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-approval-claims',
            template: __webpack_require__(/*! ./pending-approval-claims.component.html */ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./pending-approval-claims.component.css */ "./src/app/dlc/pending-approval-claims/pending-approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PendingApprovalClaimsComponent);
    return PendingApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Interest Calculation</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form\">\r\n                            <div>\r\n                                <!--<header>Provident Fund</header>-->\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6 \">\r\n                                                <label class=\"label\">District <span [style.color]=\"!districtValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"district\" id=\"ddlDistrict\"\r\n                                                        #district=\"ngModel\" [(ngModel)]=\"pfInterest.districtId\"\r\n                                                        (change)=\"districtChange($event.target.value)\"\r\n                                                        [ngClass]=\"{'invalid-data': district.invalid && ( !districtValid || district.touched ),\r\n                                        'valid-data': hospital && hospitalId.valid  }\"\r\n                                                        required>\r\n                                                    <option value=\"-1\" disabled selected>Choose a District</option>\r\n                                                    <option value=\"0\">ALL</option>\r\n                                                    <option value=\"{{dis.districtId}}\" *ngFor=\"let dis of districts\">{{dis.districtName}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"district.invalid && (!districtValid || districtValid.touched)\">\r\n                                                    <span style=\"color: red;\">Select a District </span>\r\n                                                </div>\r\n                                            </section>\r\n                                            <section class=\"col col-6\">\r\n                                                <label class=\"label\">Location Code <span [style.color]=\"!locationCodeValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"locationCode\" id=\"locationCode\"\r\n                                                        #locationCode=\"ngModel\" [(ngModel)]=\"pfInterest.locationId\"\r\n                                                        [ngClass]=\"{'invalid-data': locationCode.invalid && ( !locationCodeValid || locationCode.touched ), 'valid-data': hospital && hospitalId.valid  }\"\r\n                                                        required [disabled]=\"pfInterest.districtId == 0\">\r\n                                                    <option value=\"-1\" disabled selected>Choose a Location Code</option>\r\n                                                    <option value=\"0\" [selected]=\"pfInterest.districtId == 0\">ALL</option>\r\n                                                    <option value=\"{{block.blockSno}}\" *ngFor=\"let block of blocks\">{{block.locationCode}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"locationCode.invalid && (!locationCodeValid || locationCode.touched)\">\r\n                                                    <span style=\"color: red;\">Select a Location Code </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6\">\r\n                                                <label class=\"label\">SSIN From <span [style.color]=\"!ssinFromValid?'red':''\"><b>*</b></span></label>\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"ssinFrom\" placeholder=\"SSIN From\" [(ngModel)]=\"pfInterest.ssinFrom\" NumbersOnly maxlength=\"50\">\r\n                                                </label>\r\n                                                <div *ngIf=\"!ssinFromValid\">\r\n                                                    <span style=\"color: red;\">Enter SSIN From </span>\r\n                                                </div>\r\n                                            </section>\r\n                                            <section class=\"col col-6\">\r\n                                                <label class=\"label\">SSIN To </label>\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"ssinTo\" placeholder=\"SSIN To\" [(ngModel)]=\"pfInterest.ssinTo\" NumbersOnly maxlength=\"50\">\r\n                                                </label>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6 \">\r\n                                                <label class=\"label\">Financial Year <span [style.color]=\"!financialYearValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"financialYear\" id=\"ddlFinancialYear\"\r\n                                                        #financialYear=\"ngModel\" [(ngModel)]=\"pfInterest.financialYearId\"\r\n                                                        [ngClass]=\"{'invalid-data': financialYear.invalid && ( !financialYearValid || financialYear.touched ),\r\n                                        'valid-data': financialYear && financialYearValid.valid  }\"\r\n                                                        required>\r\n                                                    <option value=\"0\" disabled>Choose a Financial Year</option>\r\n                                                    <option value=\"{{year.financialYearId}}\" *ngFor=\"let year of financialYears\">{{year.financialYear}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"financialYear.invalid && (!financialYearValid || financialYear.touched)\">\r\n                                                    <span style=\"color: red;\">Select a Financial Year </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"calculatePFInterest()\"> Calculate</a>\r\n                                <a class=\"btn btn-danger\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.ts ***!
  \******************************************************************************/
/*! exports provided: PfinterestcalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfinterestcalculationComponent", function() { return PfinterestcalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PfinterestcalculationComponent = /** @class */ (function () {
    function PfinterestcalculationComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.pfInterest = {};
        this.districtValid = true;
        this.locationCodeValid = true;
        this.ssinFromValid = true;
        //ssinToValid: boolean = true;
        this.financialYearValid = true;
    }
    PfinterestcalculationComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    PfinterestcalculationComponent.prototype.ngOnInit = function () {
        this.GetDistricts();
        this.GetFinancialYears();
    };
    PfinterestcalculationComponent.prototype.GetDistricts = function () {
        var _this = this;
        this.dataService
            .GetDistricts()
            .subscribe(function (data) {
            _this.districts = data;
        });
    };
    PfinterestcalculationComponent.prototype.GetFinancialYears = function () {
        var _this = this;
        this.dataService
            .GetFinancialYears()
            .subscribe(function (data) {
            _this.financialYears = data;
        });
    };
    PfinterestcalculationComponent.prototype.districtChange = function (districtId) {
        var _this = this;
        this.dataService
            .GetLocationCodes(districtId)
            .subscribe(function (data) {
            _this.blocks = data;
        });
    };
    PfinterestcalculationComponent.prototype.calculatePFInterest = function () {
        var _this = this;
        if (this.validateDetails()) {
            if (this.pfInterest.districtId == 0) {
                this.pfInterest.locationId = 0;
            }
            if (this.pfInterest.ssinTo == undefined || this.pfInterest.ssinTo == null) {
                this.pfInterest.ssinTo = this.pfInterest.ssinFrom;
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .CalculatePFInterest(this.pfInterest)
                    .then(function (data) {
                    debugger;
                    if (data) {
                        _this.successMessage = "PF Interest Calculated Successfully";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
    };
    PfinterestcalculationComponent.prototype.validateDetails = function () {
        debugger;
        var isValid = true;
        this.districtValid = this.locationCodeValid = this.ssinFromValid = this.financialYearValid = true;
        if (this.pfInterest.districtId == -1 || this.pfInterest.districtId == undefined) {
            this.districtValid = isValid = false;
        }
        if (this.pfInterest.districtId != 0)
            if (this.pfInterest.locationId == -1 || this.pfInterest.locationId == undefined) {
                this.locationCodeValid = isValid = false;
            }
        if (this.pfInterest.ssinFrom == undefined) {
            this.ssinFromValid = isValid = false;
        }
        if (this.pfInterest.financialYearId == 0 || this.pfInterest.financialYearId == undefined) {
            this.financialYearValid = isValid = false;
        }
        return isValid;
    };
    PfinterestcalculationComponent.prototype.okClick = function () {
        this.successModal.hide();
        window.location.href = "alc/pfinterestcalculation";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], PfinterestcalculationComponent.prototype, "successModal", void 0);
    PfinterestcalculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfinterestcalculation',
            template: __webpack_require__(/*! ./pfinterestcalculation.component.html */ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.html"),
            styles: [__webpack_require__(/*! ./pfinterestcalculation.component.css */ "./src/app/dlc/pfinterestcalculation/pfinterestcalculation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PfinterestcalculationComponent);
    return PfinterestcalculationComponent;
}());



/***/ }),

/***/ "./src/app/dlc/refer-claims/refer-claims.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dlc/refer-claims/refer-claims.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/refer-claims/refer-claims.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dlc/refer-claims/refer-claims.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Pending</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"referDateString\">Refer Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText, referDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{user.claimType}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.referDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dlc/refer-claims/refer-claims.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dlc/refer-claims/refer-claims.component.ts ***!
  \************************************************************/
/*! exports provided: ReferClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferClaimsComponent", function() { return ReferClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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





var ReferClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ReferClaimsComponent(router, dataService, userService) {
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
    ReferClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/referralreview', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId }], { skipLocationChange: true });
    };
    ReferClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ReferClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ReferClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedtoDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    ReferClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedtoDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedtoDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ReferClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-claims',
            template: __webpack_require__(/*! ./refer-claims.component.html */ "./src/app/dlc/refer-claims/refer-claims.component.html"),
            styles: [__webpack_require__(/*! ./refer-claims.component.css */ "./src/app/dlc/refer-claims/refer-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReferClaimsComponent);
    return ReferClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/referral-review/referral-review.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dlc/referral-review/referral-review.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/referral-review/referral-review.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dlc/referral-review/referral-review.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n\r\n                    <h2>Claim View</h2>\r\n\r\n\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form\">\r\n\r\n                            <!--<fieldset>\r\n        <section>\r\n            <header>Exceptions</header>\r\n            <br />\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <div class=\"well well-sm\">\r\n\r\n                        <div class=\"smart-timeline\">\r\n\r\n                            <div class=\"smart-timeline-content\">\r\n\r\n                                <p class=\"label\">\r\n                                    PF Balance is not talling with Passbook and Department Records\r\n                                </p>\r\n                                <p class=\"label\">\r\n                                    Claim amount exceeding the annual limit\r\n                                </p>\r\n                                <p class=\"label\">\r\n                                    Loss of employment exeeding the cap of 10,000/-\r\n                                </p>\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </section>\r\n    </fieldset>-->\r\n\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset disabled=\"true\">\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Beneficiary Name: </strong>{{beneficiary.benFirstName}} &nbsp; {{beneficiary.benLastName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary.benBankAccNo}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset disabled=\"true\">\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\"><i></i>PF(Provident Fund)</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Health & Family\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death & Disability\"><i></i>Death & Disability</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Education\" checked=\"true\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <header>Education</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label><strong>Claim Amount : </strong>{{claim.educationDetails.approvedAmount}}</label>\r\n                                </section>\r\n                            </fieldset>\r\n                            <header>Dependent Details:</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div *ngFor=\"let claim of claim.educationDetails.educationDetailList\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{claim.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{claim.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{claim.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{claim.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{claim.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{claim.Year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{claim.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{claim.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{claim.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{claim.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <header>Educational Attachments</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Approved Amount<span [style.color]=\"!approvedAmountValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"approvedAmount\" [disabled]=\"!isApprovedAmountDisable\" [(ngModel)]=\"review.approvedAmount\" placeholder=\"Approved Amount\" NumbersOnly>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isShowClaimsHistory\">\r\n                                <header>Claims History</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewHistory()\" class=\"smart-form-link\">View Claims History</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label class=\"label\">ALC Comments<span [style.color]=\"!alcCommentsValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"alcComments\" [(ngModel)]=\"review.alcComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label class=\"label\">Exception Comments</label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"exceptionComments\" [(ngModel)]=\"review.exceptionComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-success\" (click)=\"saveClaim(15,'approved')\">Approve</a>\r\n                                <a class=\"btn btn-warning\" (click)=\"saveClaim(14,'rejected')\"> Reject</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"saveClaim(13,'send back')\"> Send back</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</section>\r\n\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Attachment Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <accordion>\r\n                    <accordion-group heading=\"{{item.fileName}}\" *ngFor=\"let item of attachmentList\">\r\n                        <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                            <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                        </div>\r\n                        <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                            <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                        </div>\r\n                    </accordion-group>\r\n\r\n                </accordion>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claims History</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <table class=\"table table-striped\" [mfData]=\"claimsHistoryData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Claim Reference No.\r\n                                </th>\r\n                                <th>\r\n                                    Submission Date\r\n                                </th>\r\n                                <th>\r\n                                    Amount\r\n                                </th>\r\n                                <th>\r\n                                    Approved Amount\r\n                                </th>\r\n                                <th>\r\n                                    Status\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                <td>{{user.claimRefernceNo}}</td>\r\n                                <td>{{user.submittedDateString}}</td>\r\n                                <td>{{user.claimAmount}}</td>\r\n                                <td>{{user.approvedAmount}}</td>\r\n                                <td>{{user.statusName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td colspan=\"5\"></td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"historyModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/referral-review/referral-review.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dlc/referral-review/referral-review.component.ts ***!
  \******************************************************************/
/*! exports provided: ReferralReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralReviewComponent", function() { return ReferralReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReferralReviewComponent = /** @class */ (function () {
    function ReferralReviewComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsHistoryData = [];
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isShowClaimsHistory = false;
        this.isApprovedAmountDisable = true;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
    }
    ReferralReviewComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReferralReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            if (_this.mode != "referal") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                if (_this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily && _this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
        });
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReferralReviewComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralReviewComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
        });
    };
    ReferralReviewComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ReferralReviewComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.saveClaim = function (status, mode) {
        var _this = this;
        debugger;
        this.review.benDeathStatus = false;
        this.review.statusId = status;
        this.review.transactionId = this.tranctionId;
        this.review.claimType = this.claimType;
        this.review.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow;
        this.review.userId = this.userService.user.deptUserid;
        if (mode == "approved") {
            debugger;
            if (this.claim.deathDetails != null) {
                this.review.benDeathStatus = true;
            }
        }
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.review)
                .then(function (data) {
                _this.successMessage = "Claim updated successfully";
                _this.successModal.show();
            });
        }
    };
    ReferralReviewComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.validateClaim = function () {
        var isValid = true;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
            this.approvedAmountValid = isValid = false;
        }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        return isValid;
    };
    ReferralReviewComponent.prototype.viewHistory = function () {
        this.historyModal.show();
    };
    ReferralReviewComponent.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var _this = this;
        debugger;
        this.dataService
            .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType)
            .subscribe(function (data) {
            _this.claimsHistoryData = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ReferralReviewComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('historyModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ReferralReviewComponent.prototype, "historyModal", void 0);
    ReferralReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-review',
            template: __webpack_require__(/*! ./referral-review.component.html */ "./src/app/dlc/referral-review/referral-review.component.html"),
            styles: [__webpack_require__(/*! ./referral-review.component.css */ "./src/app/dlc/referral-review/referral-review.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReferralReviewComponent);
    return ReferralReviewComponent;
}());



/***/ }),

/***/ "./src/app/dlc/reject-claims/reject-claims.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dlc/reject-claims/reject-claims.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/reject-claims/reject-claims.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dlc/reject-claims/reject-claims.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Rejected</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rejectedDateString\">Rejected Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText, rejectedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.rejectedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/dlc/reject-claims/reject-claims.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dlc/reject-claims/reject-claims.component.ts ***!
  \**************************************************************/
/*! exports provided: RejectClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectClaimsComponent", function() { return RejectClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
    RejectClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "reject", chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    RejectClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    RejectClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    RejectClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "reject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    RejectClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedRejectbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            // this.claimsData = data;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    RejectClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedRejectbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferedRejectbyDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    RejectClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reject-claims',
            template: __webpack_require__(/*! ./reject-claims.component.html */ "./src/app/dlc/reject-claims/reject-claims.component.html"),
            styles: [__webpack_require__(/*! ./reject-claims.component.css */ "./src/app/dlc/reject-claims/reject-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RejectClaimsComponent);
    return RejectClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Fund Request View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails.fundRequestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset style=\"display:none\">\r\n                                <section>\r\n                                    <label class=\"label\">Fund Status at RLO</label>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails.boardName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails.claimTypes}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <form class=\"smart-form smart-form-main\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"expensesData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Item</th>\r\n                                                        <th>Fund Required</th>\r\n                                                        <th>Physical Target</th>\r\n                                                        <th>Expenditure incurred during last financial year</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let expenses of mf.data\">\r\n                                                        <td>{{expenses.itemName}}</td>\r\n                                                        <td>{{expenses.fundsRequired}}</td>\r\n                                                        <td>{{expenses.physicalTarget}}</td>\r\n                                                        <td>{{expenses.expenditureIncurredDuringLastFinYear}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"4\"> <mfBootstrapPaginator></mfBootstrapPaginator></td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n\r\n                                            <fieldset>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col col-6\">\r\n                                                        <b>Amount Required :</b> {{sumofamount}}\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </fieldset>\r\n                                            <header>Time Line</header>\r\n                                            <fieldset>\r\n                                                <section>\r\n\r\n                                                    <!-- row -->\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                                            <div class=\"well well-sm\">\r\n                                                                <div class=\"smart-timeline\">\r\n                                                                    <ul class=\"smart-timeline-list\">\r\n                                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                                            <div class=\"smart-timeline-icon\">\r\n                                                                                <i class=\"fa fa-user\"></i>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-time\">\r\n                                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-content\">\r\n                                                                                <p>\r\n                                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                                </p>\r\n                                                                                <p>\r\n                                                                                    {{item.actionComments}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>ALC Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"alcComments\" [(ngModel)]=\"alcComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>DLC Comments<span [style.color]=\"!commentsValid?'red':''\"><b>*</b></span></label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!isVisible\" name=\"dlcComments\" [(ngModel)]=\"dlcComments\"\r\n                                                                  [ngClass]=\"{'invalid-data': (!commentsValid ), 'valid-data': commentsValid}\"\r\n                                                                  required></textarea>\r\n                                                    </label>\r\n                                                    <div *ngIf=\"(!commentsValid)\">\r\n                                                        <span style=\"color: red;\">DLC Comments is required </span>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>Board Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"boardComments\" [(ngModel)]=\"boardComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <footer>\r\n                                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                                <a class=\"btn btn-success\" *ngIf=\"isVisible\" (click)=\"updateFundRequest(21,'forward')\">Forward</a>\r\n                                                <a class=\"btn btn-primary\" *ngIf=\"isVisible\" (click)=\"updateFundRequest(20,'send back')\"> Send Back</a>\r\n                                            </footer>\r\n                                        </form>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </section>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            <!--<footer>\r\n                <a class=\"btn btn-primary\" href=\"javascript:void(0);\"> Export As PDF</a>\r\n                <a class=\"btn btn-danger\" href=\"javascript:void(0);\" > Export As Excel</a>\r\n            </footer>-->\r\n\r\n\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <!--<button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>-->\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ReviewFundRequestExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFundRequestExpensesComponent", function() { return ReviewFundRequestExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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






var ReviewFundRequestExpensesComponent = /** @class */ (function () {
    function ReviewFundRequestExpensesComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.isVisible = false;
        this.commentsValid = true;
        this.claimsTrack = {};
    }
    ReviewFundRequestExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.alcId = params["alcId"];
            _this.mode = params["mode"];
            if (_this.mode == "pending") {
                _this.isVisible = true;
            }
            _this.workflowId = params["workflowId"];
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedExpensesById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["UserType"].AsstLabourCom);
    };
    ReviewFundRequestExpensesComponent.prototype.getFundRequestedExpensesById = function (fundRequestId) {
        var _this = this;
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.fundRequestExpensesDtlList;
            //this.claimsData = data.fundClaimList;
            debugger;
            _this.expensesData.forEach(function (x) { return _this.sumofamount += x.fundsRequired; });
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.boardComments = _this.fundrequestDetails.boardComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewFundRequestExpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
        });
    };
    ReviewFundRequestExpensesComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
        if (this.dlcComments == undefined || this.dlcComments == "") {
            this.commentsValid = false;
            return;
        }
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["WorkflowTrans"].fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.dlcComments = this.dlcComments;
        this.fundReviewModel.fundRequestType = 2; // Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                if (type.toLowerCase() == "forward") {
                    _this.successMessage = "Fund request forwarded to CEO";
                }
                else
                    _this.successMessage = "Fund request " + type + " successfully";
                _this.successModal.show();
            });
        }
    };
    ReviewFundRequestExpensesComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewFundRequestExpensesComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/fundrequestedclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackfundrequestlist']);
        }
        else if (this.mode == "forward") {
            this.router.navigate(['dlc/forwardfundrequestlist']);
        }
    };
    ReviewFundRequestExpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
    };
    ReviewFundRequestExpensesComponent.prototype.formatDate = function (date) {
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
    ReviewFundRequestExpensesComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewFundRequestExpensesComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewFundRequestExpensesComponent.prototype, "successModal", void 0);
    ReviewFundRequestExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-fund-request-expenses',
            template: __webpack_require__(/*! ./review-fund-request-expenses.component.html */ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.html"),
            styles: [__webpack_require__(/*! ./review-fund-request-expenses.component.css */ "./src/app/dlc/review-fund-request-expenses/review-fund-request-expenses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ReviewFundRequestExpensesComponent);
    return ReviewFundRequestExpensesComponent;
}());



/***/ }),

/***/ "./src/app/dlc/review-fund-request/review-fund-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request/review-fund-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/dlc/review-fund-request/review-fund-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request/review-fund-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Fund Request View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails?.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress?.rloOfficeName}} <br /> {{RloOfficeAddress?.addressLine1}} &nbsp; {{RloOfficeAddress?.addressLine2}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails?.fundRequestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset style=\"display:none\">\r\n                                <section>\r\n                                    <label class=\"label\">Fund Status at RLO</label>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress?.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails?.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails?.boardName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails?.claimTypes}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails?.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <form class=\"smart-form smart-form-main\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>SSIN</th>\r\n                                                        <th>Beneficiary Name</th>\r\n                                                        <th>Beneficiary Type</th>\r\n                                                        <th>Claim Reference No.</th>\r\n                                                        <th>Claim Category</th>\r\n                                                        <th>Submission Date</th>\r\n                                                        <th>Amount</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let claim of mf.data\">\r\n                                                        <td>{{claim.ssin}}</td>\r\n                                                        <td>{{claim.benName}}</td>\r\n                                                        <td>{{claim.benType}}</td>\r\n                                                        <td><a (click)=\"viewClaimInfo(claim)\">{{claim.claimRefernceNo}}</a> </td>\r\n                                                        <!--<td>{{claim.claimRefernceNo}}</td>-->\r\n                                                        <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                        <td>{{claim.submittedDateString}}</td>\r\n                                                        <td>{{claim.approvedAmount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"7\"> <mfBootstrapPaginator></mfBootstrapPaginator></td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n\r\n                                            <fieldset>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col col-6\">\r\n                                                        <b>Amount Required :</b> {{sumofamount}}\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </fieldset>\r\n                                            <header>Time Line</header>\r\n                                            <fieldset>\r\n                                                <section>\r\n\r\n                                                    <!-- row -->\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                                            <div class=\"well well-sm\">\r\n                                                                <div class=\"smart-timeline\">\r\n                                                                    <ul class=\"smart-timeline-list\">\r\n                                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                                            <div class=\"smart-timeline-icon\">\r\n                                                                                <i class=\"fa fa-user\"></i>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-time\">\r\n                                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-content\">\r\n                                                                                <p>\r\n                                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                                </p>\r\n                                                                                <p>\r\n                                                                                    {{item.actionComments}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>ALC Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"alcComments\" [(ngModel)]=\"alcComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>DLC Comments<span [style.color]=\"!commentsValid?'red':''\"><b>*</b></span></label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!isVisible\" name=\"dlcComments\" [(ngModel)]=\"dlcComments\"\r\n                                                                  [ngClass]=\"{'invalid-data': (!commentsValid ), 'valid-data': commentsValid}\"\r\n                                                                  required></textarea>\r\n                                                    </label>\r\n                                                    <div *ngIf=\"(!commentsValid)\">\r\n                                                        <span style=\"color: red;\">DLC Comments is required </span>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>Board Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"boardComments\" [(ngModel)]=\"boardComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset *ngIf=\"isCOExceptionCommentsReq\">\r\n                                                <section>\r\n                                                    <label>Chronological Order Exception Comments <span [style.color]=\"!coexceptionCommentsValid?'red':''\"><b>*</b></span> </label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"chronologicOrderExceptionComments\" [disabled]=\"!isVisible\" [(ngModel)]=\"dlcChronologicalOrderComments\"\r\n                                                                  #chronologicOrderExceptionComments=\"ngModel\"\r\n                                                                  [ngClass]=\"{'invalid-data': chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid || chronologicOrderExceptionComments.touched), 'valid-data': chronologicOrderExceptionComments.valid && coexceptionCommentsValid}\"\r\n                                                                  required></textarea>\r\n                                                    </label>\r\n                                                    <div *ngIf=\"chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid ||chronologicOrderExceptionComments.touched)\">\r\n                                                        <span style=\"color: red;\">Chronological Order Exception Comments is required </span>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <footer>\r\n                                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                                <a class=\"btn btn-success\" *ngIf=\"isVisible\" (click)=\"updateFundRequest(21,'forward')\">Forward</a>\r\n                                                <a class=\"btn btn-primary\" *ngIf=\"isVisible\" (click)=\"updateFundRequest(20,'send back')\"> Send Back</a>\r\n                                            </footer>\r\n                                        </form>\r\n                                    </div>\r\n\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </section>\r\n             \r\n\r\n            </div>\r\n           \r\n\r\n            <!--<footer>\r\n        <a class=\"btn btn-primary\" href=\"javascript:void(0);\"> Export As PDF</a>\r\n        <a class=\"btn btn-danger\" href=\"javascript:void(0);\" > Export As Excel</a>\r\n    </footer>-->\r\n           \r\n\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <!--<button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>-->\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claim Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata #child [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/review-fund-request/review-fund-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dlc/review-fund-request/review-fund-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReviewFundRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFundRequestComponent", function() { return ReviewFundRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../claimviewdata/claimviewdata.component */ "./src/app/dlc/claimviewdata/claimviewdata.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReviewFundRequestComponent = /** @class */ (function () {
    function ReviewFundRequestComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.isVisible = false;
        this.commentsValid = true;
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.claim = {};
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
    }
    ReviewFundRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.alcId = params["alcId"];
            _this.mode = params["mode"];
            if (_this.mode == "pending") {
                _this.isVisible = true;
            }
            _this.workflowId = params["workflowId"];
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedClaimsById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["UserType"].AsstLabourCom);
    };
    ReviewFundRequestComponent.prototype.getFundRequestedClaimsById = function (fundRequestId) {
        var _this = this;
        this.sumofamount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.fundClaimList;
            _this.claimsData.forEach(function (x) { return _this.sumofamount += x.approvedAmount; });
            _this.dlcComments = _this.fundrequestDetails.dlcComments;
            _this.alcComments = _this.fundrequestDetails.alcComments;
            _this.boardComments = _this.fundrequestDetails.boardComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewFundRequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
        });
    };
    ReviewFundRequestComponent.prototype.updateFundRequest = function (id, type) {
        var _this = this;
        debugger;
        if (this.dlcComments == undefined || this.dlcComments == "") {
            this.commentsValid = false;
            // return;
        }
        if ((this.dlcChronologicalOrderComments == undefined || this.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = false;
            // return;
        }
        if (!this.commentsValid || !this.coexceptionCommentsValid) {
            return;
        }
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["WorkflowTrans"].fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.dlcComments = this.dlcComments;
        this.fundReviewModel.dlcChronologicalOrderComments = this.dlcChronologicalOrderComments;
        this.fundReviewModel.fundRequestType = 1; // Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                if (type.toLowerCase() == "forward") {
                    _this.successMessage = "Fund request forwarded to CEO";
                }
                else
                    _this.successMessage = "Fund request " + type + " successfully";
                _this.successModal.show();
            });
        }
    };
    ReviewFundRequestComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewFundRequestComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/fundrequestedclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackfundrequestlist']);
        }
        else if (this.mode == "forward") {
            this.router.navigate(['dlc/forwardfundrequestlist']);
        }
    };
    ReviewFundRequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
    };
    ReviewFundRequestComponent.prototype.formatDate = function (date) {
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
    ReviewFundRequestComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewFundRequestComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewFundRequestComponent.prototype.viewClaimInfo = function (claim) {
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][this.claimType]);
    };
    ReviewFundRequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            _this.child.getData(_this.claim);
            _this.attachModel.show();
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
            }
            if (_this.claim.deathDetails != null) {
                debugger;
                for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.disabilityDetails != null) {
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    var attachment = _this.claim.attachment[k];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.claim.attachment[k] = attachment;
                    _this.attachmentList.push(attachment);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewFundRequestComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewFundRequestComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child'),
        __metadata("design:type", _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__["ClaimviewdataComponent"])
    ], ReviewFundRequestComponent.prototype, "child", void 0);
    ReviewFundRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-fund-request',
            template: __webpack_require__(/*! ./review-fund-request.component.html */ "./src/app/dlc/review-fund-request/review-fund-request.component.html"),
            styles: [__webpack_require__(/*! ./review-fund-request.component.css */ "./src/app/dlc/review-fund-request/review-fund-request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], ReviewFundRequestComponent);
    return ReviewFundRequestComponent;
}());



/***/ }),

/***/ "./src/app/dlc/reviewclaims/reviewclaims.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dlc/reviewclaims/reviewclaims.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/dlc/reviewclaims/reviewclaims.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dlc/reviewclaims/reviewclaims.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim View</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <div *ngIf=\"isVisibleCOExceptions\">\r\n                                <header>Chronological Order Exception</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div [innerHTML]=\"claimCOExceptionDetails\"></div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"isVisibleClaimExceptions\">\r\n                                <header>Exceptions</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div [innerHTML]=\"claimExceptionDetails\"></div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset disabled=\"true\">\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\" [checked]=\"claim.providentFundDetails != null\"><i></i>PF(Provident Fund)</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Health & Family\" [checked]=\"claim.healthFamilyDetails != null\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death\" [checked]=\"claim.deathDetails != null\"><i></i>Death</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Disability\" [checked]=\"claim.disabilityDetails != null\"><i></i>Disability</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Education\" [checked]=\"claim.educationDetails != null\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong> {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong>  {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.providentFundDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>PF Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.educationDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Educational Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.healthFamilyDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD'\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n                                <header>Health & Family Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.disabilityDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Disability Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.deathDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Death Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Time Line</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <!-- row -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                            <div class=\"well well-sm\">\r\n                                                <div class=\"smart-timeline\">\r\n                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                            <div class=\"smart-timeline-icon\">\r\n                                                                <i class=\"fa fa-user\"></i>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-time\">\r\n                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-content\">\r\n                                                                <p>\r\n                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                </p>\r\n                                                                <p>\r\n                                                                    {{item.actionComments}}\r\n                                                                </p>\r\n                                                            </div>\r\n                                                        </li>\r\n\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isShowClaimsHistory\">\r\n                                <header>Claims History</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewHistory()\" class=\"smart-form-link\">View Claims History</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Approved Amount<span [style.color]=\"!approvedAmountValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"input\">\r\n                                        <input type=\"text\" name=\"approvedAmount\" [disabled]=\"!isApprovedAmountDisable\" [(ngModel)]=\"review.approvedAmount\" placeholder=\"Approved Amount\" NumbersOnly>\r\n                                    </label>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>DLC Comments<span [style.color]=\"!dlcCommentsValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"dlcComments\" [disabled]=\"!isVisable\" [(ngModel)]=\"review.dlcComments\"\r\n                                                  #dlcComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': dlcComments.invalid && (!dlcCommentsValid || dlcComments.touched), 'valid-data': dlcComments.valid && dlcCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"dlcComments.invalid && (!dlcCommentsValid ||dlcComments.touched)\">\r\n                                        <span style=\"color: red;\">DLC Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Exception Comments</label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"exceptionComments\" [disabled]=\"!isVisable\" [(ngModel)]=\"review.exceptionComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <fieldset *ngIf=\"isCOExceptionCommentsReq\">\r\n                                <section>\r\n                                    <label>Chronological Order Exception Comments <span [style.color]=\"!coexceptionCommentsValid?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"chronologicOrderExceptionComments\" [disabled]=\"!isVisable\" [(ngModel)]=\"review.dlcChronologicalOrderComments\"\r\n                                                  #chronologicOrderExceptionComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid || chronologicOrderExceptionComments.touched), 'valid-data': chronologicOrderExceptionComments.valid && coexceptionCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid ||chronologicOrderExceptionComments.touched)\">\r\n                                        <span style=\"color: red;\">Chronological Order Exception Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-warning\" (click)=\"saveClaim(14,1,'rejected')\" *ngIf=\"isVisable\">Reject</a>\r\n                                <a class=\"btn btn-success\" (click)=\"saveClaim(15,0,'accepted')\" *ngIf=\"isVisable\">Accept</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"saveClaim(13,1,'send back')\" *ngIf=\"isVisable\">Send Back</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Attachment Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                        Ok\r\n                    </button>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n         aria-hidden=\"true\" backdrop=\"static\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Claims History</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsHistoryData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Claim Reference No.\r\n                                    </th>\r\n                                    <th>\r\n                                        Submission Date\r\n                                    </th>\r\n                                    <th>\r\n                                        Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Approved Amount\r\n                                    </th>\r\n                                    <th>\r\n                                        Status\r\n                                    </th>\r\n                                    <th>\r\n                                        Submitted By\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.approvedAmount}}</td>\r\n                                    <td>{{user.statusName}}</td>\r\n                                    <td>{{user.submittedByName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"6\"></td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"historyModal.hide()\">\r\n                        Ok\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/dlc/reviewclaims/reviewclaims.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dlc/reviewclaims/reviewclaims.component.ts ***!
  \************************************************************/
/*! exports provided: ReviewclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewclaimsComponent", function() { return ReviewclaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function ReviewclaimsComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.attachmentList = [];
        this.educationList = [];
        this.approvedAmountValid = true;
        this.dlcCommentsValid = true;
        this.review = {};
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.claimsTrack = {};
        this.isVisable = true;
        this.viewMetWithAnAccident = false;
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.claimExceptionDetails = "";
        this.isVisibleClaimExceptions = false;
        this.claimAmount = 0;
        this.expection = [];
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
        this.isApprovedAmountDisable = true;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
        this.isVisibleCOExceptions = false;
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimConstants"][params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.claimAmount = params["claimAmount"];
            _this.mode = params["mode"];
            if (_this.mode != "pending") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                if (_this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimConstants"].HealthFamily && _this.claimType != _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimConstants"].PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        this.getPackages();
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
    ReviewclaimsComponent.prototype.getClaimsByDlc = function (id, status) {
        var _this = this;
        this.dataService
            .getClaimsByDlc(id)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
                _this.review.approvedAmount = _this.claim.educationDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.educationDetails.dlcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.educationDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.educationDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                _this.review.dlcComments = _this.claim.healthFamilyDetails.dlcComments;
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
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.healthFamilyDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.healthFamilyDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
            }
            if (_this.claim.disabilityDetails != null) {
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                _this.review.approvedAmount = _this.claim.disabilityDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.disabilityDetails.dlcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.disabilityDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.disabilityDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.deathDetails.dlcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.deathDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.deathDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["PFTypeOfClaim"].Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.dlcComments = _this.claim.providentFundDetails.dlcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.providentFundDetails.alcChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.providentFundDetails.alcChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
        });
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
        this.router.navigate(['dlc/pendingapprovalclaims']);
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["WorkflowTrans"].workflowreferral;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.dlcChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;
                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
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
            if (mode == "accepted") {
                debugger;
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                }
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
        if (this.mode == "pending") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "reject") {
            this.router.navigate(['dlc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "approve") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        this.approvedAmountValid = this.dlcCommentsValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
        if (this.review.dlcComments == undefined || this.review.dlcComments == "") {
            this.dlcCommentsValid = isValid = false;
        }
        if ((this.review.dlcChronologicalOrderComments == undefined || this.review.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
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
    ReviewclaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewclaims',
            template: __webpack_require__(/*! ./reviewclaims.component.html */ "./src/app/dlc/reviewclaims/reviewclaims.component.html"),
            styles: [__webpack_require__(/*! ./reviewclaims.component.css */ "./src/app/dlc/reviewclaims/reviewclaims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_3__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/sendback-claims/sendback-claims.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dlc/sendback-claims/sendback-claims.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/sendback-claims/sendback-claims.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dlc/sendback-claims/sendback-claims.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Sent Back </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Date of Application</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"sentBackDate\">Sent back Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText, claimAmount: searchText,submittedDateString: searchText, sentBackDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.sentBackDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/dlc/sendback-claims/sendback-claims.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dlc/sendback-claims/sendback-claims.component.ts ***!
  \******************************************************************/
/*! exports provided: SendbackClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendbackClaimsComponent", function() { return SendbackClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
    SendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    SendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    SendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    SendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferSendbackfromDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferSendbackfromDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferSendbackfromDLC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize);
        }
    };
    SendbackClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendback-claims',
            template: __webpack_require__(/*! ./sendback-claims.component.html */ "./src/app/dlc/sendback-claims/sendback-claims.component.html"),
            styles: [__webpack_require__(/*! ./sendback-claims.component.css */ "./src/app/dlc/sendback-claims/sendback-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SendbackClaimsComponent);
    return SendbackClaimsComponent;
}());



/***/ }),

/***/ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Sent Back </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundRequest\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO Office</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                    refernceNumber: searchText, requestDateString: searchText, amount: searchText, statusName: searchText,boardName: searchText,fundRequestTypeName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.requestedBy}}</td>\r\n                                    <td><a (click)=\"getDetails(data.fundRequestTypeName,data.fundRequestNumber)\">{{data.fundRequestNumber}}</a> </td>\r\n                                    <!--<td>{{data.fundRequestNumber}}</td>-->\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"fundRequest.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n<div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{headertext}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <table id=\"id1\" *ngIf=\"!isclaimDta\" class=\"table table-striped table-bordered\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Fund Required</th>\r\n                            <th>Physical Target</th>\r\n                            <th>Expenditure incurred during last financial year</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expense of expensesData\">\r\n                            <td>{{expense.itemName}}</td>\r\n                            <td>{{expense.fundsRequired}}</td>\r\n                            <td>{{expense.physicalTarget}}</td>\r\n                            <td>{{expense.expenditureIncurredDuringLastFinYear}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <table id=\"datatable_fixed_column\" *ngIf=\"isclaimDta\" class=\"table table-striped table-bordered\"\r\n                       width=\"100%\">\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>SSIN</th>\r\n                            <th>Beneficiary Name</th>\r\n                            <th>Beneficiary Type</th>\r\n                            <th>Claim Reference No.</th>\r\n                            <th>Claim Category</th>\r\n                            <th>Submission Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let claim of claimsReqData\">\r\n                            <td>{{claim.ssin}}</td>\r\n                            <td>{{claim.benName}}</td>\r\n                            <td>{{claim.benType}}</td>\r\n                            <td>{{claim.claimRefernceNo}}</td>\r\n                            <td>{{getTypeName(claim.claimType)}}</td>\r\n                            <td>{{claim.submittedDateString}}</td>\r\n                            <td>{{claim.approvedAmount}}</td>\r\n                            <td>{{claim.paymentStatusName}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                    Ok\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SendbackFundRequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendbackFundRequestListComponent", function() { return SendbackFundRequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendbackFundRequestListComponent = /** @class */ (function () {
    function SendbackFundRequestListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.fundRequest = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
        this.isclaimDta = false;
    }
    SendbackFundRequestListComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'sendback', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, chronologicalOrder: -1 }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'sendback', workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
    };
    SendbackFundRequestListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    SendbackFundRequestListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    SendbackFundRequestListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    SendbackFundRequestListComponent.prototype.ngOnInit = function () {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendBackbyDLC, this.page, this.pageSize);
    };
    SendbackFundRequestListComponent.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            // this.fundRequest = data;
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    SendbackFundRequestListComponent.prototype.changepage = function (page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendBackbyDLC, this.page, this.pageSize);
    };
    SendbackFundRequestListComponent.prototype.getDetails = function (type, id) {
        var _this = this;
        if (type == "Expenses") {
            this.dataService
                .getFundRequestedExpensesById(id)
                .subscribe(function (data) {
                _this.expensesData = data.fundRequestExpensesDtlList;
                _this.headertext = "Expenses Details";
                _this.isclaimDta = false;
                _this.expensesModal.show();
            });
        }
        else {
            this.dataService
                .getFundRequestedClaimsById(id)
                .subscribe(function (data) {
                debugger;
                _this.claimsReqData = data.fundClaimList;
                _this.headertext = "Claims Details";
                _this.isclaimDta = true;
                _this.expensesModal.show();
            });
        }
    };
    SendbackFundRequestListComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], SendbackFundRequestListComponent.prototype, "expensesModal", void 0);
    SendbackFundRequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendback-fund-request-list',
            template: __webpack_require__(/*! ./sendback-fund-request-list.component.html */ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.html"),
            styles: [__webpack_require__(/*! ./sendback-fund-request-list.component.css */ "./src/app/dlc/sendback-fund-request-list/sendback-fund-request-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SendbackFundRequestListComponent);
    return SendbackFundRequestListComponent;
}());



/***/ }),

/***/ "./src/app/dlc/services/api-dictionary.ts":
/*!************************************************!*\
  !*** ./src/app/dlc/services/api-dictionary.ts ***!
  \************************************************/
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
    getFundRequestedClaims: {
        url: 'GetFundRequestsByUserID',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundRequestByFundRequestId',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    updateWorkFlowStatus: {
        url: 'updateWorkFlowStatus',
        params: null
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
    getClaimStatusClaims: {
        url: "getClaimStatusClaims",
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundRequestExpensesByFundRequestId',
        params: null
    },
    getDLCUtilizationCertificates: {
        url: 'getDLCUtilizationCertificates',
        params: null
    },
    getReleaseOrders: {
        url: 'getReleaseOrders',
        params: null
    },
    getFinancialYears: {
        url: 'getFinancialYears',
        params: null
    },
    saveUtilizationCertificate: {
        url: 'saveUtilizationCertificate',
        params: null
    },
    getUtilizationCertificateDetails: {
        url: 'getUtilizationCertificateDetails',
        params: null
    },
    getUtilizationCertificate: {
        url: 'getUtilizationCertificate',
        params: null
    },
    getBoardDetails: {
        url: 'getBoardDetails',
        params: null
    },
    getDistricts: {
        url: 'getDistricts',
        params: null
    },
    getLocationCodes: {
        url: 'getLocationCodes',
        params: null
    },
    calculatePFInterest: {
        url: 'calculatePFInterest',
        params: null
    },
};


/***/ }),

/***/ "./src/app/dlc/services/dlc-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dlc/services/dlc-data.service.ts ***!
  \**************************************************/
/*! exports provided: DlcDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DlcDataService", function() { return DlcDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/dlc/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DlcDataService = /** @class */ (function () {
    function DlcDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    DlcDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id) {
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
    DlcDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    DlcDataService.prototype.getBeneficiaryBankDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    DlcDataService.prototype.getClaimsByDlc = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    DlcDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getAttachment = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    DlcDataService.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        //Passing default search parameters for rlo: any, fundRequestNo: any, requestDate: any implemented in CEO Fund Grids
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaims.url + "/" + id + "/" + type + "/" + wfId + "/" + "0" + "/" + 0 + "/" + "0" + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.updateWorkFlowStatus = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateWorkFlowStatus.url, data).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getPackages = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getDLCUtilizationCertificates = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getDLCUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetReleaseOrders = function (rloOfficeId, finYearId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetFinancialYears = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.saveUtilizationCertificate = function (utilizationCertificate) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveUtilizationCertificate.url, utilizationCertificate).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getUtilizationCertificateDetails = function (ucId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.downloadUtilizationCertificate = function (ucId) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getUtilizationCertificate.url + "/" + ucId, ucId);
    };
    DlcDataService.prototype.getBoardMasterData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetDistricts = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getDistricts.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetLocationCodes = function (districtId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getLocationCodes.url + "/" + districtId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.CalculatePFInterest = function (pfInterest) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].calculatePFInterest.url, pfInterest).then(function (res) {
            return res;
        });
    };
    DlcDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DlcDataService);
    return DlcDataService;
}());



/***/ }),

/***/ "./src/app/dlc/timetrack/timetrack.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dlc/timetrack/timetrack.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/timetrack/timetrack.component.html":
/*!********************************************************!*\
  !*** ./src/app/dlc/timetrack/timetrack.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Track Claim</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <fieldset>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                        <div class=\"well well-sm\">\r\n                                            <div class=\"smart-timeline\">\r\n                                                <ul class=\"smart-timeline-list\">\r\n\r\n                                                    <li *ngFor=\"let item of claimsTrack\">\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>{{formatDate(item.actionDate)}}</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                {{item.actionComments}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <!--<li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>25th july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>ALC Review - Send Back </strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Provided Bill is out of the date, for which claim can't be processed. Resubmit the right bill\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>23rd july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Forwarded to ALC</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Forwarded to AL at 10.30am\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>22nd July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Resubmission by Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Here attached the document\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>21st july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Sent Back</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Can you please submit your Medicall Bill?\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-pencil\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>18th July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Claim Submission - Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Sir, Can you please review and approve my claim\r\n                                                            </p>\r\n\r\n                                                        </div>\r\n                                                    </li>-->\r\n                                                    <!--<li class=\"text-center\">\r\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-arrow-down text-muted\"></i> LOAD MORE</a>\r\n                                                    </li>-->\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </article>\r\n    </div>\r\n    <div class=\"smart-form\">\r\n        <footer>\r\n            <a class=\"btn btn-danger\" (click)=\"onBackClaimClick()\">Cancel</a>\r\n        </footer>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dlc/timetrack/timetrack.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dlc/timetrack/timetrack.component.ts ***!
  \******************************************************/
/*! exports provided: TimetrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetrackComponent", function() { return TimetrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
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
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "sendback") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "pending") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        if (this.mode == "approval") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "claimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
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
            template: __webpack_require__(/*! ./timetrack.component.html */ "./src/app/dlc/timetrack/timetrack.component.html"),
            styles: [__webpack_require__(/*! ./timetrack.component.css */ "./src/app/dlc/timetrack/timetrack.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_4__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TimetrackComponent);
    return TimetrackComponent;
}());



/***/ }),

/***/ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificate/utilizationcertificate.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificate/utilizationcertificate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <header>\r\n                    <h2>Utilization Certificate </h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                        <div class=\"row\" style=\"margin-top:10px;\">\r\n                                            <div class=\"col col-6 selectContainer\">\r\n                                                <label>Board<span [style.color]=\"!boardIdValid?'red':''\"><b>*</b></span></label>\r\n                                                <label class=\"select\">\r\n                                                    <select class=\"form-control select\" name=\"boardId\" [(ngModel)]=\"utilizationCertificate.boardId\" #boardId=\"ngModel\"\r\n                                                            [ngClass]=\"{'invalid-data':boardId.invalid && (!boardIdValid ||  boardId.touched), 'valid-data': boardId.valid && boardIdValid}\"\r\n                                                            required [disabled]=\"viewMode\">\r\n                                                        <option value=\"0\" selected disabled>Choose a Board</option>\r\n                                                        <option value=\"{{board.boardId}}\" *ngFor=\"let board of boardList\">{{board.boardName}}</option>\r\n                                                    </select> <i></i>\r\n                                                </label>\r\n                                                <div *ngIf=\" (!boardIdValid )\">\r\n                                                    <span style=\"color: red;\">Board is required </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>Financial Year <span [style.color]=\"!financialYearValid?'red':''\"><b>*</b></span></label>\r\n                                                <label class=\"select\">\r\n                                                    <select class=\"form-control select\" name=\"financialYear\" (change)=\"financialYearChange($event.target.value)\"\r\n                                                            [(ngModel)]=\"utilizationCertificate.financialYearId\"\r\n                                                            #financialYear=\"ngModel\"\r\n                                                            [ngClass]=\"{'invalid-data':financialYear.invalid && (!financialYearValid ||  financialYear.touched), 'valid-data': financialYear.valid && financialYearValid}\"\r\n                                                            required [disabled]=\"viewMode\">\r\n                                                        <option value=\"0\" disabled selected>Choose an Option</option>\r\n                                                        <option value=\"{{year.financialYearId}}\" *ngFor=\"let year of financialYears\">{{year.financialYear}}</option>\r\n                                                    </select> <i></i>\r\n                                                </label>\r\n                                                <div *ngIf=\"financialYear.invalid && (!financialYearValid ||  financialYear.touched)\">\r\n                                                    <span style=\"color: red;\">Financial Year is required </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>Utilization Certificate Date <span [style.color]=\"!utilizationCertificateDateValid?'red':''\"><b>*</b></span></label>\r\n                                                <label class=\"input\">\r\n                                                    <i class=\"icon-append fa fa-calendar\"></i>\r\n                                                    <input type=\"text\" name=\"utilizationCertificateDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                           placeholder=\"DD/MM/YYYY\"\r\n                                                           readonly #utilizationCertificateDate=\"ngModel\" [(ngModel)]=\"utilizationCertificate.date\"\r\n                                                           value=\"{{ utilizationCertificate.date | date: 'dd/MM/yyyy' }}\"\r\n                                                           [ngClass]=\"{'invalid-data':utilizationCertificateDate.invalid && (!utilizationCertificateDateValid), 'valid-data': utilizationCertificateDate.valid && utilizationCertificateDateValid}\"\r\n                                                           required [disabled]=\"viewMode\">\r\n                                                </label>\r\n                                                <div *ngIf=\"utilizationCertificateDate.invalid && (!utilizationCertificateDateValid)\">\r\n                                                    <span style=\"color: red;\">Utilization Certificate Date is required </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n</section>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"certificatesVisible\" class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <fieldset>\r\n                                        <div class=\"widget-body no-padding\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"fundReleaseOrder\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><input type=\"checkbox\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\" [disabled]=\"viewMode\"></th>\r\n                                                        <th>Fund Request Type</th>\r\n                                                        <th>Fund Release Order</th>\r\n                                                        <th>Request Date</th>\r\n                                                        <th>Amount</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let order of mf.data\">\r\n                                                        <td class=\"\">\r\n                                                            <input type=\"checkbox\" [(ngModel)]=\"order.selected\" (change)=\"checkIfAllSelected(order);\" [disabled]=\"viewMode\">\r\n                                                        </td>\r\n                                                        <td>{{order.fundRequestTypeName}}</td>\r\n                                                        <td>{{order.fundReleaseOrderHdrId}}</td>\r\n                                                        <td>{{order.requestDateString}}</td>\r\n                                                        <td>{{order.sanctionedAmount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                                            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n\r\n                                        </div>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div *ngIf=\"certificatesVisible\">\r\n                <div class=\"jarviswidget-editbox\">\r\n                </div>\r\n                <div class=\"widget-body no-padding\">\r\n                    <form class=\"smart-form smart-form-main\">\r\n                        <fieldset>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Opening Balance <span [style.color]=\"!openingBalanceValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"openingBalance\" placeholder=\"Opening Balance\" NumbersOnly [(ngModel)]=\"utilizationCertificate.openingBalance\"\r\n                                                   #openingBalance=\"ngModel\" [ngClass]=\"{'invalid-data': openingBalance.invalid && ( !openingBalanceValid || openingBalance.touched ),\r\n                                                        'valid-data': otherHospitalValid && otherHospital.valid  }\" required (change)=\"getBalance($event)\" [disabled]=\"viewMode\">\r\n                                        </label>\r\n                                        <div *ngIf=\"openingBalance.invalid && (!openingBalanceValid || openingBalance.touched)\">\r\n                                            <span style=\"color: red;\">Opening Balance is required </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Received During</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"receivedDuring\" placeholder=\"Received During\" NumbersOnly [(ngModel)]=\"utilizationCertificate.fundRecieved\"\r\n                                                   #receivedDuring=\"ngModel\" disabled=\"disabled\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Utilized <span [style.color]=\"!utilizedValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"utilized\" placeholder=\"Utilized\" NumbersOnly [(ngModel)]=\"utilizationCertificate.fundUtilized\"\r\n                                                   #utilized=\"ngModel\" [ngClass]=\"{'invalid-data': utilized.invalid && ( !utilizedValid || utilized.touched ),\r\n                                                        'valid-data': utilizedValid && utilized.valid  }\" required (change)=\"getBalance($event)\" [disabled]=\"viewMode\">\r\n                                        </label>\r\n                                        <div *ngIf=\"utilized.invalid && (!utilizedValid || utilized.touched)\">\r\n                                            <span style=\"color: red;\">Utilized is required </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Balance</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"balance\" placeholder=\"Balance\" NumbersOnly [(ngModel)]=\"utilizationCertificate.balance\"\r\n                                                   #balance=\"ngModel\" disabled=\"disabled\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <form class=\"smart-form\" *ngIf=\"certificatesVisible\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a class=\"btn btn-warning\" (click)=\"cancelClick()\"> Cancel</a>\r\n                    <a *ngIf=\"!viewMode\" id=\"btnSava\" class=\"btn btn-primary\" (click)=\"SubmitRequest()\"> Submit </a>\r\n\r\n                </footer>\r\n            </form>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificate/utilizationcertificate.component.ts ***!
  \********************************************************************************/
/*! exports provided: UtilizationcertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizationcertificateComponent", function() { return UtilizationcertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UtilizationcertificateComponent = /** @class */ (function () {
    function UtilizationcertificateComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.showErrorMessage = false;
        this.ucId = 0;
        this.alcId = 0;
        this.mode = "";
        this.sumofAmount = 0;
        this.fundReleaseOrder = [];
        this.certificatesVisible = false;
        this.utilizationCertificateDateValid = true;
        this.financialYearValid = true;
        this.openingBalanceValid = true;
        this.utilizedValid = true;
        this.utilizationCertificate = {};
        this.selectedReleaseOrdersList = [];
        this.viewMode = false;
        this.boardIdValid = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    UtilizationcertificateComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    UtilizationcertificateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetFinancialYears();
        this.getBoardDetails();
        this.route$ = this.route.params.subscribe(function (params) {
            _this.ucId = params["ucId"] != null ? Number(params["ucId"]) : 0;
            _this.mode = params["mode"];
            _this.alcId = params["alcId"] != null ? Number(params["alcId"]) : 0;
        });
        this.GetRLOOfficeUserInformation(this.alcId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["UserType"].AsstLabourCom);
        if (this.ucId > 0 && this.mode == "view") {
            this.viewMode = true;
            this.certificatesVisible = true;
            this.getUtilizationCertificateDetails(this.ucId);
        }
    };
    UtilizationcertificateComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    UtilizationcertificateComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UtilizationcertificateComponent.prototype.GetFinancialYears = function () {
        var _this = this;
        this.dataService
            .GetFinancialYears()
            .subscribe(function (data) {
            _this.financialYears = data;
        });
    };
    UtilizationcertificateComponent.prototype.GetReleaseOrders = function (rloOfficeId, finYear) {
        var _this = this;
        debugger;
        this.dataService
            .GetReleaseOrders(rloOfficeId, finYear)
            .subscribe(function (data) {
            _this.fundReleaseOrder = data;
        });
    };
    //GetAlcInformation(deptUserid: number) {
    //    this.dataService
    //        .GetAlcInformation(deptUserid)
    //        .subscribe((data: any) => {
    //            this.alcDetails = data;
    //            if (this.alcDetails.approvedClaimsAmount > this.alcDetails.balanceOfTheAmount)
    //                this.AmountShortfall = (this.alcDetails.approvedClaimsAmount - this.alcDetails.balanceOfTheAmount);
    //            else
    //                this.AmountShortfall = 0;
    //        });
    //}
    UtilizationcertificateComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
        });
    };
    UtilizationcertificateComponent.prototype.financialYearChange = function (year) {
        this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, year);
        this.certificatesVisible = true;
    };
    UtilizationcertificateComponent.prototype.SubmitRequest = function () {
        var _this = this;
        debugger;
        if (this.validateDetails()) {
            this.selectedReleaseOrders();
            this.showErrorMessage = false;
            if (this.selectedReleaseOrdersList != null && this.selectedReleaseOrdersList.length > 0) {
                this.utilizationCertificate.rloOfficeID = this.RloOfficeAddress.rloOfficeId;
                this.utilizationCertificate.createdBy = this.userService.user.deptUserid;
                this.utilizationCertificate.statusId = 1;
                this.utilizationCertificate.createdDate = new Date();
                this.utilizationCertificate.fundReleaseOrdersList = this.selectedReleaseOrdersList;
                //this.claimData.fundRequested = this.sumofAmount;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveUtilizationCertificate(this.utilizationCertificate)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Utilization Certificate created successfully";
                            _this.sumofAmount = 0;
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                        }
                        _this.successModal.show();
                    });
                }
                //}
            }
            else {
                this.showErrorMessage = true;
            }
        }
    };
    UtilizationcertificateComponent.prototype.selectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.fundReleaseOrder.length; i++) {
            this.fundReleaseOrder[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.fundReleaseOrder[i].sanctionedAmount;
            }
        }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    };
    UtilizationcertificateComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.fundReleaseOrder.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.sanctionedAmount;
        }
        else {
            this.sumofAmount -= itemData.sanctionedAmount;
        }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    };
    UtilizationcertificateComponent.prototype.selectedReleaseOrders = function () {
        var res = this.fundReleaseOrder.filter(function (x) { return x.selected == true; });
        this.selectedReleaseOrdersList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedReleaseOrdersList.push(res[i].fundReleaseOrderHdrId);
        }
    };
    UtilizationcertificateComponent.prototype.cancelClick = function () {
        this.router.navigate(['dlc/utilizationcertificatelist']);
    };
    UtilizationcertificateComponent.prototype.validateDetails = function () {
        var isValid = true;
        this.utilizationCertificateDateValid = this.financialYearValid = this.openingBalanceValid = this.utilizedValid = true;
        this.showErrorMessage = false;
        if (this.utilizationCertificate.date == undefined) {
            this.utilizationCertificateDateValid = isValid = false;
        }
        if (this.utilizationCertificate.financialYearId == 0 || this.utilizationCertificate.financialYearId == undefined) {
            this.financialYearValid = isValid = false;
        }
        if (this.utilizationCertificate.openingBalance == undefined || this.utilizationCertificate.openingBalance <= 0) {
            this.openingBalanceValid = isValid = false;
        }
        if (this.utilizationCertificate.fundUtilized == undefined || this.utilizationCertificate.fundUtilized <= 0) {
            this.utilizedValid = isValid = false;
        }
        return isValid;
    };
    UtilizationcertificateComponent.prototype.getBalance = function (event) {
        debugger;
        var a = 0;
        var b = 0;
        var c = 0;
        a = this.utilizationCertificate.openingBalance != undefined ? +this.utilizationCertificate.openingBalance : 0;
        b = this.utilizationCertificate.fundRecieved != undefined ? +this.utilizationCertificate.fundRecieved : 0;
        c = this.utilizationCertificate.fundUtilized != undefined ? +this.utilizationCertificate.fundUtilized : 0;
        //alert((a + b) - c);
        this.utilizationCertificate.balance = ((a + b) - c);
    };
    UtilizationcertificateComponent.prototype.getUtilizationCertificateDetails = function (ucId) {
        var _this = this;
        this.dataService
            .getUtilizationCertificateDetails(ucId)
            .subscribe(function (data) {
            _this.utilizationCertificate = data;
            _this.fundReleaseOrder = data.certificateReleaseOrders;
            _this.utilizationCertificate.date = new Date(_this.utilizationCertificate.date);
        });
    };
    UtilizationcertificateComponent.prototype.okClick = function () {
        this.successModal.hide();
        window.location.href = "dlc/utilizationcertificatelist";
    };
    UtilizationcertificateComponent.prototype.getBoardDetails = function () {
        var _this = this;
        this.dataService
            .getBoardMasterData()
            .subscribe(function (data) {
            _this.boardList = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UtilizationcertificateComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UtilizationcertificateComponent.prototype, "expensesModal", void 0);
    UtilizationcertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilizationcertificate',
            template: __webpack_require__(/*! ./utilizationcertificate.component.html */ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.html"),
            styles: [__webpack_require__(/*! ./utilizationcertificate.component.css */ "./src/app/dlc/utilizationcertificate/utilizationcertificate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UtilizationcertificateComponent);
    return UtilizationcertificateComponent;
}());



/***/ }),

/***/ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Utilization Certificate Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"utilizationCertificateDetails\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"dateString\">Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"openingBalance\">Opening Balance</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRecieved\">Fund Received</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundUtilized\">FundUtilized</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"balance\">Balance</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"financialYear\">Financial Year</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,dateString: searchText,openingBalance: searchText,\r\n                                    fundRecieved: searchText, fundUtilized: searchText, balance: searchText, financialYear: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onViewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-eye\"></i></a>\r\n                                        <a (click)=\"onPDFViewClick(data)\" title=\"PDF View\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.dateString}}</td>\r\n                                    <td>{{data.openingBalance}}</td>\r\n                                    <td>{{data.fundRecieved}}</td>\r\n                                    <td>{{data.fundUtilized}}</td>\r\n                                    <td>{{data.balance}}</td>\r\n                                    <td>{{data.financialYear}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"utilizationCertificateDetails.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n<div bsModal #pdfModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Form-V Pdf</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Form-V genarated, Please print or download.\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf(claim,'print')\">\r\n                    Print FormV\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf(claim,'download')\">\r\n                    Download FormV\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UtilizationcertificatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizationcertificatelistComponent", function() { return UtilizationcertificatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dlc-data.service */ "./src/app/dlc/services/dlc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UtilizationcertificatelistComponent = /** @class */ (function () {
    //Paging props end
    function UtilizationcertificatelistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //public claimsData: Claims[];
        this.utilizationCertificateDetails = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    UtilizationcertificatelistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['dlc/utilizationcertificate', { ucId: item.utilizationCertificateHdrId, mode: "view", alcId: item.createdBy }], { skipLocationChange: true });
    };
    UtilizationcertificatelistComponent.prototype.onPDFViewClick = function (item) {
        debugger;
        this.ucId = item.utilizationCertificateHdrId;
        this.pdfModal.show();
    };
    UtilizationcertificatelistComponent.prototype.downLoadPdf = function (type) {
        var _this = this;
        debugger;
        this.dataService
            .downloadUtilizationCertificate(this.ucId)
            .then(function (data) {
            var blob = new Blob([data.body], { type: 'application/pdf' });
            if (type == 'print') {
                var blobUrl = URL.createObjectURL(blob);
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = blobUrl;
                document.body.appendChild(iframe);
                iframe.contentWindow.print();
            }
            else {
                file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, "UtilizationCertificate.pdf");
            }
            _this.pdfModal.hide();
        });
    };
    UtilizationcertificatelistComponent.prototype.ngOnInit = function () {
        this.getDLCUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    UtilizationcertificatelistComponent.prototype.getDLCUtilizationCertificates = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getDLCUtilizationCertificates(id, pageNo, pageSize)
            .subscribe(function (data) {
            _this.utilizationCertificateDetails = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    UtilizationcertificatelistComponent.prototype.changepage = function (page) {
        this.getDLCUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UtilizationcertificatelistComponent.prototype, "pdfModal", void 0);
    UtilizationcertificatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilizationcertificatelist',
            template: __webpack_require__(/*! ./utilizationcertificatelist.component.html */ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.html"),
            styles: [__webpack_require__(/*! ./utilizationcertificatelist.component.css */ "./src/app/dlc/utilizationcertificatelist/utilizationcertificatelist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dlc_data_service__WEBPACK_IMPORTED_MODULE_2__["DlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UtilizationcertificatelistComponent);
    return UtilizationcertificatelistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dlc-dlc-module.js.map