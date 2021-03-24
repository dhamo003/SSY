(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alc-alc-module"],{

/***/ "./src/app/alc/alc.module.ts":
/*!***********************************!*\
  !*** ./src/app/alc/alc.module.ts ***!
  \***********************************/
/*! exports provided: AlcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlcModule", function() { return AlcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alclanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alclanding.component */ "./src/app/alc/alclanding.component.ts");
/* harmony import */ var _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-approval-claims/pending-approval-claims.component */ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.ts");
/* harmony import */ var _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-claims/approval-claims.component */ "./src/app/alc/approval-claims/approval-claims.component.ts");
/* harmony import */ var _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reject-claims/reject-claims.component */ "./src/app/alc/reject-claims/reject-claims.component.ts");
/* harmony import */ var _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sendback-claims/sendback-claims.component */ "./src/app/alc/sendback-claims/sendback-claims.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../claim/pipes/grd-filter.pipe */ "./src/app/claim/pipes/grd-filter.pipe.ts");
/* harmony import */ var _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviewclaims/reviewclaims.component */ "./src/app/alc/reviewclaims/reviewclaims.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refer-claims/refer-claims.component */ "./src/app/alc/refer-claims/refer-claims.component.ts");
/* harmony import */ var _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./referral-review/referral-review.component */ "./src/app/alc/referral-review/referral-review.component.ts");
/* harmony import */ var _referral_reject_claims_referral_reject_claims_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./referral-reject-claims/referral-reject-claims.component */ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.ts");
/* harmony import */ var _referral_approval_claims_referral_approval_claims_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./referral-approval-claims/referral-approval-claims.component */ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.ts");
/* harmony import */ var _referral_sendback_claims_referral_sendback_claims_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./referral-sendback-claims/referral-sendback-claims.component */ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _payment_processing_payment_processing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payment-processing/payment-processing.component */ "./src/app/alc/payment-processing/payment-processing.component.ts");
/* harmony import */ var _fund_request_fund_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fund-request/fund-request.component */ "./src/app/alc/fund-request/fund-request.component.ts");
/* harmony import */ var _reviewfundrequest_reviewfundrequest_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reviewfundrequest/reviewfundrequest.component */ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.ts");
/* harmony import */ var _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fund-requested-claims/fund-requested-claims.component */ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.ts");
/* harmony import */ var _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timetrack/timetrack.component */ "./src/app/alc/timetrack/timetrack.component.ts");
/* harmony import */ var _paymentprocessedlist_paymentprocessedlist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paymentprocessedlist/paymentprocessedlist.component */ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.ts");
/* harmony import */ var _reviewpaymentprocess_reviewpaymentprocess_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reviewpaymentprocess/reviewpaymentprocess.component */ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.ts");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./claimviewdata/claimviewdata.component */ "./src/app/alc/claimviewdata/claimviewdata.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./claim-status/claim-status.component */ "./src/app/alc/claim-status/claim-status.component.ts");
/* harmony import */ var _reviewfundrequestexpenses_reviewfundrequestexpenses_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reviewfundrequestexpenses/reviewfundrequestexpenses.component */ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.ts");
/* harmony import */ var _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utilizationcertificate/utilizationcertificate.component */ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.ts");
/* harmony import */ var _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utilizationcertificatelist/utilizationcertificatelist.component */ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.ts");
/* harmony import */ var _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pfinterestcalculation/pfinterestcalculation.component */ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.ts");
/* harmony import */ var _search_student_search_student_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./search-student/search-student.component */ "./src/app/alc/search-student/search-student.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { PaymentProcessedListComponent } from './payment-processed-list/payment-processed-list.component';











var routes = [
    {
        path: '',
        component: _alclanding_component__WEBPACK_IMPORTED_MODULE_2__["AlclandingComponent"],
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["PendingApprovalClaimsComponent"] },
            { path: 'approvalclaims', component: _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalClaimsComponent"] },
            { path: 'rejectclaims', component: _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__["RejectClaimsComponent"] },
            { path: 'sendbackclaims', component: _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__["SendbackClaimsComponent"] },
            { path: 'reviewclaims', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'referclaims', component: _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__["ReferClaimsComponent"] },
            { path: 'referralreview', component: _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__["ReferralReviewComponent"] },
            { path: 'referralreject', component: _referral_reject_claims_referral_reject_claims_component__WEBPACK_IMPORTED_MODULE_16__["ReferralRejectClaimsComponent"] },
            { path: 'referralapproval', component: _referral_approval_claims_referral_approval_claims_component__WEBPACK_IMPORTED_MODULE_17__["ReferralApprovalClaimsComponent"] },
            { path: 'referralsendback', component: _referral_sendback_claims_referral_sendback_claims_component__WEBPACK_IMPORTED_MODULE_18__["ReferralSendbackClaimsComponent"] },
            { path: 'paymentprocessing', component: _payment_processing_payment_processing_component__WEBPACK_IMPORTED_MODULE_21__["PaymentProcessingComponent"] },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"] },
            { path: 'fundrequest', component: _fund_request_fund_request_component__WEBPACK_IMPORTED_MODULE_22__["FundRequestComponent"] },
            { path: 'reviewfundrequest', component: _reviewfundrequest_reviewfundrequest_component__WEBPACK_IMPORTED_MODULE_23__["ReviewfundrequestComponent"] },
            { path: 'fundrequestedclaims', component: _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_24__["FundRequestedClaimsComponent"] },
            { path: 'claimtrack', component: _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_25__["TimetrackComponent"] },
            { path: 'paymentprocessedlist', component: _paymentprocessedlist_paymentprocessedlist_component__WEBPACK_IMPORTED_MODULE_26__["PaymentprocessedlistComponent"] },
            { path: 'reviewpaymentprocess', component: _reviewpaymentprocess_reviewpaymentprocess_component__WEBPACK_IMPORTED_MODULE_27__["ReviewpaymentprocessComponent"] },
            { path: 'claimstatus', component: _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_30__["ClaimStatusComponent"] },
            { path: 'reviewfundrequestexpenses', component: _reviewfundrequestexpenses_reviewfundrequestexpenses_component__WEBPACK_IMPORTED_MODULE_31__["ReviewfundrequestexpensesComponent"] },
            { path: 'utilizationcertificatelist', component: _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_33__["UtilizationcertificatelistComponent"] },
            { path: 'utilizationcertificate', component: _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_32__["UtilizationcertificateComponent"] },
            { path: 'pfinterestcalculation', component: _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_34__["PfinterestcalculationComponent"] },
        ]
    },
];
var AlcModule = /** @class */ (function () {
    function AlcModule() {
    }
    AlcModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"], angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot()
            ],
            providers: [_services_alc_data_service__WEBPACK_IMPORTED_MODULE_9__["AlcDataService"]],
            declarations: [_alclanding_component__WEBPACK_IMPORTED_MODULE_2__["AlclandingComponent"], _claim_pipes_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["GrdFilterPipe"], _pending_approval_claims_pending_approval_claims_component__WEBPACK_IMPORTED_MODULE_3__["PendingApprovalClaimsComponent"], _approval_claims_approval_claims_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalClaimsComponent"], _reject_claims_reject_claims_component__WEBPACK_IMPORTED_MODULE_5__["RejectClaimsComponent"], _sendback_claims_sendback_claims_component__WEBPACK_IMPORTED_MODULE_6__["SendbackClaimsComponent"], _reviewclaims_reviewclaims_component__WEBPACK_IMPORTED_MODULE_12__["ReviewclaimsComponent"], _refer_claims_refer_claims_component__WEBPACK_IMPORTED_MODULE_14__["ReferClaimsComponent"], _referral_review_referral_review_component__WEBPACK_IMPORTED_MODULE_15__["ReferralReviewComponent"], _referral_reject_claims_referral_reject_claims_component__WEBPACK_IMPORTED_MODULE_16__["ReferralRejectClaimsComponent"], _referral_approval_claims_referral_approval_claims_component__WEBPACK_IMPORTED_MODULE_17__["ReferralApprovalClaimsComponent"], _referral_sendback_claims_referral_sendback_claims_component__WEBPACK_IMPORTED_MODULE_18__["ReferralSendbackClaimsComponent"], _payment_processing_payment_processing_component__WEBPACK_IMPORTED_MODULE_21__["PaymentProcessingComponent"], _fund_request_fund_request_component__WEBPACK_IMPORTED_MODULE_22__["FundRequestComponent"], _reviewfundrequest_reviewfundrequest_component__WEBPACK_IMPORTED_MODULE_23__["ReviewfundrequestComponent"], _fund_requested_claims_fund_requested_claims_component__WEBPACK_IMPORTED_MODULE_24__["FundRequestedClaimsComponent"], _timetrack_timetrack_component__WEBPACK_IMPORTED_MODULE_25__["TimetrackComponent"], _paymentprocessedlist_paymentprocessedlist_component__WEBPACK_IMPORTED_MODULE_26__["PaymentprocessedlistComponent"], _reviewpaymentprocess_reviewpaymentprocess_component__WEBPACK_IMPORTED_MODULE_27__["ReviewpaymentprocessComponent"], _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_28__["ClaimviewdataComponent"], _claim_status_claim_status_component__WEBPACK_IMPORTED_MODULE_30__["ClaimStatusComponent"], _reviewfundrequestexpenses_reviewfundrequestexpenses_component__WEBPACK_IMPORTED_MODULE_31__["ReviewfundrequestexpensesComponent"], _utilizationcertificate_utilizationcertificate_component__WEBPACK_IMPORTED_MODULE_32__["UtilizationcertificateComponent"], _utilizationcertificatelist_utilizationcertificatelist_component__WEBPACK_IMPORTED_MODULE_33__["UtilizationcertificatelistComponent"], _pfinterestcalculation_pfinterestcalculation_component__WEBPACK_IMPORTED_MODULE_34__["PfinterestcalculationComponent"], _search_student_search_student_component__WEBPACK_IMPORTED_MODULE_35__["SearchStudentComponent"]]
        })
    ], AlcModule);
    return AlcModule;
}());



/***/ }),

/***/ "./src/app/alc/alclanding.component.html":
/*!***********************************************!*\
  !*** ./src/app/alc/alclanding.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/alc/alclanding.component.ts":
/*!*********************************************!*\
  !*** ./src/app/alc/alclanding.component.ts ***!
  \*********************************************/
/*! exports provided: AlclandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlclandingComponent", function() { return AlclandingComponent; });
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

var AlclandingComponent = /** @class */ (function () {
    function AlclandingComponent() {
    }
    AlclandingComponent.prototype.ngOnInit = function () {
    };
    AlclandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alclanding',
            template: __webpack_require__(/*! ./alclanding.component.html */ "./src/app/alc/alclanding.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AlclandingComponent);
    return AlclandingComponent;
}());



/***/ }),

/***/ "./src/app/alc/approval-claims/approval-claims.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/alc/approval-claims/approval-claims.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/approval-claims/approval-claims.component.html":
/*!********************************************************************!*\
  !*** ./src/app/alc/approval-claims/approval-claims.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Approved </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"approvedDateString\">Approved Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText, submittedDateString: searchText, approvedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.approvedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/approval-claims/approval-claims.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alc/approval-claims/approval-claims.component.ts ***!
  \******************************************************************/
/*! exports provided: ApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalClaimsComponent", function() { return ApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ApprovalClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "approve", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "approval", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    ApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    //page change event
    ApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", page, this.pageSize);
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
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ApprovedbyALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-claims',
            template: __webpack_require__(/*! ./approval-claims.component.html */ "./src/app/alc/approval-claims/approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./approval-claims.component.css */ "./src/app/alc/approval-claims/approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ApprovalClaimsComponent);
    return ApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/claim-status/claim-status.component.css":
/*!*************************************************************!*\
  !*** ./src/app/alc/claim-status/claim-status.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/claim-status/claim-status.component.html":
/*!**************************************************************!*\
  !*** ./src/app/alc/claim-status/claim-status.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Status </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"lastActionDateString\">Last Action Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,benName: searchText, benType: searchText, claimRefernceNo: searchText,\r\n       claimType: searchText, submittedDateString: searchText, claimAmount:searchText,  statusName: searchText,  lastActionDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.statusName}}</td>\r\n                                    <td>{{user.lastActionDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/claim-status/claim-status.component.ts":
/*!************************************************************!*\
  !*** ./src/app/alc/claim-status/claim-status.component.ts ***!
  \************************************************************/
/*! exports provided: ClaimStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimStatusComponent", function() { return ClaimStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    ClaimStatusComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "claimstatus", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    ClaimStatusComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "claimstatus", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    ClaimStatusComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getClaimStatusClaims(id, type, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    //page change event
    ClaimStatusComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", page, this.pageSize);
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
            //    .getSearchClaimStatusClaims(this.userService.user.deptUserid, this.userService.user.userTpe, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ClaimStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claim-status',
            template: __webpack_require__(/*! ./claim-status.component.html */ "./src/app/alc/claim-status/claim-status.component.html"),
            styles: [__webpack_require__(/*! ./claim-status.component.css */ "./src/app/alc/claim-status/claim-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ClaimStatusComponent);
    return ClaimStatusComponent;
}());



/***/ }),

/***/ "./src/app/alc/fund-request/fund-request.component.css":
/*!*************************************************************!*\
  !*** ./src/app/alc/fund-request/fund-request.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/alc/fund-request/fund-request.component.html":
/*!**************************************************************!*\
  !*** ./src/app/alc/fund-request/fund-request.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Fund Request </h2>\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{date | date: 'dd/MM/yyyy'}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section style=\"display:none\">\r\n                                    <header>  Fund Status at RLO</header>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-3\">\r\n                                            <label class=\"radio\">\r\n                                                <input type=\"radio\" name=\"radio-inline\" checked=\"checked\" (change)=\"radioChange(1)\" />\r\n                                                <!--[(ngModel)]=\"fundRequestType\" value=\"claims\">-->\r\n                                                <i></i>Fund Request for Claims\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col col-3\">\r\n                                            <label class=\"radio\">\r\n                                                <input type=\"radio\" name=\"radio-inline\" (change)=\"radioChange(2)\" />\r\n                                                <!--[(ngModel)]=\"fundRequestType\" value=\"expenses\">-->\r\n                                                <i></i>Fund Request for Expenses\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col col-3\">\r\n                                            <label class=\"radio\">\r\n                                                <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                <i></i>Advance Fund\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n\r\n                                    <div class=\"row\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label>Board<span [style.color]=\"!boardIdValid?'red':''\"><b>*</b></span></label>\r\n                                            <select class=\"form-control\" name=\"boardId\" [(ngModel)]=\"boardId\" (change)=\"selectBoardChange()\"\r\n                                                    [ngClass]=\"{'invalid-data': ( !boardIdValid  ),\r\n                                        'valid-data': boardIdValid }\"\r\n                                                    required>\r\n                                                <option value=\"0\" selected disabled>Choose a Board</option>\r\n                                                <option value=\"{{board.boardId}}\" *ngFor=\"let board of boardList\">{{board.boardName}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\" (!boardIdValid )\">\r\n                                                <span style=\"color: red;\">Board is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6 selectContainer\" *ngIf=\"!viewExpenses\">\r\n                                            <label>Category</label>\r\n                                            <ng-multiselect-dropdown name=\"22\" [placeholder]=\"'All'\"\r\n                                                                     [data]=\"claimTypesList\"\r\n                                                                     [(ngModel)]=\"claimMasterIds\"\r\n                                                                     [settings]=\"dropdownSettings\"\r\n                                                                     (onSelect)=\"onItemSelect($event)\"\r\n                                                                     (onSelectAll)=\"onSelectAll($event)\">\r\n                                            </ng-multiselect-dropdown>\r\n                                            <!--<select class=\"form-control\" name=\"claimMasterId\" [(ngModel)]=\"claimMasterId\">\r\n                <option value=\"0\" selected>All</option>\r\n                <option value=\"{{type.claimMasterId}}\" *ngFor=\"let type of claimTypesList\">{{type.claimName}}</option>\r\n\r\n            </select>-->\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" style=\"margin-top:10px;\" *ngIf=\"!viewExpenses\">\r\n\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label>Location</label>\r\n                                            <ng-multiselect-dropdown name=\"dd\" [placeholder]=\"'All '\"\r\n                                                                     [data]=\"LocationList\"\r\n                                                                     [(ngModel)]=\"locationsIds\"\r\n                                                                     [settings]=\"locationSettings\"\r\n                                                                     (onSelect)=\"onItemSelect($event)\"\r\n                                                                     (onSelectAll)=\"onSelectAll($event)\">\r\n                                            </ng-multiselect-dropdown>\r\n                                            <!--<select class=\"form-control\" name=\"locationsIds\" [(ngModel)]=\"locationsIds\">\r\n                <option value=\"0\" selected>All</option>\r\n                <option value=\"{{location.blockSno}}\" *ngFor=\"let location of LocationList\">{{location.blockName}}</option>\r\n            </select>-->\r\n                                        </div>\r\n                                        <div class=\"col col-6 selectContainer\" style=\"margin-top:21px !important\">\r\n                                            <a class=\"btn btn-primary\" (click)=\"GetClaims()\"> Get Claims </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage1\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please add atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"viewExpenses\" class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n\r\n\r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <fieldset id=\"expenses\">\r\n                                        <!--<header>Expenses </header>-->\r\n                                        <fieldset id=\"addbutton\">\r\n                                            <div class=\"row\">\r\n                                                <a class=\"btn btn-primary\" (click)=\"openModel()\" style=\"width :55px;height:30px;padding:5px;\" button> Add </a>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\">\r\n                                                    <thead>\r\n                                                        <tr>\r\n                                                            <th>Item</th>\r\n                                                            <th>Fund Required</th>\r\n                                                            <th>Physical Target</th>\r\n                                                            <th>Expenditure incurred during last financial year</th>\r\n                                                            <th></th>\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                        <tr *ngIf=\"expensesDetailsArray.length==0\"><td colspan=\"6\">No expense details</td></tr>\r\n                                                        <tr *ngFor=\"let expenses of expensesDetailsArray\">\r\n                                                            <td>{{expenses.itemName}}</td>\r\n                                                            <td>{{expenses.fundsRequired}}</td>\r\n                                                            <td>{{expenses.physicalTarget}}</td>\r\n                                                            <td>{{expenses.expenditureIncurredDuringLastFinYear}}</td>\r\n                                                            <td>\r\n                                                                <a class=\"btn btn-labeled btn-primary\" (click)=\"editExpenseDetails(expenses)\" style=\"margin-right:5px;\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</a>\r\n                                                                <a class=\"btn btn-labeled btn-danger\" (click)=\"removeExpenseDetails(expenses)\"><i class=\"glyphicon glyphicon-trash\"></i> Remove</a>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </fieldset>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div *ngIf=\"GetClaimVisible\" class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n\r\n\r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <fieldset>\r\n                                        <div class=\"widget-body no-padding\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><input type=\"checkbox\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>\r\n                                                        <th>SSIN</th>\r\n                                                        <th>Beneficiary Name</th>\r\n                                                        <th>Beneficiary Type</th>\r\n                                                        <th>Claim Reference No.</th>\r\n                                                        <th>Claim Category</th>\r\n                                                        <th>Submission Date</th>\r\n                                                        <th>Amount</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let claim of mf.data\">\r\n                                                        <td class=\"\">\r\n                                                            <input type=\"checkbox\" [(ngModel)]=\"claim.selected\" (change)=\"checkIfAllSelected(claim);\">\r\n                                                        </td>\r\n                                                        <td>{{claim.ssin}}</td>\r\n                                                        <td>{{claim.benName}}</td>\r\n                                                        <td>{{claim.benType}}</td>\r\n                                                        <td><a (click)=\"viewClaimInfo(claim)\">{{claim.claimRefernceNo}}</a> </td>\r\n                                                        <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                        <td>{{claim.submittedDateString}}</td>\r\n                                                        <td>{{claim.approvedAmount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                                            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n\r\n                                        </div>\r\n                                    </fieldset>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>Amount Required: </strong>{{sumofAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <form class=\"smart-form\">\r\n                <fieldset>\r\n                    <section>\r\n                        <label>ALC Comments<span [style.color]=\"!commentsValid?'red':''\"><b>*</b></span></label>\r\n                        <label class=\"textarea textarea-resizable\">\r\n                            <textarea rows=\"3\" class=\"custom-scroll\" name=\"alcComments\" [(ngModel)]=\"alcComments\"\r\n                                      [ngClass]=\"{'invalid-data': (!commentsValid ), 'valid-data': commentsValid}\"\r\n                                      required></textarea>\r\n                        </label>\r\n                        <div *ngIf=\"(!commentsValid)\">\r\n                            <span style=\"color: red;\">ALC Comments is required </span>\r\n                        </div>\r\n                    </section>\r\n                </fieldset>\r\n            </form>\r\n            <form class=\"smart-form\" *ngIf=\"GetClaimVisible || viewExpenses\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a class=\"btn btn-warning\" (click)=\"cancelClick()\"> Cancel</a>\r\n                    <a id=\"btnSava\" class=\"btn btn-primary\" (click)=\"SubmitRequest()\"> Submit </a>\r\n\r\n                </footer>\r\n            </form>\r\n        </article>\r\n                    </div>\r\n            </div>\r\n            <div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n                 aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n                <div class=\"modal-dialog modal-lg\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n\r\n                            <h4 class=\"modal-title\">Status Message</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                        Download Receipt\r\n                    </button>-->\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                                Ok\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n                 aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n                <div class=\"modal-dialog modal-lg\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                            <h4 class=\"modal-title\">Add Expense Details</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <fieldset id=\"divAddExpensesDetails\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"label\"> Item <span [style.color]=\"!expenseTypeValid?'red':''\"><b>*</b></span></label>\r\n                                            <select name=\"expenseType\" class=\"form-control\" [(ngModel)]=\"expensesDetails.itemId\"\r\n                                                    #expenseType=\"ngModel\"\r\n                                                    [ngClass]=\"{'invalid-data': !expenseTypeValid,\r\n                                        'valid-data': expenseTypeValid }\"\r\n                                                    required>\r\n                                                <option value=\"0\" selected disabled>Choose Item</option>\r\n                                                <option value=\"{{expense.lovDtlId}}\" *ngFor=\"let expense of expensesTypesLov\">{{expense.optionName}}</option>\r\n                                            </select> <i></i>\r\n                                            <div *ngIf=\"!expenseTypeValid\">\r\n                                                <span style=\"color: red;\">Select Item </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"label\">Fund Required <span [style.color]=\"!fundRequiredValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"number\" class=\"form-control\" name=\"fundRequiredAmount\" placeholder=\"Fund Required\" [(ngModel)]=\"expensesDetails.fundsRequired\" \r\n                                                   #fundRequiredAmount=\"ngModel\" \r\n                                                   [ngClass]=\"{'invalid-data': !fundRequiredValid, \r\n                                                   'valid-data': fundRequiredValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"!fundRequiredValid\">\r\n                                                <span style=\"color: red;\">Fund Required is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"label\">Physical Target</label>\r\n                                            <input type=\"number\" class=\"form-control\" name=\"physicalTarget\" placeholder=\"Physical Target\" [(ngModel)]=\"expensesDetails.physicalTarget\" #physicalTarget=\"ngModel\"  />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"label\">Expenditure incurred during last financial year</label>\r\n                                            <input type=\"number\" class=\"form-control\" name=\"expenditureIncurredDuringLastFinYear\" placeholder=\"Expenditure incurred\" [(ngModel)]=\"expensesDetails.expenditureIncurredDuringLastFinYear\" #expenditureIncurredDuringLastFinYear=\"ngModel\"  />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                                Cancel\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addExpenseDetails(expensesDetails)\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n                 aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n                <div class=\"modal-dialog modal-lg\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                            <h4 class=\"modal-title\">Claim Details</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\" style=\"max-height:500px\">\r\n                            <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                                <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                                    <app-claimviewdata #child [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                                </div>\r\n                                <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                                    <accordion>\r\n                                        <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                            <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                                <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                            </div>\r\n                                            <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                                <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                            </div>\r\n                                        </accordion-group>\r\n                                    </accordion>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                                    Ok\r\n                                </button>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./src/app/alc/fund-request/fund-request.component.ts":
/*!************************************************************!*\
  !*** ./src/app/alc/fund-request/fund-request.component.ts ***!
  \************************************************************/
/*! exports provided: FundRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRequestComponent", function() { return FundRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../claimviewdata/claimviewdata.component */ "./src/app/alc/claimviewdata/claimviewdata.component.ts");
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








var FundRequestComponent = /** @class */ (function () {
    function FundRequestComponent(router, dataService, userService, sanitizer) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimData = {};
        this.date = new Date();
        this.GetClaimVisible = false;
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.selectedClaimList = [];
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.sumofAmount = 0;
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.sumofAmountVisible = false;
        this.claim = {};
        this.expenseTypeValid = true;
        this.viewExpenses = false;
        this.rowIndex = -1;
        this.fundRequestExpensesData = {};
        this.expensesDetailsArray = [];
        this.expensesDetails = {};
        this.fundRequestType = "claims";
        this.showErrorMessage1 = false;
        this.fundRequiredValid = true;
        this.attachmentList = [];
        this.educationList = [];
        this.commentsValid = true;
    }
    FundRequestComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][this.claimType]);
    };
    FundRequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
    FundRequestComponent.prototype.ngOnInit = function () {
        // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getWorkerTypeDetails();
        this.getBoardDetails();
        this.getExpenses();
        this.getClaimTypesMasterDetails();
        this.boardId = 0;
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'claimMasterId',
            textField: 'claimName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.locationSettings = {
            singleSelection: false,
            idField: 'blockSno',
            textField: 'blockName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    FundRequestComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    FundRequestComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    FundRequestComponent.prototype.GetClaims = function () {
        if (this.boardId > 0) {
            this.boardIdValid = true;
            var claimMaster = void 0;
            var locationId = void 0;
            if (this.claimMasterIds.length > 0) {
                claimMaster = this.claimMasterIds.map(function (e) {
                    return e.claimMasterId;
                }).join(', ');
            }
            else {
                claimMaster = 0;
            }
            if (this.locationsIds.length > 0) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ');
            }
            else {
                locationId = 0;
            }
            this.sumofAmount = 0;
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    };
    FundRequestComponent.prototype.getAllApprovalClaims = function (deptUserid, type, boardId, claimTypeIds, locationsIds) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.sumofAmountVisible = _this.claimsData.length > 0 ? true : false;
        });
    };
    FundRequestComponent.prototype.GetAlcInformation = function (deptUserid) {
        var _this = this;
        this.dataService
            .GetAlcInformation(deptUserid)
            .subscribe(function (data) {
            _this.alcDetails = data;
            if (_this.alcDetails.approvedClaimsAmount > _this.alcDetails.balanceOfTheAmount)
                _this.AmountShortfall = (_this.alcDetails.approvedClaimsAmount - _this.alcDetails.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
        });
    };
    FundRequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
            _this.getLocationDetailsByRloId(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    FundRequestComponent.prototype.SubmitRequest = function () {
        var _this = this;
        debugger;
        if (this.boardId > 0) {
            this.boardIdValid = true;
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                if (this.fundRequestType == "claims") {
                    this.selectedClaims();
                    this.showErrorMessage = false;
                    if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
                        this.claimData.createdBy = this.userService.user.deptUserid;
                        this.claimData.fundRequestDate = new Date();
                        this.claimData.creadtedDate = new Date();
                        this.claimData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                        this.claimData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].FundRequestFromALC;
                        this.claimData.aLCComments = this.alcComments.trim();
                        this.claimData.fundRequestClaims = this.selectedClaimList;
                        var locationId = void 0;
                        if (this.locationsIds.length > 0) {
                            locationId = this.locationsIds.map(function (e) {
                                return e.blockSno;
                            });
                        }
                        else {
                            locationId = this.LocationList.map(function (e) {
                                return e.blockSno;
                            });
                        }
                        this.claimData.locations = locationId;
                        this.claimData.boardId = this.boardId;
                        this.claimData.fundRequested = this.sumofAmount;
                        //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                        if (confirm("Are you sure to proceed ")) {
                            this.dataService
                                .saveFundRequesteClaims(this.claimData)
                                .then(function (data) {
                                if (data) {
                                    _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                    _this.sumofAmount = 0;
                                }
                                else {
                                    _this.successMessage = "Invalid transaction";
                                }
                                _this.successModal.show();
                            });
                            //}
                        }
                    }
                    else {
                        this.showErrorMessage = true;
                    }
                }
                else if (this.fundRequestType == "expenses") {
                    this.showErrorMessage1 = false;
                    if (this.expensesDetailsArray != null && this.expensesDetailsArray.length > 0) {
                        this.fundRequestExpensesData.createdBy = this.userService.user.deptUserid;
                        this.fundRequestExpensesData.fundRequestDate = new Date();
                        this.fundRequestExpensesData.createdDate = new Date();
                        this.fundRequestExpensesData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                        this.fundRequestExpensesData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].FundRequestFromALC;
                        this.fundRequestExpensesData.boardId = this.boardId;
                        var sumofExpenses = 0;
                        for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                            sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                        }
                        this.fundRequestExpensesData.fundRequested = sumofExpenses;
                        this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                        this.fundRequestExpensesData.alcComments = this.alcComments.trim();
                        if (confirm("Are you sure to proceed ")) {
                            this.dataService
                                .saveFundRequestExpenses(this.fundRequestExpensesData)
                                .then(function (data) {
                                if (data) {
                                    _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                    _this.sumofAmount = 0;
                                }
                                else {
                                    _this.successMessage = "Invalid transaction";
                                }
                                _this.successModal.show();
                            });
                        }
                    }
                    else {
                        this.showErrorMessage1 = true;
                    }
                }
            }
            else
                this.commentsValid = false;
        }
        else
            this.boardIdValid = false;
    };
    FundRequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        if (this.fundRequestType == "claims") {
            this.GetClaims();
            this.alcComments = "";
        }
        else if (this.fundRequestType == "expenses") {
            this.clearExpenses();
            this.expensesDetails = {};
            this.expensesDetailsArray = [];
            this.alcComments = "";
        }
    };
    FundRequestComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    };
    FundRequestComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    FundRequestComponent.prototype.selectedClaims = function () {
        var res = this.claimsData.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: 1 });
        }
    };
    FundRequestComponent.prototype.selectedLocationsList = function (args) {
        this.selectedLocations = args.target.options[args.target.selectedIndex];
    };
    FundRequestComponent.prototype.selectedClaimTypesList = function (args) {
        this.selectedClaimTypes = args.target.options[args.target.selectedIndex];
    };
    FundRequestComponent.prototype.getBoardDetails = function () {
        var _this = this;
        this.dataService
            .getBoardMasterData()
            .subscribe(function (data) {
            _this.boardList = data;
        });
    };
    FundRequestComponent.prototype.getWorkerTypeDetails = function () {
        var _this = this;
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe(function (data) {
            _this.WorkerTypeList = data;
        });
    };
    FundRequestComponent.prototype.getLocationDetailsByRloId = function (id) {
        var _this = this;
        this.dataService
            .getLocationsMasterData(id)
            .subscribe(function (data) {
            _this.LocationList = data;
        });
    };
    FundRequestComponent.prototype.getClaimTypesMasterDetails = function () {
        var _this = this;
        this.dataService
            .getClaimTypesMasterData()
            .subscribe(function (data) {
            _this.claimTypesList = data;
        });
    };
    FundRequestComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    FundRequestComponent.prototype.cancelClick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    FundRequestComponent.prototype.selectBoardChange = function () {
        debugger;
        this.GetClaimVisible = false;
        this.claimsData = [];
    };
    FundRequestComponent.prototype.getExpenses = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].ExpensesType)
            .subscribe(function (data) {
            _this.expensesTypesLov = data;
        });
    };
    FundRequestComponent.prototype.openModel = function () {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    };
    FundRequestComponent.prototype.addExpenseDetails = function (details) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        this.expensesDetailsArray.splice(this.rowIndex, 1);
                        details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                        this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
                    }
                }
            }
            this.expensesDetails = {};
        }
    };
    FundRequestComponent.prototype.editExpenseDetails = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    FundRequestComponent.prototype.removeExpenseDetails = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    };
    FundRequestComponent.prototype.radioChange = function (id) {
        this.claimsData = [];
        this.expensesDetailsArray = [];
        if (id == 1) {
            //if (this.fundRequestType == "claims") {
            //    alert("claims");
            //}
            this.fundRequestType = "claims";
            //this.GetClaimVisible = true;
            this.viewExpenses = false;
        }
        if (id == 2) {
            // if (this.fundRequestType == "expenses") {
            //    alert("expenses");
            //}
            this.fundRequestType = "expenses";
            this.GetClaimVisible = false;
            this.viewExpenses = true;
        }
    };
    FundRequestComponent.prototype.validateExpenseDetails = function (details) {
        //debugger;
        var isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) {
            this.expenseTypeValid = isValid = false;
        }
        if (details.fundsRequired == undefined) {
            this.fundRequiredValid = isValid = false;
        }
        //if (details.registrationRollNo == undefined || details.registrationRollNo == "") { this.registrationNoValid = isValid = false; }
        //if (details.institutionContact != undefined && details.institutionContact.toString().length > 0 && details.institutionContact.toString().length < 10) {
        //    this.institutionContactValid = isValid = false;
        //}
        //if (details.year == undefined) { this.educationYearValid = isValid = false; }
        //if (this.viewuploadNonMarriage) {
        //    if (this.eduNonMarriage.length == 0) { this.uploadNonMarriageValid = isValid = false }
        //}
        //if (this.educertificates.length == 0) { this.uploadCertificatetValid = isValid = false }
        //if (this.eduSelfAttested.length == 0) { this.uploadselfattestedValid = isValid = false }
        //console.log(details.dateofAdmission);
        //if (details.dateofAdmission == undefined) { this.dateOfAdmissionValid = isValid = false; }
        //if (details.presentlyReading == undefined || details.presentlyReading <= 0) { this.presentlyReadingValid = isValid = false; }
        return isValid;
    };
    FundRequestComponent.prototype.clearExpenses = function () {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], FundRequestComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], FundRequestComponent.prototype, "expensesModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], FundRequestComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child'),
        __metadata("design:type", _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__["ClaimviewdataComponent"])
    ], FundRequestComponent.prototype, "child", void 0);
    FundRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-request',
            template: __webpack_require__(/*! ./fund-request.component.html */ "./src/app/alc/fund-request/fund-request.component.html"),
            styles: [__webpack_require__(/*! ./fund-request.component.css */ "./src/app/alc/fund-request/fund-request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], FundRequestComponent);
    return FundRequestComponent;
}());



/***/ }),

/***/ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/alc/fund-requested-claims/fund-requested-claims.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/alc/fund-requested-claims/fund-requested-claims.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Fund Request Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"fundRequest\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestTypeName\">Fund Request Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO</mfDefaultSorter>\r\n                                    </th>\r\n                                    <!--<th>\r\n                                        <mfDefaultSorter by=\"requestedBy\">Requested By</mfDefaultSorter>\r\n                                    </th>-->\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNumber\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"boardName\">Board Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"requestDateString\">Request Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,requestedBy: searchText,fundRequestNumber: searchText,\r\n                                    refernceNumber: searchText, requestDateString: searchText, amount: searchText, statusName: searchText, boardName: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a *ngIf=\"data.statusId!=20\" (click)=\"onreviewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-eye\"></i></a>\r\n                                        <a *ngIf=\"data.statusId==20\" (click)=\"onEditreviewClick(data)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.fundRequestTypeName}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td><a (click)=\"getDetails(data.fundRequestTypeName,data.fundRequestNumber)\">{{data.fundRequestNumber}}</a> </td>\r\n                                    <td>{{data.boardName}}</td>\r\n                                    <td>{{data.requestDateString}}</td>\r\n                                    <td>{{data.amount }}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"fundRequest.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n\r\n\r\n<div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{headertext}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              \r\n                   \r\n                        <table id=\"id1\" *ngIf=\"!isclaimDta\" class=\"table table-striped table-bordered\">\r\n                              \r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Item</th>\r\n                                    <th>Fund Required</th>\r\n                                    <th>Physical Target</th>\r\n                                    <th>Expenditure incurred during last financial year</th>\r\n                                </tr>\r\n                            </thead>\r\n\r\n                            <tbody>\r\n                                <tr *ngFor=\"let expense of expensesData\">\r\n                                    <td>{{expense.itemName}}</td>\r\n                                    <td>{{expense.fundsRequired}}</td>\r\n                                    <td>{{expense.physicalTarget}}</td>\r\n                                    <td>{{expense.expenditureIncurredDuringLastFinYear}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    \r\n                        <table id=\"datatable_fixed_column\" *ngIf=\"isclaimDta\" class=\"table table-striped table-bordered\"\r\n                               width=\"100%\">\r\n\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>SSIN</th>\r\n                                    <th>Beneficiary Name</th>\r\n                                    <th>Beneficiary Type</th>\r\n                                    <th>Claim Reference No.</th>\r\n                                    <th>Claim Category</th>\r\n                                    <th>Submission Date</th>\r\n                                    <th>Amount</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n\r\n                            <tbody>\r\n                                <tr *ngFor=\"let claim of claimsReqData\">\r\n                                    <td>{{claim.ssin}}</td>\r\n                                    <td>{{claim.benName}}</td>\r\n                                    <td>{{claim.benType}}</td>\r\n                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                    <td>{{claim.submittedDateString}}</td>\r\n                                    <td>{{claim.approvedAmount}}</td>\r\n                                    <td>{{claim.paymentStatusName}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                        <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                    </td>\r\n\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                    Ok\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/alc/fund-requested-claims/fund-requested-claims.component.ts ***!
  \******************************************************************************/
/*! exports provided: FundRequestedClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRequestedClaimsComponent", function() { return FundRequestedClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.fundRequest = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
        this.isclaimDta = false;
    }
    FundRequestedClaimsComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['alc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, mode: "view", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['alc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: "view", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
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
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.page, this.pageSize);
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
    FundRequestedClaimsComponent.prototype.getFundRequestedClaims = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, pageNo, pageSize)
            .subscribe(function (data) {
            //this.fundRequest = data;
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    FundRequestedClaimsComponent.prototype.onEditreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['alc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, mode: "edit", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['alc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: "edit", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].fundworkflow }], { skipLocationChange: true });
    };
    FundRequestedClaimsComponent.prototype.changepage = function (page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.page, this.pageSize);
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
            template: __webpack_require__(/*! ./fund-requested-claims.component.html */ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.html"),
            styles: [__webpack_require__(/*! ./fund-requested-claims.component.css */ "./src/app/alc/fund-requested-claims/fund-requested-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FundRequestedClaimsComponent);
    return FundRequestedClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/payment-processing/payment-processing.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/alc/payment-processing/payment-processing.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/payment-processing/payment-processing.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/alc/payment-processing/payment-processing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Payment Processing </h2>\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                   \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Payment Processing Date: </strong>{{date | date: 'dd/MM/yyyy'}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section style=\"display:none\">\r\n                                    <header>Fund Status at RLO</header>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\" style=\"display:none\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-10\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" (click)=\"GetFundRequestDetails()\" checked=\"checked\">\r\n                                                    <i></i>Payment Against Release Order\r\n                                                </label>\r\n                                                <label class=\"radio\" style=\"margin-top:10px !important; font-weight:normal!important\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" (click)=\"PaymentWithoutReleaseOrder()\" disabled=\"disabled\">\r\n                                                    <i></i>Payment without Release Order\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section *ngIf=\"GetFundVisible\">\r\n                                    <div class=\"row\" style=\"margin-top:15px;\">\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label>Release Order</label>\r\n                                            <select class=\"form-control\" name=\"selectedFundRequestId\" [(ngModel)]=\"selectedFundRequestId\" (change)=\"selectChange($event)\">\r\n                                                <option value=\"0\" selected>Choose an Option</option>\r\n                                                <option value=\"{{data.fundReleaseOrderHdrId}}\" *ngFor=\"let data of fundRequest\">Release Order No:{{data.fundReleaseOrderHdrId}} - Fund Request No:{{data.fundRequestNumber}}</option>\r\n\r\n                                            </select>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"row\" id=\"daterangeloe\" *ngIf=\"ReleaseDetailsVisible\">\r\n                                        <section>\r\n                                            <div class=\"row\" style=\"margin-top:15px;\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>Release Order Date: </strong>{{releaseDate}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>Release Order No: </strong>{{selectedFundRequestId}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"col col-6 selectContainer\">\r\n                                        <a class=\"btn btn-primary\" (click)=\"GetClaims()\"> Get Claims </a>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div *ngIf=\"GetClaimVisible\" class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                              \r\n\r\n\r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <div class=\"ssv-search\">\r\n                                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                                            <input [(ngModel)]=\"nameSearchText\" placeholder=\"Name Search..\" class=\"advancedSearchTextbox\">\r\n                                            <input type=\"text\" [(ngModel)]=\"mobileSearchText\" placeholder=\"Mobile number Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"10\" maxlength=\"10\">\r\n                                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                                        </div>\r\n                                        <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\">\r\n\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><input type=\"checkbox\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>\r\n                                                    <th>SSIN</th>\r\n                                                    <th>Beneficiary Name</th>\r\n                                                    <th>Beneficiary Type</th>\r\n                                                    <th>Claim Reference No.</th>\r\n                                                    <th>Claim Category</th>\r\n                                                    <th>Submission Date</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <!--<tbody *ngIf=\"claimsData.length==0\">\r\n            <tr >\r\n                <td colspan=\"8\">\r\n                    No data available\r\n                </td>\r\n            </tr>\r\n        </tbody>-->\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let claim of claimsData\">\r\n                                                    <td class=\"\">\r\n                                                        <input type=\"checkbox\" [(ngModel)]=\"claim.selected\" (change)=\"checkIfAllSelected();\">\r\n                                                    </td>\r\n                                                    <td>{{claim.ssin}}</td>\r\n                                                    <td>{{claim.benName}}</td>\r\n                                                    <td>{{claim.benType}}</td>\r\n                                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                    <td>{{claim.submittedDateString}}</td>\r\n                                                    <td>{{claim.approvedAmount}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"8\"></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n\r\n            <form class=\"smart-form\" *ngIf=\"GetClaimVisible\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a id=\"btnSava\" class=\"btn btn-primary\" (click)=\"SubmitRequest()\"> Submit </a>\r\n                    <a class=\"btn btn-danger\" (click)=\"CancelClick()\"> Cancel</a>\r\n                </footer>\r\n            </form>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <!--<button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>-->\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/payment-processing/payment-processing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/alc/payment-processing/payment-processing.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentProcessingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProcessingComponent", function() { return PaymentProcessingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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






var PaymentProcessingComponent = /** @class */ (function () {
    function PaymentProcessingComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimData = {};
        this.date = new Date();
        this.GetClaimVisible = false;
        this.showErrorMessage = false;
        this.selectedClaimList = [];
        this.GetFundVisible = false;
        this.ReleaseDetailsVisible = false;
        this.isSearch = false;
    }
    PaymentProcessingComponent.prototype.ngOnInit = function () {
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetFundRequestDetails();
    };
    PaymentProcessingComponent.prototype.GetClaims = function () {
        if (!this.GetFundVisible)
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe);
        else if (this.GetFundVisible)
            this.getFundRequestClaims(this.selectedFundRequestId);
    };
    PaymentProcessingComponent.prototype.getAllApprovalClaims = function (deptUserid, type) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.GetFundVisible = false;
            if (_this.isSearch)
                _this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.GetAlcInformation = function (deptUserid) {
        var _this = this;
        this.dataService
            .GetAlcInformation(deptUserid)
            .subscribe(function (data) {
            _this.alcDetails = data;
            if (_this.alcDetails.approvedClaimsAmount > _this.alcDetails.balanceOfTheAmount)
                _this.AmountShortfall = (_this.alcDetails.approvedClaimsAmount - _this.alcDetails.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
        });
    };
    PaymentProcessingComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    PaymentProcessingComponent.prototype.SubmitRequest = function () {
        var _this = this;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.paymentProcessingDate = new Date();
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].PaymentProcessingbyALC;
            this.claimData.paymentProcessingClaims = this.selectedClaimList; // this.normalizeArray(this.claimsList1, ClaimConstants.Education.toString());//this.claimsList;
            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            //teja
            if (this.GetFundVisible)
                this.claimData.fundrequestId = this.selectedFundRequestId;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveProcessingClaims(this.claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Payment processing successfully submitted";
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
    };
    PaymentProcessingComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.CancelClick();
    };
    PaymentProcessingComponent.prototype.selectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
        }
    };
    PaymentProcessingComponent.prototype.checkIfAllSelected = function () {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
    };
    PaymentProcessingComponent.prototype.selectedClaims = function () {
        var res = this.claimsData.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId });
        }
    };
    //teja
    PaymentProcessingComponent.prototype.GetFundRequestDetails = function () {
        this.GetClaimVisible = false;
        this.GetFundRequestsByUserID(this.userService.user.deptUserid, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Release);
    };
    PaymentProcessingComponent.prototype.GetFundRequestsByUserID = function (id, statusId) {
        var _this = this;
        this.dataService
            .getReleaseFundRequest(id, statusId)
            .subscribe(function (data) {
            _this.fundRequest = data;
            _this.GetFundVisible = true;
        });
    };
    PaymentProcessingComponent.prototype.PaymentWithoutReleaseOrder = function () {
        this.releaseDate = "";
        this.selectedFundRequestId = "";
        this.GetFundVisible = false;
        this.GetClaimVisible = false;
        this.ReleaseDetailsVisible = false;
    };
    PaymentProcessingComponent.prototype.selectChange = function (args) {
        var _this = this;
        this.selectedFundRequestId = args.target.value;
        if (this.fundRequest != null) {
            this.ReleaseDetailsVisible = true;
            this.fundRequest.forEach(function (x) {
                if (x.fundReleaseOrderHdrId == _this.selectedFundRequestId) {
                    _this.releaseDate = x.fundReleaseDateString;
                }
            });
        }
        this.claimsData = [];
        this.selectedAll = false;
    };
    PaymentProcessingComponent.prototype.getFundRequestClaims = function (fundRequestId) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundReleaseClaimsByFundReleaseHdrId(fundRequestId)
            .subscribe(function (data) {
            _this.claimsData = data; //.fundClaimList;
            _this.GetClaimVisible = true;
            if (_this.isSearch)
                _this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    PaymentProcessingComponent.prototype.CancelClick = function () {
        this.router.navigate(['alc/paymentprocessedlist']);
    };
    PaymentProcessingComponent.prototype.GetResults = function () {
        this.isSearch = true;
        this.GetClaims();
    };
    PaymentProcessingComponent.prototype.GetSearchResults = function () {
        this.isSearch = false;
        if (this.claimsData != null && this.claimsData.length > 0) {
            if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.nameSearchText != null && this.nameSearchText != undefined) || (this.mobileSearchText != null && this.mobileSearchText != undefined)) {
                //const results = Object.assign([], this.claimsData); 
                //if (results != null && results.length > 0) {
                //    this.resultsData = results.filter(x => x.ssin == this.ssinSearchText.trim() || x.benName == this.nameSearchText.trim() || x.benMobileNumber == this.mobileSearchText.trim());
                //    this.claimsData = this.resultsData;
                //   // console.log(this.claimsData);
                //}
                if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                    this.strSSIN = this.ssinSearchText.trim();
                else
                    this.strSSIN = "0";
                if (this.nameSearchText != null && this.nameSearchText != undefined && this.nameSearchText != "")
                    this.strName = this.nameSearchText.trim();
                else
                    this.strName = "0";
                if (this.mobileSearchText != null && this.mobileSearchText != undefined && this.mobileSearchText != "")
                    this.strMobile = this.mobileSearchText.trim();
                else
                    this.strMobile = "0";
                if (!this.GetFundVisible)
                    this.getAllApprovalSearchClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.strSSIN, this.strName, this.strMobile);
                else if (this.GetFundVisible)
                    this.getFundRequestSearchClaims(this.selectedFundRequestId, this.strSSIN, this.strName, this.strMobile);
            }
        }
    };
    PaymentProcessingComponent.prototype.getAllApprovalSearchClaims = function (deptUserid, type, ssin, benName, benMobile) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getAllApprovalSearchClaims(deptUserid, type, ssin, benName, benMobile)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.GetFundVisible = false;
            //if (this.isSearch)
            //    this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    PaymentProcessingComponent.prototype.getFundRequestSearchClaims = function (fundRequestId, ssin, benName, benMobile) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundRequestSearchClaims(fundRequestId, ssin, benName, benMobile)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            //if (this.isSearch)
            //    this.GetSearchResults();
            console.log(_this.claimsData);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], PaymentProcessingComponent.prototype, "successModal", void 0);
    PaymentProcessingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-processing',
            template: __webpack_require__(/*! ./payment-processing.component.html */ "./src/app/alc/payment-processing/payment-processing.component.html"),
            styles: [__webpack_require__(/*! ./payment-processing.component.css */ "./src/app/alc/payment-processing/payment-processing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PaymentProcessingComponent);
    return PaymentProcessingComponent;
}());



/***/ }),

/***/ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Payment Process Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"paymentProcessData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentProcessingID\">Process Id</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">Rlo office</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestId\">Release Order No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRequestNo\">Fund Request No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"statusName\">Status</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentProcessingDateString\">Payment Processed Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"paymentReleaseDateString\">Payment Release Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {paymentProcessingID: searchText,rloOfficeName: searchText,fundRequestId: searchText,statusName:searchText\r\n                                    }; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onreviewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-eye\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.paymentProcessingID}}</td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.fundRequestId}}</td>\r\n                                    <td>{{data.fundRequestNo}}</td>\r\n                                    <td>{{data.statusName}}</td>\r\n                                    <td>{{data.paymentProcessingDateString}}</td>\r\n                                    <td>{{data.paymentReleaseDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"paymentProcessData.length > 0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                            </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentprocessedlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentprocessedlistComponent", function() { return PaymentprocessedlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var PaymentprocessedlistComponent = /** @class */ (function () {
    //Paging props end
    function PaymentprocessedlistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentProcessData = [];
        //Paging props start
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    PaymentprocessedlistComponent.prototype.ngOnInit = function () {
        debugger;
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize); //ClaimStatus.PaymentProcessingbyALC
    };
    PaymentprocessedlistComponent.prototype.getPaymentProcessDetails = function (id, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPaymentProcessDetails(id, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            //this.paymentProcessData = data;
            _this.paymentProcessData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentprocessedlistComponent.prototype.onreviewClick = function (item) {
        debugger;
        this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view", statusId: item.statusId }], { skipLocationChange: true });
    };
    PaymentprocessedlistComponent.prototype.changepage = function (page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize);
    };
    PaymentprocessedlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paymentprocessedlist',
            template: __webpack_require__(/*! ./paymentprocessedlist.component.html */ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.html"),
            styles: [__webpack_require__(/*! ./paymentprocessedlist.component.css */ "./src/app/alc/paymentprocessedlist/paymentprocessedlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PaymentprocessedlistComponent);
    return PaymentprocessedlistComponent;
}());



/***/ }),

/***/ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/alc/pending-approval-claims/pending-approval-claims.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/alc/pending-approval-claims/pending-approval-claims.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Pending  </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"forwardedDateString\">Forwarded Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText, forwardedDateString: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user, i)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.forwardedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                </tr>\r\n\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/alc/pending-approval-claims/pending-approval-claims.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PendingApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingApprovalClaimsComponent", function() { return PendingApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    PendingApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    PendingApprovalClaimsComponent.prototype.onreviewClick = function (item, index) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "pending", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, claimAmount: item.claimAmount, chronologicalOrder: index }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "pending", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.totalRows = data.rowCount;
            _this.claimsData = data.results;
            console.log(_this.claimsData);
        });
    };
    //page change event
    PendingApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", page, this.pageSize);
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ForwardtoALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ForwardtoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    PendingApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-approval-claims',
            template: __webpack_require__(/*! ./pending-approval-claims.component.html */ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./pending-approval-claims.component.css */ "./src/app/alc/pending-approval-claims/pending-approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PendingApprovalClaimsComponent);
    return PendingApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Interest Calculation</h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form\">\r\n                            <div>\r\n                                <!--<header>Provident Fund</header>-->\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6 \">\r\n                                                <label class=\"label\">District <span [style.color]=\"!districtValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"district\" id=\"ddlDistrict\"\r\n                                                        #district=\"ngModel\" [(ngModel)]=\"pfInterest.districtId\"\r\n                                                        (change)=\"districtChange($event.target.value)\"\r\n                                                        [ngClass]=\"{'invalid-data': district.invalid && ( !districtValid || district.touched ),\r\n                                        'valid-data': hospital && hospitalId.valid  }\"\r\n                                                        required>\r\n                                                    <option value=\"-1\" disabled selected>Choose a District</option>\r\n                                                    <option value=\"0\">ALL</option>\r\n                                                    <option value=\"{{dis.districtId}}\" *ngFor=\"let dis of districts\">{{dis.districtName}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"district.invalid && (!districtValid || districtValid.touched)\">\r\n                                                    <span style=\"color: red;\">Select a District </span>\r\n                                                </div>\r\n                                            </section>\r\n                                            <section class=\"col col-6\">\r\n                                                <label class=\"label\">Location Code <span [style.color]=\"!locationCodeValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"locationCode\" id=\"locationCode\"\r\n                                                        #locationCode=\"ngModel\" [(ngModel)]=\"pfInterest.locationId\"\r\n                                                        [ngClass]=\"{'invalid-data': locationCode.invalid && ( !locationCodeValid || locationCode.touched ), 'valid-data': locationCodeValid && locationCode.valid  }\"\r\n                                                        required [disabled]=\"pfInterest.districtId == 0\">\r\n                                                    <option value=\"-1\" disabled selected>Choose a Location Code</option>\r\n                                                    <option value=\"0\" [selected]=\"pfInterest.districtId == 0\">ALL</option>\r\n                                                    <option value=\"{{block.blockSno}}\" *ngFor=\"let block of blocks\">{{block.locationCode}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"locationCode.invalid && (!locationCodeValid || locationCode.touched)\">\r\n                                                    <span style=\"color: red;\">Select a Location Code </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-3\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\" (change)=\"radioChange(1)\" />\r\n                                                    <i></i>SSIN Number\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-3\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" (change)=\"radioChange(2)\" />\r\n                                                    <i></i>PF Number\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6\">\r\n                                                <!--<span [style.color]=\"!ssinFromValid?'red':''\"><b>*</b></span>-->\r\n                                                <label class=\"label\">SSIN/PF From </label>\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"ssinFrom\" placeholder=\"SSIN/PF From\" [(ngModel)]=\"pfInterest.ssinFrom\" NumbersOnly maxlength=\"50\">\r\n                                                </label>\r\n                                                <!--<div *ngIf=\"!ssinFromValid\">\r\n                                                    <span style=\"color: red;\">Enter SSIN From </span>\r\n                                                </div>-->\r\n                                            </section>\r\n                                            <section class=\"col col-6\">\r\n                                                <label class=\"label\">SSIN/PF To </label>\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"ssinTo\" placeholder=\"SSIN/PF To\" [(ngModel)]=\"pfInterest.ssinTo\" NumbersOnly maxlength=\"50\">\r\n                                                </label>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <section class=\"col col-6 \">\r\n                                                <label class=\"label\">Financial Year <span [style.color]=\"!financialYearValid?'red':''\"><b>*</b></span></label>\r\n                                                <select class=\"form-control select\" name=\"financialYear\" id=\"ddlFinancialYear\"\r\n                                                        #financialYear=\"ngModel\" [(ngModel)]=\"pfInterest.financialYearId\"\r\n                                                        [ngClass]=\"{'invalid-data': financialYear.invalid && ( !financialYearValid || financialYear.touched ),\r\n                                        'valid-data': financialYear && financialYearValid.valid  }\"\r\n                                                        required>\r\n                                                    <option value=\"0\" disabled>Choose a Financial Year</option>\r\n                                                    <option value=\"{{year.financialYearId}}\" *ngFor=\"let year of financialYears\">{{year.financialYear}}</option>\r\n                                                </select> <i></i>\r\n\r\n                                                <div *ngIf=\"financialYear.invalid && (!financialYearValid || financialYear.touched)\">\r\n                                                    <span style=\"color: red;\">Select a Financial Year </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-primary\" (click)=\"calculatePFInterest()\"> Calculate</a>\r\n                                <a class=\"btn btn-danger\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.ts ***!
  \******************************************************************************/
/*! exports provided: PfinterestcalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfinterestcalculationComponent", function() { return PfinterestcalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.interestType = 1;
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
            debugger;
            this.pfInterest.interestType = this.interestType;
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
    PfinterestcalculationComponent.prototype.radioChange = function (id) {
        this.interestType = id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], PfinterestcalculationComponent.prototype, "successModal", void 0);
    PfinterestcalculationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfinterestcalculation',
            template: __webpack_require__(/*! ./pfinterestcalculation.component.html */ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.html"),
            styles: [__webpack_require__(/*! ./pfinterestcalculation.component.css */ "./src/app/alc/pfinterestcalculation/pfinterestcalculation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PfinterestcalculationComponent);
    return PfinterestcalculationComponent;
}());



/***/ }),

/***/ "./src/app/alc/refer-claims/refer-claims.component.css":
/*!*************************************************************!*\
  !*** ./src/app/alc/refer-claims/refer-claims.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/refer-claims/refer-claims.component.html":
/*!**************************************************************!*\
  !*** ./src/app/alc/refer-claims/refer-claims.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Pending</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDate\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"referDateString\">Refer Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText, referDateString:searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.referDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/refer-claims/refer-claims.component.ts":
/*!************************************************************!*\
  !*** ./src/app/alc/refer-claims/refer-claims.component.ts ***!
  \************************************************************/
/*! exports provided: ReferClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferClaimsComponent", function() { return ReferClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
    ReferClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReferClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/referralreview', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "referal", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "referal", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].RefertoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            //this.claimsData = data;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    ReferClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].RefertoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
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
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.RefertoALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].RefertoALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ReferClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-claims',
            template: __webpack_require__(/*! ./refer-claims.component.html */ "./src/app/alc/refer-claims/refer-claims.component.html"),
            styles: [__webpack_require__(/*! ./refer-claims.component.css */ "./src/app/alc/refer-claims/refer-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReferClaimsComponent);
    return ReferClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/alc/referral-approval-claims/referral-approval-claims.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/alc/referral-approval-claims/referral-approval-claims.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2> Approved </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"approvedDateString\">Approved Date</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText, submittedDateString: searchText, approvedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.approvedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/alc/referral-approval-claims/referral-approval-claims.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReferralApprovalClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralApprovalClaimsComponent", function() { return ReferralApprovalClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var ReferralApprovalClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ReferralApprovalClaimsComponent(router, dataService, userService) {
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
    ReferralApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReferralApprovalClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralApprovalClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ReferralApprovalClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ReferralApprovalClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralApprovalClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/referralreview', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "approve", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferralApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "referallapprove", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferralApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReferralApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralApprovalClaimsComponent.prototype.GetResults = function () {
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferApprovedbyALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferApprovedbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ReferralApprovalClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-approval-claims',
            template: __webpack_require__(/*! ./referral-approval-claims.component.html */ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.html"),
            styles: [__webpack_require__(/*! ./referral-approval-claims.component.css */ "./src/app/alc/referral-approval-claims/referral-approval-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReferralApprovalClaimsComponent);
    return ReferralApprovalClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/alc/referral-reject-claims/referral-reject-claims.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/alc/referral-reject-claims/referral-reject-claims.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2> Rejected </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rejectedDateString\">Rejected Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText, rejectedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.rejectedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/alc/referral-reject-claims/referral-reject-claims.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReferralRejectClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralRejectClaimsComponent", function() { return ReferralRejectClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var ReferralRejectClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ReferralRejectClaimsComponent(router, dataService, userService) {
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
    ReferralRejectClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/referralreview', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "reject" }], { skipLocationChange: true });
    };
    ReferralRejectClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReferralRejectClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralRejectClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ReferralRejectClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "referalreject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferralRejectClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ReferralRejectClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedRejectbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralRejectClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReferralRejectClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedRejectbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralRejectClaimsComponent.prototype.GetResults = function () {
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedRejectbyALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedRejectbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize);
        }
    };
    ReferralRejectClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-reject-claims',
            template: __webpack_require__(/*! ./referral-reject-claims.component.html */ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.html"),
            styles: [__webpack_require__(/*! ./referral-reject-claims.component.css */ "./src/app/alc/referral-reject-claims/referral-reject-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ReferralRejectClaimsComponent);
    return ReferralRejectClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/referral-review/referral-review.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/alc/referral-review/referral-review.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/alc/referral-review/referral-review.component.html":
/*!********************************************************************!*\
  !*** ./src/app/alc/referral-review/referral-review.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n\r\n                    <h2>Claim View </h2>\r\n\r\n\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset disabled=\"true\">\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\" [checked]=\"claim.providentFundDetails != null\"><i></i>PF(Provident Fund)</label>\r\n                                        <!--<label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\"><i></i>PF(Provident Fund)</label>-->\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Health & Family\" [checked]=\"claim.healthFamilyDetails != null\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <!--<div class=\"col col-3\">\r\n                <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death & Diasability\"><i></i>Death & Diasability</label>\r\n            </div>-->\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death\" [checked]=\"claim.deathDetails != null\"><i></i>Death</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Disability\" [checked]=\"claim.disabilityDetails != null\"><i></i>Disability</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Education\" [checked]=\"claim.educationDetails != null\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong> {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.providentFundDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>PF Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.educationDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution : </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Educational Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.healthFamilyDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==1\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD'\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n                                <header>Health & Family Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.disabilityDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Disability Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.deathDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Death Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Time Line</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <!-- row -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                            <div class=\"well well-sm\">\r\n                                                <div class=\"smart-timeline\">\r\n                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                            <div class=\"smart-timeline-icon\">\r\n                                                                <i class=\"fa fa-user\"></i>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-time\">\r\n                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-content\">\r\n                                                                <p>\r\n                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                </p>\r\n                                                                <p>\r\n                                                                    {{item.actionComments}}\r\n                                                                </p>\r\n                                                            </div>\r\n                                                        </li>\r\n\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isShowClaimsHistory\">\r\n                                <header>Claims History</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewHistory()\" class=\"smart-form-link\">View Claims History</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset>\r\n\r\n                                <section>\r\n                                    <label>Approved Amount<span [style.color]=\"!approvedAmountValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"input\">\r\n                                        <input type=\"text\" name=\"approvedAmount\" [disabled]=\"!isApprovedAmountDisable\" [(ngModel)]=\"review.approvedAmount\" placeholder=\"Approved Amount\" NumbersOnly>\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>ALC Comments<span [style.color]=\"!alcCommentsValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!isVisable\" name=\"alcComments\" [(ngModel)]=\"review.alcComments\"\r\n                                                  #alcComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': alcComments.invalid && (!alcCommentsValid || alcComments.touched), 'valid-data': alcComments.valid && alcCommentsValid}\"\r\n                                                  required>\r\n                                        </textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"alcComments.invalid && (!alcCommentsValid ||alcComments.touched)\">\r\n                                        <span style=\"color: red;\">ALC Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Exception Comments</label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!isVisable\" name=\"exceptionComments\" [(ngModel)]=\"review.exceptionComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-warning\" *ngIf=\"isVisable\" (click)=\"saveClaim(9,1,'rejected')\"> Reject</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isVisable\" (click)=\"saveClaim(11,0,'approved')\">Approve</a>\r\n                                <a class=\"btn btn-primary\" *ngIf=\"isVisable\" (click)=\"saveClaim(10,1,'send back')\"> Send back</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</section>\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Attachment Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                        Ok\r\n                    </button>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claims History</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <table class=\"table table-striped\" [mfData]=\"claimsHistoryData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Claim Reference No.\r\n                                </th>\r\n                                <th>\r\n                                    Submission Date\r\n                                </th>\r\n                                <th>\r\n                                    Amount\r\n                                </th>\r\n                                <th>\r\n                                    Approved Amount\r\n                                </th>\r\n                                <th>\r\n                                    Status\r\n                                </th>\r\n                                <th>\r\n                                    Submitted By\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                <td>{{user.claimRefernceNo}}</td>\r\n                                <td>{{user.submittedDateString}}</td>\r\n                                <td>{{user.claimAmount}}</td>\r\n                                <td>{{user.approvedAmount}}</td>\r\n                                <td>{{user.statusName}}</td>\r\n                                <td>{{user.submittedByName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td colspan=\"6\"></td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"historyModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/referral-review/referral-review.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alc/referral-review/referral-review.component.ts ***!
  \******************************************************************/
/*! exports provided: ReferralReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralReviewComponent", function() { return ReferralReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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







var ReferralReviewComponent = /** @class */ (function () {
    function ReferralReviewComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.claimsTrack = {};
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.viewMetWithAnAccident = false;
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
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
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReferralReviewComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
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
                _this.review.alcComments = _this.claim.educationDetails.alcComments;
                _this.review.exceptionComments = _this.claim.educationDetails.exceptionComments;
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
                _this.review.approvedAmount = _this.claim.healthFamilyDetails.approvedAmount;
                _this.review.alcComments = _this.claim.healthFamilyDetails.alcComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
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
                _this.review.alcComments = _this.claim.disabilityDetails.alcComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
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
                _this.review.alcComments = _this.claim.deathDetails.alcComments;
                _this.review.exceptionComments = _this.claim.deathDetails.exceptionComments;
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["PFTypeOfClaim"].Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.alcComments = _this.claim.providentFundDetails.alcComments;
                _this.review.exceptionComments = _this.claim.providentFundDetails.exceptionComments;
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
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
        });
    };
    ReferralReviewComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
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
    ReferralReviewComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReferralReviewComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReferralReviewComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral;
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
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReferralReviewComponent.prototype.cancelclick = function () {
        if (this.mode == "referal") {
            this.router.navigate(['alc/referclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/referralsendback']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/referralreject']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/referralapproval']);
        }
    };
    ReferralReviewComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        return isValid;
    };
    ReferralReviewComponent.prototype.getApprovalPremission = function (id, type) {
        this.dataService
            .GetApprovalPremission(id, type)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ReferralReviewComponent.prototype.formatDate = function (date) {
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
    ReferralReviewComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ReferralReviewComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('historyModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ReferralReviewComponent.prototype, "historyModal", void 0);
    ReferralReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-review',
            template: __webpack_require__(/*! ./referral-review.component.html */ "./src/app/alc/referral-review/referral-review.component.html"),
            styles: [__webpack_require__(/*! ./referral-review.component.css */ "./src/app/alc/referral-review/referral-review.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ReferralReviewComponent);
    return ReferralReviewComponent;
}());



/***/ }),

/***/ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Sent Back </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"sentBackDateString\">Sent back Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText, claimAmount: searchText,submittedDateString: searchText, sentBackDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.sentBackDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReferralSendbackClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralSendbackClaimsComponent", function() { return ReferralSendbackClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var ReferralSendbackClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ReferralSendbackClaimsComponent(router, dataService, userService) {
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
    ReferralSendbackClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReferralSendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/referralreview', { claimId: item.claimId, claimType: item.claimType, tranctionId: item.claimRefernceNo, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferralSendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "referalsendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral }], { skipLocationChange: true });
    };
    ReferralSendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ReferralSendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralSendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ReferralSendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferSendbackbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralSendbackClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReferralSendbackClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferSendbackbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralSendbackClaimsComponent.prototype.GetResults = function () {
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferSendbackbyALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].ReferSendbackbyALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    ReferralSendbackClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-sendback-claims',
            template: __webpack_require__(/*! ./referral-sendback-claims.component.html */ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.html"),
            styles: [__webpack_require__(/*! ./referral-sendback-claims.component.css */ "./src/app/alc/referral-sendback-claims/referral-sendback-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReferralSendbackClaimsComponent);
    return ReferralSendbackClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/reject-claims/reject-claims.component.css":
/*!***************************************************************!*\
  !*** ./src/app/alc/reject-claims/reject-claims.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/reject-claims/reject-claims.component.html":
/*!****************************************************************!*\
  !*** ./src/app/alc/reject-claims/reject-claims.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Rejected </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rejectedDateString\">Rejected Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText,claimAmount: searchText,submittedDateString: searchText, rejectedDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.rejectedDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/reject-claims/reject-claims.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/alc/reject-claims/reject-claims.component.ts ***!
  \**************************************************************/
/*! exports provided: RejectClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectClaimsComponent", function() { return RejectClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize;
    }
    RejectClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    RejectClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "reject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "reject", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow }], { skipLocationChange: true });
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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].RejectfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    //page change event
    RejectClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].RejectfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, "0", "0", page, this.pageSize);
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.RejectfromALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].RejectfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["pagination"].pageSize);
        }
    };
    RejectClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reject-claims',
            template: __webpack_require__(/*! ./reject-claims.component.html */ "./src/app/alc/reject-claims/reject-claims.component.html"),
            styles: [__webpack_require__(/*! ./reject-claims.component.css */ "./src/app/alc/reject-claims/reject-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RejectClaimsComponent);
    return RejectClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/reviewclaims/reviewclaims.component.css":
/*!*************************************************************!*\
  !*** ./src/app/alc/reviewclaims/reviewclaims.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/alc/reviewclaims/reviewclaims.component.html":
/*!**************************************************************!*\
  !*** ./src/app/alc/reviewclaims/reviewclaims.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n\r\n                    <h2>Claim View</h2>\r\n\r\n\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n                    \r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <div style=\"text-align:right\" *ngIf=\"enableSearchStudentLink\">\r\n                                <a (click)=\"searchLinkClick()\" class=\"smart-form-link\">Search Student</a>\r\n                            </div>\r\n                            <div *ngIf=\"isVisibleCOExceptions\">\r\n                                <header>Chronological Order Exception</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div [innerHTML]=\"claimCOExceptionDetails\"></div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"isVisibleClaimExceptions\">\r\n                                <header>Exceptions</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div [innerHTML]=\"claimExceptionDetails\"></div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <fieldset disabled=\"true\">\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"PF\" [checked]=\"claim.providentFundDetails != null\"><i></i>PF(Provident Fund)</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Health & Family\" [checked]=\"claim.healthFamilyDetails != null\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Death\" [checked]=\"claim.deathDetails != null\"><i></i>Death</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Disability\" [checked]=\"claim.disabilityDetails != null\"><i></i>Disability</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\" value=\"Education\" [checked]=\"claim.educationDetails != null\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong>  {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong> {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.providentFundDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>PF Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.educationDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution: </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Educational Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.healthFamilyDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD'\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n                                <header>Health & Family Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.disabilityDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Disability Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.deathDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                                <header>Death Attachments</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewAttachment()\" class=\"smart-form-link\">View All Attachments</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <header>Time Line</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <!-- row -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                            <div class=\"well well-sm\">\r\n                                                <div class=\"smart-timeline\">\r\n                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                            <div class=\"smart-timeline-icon\">\r\n                                                                <i class=\"fa fa-user\"></i>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-time\">\r\n                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                            </div>\r\n                                                            <div class=\"smart-timeline-content\">\r\n                                                                <p>\r\n                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                </p>\r\n                                                                <p>\r\n                                                                    {{item.actionComments}}\r\n                                                                </p>\r\n                                                            </div>\r\n                                                        </li>\r\n\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <div *ngIf=\"isShowClaimsHistory\">\r\n                                <header>Claims History</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <a (click)=\"viewHistory()\" class=\"smart-form-link\">View Claims History</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <!--(March-15-2019 ) committed this code based on suman/client request-->\r\n                            <!--<div *ngIf=\"isInvalidNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"benficiaryNominee\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th></th>\r\n                                                        <th>\r\n                                                            Name\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Relationship with applicant\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Gender\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            DOB\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Age (Years)\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Share Allocation\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Bank Name\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Bank Account No.\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            Branch Name\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            IFSC Code\r\n                                                        </th>\r\n                                                        <th></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngIf=\"benficiaryNominee.length==0\"><td colspan=\"11\">No nominee details</td></tr>\r\n                                                    <tr *ngFor=\"let nomi of mf.data; let i=index;\">\r\n                                                        <td class=\"\">\r\n                                                            <input type=\"checkbox\" [(ngModel)]=\"nomi.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"mappingNominee(nomi);\">\r\n                                                        </td>\r\n                                                        <td>{{nomi.benNomineeName}}</td>\r\n                                                        <td>{{nomi.benNomineeRelation}}</td>\r\n                                                        <td>{{nomi.benNomineeGender}}</td>\r\n                                                        <td>{{nomi.dob | date: 'dd/MM/yyyy'}}</td>\r\n                                                        <td>{{nomi.benNomineeAge}}</td>\r\n                                                        <td>{{nomi.benNomineeShareAllocation}}</td>\r\n                                                        <td>{{nomi.benNomineeBankName}}</td>\r\n                                                        <td>{{nomi.benNomineeBankAccNo}}</td>\r\n                                                        <td>{{nomi.benNomineeBankBranch}}</td>\r\n                                                        <td>{{nomi.benNomineeBankIfscCode}}</td>\r\n                                                        <td>\r\n                                                            <a class=\"btn btn-labeled btn-primary\" (click)=\"editNomineeDetails(nomi)\" style=\"margin-right:5px;\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</a>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"11\"></td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>-->\r\n                            <div>\r\n                                <header>Hardcopy Received</header>\r\n                                <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                    <div *ngFor=\"let pf of pfCheckList\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\"\r\n                                                   name=\"pfOptions\" [disabled]=\"true\"\r\n                                                   value=\"{{pf.checkListDtlId}}\"\r\n                                                   [checked]=\"pf.checked\" />\r\n                                            {{pf.name}}\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div *ngIf=\"claim.educationDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <div *ngFor=\"let edu of educationCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"eduOptions\" [disabled]=\"true\"\r\n                                                       value=\"{{edu.checkListDtlId}}\"\r\n                                                       [checked]=\"edu.checked\" />\r\n                                                {{edu.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <div *ngFor=\"let health of healthCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"healthOptions\" [disabled]=\"true\"\r\n                                                       value=\"{{health.checkListDtlId}}\"\r\n                                                       [checked]=\"health.checked\" />\r\n                                                {{health.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <div *ngFor=\"let dis of disabilityCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" name=\"disOptions\" value=\"{{dis.checkListDtlId}}\" [disabled]=\"true\" [checked]=\"dis.checked\" />\r\n                                                {{dis.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                    <div class=\"form-group\">\r\n                                        <div *ngFor=\"let death of deathCheckList\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\"\r\n                                                       name=\"deathOptions\" [disabled]=\"true\" [checked]=\"death.checked\" value=\"{{death.checkListDtlId}}\" />\r\n                                                {{death.name}}\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Approved Amount<span [style.color]=\"!approvedAmountValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"input\">\r\n                                        <input type=\"text\" name=\"approvedAmount\" [disabled]=\"!isApprovedAmountDisable\" [(ngModel)]=\"review.approvedAmount\" placeholder=\"Approved Amount\" NumbersOnly>\r\n                                    </label>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>ALC Comments<span [style.color]=\"!alcCommentsValid?'red':''\"><b>*</b></span></label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!isVisable\" name=\"alcComments\" [(ngModel)]=\"review.alcComments\"\r\n                                                  #alcComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': alcComments.invalid && (!alcCommentsValid || alcComments.touched), 'valid-data': alcComments.valid && alcCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"alcComments.invalid && (!alcCommentsValid ||alcComments.touched)\">\r\n                                        <span style=\"color: red;\">ALC Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <label>Exception Comments</label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"exceptionComments\" [disabled]=\"!isVisable\" [(ngModel)]=\"review.exceptionComments\"></textarea>\r\n                                    </label>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <fieldset *ngIf=\"isCOExceptionCommentsReq\">\r\n                                <section>\r\n                                    <label>Chronological Order Exception Comments <span [style.color]=\"!coexceptionCommentsValid?'red':''\"><b>*</b></span> </label>\r\n                                    <label class=\"textarea textarea-resizable\">\r\n                                        <textarea rows=\"3\" class=\"custom-scroll\" name=\"chronologicOrderExceptionComments\" [disabled]=\"!isVisable\" [(ngModel)]=\"review.alcChronologicalOrderComments\"\r\n                                                  #chronologicOrderExceptionComments=\"ngModel\"\r\n                                                  [ngClass]=\"{'invalid-data': chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid || chronologicOrderExceptionComments.touched), 'valid-data': chronologicOrderExceptionComments.valid && coexceptionCommentsValid}\"\r\n                                                  required></textarea>\r\n                                    </label>\r\n                                    <div *ngIf=\"chronologicOrderExceptionComments.invalid && (!coexceptionCommentsValid ||chronologicOrderExceptionComments.touched)\">\r\n                                        <span style=\"color: red;\">Chronological Order Exception Comments is required </span>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <footer class=\"modal-footer\">\r\n                                <a class=\"btn btn-warning\" *ngIf=\"isInvalidNominee\" (click)=\"nomineeModal.show()\"> Map Nominee</a>\r\n                                <a class=\"btn btn-warning\" *ngIf=\"isVisable\" (click)=\"saveClaim(6,1,'rejected')\"> Reject</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isVisable\" (click)=\"saveClaim(7,0,'approved')\">Approve</a>\r\n                                <a class=\"btn btn-primary\" (click)=\"saveClaim(5,1,'send back')\" *ngIf=\"isVisable\"> Send Back</a>\r\n                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</section>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n               \r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Attachment Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                        Ok\r\n                    </button>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<div bsModal #historyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n        aria-hidden=\"true\" backdrop=\"static\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"historyModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claims History</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <table class=\"table table-striped\" [mfData]=\"claimsHistoryData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Claim Reference No.\r\n                                </th>\r\n                                <th>\r\n                                    Submission Date\r\n                                </th>\r\n                                <th>\r\n                                    Amount\r\n                                </th>\r\n                                <th>\r\n                                    Approved Amount\r\n                                </th>\r\n                                <th>\r\n                                    Status\r\n                                </th>\r\n                                <th>\r\n                                    Submitted By\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                <td>{{user.claimRefernceNo}}</td>\r\n                                <td>{{user.submittedDateString}}</td>\r\n                                <td>{{user.claimAmount}}</td>\r\n                                <td>{{user.approvedAmount}}</td>\r\n                                <td>{{user.statusName}}</td>\r\n                                <td>{{user.submittedByName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td colspan=\"6\"></td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"historyModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{typeOfMode}} Nominee Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset id=\"divAddNomineeDetails\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Name <span [style.color]=\"!nomineeNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeName\" class=\"form-control\" placeholder=\"Nominee Name\" [(ngModel)]=\"benNomineenDetails.benNomineeName\" maxlength=\"100\"\r\n                                       #nomineeName=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeNameValid , 'valid-data':nomineeNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeNameValid\">\r\n                                    <span style=\"color: red;\">Nominee Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Relationship with applicant <span [style.color]=\"!relationshipValid?'red':''\"><b>*</b></span></label>\r\n                                <select class=\"form-control select\" name=\"dependentId\" [(ngModel)]=\"benNomineenDetails.relationshipID\"\r\n                                        #dependentId=\"ngModel\" (change)=\"selectRelationship($event,benNomineenDetails)\"\r\n                                        [ngClass]=\"{'invalid-data': !relationshipValid, 'valid-data': relationshipValid }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose an option</option>\r\n                                    <option value=\"1\">Father</option>\r\n                                    <option value=\"2\">Mother</option>\r\n                                    <option value=\"3\">Spouse</option>\r\n                                    <option value=\"4\">Son</option>\r\n                                    <option value=\"5\">Daughter</option>\r\n                                </select>\r\n                                <div *ngIf=\"!relationshipValid\">\r\n                                    <span style=\"color: red;\">Relationship with applicant is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Gender <span [style.color]=\"!genderValid?'red':''\"><b>*</b></span></label>\r\n                                <select class=\"form-control select\" name=\"genderId\" [(ngModel)]=\"benNomineenDetails.benNomineeGender\"\r\n                                        #genderId=\"ngModel\"\r\n                                        [ngClass]=\"{'invalid-data': !genderValid ,  'valid-data': genderValid  }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose an option</option>\r\n                                    <option value=\"Male\">Male</option>\r\n                                    <option value=\"Female\">Female</option>\r\n                                </select>\r\n                                <div *ngIf=\"!genderValid \">\r\n                                    <span style=\"color: red;\">Gender is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Date of Birth <span [style.color]=\"!nomineeDOBValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeDOB\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                       placeholder=\"DD/MM/YYYY\" [(ngModel)]=\" benNomineenDetails.dob\" #nomineeDOB=\"ngModel\" [maxDate]=\"maxDate\"\r\n                                       value=\"{{ benNomineenDetails.dob | date: 'dd/MM/yyyy' }}\" readonly\r\n                                       [ngClass]=\"{'invalid-data':!nomineeDOBValid, 'valid-data': nomineeDOBValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeDOBValid\">\r\n                                    <span style=\"color: red;\">Nominee Date of Birth is required </span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Share Allocation  <span [style.color]=\"!nomineeShareValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"number\" name=\"nomineeShare\" class=\"form-control\" placeholder=\"Share Allocation\" [(ngModel)]=\"benNomineenDetails.benNomineeShareAllocation\" maxlength=\"3\" max=\"100\" min=\"1\"\r\n                                       #nomineeShare=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeShareValid , 'valid-data': nomineeShareValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeShareValid\">\r\n                                    <span style=\"color: red;\">Share Allocation is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Bank Name <span [style.color]=\"!nomineeBankNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeBankName\" class=\"form-control\" placeholder=\"Nominee Bank Name\" [(ngModel)]=\"benNomineenDetails.benNomineeBankName\"\r\n                                       #nomineeBankName=\"ngModel\" [ngClass]=\"{'invalid-data': !nomineeBankNameValid, 'valid-data':nomineeBankNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBankNameValid\">\r\n                                    <span style=\"color: red;\">Nominee Bank Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Nominee Bank Account <span [style.color]=\"!nomineeBankAccountValid?'red':''\"><b>*</b></span> </label>\r\n                                <input type=\"text\" name=\"nomineeBankAccount\" class=\"form-control\" placeholder=\"Nominee Bank Account \" [(ngModel)]=\"benNomineenDetails.benNomineeBankAccNo\"\r\n                                       minlength=\"9\" maxlength=\"18\" NumbersOnly #nomineeBankAccount=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !nomineeBankAccountValid, 'valid-data': nomineeBankAccountValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBankAccountValid\">\r\n                                    <span style=\"color: red;\">Nominee Bank Account is required </span>\r\n                                </div>\r\n                                <div *ngIf=\"nomineeBankAccount.invalid && (nomineeBankAccount.errors.minlength)\">\r\n                                    <span style=\"color: red;\">Invalid Bank Account Number </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Branch Name <span [style.color]=\"!nomineeBranchNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeBankBranch\" class=\"form-control\" placeholder=\"Branch Name\" [(ngModel)]=\"benNomineenDetails.benNomineeBankBranch\"\r\n                                       #nomineeBankBranch=\"ngModel\" [ngClass]=\"{'invalid-data': !nomineeBranchNameValid , 'valid-data': nomineeBranchNameValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeBranchNameValid\">\r\n                                    <span style=\"color: red;\">Branch Name is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">IFSC Code <span [style.color]=\"!nomineeIFSCCodeValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"nomineeIFSCCode\" class=\"form-control\" placeholder=\"IFSC Code\" [(ngModel)]=\"benNomineenDetails.benNomineeBankIfscCode\"\r\n                                       maxlength=\"11\" #nomineeIFSCCode=\"ngModel\" [ngClass]=\"{'invalid-data':!nomineeIFSCCodeValid, 'valid-data': nomineeIFSCCodeValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!nomineeIFSCCodeValid \">\r\n                                    <span style=\"color: red;\">IFSC Code is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"lgModal.hide()\">\r\n                    Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNomineeDetails(benNomineenDetails)\">\r\n                    {{typeOfMode}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n<div bsModal #nomineeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"nomineeModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{typeOfMode}} Nominee Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset>\r\n                    <section>\r\n                        <div class=\"row\">\r\n                            <table class=\"table table-striped table-bordered\"  width=\"100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th>\r\n                                            Name\r\n                                        </th>\r\n                                        <th>\r\n                                            Relationship with applicant\r\n                                        </th>\r\n                                        <th>\r\n                                            Gender\r\n                                        </th>\r\n                                        <th>\r\n                                            DOB\r\n                                        </th>\r\n                                        <th>\r\n                                            Share Allocation\r\n                                        </th>\r\n                                        <th>\r\n                                            Bank Name\r\n                                        </th>\r\n                                        <th>\r\n                                            Bank Account No.\r\n                                        </th>\r\n                                        <th>\r\n                                            Branch Name\r\n                                        </th>\r\n                                        <th>\r\n                                            IFSC Code\r\n                                        </th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let nomi of benficiaryNominee; let i=index;\">\r\n                                        <td class=\"\">\r\n                                            <input type=\"checkbox\" [checked]=\"nomi.selected\" [(ngModel)]=\"nomi.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"selectNominee(nomi);\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <span>{{nomi.benNomineeName}}</span>\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <!--<input type=\"text\" name=\"{{nomi.benNomineeName}}\" [(ngModel)]=\"nomi.benNomineeName\" maxlength=\"100\"\r\n                                                    required>-->\r\n                                                    <input type=\"text\" name=\"{{nomi.benNomineeName}}\" class=\"form-control\" placeholder=\"Nominee Name\" [(ngModel)]=\"nomi.benNomineeName\" maxlength=\"100\"\r\n                                                           [ngClass]=\"{'invalid-data': !nomineeNameValid , 'valid-data':nomineeNameValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeNameValid\">\r\n                                                    <span style=\"color: red;\">Nominee Name is required </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <span>{{nomi.benNomineeRelation}}</span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <span>{{nomi.benNomineeGender}}</span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    {{nomi.dob | date: 'dd/MM/yyyy'}}\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"{{nomi.dob}}\" autocomplete=\"off\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                           placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"nomi.dob\" [maxDate]=\"maxDate\"\r\n                                                           value=\"{{ nomi.dob | date: 'dd/MM/yyyy' }}\" readonly\r\n                                                           [ngClass]=\"{'invalid-data':!nomineeDOBValid, 'valid-data': nomineeDOBValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeDOBValid\">\r\n                                                    <span style=\"color: red;\">Nominee Date of Birth is required </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <span>{{nomi.benNomineeShareAllocation}}</span>\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    {{nomi.benNomineeBankName}}\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"{{nomi.benNomineeBankName}}\" class=\"form-control\" placeholder=\"Nominee Bank Name\" [(ngModel)]=\"nomi.benNomineeBankName\"\r\n                                                           [ngClass]=\"{'invalid-data': !nomineeBankNameValid, 'valid-data':nomineeBankNameValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeBankNameValid\">\r\n                                                    <span style=\"color: red;\">Nominee Bank Name is required </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    {{nomi.benNomineeBankAccNo}}\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"{{nomi.benNomineeBankAccNo}}\" class=\"form-control\" placeholder=\"Nominee Bank Account \" [(ngModel)]=\"nomi.benNomineeBankAccNo\"\r\n                                                           minlength=\"9\" maxlength=\"18\" NumbersOnly \r\n                                                           [ngClass]=\"{'invalid-data': !nomineeBankAccountValid, 'valid-data': nomineeBankAccountValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeBankAccountValid\">\r\n                                                    <span style=\"color: red;\">Nominee Bank Account is required </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"!nomineeBankAccountMinlengthValid\">\r\n                                                    <span style=\"color: red;\">Invalid Bank Account Number </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    {{nomi.benNomineeBankBranch}}\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"{{nomi.benNomineeBankBranch}}\" class=\"form-control\" placeholder=\"Branch Name\" [(ngModel)]=\"nomi.benNomineeBankBranch\"\r\n                                                            [ngClass]=\"{'invalid-data': !nomineeBranchNameValid , 'valid-data': nomineeBranchNameValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeBranchNameValid\">\r\n                                                    <span style=\"color: red;\">Branch Name is required </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <section *ngIf=\"!nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    {{nomi.benNomineeBankIfscCode}}\r\n                                                </label>\r\n                                            </section>\r\n                                            <section *ngIf=\"nomi.isEdit\">\r\n                                                <label class=\"input\">\r\n                                                    <input type=\"text\" name=\"{{nomi.benNomineeBankIfscCode}}\" class=\"form-control\" placeholder=\"IFSC Code\" [(ngModel)]=\"nomi.benNomineeBankIfscCode\"\r\n                                                           maxlength=\"11\" [ngClass]=\"{'invalid-data':!nomineeIFSCCodeValid, 'valid-data': nomineeIFSCCodeValid}\"\r\n                                                           required>\r\n                                                </label>\r\n                                                <div *ngIf=\"!nomineeIFSCCodeValid \">\r\n                                                    <span style=\"color: red;\">IFSC Code is required </span>\r\n                                                </div>\r\n                                            </section>\r\n                                        </td>\r\n                                        <td>\r\n                                            <a *ngIf=\"!nomi.isEdit\" (click)=\"editFieldValue(i,nomi)\" title=\"Edit\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                            <a *ngIf=\"nomi.isEdit\" (click)=\"saveFieldValue(i,nomi)\" title=\"Save\" class=\"txt-color-blue\"><i class=\"glyphicon glyphicon-save\"></i></a>\r\n                                            <a *ngIf=\"nomi.isEdit\" (click)=\"cancelFieldValue(i,nomi)\" title=\"Cancel\" class=\"txt-color-blue\"><i class=\"glyphicon glyphicon-adjust\"></i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </section>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"nomineeModal.hide()\">\r\n                    Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"mapNominee()\">\r\n                    Map Nominee\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/reviewclaims/reviewclaims.component.ts":
/*!************************************************************!*\
  !*** ./src/app/alc/reviewclaims/reviewclaims.component.ts ***!
  \************************************************************/
/*! exports provided: ReviewclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewclaimsComponent", function() { return ReviewclaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.claimsTrack = {};
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
        this.isInvalidNominee = false;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
        this.isVisibleCOExceptions = false;
        this.enableSearchStudentLink = true;
        //Validation Nominee variables
        this.nomineeNameValid = true;
        this.relationshipValid = true;
        this.genderValid = true;
        this.nomineeDOBValid = true;
        this.nomineeShareValid = true;
        this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = true;
        this.nomineeBankAccountMinlengthValid = true;
        this.nomineeBranchNameValid = true;
        this.nomineeIFSCCodeValid = true;
        this.benficiaryNominee = [];
        this.benficiaryNomineeDetails = [];
        this.benNomineenDetails = {};
        this.rowIndex = -1;
        this.successValue = "review";
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            debugger;
            _this.claimId = params["claimId"];
            _this.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimConstants"][params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            _this.claimAmount = params["claimAmount"];
            if (_this.mode != "pending") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
                _this.enableSearchStudentLink = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                _this.enableSearchStudentLink = true;
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
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            debugger;
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
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.educationDetails.claimAmount;
                }
                else
                    _this.review.approvedAmount = _this.claim.educationDetails.approvedAmount;
                _this.review.alcComments = _this.claim.educationDetails.alcComments;
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
                if (_this.claim.educationDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.educationDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
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
                _this.review.alcComments = _this.claim.healthFamilyDetails.alcComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                //healthClaimExceptionDetails
                if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.healthFamilyDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.healthFamilyDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                _this.review.alcComments = _this.claim.disabilityDetails.alcComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
                //disabilityClaimExceptionDetails
                if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.disabilityDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.disabilityDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
                //check list
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
                }
                else
                    _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.alcComments = _this.claim.deathDetails.alcComments;
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
                if (_this.claim.deathDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.deathDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["PFTypeOfClaim"].Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.alcComments = _this.claim.providentFundDetails.alcComments;
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
                if (_this.claim.providentFundDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.providentFundDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Nominee || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Agent && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].CA && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Lwfc && _this.claim.reasonForApply == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ReasonForApplyAgent"].OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
            if (_this.claim.entryPoint == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["EntryPoint"].Nominee) {
                //this.showSendBack = false;
                if (_this.mode == "pending") {
                    //(March-15-2019 ) committed this code based on suman/client request
                    if (_this.claim.nomineeId == null || _this.claim.nomineeId == 0) {
                        _this.isInvalidNominee = true;
                        _this.getBeneficiaryNomineeDetails(_this.claim.benSno);
                        _this.rowIndex = _this.rowIndex + _this.benficiaryNominee.length;
                    }
                }
            }
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
        if (this.successValue == "review")
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["WorkflowTrans"].workflow;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.alcChronologicalOrderComments; // "You are not following the chronological order";
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
                if (this.isInvalidNominee) {
                    debugger;
                    this.review.benficiaryNomineeDetails = this.benficiaryNominee;
                }
            }
            if (mode == "approved") {
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
                    _this.successValue = "review";
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReviewclaimsComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['alc/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/sendbackclaims']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/rejectclaims']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/approvalclaims']);
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['alc/claimstatus']);
        }
        else if (this.mode == "search") {
            this.router.navigate(['alc/searchstudent'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        var sharePercentage = 0;
        var count = 0;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
            //(March-15-2019 )ALC should reject if the nominee name is still not matching
            //if (this.claim.entryPoint == EntryPoint.Nominee) {
            //    if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
            //        this.isInvalidNominee = true;
            //        alert("Invalid  Nominee");
            //        isValid = false;
            //    }
            //}
        }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        if ((this.review.alcChronologicalOrderComments == undefined || this.review.alcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
        //Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        if (this.isInvalidNominee) {
            debugger;
            if (this.benficiaryNominee.length > 0) {
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
                }
                if (sharePercentage != 100) {
                    alert("Share Allocation Accepts only 100%");
                    isValid = false;
                }
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    if (this.benficiaryNominee[i].isMappingNominee) {
                        count++;
                    }
                }
                if (count != 1) {
                    alert("Please select one nominee to mapping ");
                    isValid = false;
                }
            }
            else {
                alert("Please map one nominee to this claim ");
                isValid = false;
            }
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.getApprovalPremission = function (id, type) {
        this.dataService
            .GetApprovalPremission(id, type)
            .subscribe(function (data) {
            console.log(data);
        });
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
    ReviewclaimsComponent.prototype.getHealthCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimCheckList"].HealthFamilyCheckList)
            .subscribe(function (data) {
            _this.healthCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getEducationCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimCheckList"].EducationCheckList)
            .subscribe(function (data) {
            _this.educationCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDisabilityCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimCheckList"].DisabilityCheckList)
            .subscribe(function (data) {
            _this.disabilityCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDeathCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimCheckList"].DeathCheckList)
            .subscribe(function (data) {
            _this.deathCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getPFCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__["ClaimCheckList"].PFCheckList)
            .subscribe(function (data) {
            _this.pfCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.searchLinkClick = function () {
        window.open('/inspector/searchstudent', 'searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    };
    ReviewclaimsComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            debugger;
            _this.benficiaryNominee = data;
            //this.benficiaryNomineeDetails = this.benficiaryNominee.slice(0, this.benficiaryNominee.length-1);
        });
    };
    ReviewclaimsComponent.prototype.selectNominee = function (item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;
    };
    //editNomineeDetails(details: BenNominee) {
    //    debugger;
    //    this.typeOfMode = "Edit";
    //    this.benNomineenDetails = details;
    //    this.rowIndex = this.benficiaryNominee.indexOf(details);
    //    this.lgModal.show();
    //}
    //addNomineeDetails(details: BenNominee) {
    //    debugger;
    //    if (this.validateNomineeDetails(details)) {
    //        if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == -1 && this.rowIndex == -1) {
    //            details.createdBy = this.userService.user.deptUserid;
    //            details.createdDate = new Date();
    //            // details.dob = new Date(this.dobNominee);
    //            this.benficiaryNominee.push(details);
    //            this.lgModal.hide();
    //        }
    //        else if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) != -1 && this.rowIndex == -1) {
    //            alert("already added please enter another nominee details"); return;
    //        }
    //        else {
    //            if (this.rowIndex != -1) {
    //                //this.benficiaryNominee.splice(this.rowIndex, 1);
    //                if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == this.rowIndex) {
    //                    //this.benficiaryNominee.push(details);
    //                    this.rowIndex = -1;
    //                    this.lgModal.hide();
    //                }
    //            }
    //        }
    //        this.benNomineenDetails = {} as BenNominee;
    //    }
    //}
    ReviewclaimsComponent.prototype.validateNomineeDetails = function (details) {
        var isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        //if (details.relationshipID == undefined || details.relationshipID <= 0) { this.relationshipValid = isValid = false; }
        //if (details.benNomineeGender == undefined || details.benNomineeGender == "") { this.genderValid = isValid = false; }
        if (details.dob == undefined) {
            this.nomineeDOBValid = isValid = false;
        }
        //if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") { this.nomineeShareValid = isValid = false; }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") {
            this.nomineeBankNameValid = isValid = false;
        }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        else if (details.benNomineeBankAccNo.length < 9) {
            this.nomineeBankAccountMinlengthValid = isValid = false;
        }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") {
            this.nomineeBranchNameValid = isValid = false;
        }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") {
            this.nomineeIFSCCodeValid = isValid = false;
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.editFieldValue = function (index, field) {
        debugger;
        field.isEdit = true;
        if (field.dob != null && field.dob != undefined)
            field.dob = new Date(field.dob);
    };
    ReviewclaimsComponent.prototype.cancelFieldValue = function (index, field) {
        debugger;
        //field.benNomineeName = this.benficiaryNomineeDetails[index].benNomineeName;
        //field.dob = new Date(this.benficiaryNomineeDetails[index].dob);
        //field.benNomineeBankName = this.benficiaryNomineeDetails[index].benNomineeBankName;
        //field.benNomineeBankAccNo = this.benficiaryNomineeDetails[index].benNomineeBankAccNo;
        //field.benNomineeBankBranch = this.benficiaryNomineeDetails[index].benNomineeBankBranch;
        //field.benNomineeBankIfscCode = this.benficiaryNomineeDetails[index].benNomineeBankIfscCode;
        field.isEdit = false;
        this.getBeneficiaryNomineeDetails(this.claim.benSno);
    };
    ReviewclaimsComponent.prototype.saveFieldValue = function (index, field) {
        if (this.validateNomineeDetails(field)) {
            field.isEdit = false;
            //this.pfCollectionDetailsList.splice(index, 1);
            //this.pfCollectionDetailsList.push(field);
        }
    };
    ReviewclaimsComponent.prototype.mapNominee = function () {
        var _this = this;
        debugger;
        var count = 0;
        if (this.benficiaryNominee.length > 1) {
            for (var i = 0; i < this.benficiaryNominee.length; i++) {
                if (this.benficiaryNominee[i].isMappingNominee)
                    count++;
            }
        }
        if (count > 1) {
            alert("Please map only one nominee");
            return;
        }
        else {
            this.benNomineenDetails = this.benficiaryNominee.find(function (x) { return x.isMappingNominee == true; });
            this.benNomineenDetails.claimId = this.claimId;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateNomineeDetails(this.benNomineenDetails)
                    .then(function (data) {
                    _this.getClaimDetailsByClaimId(_this.claimId, _this.tranctionId, _this.claimType);
                    _this.isInvalidNominee = false;
                    _this.claimExceptionDetails = "";
                    _this.isVisibleClaimExceptions = false;
                    _this.successValue = "nominee";
                    _this.successMessage = "Nominee Details Updated successfully";
                    _this.successModal.show();
                });
            }
            this.nomineeModal.hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('historyModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "historyModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lgModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "lgModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nomineeModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ReviewclaimsComponent.prototype, "nomineeModal", void 0);
    ReviewclaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewclaims',
            template: __webpack_require__(/*! ./reviewclaims.component.html */ "./src/app/alc/reviewclaims/reviewclaims.component.html"),
            styles: [__webpack_require__(/*! ./reviewclaims.component.css */ "./src/app/alc/reviewclaims/reviewclaims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_4__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/alc/reviewfundrequest/reviewfundrequest.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.html":
/*!************************************************************************!*\
  !*** ./src/app/alc/reviewfundrequest/reviewfundrequest.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Fund Request View </h2>\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails.fundRequestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section style=\"display:none\">\r\n                                    <header>  Fund Status at RLO</header>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </section>\r\n\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails.boardName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails.claimTypes}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n\r\n\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\" style=\"margin-top:10px !important\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\" style=\"margin-top:15px;\">\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Board<span [style.color]=\"!boardIdValid?'red':''\"><b>*</b></span></label>\r\n\r\n                                            <select class=\"form-control\" name=\"boardId\" [(ngModel)]=\"boardId\">\r\n                                                <option value=\"\" selected>Select</option>\r\n                                                <option value=\"{{board.boardId}}\" *ngFor=\"let board of boardList\">{{board.boardName}}</option>\r\n                                            </select>\r\n\r\n                                        </div>\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Category</label>\r\n\r\n                                            <select class=\"form-control\" name=\"claimTypeIds\" [(ngModel)]=\"claimTypeIds\">\r\n                                                <option value=\"0\" selected>All</option>\r\n                                                <option value=\"{{type.claimTypeId}}\" *ngFor=\"let type of claimTypesList\">{{type.claimTypeName}}</option>\r\n\r\n                                            </select>\r\n\r\n                                        </div>\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Location</label>\r\n                                            <select class=\"form-control\" name=\"locationsIds\" [(ngModel)]=\"locationsIds\">\r\n                                                <option value=\"0\" selected>All</option>\r\n                                                <option value=\"{{location.blockSno}}\" *ngFor=\"let location of LocationList\">{{location.blockName}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section *ngIf=\"editmode\">\r\n                                    <div class=\"col col-6 selectContainer\">\r\n                                        <a class=\"btn btn-primary\" (click)=\"ShowAddClaims()\"> Add Claims </a>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n\r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <form class=\"smart-form smart-form-main\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th *ngIf=\"editmode\"><input type=\"checkbox\" name=\"selectedAll\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>\r\n                                                        <th>SSIN</th>\r\n                                                        <th>Beneficiary Name</th>\r\n                                                        <th>Beneficiary Type</th>\r\n                                                        <th>Claim Reference No.</th>\r\n                                                        <th>Claim Category</th>\r\n                                                        <th>Submission Date</th>\r\n                                                        <th>Amount</th>\r\n                                                        <th>Status</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let claim of mf.data\">\r\n                                                        <td class=\"\" *ngIf=\"editmode\">\r\n                                                            <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"claim.selected\" (change)=\"checkIfAllSelected();\">\r\n                                                        </td>\r\n                                                        <td>{{claim.ssin}}</td>\r\n                                                        <td>{{claim.benName}}</td>\r\n                                                        <td>{{claim.benType}}</td>\r\n                                                        <td><a (click)=\"viewClaimInfo(claim)\">{{claim.claimRefernceNo}}</a> </td>\r\n                                                        <!--<td>{{claim.claimRefernceNo}}</td>-->\r\n                                                        <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                        <td>{{claim.submittedDateString}}</td>\r\n                                                        <td>{{claim.approvedAmount}}</td>\r\n                                                        <td>{{claim.paymentStatusName}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"9\" style=\"border-bottom:0px !important\">\r\n                                                            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                                        </td>\r\n\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n                                            <header>Time Line</header>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <!-- row -->\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                                            <div class=\"well well-sm\">\r\n                                                                <div class=\"smart-timeline\">\r\n                                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                                            <div class=\"smart-timeline-icon\">\r\n                                                                                <i class=\"fa fa-user\"></i>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-time\">\r\n                                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-content\">\r\n                                                                                <p>\r\n                                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                                </p>\r\n                                                                                <p>\r\n                                                                                    {{item.actionComments}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset class=\"top-10\"></fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>ALC Comments<span [style.color]=\"!commentsValid?'red':''\"><b>*</b></span></label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!editmode\" name=\"alcComments\" [(ngModel)]=\"alcComments\"\r\n                                                                  [ngClass]=\"{'invalid-data': (!commentsValid ), 'valid-data': commentsValid}\"\r\n                                                                  required></textarea>\r\n                                                    </label>\r\n                                                    <div *ngIf=\"(!commentsValid)\">\r\n                                                        <span style=\"color: red;\">ALC Comments is required </span>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>DLC Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"dlcComments\" [(ngModel)]=\"dlcComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>Board Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"boardComments\" [(ngModel)]=\"boardComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            \r\n                                            <footer>\r\n                                                <a id=\"btnSava\" class=\"btn btn-success\" *ngIf=\"editmode\" (click)=\"SubmitRequest()\"> Submit </a>\r\n                                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                            </footer>\r\n                                        </form>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #addClaimsModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"addClaimsModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Add Claims</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset id=\"divAddEducationDetails\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <b>Board :</b> {{fundrequestDetails.boardName}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label control-label\">Claim Types </label>\r\n                                <ng-multiselect-dropdown name=\"22\" [placeholder]=\"'All'\"\r\n                                                         [data]=\"claimTypesList\"\r\n                                                         [(ngModel)]=\"claimMasterIds\"\r\n                                                         [settings]=\"dropdownSettings\"\r\n                                                         (onSelect)=\"onItemSelect($event)\"\r\n                                                         (onSelectAll)=\"onSelectAll($event)\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Locations </label>\r\n                                <!--<input type=\"text\" class=\"form-control\" name=\"institutionName\" placeholder=\"Institution Name\">-->\r\n                                <ng-multiselect-dropdown name=\"dd\" [placeholder]=\"'All '\"\r\n                                                         [data]=\"LocationList\"\r\n                                                         [(ngModel)]=\"locationsIds\"\r\n                                                         [settings]=\"locationSettings\"\r\n                                                         (onSelect)=\"onItemSelect($event)\"\r\n                                                         (onSelectAll)=\"onSelectAll($event)\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <a class=\"btn btn-primary\" (click)=\"GetClaims()\"> Get Claims </a>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"GetClaimVisible\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\"\r\n                                       [mfData]=\"newclaimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th><input type=\"checkbox\" [(ngModel)]=\"newselectedAll\" (change)=\"newselectAll();\"></th>\r\n                                            <th>SSIN</th>\r\n                                            <th>Beneficiary Name</th>\r\n                                            <th>Beneficiary Type</th>\r\n                                            <th>Claim Reference No.</th>\r\n                                            <th>Claim Category</th>\r\n                                            <th>Submission Date</th>\r\n                                            <th>Amount</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let claim of mf.data\">\r\n                                            <td class=\"\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"claim.selected\" (change)=\"newcheckIfAllSelected();\">\r\n                                            </td>\r\n                                            <td>{{claim.ssin}}</td>\r\n                                            <td>{{claim.benName}}</td>\r\n                                            <td>{{claim.benType}}</td>\r\n                                            <td>{{claim.claimRefernceNo}}</td>\r\n                                            <td>{{getTypeName(claim.claimType)}}</td>\r\n                                            <td>{{claim.submittedDateString}}</td>\r\n                                            <td>{{claim.approvedAmount}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n\r\n                                    <tfoot>\r\n                                        <tr>\r\n                                            <td colspan=\"8\" style=\"border-bottom:0px !important\"><mfBootstrapPaginator></mfBootstrapPaginator></td>\r\n                                        </tr>\r\n                                    </tfoot>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" *ngIf=\"GetClaimVisible\" class=\"btn btn-primary\" (click)=\"AddNewClaims()\">\r\n                    Add\r\n                </button>\r\n\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"CancelAddClaims()\">\r\n                    Cancel\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\"  [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Claim Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"max-height:500px\">\r\n                <div class=\"row\" style=\"display:inline-flex;width:100%\">\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px\">\r\n                        <app-claimviewdata #child [claimId]=\"claimId\" [claimType]=\"claimType\" [transactionId]=\"tranctionId\"></app-claimviewdata>\r\n                    </div>\r\n                    <div style=\"width:50%;padding:5px;overflow:scroll;max-height:470px;min-height:inherit\">\r\n                        <accordion>\r\n                            <accordion-group heading=\"{{item.attachmentTypeString}}\" *ngFor=\"let item of attachmentList\">\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]!='pdf'\">\r\n                                    <img [src]=\"'data:image/'+item.fileName.split('.')[item.fileName.split('.').length-1]+';base64,'+ item.fileContent\" style=\"max-width:100%\" />\r\n                                </div>\r\n                                <div *ngIf=\"item.fileName.split('.')[item.fileName.split('.').length-1]=='pdf'\">\r\n                                    <object [attr.data]=\"item.attachmenturl\" style=\"width:100%;height:400px\" type=\"application/pdf\"></object>\r\n                                </div>\r\n                            </accordion-group>\r\n                        </accordion>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"attachModal.hide()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/alc/reviewfundrequest/reviewfundrequest.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewfundrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewfundrequestComponent", function() { return ReviewfundrequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../claimviewdata/claimviewdata.component */ "./src/app/alc/claimviewdata/claimviewdata.component.ts");
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








var ReviewfundrequestComponent = /** @class */ (function () {
    function ReviewfundrequestComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.editmode = false;
        this.claimData = {};
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.selectedAll = false;
        this.sumofAmount = 0;
        this.selectedClaimList = [];
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.GetClaimVisible = false;
        this.claimsTrack = {};
        this.attachmentList = [];
        this.educationList = [];
        this.claim = {};
        this.commentsValid = true;
    }
    ReviewfundrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestId = params["fundRequestId"];
            _this.mode = params["mode"];
            if (_this.mode == "edit") {
                _this.editmode = true;
                _this.selectedAll = true;
            }
            else
                _this.editmode = false;
            _this.workflowId = params["workflowId"];
        });
        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getClaimTypesMasterDetails();
        this.getFundRequestedClaimsById(this.fundRequestId);
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'claimMasterId',
            textField: 'claimName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.locationSettings = {
            singleSelection: false,
            idField: 'blockSno',
            textField: 'blockName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    ReviewfundrequestComponent.prototype.getFundRequestedClaimsById = function (fundRequestId) {
        var _this = this;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.claimsData = data.fundClaimList;
            _this.alcComments = data.alcComments;
            _this.dlcComments = data.dlcComments;
            _this.boardComments = data.boardComments;
            _this.selectAll();
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestId, 0, _this.workflowId);
        });
    };
    ReviewfundrequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
            _this.getLocationDetailsByRloId(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    ReviewfundrequestComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    };
    ReviewfundrequestComponent.prototype.checkIfAllSelected = function () {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
        // if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        // else { this.sumofAmount -= itemData.approvedAmount; }
    };
    ReviewfundrequestComponent.prototype.selectedClaims = function () {
        this.sumofAmount = 0;
        var res = this.claimsData;
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
            if (res[i].selected == true) {
                this.sumofAmount += res[i].approvedAmount;
            }
        }
    };
    ReviewfundrequestComponent.prototype.SubmitRequest = function () {
        var _this = this;
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(function (x) { return x.statusId == 1; }).length > 0) {
            debugger;
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                this.claimData.updatedBy = this.userService.user.deptUserid;
                this.claimData.updatedDate = new Date();
                this.claimData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimStatus"].FundRequestFromALC;
                this.claimData.fundRequestClaims = this.selectedClaimList;
                this.claimData.fundRequestHdrId = this.fundRequestId;
                this.claimData.fundRequestDate = new Date();
                //this.claimData.boardId = this.boardId;
                this.claimData.aLCComments = this.alcComments.trim();
                this.claimData.fundRequested = this.sumofAmount;
                //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequesteClaims(this.claimData)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Fund request was successfully updated";
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                        }
                        _this.successModal.show();
                    });
                    //}
                }
            }
            else
                this.commentsValid = false;
        }
        else {
            this.showErrorMessage = true;
        }
    };
    ReviewfundrequestComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewfundrequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
        //this.GetClaims();
    };
    ReviewfundrequestComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    ReviewfundrequestComponent.prototype.ShowAddClaims = function () {
        this.resetModelPopup();
        this.addClaimsModal.show();
    };
    ReviewfundrequestComponent.prototype.CancelAddClaims = function () {
        this.resetModelPopup();
        this.addClaimsModal.hide();
    };
    ReviewfundrequestComponent.prototype.getLocationDetailsByRloId = function (id) {
        var _this = this;
        this.dataService
            .getLocationsMasterData(id)
            .subscribe(function (data) {
            _this.LocationList = data;
        });
    };
    ReviewfundrequestComponent.prototype.getClaimTypesMasterDetails = function () {
        var _this = this;
        this.dataService
            .getClaimTypesMasterData()
            .subscribe(function (data) {
            _this.claimTypesList = data;
        });
    };
    ReviewfundrequestComponent.prototype.GetClaims = function () {
        debugger;
        if (this.fundrequestDetails.boardId > 0) {
            this.boardIdValid = true;
            var claimMaster = void 0;
            var locationId = void 0;
            if (this.claimMasterIds.length > 0) {
                claimMaster = this.claimMasterIds.map(function (e) {
                    return e.claimMasterId;
                }).join(', ');
            }
            else {
                claimMaster = 0;
            }
            if (this.locationsIds.length > 0) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ');
            }
            else {
                locationId = 0;
            }
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.fundrequestDetails.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    };
    ReviewfundrequestComponent.prototype.getAllApprovalClaims = function (deptUserid, type, boardId, claimTypeIds, locationsIds) {
        var _this = this;
        this.newclaimsData = [];
        this.newselectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe(function (data) {
            _this.newclaimsData = data;
            _this.GetClaimVisible = true;
        });
    };
    ReviewfundrequestComponent.prototype.newselectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.newclaimsData.length; i++) {
            this.newclaimsData[i].selected = this.newselectedAll;
        }
    };
    ReviewfundrequestComponent.prototype.newcheckIfAllSelected = function () {
        this.showErrorMessage = false;
        this.newselectedAll = this.newclaimsData.every(function (item) {
            return item.selected == true;
        });
    };
    ReviewfundrequestComponent.prototype.AddNewClaims = function () {
        debugger;
        if (this.newclaimsData != null && this.newclaimsData.length > 0) {
            var res = this.newclaimsData.filter(function (x) { return x.selected == true; });
            if (res != null && res.length > 0) {
                this.addclaimsData = [];
                for (var i = 0; i < res.length; i++) {
                    this.addclaimsData.push(res[i]);
                    this.claimsData.push(res[i]);
                }
                this.claimsData = this.claimsData.filter(function (el, i, a) { return i === a.indexOf(el); });
                this.resetModelPopup();
                this.addClaimsModal.hide();
            }
        }
    };
    ReviewfundrequestComponent.prototype.removeDuplicateUsingFilter = function (arr) {
        var unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array;
    };
    ReviewfundrequestComponent.prototype.resetModelPopup = function () {
        this.locationSettings = {};
        this.dropdownSettings = {};
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.GetClaimVisible = false;
    };
    ReviewfundrequestComponent.prototype.formatDate = function (date) {
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
    ReviewfundrequestComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewfundrequestComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewfundrequestComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][this.claimType]);
    };
    ReviewfundrequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
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
    ], ReviewfundrequestComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addClaimsModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewfundrequestComponent.prototype, "addClaimsModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attachModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewfundrequestComponent.prototype, "attachModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child'),
        __metadata("design:type", _claimviewdata_claimviewdata_component__WEBPACK_IMPORTED_MODULE_6__["ClaimviewdataComponent"])
    ], ReviewfundrequestComponent.prototype, "child", void 0);
    ReviewfundrequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewfundrequest',
            template: __webpack_require__(/*! ./reviewfundrequest.component.html */ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.html"),
            styles: [__webpack_require__(/*! ./reviewfundrequest.component.css */ "./src/app/alc/reviewfundrequest/reviewfundrequest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], ReviewfundrequestComponent);
    return ReviewfundrequestComponent;
}());



/***/ }),

/***/ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>Fund Request View </h2>\r\n                </header>\r\n\r\n\r\n                <div>\r\n\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details </header>\r\n                            <fieldset>\r\n                                <section>\r\n\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request Date: </strong>{{fundrequestDetails.fundRequestDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section style=\"display:none\">\r\n                                    <header>  Fund Status at RLO</header>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </section>\r\n\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Board: </strong>{{fundrequestDetails.boardName}} </label>\r\n                                        </div>\r\n                                        <!--<div class=\"col col-6\">\r\n                                            <label><strong>Claim Types: </strong>{{fundrequestDetails.claimTypes}} </label>\r\n                                        </div>-->\r\n                                    </div>\r\n                                    <!--<div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Locations : </strong>{{fundrequestDetails.locationNames}}</label>\r\n                                        </div>\r\n                                    </div>-->\r\n                                </section>\r\n\r\n\r\n\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" checked=\"checked\">\r\n                                                    <i></i>Fund Request for Claims\r\n                                                </label>\r\n                                                <label class=\"radio\" style=\"margin-top:10px !important\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" disabled>\r\n                                                    <i></i>Fund Request for Expenses\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                                <section style=\"display:none\">\r\n                                    <div class=\"row\" style=\"margin-top:15px;\">\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Board<span [style.color]=\"!boardIdValid?'red':''\"><b>*</b></span></label>\r\n\r\n                                            <select class=\"form-control\" name=\"boardId\" [(ngModel)]=\"boardId\">\r\n                                                <option value=\"\" selected>Select</option>\r\n                                                <option value=\"{{board.boardId}}\" *ngFor=\"let board of boardList\">{{board.boardName}}</option>\r\n                                            </select>\r\n\r\n                                        </div>\r\n                                        <!--<div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Category</label>\r\n\r\n                                            <select class=\"form-control\" name=\"claimTypeIds\" [(ngModel)]=\"claimTypeIds\">\r\n                                                <option value=\"0\" selected>All</option>\r\n                                                <option value=\"{{type.claimTypeId}}\" *ngFor=\"let type of claimTypesList\">{{type.claimTypeName}}</option>\r\n\r\n                                            </select>\r\n\r\n                                        </div>\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label class=\"label\">Location</label>\r\n                                            <select class=\"form-control\" name=\"locationsIds\" [(ngModel)]=\"locationsIds\">\r\n                                                <option value=\"0\" selected>All</option>\r\n                                                <option value=\"{{location.blockSno}}\" *ngFor=\"let location of LocationList\">{{location.blockName}}</option>\r\n                                            </select>\r\n                                        </div>-->\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section *ngIf=\"editmode\">\r\n                                    <div class=\"col col-6 selectContainer\">\r\n                                        <a class=\"btn btn-primary\" (click)=\"openModel()\"> Add </a>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please add atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n\r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <form class=\"smart-form smart-form-main\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"expensesDetailsArray\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <!--<th *ngIf=\"editmode\"><input type=\"checkbox\" name=\"selectedAll\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"></th>-->\r\n                                                        <th>Item</th>\r\n                                                        <th>Fund Required</th>\r\n                                                        <th>Physical Target</th>\r\n                                                        <th>Expenditure incurred during last financial year</th>\r\n                                                        <th *ngIf=\"editmode\"></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let expense of mf.data\">\r\n                                                        <!--<td class=\"\" *ngIf=\"editmode\">\r\n                    <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"expense.selected\" (change)=\"checkIfAllSelected();\">\r\n                </td>-->\r\n                                                        <td>{{expense.itemName}}</td>\r\n                                                        <td>{{expense.fundsRequired}}</td>\r\n                                                        <td>{{expense.physicalTarget}}</td>\r\n                                                        <td>{{expense.expenditureIncurredDuringLastFinYear}}</td>\r\n                                                        <td *ngIf=\"editmode\">\r\n                                                            <a class=\"btn btn-labeled btn-primary\" (click)=\"editExpenseDetails(expense)\" style=\"margin-right:5px;\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</a>\r\n                                                            <a class=\"btn btn-labeled btn-danger\" (click)=\"removeExpenseDetails(expense)\"><i class=\"glyphicon glyphicon-trash\"></i> Remove</a>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"5\" style=\"border-bottom:0px !important\">\r\n                                                            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                                        </td>\r\n\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n                                            <header>Time Line</header>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <!-- row -->\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                                            <div class=\"well well-sm\">\r\n                                                                <div class=\"smart-timeline\">\r\n                                                                    <ul class=\"smart-timeline-list\">\r\n\r\n                                                                        <li *ngFor=\"let item of claimsTrack\">\r\n                                                                            <div class=\"smart-timeline-icon\">\r\n                                                                                <i class=\"fa fa-user\"></i>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-time\">\r\n                                                                                <small>{{formatDate(item.actionDate)}}</small>\r\n                                                                            </div>\r\n                                                                            <div class=\"smart-timeline-content\">\r\n                                                                                <p>\r\n                                                                                    <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                                </p>\r\n                                                                                <p>\r\n                                                                                    {{item.actionComments}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset class=\"top-10\"></fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>ALC Comments<span [style.color]=\"!commentsValid?'red':''\"><b>*</b></span></label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"!editmode\" name=\"alcComments\" [(ngModel)]=\"alcComments\"\r\n                                                                  [ngClass]=\"{'invalid-data': (!commentsValid ), 'valid-data': commentsValid}\"\r\n                                                                  required></textarea>\r\n                                                    </label>\r\n                                                    <div *ngIf=\"(!commentsValid)\">\r\n                                                        <span style=\"color: red;\">ALC Comments is required </span>\r\n                                                    </div>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>DLC Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"dlcComments\" [(ngModel)]=\"dlcComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <fieldset>\r\n                                                <section>\r\n                                                    <label>Board Comments</label>\r\n                                                    <label class=\"textarea textarea-resizable\">\r\n                                                        <textarea rows=\"3\" class=\"custom-scroll\" [disabled]=\"true\" name=\"boardComments\" [(ngModel)]=\"boardComments\"></textarea>\r\n                                                    </label>\r\n                                                </section>\r\n                                            </fieldset>\r\n                                            <footer>\r\n                                                <a id=\"btnSava\" class=\"btn btn-success\" *ngIf=\"editmode\" (click)=\"SubmitRequest()\"> Submit </a>\r\n                                                <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                                            </footer>\r\n                                        </form>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #expensesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"expensesModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Add Expense Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset id=\"divAddExpensesDetails\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Item <span [style.color]=\"!expenseTypeValid?'red':''\"><b>*</b></span></label>\r\n                                <select name=\"expenseType\" class=\"form-control\" [(ngModel)]=\"expensesDetails.itemId\"\r\n                                        #expenseType=\"ngModel\"\r\n                                        [ngClass]=\"{'invalid-data': !expenseTypeValid,\r\n                                        'valid-data': expenseTypeValid }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose Item</option>\r\n                                    <option value=\"{{expense.lovDtlId}}\" *ngFor=\"let expense of expensesTypesLov\">{{expense.optionName}}</option>\r\n                                </select> <i></i>\r\n                                <div *ngIf=\"!expenseTypeValid\">\r\n                                    <span style=\"color: red;\">Select Item </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Fund Required <span [style.color]=\"!fundRequiredValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"fundRequiredAmount\" placeholder=\"Fund Required\" [(ngModel)]=\"expensesDetails.fundsRequired\" NumbersOnly\r\n                                       #fundRequiredAmount=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !fundRequiredValid, \r\n                                       'valid-data': fundRequiredValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"!fundRequiredValid\">\r\n                                    <span style=\"color: red;\">Fund Required is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Physical Target</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"physicalTarget\" placeholder=\"Physical Target\" NumbersOnly [(ngModel)]=\"expensesDetails.physicalTarget\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Expenditure incurred during last financial year</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"expenditureIncurredDuringLastFinYear\" placeholder=\"Expenditure incurred\" NumbersOnly [(ngModel)]=\"expensesDetails.expenditureIncurredDuringLastFinYear\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"expensesModal.hide()\">\r\n                    Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addExpenseDetails(expensesDetails)\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReviewfundrequestexpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewfundrequestexpensesComponent", function() { return ReviewfundrequestexpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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






var ReviewfundrequestexpensesComponent = /** @class */ (function () {
    function ReviewfundrequestexpensesComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.editmode = false;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.sumofAmount = 0;
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.GetClaimVisible = false;
        this.claimsTrack = {};
        this.expenseTypeValid = true;
        this.rowIndex = -1;
        this.fundRequestExpensesData = {};
        this.expensesDetailsArray = [];
        this.expensesDetails = {};
        this.fundRequestType = "claims";
        this.fundRequiredValid = true;
        this.commentsValid = true;
    }
    ReviewfundrequestexpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundRequestHdrId = params["fundRequestId"];
            _this.mode = params["mode"];
            if (_this.mode == "edit") {
                _this.editmode = true;
            }
            else
                _this.editmode = false;
            _this.workflowId = params["workflowId"];
        });
        this.getExpenses();
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getFundRequestedExpensesById(this.fundRequestHdrId);
    };
    ReviewfundrequestexpensesComponent.prototype.getFundRequestedExpensesById = function (fundRequestId) {
        var _this = this;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundRequestId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.fundRequestExpensesDtlList;
            _this.expensesDetailsArray = _this.expensesData;
            _this.alcComments = data.alcComments;
            _this.dlcComments = data.dlcComments;
            _this.boardComments = data.boardComments;
            _this.getClaimTrackDetailsByClaimId(_this.fundRequestHdrId, 0, _this.workflowId);
        });
    };
    ReviewfundrequestexpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    ReviewfundrequestexpensesComponent.prototype.SubmitRequest = function () {
        var _this = this;
        debugger;
        this.showErrorMessage = false;
        if (this.expensesDetailsArray != null && this.expensesDetailsArray.length > 0) {
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                this.fundRequestExpensesData.updatedBy = this.userService.user.deptUserid;
                this.fundRequestExpensesData.fundRequestDate = new Date();
                this.fundRequestExpensesData.updatedDate = new Date();
                //this.fundRequestExpensesData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                this.fundRequestExpensesData.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimStatus"].FundRequestFromALC;
                this.fundRequestExpensesData.fundRequestHdrId = this.fundRequestHdrId;
                //this.fundRequestExpensesData.boardId = this.boardId;
                var sumofExpenses = 0;
                for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                    sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                }
                this.fundRequestExpensesData.fundRequested = sumofExpenses;
                this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                this.fundRequestExpensesData.alcComments = this.alcComments.trim();
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequestExpenses(this.fundRequestExpensesData)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                            _this.sumofAmount = 0;
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                        }
                        _this.successModal.show();
                    });
                }
            }
            else
                this.commentsValid = false;
        }
        else {
            this.showErrorMessage = true;
        }
    };
    ReviewfundrequestexpensesComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewfundrequestexpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.cancelclick();
    };
    ReviewfundrequestexpensesComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    ReviewfundrequestexpensesComponent.prototype.removeDuplicateUsingFilter = function (arr) {
        var unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array;
    };
    ReviewfundrequestexpensesComponent.prototype.formatDate = function (date) {
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
    ReviewfundrequestexpensesComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewfundrequestexpensesComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewfundrequestexpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_5__["LovConstants"].ExpensesType)
            .subscribe(function (data) {
            _this.expensesTypesLov = data;
        });
    };
    ReviewfundrequestexpensesComponent.prototype.openModel = function () {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.addExpenseDetails1 = function (details) {
        debugger;
        if (this.validateExpenseDetails(details)) {
            if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesModal.hide();
                this.expensesData.push(details);
            }
            else if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesData.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        this.expensesData.splice(this.rowIndex, 1);
                        details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                        //this.expensesData.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
                    }
                }
            }
            ////details.statusId = ClaimStatus.Submitted;
            //if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == -1 && this.rowIndex == -1) {
            //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
            //    this.expensesDetailsArray.push(details);
            //    this.expensesData.push(details);
            //this.expensesModal.hide();
            //}
            //else if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) != -1 && this.rowIndex == -1) {
            //    alert("already added please select another expense type"); return;
            //}
            //else {
            //    if (this.rowIndex != -1) {
            //        if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == this.rowIndex) {
            //            this.expensesDetailsArray.splice(this.rowIndex, 1);
            //            details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
            //            this.expensesDetailsArray.push(details);
            //            this.expensesData.push(details);
            //            this.rowIndex = -1;
            //            this.expensesModal.hide();
            //        }
            //        else {
            //            alert("already added please select another expense type"); return;
            //        }
            //    }
            //}
            //this.expensesDetails = {} as FundRequestExpensesDtlList;
        }
    };
    ReviewfundrequestexpensesComponent.prototype.editExpenseDetails1 = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.removeExpenseDetails1 = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    };
    ReviewfundrequestexpensesComponent.prototype.addExpenseDetails = function (details) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        //this.expensesDetailsArray.splice(this.rowIndex, 1);
                        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                        //this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
                    }
                }
            }
            this.expensesDetails = {};
        }
    };
    ReviewfundrequestexpensesComponent.prototype.editExpenseDetails = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    ReviewfundrequestexpensesComponent.prototype.removeExpenseDetails = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    };
    ReviewfundrequestexpensesComponent.prototype.clearExpenses = function () {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    };
    ReviewfundrequestexpensesComponent.prototype.validateExpenseDetails = function (details) {
        var isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) {
            this.expenseTypeValid = isValid = false;
        }
        if (details.fundsRequired == undefined) {
            this.fundRequiredValid = isValid = false;
        }
        return isValid;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewfundrequestexpensesComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ReviewfundrequestexpensesComponent.prototype, "expensesModal", void 0);
    ReviewfundrequestexpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewfundrequestexpenses',
            template: __webpack_require__(/*! ./reviewfundrequestexpenses.component.html */ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.html"),
            styles: [__webpack_require__(/*! ./reviewfundrequestexpenses.component.css */ "./src/app/alc/reviewfundrequestexpenses/reviewfundrequestexpenses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ReviewfundrequestexpensesComponent);
    return ReviewfundrequestexpensesComponent;
}());



/***/ }),

/***/ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <header>\r\n                    <h2>{{pageHeader}} </h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Payment Processing Date: </strong>{{paymentProcessDetails.paymentProcessingDateString}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section style=\"display:none\">\r\n                                    <header>Fund Status at RLO</header>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\" style=\"display:none\">\r\n                                            <label><strong>Balance as on today : </strong>{{RloOfficeAddress.balanceOfTheAmount}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Approved Claims Amount: </strong>{{officeDetails.approvedClaimsAmount}} </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Amount Shortfall: </strong>{{AmountShortfall}}</label>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-10\">\r\n                                            <div class=\"inline-group\">\r\n                                                <label class=\"radio\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" [value]=\"true\" [(ngModel)]=\"GetFundVisible\" disabled>\r\n                                                    <i></i>Payment Against Release Order\r\n                                                </label>\r\n                                                <label class=\"radio\" style=\"margin-top:10px !important\">\r\n                                                    <input type=\"radio\" name=\"radio-inline\" [value]=\"false\" [(ngModel)]=\"GetFundVisible\" disabled>\r\n                                                    <i></i>Payment without Release Order\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\" style=\"margin-top:15px;\">\r\n                                        <div class=\"col col-6 selectContainer\">\r\n                                            <label><strong>Release Order Date: </strong>{{paymentProcessDetails.paymentReleaseDateString}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Fund Request No: </strong>{{paymentProcessDetails.fundRequestId}}</label>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </section>\r\n                                <!--<section *ngIf=\"GetFundVisible\">\r\n        <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col col-6 selectContainer\">\r\n                <label><strong>Release Order: </strong>{{paymentProcessDetails.fundRequestId}}</label>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </section>-->\r\n                            </fieldset>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- widget grid *ngIf=\"GetClaimVisible\"-->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n\r\n                <section id=\"widget-grid\" class=\"\">\r\n\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                             \r\n                                <div>\r\n\r\n                                    <div class=\"jarviswidget-editbox\">\r\n\r\n                                    </div>\r\n                                    <div class=\"widget-body no-padding\">\r\n                                        <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\">\r\n\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>SSIN</th>\r\n                                                    <th>Beneficiary Name</th>\r\n                                                    <th>Beneficiary Type</th>\r\n                                                    <th>Claim Reference No.</th>\r\n                                                    <th>Claim Category</th>\r\n                                                    <th>Submission Date</th>\r\n                                                    <th>Amount</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <!--<tbody *ngIf=\"claimsData.length==0\">\r\n                                        <tr >\r\n                                            <td colspan=\"8\">\r\n                                                No data available\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>-->\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let claim of claimsData\">\r\n                                                    <td>{{claim.ssin}}</td>\r\n                                                    <td>{{claim.benName}}</td>\r\n                                                    <td>{{claim.benType}}</td>\r\n                                                    <td>{{claim.claimRefernceNo}}</td>\r\n                                                    <td>{{getTypeName(claim.claimType)}}</td>\r\n                                                    <td>{{claim.submittedDateString}}</td>\r\n                                                    <td>{{claim.approvedAmount}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"8\"></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n\r\n            <form class=\"smart-form\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a class=\"btn btn-danger\" (click)=\"cancelclick()\"> Cancel</a>\r\n                </footer>\r\n            </form>\r\n        </article>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReviewpaymentprocessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewpaymentprocessComponent", function() { return ReviewpaymentprocessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var ReviewpaymentprocessComponent = /** @class */ (function () {
    function ReviewpaymentprocessComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.editmode = false;
        this.GetFundVisible = false;
    }
    ReviewpaymentprocessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.paymentProcessId = params["paymentProcessId"];
            _this.mode = params["mode"];
            _this.statusId = params["statusId"];
            if (_this.statusId == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].PaymentProcessingbyALC) {
                _this.pageHeader = "Payment Process View";
            }
            else if (_this.statusId == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].PaymentReleasebyTreasurer) {
                _this.pageHeader = "Payment Release View";
            }
            if (_this.mode == "edit") {
                _this.editmode = true;
            }
            else
                _this.editmode = false;
        });
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getPaymentProcessById(this.paymentProcessId);
    };
    ReviewpaymentprocessComponent.prototype.cancelclick = function () {
        this.router.navigate(['alc/paymentprocessedlist']);
    };
    ReviewpaymentprocessComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
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
    ReviewpaymentprocessComponent.prototype.getPaymentProcessById = function (paymentProcessId) {
        var _this = this;
        debugger;
        this.claimsData = [];
        this.dataService
            .getPaymentProcessById(paymentProcessId)
            .subscribe(function (data) {
            debugger;
            _this.paymentProcessDetails = data;
            _this.claimsData = data.paymentClaimList;
            _this.fundRequestId = _this.paymentProcessDetails.fundRequestId;
            debugger;
            if (_this.fundRequestId != null) {
                _this.GetFundVisible = true;
            }
            else
                _this.GetFundVisible = false;
        });
    };
    ReviewpaymentprocessComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReviewpaymentprocessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewpaymentprocess',
            template: __webpack_require__(/*! ./reviewpaymentprocess.component.html */ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.html"),
            styles: [__webpack_require__(/*! ./reviewpaymentprocess.component.css */ "./src/app/alc/reviewpaymentprocess/reviewpaymentprocess.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ReviewpaymentprocessComponent);
    return ReviewpaymentprocessComponent;
}());



/***/ }),

/***/ "./src/app/alc/search-student/search-student.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/alc/search-student/search-student.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/search-student/search-student.component.html":
/*!******************************************************************!*\
  !*** ./src/app/alc/search-student/search-student.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Search Student </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <label class=\"label\">Student Name </label>\r\n                            <input type=\"text\" name=\"name\" class=\"advancedSearchTextbox\" [(ngModel)]=\"studentName\" placeholder=\"Search Student Name\"\r\n                                   maxlength=\"50\" #name=\"ngModel\" required>\r\n                            <button (click)=\"searchStudent()\"><i class=\"fa fa-search\"></i></button>\r\n                            <!--<span [style.color]=\"!nameValid?'red':''\"><b>*</b></span>\r\n                                <div *ngIf=\"!nameValid\">\r\n                                <span style=\"color: red;\">Student Name is required </span>\r\n                            </div>-->\r\n                        </div>\r\n\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>Education</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/alc/search-student/search-student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/alc/search-student/search-student.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentComponent", function() { return SearchStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "search", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "search", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    SearchStudentComponent.prototype.changepage = function (page) {
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    };
    SearchStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-student',
            template: __webpack_require__(/*! ./search-student.component.html */ "./src/app/alc/search-student/search-student.component.html"),
            styles: [__webpack_require__(/*! ./search-student.component.css */ "./src/app/alc/search-student/search-student.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_1__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchStudentComponent);
    return SearchStudentComponent;
}());



/***/ }),

/***/ "./src/app/alc/sendback-claims/sendback-claims.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/alc/sendback-claims/sendback-claims.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/sendback-claims/sendback-claims.component.html":
/*!********************************************************************!*\
  !*** ./src/app/alc/sendback-claims/sendback-claims.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Sent Back </h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!--<div class=\"ssv-search\">\r\n                                <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                                <button><i class=\"fa fa-search\"></i></button>\r\n                            </div>-->\r\n                        <div class=\"ssv-search\">\r\n                            <input type=\"text\" [(ngModel)]=\"ssinSearchText\" placeholder=\"SSIN Search..\" class=\"advancedSearchTextbox\" NumbersOnly>\r\n                            <input type=\"text\" [(ngModel)]=\"claimReferenceNoText\" placeholder=\"Claim Reference No Search..\" class=\"advancedSearchTextbox\" NumbersOnly minlength=\"12\" maxlength=\"12\">\r\n                            <button (click)=\"GetResults()\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"claimsData\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"ssin\">SSIN</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benName\">Beneficiary Name</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"benType\">Beneficiary Type</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimRefernceNo\">Claim Reference No.</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimType\">Claim Category</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"submittedDateString\">Submission Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"claimAmount\">Amount</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"sentBackDate\">Sent back Date</mfDefaultSorter>\r\n                                    </th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of mf.data|grdFilter: {ssin: searchText, claimAmount: searchText,submittedDateString: searchText, sentBackDateString: searchText,\r\n       benName: searchText, claimType: searchText, claimRefernceNo:searchText,  benType: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onTrackClaimClick(user)\" title=\"Track\" class=\"txt-color-red\"><i class=\"fa fa-recycle\"></i></a>\r\n                                        <a (click)=\"onreviewClick(user)\" title=\"Review\" class=\"txt-color-red\"><i class=\"fa fa-check-square-o fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{user.ssin}}</td>\r\n                                    <td>{{user.benName}}</td>\r\n                                    <td>{{user.benType}}</td>\r\n                                    <td>{{user.claimRefernceNo}}</td>\r\n                                    <td>{{getTypeName(user.claimType)}}</td>\r\n                                    <td>{{user.submittedDateString}}</td>\r\n                                    <td>{{user.claimAmount}}</td>\r\n                                    <td>{{user.sentBackDateString}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"9\">\r\n                                        <div *ngIf=\"claimsData.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                            <!--<mfBootstrapPaginator></mfBootstrapPaginator>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/sendback-claims/sendback-claims.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alc/sendback-claims/sendback-claims.component.ts ***!
  \******************************************************************/
/*! exports provided: SendbackClaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendbackClaimsComponent", function() { return SendbackClaimsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.page = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo;
        this.pageSize = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize;
    }
    SendbackClaimsComponent.prototype.getTypeName = function (claimType) {
        if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"][claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    SendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "sendback", workflowId: _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    SendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    SendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    SendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", this.page, this.pageSize);
    };
    SendbackClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    //page change event
    SendbackClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, "0", "0", page, this.pageSize);
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].SendbackfromALC, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow, this.strSSIN, this.strClaimRefNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageNo, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["pagination"].pageSize);
        }
    };
    SendbackClaimsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendback-claims',
            template: __webpack_require__(/*! ./sendback-claims.component.html */ "./src/app/alc/sendback-claims/sendback-claims.component.html"),
            styles: [__webpack_require__(/*! ./sendback-claims.component.css */ "./src/app/alc/sendback-claims/sendback-claims.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SendbackClaimsComponent);
    return SendbackClaimsComponent;
}());



/***/ }),

/***/ "./src/app/alc/timetrack/timetrack.component.css":
/*!*******************************************************!*\
  !*** ./src/app/alc/timetrack/timetrack.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/timetrack/timetrack.component.html":
/*!********************************************************!*\
  !*** ./src/app/alc/timetrack/timetrack.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Track Claim</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <fieldset>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                                        <div class=\"well well-sm\">\r\n                                            <div class=\"smart-timeline\">\r\n                                                <ul class=\"smart-timeline-list\">\r\n\r\n                                                    <li *ngFor=\"let item of claimsTrack\">\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>{{formatDate(item.actionDate)}}</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                {{item.actionComments}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <!--<li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>25th july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>ALC Review - Send Back </strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Provided Bill is out of the date, for which claim can't be processed. Resubmit the right bill\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>23rd july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Forwarded to ALC</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Forwarded to AL at 10.30am\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>22nd July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Resubmission by Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Here attached the document\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-user\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>21st july</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Inspector Review - Sent Back</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Can you please submit your Medicall Bill?\r\n                                                            </p>\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <div class=\"smart-timeline-icon\">\r\n                                                            <i class=\"fa fa-pencil\"></i>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-time\">\r\n                                                            <small>18th July 2018</small>\r\n                                                        </div>\r\n                                                        <div class=\"smart-timeline-content\">\r\n                                                            <p>\r\n                                                                <a href=\"javascript:void(0);\"><strong>Claim Submission - Beneficiary</strong></a>\r\n                                                            </p>\r\n                                                            <p>\r\n                                                                Sir, Can you please review and approve my claim\r\n                                                            </p>\r\n\r\n                                                        </div>\r\n                                                    </li>-->\r\n                                                    <!--<li class=\"text-center\">\r\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-arrow-down text-muted\"></i> LOAD MORE</a>\r\n                                                    </li>-->\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </article>\r\n    </div>\r\n    <div class=\"smart-form\">\r\n        <footer>\r\n            <a class=\"btn btn-danger\" (click)=\"onBackClaimClick()\">Cancel</a>\r\n        </footer>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/alc/timetrack/timetrack.component.ts":
/*!******************************************************!*\
  !*** ./src/app/alc/timetrack/timetrack.component.ts ***!
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
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
            this.router.navigate(['alc/rejectclaims'], { skipLocationChange: true });
        }
        if (this.mode == "sendback") {
            this.router.navigate(['alc/sendbackclaims'], { skipLocationChange: true });
        }
        if (this.mode == "pending") {
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "approval") {
            this.router.navigate(['alc/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "referalreject") {
            this.router.navigate(['alc/referralreject'], { skipLocationChange: true });
        }
        if (this.mode == "referalsendback") {
            this.router.navigate(['alc/referralsendback'], { skipLocationChange: true });
        }
        if (this.mode == "referal") {
            this.router.navigate(['alc/referclaims'], { skipLocationChange: true });
        }
        if (this.mode == "referallapprove") {
            this.router.navigate(['alc/referralapproval'], { skipLocationChange: true });
        }
        if (this.mode == "claimstatus") {
            this.router.navigate(['alc/claimstatus'], { skipLocationChange: true });
        }
        if (this.mode == "search") {
            this.router.navigate(['alc/searchstudent'], { skipLocationChange: true });
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
            template: __webpack_require__(/*! ./timetrack.component.html */ "./src/app/alc/timetrack/timetrack.component.html"),
            styles: [__webpack_require__(/*! ./timetrack.component.css */ "./src/app/alc/timetrack/timetrack.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_4__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TimetrackComponent);
    return TimetrackComponent;
}());



/***/ }),

/***/ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificate/utilizationcertificate.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificate/utilizationcertificate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <header>\r\n                    <h2>Utilisation Certificate </h2>\r\n                </header>\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>ALC Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>ALC Name: </strong>{{officeDetails.userName}} </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>RLO Office Name & Address: </strong>{{RloOfficeAddress.rloOfficeName}} <br /> {{RloOfficeAddress.addressLine1}} &nbsp; {{RloOfficeAddress.addressLine2}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label>Board<span [style.color]=\"!boardIdValid?'red':''\"><b>*</b></span></label>\r\n                                            <label class=\"select\">\r\n                                                <select class=\"form-control select\" name=\"boardId\" (change)=\"getData()\"\r\n                                                        [(ngModel)]=\"utilizationCertificate.boardId\" #boardId=\"ngModel\" \r\n                                                        [ngClass]=\"{'invalid-data':boardId.invalid && (!boardIdValid ||  boardId.touched), 'valid-data': boardId.valid && boardIdValid}\"\r\n                                                        required [disabled]=\"viewMode\">\r\n                                                    <option value=\"0\" selected disabled>Choose a Board</option>\r\n                                                    <option value=\"{{board.boardId}}\" *ngFor=\"let board of boardList\">{{board.boardName}}</option>\r\n                                                </select> <i></i>\r\n                                            </label>\r\n                                                <div *ngIf=\" (!boardIdValid )\">\r\n                                                    <span style=\"color: red;\">Board is required </span>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label>Financial Year <span [style.color]=\"!financialYearValid?'red':''\"><b>*</b></span></label>\r\n                                            <label class=\"select\">\r\n                                                <select class=\"form-control select\" name=\"financialYear\" (change)=\"getData()\"\r\n                                                        [(ngModel)]=\"utilizationCertificate.financialYearId\"\r\n                                                        #financialYear=\"ngModel\"\r\n                                                        [ngClass]=\"{'invalid-data':financialYear.invalid && (!financialYearValid ||  financialYear.touched), 'valid-data': financialYear.valid && financialYearValid}\"\r\n                                                        required [disabled]=\"viewMode\">\r\n                                                    <option value=\"0\" selected disabled>Choose an Option</option>\r\n                                                    <option value=\"{{year.financialYearId}}\" *ngFor=\"let year of financialYears\">{{year.financialYear}}</option>\r\n                                                </select> <i></i>\r\n                                            </label>\r\n                                            <div *ngIf=\"financialYear.invalid && (!financialYearValid ||  financialYear.touched)\">\r\n                                                <span style=\"color: red;\">Financial Year is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <!--<section class=\"col col-6\" id=\"secFirstApp\" *ngIf=\"viewDateOfFirstAppointment\"-->\r\n                                            <label>Utilisation Certificate Date <span [style.color]=\"!utilizationCertificateDateValid?'red':''\"><b>*</b></span></label>\r\n                                            <label class=\"input\">\r\n                                                <i class=\"icon-append fa fa-calendar\"></i>\r\n                                                <input type=\"text\" name=\"utilizationCertificateDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                       [maxDate]=\"maxDate\" placeholder=\"DD/MM/YYYY\"\r\n                                                       readonly #utilizationCertificateDate=\"ngModel\" [(ngModel)]=\"utilizationCertificate.date\"\r\n                                                       value=\"{{ utilizationCertificate.date | date: 'dd/MM/yyyy' }}\"\r\n                                                       [ngClass]=\"{'invalid-data':utilizationCertificateDate.invalid && (!utilizationCertificateDateValid), 'valid-data': utilizationCertificateDate.valid && utilizationCertificateDateValid}\"\r\n                                                       required [disabled]=\"viewMode\">\r\n                                            </label>\r\n                                            <div *ngIf=\"utilizationCertificateDate.invalid && (!utilizationCertificateDateValid)\">\r\n                                                <span style=\"color: red;\">Utilisation Certificate Date is required </span>\r\n                                            </div>\r\n\r\n                                            <!--</section>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"showErrorMessage\" style=\"margin-top:10px;\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please select atleast one record to proceed.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"certificatesVisible\" class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                <section id=\"widget-grid\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\">\r\n                                <div>\r\n                                    <div class=\"jarviswidget-editbox\">\r\n                                    </div>\r\n                                    <fieldset>\r\n                                        <div class=\"widget-body no-padding\">\r\n                                            <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\"\r\n                                                   [mfData]=\"fundReleaseOrder\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" width=\"100%\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><input type=\"checkbox\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\" [disabled] =\"viewMode\"></th>\r\n                                                        <th>Fund Request Type</th>\r\n                                                        <th>Fund Release Order</th>\r\n                                                        <th>Request Date</th>\r\n                                                        <th>Amount</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let order of mf.data\">\r\n                                                        <td class=\"\">\r\n                                                            <input type=\"checkbox\" [(ngModel)]=\"order.selected\" (change)=\"checkIfAllSelected(order);\" [disabled] =\"viewMode\">\r\n                                                        </td>\r\n                                                        <td>{{order.fundRequestTypeName}}</td>\r\n                                                        <td>{{order.fundReleaseOrderHdrId}}</td>\r\n                                                        <td>{{order.requestDateString}}</td>\r\n                                                        <td>{{order.sanctionedAmount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot>\r\n                                                    <tr>\r\n                                                        <td colspan=\"8\" style=\"border-bottom:0px !important\">\r\n                                                            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tfoot>\r\n                                            </table>\r\n\r\n                                        </div>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </article>\r\n\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <div *ngIf=\"certificatesVisible\">\r\n                <div class=\"jarviswidget-editbox\">\r\n                </div>\r\n                <div class=\"widget-body no-padding\">\r\n                    <form class=\"smart-form smart-form-main\">\r\n                        <fieldset>\r\n                            <section>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Opening Balance <span [style.color]=\"!openingBalanceValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"openingBalance\" placeholder=\"Opening Balance\" [(ngModel)]=\"utilizationCertificate.openingBalance\"\r\n                                                   #openingBalance=\"ngModel\" [ngClass]=\"{'invalid-data': openingBalance.invalid && ( !openingBalanceValid || openingBalance.touched ),\r\n                                                        'valid-data': otherHospitalValid && otherHospital.valid  }\" required (change)=\"getBalance($event)\" [disabled] =\"viewMode\">\r\n                                        </label>\r\n                                        <div *ngIf=\"openingBalance.invalid && (!openingBalanceValid || openingBalance.touched)\">\r\n                                            <span style=\"color: red;\">Opening Balance is required </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Received During</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"receivedDuring\" placeholder=\"Received During\" NumbersOnly [(ngModel)]=\"utilizationCertificate.fundRecieved\"\r\n                                                   #receivedDuring=\"ngModel\" disabled=\"disabled\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Utilized <span [style.color]=\"!utilizedValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"number\" name=\"utilized\" placeholder=\"Utilized\" [(ngModel)]=\"utilizationCertificate.fundUtilized\"\r\n                                                   #utilized=\"ngModel\" [ngClass]=\"{'invalid-data': utilized.invalid && ( !utilizedValid || utilized.touched ),\r\n                                                        'valid-data': utilizedValid && utilized.valid  }\" required (change)=\"getBalance($event)\" [disabled] =\"viewMode\">\r\n                                        </label>\r\n                                        <div *ngIf=\"utilized.invalid && (!utilizedValid || utilized.touched)\">\r\n                                            <span style=\"color: red;\">Utilized is required </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col col-6\">\r\n                                        <label>Balance</label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"balance\" placeholder=\"Balance\" NumbersOnly [(ngModel)]=\"utilizationCertificate.balance\"\r\n                                                   #balance=\"ngModel\" disabled=\"disabled\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- widget grid -->\r\n            <form class=\"smart-form\" *ngIf=\"certificatesVisible\">\r\n                <fieldset class=\"top-10\"></fieldset>\r\n                <footer>\r\n                    <a class=\"btn btn-warning\" (click)=\"cancelClick()\"> Cancel</a>\r\n                    <a *ngIf=\"!viewMode\" id=\"btnSava\" class=\"btn btn-primary\" (click)=\"SubmitRequest()\"> Submit </a>\r\n\r\n                </footer>\r\n            </form>\r\n        </article>\r\n    </div>\r\n</div>\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <h4 class=\"modal-title\">Status Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p id=\"mesgSubmit\">{{successMessage}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"downloadRecipt()\">\r\n                    Download Receipt\r\n                </button>-->\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificate/utilizationcertificate.component.ts ***!
  \********************************************************************************/
/*! exports provided: UtilizationcertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizationcertificateComponent", function() { return UtilizationcertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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





var UtilizationcertificateComponent = /** @class */ (function () {
    //boardId: any;
    function UtilizationcertificateComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.showErrorMessage = false;
        this.sumofAmount = 0;
        this.ucId = 0;
        this.mode = "";
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
        this.maxDate = new Date();
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
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetFinancialYears();
        this.getBoardDetails();
        //this.boardId = 0;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.ucId = params["ucId"] != null ? Number(params["ucId"]) : 0;
            _this.mode = params["mode"];
        });
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
    UtilizationcertificateComponent.prototype.GetReleaseOrders = function (rloOfficeId, finYear, boardId) {
        var _this = this;
        debugger;
        this.dataService
            .GetReleaseOrders(rloOfficeId, finYear, boardId)
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
        this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, year, this.utilizationCertificate.boardId);
        this.certificatesVisible = true;
    };
    UtilizationcertificateComponent.prototype.getData = function () {
        if (this.utilizationCertificate.financialYearId != undefined && this.utilizationCertificate.financialYearId > 0
            && this.utilizationCertificate.boardId != undefined && this.utilizationCertificate.boardId > 0) {
            this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, this.utilizationCertificate.financialYearId, this.utilizationCertificate.boardId);
            this.certificatesVisible = true;
        }
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
                //this.utilizationCertificate.boardId = this.boardId;
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
        this.router.navigate(['alc/utilizationcertificatelist']);
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
        window.location.href = "alc/utilizationcertificatelist";
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
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], UtilizationcertificateComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expensesModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], UtilizationcertificateComponent.prototype, "expensesModal", void 0);
    UtilizationcertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilizationcertificate',
            template: __webpack_require__(/*! ./utilizationcertificate.component.html */ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.html"),
            styles: [__webpack_require__(/*! ./utilizationcertificate.component.css */ "./src/app/alc/utilizationcertificate/utilizationcertificate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UtilizationcertificateComponent);
    return UtilizationcertificateComponent;
}());



/***/ }),

/***/ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <div class=\"row\">\r\n        <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>utilisation Certificate Status</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <div class=\"widget-body no-padding\">\r\n                        <div class=\"ssv-search\">\r\n                            <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\">\r\n                            <button><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                        <p></p>\r\n                        <table class=\"table table-striped\" [mfData]=\"utilizationCertificateDetails\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        <mfDefaultSorter>Action</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"rloOfficeName\">RLO</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"dateString\">Date</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"openingBalance\">Opening Balance</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundRecieved\">Fund Received</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"fundUtilized\">FundUtilized</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"balance\">Balance</mfDefaultSorter>\r\n                                    </th>\r\n                                    <th>\r\n                                        <mfDefaultSorter by=\"financialYear\">Financial Year</mfDefaultSorter>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of mf.data|grdFilter: {rloOfficeName: searchText,dateString: searchText,openingBalance: searchText,\r\n                                    fundRecieved: searchText, fundUtilized: searchText, balance: searchText, financialYear: searchText}; let i=index;\">\r\n                                    <td class=\"\">\r\n                                        <a (click)=\"onViewClick(data)\" title=\"View\" class=\"txt-color-red\"><i class=\"fa fa-eye\"></i></a>\r\n                                        <a (click)=\"onPDFViewClick(data)\" title=\"PDF View\" class=\"txt-color-red\"><i class=\"fa fa-edit fa-lg\"></i></a>\r\n                                    </td>\r\n                                    <td>{{data.rloOfficeName}}</td>\r\n                                    <td>{{data.dateString}}</td>\r\n                                    <td>{{data.openingBalance}}</td>\r\n                                    <td>{{data.fundRecieved}}</td>\r\n                                    <td>{{data.fundUtilized}}</td>\r\n                                    <td>{{data.balance}}</td>\r\n                                    <td>{{data.financialYear}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"8\">\r\n                                        <div *ngIf=\"utilizationCertificateDetails.length>0\">\r\n                                            <ngb-pagination [collectionSize]=\"totalRows\" [(pageSize)]=\"pageSize\" [(page)]=\"page\" (pageChange)=\"changepage($event)\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n</section>\r\n<div bsModal #pdfModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Form-V Pdf</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Utilisation Certificate genarated, Please print or download.\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf('print')\">\r\n                    Print Utilisation Certificate\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf('download')\">\r\n                    Download Utilisation Certificate\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UtilizationcertificatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizationcertificatelistComponent", function() { return UtilizationcertificatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
        this.router.navigate(['alc/utilizationcertificate', { ucId: item.utilizationCertificateHdrId, mode: "view" }], { skipLocationChange: true });
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
        this.getUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    UtilizationcertificatelistComponent.prototype.getUtilizationCertificates = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getUtilizationCertificates(id, pageNo, pageSize)
            .subscribe(function (data) {
            _this.utilizationCertificateDetails = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    UtilizationcertificatelistComponent.prototype.changepage = function (page) {
        this.getUtilizationCertificates(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UtilizationcertificatelistComponent.prototype, "pdfModal", void 0);
    UtilizationcertificatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilizationcertificatelist',
            template: __webpack_require__(/*! ./utilizationcertificatelist.component.html */ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.html"),
            styles: [__webpack_require__(/*! ./utilizationcertificatelist.component.css */ "./src/app/alc/utilizationcertificatelist/utilizationcertificatelist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_2__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UtilizationcertificatelistComponent);
    return UtilizationcertificatelistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=alc-alc-module.js.map