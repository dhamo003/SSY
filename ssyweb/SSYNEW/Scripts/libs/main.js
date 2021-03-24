(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alc/alc.module": [
		"./src/app/alc/alc.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"default~alc-alc-module~ceo-ceo-module",
		"alc-alc-module"
	],
	"./ceo/ceo.module": [
		"./src/app/ceo/ceo.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"default~alc-alc-module~ceo-ceo-module",
		"ceo-ceo-module"
	],
	"./claim/claim.module": [
		"./src/app/claim/claim.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"claim-claim-module"
	],
	"./dlc/dlc.module": [
		"./src/app/dlc/dlc.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"dlc-dlc-module"
	],
	"./inspector/inspector.module": [
		"./src/app/inspector/inspector.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"inspector-inspector-module"
	],
	"./pfconfig/pfconfig.module": [
		"./src/app/pfconfig/pfconfig.module.ts",
		"pfconfig-pfconfig-module"
	],
	"./tresurer/tresurer.module": [
		"./src/app/tresurer/tresurer.module.ts",
		"default~alc-alc-module~ceo-ceo-module~claim-claim-module~dlc-dlc-module~inspector-inspector-module~t~fef680f5",
		"tresurer-tresurer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/UserService.ts":
/*!********************************!*\
  !*** ./src/app/UserService.ts ***!
  \********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_userurl_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/userurl.model */ "./src/app/models/userurl.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function _window() {
    // return the global native browser window object
    return window;
}
var UserService = /** @class */ (function () {
    function UserService(userinfo) {
        this.userinfo = userinfo;
        var win = _window();
        console.log(win.userTpe);
        console.log(win.userid);
        console.log(win.userMobileNo);
        userinfo.url = win.baseUrl;
        userinfo.benName = win.benName;
        userinfo.checkRegType = win.checkRegType;
        userinfo.chkAddData = win.chkAddData;
        userinfo.deptUserid = win.deptUserid;
        userinfo.district = win.district;
        userinfo.location = win.blocation;
        userinfo.loginType = win.loginType;
        userinfo.skipAdditionaldata = win.skipAdditionaldata;
        userinfo.subDiv = win.subDiv;
        userinfo.userid = win.userid;
        userinfo.userMobileNo = win.userMobileNo;
        userinfo.userName = win.userName;
        userinfo.userTpe = win.userTpe;
        userinfo.userTypeName = win.userTypeName;
        userinfo.token = win.token;
        debugger;
        userinfo.encData = win.encData;
        userinfo.serviceProvider = win.serviceProvider;
        userinfo.isDoubleVerification = win.isdoubleverification;
        localStorage.setItem('token', userinfo.token);
        this.user = Object.assign(new _models_userurl_model__WEBPACK_IMPORTED_MODULE_1__["UserUrl"](), this.userinfo);
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_models_userurl_model__WEBPACK_IMPORTED_MODULE_1__["UserUrl"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\r\n    background: rgba(0,0,0,0.4);\r\n    position: fixed;\r\n    display: block;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 99999;\r\n}\r\n\r\n    .loading span {\r\n        position: fixed;\r\n        left: 50%;\r\n        top: 50%;\r\n        border: solid 1px #ccc;\r\n        display: block;\r\n        padding: 20px 40px;\r\n        margin-left: -40px;\r\n        background: rgba(255,255,255,0.8);\r\n    }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n    </div>\r\n</div>\r\n<div class=\"loading\" style=\"display:none;\">\r\n    <span>Loading.....</span></div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserService */ "./src/app/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'SSYWBAngular';
        debugger;
        this.user = userService.user;
        if (this.user.url == "ClaimEntry") {
            this.router.navigate(['claim/Entry'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentClaims") {
            this.router.navigate(['agentclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "ClaimView") {
            this.router.navigate(['claim/ClaimView'], { skipLocationChange: true });
        }
        else if (this.user.url == "Claims") {
            this.router.navigate(['claim/Claims'], { skipLocationChange: true });
        }
        else if (this.user.url == "ClaimEntryNominee") {
            this.router.navigate(['nominee'], { skipLocationChange: true });
        }
        else if (this.user.url == "TrackClaimNominee") {
            this.router.navigate(['trackclaimnominee'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentclaimEntry") {
            this.router.navigate(['claim/agentclaimentry'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentclaims") {
            this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentdraftclaim") {
            this.router.navigate(['claim/agentdraft'], { skipLocationChange: true });
        }
        else if (this.user.url == "gripsresponse") {
            this.router.navigate(['claim/gripsresponse'], { skipLocationChange: true });
        }
        else if (this.user.url == "gripsdoubleverificationresponse") {
            this.router.navigate(['claim/gripsresponse'], { skipLocationChange: true });
        }
        else if (this.user.url == "draftclaim") {
            this.router.navigate(['claim/claimdraft'], { skipLocationChange: true });
        }
        else if (this.user.url == "claimTrack") {
            this.router.navigate(['claim/ClaimTrack'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentreferral") {
            this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });
        }
        else if (this.user.url == "referralclaims") {
            this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "legacylist") {
            this.router.navigate(['claim/legacylist'], { skipLocationChange: true });
        }
        else if (this.user.url == "legacyclaimentry") {
            this.router.navigate(['claim/legacyclaimentry'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfCollectionForm") {
            this.router.navigate(['claim/PfCollectionForm'], { skipLocationChange: true });
        }
        else if (this.user.url == "PfDeposit") {
            this.router.navigate(['claim/PfDeposit'], { skipLocationChange: true });
        }
        else if (this.user.url == "PfDepositedList") {
            this.router.navigate(['claim/PfDepositedList'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdeposit") {
            this.router.navigate(['claim/bulkpfdeposit'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdepositlist") {
            this.router.navigate(['claim/bulkpfdepositlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdepositcollectionlist") {
            this.router.navigate(['claim/bulkpfdepositcollectionlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfPayInSlipDepositedList") {
            this.router.navigate(['claim/pfPayInSlipDepositedList'], { skipLocationChange: true });
        }
        else if (this.user.url == "benpfdetails") {
            this.router.navigate(['claim/benpfdetails'], { skipLocationChange: true });
        }
        else if (this.user.url == "adjustemententryform") {
            this.router.navigate(['claim/adjustemententryform'], { skipLocationChange: true });
        }
        else if (this.user.url == "submittedlegacypfdetails") {
            this.router.navigate(['claim/submittedlegacypfdetails'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfconfiguration") {
            this.router.navigate(['pfconfig/pfconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfconfigurationlist") {
            this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "receiptbook") {
            this.router.navigate(['pfconfig/receiptbook'], { skipLocationChange: true });
        }
        else if (this.user.url == "receiptbooklist") {
            this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
        }
        else if (this.user.url == "educationconfiguration") {
            this.router.navigate(['pfconfig/educationconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "educationconfigurationlist") {
            this.router.navigate(['pfconfig/educationconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "healthfamilyconfiguration") {
            this.router.navigate(['pfconfig/healthfamilyconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "healthfamilyconfigurationlist") {
            this.router.navigate(['pfconfig/healthfamilyconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "deathconfiguration") {
            this.router.navigate(['pfconfig/deathconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "deathconfigurationlist") {
            this.router.navigate(['pfconfig/deathconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "disabilityconfiguration") {
            this.router.navigate(['pfconfig/disabilityconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "disabilityconfigurationlist") {
            this.router.navigate(['pfconfig/disabilityconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "benefitconfiguration") {
            this.router.navigate(['pfconfig/benefitconfiguration'], { skipLocationChange: true });
        }
        //
        ////ALC
        //else if (this.user.url == "pfCollectionForm") {
        //    this.router.navigate(['claim/PfCollectionForm'], { skipLocationChange: true });
        //}
        //else if (this.user.url == "PfDeposit") {
        //    this.router.navigate(['claim/PfDeposit'], { skipLocationChange: true });
        //}
        //else if (this.user.url == "PfDepositedList") {
        //    this.router.navigate(['claim/PfDepositedList'], { skipLocationChange: true });
        //}
        else if (this.user.url == "alcpendingapprovals") {
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcapprovals") {
            this.router.navigate(['alc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcrejection") {
            this.router.navigate(['alc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcsendback") {
            this.router.navigate(['alc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreview") {
            this.router.navigate(['alc/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcrefer") {
            this.router.navigate(['alc/referclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralreview") {
            this.router.navigate(['alc/referralreview'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralReject") {
            this.router.navigate(['alc/referralreject'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralApprove") {
            this.router.navigate(['alc/referralapproval'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralSendback") {
            this.router.navigate(['alc/referralsendback'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcpaymentprocessing") {
            this.router.navigate(['alc/paymentprocessing'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcfundrequest") {
            this.router.navigate(['alc/fundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreviewfundrequest") {
            this.router.navigate(['alc/reviewfundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcclaimstatus") {
            this.router.navigate(['alc/claimstatus'], { skipLocationChange: true });
        }
        //reviewfundrequest
        //
        else if (this.user.url == "alcfundrequested") {
            this.router.navigate(['alc/fundrequestedclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcpaymentprocessedlist") {
            this.router.navigate(['alc/paymentprocessedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreviewpaymentprocess") {
            this.router.navigate(['alc/reviewpaymentprocess'], { skipLocationChange: true });
        }
        //Utilization Certificate
        else if (this.user.url == "alcutilizationcertificatelist") {
            this.router.navigate(['alc/utilizationcertificatelist'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcutilizationcertificate") {
            this.router.navigate(['alc/utilizationcertificate'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfinterestcalculation") {
            this.router.navigate(['alc/pfinterestcalculation'], { skipLocationChange: true });
        }
        //DLC
        else if (this.user.url == "dlcpendingapprovals") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcapprovals") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcrejection") {
            this.router.navigate(['dlc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcsendback") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreview") {
            this.router.navigate(['dlc/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcrefer") {
            this.router.navigate(['dlc/referclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreferralreview") {
            this.router.navigate(['dlc/referralreview'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcfundrequested") {
            this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreviewfundrequest") {
            this.router.navigate(['dlc/reviewfundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcsendbackfundrequestlist") {
            this.router.navigate(['dlc/sendbackfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcforwardfundrequestlist") {
            this.router.navigate(['dlc/forwardfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcclaimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcutilizationcertificatelist") {
            this.router.navigate(['dlc/utilizationcertificatelist'], { skipLocationChange: true });
        }
        //else if (this.user.url == "dlcpfinterestcalculation") {
        //    this.router.navigate(['dlc/pfinterestcalculation'], { skipLocationChange: true });
        //}
        //Tresurer
        else if (this.user.url == "tresurerpaymentrelease") {
            this.router.navigate(['tresurer/paymentrelease'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerfundreleaselist") {
            this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerfundrelease") {
            this.router.navigate(['tresurer/fundrelease'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpaymentprocessedlist") {
            this.router.navigate(['tresurer/paymentprocessedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpendingfundreleaselist") {
            this.router.navigate(['tresurer/pendingfundreleaselist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpaymentreleasedlist") {
            this.router.navigate(['tresurer/paymentreleasedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerreviewpaymentrelease") {
            this.router.navigate(['tresurer/reviewpaymentrelease'], { skipLocationChange: true });
        }
        //Inspector
        else if (this.user.url == "inspectorpendingapprovals") {
            this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorapprovals") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorrejection") {
            this.router.navigate(['inspector/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorsendback") {
            this.router.navigate(['inspector/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorreview") {
            this.router.navigate(['inspector/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "forceclose") {
            this.router.navigate(['inspector/forcecloseclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorlegacylist") {
            this.router.navigate(['inspector/inspectorlegacylist'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorlegacyclaimentry") {
            this.router.navigate(['inspector/inspectorlegacyclaimentry'], { skipLocationChange: true });
        }
        else if (this.user.url == "searchstudent") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });
        }
        //CEO
        else if (this.user.url == "ceofundrequestlist") {
            this.router.navigate(['ceo/fundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceofundrequest") {
            this.router.navigate(['ceo/fundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceosendbackfundrequestlist") {
            this.router.navigate(['ceo/sendbackfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoapprovedfundrequestlist") {
            this.router.navigate(['ceo/approvedfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceorejectedfundrequestlist") {
            this.router.navigate(['ceo/rejectedfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoclaimstatus") {
            this.router.navigate(['ceo/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoreview") {
            this.router.navigate(['ceo/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoutilizationcertificatelist") {
            this.router.navigate(['ceo/utilizationcertificatelist'], { skipLocationChange: true });
        }
        //pfconfig
        else if (this.user.url == "pfinterestconfig") {
            this.router.navigate(['pfconfig/pfinterestconfig'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfinterestconfiglist") {
            this.router.navigate(['pfconfig/pfinterestconfiglist'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfcommissionconfig") {
            this.router.navigate(['pfconfig/pfcommissionconfig'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfcommissionconfiglist") {
            this.router.navigate(['pfconfig/pfcommissionconfiglist'], { skipLocationChange: true });
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserService */ "./src/app/UserService.ts");
/* harmony import */ var _models_userurl_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/userurl.model */ "./src/app/models/userurl.model.ts");
/* harmony import */ var _claim_entry_nominee_claim_entry_nominee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./claim-entry-nominee/claim-entry-nominee.component */ "./src/app/claim-entry-nominee/claim-entry-nominee.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_add_authorization_header_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/add-authorization-header.service */ "./src/app/services/add-authorization-header.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_claim_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/claim-data.service */ "./src/app/services/claim-data.service.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _number_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./number.directive */ "./src/app/number.directive.ts");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/angular-epic-spinners.es5.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _track_claim_nominee_track_claim_nominee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./track-claim-nominee/track-claim-nominee.component */ "./src/app/track-claim-nominee/track-claim-nominee.component.ts");
/* harmony import */ var _pf_pfconfiguartion_pfconfiguartion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pf/pfconfiguartion/pfconfiguartion.component */ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//import { FundRequestListComponent } from './ceo/fund-request-list/fund-request-list.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _claim_entry_nominee_claim_entry_nominee_component__WEBPACK_IMPORTED_MODULE_8__["ClaimEntryNomineeComponent"],
                _number_directive__WEBPACK_IMPORTED_MODULE_15__["NumberOnlyDirective"],
                _track_claim_nominee_track_claim_nominee_component__WEBPACK_IMPORTED_MODULE_21__["TrackClaimNomineeComponent"],
                _pf_pfconfiguartion_pfconfiguartion_component__WEBPACK_IMPORTED_MODULE_22__["PfconfiguartionComponent"] //,
                //FundRequestListComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__["NgDatepickerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"].forRoot(),
                angular_epic_spinners__WEBPACK_IMPORTED_MODULE_16__["AtomSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__["PdfViewerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: 'claim',
                        loadChildren: './claim/claim.module#ClaimModule',
                    },
                    {
                        path: 'inspector',
                        loadChildren: './inspector/inspector.module#InspectorModule',
                    },
                    {
                        path: 'dlc',
                        loadChildren: './dlc/dlc.module#DlcModule',
                    },
                    {
                        path: 'alc',
                        loadChildren: './alc/alc.module#AlcModule',
                    },
                    {
                        path: 'tresurer',
                        loadChildren: './tresurer/tresurer.module#TresurerModule',
                    },
                    {
                        path: 'ceo',
                        loadChildren: './ceo/ceo.module#CeoModule',
                    },
                    {
                        path: 'nominee', component: _claim_entry_nominee_claim_entry_nominee_component__WEBPACK_IMPORTED_MODULE_8__["ClaimEntryNomineeComponent"]
                    },
                    {
                        path: 'trackclaimnominee', component: _track_claim_nominee_track_claim_nominee_component__WEBPACK_IMPORTED_MODULE_21__["TrackClaimNomineeComponent"]
                    },
                    {
                        path: 'pfconfig',
                        loadChildren: './pfconfig/pfconfig.module#PfconfigModule',
                    },
                ])
            ],
            providers: [_UserService__WEBPACK_IMPORTED_MODULE_6__["UserService"], _models_userurl_model__WEBPACK_IMPORTED_MODULE_7__["UserUrl"], _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_18__["ExcelService"],
                _services_claim_data_service__WEBPACK_IMPORTED_MODULE_13__["ClaimNomineeDataService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _services_add_authorization_header_service__WEBPACK_IMPORTED_MODULE_10__["AddAuthorizationHeader"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/claim-entry-nominee/claim-entry-nominee.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/claim-entry-nominee/claim-entry-nominee.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-data {\r\n    border: 1px solid red;\r\n}\r\n\r\n.valid-data {\r\n    border: 1px solid rgb(19, 92, 4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/claim-entry-nominee/claim-entry-nominee.component.html":
/*!************************************************************************!*\
  !*** ./src/app/claim-entry-nominee/claim-entry-nominee.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<section id=\"widget-grid\" class=\"\">\r\n    <!-- row -->\r\n    <div class=\"row\">\r\n        <!-- NEW WIDGET START -->\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <!-- Widget ID (each widget will need unique ID)-->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Claim Entry</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form\">\r\n                            <header>Beneficiary Details</header>\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\" *ngIf=\"beneficiary==null\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please enter valid SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"benficiaryInactive\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Your registration application is in Inactive/Sent Back/Pending status and you are not eligible to this feature.</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"validateDependent\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please add atleast one claim to proceed</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"noDependents\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>No dependents available for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"maxLimitExceeded\">\r\n                                        <div class=\"col col-12\" style=\"color:red\">\r\n                                            <label>Maximum claims limit has been reached for this year</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"maxHelathClaimLimitExceeded\">\r\n                                        <div class=\"col col-12\" style=\"color:red\">\r\n                                            <label>Maximum claims limit for health has been reached for this year</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"pfExsits\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>No pf available for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isPFSubmitted\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>PF claim already submitted for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"!isNomineesExist\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>No nominees available for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"!isNomineesMatch\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please enter valid nominee details</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isHFSubmitted\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Your not eligible for Health & Family claim for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isEduSubmitted\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Your not eligible for Education claim for the given SSIN number</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isBenNomineeSubmittedClaim\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Claims are entered through the nominee/agent with the reason of death, till it is resolved you are not allowed to submit the claim</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isCAFUpdated\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Please update details</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" *ngIf=\"isClaimEffectiveDate\">\r\n                                        <div class=\"col col-12\" style=\"color:red; margin-bottom:10px;\">\r\n                                            <label>Can not raise/submit claims before {{claimEffectiveDate | date: 'dd/MM/yyyy'}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-3\">\r\n                                            <label class=\"radio\">\r\n                                                <input type=\"radio\" name=\"radio-inline\" checked=\"checked\" (change)=\"radioChange(1)\" />\r\n                                                <i></i>SSIN\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col col-3\">\r\n                                            <label class=\"radio\">\r\n                                                <input type=\"radio\" name=\"radio-inline\" (change)=\"radioChange(2)\" />\r\n                                                <!--[(ngModel)]=\"fundRequestType\" value=\"expenses\">-->\r\n                                                <i></i>Old Registration No.\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col col-3\">\r\n                                        </div>\r\n                                        <div class=\"col col-3\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateCAFDetails()\" *ngIf=\"isCAFUpdated\">\r\n                                                Please update details\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">SSIN/Old Registration No. <span [style.color]=\"!ssnNoValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"benSno\" class=\"form-control\" [(ngModel)]=\"ssin\" placeholder=\"Enter SSIN/Old Registration No.\"\r\n                                                   (change)=\"valuechange($event.target.value)\"\r\n                                                   maxlength=\"50\"\r\n                                                   #benSno=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': benSno.invalid && (!ssnNoValid || benSno.touched), 'valid-data': benSno.valid && ssnNoValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"benSno.invalid && (!ssnNoValid ||benSno.touched)\">\r\n                                                <span style=\"color: red;\">SSIN/Old Registration No is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Nominee Name <span [style.color]=\"!nomineeNameValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"nomineeName\" class=\"form-control\" placeholder=\"Nominee Name\" [(ngModel)]=\"claim.nomineeName\" maxlength=\"100\"\r\n                                                   #nomineeName=\"ngModel\" (change)=\"ValidateNomineeName($event.target.value)\"\r\n                                                   [ngClass]=\"{'invalid-data': nomineeName.invalid && (!nomineeNameValid || nomineeName.touched ), 'valid-data': nomineeName.valid && nomineeNameValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"nomineeName.invalid && (!nomineeNameValid ||nomineeName.touched)\">\r\n                                                <span style=\"color: red;\">Nominee Name is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Nominee Address</label>\r\n                                            <label class=\"input\">\r\n                                                <textarea name=\"nomineeAddress\" class=\"form-control\" rows=\"4\" cols=\"40\" placeholder=\"Nominee Address\" [(ngModel)]=\"claim.nomineeAddress\" maxlength=\"500\"></textarea>\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Contact Number <span [style.color]=\"!nomineeContactValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"nomineeContact\" class=\"form-control\" placeholder=\"Contact Number\" [(ngModel)]=\"claim.nomineeContact\" NumbersOnly minlength=\"10\" maxlength=\"10\"\r\n                                                   #nomineeContact=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': nomineeContact.invalid && (!nomineeContactValid || nomineeContact.touched ), 'valid-data': nomineeContact.valid && nomineeContactValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"nomineeContact.invalid && (!nomineeContactValid ||nomineeContact.touched) && !nomineeContact.errors.minlength\">\r\n                                                <span style=\"color: red;\">Contact Number is required </span>\r\n                                            </div>\r\n                                            <div *ngIf=\"nomineeContact.invalid && (nomineeContact.errors.minlength) \">\r\n                                                <span style=\"color: red;\">Invalid Contact Number </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Nominee Date of Birth <span [style.color]=\"!nomineeDOBValid?'red':''\"><b>*</b></span></label>\r\n\r\n                                            <input type=\"text\" name=\"nomineeDOB\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   [maxDate]=\"maxDate\" placeholder=\"DD/MM/YYYY\"\r\n                                                   #nomineeDOB=\"ngModel\" (bsValueChange)=\"ValidateNomineeDOB($event)\"\r\n                                                   value=\"{{ claim.nomineeDOB | date: 'dd/MM/yyyy' }}\" [(ngModel)]=\"claim.nomineeDOB\" readonly\r\n                                                   [ngClass]=\"{'invalid-data':nomineeDOB.invalid && (!nomineeDOBValid), 'valid-data':nomineeDOB.valid && nomineeDOBValid}\"\r\n                                                   required>\r\n                                            <i></i>\r\n\r\n                                            <div *ngIf=\"nomineeDOB.invalid && (!nomineeDOBValid)\">\r\n                                                <span style=\"color: red;\">Nominee Date of Birth is required </span>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Nominee Bank Account <span [style.color]=\"!nomineeBankAccountValid?'red':''\"><b>*</b></span> </label>\r\n                                            <input type=\"text\" name=\"nomineeBankAccount\" class=\"form-control\" placeholder=\"Nominee Bank Account \" [(ngModel)]=\"claim.nomineeBankAccount\" minlength=\"9\" maxlength=\"18\" NumbersOnly\r\n                                                   #nomineeBankAccount=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': nomineeBankAccount.invalid && (!nomineeBankAccountValid || nomineeBankAccount.touched ), 'valid-data': nomineeBankAccount.valid && nomineeBankAccountValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"nomineeBankAccount.invalid && (!nomineeBankAccountValid ||nomineeBankAccount.touched) && !nomineeBankAccount.errors.minlength\">\r\n                                                <span style=\"color: red;\">Nominee Bank Account is required </span>\r\n                                            </div>\r\n                                            <div *ngIf=\"nomineeBankAccount.invalid && (nomineeBankAccount.errors.minlength)\">\r\n                                                <span style=\"color: red;\">Invalid Bank Account Number </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">IFSC Code </label>\r\n                                            <input type=\"text\" name=\"nomineeIFSCCode\" class=\"form-control\" placeholder=\"IFSC Code\" [(ngModel)]=\"claim.nomineeIFSCCode\" maxlength=\"11\">\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                            </fieldset>\r\n                            <fieldset>\r\n                                <div class=\"row\" id=\"CheckBoxList\">\r\n                                    <div class=\"col col-3\">\r\n                                        <!--<label class=\"checkbox state-success\"><input type=\"checkbox\" disabled=\"disabled\" name=\"checkbox\" [checked]=\"viewPf\" (change)=\"pfChange($event)\"><i></i>PF(Provident Fund)</label>-->\r\n                                        <label class=\"checkbox state-success\"><input name=\"pf\" [disabled]=\"beneficiary.benFirstName == undefined || !beneficiary.isActive || disablePFCheckbox\" type=\"checkbox\" [checked]=\"viewPf\" (change)=\"pfChange($event)\"><i></i>PF(Provident Fund)</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" [disabled]=\"beneficiary.benFirstName == undefined || !beneficiary.isActive || disableHealthCheckbox\" name=\"checkbox1\" [checked]=\"viewHealth\" (change)=\"healthChange($event)\"><i></i>Health & Family</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" [disabled]=\"beneficiary.benFirstName == undefined || !beneficiary.isActive\" name=\"viewDeath1\" [checked]=\"viewDeath\" (change)=\"deathChange($event)\"><i></i>Death</label>\r\n                                    </div>\r\n                                    <div class=\"col col-3\">\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox1\" [disabled]=\"beneficiary.benFirstName == undefined || !beneficiary.isActive || disableEduCheckbox\" [checked]=\"viewEducation\" (change)=\"educationChange($event)\"><i></i>Education</label>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"form-pf\" *ngIf=\"viewPf\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label class=\"label\">\r\n                                                    PF No. {{beneficiary.regNumber}}\r\n                                                </label>\r\n                                                <!--removed as per 17th discussions, in future this has to be open-->\r\n                                                <!--<input type=\"text\" class=\"form-control\" name=\"pFNO\" placeholder=\" PF Number\" [(ngModel)]=\"claim.providentFundDetails.pFNO\">-->\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label class=\"label\">\r\n                                                    Claim Amount {{pfClaimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <!--<section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label class=\"label\">\r\n                                                    Date of Maturity {{benMaturityDate  | date: 'dd/MM/yyyy'}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label class=\"label\">\r\n                                                    Locking Period Up-to\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>-->\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label class=\"label\">\r\n                                                    Type of Claim  FinalPayment\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"viewNomineeShare\">\r\n                                                <label class=\"label\">\r\n                                                    Nominee Share Amount {{benNomineeShareAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </fieldset>\r\n                            <fieldset id=\"health-family\" *ngIf=\"viewHealth\">\r\n                                <header>Health & Family</header>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Type of Claim<span [style.color]=\"!typeOfClaimValid?'red':''\"><b>*</b></span></label>\r\n\r\n                                        <select class=\"form-control select\" name=\"typeOfClaim\" id=\"selclaim\" (change)=\"typeOfClaimChange($event.target.value)\" [(ngModel)]=\"claim.healthFamilyDetails.typeOfClaim\"\r\n                                                #typeOfClaim=\"ngModel\"\r\n                                                [ngClass]=\"{'invalid-data': typeOfClaim.invalid && ( !typeOfClaimValid || typeOfClaim.touched ),\r\n                                        'valid-data': typeOfClaimValid && typeOfClaim.valid  }\"\r\n                                                required>\r\n                                            <option value=\"0\" disabled>Choose a Type of Claim</option>\r\n                                            <option value=\"{{health.claimConfigId}}\" *ngFor=\"let health of healthConfig\">{{health.claimConfigOptionName}}</option>\r\n                                        </select> <i></i>\r\n                                        <div *ngIf=\"typeOfClaim.invalid && (!typeOfClaimValid || typeOfClaim.touched)\">\r\n                                            <span style=\"color: red;\">Select a Type of Claim </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Hospital <span [style.color]=\"!hospital?'red':''\"><b>*</b></span></label>\r\n\r\n                                        <select class=\"form-control select\" name=\"hospitalId\" id=\"ddlhospital\" [(ngModel)]=\"claim.healthFamilyDetails.hospitalId\"\r\n                                                #hospitalId=\"ngModel\" (change)=\"hospitalChange($event.target.value)\"\r\n                                                [ngClass]=\"{'invalid-data': hospitalId.invalid && ( !hospital || hospitalId.touched ),\r\n                                        'valid-data': hospital && hospitalId.valid  }\"\r\n                                                required>\r\n                                            <option value=\"0\" disabled>Choose a Hospital</option>\r\n                                            <option value=\"{{hospital.hospitalId}}\" *ngFor=\"let hospital of hospotalList\">{{hospital.hospitalName}}</option>\r\n                                        </select> <i></i>\r\n\r\n                                        <div *ngIf=\"hospitalId.invalid && (!hospital || hospitalId.touched)\">\r\n                                            <span style=\"color: red;\">Select a Hospital </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"isOtherHospital\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Govt./Municipal Hospital <span [style.color]=\"!otherHospitalValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"otherHospital\" placeholder=\"Govt./Municipal Hospital\" [(ngModel)]=\"claim.healthFamilyDetails.otherHospital\"\r\n                                                   maxlength=\"150\" #otherHospital=\"ngModel\" [ngClass]=\"{'invalid-data': otherHospital.invalid && ( !otherHospitalValid || otherHospital.touched ),\r\n                                                        'valid-data': otherHospitalValid && otherHospital.valid  }\" required>\r\n                                        </label>\r\n                                        <div *ngIf=\"otherHospital.invalid && (!otherHospitalValid || otherHospital.touched)\">\r\n                                            <span style=\"color: red;\">Govt./Municipal Hospital is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\" id=\"inoutward\">\r\n                                        <label class=\"label\">Hospitalization/OPD <span [style.color]=\"!hospitalization?'red':''\"><b>*</b></span></label>\r\n\r\n                                        <select class=\"form-control select\" name=\"typeOfHospitalization\" id=\"ddinward\" (change)=\"hospitalizationChange($event.target.value)\"\r\n                                                [(ngModel)]=\"claim.healthFamilyDetails.typeOfHospitalization\"\r\n                                                #typeOfHospitalization=\"ngModel\"\r\n                                                [ngClass]=\"{'invalid-data': typeOfHospitalization.invalid && (!hospitalization || typeOfHospitalization.touched ),\r\n                                        'valid-data': hospitalization && typeOfHospitalization.valid  }\"\r\n                                                required>\r\n                                            <option value=\"0\" disabled>Choose an Option</option>\r\n                                            <option value=\"{{hosp.lovDtlId}}\" *ngFor=\"let hosp of hospitalizationLov\">{{hosp.optionName}}</option>\r\n                                        </select><i></i>\r\n\r\n                                        <div *ngIf=\"typeOfHospitalization.invalid && (!hospitalization || typeOfHospitalization.touched)\">\r\n                                            <span style=\"color: red;\">Select Hospitalization/OPD </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Patient Id </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"patientId\" placeholder=\"Patient Id\" [(ngModel)]=\"claim.healthFamilyDetails.patientId\" maxlength=\"50\">\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"viewDateOfFirstAppointment\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Name of Disease </label>\r\n\r\n                                        <select class=\"form-control select\" name=\"nameOfDisease\" id=\"ddinward\" (change)=\"nameOfDiseaseChange($event.target.value)\"\r\n                                                [(ngModel)]=\"claim.healthFamilyDetails.nameOfTheDisease\">\r\n                                            <option value=\"0\" disabled>Choose an Option</option>\r\n                                            <option value=\"{{dise.lovDtlId}}\" *ngFor=\"let dise of diseasesLov\">{{dise.optionName}}</option>\r\n                                        </select><i></i>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" *ngIf=\"viewNameOfClinicalTest\">\r\n                                        <label class=\"label\">Name of clinical test </label>\r\n                                        <ng-multiselect-dropdown name=\"nameOfClinicalTest\" [placeholder]=\"'All'\"\r\n                                                                 [data]=\"clinicalTestLov\"\r\n                                                                 [(ngModel)]=\"nameOfClinicalTestIds\"\r\n                                                                 [settings]=\"clinicalTestSettings\"\r\n                                                                 (onSelect)=\"onItemSelect($event)\"\r\n                                                                 (onSelectAll)=\"onSelectAll($event)\">\r\n                                        </ng-multiselect-dropdown>\r\n                                        <!--<select class=\"form-control select\" name=\"nameOfClinicalTest\" id=\"ddinward\"\r\n                                                [(ngModel)]=\"claim.healthFamilyDetails.nameOfClinicalTest\">\r\n                                            <option value=\"0\" disabled>Choose an Option</option>\r\n                                            <option value=\"{{clin.lovDtlId}}\" *ngFor=\"let clin of clinicalTestLov\">{{clin.optionName}}</option>\r\n                                        </select><i></i>-->\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section id=\"chkAccident\" class=\"col col-6\" *ngIf=\"viewMetWithAnAccident\">\r\n                                        <label class=\"label\">Met with an Accident?</label>\r\n                                        <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"isAccident\" id=\"chkAcc\" (change)=\"chkAccidentChange($event,claim.healthFamilyDetails.isAccident)\" [(ngModel)]=\"claim.healthFamilyDetails.isAccident\"><i></i>Yes</label>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" id=\"secFirstApp\" *ngIf=\"viewDateOfFirstAppointment\">\r\n                                        <label class=\"label\">Date of First Appointment <span [style.color]=\"!dateofAppointment?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"firstAppointmentDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   [maxDate]=\"maxAdmitDate\" placeholder=\"DD/MM/YYYY\" value=\"{{ claim.healthFamilyDetails.firstAppointmentDate | date: 'dd/MM/yyyy' }}\"\r\n                                                   [(ngModel)]=\"claim.healthFamilyDetails.firstAppointmentDate\" readonly\r\n                                                   #firstAppointmentDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':firstAppointmentDate.invalid && (!dateofAppointment), 'valid-data': firstAppointmentDate.valid && dateofAppointment}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"firstAppointmentDate.invalid && (!dateofAppointment)\">\r\n                                            <span style=\"color: red;\">Date of First Appointment is required </span>\r\n                                        </div>\r\n\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"viewDateOfAdmit\">\r\n                                    <section class=\"col col-6\" id=\"secAdmit\">\r\n                                        <label class=\"label\">Date of Admission to Hospital <span [style.color]=\"!dateofAdmin?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <!--<input type=\"text\" name=\"dateofAdmit\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" [maxDate]=\"maxAdmitDate\" placeholder=\"DD/MM/YYYY\" value=\"{{ claim.healthFamilyDetails.admittedDate | date: 'dd/MM/yyyy' }}\" [(ngModel)]=\"claim.healthFamilyDetails.admittedDate\" (bsValueChange)=\"dateofadminchange($event)\" readonly>-->\r\n\r\n                                            <input type=\"text\" name=\"admittedDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   [maxDate]=\"maxAdmitDate\"\r\n                                                   #admittedDate=\"ngModel\"\r\n                                                   placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"claim.healthFamilyDetails.admittedDate\"\r\n                                                   value=\"{{ claim.healthFamilyDetails.admittedDate | date: 'dd/MM/yyyy' }}\"\r\n                                                   (bsValueChange)=\"dateofadminchange($event)\" readonly\r\n                                                   [ngClass]=\"{'invalid-data':admittedDate.invalid && (!dateofAdmin), 'valid-data':admittedDate.valid && dateofAdmin}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"admittedDate.invalid && (!dateofAdmin)\">\r\n                                            <span style=\"color: red;\">Date of Admission to Hospital is required </span>\r\n                                            of\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" id=\"secDischarge\">\r\n                                        <label class=\"label\">Date of Discharge <span [style.color]=\"!dateofDischargeValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <!--<input type=\"text\" name=\"dateofDischarge\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" [maxDate]=\"maxAdmitDate\" [minDate]=\"dischargeMinDt\" [disabled]=\"disableDischarge\" placeholder=\"DD/MM/YYYY\" value=\"claim.healthFamilyDetails.dischargeDate | date: 'dd/MM/yyyy'\" [(ngModel)]=\"claim.healthFamilyDetails.dischargeDate\" (bsValueChange)=\"dateofdischargechange($event)\" readonly>-->\r\n                                            <input type=\"text\" name=\"dischargeDate\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\"\r\n                                                   [maxDate]=\"maxAdmitDate\"\r\n                                                   [minDate]=\"dischargeMinDt\" [disabled]=\"disableDischarge\" placeholder=\"DD/MM/YYYY\"\r\n                                                   #dischargeDate=\"ngModel\"\r\n                                                   [(ngModel)]=\"claim.healthFamilyDetails.dischargeDate\"\r\n                                                   value=\"{{claim.healthFamilyDetails.dischargeDate | date: 'dd/MM/yyyy'}}\"\r\n                                                   (bsValueChange)=\"dateofdischargechange($event)\" readonly\r\n                                                   [ngClass]=\"{'invalid-data':dischargeDate.invalid && (!dateofDischargeValid), 'valid-data':dischargeDate.valid && dateofDischargeValid}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"dischargeDate.invalid && (!dateofDischargeValid)\">\r\n                                            <span style=\"color: red;\">Date of discharge is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Cost of Clinical Test </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"costOfClinicalTest\" placeholder=\"Cost of Clinical Test\" NumbersOnly [(ngModel)]=\"claim.healthFamilyDetails.costOfClinicalTest\" [disabled]=\"disableCost\">\r\n                                        </label>\r\n                                    </section>\r\n\r\n                                    <section class=\"col col-6\">\r\n\r\n                                        <label class=\"label\">Cost of Medicine </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"costOfMedicine\" placeholder=\"Cost of Medicine\" NumbersOnly [(ngModel)]=\"claim.healthFamilyDetails.costOfMedicine\" [disabled]=\"disableCost\">\r\n                                        </label>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Claim for <span [style.color]=\"!claimForValid?'red':''\"><b>*</b></span></label>\r\n\r\n                                        <select class=\"form-control select\" name=\"claimFor\" id=\"claimFor\" (change)=\"claimForChange($event)\"\r\n                                                [(ngModel)]=\"claim.healthFamilyDetails.claimFor\"\r\n                                                #claimFor=\"ngModel\"\r\n                                                [ngClass]=\"{'invalid-data':claimFor.invalid && (!claimForValid ||  claimFor.touched ), 'valid-data': claimFor.valid && claimForValid}\"\r\n                                                required>\r\n                                            <option value=\"0\" disabled>Choose an Option</option>\r\n                                            <option value=\"{{htype.lovDtlId}}\" *ngFor=\"let htype of healthtypeofClaim\">{{htype.optionName}}</option>\r\n                                        </select> <i></i>\r\n\r\n\r\n                                        <div *ngIf=\"claimFor.invalid && (!claimForValid ||  claimFor.touched)\">\r\n                                            <span style=\"color: red;\">Claim for is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" *ngIf=\"viewDateOfAdmit\">\r\n                                        <label class=\"label\">Cost of Hospitalization </label>\r\n                                        <label class=\"input\">\r\n                                            <input type=\"text\" name=\"costOfHospitalization\" NumbersOnly placeholder=\"Cost of Hospitalization\" [(ngModel)]=\"claim.healthFamilyDetails.costOfHospitalization\">\r\n                                        </label>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" id=\"family\" *ngIf=\"viewFamily\">\r\n                                        <label class=\"label\">Family Member <span [style.color]=\"!familyMember?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"select\">\r\n                                            <select class=\"form-control select\" name=\"familyMemberId\" [(ngModel)]=\"claim.healthFamilyDetails.familyMemberId\"\r\n                                                    #familyMemberId=\"ngModel\"\r\n                                                    [ngClass]=\"{'invalid-data':familyMemberId.invalid && (!familyMember ||  familyMemberId.touched), 'valid-data': familyMemberId.valid && familyMember}\"\r\n                                                    required>\r\n                                                <option value=\"0\" disabled>Choose an Option</option>\r\n                                                <option value=\"{{benf.benFamilyMemSno}}\" *ngFor=\"let benf of benficiaryFamilybyHealth\">{{benf.benDependentName}} - {{benf.benDependentRelation}}</option>\r\n                                            </select> <i></i>\r\n                                        </label>\r\n                                        <div *ngIf=\"familyMemberId.invalid && (!familyMember ||  familyMemberId.touched)\">\r\n                                            <span style=\"color: red;\">Family Member is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\" *ngIf=\"enableReasonForDelaySubmissionInHealth\">\r\n                                        <label class=\"label\">Reason for Delay Submission <span [style.color]=\"!reasonForHealthDelayValid?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <textarea name=\"reasonForHealthDelay\" rows=\"4\" cols=\"72\" [(ngModel)]=\"claim.healthFamilyDetails.reasonForDelaySubmission\" placeholder=\"Reason for Delay Submission\"></textarea>\r\n                                        </label>\r\n                                        <div *ngIf=\"!reasonForHealthDelayValid\">\r\n                                            <span style=\"color: red;\">Reason for Delay Submission is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row top-10\" id=\"lossOfEmployment\" *ngIf=\"viewSelf\">\r\n                                    <section class=\"col col-12\" style=\"margin-bottom: 0;\">\r\n                                        <label class=\"label\"><strong>Loss of Employment</strong></label>\r\n                                        <hr />\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row top-10\" id=\"daterangeloe\" *ngIf=\"viewSelf\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">From Date<span [style.color]=\"!loeFromDate?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"lossOfEmploymentFromDate\" autocomplete=\"off\" class=\"form-control\"\r\n                                                   [disabled]=\"true\" placeholder=\"DD/MM/YYYY\"\r\n                                                   [ngModel]=\"claim.healthFamilyDetails.loeFromDate | date: 'dd/MM/yyyy'\" readonly\r\n                                                   #lossOfEmploymentFromDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':lossOfEmploymentFromDate.invalid && (!loeFromDate ||  lossOfEmploymentFromDate.touched), 'valid-data': lossOfEmploymentFromDate.valid && loeFromDate}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"lossOfEmploymentFromDate.invalid && (!loeFromDate ||  lossOfEmploymentFromDate.touched)\">\r\n                                            <span style=\"color: red;\">Form Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">To Date<span [style.color]=\"!loeToDate?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"lossOfEmploymentToDate\" autocomplete=\"off\" class=\"form-control\"\r\n                                                   [disabled]=\"true\" placeholder=\"DD/MM/YYYY\"\r\n                                                   [ngModel]=\"claim.healthFamilyDetails.loeToDate | date: 'dd/MM/yyyy'\" readonly\r\n                                                   #lossOfEmploymentToDate=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data':lossOfEmploymentToDate.invalid && (!loeToDate ||  lossOfEmploymentToDate.touched), 'valid-data': lossOfEmploymentToDate.valid && loeToDate}\"\r\n                                                   required>\r\n                                        </label>\r\n                                        <div *ngIf=\"lossOfEmploymentToDate.invalid && (!loeToDate ||  lossOfEmploymentToDate.touched)\">\r\n                                            <span style=\"color: red;\">To Date is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\" *ngIf=\"viewLOEAmount\">\r\n                                        <label class=\"label\" style=\"margin-top:30px;\">Loss of Employment Benefit: {{lossOfEmploymentAmount}}/- </label>\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"><strong>Packages</strong> </label><br>\r\n                                        <hr />\r\n                                    </section>\r\n\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <a (click)=\"viewPackages()\" class=\"smart-form-link\">View All Packages</a>\r\n                                    </section>\r\n\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                    <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Package Name</th>\r\n                                                <th> Package Code</th>\r\n                                                <th>Ailment Name</th>\r\n                                                <th>Amount</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let pak of selectedPackages\">\r\n                                                <td>{{pak.packageName}}</td>\r\n                                                <td>{{pak.packageCode}}</td>\r\n                                                <td>{{pak.ailmentName}}</td>\r\n                                                <td>{{pak.amount}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"><strong>Upload Documents</strong> </label><br>\r\n                                        <hr />\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"showDisCertUpload\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">\r\n                                            Discharge Certificate from Govt./Empanelled Hospital\r\n                                            <span [style.color]=\"!dischargeCertificate?'red':''\"><b>*</b></span>\r\n                                        </label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'dischargeCertificate')\">Browse</span>\r\n                                            <input type=\"text\" readonly>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"(!dischargeCertificate) && (healthDischargeCertificate.fileName =='' || healthDischargeCertificate.fileName ==undefined )\">\r\n                                            <span style=\"color: red;\">Discharge certificate is required </span>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{healthDischargeCertificate.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Original Vouchers </label>  <!--<span [style.color]=\"!originalVoucher?'red':''\"><b>*</b></span>-->\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" accept=\"image/*,.pdf\" (change)=\"changeCertificate($event,'originalVoucher')\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                        <!--<div *ngIf=\"(!originalVoucher) && (healthOriginalVoucher.fileName =='' || healthOriginalVoucher.fileName ==undefined)\">\r\n                <span style=\"color: red;\">Original vouchers is required </span>\r\n            </div>-->\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{healthOriginalVoucher.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Self attested copy of doctor's last prescription <span [style.color]=\"!hospitalselfAttested?'red':''\"><b>*</b></span></label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'healthselfAttest')\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                        <div *ngIf=\"(!hospitalselfAttested) && (healthSelfAttached.fileName =='' || healthSelfAttached.fileName ==undefined )\">\r\n                                            <span style=\"color: red;\">Self attested is required </span>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{healthSelfAttached.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Expenses Sheet </label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'healthExpensesSheet')\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{healthExpensesSheet.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"enableReasonForDelaySubmissionInHealth\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Condonation certificate  <span [style.color]=\"!healthCondolationCertificateUploaded?'red':''\"><b>*</b></span></label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"healthCondolationCertificate\" (change)=\"changeCertificate($event,'healthCondolationCertificate')\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                        <div *ngIf=\"(!healthCondolationCertificateUploaded) && (healthCondolationCertificate.fileName =='' || healthCondolationCertificate.fileName == undefined )\">\r\n                                            <span style=\"color: red;\">Condonation certificate is required </span>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{healthCondolationCertificate.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label class=\"label\">Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n\r\n                                                <input type=\"checkbox\" name=\"isCertifynotESI\" [(ngModel)]=\"claim.healthFamilyDetails.isCertifynotESI\"\r\n                                                       #isCertifynotESI=\"ngModel\"\r\n                                                       [ngClass]=\"{'invalid-data':isCertifynotESI.invalid && (!rigisterESI ||  isCertifynotESI.touched), 'valid-data': isCertifynotESI.valid && rigisterESI}\"\r\n                                                       required>\r\n                                                <i></i>I Certify that\r\n                                                I am not registered under ESI Act, 1948 or RSBY or Swasthya Sathi or WBTWSSS\r\n                                                <span [style.color]=\"!rigisterESI?'red':''\"><b>*</b></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"isCertifynotESI.invalid && (!rigisterESI ||  isCertifynotESI.touched)\">\r\n                                                <span style=\"color: red;\">Declaration of ESI Act is required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset id=\"death\" *ngIf=\"viewDeath\">\r\n                                <header>Death</header>\r\n                                <div class=\"row\" id=\"divdeath1\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Nature of Death <span [style.color]=\"!natureOfDeath?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"select\">\r\n                                            <select name=\"gender\" id=\"natureofDeathDropdown\" (change)=\"natureOfDeathChange($event.target.value)\" [(ngModel)]=\"claim.deathDetails.natureofDeath\"\r\n                                                    #natureofDeathDropdown=\"ngModel\"\r\n                                                    [ngClass]=\"{'invalid-data': natureofDeathDropdown.invalid && ( !natureOfDeath || natureofDeathDropdown.touched ),\r\n                                                    'valid-data': natureOfDeath && natureofDeathDropdown.valid  }\" required>\r\n                                                <option value=\"0\" disabled>Choose an Option</option>\r\n                                                <option value=\"{{death.claimConfigId}}\" *ngFor=\"let death of deathConfig\">{{death.claimConfigOptionName}}</option>\r\n                                            </select> <i></i>\r\n                                        </label>\r\n                                        <div *ngIf=\"natureofDeathDropdown.invalid && (!natureOfDeath || natureofDeathDropdown.touched)\">\r\n                                            <span style=\"color: red;\">Select Nature of Death </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Date of Death <span [style.color]=\"!dateofDeath?'red':''\"><b>*</b></span></label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <!--<input type=\"text\" name=\"deathDatePicker\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" [maxDate]=\"maxAdmitDate\" placeholder=\"DD/MM/YYYY\"\r\n                [(bsValue)]=\"claim.deathDetails.dateofDeath\" readonly>-->\r\n                                            <input type=\"text\" name=\"dateofDeathDatePicker\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" [maxDate]=\"maxAdmitDate\"\r\n                                                   placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"claim.deathDetails.dateofDeath\"\r\n                                                   value=\"{{ claim.deathDetails.dateofDeath | date: 'dd/MM/yyyy' }}\"\r\n                                                   #dateofDeathDatePicker=\"ngModel\" readonly\r\n                                                   [ngClass]=\"{'invalid-data':dateofDeathDatePicker.invalid && (!dateofDeath),\r\n                                                   'valid-data':dateofDeathDatePicker.valid && dateofDeath}\" required>\r\n\r\n                                        </label>\r\n                                        <div *ngIf=\"dateofDeathDatePicker.invalid && (!dateofDeath)\">\r\n                                            <span style=\"color: red;\">Date of Death is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" id=\"divdeath2\">\r\n                                    <section class=\"col col-6\" id=\"PlaceOfDeath\" *ngIf=\"viewAccidental\">\r\n                                        <label class=\"label\">Place of Death<span [style.color]=\"!placeOfDeathValid?'red':''\"><b>*</b></span> </label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"placeofDeath\" placeholder=\" Place of Death\" #placeofDeath=\"ngModel\"\r\n                                               [(ngModel)]=\"claim.deathDetails.placeofDeath\"\r\n                                               [ngClass]=\"{'invalid-data': placeofDeath.invalid && (!placeOfDeathValid || placeofDeath.touched), 'valid-data': placeofDeath.valid && placeOfDeathValid }\" required />\r\n                                        <div *ngIf=\"placeofDeath.invalid && (!placeOfDeathValid ||placeofDeath.touched)\">\r\n                                            <span style=\"color: red;\">Place of Death is required </span>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"> Details of Death</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea name=\"detailsofDeath\" rows=\"4\" cols=\"72\" placeholder=\"Details of death\" [(ngModel)]=\"claim.deathDetails.detailsofDeath\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\" id=\"eligibleAmountdeath\" *ngIf=\"viewEligibilityAmount\">\r\n                                        <label class=\"label\">Eligible Amount: {{deathEligibility}} </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"><strong>Upload Documents</strong> </label><br>\r\n                                        <hr />\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Attested copy of Death Certificate<span [style.color]=\"!deathCertificateUploaded?'red':''\"><b>*</b></span></label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'deathCertificate')\">Browse</span><input type=\"text\" readonly>\r\n                                            <!--<span class=\"button\"><input type=\"file\" id=\"file\" onchange=\"this.parentNode.nextSibling.value = this.value\">Browse</span><input type=\"text\" readonly>-->\r\n                                        </div>\r\n                                        <div *ngIf=\"(!deathCertificateUploaded) && (deathCertificate.fileName =='' || deathCertificate.fileName ==undefined )\">\r\n                                            <span style=\"color: red;\">Death certificate is required </span>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{deathCertificate.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">First Page of Bank Passbook<span [style.color]=\"!bankPassbookUploaded?'red':''\"><b>*</b></span></label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'bankPassbook')\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                        <div *ngIf=\"(!bankPassbookUploaded) && (bankPassbook.fileName =='' || bankPassbook.fileName ==undefined )\">\r\n                                            <span style=\"color: red;\">First Page of Bank Passbook is required </span>\r\n                                        </div>\r\n                                        <div>\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <td>{{bankPassbook.fileName}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section style=\"padding-top:30px\" class=\"col col-6\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n\r\n                                                <input type=\"checkbox\" name=\"isDeathnotcausedbyintentional\" [(ngModel)]=\"claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional\"\r\n                                                       #isDeathnotcausedbyintentional=\"ngModel\" [ngClass]=\"{'invalid-data':isDeathnotcausedbyintentional.invalid && (!isDeath1 ||  isDeathnotcausedbyintentional.touched), 'valid-data': isDeathnotcausedbyintentional.valid && isDeath1}\"\r\n                                                       required>\r\n                                                <i></i>I Certify that the Death or permanent disability not caused by intentional self injury, suicide or attempted suicide, insanity or immorality or under influence of intoxicating liquor, drug or narcotic\r\n                                                <span [style.color]=\"!isDeath1?'red':''\"><b>*</b></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"isDeathnotcausedbyintentional.invalid && (!isDeath1 ||  isDeathnotcausedbyintentional.touched)\">\r\n                                                <span style=\"color: red;\">Declaration of Death or permanent disability not caused by intentional self injury is required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n                                                <input type=\"checkbox\" name=\"isDeathnotcausedbyinjuries\" [(ngModel)]=\"claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries\"\r\n                                                       #isDeathnotcausedbyinjuries=\"ngModel\" [ngClass]=\"{'invalid-data':isDeathnotcausedbyinjuries.invalid && (!isDeath2 ||  isDeathnotcausedbyinjuries.touched), 'valid-data': isDeathnotcausedbyinjuries.valid && isDeath2}\"\r\n                                                       required>\r\n                                                <i></i>I Certify that Death or permanent disability not caused by injuries resulting from riots, civil commotions, or racing of any kind\r\n                                                <span [style.color]=\"!isDeath2?'red':''\"><b>*</b></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"isDeathnotcausedbyinjuries.invalid && (!isDeath2 ||  isDeathnotcausedbyinjuries.touched)\">\r\n                                                <span style=\"color: red;\">Declaration of Death or permanent disability not caused by injuries is required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n                                                <input type=\"checkbox\" name=\"isDeathOtherFinancialAssistance\" [(ngModel)]=\"claim.deathDetails.isOtherFinancialAssistance\"\r\n                                                       #isDeathOtherFinancialAssistance=\"ngModel\" [ngClass]=\"{'invalid-data':isDeathOtherFinancialAssistance.invalid && (!isDeath3 ||  isDeathOtherFinancialAssistance.touched), 'valid-data': isDeathOtherFinancialAssistance.valid && isDeath3}\"\r\n                                                       required>\r\n                                                <i></i>I Certify that I am not in receipt of any financial assistance of similar nature from the government\r\n                                                <span [style.color]=\"!isDeath3?'red':''\"><b>*</b></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"isDeathOtherFinancialAssistance.invalid && (!isDeath3 ||  isDeathOtherFinancialAssistance.touched)\">\r\n                                                <span style=\"color: red;\">Declaration of not in receipt of any financial assistance is required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>\r\n                            <!--<fieldset id=\"death-diasability\" *ngIf=\"viewDeath\">\r\n                                <header>Death & Disability</header>\r\n                                <div class=\"row\" id=\"divdisability1\" style=\"display: none;\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Date of release from hospital/Accident</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"request\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" formControlName=\"dtDateOfReleaseFromHospital\" placeholder=\"DD/MM/YYYY\">\r\n                                        </label>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Nature of Disability</label>\r\n                                        <label class=\"select\">\r\n                                            <select name=\"gender\" id=\"natureOfDisability\" onchange=\"amountDisplay()\">\r\n                                                <option value=\"0\">Choose an Option</option>\r\n                                                <option value=\"{{dis.claimConfigId}}\" *ngFor=\"let dis of disabilityConfig\">{{dis.claimConfigOptionName}}</option>\r\n\r\n                                            </select> <i></i>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" id=\"divdisability2\" style=\"display: none;\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"> Details of Disability</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea name=\"request\" rows=\"4\" cols=\"72\" placeholder=\"Details of disability\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\" id=\"eligibleAmount\" style=\"display: none;\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\"><strong>Eligible Amount:</strong> </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label id=\"amtbasedonDisability\"> </label>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" id=\"divdeath1\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Nature of Death</label>\r\n                                        <label class=\"select\">\r\n                                            <select name=\"natureofDeath\" id=\"selnature\" (change)=\"natureOfDeathChange($event.target.value)\" [(ngModel)]=\"claim.deathDetails.natureofDeath\">\r\n                                                <option value=\"0\">Choose an Option</option>\r\n                                                <option value=\"{{death.claimConfigId}}\" *ngFor=\"let death of deathConfig\">{{death.claimConfigOptionName}}</option>\r\n\r\n                                            </select> <i></i>\r\n                                        </label>\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Date of Death</label>\r\n                                        <label class=\"input\">\r\n                                            <i class=\"icon-append fa fa-calendar\"></i>\r\n                                            <input type=\"text\" name=\"dateofDeath\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" formControlName=\"dtDateofDeath\" placeholder=\"DD/MM/YYYY\"\r\n                                                   [(bsValue)]=\"claim.deathDetails.dateofDeath\">\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\" id=\"divdeath2\">\r\n                                    <section class=\"col col-6\" id=\"PlaceOfDeath\" *ngIf=\"viewAccidental\">\r\n                                        <label class=\"label\">Place of Death </label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"placeofDeath\" placeholder=\" Place of Death\" [(ngModel)]=\"claim.deathDetails.placeofDeath\">\r\n                                    </section>\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"> Details of Death</label>\r\n                                        <label class=\"input\">\r\n                                            <textarea name=\"detailsofDeath\" rows=\"4\" cols=\"72\" placeholder=\"Details of disability\" [(ngModel)]=\"claim.deathDetails.detailsofDeath\"></textarea>\r\n                                        </label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\" id=\"eligibleAmountdeath\" *ngIf=\"viewEligibilityAmount\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\"><strong>Eligible Amount:</strong> </label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label id=\"amtbasedonDisability\">{{deathEligibility}}</label>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"><strong>Upload Documents</strong> </label><br>\r\n                                        <hr />\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Attested copy of Death Certificate</label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" onchange=\"this.parentNode.nextSibling.value = this.value\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6 top-5\">\r\n                                        <label class=\"label\">Certificate of disability from the competent authority</label>\r\n                                        <div class=\"input input-file\">\r\n                                            <span class=\"button\"><input type=\"file\" id=\"file\" onchange=\"this.parentNode.nextSibling.value = this.value\">Browse</span><input type=\"text\" readonly>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n                                                <input type=\"checkbox\" name=\"isDeathorpermanentdisabilitynotcausedbyintentional\" [(ngModel)]=\"claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional\"><i></i>I Certify that the\r\n                                                Death or permanent disability not caused by intentional self injury, suicide or attempted suicide, insanity or immorality or under influence of intoxicating liquor, drug or narcotic\r\n                                            </label>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"isDeathorpermanentdisabilitynotcausedbyinjuries\" [(ngModel)]=\"claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries\"><i></i>I Certify that Death or permanent disability not caused by injuries resulting from riots, civil commotions, or racing of any kind</label>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"isOtherFinancialAssistance\" [(ngModel)]=\"claim.deathDetails.isOtherFinancialAssistance\"><i></i>I Certify that I am not in receipt of any financial assistance of similar nature from the government</label>\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                            </fieldset>-->\r\n                            <fieldset id=\"education\" *ngIf=\"viewEducation\" [disabled]=\"disableEdu\">\r\n                                <header>Education </header>\r\n\r\n\r\n\r\n                                <fieldset id=\"addbutton\">\r\n                                    <div class=\"row\" *ngIf=\"eduCount<2\">\r\n                                        <a class=\"btn btn-primary\" (click)=\"openModel()\" style=\"width :55px;height:30px;padding:5px;\" button> Add </a>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <table id=\"datatable_fixed_column\" class=\"table table-striped table-bordered\" width=\"100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Name of the Student</th>\r\n                                                    <th>Name of the Institution</th>\r\n                                                    <th> Contact Number of the Institution</th>\r\n                                                    <th>Registration No./Roll No./Year</th>\r\n                                                    <th> Present Reading</th>\r\n                                                    <th></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngIf=\"educationDetailsArray.length==0\"><td colspan=\"6\">No student details</td></tr>\r\n                                                <tr *ngFor=\"let education of educationDetailsArray\">\r\n                                                    <td>{{education.dependentName}}</td>\r\n                                                    <td>{{education.institutionName}}</td>\r\n                                                    <td>{{education.institutionContact}}</td>\r\n                                                    <td>{{education.registrationRollNo}}</td>\r\n                                                    <td>{{education.presentlyReadingName}}</td>\r\n                                                    <td>\r\n                                                        <a class=\"btn btn-labeled btn-primary\" (click)=\"editEducationDetails(education)\" style=\"margin-right:5px;\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</a>\r\n                                                        <a class=\"btn btn-labeled btn-danger\" (click)=\"removeEducationDetails(education)\"><i class=\"glyphicon glyphicon-trash\"></i> Remove</a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\">Amount Claimed</label>\r\n                                        <label class=\"form-control\" disabled>{{claim.educationDetails.claimAmount}}</label>\r\n                                    </section>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <section class=\"col col-6\">\r\n                                        <label class=\"label\"><strong>Upload Documents</strong> </label><br>\r\n                                        <hr />\r\n                                    </section>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <section>\r\n                                        <div class=\"col col-12\">\r\n                                            <label class=\"checkbox state-success\">\r\n                                                <input type=\"checkbox\" name=\"isanyothersourceofthegovernment\"\r\n                                                       [(ngModel)]=\"claim.educationDetails.isanyothersourceofthegovernment\"\r\n                                                       #isanyothersourceofthegovernment=\"ngModel\"\r\n                                                       [ngClass]=\"{'invalid-data':isanyothersourceofthegovernment.invalid && (!educationCheck ||  isanyothersourceofthegovernment.touched), 'valid-data': isanyothersourceofthegovernment.valid && educationCheck}\"\r\n                                                       required>\r\n                                                <i></i>I Certify that My son or daughter is not availing or has not availed any scholarship for the above mentioned courses from any other source of the government\r\n                                                <span [style.color]=\"!educationCheck?'red':''\"><b>*</b></span>\r\n                                            </label>\r\n                                            <div *ngIf=\"isanyothersourceofthegovernment.invalid && (!educationCheck ||  isanyothersourceofthegovernment.touched)\">\r\n                                                <span style=\"color: red;\">Check education terms and conditions </span>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </section>\r\n                                </div>\r\n                                <!-- <div class=\"row\"> -->\r\n                                <!-- <section class=\"col\"> -->\r\n                                <!-- <label class=\"label\">Acknowledge:</label> -->\r\n                                <!-- <div class=\"col-12\"> -->\r\n                                <!-- <label class=\"checkbox state-success\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Certified that son/ daughter is not availing / has not availed any scholarship for the above mentioned course from any other source. <br> -->\r\n                                <!-- Documents to be enclosed*: Certificate from the Head of the institution that the student is not availing/ has not availed any scholarship for the above mentioned course form any other source of the Government and is presently continuing with said course in the institution, copy of the deposite slip of fee regarding adminssion/ Identity Card.<br> -->\r\n                                <!-- Certificate regarding .................... -->\r\n                                <!-- </label> -->\r\n                                <!-- </div> -->\r\n                                <!-- </section>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n                                <!-- </div> -->\r\n                            </fieldset>\r\n                            <div *ngIf=\"viewPf || viewHealth || viewDeath|| viewEducation\">\r\n                                <header>Upload Documents</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label class=\"label\">Form - V duly filled and signed <span [style.color]=\"!uplaodmain?'red':''\"><b>*</b></span></label>\r\n                                                <div class=\"input input-file\">\r\n                                                    <span class=\"button\"><input type=\"file\" id=\"file\" (change)=\"changeCertificate($event,'main')\" [disabled]=\"disableSubmitbutton || restrictSave\">Browse</span><input type=\"text\" readonly >\r\n                                                </div>\r\n                                                <div *ngIf=\"(!uplaodmain) && (mainUpload?.fileName =='' || mainUpload?.fileName ==undefined )\">\r\n                                                    <span style=\"color: red;\">Form - V is required </span>\r\n                                                </div>\r\n                                                <div>\r\n                                                    {{mainUpload?.fileName}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <footer>\r\n                                <a id=\"btnGeneratePdf\" class=\"btn btn-success\" [class.disabled]=\"restrictSave\" (click)=\"GenaratePdf(claim,3)\">Generate Pdf</a>\r\n                                <a id=\"btnSava\" class=\"btn btn-success\" name=\"q\" [class.disabled]=\"disableSubmitbutton || restrictSave\" (click)=\"saveClaimsData(claim)\">Submit</a>\r\n                                <a class=\"btn btn-default\" (click)=\"claerClaim()\">Reset</a>\r\n                                <a class=\"btn btn-danger\" href=\"/\">Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                    <!-- end widget content -->\r\n                </div>\r\n                <!-- end widget div -->\r\n            </div>\r\n            <!-- end widget -->\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n    <!-- end row -->\r\n</section>\r\n<!-- end widget grid -->\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Add Student Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <fieldset id=\"divAddEducationDetails\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 \">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label control-label\"> Name of the Student <span [style.color]=\"!studentNameValid?'red':''\"><b>*</b></span></label>\r\n                                <select class=\"form-control select\" name=\"dependentId\" (change)=\"selectDependent($event)\" [(ngModel)]=\"educationDetails.dependentId\"\r\n                                        #dependentId=\"ngModel\"\r\n                                        [ngClass]=\"{'invalid-data': dependentId.invalid && ( !studentNameValid || dependentId.touched ),\r\n                                        'valid-data': studentNameValid && dependentId.valid  }\"\r\n                                        required>\r\n                                    <option value=\"0\" selected disabled>Choose a Student</option>\r\n                                    <option value=\"{{ben.benFamilyMemSno}}\" *ngFor=\"let ben of benficiaryFamily\">{{ben.benDependentName}} - {{ben.benDependentRelation}}</option>\r\n                                </select>\r\n                                <i></i>\r\n                                <div *ngIf=\"dependentId.invalid && (!studentNameValid || dependentId.touched)\">\r\n                                    <span style=\"color: red;\">Select a Student </span>\r\n                                </div>\r\n                                <div *ngIf=\"isDuplicateDependent\">\r\n                                    <span style=\"color: red;\">Already submitted for this year please select another dependent </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Name of the Institution <span [style.color]=\"!institutionNameValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"institutionName\" placeholder=\"Name of the Institution\" [(ngModel)]=\"educationDetails.institutionName\"\r\n                                       #institutionName=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': institutionName.invalid && (!institutionNameValid || institutionName.touched), 'valid-data': institutionName.valid && institutionNameValid}\" class=\"form-control\"\r\n                                       required>\r\n                                <div *ngIf=\"institutionName.invalid && (!institutionNameValid ||institutionName.touched)\">\r\n                                    <span style=\"color: red;\">Name of the Institution is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Name of the Principal/Head Master of the institution</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"institutionPrinicipleName\" placeholder=\"Institution Principal Name\" [(ngModel)]=\"educationDetails.institutionPrinicipleName\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Contact Number of the Institution</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"institutionContact\" placeholder=\"Institution Contact\" [(ngModel)]=\"educationDetails.institutionContact\"\r\n                                       NumbersOnly maxlength=\"15\"\r\n                                       #institutionContact=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': !institutionContactValid }\">\r\n                                <div *ngIf=\"!institutionContactValid\">\r\n                                    <span style=\"color: red;\">Invalid Contact Number of the Institution</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Registration No./Roll No. of last exam passed  <span [style.color]=\"!registrationNoValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"registrationRollNo\" placeholder=\"Registration No./Roll No. of last exam passed \" [(ngModel)]=\"educationDetails.registrationRollNo\"\r\n                                       #registrationRollNo=\"ngModel\"\r\n                                       [ngClass]=\"{'invalid-data': registrationRollNo.invalid && (!registrationNoValid || registrationRollNo.touched), 'valid-data': registrationRollNo.valid && registrationNoValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"registrationRollNo.invalid && (!registrationNoValid ||registrationRollNo.touched)\">\r\n                                    <span style=\"color: red;\">Registration No./Roll No. of last exam passed is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Year of Examination <span [style.color]=\"!educationYearValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"year\" placeholder=\"Year\" [(ngModel)]=\"educationDetails.year\" maxlength=\"4\" NumbersOnly> <!--readonly-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\" *ngIf=\"isMarried\">\r\n                            <div class=\"form-group\">\r\n                                <div>\r\n                                    <label for=\"label\">Is Married <span [style.color]=\"!marriedValid?'red':''\"><b>*</b></span></label>\r\n                                    <input type=\"radio\" value=\"1\" name=\"gender\" required #gender=\"ngModel\" [(ngModel)]=\"educationDetails.isMarried\"> Yes\r\n                                    <input type=\"radio\" value=\"0\" name=\"gender\" required #gender=\"ngModel\" [(ngModel)]=\"educationDetails.isMarried\">No\r\n                                </div>\r\n\r\n                                <div *ngIf=\"!marriedValid\">\r\n                                    <!--*ngIf=\"gender.invalid && (!marriedValid || gender.touched)\"-->\r\n                                    <span style=\"color: red;\">Is Married is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Last Exam Passed</label>\r\n                                <select name=\"lastExamPassed\" class=\"form-control\" (change)=\"selectLastExamPassed($event,educationDetails)\" [(ngModel)]=\"educationDetails.lastExamPassed\">\r\n                                    <option value=\"00\" disabled>Choose Reading</option>\r\n                                    <option value=\"{{lep.lovDtlId}}\" *ngFor=\"let lep of lastExampassed\">{{lep.optionName}}</option>\r\n\r\n                                </select> <i></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Date of Admission <span *ngIf=\"!isDisabledBaseOnLastExamPassed\" [style.color]=\"!dateOfAdmissionValid?'red':''\"><b>*</b></span></label>\r\n                                <input type=\"text\" name=\"dateofAdmission\" autocomplete=\"off\" class=\"form-control\" bsDatepicker [bsConfig]=\"datePickerConfig\" [maxDate]=\"maxDate\" placeholder=\"DD/MM/YYYY\"\r\n                                       #dateofAdmission=\"ngModel\" [disabled]=\"isDisabledBaseOnLastExamPassed\"\r\n                                       [(ngModel)]=\"educationDetails.dateofAdmission\" readonly\r\n                                       value=\"{{ educationDetails.dateofAdmission | date: 'dd/MM/yyyy' }}\"\r\n                                       [ngClass]=\"{'invalid-data':dateofAdmission.invalid && (!dateOfAdmissionValid || dateofAdmission.touched), 'valid-data':dateofAdmission.valid && dateOfAdmissionValid}\"\r\n                                       required>\r\n                                <div *ngIf=\"dateofAdmission.invalid && (!dateOfAdmissionValid || dateofAdmission.touched)\">\r\n                                    <span style=\"color: red;\">Date of Admission is required </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\"> Presently Reading <span *ngIf=\"!isDisabledBaseOnLastExamPassed\" [style.color]=\"!presentlyReadingValid?'red':''\"><b>*</b></span></label>\r\n                                <select name=\"presentlyReading\" class=\"form-control\" (change)=\"selectPresentlyReading($event,educationDetails)\"\r\n                                        [(ngModel)]=\"educationDetails.presentlyReading\" #presentlyReading=\"ngModel\" [disabled]=\"isDisabledBaseOnLastExamPassed\"\r\n                                        [ngClass]=\"{'invalid-data': presentlyReading.invalid && ( !presentlyReadingValid || presentlyReading.touched ),\r\n                                        'valid-data': presentlyReadingValid && presentlyReading.valid  }\"\r\n                                        required>\r\n                                    <option value=\"0\" disabled>Choose Reading</option>\r\n                                    <option value=\"{{edu.claimConfigId}}\" *ngFor=\"let edu of educationConfig\">{{edu.claimConfigOptionName}}</option>\r\n                                </select> <i></i>\r\n                                <div *ngIf=\"presentlyReading.invalid && (!presentlyReadingValid || presentlyReading.touched)\">\r\n                                    <span style=\"color: red;\">Select a Presently reading </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"label\">Eligible Amount</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"eligibleAmount\" [(ngModel)]=\"educationDetails.eligibleAmount\" disabled />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 smart-form\">\r\n                        <header>Upload Documents</header>\r\n                        <div class=\"row\" *ngIf=\"!isDisabledBaseOnLastExamPassed\">\r\n                            <section class=\"col col-10 top-5\">\r\n                                <label class=\"label\">Certificate from head of institution for not availing any scholarship <span [style.color]=\"!uploadCertificatetValid?'red':''\"><b>*</b></span> </label>\r\n\r\n                                <div class=\"input input-file\">\r\n                                    <span class=\"button\">\r\n                                        <input type=\"file\" id=\"file\" accept=\"image/*,.pdf\" multiple (change)=\"changeCertificate($event,'certificate')\">Browse\r\n                                    </span>\r\n                                    <input type=\"text\" readonly>\r\n                                    <label>Document limit is upto 2MB, JPEG/PNG/PDF</label>\r\n                                </div>\r\n                                <div *ngIf=\"!uploadCertificatetValid && educertificates.length==0\">\r\n                                    <span style=\"color: red;\"> Certificate required </span>\r\n                                </div>\r\n                                <div>\r\n                                    <table>\r\n                                        <tr *ngFor=\"let item of educertificates\">\r\n                                            <td>{{item.fileName}}</td>\r\n                                            <td style=\"padding-left:10px\"> <a class=\"btn btn-danger\" (click)=\"removeUploadCertificates(item,'certificate')\">      <i class=\"glyphicon glyphicon-trash\"></i> Remove</a></td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </section>\r\n                            <!--<section style=\"padding-top:30px\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>-->\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"viewuploadNonMarriage\">\r\n                            <section class=\"col col-10 top-5\">\r\n                                <label class=\"label\">Non marriage certificate of Daughter <span [style.color]=\"!uploadNonMarriageValid?'red':''\"><b>*</b></span></label>\r\n                                <div class=\"input input-file\">\r\n                                    <span class=\"button\"><input type=\"file\" accept=\"image/*,.pdf\" multiple (change)=\"changeCertificate($event,'nonMarriage')\" id=\"file\">Browse</span><input type=\"text\" readonly>\r\n                                    <label>Document limit is upto 2MB, JPEG/PNG/PDF</label>\r\n                                </div>\r\n                                <div *ngIf=\"!uploadNonMarriageValid && eduNonMarriage.length==0\">\r\n                                    <span style=\"color: red;\"> Non marriage certificate of Daughter required </span>\r\n                                </div>\r\n                                <div>\r\n                                    <table>\r\n                                        <tr *ngFor=\"let item of eduNonMarriage\">\r\n                                            <td>{{item.fileName}}</td>\r\n                                            <td style=\"padding-left:10px\"> <a class=\"btn btn-danger\" (click)=\"removeUploadCertificates(item,'nonMarriage')\"><i class=\"glyphicon glyphicon-trash\"></i> Remove</a></td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </section>\r\n                            <!--<section style=\"padding-top:30px\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>-->\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <section class=\"col col-10 top-5\">\r\n                                <label class=\"label\">Self attested copy of last exam passing certificate <span [style.color]=\"!uploadselfattestedValid?'red':''\"><b>*</b></span></label>\r\n                                <div class=\"input input-file\">\r\n                                    <span class=\"button\"><input type=\"file\" id=\"file\" accept=\"image/*,.pdf\" multiple (change)=\"changeCertificate($event,'selfAttest')\">Browse</span>\r\n                                    <input type=\"text\" readonly>\r\n                                    <label>Document limit is upto 2MB, JPEG/PNG/PDF</label>\r\n                                </div>\r\n                                <div *ngIf=\"!uploadselfattestedValid && eduSelfAttested.length==0\">\r\n                                    <span style=\"color: red;\"> Self attested required </span>\r\n                                </div>\r\n                                <div>\r\n                                    <table>\r\n                                        <tr *ngFor=\"let item of eduSelfAttested\">\r\n                                            <td>{{item.fileName}}</td>\r\n                                            <td style=\"padding-left:10px\"> <a class=\"btn btn-danger\" (click)=\"removeUploadCertificates(item,'selfAttest')\"><i class=\"glyphicon glyphicon-trash\"></i> Remove</a></td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </section>\r\n                            <!--<section style=\"padding-top:30px\"><label>Document limit is upto 2MB, JPEG/PNG/PDF</label></section>-->\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"lgModal.hide()\">\r\n                    Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addEducationDetails(educationDetails)\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n                <div>\r\n                    <label style=\"background-color:orange\">Download Receipts</label>\r\n                </div>\r\n                <div class=\"row\" *ngFor=\"let c of genaratePdfs\">\r\n                    <div style=\"padding-left:20px;padding-bottom:8px\">\r\n                        <a style=\"cursor:pointer\" (click)=\"downloadRecipt(c.refNo,c.amount,c.name)\"> {{c.refNo}} </a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #pdfModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Form-V Pdf</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Form-V genarated, Please print or download.\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf(claim,'print')\">\r\n                    Print FormV\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"downLoadPdf(claim,'download')\">\r\n                    Download FormV\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #packageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"packageModal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Packages</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngFor=\"let item of result\" border=\"1\">\r\n                    {{item.name}}\r\n                    <table class=\"table table-striped\">\r\n\r\n                        <tr>\r\n                            <th>\r\n                                <input type=\"checkbox\" value=\"checkAll\" name=\"checkall\" (change)=\"checkAll($event,item.name)\" />\r\n                            </th>\r\n                            <th>\r\n                                Package Name\r\n                            <th>\r\n                                Package Code\r\n                            </th>\r\n                            <th>\r\n                                Amount\r\n                            </th>\r\n\r\n                        </tr>\r\n\r\n                        <ng-container>\r\n\r\n                            <tr *ngFor=\"let value of item.values;let i=index;\">\r\n                                <td>\r\n                                    <input type=\"checkbox\" name=\"{{i}}\" [(ngModel)]=\"value.isChecked\" (change)=\"checkIfAllSelected(item);\" />\r\n                                </td>\r\n                                <td>{{value.packageName}}</td>\r\n                                <td>{{value.packageCode}}</td>\r\n                                <td>{{value.amount}}</td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                    </table>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitClick()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/claim-entry-nominee/claim-entry-nominee.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/claim-entry-nominee/claim-entry-nominee.component.ts ***!
  \**********************************************************************/
/*! exports provided: ClaimEntryNomineeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimEntryNomineeComponent", function() { return ClaimEntryNomineeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_claim_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/claim-data.service */ "./src/app/services/claim-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClaimEntryNomineeComponent = /** @class */ (function () {
    function ClaimEntryNomineeComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.claimId = 0;
        this.claimStatus = 0;
        this.viewuploadNonMarriage = false;
        this.viewPf = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewEducation = false;
        this.viewDateOfFirstAppointment = false;
        this.viewNameOfClinicalTest = false;
        this.viewDateOfAdmit = false;
        this.viewMetWithAnAccident = false;
        this.viewFamily = false;
        this.viewSelf = false;
        this.viewLOEAmount = false;
        this.viewAccidental = false;
        this.viewEligibilityAmount = false;
        this.disableSubmitbutton = true;
        this.claim = {};
        this.educationDetails = {};
        this.educationDetailsArray = [];
        this.beneficiary = {};
        this.eduCount = 0;
        //Validation Claim Entry variables
        this.ssnNoValid = true;
        this.nomineeNameValid = true;
        this.nomineeContactValid = true;
        this.nomineeDOBValid = true;
        this.nomineeBankAccountValid = true;
        //Validation Education variables
        this.studentNameValid = true;
        this.institutionNameValid = true;
        this.registrationNoValid = true;
        this.institutionContactValid = true;
        this.educationYearValid = true;
        this.dateOfAdmissionValid = true;
        this.presentlyReadingValid = true;
        this.disableEdu = false;
        this.maxLimitExceeded = false;
        this.maxHelathClaimLimitExceeded = false;
        this.noDependents = false;
        this.benficiaryInactive = false;
        this.educationCheck = true;
        this.uploadselfattestedValid = true;
        this.uploadNonMarriageValid = true;
        this.uploadCertificatetValid = true;
        this.uplaodmain = true;
        this.page = 4;
        this.rowIndex = -1;
        this.rowEligibleAmount = 0;
        this.totalHealthClaimAmount = 0;
        this.typeOfAilmentClaimedAmount = 0;
        this.surgeryClaimedAmount = 0;
        this.lossOfEmploymentAmount = 0;
        this.validateDependent = false;
        this.restrictSave = false;
        // health & family 
        this.typeOfClaimValid = false;
        this.hospital = false;
        this.hospitalization = false;
        this.dateofAdmin = false;
        this.dateofDischargeValid = false;
        this.claimForValid = false;
        this.familyMember = false;
        this.hospitalselfAttested = false;
        this.isOtherHospital = false;
        this.otherHospitalValid = false;
        this.hospotalId = 0;
        this.disableCost = true;
        //originalVoucher: boolean = false;
        this.dischargeCertificate = false;
        this.rigisterESI = false;
        this.dateofAppointment = false;
        this.loeFromDate = false;
        this.loeToDate = false;
        this.showDisCertUpload = true;
        this.healthCondolationCertificate = {};
        this.reasonForHealthDelayValid = false;
        this.enableReasonForDelaySubmissionInHealth = false;
        this.isHealthClaimEdit = false;
        this.healthCondolationCertificateUploaded = false;
        this.disableDischarge = true;
        this.healthOriginalVoucher = {};
        this.healthSelfAttached = {};
        this.healthDischargeCertificate = {};
        this.healthExpensesSheet = {};
        this.healthAttachmentList = [];
        this.genaratePdfs = [];
        this.mainUploadList = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.eduSelfAttested = [];
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
        this.educationClaimExceptionDetails = [];
        this.healthClaimExceptionDetails = [];
        this.benficiaryNominee = [];
        //Death
        this.disableDeathCheckbox = false;
        this.deathCertificate = {};
        this.bankPassbook = {};
        this.deathAttachmentList = [];
        this.deathCertificateUploaded = false;
        this.bankPassbookUploaded = false;
        this.dateofDeath = false;
        this.natureOfDeath = false;
        this.isDeath1 = false;
        this.isDeath2 = false;
        this.isDeath3 = false;
        this.placeOfDeathValid = false;
        this.deathClaimExceptionDetails = [];
        this.disableHealthCheckbox = true;
        this.disableEduCheckbox = true;
        this.isHFSubmitted = false;
        this.isEduSubmitted = false;
        //PF
        this.disablePFCheckbox = true;
        this.pfExsits = false;
        this.isPFSubmitted = false;
        this.viewNomineeShare = false;
        this.benNomineeSno = 0;
        this.isNomineesExist = true;
        this.isNomineesMatch = true;
        this.isValidNomineeName = true;
        this.isValidNomineeDOB = true;
        this.pfClaimExceptionDetails = [];
        this.ClaimStatusId = 0;
        this.isBenNomineeSubmittedClaim = false;
        this.isClaimEdit = false;
        this.clinicalTestSettings = {};
        this.nameOfClinicalTestIds = [];
        this.clinicalTestDetails = [];
        this.healthFamilyBenefitConfigDetails = [];
        this.educationBenefitConfigDetails = [];
        this.deathBenefitConfigDetails = [];
        this.isDisabledBaseOnLastExamPassed = false;
        this.marriedValid = true;
        this.isMarried = false;
        this.isDuplicateDependent = false;
        this.isRegistrationNo = false;
        this.isCAFUpdated = false;
        //Claims Effective Dates
        this.pfClaimEffectiveDate = null;
        this.healthFamilyClaimEffectiveDate = null;
        this.disabilityClaimEffectiveDate = null;
        this.deathClaimEffectiveDate = null;
        this.educationClaimEffectiveDate = null;
        this.claimConfigHdrDetails = [];
        this.isClaimEffectiveDate = false;
        this.claimEffectiveDate = null;
        this.beneficiaryPFAccountDetails = {};
        this.claim.healthFamilyDetails = {};
        this.claim.educationDetails = {};
        this.claim.deathDetails = {};
        this.claim.disabilityDetails = {};
        this.claim.providentFundDetails = {};
        this.maxAdmitDate = new Date();
        this.maxDate = new Date();
        this.maxDateNext3Months = new Date(new Date().setMonth(new Date().getMonth() + 3));
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.disableDischarge = true;
    }
    ClaimEntryNomineeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.otherHospitalValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid = true; //this.originalVoucher =
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
            _this.mode = params["mode"];
            _this.claimTypeString = params["tranctionType"];
            _this.claimStatus = Number(params["claimStatus"]);
            //if (this.claimStatus >= ClaimStatus.Submitted) {
            //    this.GenaratePdfVisible = false;
            //    //this.disableSubmitbutton = false;
            //}
            //else {
            //    this.claimStatus = ClaimStatus.Submitted;
            //}
        });
        this.clinicalTestSettings = {
            singleSelection: false,
            idField: 'lovDtlId',
            textField: 'optionName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        if (this.mode == undefined || this.mode == null) {
            this.mode = "entry";
        }
        this.getDeathConfiguration();
        this.getDisabilityConfiguration();
        this.getEducationConfiguration();
        this.getHealthandFamilyConfiguration();
        this.getPfConfiguration();
        this.getHospitalization();
        this.getHealthClainFor();
        this.getHospitals();
        this.getLastExamPassed();
        this.getPackages();
        this.getDiseases();
        this.getClinicalTests();
        this.getHealthFamilyBenefitConfigurationDetails();
        this.getEducationBenefitConfigurationDetails();
        this.getDeathBenefitConfigurationDetails();
        this.getClaimsConfiguartionDetails();
        if (this.claimId > 0) {
            this.deleteClaimExceptions(this.claimId);
            this.getClaimDetailsByClaimId(this.claimId);
        }
    };
    ClaimEntryNomineeComponent.prototype.getClaimsConfiguartionDetails = function () {
        var _this = this;
        this.dataService.getClaimConfigurationMaster()
            .subscribe(function (data) {
            _this.claimConfigHdrDetails = data;
            debugger;
            if (_this.claimConfigHdrDetails != null) {
                _this.pfClaimEffectiveDate = _this.claimConfigHdrDetails.find(function (c) { return c.claimMasterId == 1; }).cliamEffectiveDate;
                _this.healthFamilyClaimEffectiveDate = _this.claimConfigHdrDetails.find(function (c) { return c.claimMasterId == 2; }).cliamEffectiveDate;
                _this.disabilityClaimEffectiveDate = _this.claimConfigHdrDetails.find(function (c) { return c.claimMasterId == 3; }).cliamEffectiveDate;
                _this.deathClaimEffectiveDate = _this.claimConfigHdrDetails.find(function (c) { return c.claimMasterId == 4; }).cliamEffectiveDate;
                _this.educationClaimEffectiveDate = _this.claimConfigHdrDetails.find(function (c) { return c.claimMasterId == 5; }).cliamEffectiveDate;
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.deleteClaimExceptions = function (id) {
        this.dataService
            .deleteClaimExceptions(id)
            .subscribe(function (data) { });
    };
    ClaimEntryNomineeComponent.prototype.getClaimDetailsByClaimId = function (id) {
        var _this = this;
        this.dataService
            .getClaimDetailsById(id)
            .subscribe(function (data) {
            _this.claim = data;
            _this.isClaimEdit = _this.isHealthClaimEdit = true;
            if (_this.claim != null) {
                _this.claim.nomineeDOB = new Date(_this.claim.nomineeDOB);
                if (_this.claimTypeString == undefined || _this.claimTypeString == null) {
                    if (_this.claim.educationDetails != null && _this.claim.educationDetails.educationHdrId > 0) {
                        _this.viewEducation = true;
                        if (_this.claim.educationDetails.educationDetailList != null && _this.claim.educationDetails.educationDetailList.length > 0) {
                            _this.educationDetailsArray = _this.claim.educationDetails.educationDetailList;
                            _this.rowIndex = _this.rowIndex + _this.educationDetailsArray.length;
                            if (_this.educationDetailsArray != null && _this.educationDetailsArray.length > 0) {
                                for (var i = 0; i < _this.educationDetailsArray.length; i++) {
                                    if (_this.educationDetailsArray[i].presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                        _this.viewuploadNonMarriage = true;
                                    }
                                    else {
                                        _this.viewuploadNonMarriage = false;
                                    }
                                    if (_this.educationDetailsArray[i].lastExamPassedName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                        _this.isDisabledBaseOnLastExamPassed = true;
                                        _this.viewuploadNonMarriage = true;
                                    }
                                    else {
                                        _this.isDisabledBaseOnLastExamPassed = false;
                                        _this.viewuploadNonMarriage = false;
                                    }
                                    //Duplicate Dependent
                                    if (_this.educationDetailsArray[i].isDuplicate) {
                                        //const data1 = this.benficiaryFamily.find(x => x.benFamilyMemSno == this.educationDetailsArray[i].dependentId);
                                        //var stringMsg = "Already this Dependent " + data1.benDependentName + " has submitted for this year please select another dependent";
                                        _this.isDuplicateDependent = true;
                                        //alert("Already claim has submitted for this dependent in this year please select another dependent");
                                        //                    isValid = false;
                                    }
                                }
                            }
                        }
                    }
                    if (_this.claim.healthFamilyDetails != null && _this.claim.healthFamilyDetails.healthFamilyId > 0) {
                        _this.viewHealth = true;
                        if (_this.claim.healthFamilyDetails.hospitalId != null && _this.claim.healthFamilyDetails.hospitalId != undefined && _this.claim.healthFamilyDetails.otherHospital != undefined && _this.claim.healthFamilyDetails.otherHospital != null) {
                            _this.isOtherHospital = true;
                            _this.hospotalId = _this.claim.healthFamilyDetails.hospitalId;
                        }
                        if (_this.claim.healthFamilyDetails.claimFor === 5) {
                            _this.viewSelf = true;
                        }
                        else if (_this.claim.healthFamilyDetails.claimFor === 6) {
                            _this.viewFamily = true;
                        }
                        if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                            _this.viewDateOfAdmit = true;
                            _this.disableCost = false;
                            if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                                _this.viewMetWithAnAccident = true;
                            }
                        }
                        else if (_this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                            _this.viewDateOfFirstAppointment = true;
                            _this.showDisCertUpload = false;
                            if (_this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                                _this.disableCost = false;
                                if (_this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                                    _this.viewNameOfClinicalTest = true;
                                    if (_this.claim.healthFamilyDetails.clinicalTestDetails != null && _this.claim.healthFamilyDetails.clinicalTestDetails.length > 0) {
                                        if (_this.clinicalTestLov != null && _this.clinicalTestLov.length > 0) {
                                            var selectedClinicalTestDetails = Object.assign([], _this.clinicalTestLov);
                                            var deletedClinicalTestDetails = Object.assign([], _this.clinicalTestLov);
                                            for (var i = 0; i < _this.claim.healthFamilyDetails.clinicalTestDetails.length; i++) {
                                                var t = _this.claim.healthFamilyDetails.clinicalTestDetails[i].clinicalTest;
                                                var s = _this.clinicalTestLov.filter(function (x) { return x.lovDtlId == t; });
                                                if (s != null) {
                                                    for (var j = 0; j < deletedClinicalTestDetails.length; j++) {
                                                        if (s[0].lovDtlId == deletedClinicalTestDetails[j].lovDtlId) {
                                                            deletedClinicalTestDetails.splice(j, 1);
                                                        }
                                                    }
                                                }
                                            }
                                            if (deletedClinicalTestDetails != null && deletedClinicalTestDetails.length > 0) {
                                                for (var i = 0; i < deletedClinicalTestDetails.length; i++) {
                                                    for (var j = 0; j < selectedClinicalTestDetails.length; j++) {
                                                        if (selectedClinicalTestDetails[j].lovDtlId == deletedClinicalTestDetails[i].lovDtlId) {
                                                            selectedClinicalTestDetails.splice(j, 1);
                                                        }
                                                    }
                                                }
                                            }
                                            for (var j = 0; j < selectedClinicalTestDetails.length; j++) { }
                                            _this.nameOfClinicalTestIds = selectedClinicalTestDetails;
                                        }
                                    }
                                }
                            }
                        }
                        if (_this.claim.healthFamilyDetails.admittedDate != null && _this.claim.healthFamilyDetails.admittedDate != undefined)
                            _this.claim.healthFamilyDetails.admittedDate = new Date(_this.claim.healthFamilyDetails.admittedDate);
                        if (_this.claim.healthFamilyDetails.dischargeDate != null && _this.claim.healthFamilyDetails.dischargeDate != undefined)
                            _this.claim.healthFamilyDetails.dischargeDate = new Date(_this.claim.healthFamilyDetails.dischargeDate);
                        if (_this.claim.healthFamilyDetails.firstAppointmentDate != null) {
                            _this.claim.healthFamilyDetails.firstAppointmentDate = new Date(_this.claim.healthFamilyDetails.firstAppointmentDate);
                        }
                        _this.claim.healthFamilyDetails.attachmentDTOList.forEach(function (eachObj) {
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].OriginalVouchers) {
                                _this.healthOriginalVoucher = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DischargeCertificate) {
                                _this.healthDischargeCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DoctorPrescription) {
                                _this.healthSelfAttached = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].ExpensesSheet) {
                                _this.healthExpensesSheet = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].Condolationcertificate) {
                                _this.healthCondolationCertificate = eachObj;
                            }
                        });
                        var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                        for (var i = 0; i < data_1.length; i++) {
                            _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                        }
                        _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
                        var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
                        _this.result = [];
                        groups.forEach(function (g) {
                            return _this.result.push({
                                name: g,
                                values: _this.packages.filter(function (i) { return i.ailmentName === g; })
                            });
                        });
                    }
                    if (_this.claim.deathDetails != null && _this.claim.deathDetails.deathId > 0) {
                        _this.viewDeath = true;
                        if (_this.claim.deathDetails.dateofDeath != null) {
                            _this.claim.deathDetails.dateofDeath = new Date(_this.claim.deathDetails.dateofDeath);
                        }
                        if (_this.claim.deathDetails.natureofDeath > 0) {
                            _this.deathEligibility = _this.claim.deathDetails.claimAmount;
                            _this.viewEligibilityAmount = true;
                            if (_this.claim.deathDetails.natureofDeath == 16) {
                                _this.viewAccidental = true;
                            }
                        }
                        _this.claim.deathDetails.attachmentDTOList.forEach(function (eachObj) {
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DeathCertificate) {
                                _this.deathCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].FirstPageofBankPassbook) {
                                _this.bankPassbook = eachObj;
                            }
                        });
                    }
                    if (_this.claim.providentFundDetails != null && _this.claim.providentFundDetails.pfId > 0) {
                        _this.viewPf = true;
                    }
                }
                if (_this.claimTypeString == "Education") {
                    _this.disableHealthCheckbox = true;
                    if (_this.claim.educationDetails != null && _this.claim.educationDetails.educationHdrId > 0) {
                        _this.viewEducation = true;
                        if (_this.claim.educationDetails.educationDetailList != null && _this.claim.educationDetails.educationDetailList.length > 0) {
                            _this.educationDetailsArray = _this.claim.educationDetails.educationDetailList;
                            _this.rowIndex = _this.rowIndex + _this.educationDetailsArray.length;
                            if (_this.educationDetailsArray != null && _this.educationDetailsArray.length > 0) {
                                for (var i = 0; i < _this.educationDetailsArray.length; i++) {
                                    if (_this.educationDetailsArray[i].presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                        _this.viewuploadNonMarriage = true;
                                    }
                                    else {
                                        _this.viewuploadNonMarriage = false;
                                    }
                                    if (_this.educationDetailsArray[i].lastExamPassedName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                        _this.isDisabledBaseOnLastExamPassed = true;
                                        _this.viewuploadNonMarriage = true;
                                    }
                                    else {
                                        _this.isDisabledBaseOnLastExamPassed = false;
                                        _this.viewuploadNonMarriage = false;
                                    }
                                }
                            }
                        }
                    }
                }
                if (_this.claimTypeString == "HealthFamily") {
                    _this.disableHealthCheckbox = true;
                    if (_this.claim.healthFamilyDetails != null && _this.claim.healthFamilyDetails.healthFamilyId > 0) {
                        _this.viewHealth = true;
                        if (_this.claim.healthFamilyDetails.claimFor === 5) {
                            _this.viewSelf = true;
                        }
                        else if (_this.claim.healthFamilyDetails.claimFor === 6) {
                            _this.viewFamily = true;
                        }
                        if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                            _this.viewDateOfAdmit = true;
                            _this.disableCost = false;
                            if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                                _this.viewMetWithAnAccident = true;
                            }
                        }
                        else if (_this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                            _this.viewDateOfFirstAppointment = true;
                            _this.showDisCertUpload = false;
                            if (_this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                                _this.disableCost = false;
                                if (_this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                                    _this.viewNameOfClinicalTest = true;
                                    if (_this.claim.healthFamilyDetails.clinicalTestDetails != null && _this.claim.healthFamilyDetails.clinicalTestDetails.length > 0) {
                                        if (_this.clinicalTestLov != null && _this.clinicalTestLov.length > 0) {
                                            var selectedClinicalTestDetails = Object.assign([], _this.clinicalTestLov);
                                            var deletedClinicalTestDetails = Object.assign([], _this.clinicalTestLov);
                                            for (var i = 0; i < _this.claim.healthFamilyDetails.clinicalTestDetails.length; i++) {
                                                var t = _this.claim.healthFamilyDetails.clinicalTestDetails[i].clinicalTest;
                                                var s = _this.clinicalTestLov.filter(function (x) { return x.lovDtlId == t; });
                                                if (s != null) {
                                                    for (var j = 0; j < deletedClinicalTestDetails.length; j++) {
                                                        if (s[0].lovDtlId == deletedClinicalTestDetails[j].lovDtlId) {
                                                            deletedClinicalTestDetails.splice(j, 1);
                                                        }
                                                    }
                                                }
                                            }
                                            if (deletedClinicalTestDetails != null && deletedClinicalTestDetails.length > 0) {
                                                for (var i = 0; i < deletedClinicalTestDetails.length; i++) {
                                                    for (var j = 0; j < selectedClinicalTestDetails.length; j++) {
                                                        if (selectedClinicalTestDetails[j].lovDtlId == deletedClinicalTestDetails[i].lovDtlId) {
                                                            selectedClinicalTestDetails.splice(j, 1);
                                                        }
                                                    }
                                                }
                                            }
                                            for (var j = 0; j < selectedClinicalTestDetails.length; j++) { }
                                            _this.nameOfClinicalTestIds = selectedClinicalTestDetails;
                                        }
                                    }
                                }
                            }
                        }
                        if (_this.claim.healthFamilyDetails.admittedDate != null && _this.claim.healthFamilyDetails.admittedDate != undefined)
                            _this.claim.healthFamilyDetails.admittedDate = new Date(_this.claim.healthFamilyDetails.admittedDate);
                        if (_this.claim.healthFamilyDetails.dischargeDate != null && _this.claim.healthFamilyDetails.dischargeDate != undefined)
                            _this.claim.healthFamilyDetails.dischargeDate = new Date(_this.claim.healthFamilyDetails.dischargeDate);
                        if (_this.claim.healthFamilyDetails.firstAppointmentDate != null) {
                            _this.claim.healthFamilyDetails.firstAppointmentDate = new Date(_this.claim.healthFamilyDetails.firstAppointmentDate);
                        }
                        _this.claim.healthFamilyDetails.attachmentDTOList.forEach(function (eachObj) {
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].OriginalVouchers) {
                                _this.healthOriginalVoucher = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DischargeCertificate) {
                                _this.healthDischargeCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DoctorPrescription) {
                                _this.healthSelfAttached = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].ExpensesSheet) {
                                _this.healthExpensesSheet = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].Condolationcertificate) {
                                _this.healthCondolationCertificate = eachObj;
                            }
                        });
                        var data_2 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                        for (var i = 0; i < data_2.length; i++) {
                            _this.packages.filter(function (x) { return x.packageID == data_2[i].packageID; })[0].isChecked = true;
                        }
                        _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
                        var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
                        _this.result = [];
                        groups.forEach(function (g) {
                            return _this.result.push({
                                name: g,
                                values: _this.packages.filter(function (i) { return i.ailmentName === g; })
                            });
                        });
                    }
                }
                if (_this.claimTypeString == "Death") {
                    _this.disableDeathCheckbox = true;
                    if (_this.claim.deathDetails != null && _this.claim.deathDetails.deathId > 0) {
                        _this.viewDeath = true;
                        if (_this.claim.deathDetails.dateofDeath != null) {
                            _this.claim.deathDetails.dateofDeath = new Date(_this.claim.deathDetails.dateofDeath);
                        }
                        if (_this.claim.deathDetails.natureofDeath > 0) {
                            _this.deathEligibility = _this.claim.deathDetails.claimAmount;
                            _this.viewEligibilityAmount = true;
                            if (_this.claim.deathDetails.natureofDeath == 16) {
                                _this.viewAccidental = true;
                            }
                        }
                        _this.claim.deathDetails.attachmentDTOList.forEach(function (eachObj) {
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DeathCertificate) {
                                _this.deathCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].FirstPageofBankPassbook) {
                                _this.bankPassbook = eachObj;
                            }
                        });
                    }
                }
                if (_this.claimTypeString == "PF") {
                    if (_this.claim.providentFundDetails != null && _this.claim.providentFundDetails.pfId > 0) {
                        _this.viewPf = true;
                    }
                }
                if (_this.claim.attachment != null && _this.claim.attachment.length > 0) {
                    _this.mainUpload = _this.claim.attachment[0];
                }
                _this.ssin = _this.claim.ssin;
                // this.valuechange(this.claim.ssin);
                _this.dataService
                    .getBeneficiaryBasicDetailsByNo(_this.ssin, false)
                    .subscribe(function (data) {
                    _this.beneficiary = data;
                    if (_this.beneficiary != null) {
                        if (_this.beneficiary.isActive) {
                            _this.benficiaryInactive = false;
                            _this.getBenficiaryFamilyDetails(_this.beneficiary.benSno);
                            _this.getBenficiaryFamilyDetailsByHealth(_this.beneficiary.benSno);
                            _this.getBenficiaryEduCount(_this.beneficiary.benSno);
                            _this.getBeneficiaryNomineeDetails(_this.beneficiary.benSno);
                        }
                    }
                });
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.openModel = function () {
        this.isDuplicateDependent = false;
        this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = this.marriedValid = true;
        this.uploadCertificatetValid = this.uploadselfattestedValid = true;
        this.rowIndex = -1;
        this.rowEligibleAmount = 0;
        this.eduSelfAttested = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.educationDetails = {};
        this.educationDetails.year = new Date().getFullYear();
        this.lgModal.show();
    };
    ClaimEntryNomineeComponent.prototype.changeCertificate = function (inputValue, type) {
        var _this = this;
        var file = inputValue.target.files[0];
        if (type == "main") {
            if (file.type != "application/pdf") {
                alert("Only accept pdf file");
                return;
            }
        }
        if (file.type === "application/pdf" || file.type.includes("image/")) {
            if (file.size > 2000000) {
                alert("File is too big!");
                return;
            }
            ;
            var myReader = new FileReader();
            myReader.onloadend = function (e) {
                var model = {};
                model.fileName = file.name;
                model.filePath = "test";
                model.fileContent = myReader.result.toString().split(',')[1];
                model.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Submitted;
                switch (type) {
                    case "certificate":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].Scholarship;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education;
                        _this.educertificates.push(model);
                        break;
                    case "nonMarriage":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].NonMarriage;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education;
                        _this.eduNonMarriage.push(model);
                        break;
                    case "selfAttest":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].PassingExamCertificate;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education;
                        _this.eduSelfAttested.push(model);
                        break;
                    case "dischargeCertificate":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DischargeCertificate;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                        _this.healthDischargeCertificate = model;
                        break;
                    case "originalVoucher":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].OriginalVouchers;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                        _this.healthOriginalVoucher = model;
                        break;
                    case "healthselfAttest":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DoctorPrescription;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                        _this.healthSelfAttached = model;
                        break;
                    case "main":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].FormV;
                        model.claimType = null;
                        _this.mainUpload = model;
                        break;
                    case "deathCertificate":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].DeathCertificate;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death;
                        _this.deathCertificate = model;
                        break;
                    case "healthExpensesSheet":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].ExpensesSheet;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                        _this.healthExpensesSheet = model;
                        break;
                    case "bankPassbook":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].FirstPageofBankPassbook;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death;
                        _this.bankPassbook = model;
                        break;
                    case "healthCondolationCertificate":
                        model.attachmentType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].Condolationcertificate;
                        model.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                        _this.healthCondolationCertificate = model;
                        break;
                }
            };
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    };
    ClaimEntryNomineeComponent.prototype.removeUploadCertificates = function (edu, type) {
        if (type == "certificate") {
            var index = this.educertificates.indexOf(edu);
            if (index !== -1) {
                this.educertificates.splice(index, 1);
            }
        }
        if (type == "nonMarriage") {
            var index = this.eduNonMarriage.indexOf(edu);
            if (index !== -1) {
                this.eduNonMarriage.splice(index, 1);
            }
        }
        if (type == "selfAttest") {
            var index = this.eduSelfAttested.indexOf(edu);
            if (index !== -1) {
                this.eduSelfAttested.splice(index, 1);
            }
        }
    };
    ClaimEntryNomineeComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    ClaimEntryNomineeComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    ClaimEntryNomineeComponent.prototype.getDiseases = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].Diseases)
            .subscribe(function (data) {
            _this.diseasesLov = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getClinicalTests = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].ClinicalTests)
            .subscribe(function (data) {
            _this.clinicalTestLov = data;
        });
    };
    //pfChange1(eve) {
    //    let share = 0;
    //    let shareAmount = "";
    //    //if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
    //        if (this.claim.nomineeName != null && this.claim.nomineeDOB != null) {
    //            if (this.benficiaryNominee.length > 0) {
    //                var benNominee = this.benficiaryNominee.find(n => n.benNomineeName == this.claim.nomineeName);
    //                if (benNominee != null) {
    //                    var date1 = new Date(this.claim.nomineeDOB);
    //                    var date2 = new Date(benNominee.dob);
    //                    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
    //                    if (timeDiff == 0) {
    //                        this.benNomineeSno = benNominee.benNomineeSno;
    //                    }
    //                }
    //                if (this.benNomineeSno != null && this.benNomineeSno > 0) {
    //                    this.isNomineesExist = this.isNomineesMatch = true;
    //                    //this.validatePfSubmit(this.beneficiary.ssI_Number, this.benNomineeSno);
    //                    //if (this.isPFSubmitted) {
    //                    //    this.disablePFCheckbox = true;
    //                    //}
    //                    //else {
    //                    //    this.disablePFCheckbox = false;
    //                    //    //if (this.beneficiary.regNumber != null && this.beneficiary.regNumber != "") {
    //                    //    //    this.getPfBalance(this.beneficiary.regNumber);
    //                    //    //}
    //                    //    //else
    //                    //    //    alert("No pf details available for this given SSIN number");
    //                    //    this.viewNomineeShare = true;
    //                    //    share = benNominee.benNomineeSharePercentage;
    //                    //    if (this.benficiaryNominee.length == 1) {
    //                    //        if (share == 0) {
    //                    //            share = 100;
    //                    //        }
    //                    //    }
    //                    //    if (this.pfClaimAmount != null && this.pfClaimAmount != undefined) {
    //                    //        //shareAmount = Math.round(this.pfClaimAmount * (share / 100)).toFixed(2);
    //                    //        this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
    //                    //    }
    //                    //}
    //                }
    //                else {
    //                    this.isNomineesMatch = false;
    //                    this.disablePFCheckbox = true;
    //                    this.viewPf = true;
    //                }
    //            }
    //            else {
    //                this.isNomineesExist = false;
    //                this.disablePFCheckbox = true;
    //                this.viewPf = true;
    //            }
    //        }
    //        else {
    //            this.isNomineesMatch = false;
    //           // this.disablePFCheckbox = true;
    //            this.viewPf = true;
    //        }
    //    //}
    //    //else {
    //    //    this.disablePFCheckbox = true;
    //    //    this.pfExsits = true;
    //    //    this.viewPf = true;
    //    //}
    //    if (this.ssin != "") {
    //        this.viewPf = !this.viewPf;
    //    }
    //}
    ClaimEntryNomineeComponent.prototype.pfChange = function (eve) {
        var _this = this;
        this.viewPf = !this.viewPf;
        var share = 0;
        if (this.viewPf) {
            this.getPfBalance(this.beneficiary.benSno);
            this.viewNomineeShare = true;
            share = this.benficiaryNominee.find(function (n) { return n.benNomineeSno == _this.benNomineeSno; }).benNomineeSharePercentage;
            if (this.benficiaryNominee.length == 1) {
                if (share == 0) {
                    share = 100;
                }
            }
            this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
        }
    };
    ClaimEntryNomineeComponent.prototype.getPfBalance = function (benSno) {
        var _this = this;
        this.pfExsits = false;
        this.dataService
            .getPfBalance(benSno)
            .subscribe(function (data) {
            _this.pfBalanceDetails = data;
        });
        if (this.pfBalanceDetails != null && this.pfBalanceDetails != undefined) {
            if (this.pfBalanceDetails.code == "000") {
                //claim amount=   balance + cantribution +( (Contribution/25 ) * 30)
                this.pfClaimAmount = this.pfBalanceDetails.balance + this.pfBalanceDetails.contribution + ((this.pfBalanceDetails.contribution / 25) * 30);
            }
            else {
                this.disablePFCheckbox = true;
                this.pfExsits = true;
            }
        }
    };
    ClaimEntryNomineeComponent.prototype.validatePfSubmit = function (ssiNumber, nomineeId) {
        var _this = this;
        this.dataService
            .validatePfSubmit(ssiNumber, nomineeId)
            .subscribe(function (data) {
            _this.isPFSubmitted = data;
            //if (this.isPFSubmitted) {
            //    alert(this.isPFSubmitted);
            //    this.disablePFCheckbox = false;
            //}
        });
    };
    ClaimEntryNomineeComponent.prototype.ValidateNomineeName = function (name) {
        this.ValidateNomineePFDetails();
    };
    ClaimEntryNomineeComponent.prototype.ValidateNomineeDOB = function (dob) {
        this.ValidateNomineePFDetails(dob);
    };
    ClaimEntryNomineeComponent.prototype.ValidateNomineePFDetails = function (dob) {
        var _this = this;
        this.disablePFCheckbox = false;
        if ((this.claim.nomineeName != undefined && this.claim.nomineeName.trim() != "") && (dob != undefined && dob != null)) { // && (this.claim.nomineeDOB != undefined && this.claim.nomineeDOB != "")) {
            if (this.benficiaryNominee.length > 0) {
                var benNominee = this.benficiaryNominee.find(function (n) { return n.benNomineeName.trim().toLowerCase() == _this.claim.nomineeName.trim().toLowerCase(); });
                if (benNominee != null) {
                    //var date1 = new Date(this.claim.nomineeDOB);
                    var date1 = new Date(dob);
                    var date2 = new Date(benNominee.dob);
                    var ageNom = date1.getFullYear() - date2.getFullYear();
                    var m = date1.getMonth() - date2.getMonth();
                    if (m < 0 || (m === 0 && date1.getDate() < date2.getDate())) {
                        ageNom--;
                    }
                    if (ageNom == 0) {
                        this.benNomineeSno = benNominee.benNomineeSno;
                        this.validatePfSubmit(this.beneficiary.ssI_Number, this.benNomineeSno);
                        if (this.isPFSubmitted) {
                            this.disablePFCheckbox = true;
                        }
                        else {
                            this.disablePFCheckbox = false;
                        }
                    }
                    //else {
                    //    alert("Please enter valid nominee date of birth");
                    //}
                }
                //else {
                //    alert("Please enter valid nominee name");
                //}
            }
        }
    };
    ClaimEntryNomineeComponent.prototype.healthChange = function (eve) {
        this.restrictSave = false;
        this.disableEdu = false;
        this.noDependents = false;
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    };
    ClaimEntryNomineeComponent.prototype.deathChange = function (eve) {
        //this.viewDeath = !this.viewDeath;
        this.isBenNomineeSubmittedClaim = false;
        this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, 0, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death, eve);
    };
    ClaimEntryNomineeComponent.prototype.educationChange = function (eve) {
        if (this.eduCount >= 2) {
            this.disableEdu = true;
            this.maxLimitExceeded = true;
            this.restrictSave = true;
            this.viewEducation = false;
            this.viewHealth = false;
            eve.target.checked = false;
            return;
        }
        if (this.benficiaryFamily == null || this.benficiaryFamily.length == 0) {
            this.restrictSave = true;
            this.viewEducation = false;
            this.disableEdu = true;
            this.noDependents = true;
            this.viewEducation = false;
            eve.target.checked = false;
            this.viewHealth = false;
            return;
        }
        this.viewEducation = !this.viewEducation;
        this.validateDependent = false;
    };
    ClaimEntryNomineeComponent.prototype.typeOfClaimChange = function (eve) {
        if (this.claim.healthFamilyDetails.typeOfClaim == 5) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 1;
        }
        else if (this.claim.healthFamilyDetails.typeOfClaim == 0) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 0;
        }
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno, this.claim.healthFamilyDetails.typeOfClaim);
        this.hospitalizationChange(eve);
    };
    ClaimEntryNomineeComponent.prototype.hospitalizationChange = function (eve) {
        this.viewDateOfFirstAppointment = this.viewDateOfAdmit = this.viewMetWithAnAccident = this.viewNameOfClinicalTest = false;
        this.showDisCertUpload = this.disableCost = true;
        if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
            this.viewDateOfAdmit = true;
            this.disableCost = false;
            if (this.claim.healthFamilyDetails.typeOfClaim == 5) {
                this.viewMetWithAnAccident = true;
            }
            this.claim.healthFamilyDetails.nameOfTheDisease = undefined;
            this.claim.healthFamilyDetails.nameOfClinicalTest = undefined;
        }
        else if (this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
            this.viewDateOfFirstAppointment = true;
            this.showDisCertUpload = false;
            if (this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                this.disableCost = false;
                if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                    this.viewNameOfClinicalTest = true;
                }
            }
        }
        this.claimForChange(eve);
    };
    ClaimEntryNomineeComponent.prototype.nameOfDiseaseChange = function (eve) {
        this.viewNameOfClinicalTest = this.disableCost = false;
        if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
            this.viewNameOfClinicalTest = true;
        }
        else {
            this.viewNameOfClinicalTest = false;
            this.claim.healthFamilyDetails.nameOfClinicalTest = undefined;
        }
    };
    ClaimEntryNomineeComponent.prototype.hospitalChange = function (eve) {
        if (this.hospotalList.length > 0) {
            var hos = this.hospotalList.find(function (x) { return x.hospitalId == eve; });
            this.hospotalId = 0;
            if (hos != null) {
                if (hos.hospitalName.toLowerCase() == "not in the list") {
                    this.hospotalId = hos.hospitalId;
                }
            }
            if (this.hospotalId > 0) {
                this.isOtherHospital = true;
                this.otherHospitalValid = true;
            }
            else {
                this.isOtherHospital = false;
                this.claim.healthFamilyDetails.otherHospital = undefined;
            }
        }
    };
    ClaimEntryNomineeComponent.prototype.claimForChange = function (eve) {
        this.viewSelf = this.viewFamily = false;
        if (this.claim.healthFamilyDetails.claimFor == 5) {
            if (this.claim.healthFamilyDetails.typeOfHospitalization != 2) {
                this.lossOfEmploymentAmount = this.calculateLossOfEmploymentAmount();
                this.viewSelf = true;
            }
        }
        else if (this.claim.healthFamilyDetails.claimFor == 6) {
            this.viewFamily = true;
        }
    };
    ClaimEntryNomineeComponent.prototype.natureOfDeathChange = function (natureOfDeathData) {
        this.viewAccidental = this.viewEligibilityAmount = this.placeOfDeathValid = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            var data = this.deathConfig.find(function (x) { return x.claimConfigId == natureOfDeathData; });
            this.viewEligibilityAmount = true;
            this.deathEligibility = data.annualLimit;
            this.natureofDeathName = data.claimConfigOptionName;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = this.placeOfDeathValid = true;
        }
    };
    ClaimEntryNomineeComponent.prototype.selectDependent = function (args) {
        var _this = this;
        var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == args.target.value; });
        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId, false)
            .subscribe(function (data1) {
            debugger;
            if (!data1) {
                //--------------
                if (_this.educationDetailsArray.findIndex(function (x) { return x.dependentId == args.target.value; }) != -1 && _this.rowIndex == -1) {
                    alert("already added please select another dependent");
                    _this.educationDetails.dependentId = 0;
                    return;
                }
                if (data.benDependentRelation.toLowerCase() == "daughter") {
                    _this.isMarried = _this.marriedValid = true;
                    _this.getEducationConfiguration();
                    _this.getLastExamPassed();
                }
                else if (data.benDependentRelation.toLowerCase() == "son") {
                    _this.educationConfig = _this.dataService.eduConfig;
                    var index = _this.educationConfig.findIndex(function (x) { return x.claimConfigOptionName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development"; });
                    _this.educationConfig.splice(index, 1);
                    // remove item from last Exam passed option
                    var indexLastExamPassed = _this.lastExampassed.findIndex(function (l) { return l.optionName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development"; });
                    _this.lastExampassed.splice(indexLastExamPassed, 1);
                    //var timeDiff = Math.abs(Date.now() - Date.parse(data.dob));
                    //const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    //if (age >= 21) {
                    //    alert("your dependent not suitable for this claim beacause your son age 21");
                    //}
                    _this.isMarried = false;
                }
                else {
                    _this.getEducationConfiguration();
                    _this.getLastExamPassed();
                }
                _this.isDuplicateDependent = false;
            }
            else {
                _this.isDuplicateDependent = true;
            }
            //-------------------
        });
        this.educationDetails.dependentName = args.target.options[args.target.selectedIndex].text;
        this.educationDetails.dependentRelation = args.target.options[args.target.selectedIndex].text.split('-')[1];
    };
    ClaimEntryNomineeComponent.prototype.selectLastExamPassed = function (args, education) {
        this.educationDetails.lastExamPassedName = args.target.options[args.target.selectedIndex].text;
        if (args.target.options[args.target.selectedIndex].text == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
            this.isDisabledBaseOnLastExamPassed = true;
            this.educationDetails.eligibleAmount = 25000;
            this.viewuploadNonMarriage = true;
            this.educationDetails.presentlyReading = undefined;
            this.educationDetails.dateofAdmission = undefined;
        }
        else {
            this.isDisabledBaseOnLastExamPassed = false;
            this.educationDetails.eligibleAmount = 0;
            this.viewuploadNonMarriage = false;
            this.educationDetails.presentlyReading = undefined;
            this.educationDetails.dateofAdmission = undefined;
        }
    };
    ClaimEntryNomineeComponent.prototype.selectPresentlyReading = function (args, education) {
        var _this = this;
        var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == education.dependentId; });
        this.educationDetails.presentlyReadingName = args.target.options[args.target.selectedIndex].text;
        if (this.educationDetails.presentlyReading > 0) {
            var data_3 = this.educationConfig.find(function (x) { return x.claimConfigId == _this.educationDetails.presentlyReading; });
            this.educationDetails.eligibleAmount = data_3.annualLimit;
        }
        else {
            this.educationDetails.eligibleAmount = 0;
        }
        if (data.benDependentRelation.toLowerCase() == "daughter" && this.educationDetails.presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
            this.viewuploadNonMarriage = true;
        }
        else {
            this.viewuploadNonMarriage = false;
        }
    };
    ClaimEntryNomineeComponent.prototype.chkAccidentChange = function (args, value) {
        if (value == true) {
            this.claim.healthFamilyDetails.claimFor = 5;
        }
        else {
            this.claim.healthFamilyDetails.claimFor = 0;
        }
        this.claimForChange(args);
    };
    ClaimEntryNomineeComponent.prototype.validateEducationDetails = function (details) {
        var isValid = true;
        this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = true;
        if (details.dependentId == undefined || details.dependentId <= 0) {
            this.studentNameValid = isValid = false;
        }
        if (details.institutionName == undefined || details.institutionName == "") {
            this.institutionNameValid = isValid = false;
        }
        if (details.registrationRollNo == undefined || details.registrationRollNo == "") {
            this.registrationNoValid = isValid = false;
        }
        if (details.institutionContact != undefined && details.institutionContact.toString().length > 0 && details.institutionContact.toString().length < 10) {
            this.institutionContactValid = isValid = false;
        }
        if (details.year == undefined) {
            this.educationYearValid = isValid = false;
        }
        if (this.viewuploadNonMarriage) {
            if (this.eduNonMarriage.length == 0) {
                this.uploadNonMarriageValid = isValid = false;
            }
        }
        if (this.educertificates.length == 0 && !this.isDisabledBaseOnLastExamPassed) {
            this.uploadCertificatetValid = isValid = false;
        }
        if (this.eduSelfAttested.length == 0) {
            this.uploadselfattestedValid = isValid = false;
        }
        if (details.dateofAdmission == undefined && !this.isDisabledBaseOnLastExamPassed) {
            this.dateOfAdmissionValid = isValid = false;
        }
        if ((details.presentlyReading == undefined || details.presentlyReading <= 0) && !this.isDisabledBaseOnLastExamPassed) {
            this.presentlyReadingValid = isValid = false;
        }
        debugger;
        if (this.isMarried && (details.isMarried == undefined || details.isMarried == null)) {
            this.marriedValid = isValid = false;
        }
        else if (this.isMarried && details.isMarried == "1") {
            isValid = false;
            alert("This benefit not applicable for married student");
            return;
        }
        if (this.isDuplicateDependent) {
            isValid = false;
        }
        return isValid;
    };
    ClaimEntryNomineeComponent.prototype.addEducationDetails = function (details) {
        this.marriedValid = true;
        this.isMarried = false;
        if (this.claim.educationDetails.claimAmount == undefined) {
            this.claim.educationDetails.claimAmount = 0;
        }
        if (this.validateEducationDetails(details)) {
            details.statusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Submitted;
            if (this.educationDetailsArray.findIndex(function (x) { return x.dependentId == details.dependentId; }) == -1 && this.rowIndex == -1) {
                var attachedList_1 = [];
                if (this.educertificates.length > 0) {
                    this.educertificates.forEach(function (contact) {
                        attachedList_1.push(contact);
                    });
                }
                if (this.eduNonMarriage.length > 0) {
                    this.eduNonMarriage.forEach(function (contact) {
                        attachedList_1.push(contact);
                    });
                }
                if (this.eduSelfAttested.length > 0) {
                    this.eduSelfAttested.forEach(function (contact) {
                        attachedList_1.push(contact);
                    });
                }
                details.attachmentDetailsList = attachedList_1;
                details.isDuplicate = false;
                this.educationDetailsArray.push(details);
                this.claim.educationDetails.claimAmount -= this.rowEligibleAmount == undefined ? 0 : this.rowEligibleAmount;
                this.eduCount += 1;
                this.lgModal.hide();
            }
            else if (this.educationDetailsArray.findIndex(function (x) { return x.dependentId == details.dependentId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another dependent");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.educationDetailsArray.findIndex(function (x) { return x.dependentId == details.dependentId; }) == this.rowIndex) {
                        this.educationDetailsArray.splice(this.rowIndex, 1);
                        this.claim.educationDetails.claimAmount -= this.rowEligibleAmount == undefined ? 0 : this.rowEligibleAmount;
                        var attachedList_2 = [];
                        if (this.educertificates.length > 0) {
                            this.educertificates.forEach(function (contact) {
                                attachedList_2.push(contact);
                            });
                        }
                        if (this.eduNonMarriage.length > 0) {
                            this.eduNonMarriage.forEach(function (contact) {
                                attachedList_2.push(contact);
                            });
                        }
                        if (this.eduSelfAttested.length > 0) {
                            this.eduSelfAttested.forEach(function (contact) {
                                attachedList_2.push(contact);
                            });
                        }
                        details.attachmentDetailsList = attachedList_2;
                        details.isDuplicate = false;
                        this.educationDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.rowEligibleAmount = 0;
                        this.lgModal.hide();
                    }
                    else {
                        alert("already added please select another dependent");
                        return;
                    }
                }
            }
            if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                var eduBenefit = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toLowerCase(); });
                if (eduBenefit != null) {
                    var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
                }
                if (cond) {
                    this.maxLimitExceeded = true;
                }
            }
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; }
            var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == details.dependentId; });
            this.claim.educationDetails.claimAmount += details.eligibleAmount == undefined ? 0 : details.eligibleAmount;
            this.educationDetails = {};
        }
    };
    ClaimEntryNomineeComponent.prototype.editEducationDetails = function (details) {
        var _this = this;
        this.educationDetails = details;
        this.eduSelfAttested = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.educationDetails.dateofAdmission = new Date(details.dateofAdmission);
        this.educationDetails.attachmentDetailsList.forEach(function (eachObj) {
            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].Scholarship) {
                _this.educertificates.push(eachObj);
            }
            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].NonMarriage) {
                _this.eduNonMarriage.push(eachObj);
            }
            if (eachObj.attachmentType === _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["AttachmentType"].PassingExamCertificate) {
                _this.eduSelfAttested.push(eachObj);
            }
        });
        this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.educationDetailsArray.indexOf(details);
        this.lgModal.show();
    };
    ClaimEntryNomineeComponent.prototype.removeEducationDetails = function (details) {
        var index = this.educationDetailsArray.indexOf(details);
        if (index !== -1) {
            this.claim.educationDetails.claimAmount -= this.educationDetailsArray[index].eligibleAmount == undefined ? 0 : this.educationDetailsArray[index].eligibleAmount;
            this.educationDetailsArray.splice(index, 1);
            if (this.educationDetailsArray.findIndex(function (x) { return x.presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development"; }) != -1) {
                this.viewuploadNonMarriage = true;
            }
            else {
                this.viewuploadNonMarriage = false;
            }
            this.eduCount -= 1;
            if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                var eduBenefit = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toLowerCase(); });
                if (eduBenefit != null) {
                    var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
                }
                if (cond) {
                    this.maxLimitExceeded = true;
                }
                else {
                    this.maxLimitExceeded = false;
                }
            }
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    };
    ClaimEntryNomineeComponent.prototype.getHospitalization = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].Hospitalization)
            .subscribe(function (data) {
            _this.hospitalizationLov = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getHealthClainFor = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].ClaimFor)
            .subscribe(function (data) {
            _this.healthtypeofClaim = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getLastExamPassed = function () {
        var _this = this;
        this.dataService
            .getlovDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["LovConstants"].LastExamPassed)
            .subscribe(function (data) {
            _this.lastExampassed = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getPfConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].PF)
            .subscribe(function (data) {
            _this.pfConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getHealthandFamilyConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily)
            .subscribe(function (data) {
            _this.healthConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getEducationConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education)
            .subscribe(function (data) {
            _this.educationConfig = data;
            _this.dataService.eduConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDeathConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death)
            .subscribe(function (data) {
            _this.deathConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDisabilityConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Disability)
            .subscribe(function (data) {
            _this.disabilityConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.valuechange = function (ssnNo) {
        var _this = this;
        this.isCAFUpdated = false;
        this.claim.healthFamilyDetails = {};
        this.claim.educationDetails = {};
        this.claim.deathDetails = {};
        this.claim.disabilityDetails = {};
        this.claim.providentFundDetails = {};
        this.educationDetailsArray = [];
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            if (confirm("Are you sure to proceed ")) {
                this.dataService.isCAFUpdated(ssnNo.trim(), this.isRegistrationNo).subscribe(function (data1) {
                    debugger;
                    if (!data1)
                        _this.isCAFUpdated = true;
                    else {
                        _this.dataService
                            .getBeneficiaryBasicDetailsByNo(ssnNo.trim(), _this.isRegistrationNo)
                            .subscribe(function (data) {
                            _this.beneficiary = data;
                            if (_this.beneficiary != null && _this.beneficiary.benSno > 0) {
                                if (_this.beneficiary.isActive) {
                                    _this.benficiaryInactive = false;
                                    if (_this.mode == "entry") {
                                        _this.getNomineeClaimEntryValidation(_this.beneficiary.benSno);
                                    }
                                    _this.getBenficiaryFamilyDetails(_this.beneficiary.benSno);
                                    _this.getBenficiaryFamilyDetailsByHealth(_this.beneficiary.benSno);
                                    _this.getBenficiaryEduCount(_this.beneficiary.benSno);
                                    _this.getBeneficiaryNomineeDetails(_this.beneficiary.benSno);
                                    if (_this.beneficiary.benPFStatus != null && _this.beneficiary.benPFStatus == 1) {
                                        _this.dataService.getBeneficiaryPFAccountDetails(_this.beneficiary.benSno).subscribe(function (data1) {
                                            debugger;
                                            _this.beneficiaryPFAccountDetails = data1;
                                            if (_this.beneficiaryPFAccountDetails != null && (_this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && _this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                if (_this.beneficiaryPFAccountDetails.pfStatus == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["PFStatusMaster"].Active || _this.beneficiaryPFAccountDetails.pfStatus == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["PFStatusMaster"].PartialClosed) {
                                                    _this.getPfBalance(_this.beneficiary.benSno);
                                                    _this.validatePfSubmit(_this.beneficiary.ssI_Number, 0);
                                                    if (_this.isPFSubmitted) {
                                                        _this.disablePFCheckbox = true;
                                                    }
                                                    else {
                                                        _this.disablePFCheckbox = false;
                                                    }
                                                }
                                                else
                                                    alert("Your Pf Account is closed/Inactive");
                                            }
                                            else {
                                                _this.disablePFCheckbox = true;
                                                alert("No pf details available for this given SSIN number");
                                            }
                                        });
                                        //if (this.beneficiary.regNumber != null && this.beneficiary.regNumber != "") {
                                        //    this.getPfBalance(this.beneficiary.regNumber);
                                        //    this.validatePfSubmit(this.beneficiary.ssI_Number, 0);
                                        //    if (this.isPFSubmitted) {
                                        //        this.disablePFCheckbox = true;
                                        //    }
                                        //    else {
                                        //        this.disablePFCheckbox = false;
                                        //    }
                                        //}
                                        //else {
                                        //    this.disablePFCheckbox = true;
                                        //    alert("No pf details available for this given SSIN number");
                                        //}
                                    }
                                    else {
                                        _this.pfExsits = true;
                                    }
                                }
                                else {
                                    _this.benficiaryInactive = true;
                                    _this.restrictSave = true;
                                    _this.viewEducation = false;
                                    _this.disableEdu = true;
                                }
                            }
                            else {
                                _this.isCAFUpdated = true;
                            }
                            console.log(_this.beneficiary);
                        });
                    }
                });
            }
        }
        else {
            this.beneficiary = {};
            this.viewEducation = false;
        }
    };
    ClaimEntryNomineeComponent.prototype.getNomineeClaimEntryValidation = function (id) {
        var _this = this;
        this.dataService
            .getNomineeClaimEntryValidation(id)
            .subscribe(function (data) {
            if (data) {
                var healthCount = data.item1;
                var eduCount = data.item2;
                //health Check box
                if (healthCount > 0) {
                    _this.disableHealthCheckbox = false;
                }
                else {
                    _this.disableHealthCheckbox = true;
                    _this.isHFSubmitted = true;
                }
                //Education Check box
                if (eduCount > 0) {
                    _this.disableEduCheckbox = false;
                }
                else {
                    _this.disableEduCheckbox = true;
                    _this.isEduSubmitted = true;
                }
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            _this.benficiaryNominee = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getHospitals = function () {
        var _this = this;
        this.dataService
            .getAllHospitals()
            .subscribe(function (data) {
            _this.hospotalList = data;
            console.log(_this.hospotalList);
        });
    };
    ClaimEntryNomineeComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
            _this.result = [];
            groups.forEach(function (g) {
                return _this.result.push({
                    name: g,
                    values: _this.packages.filter(function (i) { return i.ailmentName === g; })
                });
            });
        });
    };
    ClaimEntryNomineeComponent.prototype.getBenficiaryEduCount = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryEduCount(id)
            .subscribe(function (data) {
            _this.eduCount = data;
            if (_this.educationBenefitConfigDetails != null && _this.educationBenefitConfigDetails.length > 0) {
                var eduBenefit = _this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toLowerCase(); });
                if (eduBenefit != null) {
                    var cond = eval(_this.eduCount + eduBenefit.logic + eduBenefit.value);
                    if (cond) {
                        //if (this.eduCount >= 2) {
                        //this.disableEdu = true;
                        //this.maxLimitExceeded = true;
                        //this.restrictSave = true;
                    }
                    else {
                        _this.disableEdu = false;
                        _this.maxLimitExceeded = false;
                        _this.restrictSave = false;
                    }
                }
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.getBenficiaryFamilyDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education)
            .subscribe(function (data) {
            _this.benficiaryFamily = data;
            if (_this.benficiaryFamily != null && _this.benficiaryFamily.length > 0) {
                _this.noDependents = false;
            }
            //else { this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true; }
            console.log(_this.benficiaryFamily);
        });
    };
    ClaimEntryNomineeComponent.prototype.getBenficiaryFamilyDetailsByHealth = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily)
            .subscribe(function (data) {
            _this.benficiaryFamilybyHealth = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
        var _this = this;
        this.maxHelathClaimLimitExceeded = false;
        this.dataService
            .getBeneficiaryHealthClaimAmount(benSno, typeOfClaim)
            .subscribe(function (data) {
            var maxEligibleAmount = 0;
            if (typeOfClaim != 0) {
                if (typeOfClaim == 4) {
                    maxEligibleAmount = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].TreatmentOfAilment;
                    _this.typeOfAilmentClaimedAmount = data;
                }
                else {
                    maxEligibleAmount = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].Surgery;
                    _this.surgeryClaimedAmount = data;
                }
                if (data >= maxEligibleAmount) {
                    alert("Maximum claim limit has been reached for the selected claim type.");
                    _this.claim.healthFamilyDetails.typeOfClaim = 0;
                    return;
                }
            }
            else {
                _this.totalHealthClaimAmount = data;
                maxEligibleAmount = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].TreatmentOfAilment + _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].Surgery;
                if (_this.totalHealthClaimAmount >= maxEligibleAmount) {
                    _this.viewHealth = false;
                    _this.maxHelathClaimLimitExceeded = true;
                }
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.validateHealthData = function (claimData, id) {
        var isValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true; //this.originalVoucher = 
        this.isClaimEffectiveDate = false;
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        if (this.hospotalId > 0) {
            if (this.claim.healthFamilyDetails.otherHospital == undefined) {
                this.otherHospitalValid = isValid = false;
            }
            ;
        }
        if (this.claim.healthFamilyDetails.claimFor == undefined) {
            this.claimForValid = isValid = false;
        }
        if (this.claim.healthFamilyDetails.typeOfClaim == undefined) {
            this.typeOfClaimValid = isValid = false;
        }
        if (this.claim.healthFamilyDetails.hospitalId == 0 || this.claim.healthFamilyDetails.hospitalId == undefined) {
            this.hospital = isValid = false;
        }
        if (this.claim.healthFamilyDetails.typeOfHospitalization == 0 || this.claim.healthFamilyDetails.typeOfHospitalization == undefined) {
            this.hospitalization = isValid = false;
        }
        if (this.claim.healthFamilyDetails.isCertifynotESI == false || this.claim.healthFamilyDetails.isCertifynotESI == undefined) {
            this.rigisterESI = isValid = false;
        }
        if (this.healthSelfAttached.fileName == undefined) {
            this.hospitalselfAttested = isValid = false;
        }
        ;
        //if (this.healthOriginalVoucher.fileName == undefined) { this.originalVoucher = isValid = false };
        if (this.showDisCertUpload && this.healthDischargeCertificate.fileName == undefined) {
            this.dischargeCertificate = isValid = false;
        }
        ;
        if (this.viewDateOfAdmit) {
            if (this.claim.healthFamilyDetails.admittedDate == undefined) {
                this.dateofAdmin = isValid = false;
            }
            else {
                if (this.claim.healthFamilyDetails.admittedDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                    this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                    this.isClaimEffectiveDate = true;
                    isValid = false;
                }
            }
            if (this.claim.healthFamilyDetails.dischargeDate == undefined) {
                this.dateofDischargeValid = isValid = false;
            }
            else {
                if (this.claim.healthFamilyDetails.dischargeDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                    this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                    this.isClaimEffectiveDate = true;
                    isValid = false;
                }
            }
        }
        if (this.viewDateOfFirstAppointment) {
            if (this.claim.healthFamilyDetails.firstAppointmentDate == undefined) {
                this.dateofAppointment = isValid = false;
            }
            else {
                if (this.claim.healthFamilyDetails.firstAppointmentDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                    this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                    this.isClaimEffectiveDate = true;
                    isValid = false;
                }
            }
        }
        if (this.viewFamily) {
            if (this.claim.healthFamilyDetails.familyMemberId == 0 || this.claim.healthFamilyDetails.familyMemberId == undefined) {
                this.familyMember = isValid = false;
            }
        }
        if (this.viewSelf) {
            if (this.claim.healthFamilyDetails.loeFromDate == undefined) {
                this.loeFromDate = isValid = false;
            }
            else {
                if (this.claim.healthFamilyDetails.loeFromDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                    this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                    this.isClaimEffectiveDate = true;
                    isValid = false;
                }
            }
            if (this.claim.healthFamilyDetails.loeToDate == undefined) {
                this.loeToDate = isValid = false;
            }
            else {
                if (this.claim.healthFamilyDetails.loeToDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                    this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                    this.isClaimEffectiveDate = true;
                    isValid = false;
                }
            }
        }
        if (this.claim.healthFamilyDetails.costOfClinicalTest == undefined && (this.viewDateOfAdmit && this.claim.healthFamilyDetails.costOfHospitalization == undefined) && this.claim.healthFamilyDetails.costOfMedicine == undefined) {
            isValid = false;
            alert("Please enter atleast one cost");
            return;
        }
        else if (this.claim.healthFamilyDetails.costOfClinicalTest == 0 && this.claim.healthFamilyDetails.costOfHospitalization == 0 && this.claim.healthFamilyDetails.costOfMedicine == 0) {
            isValid = false;
            alert("Please enter atleast one valid cost");
            return;
        }
        else {
            var amount = Number(claimData.healthFamilyDetails.costOfClinicalTest != undefined ? claimData.healthFamilyDetails.costOfClinicalTest : 0) + Number(claimData.healthFamilyDetails.costOfHospitalization != undefined ? claimData.healthFamilyDetails.costOfHospitalization : 0) + Number(claimData.healthFamilyDetails.costOfMedicine != undefined ? claimData.healthFamilyDetails.costOfMedicine : 0);
            if (amount == 0) {
                isValid = false;
                alert("Please enter atleast one valid cost");
                return;
            }
            var remainingAmount = 0;
            if (this.claim.healthFamilyDetails.typeOfClaim == 4) {
                remainingAmount = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].TreatmentOfAilment - this.typeOfAilmentClaimedAmount;
            }
            else {
                remainingAmount = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["HealthClaimEligibility"].Surgery - this.surgeryClaimedAmount;
            }
            if (amount > remainingAmount) {
                isValid = false;
                alert("Cost of Clinical Test, Cost of Medicine, Cost of Hospitalization should not be more than " + remainingAmount);
                return;
            }
        }
        //if (this.viewDateOfAdmit) {
        //    if (this.claim.healthFamilyDetails.admittedDate == undefined) { this.dateofAdmin = isValid = false }
        //    if (this.claim.healthFamilyDetails.dischargeDate == undefined) { this.dateofDischargeValid = isValid = false }
        //}
        //if (this.viewDateOfFirstAppointment) {
        //    if (this.claim.healthFamilyDetails.firstAppointmentDate == undefined) { this.dateofAppointment = isValid = false };
        //}
        if (this.enableReasonForDelaySubmissionInHealth) {
            if (this.claim.healthFamilyDetails.reasonForDelaySubmission == undefined) {
                this.reasonForHealthDelayValid = isValid = false;
            }
            ;
            if (this.healthCondolationCertificate.fileName == undefined) {
                this.healthCondolationCertificateUploaded = isValid = false;
            }
            ;
        }
        return isValid;
    };
    ClaimEntryNomineeComponent.prototype.validateDeathData = function (claimData, id) {
        var isValid = true;
        this.natureOfDeath = this.dateofDeath = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = true;
        this.isClaimEffectiveDate = false;
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        if (this.deathCertificate.fileName == undefined) {
            this.deathCertificateUploaded = isValid = false;
        }
        ;
        if (this.bankPassbook.fileName == undefined) {
            this.bankPassbookUploaded = isValid = false;
        }
        ;
        if (this.claim.deathDetails.natureofDeath == undefined) {
            this.natureOfDeath = isValid = false;
        }
        ;
        if (this.claim.deathDetails.dateofDeath == undefined) {
            this.dateofDeath = isValid = false;
        }
        else {
            if (this.claim.deathDetails.dateofDeath < new Date(this.deathClaimEffectiveDate)) {
                this.claimEffectiveDate = this.deathClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        if (this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional == false || this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional == undefined) {
            this.isDeath1 = isValid = false;
        }
        if (this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == false || this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == undefined) {
            this.isDeath2 = isValid = false;
        }
        if (this.claim.deathDetails.isOtherFinancialAssistance == false || this.claim.deathDetails.isOtherFinancialAssistance == undefined) {
            this.isDeath3 = isValid = false;
        }
        if (this.viewAccidental == true && this.claim.deathDetails.placeofDeath == undefined) {
            this.placeOfDeathValid = isValid = false;
        }
        ;
        return isValid;
    };
    ClaimEntryNomineeComponent.prototype.validateClaimsData = function (claimData, id) {
        var isValid = true;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        if (this.beneficiary.benSno == undefined || this.beneficiary.benSno <= 0) {
            this.ssnNoValid = isValid = false;
        }
        if (claimData.nomineeName == undefined || claimData.nomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        if (claimData.nomineeContact == undefined || claimData.nomineeContact.toString() == "") {
            this.nomineeContactValid = isValid = false;
        }
        if (claimData.nomineeDOB == undefined) {
            this.nomineeDOBValid = isValid = false;
        }
        if (claimData.nomineeBankAccount == undefined || claimData.nomineeBankAccount == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        if (id == null) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        return isValid;
    };
    ClaimEntryNomineeComponent.prototype.okClick = function () {
        this.successModal.hide();
        window.location.href = "/";
    };
    ClaimEntryNomineeComponent.prototype.downloadRecipt = function (refNo, amount, name, nomineeName) {
        this.dataService
            .downloadReceipt(this.beneficiary.benFirstName, this.beneficiary.ssI_Number, refNo, amount, name, nomineeName)
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    ClaimEntryNomineeComponent.prototype.saveClaimsData = function (claimData) {
        var _this = this;
        var isValidNomineeId = true;
        var isValid = true;
        var hasNomineeShare = true;
        //let isValidNomineeName = true;
        //let isValidNomineeBank = true;
        //let isValidNomineeDOB = true;
        this.validateDependent = false;
        if (this.viewHealth) {
            if (!this.validateHealthData(claimData, 2)) {
                //return;
                isValid = false;
            }
        }
        if (this.viewDeath) {
            if (!this.validateDeathData(claimData, 2)) {
                //return;
                isValid = false;
            }
        }
        //Keep Education Validations after all the health,pf,death, disability validations
        if (this.viewEducation) {
            if (this.educationDetailsArray.length == 0) {
                alert("Please add atleast one student");
                //return;
                isValid = false;
            }
            if (!claimData.educationDetails.isanyothersourceofthegovernment) {
                return this.educationCheck = isValid = false;
            }
            this.isClaimEffectiveDate = false;
            for (var i = 0; i < this.educationDetailsArray.length; i++) {
                if (this.educationDetailsArray[i].dateofAdmission != undefined) {
                    if (new Date(this.educationDetailsArray[i].dateofAdmission) < new Date(this.educationClaimEffectiveDate)) {
                        this.claimEffectiveDate = this.educationClaimEffectiveDate;
                        this.isClaimEffectiveDate = true;
                        isValid = false;
                        return;
                    }
                }
            }
        }
        if (isValid == false) {
            return;
        }
        if (this.validateClaimsData(claimData)) {
            this.UpdateClaimStatusIdByStatus();
            if (this.ClaimStatusId <= 7)
                claimData.workflowId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflow;
            else
                claimData.workflowId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["WorkflowTrans"].workflowreferral;
            //claimData.workflowId = WorkflowTrans.workflow;
            var attachedList = [];
            this.claim.disabilityDetails = null;
            if (!this.viewPf) {
                this.claim.providentFundDetails = null;
            }
            if (!this.viewDeath) {
                this.claim.deathDetails = null;
            }
            if (!this.viewHealth) {
                this.claim.healthFamilyDetails = null;
            }
            if (!this.viewEducation) {
                this.claim.educationDetails = null;
            }
            this.mainUploadList.push(this.mainUpload);
            this.claim.benSno = this.beneficiary.benSno;
            claimData.attachment = this.mainUploadList;
            claimData.entryPoint = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Nominee;
            claimData.ssin = this.beneficiary.ssI_Number;
            if (this.claim.educationDetails != null) {
                if (this.claim.educationDetails.educationHdrId > 0)
                    claimData.educationDetails.educationHdrId = this.claim.educationDetails.educationHdrId;
                claimData.educationDetails.educationDetailList = this.educationDetailsArray;
                //---------------------------
                this.educationClaimExceptionDetails = [];
                for (var i = 0; i < this.educationDetailsArray.length; i++) {
                    var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == _this.educationDetailsArray[i].dependentId; });
                    if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                        //Exception Rule - 1 (if currentdate-admissiondate >90) 
                        if (this.educationDetailsArray[i].dateofAdmission != null && this.educationDetailsArray[i].dateofAdmission != undefined) {
                            var date1 = new Date(this.educationDetailsArray[i].dateofAdmission);
                            var date2 = new Date(Date.now());
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            var eduBenefit = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofAdmissionExceeding" /* DateofAdmissionExceeding */.toLowerCase(); });
                            if (eduBenefit != null) {
                                var cond = eval(diffDays + eduBenefit.logic + eduBenefit.value);
                                //if (diffDays > 90) {
                                if (cond) {
                                    //if (diffDays > 90) {
                                    var exp = {};
                                    exp.exceptionText = "Student (Dependent) " + data.benDependentName + " admission date exceeding 90 days";
                                    exp.exceptionCapturedDate = new Date();
                                    exp.raisedBy = 89;
                                    this.educationClaimExceptionDetails.push(exp);
                                }
                            }
                            //Exception Rule - 2 IF(BenDependentSonAge by admissiondate> 21) 
                            if (data.benDependentRelation.toLowerCase() == "son") {
                                var date1 = new Date(this.educationDetailsArray[i].dateofAdmission);
                                var date2 = new Date(data.dob);
                                var timeDiff = Math.abs(date1.getTime() - date2.getTime());
                                var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                                var eduBenefit2 = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "SonAgeExceeding" /* SonAgeExceeding */.toLowerCase(); });
                                if (eduBenefit2 != null) {
                                    var cond2 = eval(age + eduBenefit2.logic + eduBenefit2.value);
                                    //if (age >= 21) {
                                    if (cond2) {
                                        //if (age >= 21) {
                                        var exp = {};
                                        exp.exceptionText = "Student (Dependent) " + data.benDependentName + " age exceeding 21";
                                        exp.exceptionCapturedDate = new Date();
                                        exp.raisedBy = 89;
                                        this.educationClaimExceptionDetails.push(exp);
                                    }
                                }
                            }
                        }
                    }
                }
                // claimData.educationDetails.educationClaimExceptionDetails.concat(this.expection);
                //--------------------
                // claimData.educationDetails.attachmentDetailsList = attachedList;
                claimData.educationDetails.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education;
                claimData.educationDetails.statusId = this.ClaimStatusId; //ClaimStatus.Submitted;
                claimData.educationDetails.CreatedBy = 89;
            }
            if (this.claim.healthFamilyDetails != null) {
                //-------------------------------
                this.healthClaimExceptionDetails = [];
                if (this.healthFamilyBenefitConfigDetails != null && this.healthFamilyBenefitConfigDetails.length > 0) {
                    //Exception Rule - 4 if(Currentdate-Firstappointmentdate >60 and OPD)
                    if (this.claim.healthFamilyDetails.firstAppointmentDate != null && this.claim.healthFamilyDetails.firstAppointmentDate != undefined) {
                        var date1 = new Date(this.claim.healthFamilyDetails.firstAppointmentDate);
                        var date2 = new Date(Date.now());
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        var helBenefit = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofFirstAppointmentExceeding" /* DateofFirstAppointmentExceeding */.toLowerCase(); });
                        if (helBenefit != null) {
                            var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                            if (cond && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                //if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                var exp = {};
                                exp.exceptionText = "First appointment date exceeding 60 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = 89;
                                this.healthClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                    //Exception Rule - 5 if(Currentdate-Dischargedate>60 and Hospitalization)
                    if (this.claim.healthFamilyDetails.dischargeDate != null && this.claim.healthFamilyDetails.dischargeDate != undefined) {
                        var date1 = new Date(this.claim.healthFamilyDetails.dischargeDate);
                        var date2 = new Date(Date.now());
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofDischargeExceeding" /* DateofDischargeExceeding */.toLowerCase(); });
                        if (helBenefit2 != null) {
                            var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                            if (cond2 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                //if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                var exp = {};
                                exp.exceptionText = "Discharge date exceeding 60 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = 89;
                                this.healthClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
                //claimData.healthFamilyDetails.healthClaimExceptionDetails.concat(this.expection);
                //--------------------
                for (var i = 0; i < this.selectedPackages.length; i++) {
                    var oo = {};
                    oo.packageID = this.selectedPackages[i].packageID;
                    oo.ailmentName = this.selectedPackages[i].ailmentName;
                    oo.packageName = this.selectedPackages[i].packageName;
                    this.healthFamilyPackages.push(oo);
                }
                if (this.claim.healthFamilyDetails.healthFamilyId > 0)
                    claimData.healthFamilyDetails.healthFamilyId = this.claim.healthFamilyDetails.healthFamilyId;
                claimData.healthFamilyDetails.healthFamilyPackages = this.healthFamilyPackages;
                claimData.healthFamilyDetails.claimAmount = Number(claimData.healthFamilyDetails.costOfClinicalTest != undefined ? claimData.healthFamilyDetails.costOfClinicalTest : 0) + Number(claimData.healthFamilyDetails.costOfHospitalization != undefined ? claimData.healthFamilyDetails.costOfHospitalization : 0) + Number(claimData.healthFamilyDetails.costOfMedicine != undefined ? claimData.healthFamilyDetails.costOfMedicine : 0) + ((this.viewSelf) ? claimData.healthFamilyDetails.loeAmount : 0);
                claimData.healthFamilyDetails.loeAmount = this.lossOfEmploymentAmount;
                claimData.healthFamilyDetails.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily;
                claimData.healthFamilyDetails.statusId = this.ClaimStatusId; //ClaimStatus.Submitted;
                claimData.healthFamilyDetails.createdBy = 89;
                if (!this.isOtherHospital) {
                    claimData.healthFamilyDetails.otherHospital == undefined;
                }
                else {
                    var exp = {};
                    exp.exceptionText = "Application has been submitted with a non listed hospital";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = 89;
                    // this.expection.push(exp);
                    this.healthClaimExceptionDetails.push(exp);
                }
                if (this.viewDateOfAdmit) {
                    claimData.healthFamilyDetails.admittedDate == undefined;
                    claimData.healthFamilyDetails.dischargeDate == undefined;
                    claimData.healthFamilyDetails.costOfHospitalization == undefined;
                }
                if (this.viewDateOfFirstAppointment) {
                    claimData.healthFamilyDetails.firstAppointmentDate == undefined;
                    claimData.healthFamilyDetails.nameOfTheDisease == undefined;
                    //claimData.healthFamilyDetails.nameOfClinicalTest == undefined;
                    this.nameOfClinicalTestIds = [];
                }
                else {
                    if (!this.viewNameOfClinicalTest) {
                        //claimData.healthFamilyDetails.nameOfClinicalTest == undefined;
                        this.nameOfClinicalTestIds = [];
                    }
                    else {
                        if (this.nameOfClinicalTestIds != null && this.nameOfClinicalTestIds.length > 0) {
                            this.clinicalTestDetails = [];
                            for (var i = 0; i < this.nameOfClinicalTestIds.length; i++) {
                                var testId = {};
                                var t = this.nameOfClinicalTestIds[i].lovDtlId;
                                testId.clinicalTest = Number(t);
                                this.clinicalTestDetails.push(testId);
                            }
                            if (this.clinicalTestDetails.length > 0) {
                                claimData.healthFamilyDetails.clinicalTestDetails = this.clinicalTestDetails;
                            }
                        }
                    }
                }
                if (!this.viewSelf) {
                    claimData.healthFamilyDetails.loeFromDate = undefined;
                    claimData.healthFamilyDetails.loeToDate = undefined;
                }
                this.healthAttachmentList.push(this.healthOriginalVoucher);
                this.healthAttachmentList.push(this.healthSelfAttached);
                if (this.healthDischargeCertificate.fileName != undefined) {
                    this.healthAttachmentList.push(this.healthDischargeCertificate);
                }
                if (this.healthExpensesSheet.fileName != undefined) {
                    this.healthAttachmentList.push(this.healthExpensesSheet);
                }
                if (this.enableReasonForDelaySubmissionInHealth) {
                    this.healthAttachmentList.push(this.healthCondolationCertificate);
                }
                claimData.healthFamilyDetails.attachmentDTOList = this.healthAttachmentList;
            }
            if (this.claim.deathDetails != null) {
                this.deathClaimExceptionDetails = [];
                if (this.claim.deathDetails.deathId > 0)
                    claimData.deathDetails.deathId = this.claim.deathDetails.deathId;
                claimData.deathDetails.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death;
                claimData.deathDetails.statusId = this.ClaimStatusId; //ClaimStatus.Submitted;
                claimData.deathDetails.createdBy = 89;
                claimData.deathDetails.claimAmount = this.deathEligibility;
                this.deathAttachmentList.push(this.deathCertificate);
                this.deathAttachmentList.push(this.bankPassbook);
                claimData.deathDetails.attachmentDTOList = this.deathAttachmentList;
                //Death Exceptions
                //Exception Rule - if(Currentdate-dateofDeath >90)
                if (this.claim.deathDetails.dateofDeath != null && this.claim.deathDetails.dateofDeath != undefined) {
                    var date1 = new Date(this.claim.deathDetails.dateofDeath);
                    var date2 = new Date(Date.now());
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    if (this.deathBenefitConfigDetails != null && this.deathBenefitConfigDetails.length > 0) {
                        var deaBenefit = this.deathBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofDeathExceeding" /* DateofDeathExceeding */.toLowerCase(); });
                        if (deaBenefit != null) {
                            var cond = eval(diffDays + deaBenefit.logic + deaBenefit.value);
                            if (cond) {
                                //if (diffDays > 90) {
                                var exp = {};
                                exp.exceptionText = "Date of Death exceeding 90 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = 89;
                                this.deathClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
            }
            if (this.claim.providentFundDetails != null) {
                //claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                if (this.claim.providentFundDetails.pfId > 0)
                    claimData.providentFundDetails.pfId = this.claim.providentFundDetails.pfId;
                claimData.providentFundDetails.claimType = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].PF;
                claimData.providentFundDetails.statusId = this.ClaimStatusId; //ClaimStatus.Submitted;
                claimData.providentFundDetails.createdBy = 89;
                claimData.providentFundDetails.nomineeId = this.benNomineeSno;
                claimData.providentFundDetails.claimAmount = this.benNomineeShareAmount;
                claimData.providentFundDetails.typeOfClaim = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["PFTypeOfClaim"].FinalPayment;
                if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                    claimData.providentFundDetails.pFNO = this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO;
                }
                else {
                    claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                }
                //PF Exceptions
                if (this.benficiaryNominee.length > 1) {
                    for (var i = 0; i < this.benficiaryNominee.length; i++) {
                        if (this.benficiaryNominee[i].benNomineeSharePercentage == 0) {
                            hasNomineeShare = false;
                            break;
                        }
                    }
                    if (hasNomineeShare == false) {
                        var exp = {};
                        exp.exceptionText = "Nominees doesn't have share allocation";
                        exp.exceptionCapturedDate = new Date();
                        exp.raisedBy = this.benNomineeSno;
                        this.pfClaimExceptionDetails.push(exp);
                    }
                }
            }
            claimData.StatusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Submitted;
            claimData.CreatedBy = 89;
            if (claimData.claimId > 0) {
                claimData.updatedBy = 89;
            }
            //------------------------
            //Exception Rule - 9 If Nominee Details not matching with database
            if (this.benficiaryNominee != null && this.benficiaryNominee.length > 0) {
                var benNominee = this.benficiaryNominee.find(function (n) { return n.benNomineeName.trim().toLowerCase() == _this.claim.nomineeName.trim().toLowerCase(); });
                if (benNominee != null) {
                    debugger;
                    //b. Invalid nominee DOB
                    var date1 = new Date(this.claim.nomineeDOB);
                    var date2 = new Date(benNominee.dob);
                    var ageNom = date1.getFullYear() - date2.getFullYear();
                    var m = date1.getMonth() - date2.getMonth();
                    if (m < 0 || (m === 0 && date1.getDate() < date2.getDate())) {
                        ageNom--;
                    }
                    //------------------
                    //var date1 = new Date(this.claim.nomineeDOB);
                    //var date2 = new Date(benNominee.dob);
                    //var timeDiff = Math.abs(date1.getTime() - date2.getTime());
                    if (ageNom == 0) {
                        this.benNomineeSno = benNominee.benNomineeSno;
                    }
                    else {
                        isValidNomineeId = false;
                        var exp = {};
                        exp.exceptionText = "Invalid nominee date of birth";
                        exp.exceptionCapturedDate = new Date();
                        exp.raisedBy = benNominee.benNomineeSno;
                        this.educationClaimExceptionDetails.push(exp);
                        this.healthClaimExceptionDetails.push(exp);
                        this.deathClaimExceptionDetails.push(exp);
                        this.pfClaimExceptionDetails.push(exp);
                    }
                    //c.Validate nominee Bank Details
                    if (benNominee.benNomineeBankAccNo.trim().toLowerCase() != this.claim.nomineeBankAccount.trim().toLowerCase() || benNominee.benNomineeBankIfscCode.trim().toLowerCase() != this.claim.nomineeIFSCCode.trim().toLowerCase()) {
                        isValidNomineeId = false;
                        var exp = {};
                        exp.exceptionText = "Invalid bank details";
                        exp.exceptionCapturedDate = new Date();
                        exp.raisedBy = benNominee.benNomineeSno;
                        this.educationClaimExceptionDetails.push(exp);
                        this.healthClaimExceptionDetails.push(exp);
                        this.deathClaimExceptionDetails.push(exp);
                        this.pfClaimExceptionDetails.push(exp);
                    }
                }
                else {
                    isValidNomineeId = false;
                    //a.Validate nominee Name
                    var exp = {};
                    exp.exceptionText = "Invalid nominee name";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = 89;
                    this.educationClaimExceptionDetails.push(exp);
                    this.healthClaimExceptionDetails.push(exp);
                    this.deathClaimExceptionDetails.push(exp);
                    this.pfClaimExceptionDetails.push(exp);
                }
            }
            else {
                isValidNomineeId = false;
                //a.In-Valid nominee
                var exp = {};
                exp.exceptionText = "Nominee not existing for this SSIN number in the database";
                exp.exceptionCapturedDate = new Date();
                exp.raisedBy = 89;
                this.educationClaimExceptionDetails.push(exp);
                this.healthClaimExceptionDetails.push(exp);
                this.deathClaimExceptionDetails.push(exp);
                this.pfClaimExceptionDetails.push(exp);
            }
            if (isValidNomineeId) {
                claimData.nomineeId = this.benNomineeSno;
            }
            else {
                claimData.nomineeId = null;
            }
            if (this.claim.educationDetails != null && this.educationClaimExceptionDetails.length > 0) {
                claimData.educationDetails.educationClaimExceptionDetails = this.educationClaimExceptionDetails;
            }
            if (this.claim.healthFamilyDetails != null && this.healthClaimExceptionDetails.length > 0) {
                claimData.healthFamilyDetails.healthClaimExceptionDetails = this.healthClaimExceptionDetails;
            }
            if (this.claim.deathDetails != null && this.deathClaimExceptionDetails.length > 0) {
                claimData.deathDetails.deathClaimExceptionDetails = this.deathClaimExceptionDetails;
            }
            if (this.claim.providentFundDetails != null && this.pfClaimExceptionDetails.length > 0) {
                claimData.providentFundDetails.pfClaimExceptionDetails = this.pfClaimExceptionDetails;
            }
            //------------------------
            console.log(claimData);
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .createClaim(claimData)
                    .then(function (data) {
                    if (data) {
                        _this.claim.claimId = data.item5;
                        _this.claimReferenceNo = data.item3;
                        var refNo = void 0;
                        if (_this.viewPf) {
                            var downloads = { refNo: "", amount: 0, name: "PF", nomineeName: "" };
                            downloads.refNo = data.item1;
                            downloads.amount = _this.claim.providentFundDetails.claimAmount;
                            downloads.nomineeName = _this.claim.nomineeName;
                            _this.genaratePdfs.push(downloads);
                            refNo = data.item1 + " (PF) ";
                        }
                        if (_this.viewHealth) {
                            var downloads = { refNo: "", amount: 0, name: "Health & Family", nomineeName: "" };
                            downloads.refNo = data.item2;
                            downloads.amount = _this.claim.healthFamilyDetails.claimAmount;
                            downloads.nomineeName = _this.claim.nomineeName;
                            _this.genaratePdfs.push(downloads);
                            refNo = data.item2 + " (Health & Family) ";
                        }
                        if (_this.viewDeath) {
                            var downloads = { refNo: "", amount: 0, name: "Death", nomineeName: "" };
                            downloads.refNo = data.item4;
                            downloads.amount = _this.claim.deathDetails.claimAmount;
                            downloads.nomineeName = _this.claim.nomineeName;
                            _this.genaratePdfs.push(downloads);
                            refNo = data.item4 + " (Death) ";
                        }
                        if (_this.viewEducation) {
                            var downloads = { refNo: "", amount: 0, name: "Education", nomineeName: "" };
                            if (refNo == undefined) {
                                downloads.refNo = data.item3;
                                downloads.amount = _this.claim.educationDetails.claimAmount;
                                downloads.nomineeName = _this.claim.nomineeName;
                                _this.genaratePdfs.push(downloads);
                                refNo = data.item3 + " (Education) ";
                            }
                            else {
                                downloads.refNo = data.item3;
                                downloads.amount = _this.claim.educationDetails.claimAmount;
                                downloads.nomineeName = _this.claim.nomineeName;
                                _this.genaratePdfs.push(downloads);
                                refNo = " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Death) " + data.item4;
                            }
                        }
                        _this.claimReferenceNo = refNo;
                        for (var i = 0; i < _this.genaratePdfs.length; i++) {
                            _this.successMessage = "Your claim was successfully submitted, your claim ticket id: " + _this.genaratePdfs[i].refNo + "(" + _this.genaratePdfs[i].name + ")" + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process. <br/>  <br/>";
                        }
                        //   this.successMessage = "Your claim was successfully submitted, your claim ticket id: " + refNo + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process";
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
    ClaimEntryNomineeComponent.prototype.UpdateClaimStatusIdByStatus = function () {
        if (this.mode == "entry")
            this.ClaimStatusId = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimStatus"].Submitted;
        else {
            if (this.claimStatus < 5)
                this.ClaimStatusId = 2;
            else if (this.claimStatus == 5)
                this.ClaimStatusId = 4;
            else if (this.claimStatus == 6 || this.claimStatus == 10)
                this.ClaimStatusId = 8;
            else if (this.claimStatus == 9 || this.claimStatus == 13)
                this.ClaimStatusId = 12;
        }
    };
    ClaimEntryNomineeComponent.prototype.claerClaim = function () {
        this.isRegistrationNo = false;
        this.isCAFUpdated = false;
        this.ssin = "";
        this.pfExsits = this.isPFSubmitted = this.isHFSubmitted = this.isEduSubmitted = this.isBenNomineeSubmittedClaim = false;
        this.isNomineesExist = this.isNomineesMatch = true;
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true; //this.originalVoucher =
        this.restrictSave = false;
        this.viewEducation = false;
        this.disableEdu = false;
        this.noDependents = false;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        this.claim = {};
        this.educationDetailsArray = [];
        this.viewEducation = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewPf = false;
        this.rowIndex = -1;
        this.eduCount = 0;
        this.rowEligibleAmount = 0;
        this.beneficiary = {};
        this.benficiaryFamily = [];
        this.healthOriginalVoucher = {};
        this.healthSelfAttached = {};
        this.healthDischargeCertificate = {};
        this.healthExpensesSheet = {};
        this.healthAttachmentList = [];
        this.mainUploadList = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.eduSelfAttested = [];
        this.claim.healthFamilyDetails = {};
        this.claim.educationDetails = {};
        this.claim.educationDetails.educationDetailList = [];
        this.natureOfDeath = this.dateofDeath = true;
        this.deathAttachmentList = [];
        this.deathCertificate = {};
        this.healthCondolationCertificate = {};
    };
    ClaimEntryNomineeComponent.prototype.GenaratePdf = function (claimData, type) {
        var isValid = true;
        this.validateBasicDetails(claimData);
        if (this.viewHealth) {
            if (this.validateHealthData(claimData, type)) {
                if (this.claim.healthFamilyDetails.claimFor == 5 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    claimData.healthFamilyDetails.loeAmount = this.lossOfEmploymentAmount;
                }
                else {
                    claimData.healthFamilyDetails.loeAmount = 0;
                }
            }
            else {
                isValid = false;
                //return;
            }
        }
        if (this.viewDeath) {
            if (!this.validateDeathData(claimData, type)) {
                //return;
                isValid = false;
            }
        }
        if (this.viewPf) {
            claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
            claimData.providentFundDetails.typeOfClaim = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["PFTypeOfClaim"].FinalPayment;
        }
        //Keep Education Validations after all the health,pf,death, disability validations
        if (this.viewEducation) {
            if (this.educationDetailsArray.length == 0) {
                alert("Please add atleast one student");
                //return;
                isValid = false;
            }
            else if (this.educationDetailsArray.length > 0) {
                for (var i = 0; i < this.educationDetailsArray.length; i++) {
                    if (this.educationDetailsArray[i].isDuplicate) {
                        alert("Already claim has submitted for this dependent in this year please select another dependent");
                        isValid = false;
                        return;
                    }
                }
            }
            if (!claimData.educationDetails.isanyothersourceofthegovernment) {
                return this.educationCheck = isValid = false;
            }
            this.isClaimEffectiveDate = false;
            for (var i = 0; i < this.educationDetailsArray.length; i++) {
                if (this.educationDetailsArray[i].dateofAdmission != undefined) {
                    if (new Date(this.educationDetailsArray[i].dateofAdmission) < new Date(this.educationClaimEffectiveDate)) {
                        this.claimEffectiveDate = this.educationClaimEffectiveDate;
                        this.isClaimEffectiveDate = true;
                        isValid = false;
                        return;
                    }
                }
            }
        }
        if (isValid == false) {
            return;
        }
        if (this.validateClaimsData(claimData, 3)) {
            this.pdfModal.show();
        }
        else {
            return;
        }
    };
    ClaimEntryNomineeComponent.prototype.validateBasicDetails = function (claimData) {
        var isValid = true;
        this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        if (this.beneficiary.benSno == undefined || this.beneficiary.benSno <= 0 || this.ssin == "") {
            this.ssnNoValid = isValid = false;
        }
        if (claimData.nomineeName == undefined || claimData.nomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        if (claimData.nomineeContact == undefined || claimData.nomineeContact.toString() == "") {
            this.nomineeContactValid = isValid = false;
        }
        if (claimData.nomineeDOB == undefined || claimData.nomineeDOB == "") {
            this.nomineeDOBValid = isValid = false;
        }
        if (claimData.nomineeBankAccount == undefined || claimData.nomineeBankAccount == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        return isValid;
    };
    ClaimEntryNomineeComponent.prototype.downLoadPdf = function (claimData, type) {
        var _this = this;
        if (!this.viewPf) {
            this.claim.providentFundDetails = null;
        }
        if (!this.viewDeath) {
            this.claim.deathDetails = null;
            this.claim.disabilityDetails = null;
        }
        else {
            claimData.deathDetails.natureofDeathName = this.natureofDeathName;
            claimData.deathDetails.claimAmount = this.deathEligibility;
        }
        if (!this.viewHealth) {
            this.claim.healthFamilyDetails = null;
        }
        if (!this.viewEducation) {
            this.claim.educationDetails = null;
        }
        else {
            claimData.educationDetails.educationDetailList = this.educationDetailsArray;
        }
        this.claim.benSno = this.beneficiary.benSno;
        claimData.benSno = this.claim.benSno;
        claimData.benName = this.beneficiary.benFullName;
        claimData.nomineeName = this.claim.nomineeName;
        claimData.nomineeBankAccount = this.claim.nomineeBankAccount;
        claimData.nomineeIFSCCode = this.claim.nomineeIFSCCode;
        claimData.attachment = this.mainUploadList;
        claimData.ssin = this.beneficiary.ssI_Number;
        claimData.entryPoint = _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["EntryPoint"].Nominee;
        claimData.onBehalfBen = false;
        this.dataService
            .genaratePdfFormV(claimData)
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
                file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](blob, "FormV.pdf");
                _this.disableSubmitbutton = false;
            }
            _this.pdfModal.hide();
            //var url = window.URL.createObjectURL(blob);
            //this.disableSubmitbutton = false;
            //window.open(url);
        });
    };
    ClaimEntryNomineeComponent.prototype.loeFromDateChange = function (eve) {
        this.minLOEDate = new Date(this.claim.healthFamilyDetails.loeFromDate);
        this.calculateLossOfEmploymentAmount();
    };
    ClaimEntryNomineeComponent.prototype.loeToDateChange = function (eve) {
        this.calculateLossOfEmploymentAmount();
    };
    ClaimEntryNomineeComponent.prototype.dateofadminchange = function (eve) {
        this.disableDischarge = false;
        if (eve != null) {
            if (!this.isClaimEdit) {
                this.claim.healthFamilyDetails.dischargeDate = null;
                this.claim.healthFamilyDetails.loeToDate = null;
            }
            else {
                this.isClaimEdit = false;
            }
        }
        this.dischargeMinDt = eve;
        this.lossOfEmploymentAmount = 0;
        if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
            this.claim.healthFamilyDetails.loeFromDate = eve;
            this.lossOfEmploymentAmount = this.calculateLossOfEmploymentAmount();
        }
    };
    ClaimEntryNomineeComponent.prototype.dateofdischargechange = function (eve) {
        this.lossOfEmploymentAmount = 0;
        if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
            this.claim.healthFamilyDetails.loeToDate = eve;
            this.lossOfEmploymentAmount = this.calculateLossOfEmploymentAmount();
        }
        if (eve != null) {
            if (!this.isHealthClaimEdit) {
                var date1 = new Date(eve);
                var date2 = new Date(Date.now());
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                if (this.healthFamilyBenefitConfigDetails != null && this.healthFamilyBenefitConfigDetails.length > 0) {
                    var helBenefit = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "ReasonForDelaySubmission" /* ReasonForDelaySubmission */.toLowerCase(); });
                    if (helBenefit != null) {
                        var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                        if (cond) {
                            this.enableReasonForDelaySubmissionInHealth = true;
                        }
                        else {
                            this.claim.healthFamilyDetails.reasonForDelaySubmission = null;
                            this.healthCondolationCertificate = null;
                            this.enableReasonForDelaySubmissionInHealth = false;
                        }
                    }
                }
                //if (diffDays > 90) {
                //    this.enableReasonForDelaySubmissionInHealth = true;
                //}
                //else {
                //    this.claim.healthFamilyDetails.reasonForDelaySubmission = null;
                //    this.healthCondolationCertificate = null;
                //    this.enableReasonForDelaySubmissionInHealth = false;
                //}
            }
            else {
                this.isHealthClaimEdit = false;
                if (this.claim.healthFamilyDetails.reasonForDelaySubmission != undefined || this.claim.healthFamilyDetails.reasonForDelaySubmission != null)
                    this.enableReasonForDelaySubmissionInHealth = true;
                else
                    this.enableReasonForDelaySubmissionInHealth = false;
            }
        }
    };
    ClaimEntryNomineeComponent.prototype.calculateLossOfEmploymentAmount = function () {
        debugger;
        var calculatedAmount = 0;
        if (this.healthFamilyBenefitConfigDetails != null && this.healthFamilyBenefitConfigDetails.length > 0) {
            if (this.claim.healthFamilyDetails.claimFor != undefined && this.claim.healthFamilyDetails.claimFor == 5) {
                if (this.claim.healthFamilyDetails.claimFor != undefined && this.claim.healthFamilyDetails.typeOfHospitalization != 2) {
                    if (this.claim.healthFamilyDetails.loeFromDate != undefined && this.claim.healthFamilyDetails.loeToDate != undefined) {
                        var date1 = new Date(this.claim.healthFamilyDetails.loeFromDate);
                        var date2 = new Date(this.claim.healthFamilyDetails.loeToDate);
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        if (diffDays != NaN) {
                            diffDays += 1;
                            //-----------------------
                            var helBenefit = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "LossOfEmploymentDateDiffernce" /* LossOfEmploymentDateDiffernce */.toLowerCase(); });
                            if (helBenefit != null) {
                                var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                                if (cond) {
                                    calculatedAmount = 0;
                                    this.viewLOEAmount = false;
                                    this.viewSelf = false;
                                }
                                else {
                                    if (diffDays > Number(helBenefit.value))
                                        calculatedAmount = (200 * Number(helBenefit.value)) + ((diffDays - Number(helBenefit.value)) * 100); //calculatedAmount = (200 * 5) + ((diffDays - 5) * 100);
                                    else
                                        calculatedAmount = diffDays * 200; //calculatedAmount = diffDays * 200;
                                    this.viewSelf = true;
                                    this.viewLOEAmount = true;
                                }
                            }
                            //if (diffDays <= 5) {
                            //    //calculatedAmount = diffDays * 200;
                            //    this.viewLOEAmount = false;
                            //}
                            //else {
                            //    this.viewLOEAmount = true;
                            //    calculatedAmount = (200 * 5) + ((diffDays - 5) * 100);
                            //}
                        }
                    }
                    var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "LossOfEmploymentAmountExceeding" /* LossOfEmploymentAmountExceeding */.toLowerCase(); });
                    if (helBenefit2 != null) {
                        //var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                        var cond2 = eval(calculatedAmount + helBenefit2.logic + helBenefit2.value);
                        if (cond2) {
                            calculatedAmount = 10000;
                        }
                    }
                }
            }
        }
        //if (calculatedAmount > 10000) { calculatedAmount = 10000; }
        return calculatedAmount;
    };
    ClaimEntryNomineeComponent.prototype.checkAll = function (e, item) {
        if (e.target.checked) {
            this.result.filter(function (x) { return x.name == item; })[0].values.forEach(function (item) {
                item.isChecked = true;
            });
        }
        else {
            this.result.filter(function (x) { return x.name == item; })[0].values.forEach(function (item) {
                item.isChecked = false;
            });
        }
    };
    ClaimEntryNomineeComponent.prototype.submitClick = function () {
        this.selectedPackages = [];
        for (var i = 0; i < this.result.length; i++) {
            for (var j = 0; j < this.result[i].values.length; j++) {
                if (this.result[i].values[j].isChecked) {
                    this.selectedPackages.push(this.result[i].values[j]);
                }
            }
        }
        this.packageModal.hide();
    };
    ClaimEntryNomineeComponent.prototype.checkIfAllSelected = function (item) {
    };
    ClaimEntryNomineeComponent.prototype.viewPackages = function () {
        this.packageModal.show();
    };
    ClaimEntryNomineeComponent.prototype.isSameBenNomineeClaimSubmitted = function (id, nomineeId, claimType, eve) {
        var _this = this;
        this.dataService
            .isSameBenNomineeClaimSubmitted(id, nomineeId, claimType)
            .subscribe(function (data) {
            if (claimType == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Death) {
                _this.isBenNomineeSubmittedClaim = data;
                if (_this.isBenNomineeSubmittedClaim) {
                    _this.viewDeath = false;
                    eve.target.checked = false;
                    _this.disableDeathCheckbox = true;
                }
                else {
                    _this.viewDeath = !_this.viewDeath;
                }
            }
        });
    };
    ClaimEntryNomineeComponent.prototype.getHealthFamilyBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].HealthFamily)
            .subscribe(function (data) {
            _this.healthFamilyBenefitConfigDetails = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getEducationBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education)
            .subscribe(function (data) {
            _this.educationBenefitConfigDetails = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDeathBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_4__["ClaimConstants"].Education)
            .subscribe(function (data) {
            _this.deathBenefitConfigDetails = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.radioChange = function (id) {
        if (id == 1)
            this.isRegistrationNo = false;
        if (id == 2)
            this.isRegistrationNo = true;
    };
    ClaimEntryNomineeComponent.prototype.updateCAFDetails = function () {
        var _this = this;
        debugger;
        if (this.isRegistrationNo)
            window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
        else {
            this.dataService
                .getRegistrationNumber(this.ssin)
                .subscribe(function (data) {
                if (data)
                    window.location.href = "/Registration/DeathclaimFrom?ID=" + data;
                else
                    window.location.href = "/Registration/DeathclaimFrom?ID=" + _this.ssin;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lgModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ClaimEntryNomineeComponent.prototype, "lgModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('packageModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ClaimEntryNomineeComponent.prototype, "packageModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ClaimEntryNomineeComponent.prototype, "successModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ClaimEntryNomineeComponent.prototype, "pdfModal", void 0);
    ClaimEntryNomineeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claim-entry-nominee',
            template: __webpack_require__(/*! ./claim-entry-nominee.component.html */ "./src/app/claim-entry-nominee/claim-entry-nominee.component.html"),
            styles: [__webpack_require__(/*! ./claim-entry-nominee.component.css */ "./src/app/claim-entry-nominee/claim-entry-nominee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_claim_data_service__WEBPACK_IMPORTED_MODULE_2__["ClaimNomineeDataService"]])
    ], ClaimEntryNomineeComponent);
    return ClaimEntryNomineeComponent;
}());



/***/ }),

/***/ "./src/app/claim/pipes/constnts.model.ts":
/*!***********************************************!*\
  !*** ./src/app/claim/pipes/constnts.model.ts ***!
  \***********************************************/
/*! exports provided: LovConstants, ClaimConstants, ClaimStatus, WorkflowTrans, EntryPoint, AttachmentType, UserType, HealthClaimEligibility, PFTypeOfClaim, pagination, PFDepositeStatus, ClaimCheckList, ReleaseType, ReasonForApplyAgent, PFStatusMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LovConstants", function() { return LovConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimConstants", function() { return ClaimConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimStatus", function() { return ClaimStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowTrans", function() { return WorkflowTrans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPoint", function() { return EntryPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentType", function() { return AttachmentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthClaimEligibility", function() { return HealthClaimEligibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PFTypeOfClaim", function() { return PFTypeOfClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagination", function() { return pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PFDepositeStatus", function() { return PFDepositeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimCheckList", function() { return ClaimCheckList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseType", function() { return ReleaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonForApplyAgent", function() { return ReasonForApplyAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PFStatusMaster", function() { return PFStatusMaster; });
var LovConstants = {
    Hospitalization: 2,
    ClaimFor: 4,
    LastExamPassed: 5,
    ReasonForApply: 7,
    EntryPoint: 8,
    ExpensesType: 10,
    Diseases: 12,
    ClinicalTests: 13,
    LegacyClaimCategory: 14,
    AdjustmentType: 15
};
var ClaimConstants = {
    PF: 1,
    HealthFamily: 2,
    Disability: 3,
    Death: 4,
    Education: 5
};
var ClaimStatus = {
    Saved: 1,
    Submitted: 2,
    SendbackfromInspector: 3,
    ForwardtoALC: 4,
    SendbackfromALC: 5,
    RejectfromALC: 6,
    ApprovedbyALC: 7,
    RefertoALC: 8,
    ReferedRejectbyALC: 9,
    ReferSendbackbyALC: 10,
    ReferApprovedbyALC: 11,
    ReferedtoDLC: 12,
    ReferSendbackfromDLC: 13,
    ReferedRejectbyDLC: 14,
    ReferApprovedbyDLC: 15,
    ForcedClosed: 16,
    FundRequestFromALC: 19,
    SendBackbyDLC: 20,
    ForwardtoBoard: 21,
    SendBackbyBoard: 22,
    RejectbyBoard: 23,
    ApprovebyBoard: 24,
    Release: 25,
    PaymentProcessingbyALC: 26,
    PaymentReleasebyTreasurer: 27
};
var WorkflowTrans = {
    workflow: 1,
    workflowreferral: 2,
    fundworkflow: 3
};
var EntryPoint = {
    Beneficiary: 19,
    Agent: 20,
    Nominee: 21,
    CA: 64,
    Lwfc: 65
};
var AttachmentType = {
    FormV: 22,
    DischargeCertificate: 23,
    OriginalVouchers: 24,
    DoctorPrescription: 25,
    DeathCertificate: 26,
    DisabilityCertificate: 27,
    Scholarship: 28,
    NonMarriage: 29,
    PassingExamCertificate: 30,
    ExpensesSheet: 31,
    FirstPageofBankPassbook: 40,
    Condolationcertificate: 66,
    PayinSlip: 90,
    FormIV: 91
};
var UserType = {
    SuperAdmin: 1,
    Inspector: 5,
    AsstLabourCom: 6,
    DeputyLabourCom: 7,
    Beneficiary: 14,
    Treasurer: 13,
    CEO: 12,
    ServiceProvider: 8,
    CA: 9,
    Lwfc: 11,
    Others: 10,
};
var HealthClaimEligibility = {
    TreatmentOfAilment: 20000,
    Surgery: 60000
};
var PFTypeOfClaim = {
    Premature: 1,
    FinalPayment: 2
};
var pagination = {
    pageNo: 1,
    pageSize: 10
};
var PFDepositeStatus = {
    pending: 0,
    deposited: 1
};
var ClaimCheckList = {
    PFCheckList: 1,
    HealthFamilyCheckList: 2,
    DisabilityCheckList: 3,
    DeathCheckList: 4,
    EducationCheckList: 5
};
var ReleaseType = {
    ReleaseAgainstRLOOffice: 1,
    ReleaseAgainstBeneficiary: 2
};
var ReasonForApplyAgent = {
    OnDeathofBeneficiaryOnRequestofNominee: 16,
    OnDisabilityofBeneficiary: 17,
    OnRequestofBeneficiary: 18
};
var PFStatusMaster = {
    Active: 1,
    Closed: 2,
    Inactive: 3,
    New: 0,
    PartialClosed: 4,
};


/***/ }),

/***/ "./src/app/models/userurl.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/userurl.model.ts ***!
  \*****************************************/
/*! exports provided: UserUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUrl", function() { return UserUrl; });
var UserUrl = /** @class */ (function () {
    function UserUrl() {
    }
    return UserUrl;
}());



/***/ }),

/***/ "./src/app/number.directive.ts":
/*!*************************************!*\
  !*** ./src/app/number.directive.ts ***!
  \*************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
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

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        var _this = this;
        this.el = el;
        this.DIGITS_REGEXP = new RegExp(/\D/g);
        // Sanatize clipboard by removing any non-numeric input after pasting
        this.el.nativeElement.onpaste = function (e) {
            e.preventDefault();
            var text;
            var clp = (e.originalEvent || e).clipboardData;
            if (clp === undefined || clp === null) {
                text = window.clipboardData.getData('text') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    if (window.getSelection) {
                        var newNode = document.createElement('span');
                        newNode.innerHTML = text;
                        window.getSelection().getRangeAt(0).insertNode(newNode);
                    }
                    else {
                        window.selection.createRange().pasteHTML(text);
                    }
                }
            }
            else {
                text = clp.getData('text/plain') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    document.execCommand('insertText', false, text);
                }
            }
        };
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[NumbersOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pf/pfconfiguartion/pfconfiguartion.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pf/pfconfiguartion/pfconfiguartion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pfconfiguartion works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pf/pfconfiguartion/pfconfiguartion.component.ts ***!
  \*****************************************************************/
/*! exports provided: PfconfiguartionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfconfiguartionComponent", function() { return PfconfiguartionComponent; });
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

var PfconfiguartionComponent = /** @class */ (function () {
    function PfconfiguartionComponent() {
    }
    PfconfiguartionComponent.prototype.ngOnInit = function () {
    };
    PfconfiguartionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pfconfiguartion',
            template: __webpack_require__(/*! ./pfconfiguartion.component.html */ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.html"),
            styles: [__webpack_require__(/*! ./pfconfiguartion.component.css */ "./src/app/pf/pfconfiguartion/pfconfiguartion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PfconfiguartionComponent);
    return PfconfiguartionComponent;
}());



/***/ }),

/***/ "./src/app/services/add-authorization-header.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/add-authorization-header.service.ts ***!
  \**************************************************************/
/*! exports provided: AddAuthorizationHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAuthorizationHeader", function() { return AddAuthorizationHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAuthorizationHeader = /** @class */ (function () {
    function AddAuthorizationHeader() {
        this.count = 0;
    }
    AddAuthorizationHeader.prototype.intercept = function (req, next) {
        var tokenInfo = localStorage.getItem('token');
        if (tokenInfo && tokenInfo) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + tokenInfo,
                    'Content-Type': 'application/json'
                }
            });
        }
        var loadingContainer = document.getElementsByClassName('loading').item(0);
        loadingContainer.style.display = 'block';
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                loadingContainer.style.display = 'none';
            }
        }, function (err) {
            loadingContainer.style.display = 'none';
        }));
    };
    AddAuthorizationHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AddAuthorizationHeader);
    return AddAuthorizationHeader;
}());



/***/ }),

/***/ "./src/app/services/api-dictionary.ts":
/*!********************************************!*\
  !*** ./src/app/services/api-dictionary.ts ***!
  \********************************************/
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
    GetLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
    GetClaimConfigDetails: {
        url: 'GetClaimConfigDetailsByCliamMasterId',
        params: { claimMasterId: 'claimMasterId' }
    },
    getClaims: {
        url: 'src/assets/data/claims.json',
        params: { roleId: 'benSno' }
    },
    GetAllHospitals: {
        url: 'GetAllHospitals',
        params: null
    },
    createClaim: {
        url: 'createClaim',
        params: null
    },
    beneficiaryEduCount: {
        url: 'GetBeneficiaryDependentClaimsbyEdu',
        params: { benSno: 'benSno' }
    },
    beneficiary: {
        url: 'GetBeneficiaryDependentClaimsbyEdu',
        params: { benSno: 'benSno' }
    },
    genarateFormV: {
        url: "getFormV",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getReceipt: {
        url: 'getReceipt',
        params: null
    },
    getBeneficiaryHealthClaimAmount: {
        url: "GetBeneficiaryHealthClaimAmount",
        params: { benSno: 'benSno', typeOfClaim: 'typeOfClaim?' }
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getPfBalance: {
        url: "GetPfBalance"
    },
    validatePfSubmit: {
        url: "ValidatePfSubmit"
    },
    getNomineeClaimEntryValidation: {
        url: "GetNomineeClaimEntryValidation"
    },
    sendOTPforNominee: {
        url: "SendOTPforNominee"
    },
    verifyOTP: {
        url: "VerifyOTP"
    },
    pullTrack: {
        url: "PullTrackClaimforNominee"
    },
    getClaimDetailsById: {
        url: 'getClaimDetailsByClaimId',
        params: { claimId: 'claimId' }
    },
    getCalimId: {
        url: "GetCalimId"
    },
    deleteClaimExceptions: {
        url: "DeleteClaimExceptions"
    },
    isSameBenNomineeClaimSubmitted: {
        url: 'isSameBenNomineeSubmittedClaim',
    },
    getBenefitConfigurationDetails: {
        url: "GetBenefitConfigurationDetails"
    },
    isDuplicateDependentSubmitted: {
        url: "IsDuplicateDependentSubmitted",
        params: null
    },
    isCAFUpdated: {
        url: "IsCAFUpdated",
        params: null
    },
    getRegistrationNumber: {
        url: "getRegistrationNumber",
        params: null
    },
    GetClaimConfigMasterDetails: {
        url: 'GetClaimConfigDetails',
        params: null
    },
    getBeneficiaryPFAccountDetails: {
        url: "getBeneficiaryPFAccountDetails",
        params: null
    },
};


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        // Accruals Micro service url
        this.accrualServiceUrl = "";
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiurl;
    }
    ApiService.prototype.getDropdownDataForMaster = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params, responseType: 'text'
        });
    };
    ApiService.prototype.getDropdownData2 = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
            params: options.params, responseType: 'text'
        });
    };
    ApiService.prototype.downloadResource = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.serviceUrl + options.url, { responseType: 'blob' }).toPromise()];
                    case 1:
                        file = _a.sent();
                        return [2 /*return*/, file];
                }
            });
        });
    };
    ApiService.prototype.getReportsTypedDataWithResultAndStatusCode = function (options) {
        return this.http
            .get(this.serviceUrl + options.url, { params: options.params })
            .map(function (res) { return res.result; });
    };
    ApiService.prototype.getDropdownData = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params
        });
    };
    ApiService.prototype.getStaticData = function (options) {
        return this.http.get(options.url, {
            params: options.params
        });
    };
    ApiService.prototype.getTypedData = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params
        });
    };
    ApiService.prototype.PostData = function (url, postdata) {
        return this.http.post(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.PostData2 = function (url, postdata) {
        debugger;
        var res = this.http.post(this.serviceUrl + url, postdata, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
        return res;
    };
    ApiService.prototype.PutDataToTemplate = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.PutDataToReportScheduler = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.genaratePdf = function (url, postdata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.serviceUrl + url, postdata, { responseType: 'blob', observe: 'response' }).toPromise()];
            });
        });
    };
    ApiService.prototype.DeleteDataToAccrual = function (options) {
        return this.http.delete(this.accrualServiceUrl + options.url, {
            params: options.params
        }).toPromise();
    };
    ApiService.prototype.deleteServiceData = function (url) {
        return this.http.delete(this.serviceUrl + url).toPromise();
    };
    ApiService.prototype.PutData = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    // This method is called in case of a PUT request where Accrual service is directly invoked
    ApiService.prototype.PostAccuralServiceData = function (url, postdata) {
        return this.http.post(this.accrualServiceUrl + url, postdata, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    };
    ApiService.prototype.PutAccuralData = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/claim-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/claim-data.service.ts ***!
  \************************************************/
/*! exports provided: ClaimNomineeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimNomineeDataService", function() { return ClaimNomineeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClaimNomineeDataService = /** @class */ (function () {
    function ClaimNomineeDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    ClaimNomineeDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id, isRegistrationNo) {
        var paramsMap = new Map();
        paramsMap.set('ssiNum', id);
        paramsMap.set('isRegistrationNo', isRegistrationNo);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryEduCount = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryEduCount.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getAllHospitals = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetAllHospitals.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getlovDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimConfiguration = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetClaimConfigDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.createClaim = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].createClaim.url, claim).then(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    ClaimNomineeDataService.prototype.getRecipt = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    ClaimNomineeDataService.prototype.downloadReceipt = function (benName, ssin, claimRefernceNo, amount, name, nomineeName) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getReceipt.url + "/" + benName + "/" + ssin + "/" + claimRefernceNo + "/" + amount + "/" + nomineeName + "/" + name, { params: params });
        return this.apiService.downloadResource(options);
    };
    ClaimNomineeDataService.prototype.genaratePdfFormV = function (claim) {
        return this.apiService.genaratePdf(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].genarateFormV.url, claim);
    };
    ClaimNomineeDataService.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (typeOfClaim == undefined) {
            typeOfClaim = "";
        }
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryHealthClaimAmount.url + "/" + benSno + "/" + typeOfClaim, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getPackages = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryNomineeDetails.url + "/" + id, { params: params }); // + "/" + type
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getPfBalance = function (regNumber) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPfBalance.url + "/" + regNumber, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.validatePfSubmit = function (ssiNumber, nomineeId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].validatePfSubmit.url + "/" + ssiNumber + "/" + nomineeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getNomineeClaimEntryValidation = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getNomineeClaimEntryValidation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.sendOTPforNominee = function (ssinNo, mobileNo) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].sendOTPforNominee.url + "/" + ssinNo + "/" + mobileNo, { params: params });
        return this.apiService.getDropdownDataForMaster(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.verifyOTP = function (mobileNo, otpNumber) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].verifyOTP.url + "/" + mobileNo + "/" + otpNumber, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.pullTrack = function (claimRefNo) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].pullTrack.url + "/" + claimRefNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimDetailsById = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getCalimId = function (claimRefNo) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getCalimId.url + "/" + claimRefNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.deleteClaimExceptions = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].deleteClaimExceptions.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isSameBenNomineeClaimSubmitted = function (id, nomineeId, claimType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].isSameBenNomineeClaimSubmitted.url + "/" + id + "/" + nomineeId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBenefitConfigurationDetails = function (benefitType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBenefitConfigurationDetails.url + "/" + benefitType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isDuplicateDependentSubmitted = function (benSno, dependentId, claimId, onBehalfBen) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].isDuplicateDependentSubmitted.url + "/" + benSno + "/" + dependentId + "/" + claimId + "/" + onBehalfBen, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isCAFUpdated = function (id, isRegistrationNo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].isCAFUpdated.url + "/" + id + "/" + isRegistrationNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getRegistrationNumber = function (ssin) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRegistrationNumber.url + "/" + ssin, { params: params });
        return this.apiService.getDropdownData2(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimConfigurationMaster = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].GetClaimConfigMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryPFAccountDetails = function (bensno) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryPFAccountDetails.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClaimNomineeDataService);
    return ClaimNomineeDataService;
}());



/***/ }),

/***/ "./src/app/services/excel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/excel.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/track-claim-nominee/track-claim-nominee.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/track-claim-nominee/track-claim-nominee.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/track-claim-nominee/track-claim-nominee.component.html":
/*!************************************************************************!*\
  !*** ./src/app/track-claim-nominee/track-claim-nominee.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"\">\r\n    <!-- row -->\r\n    <div class=\"row\">\r\n        <!-- NEW WIDGET START -->\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <!-- Widget ID (each widget will need unique ID)-->\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n                <header>\r\n                    <h2>Track Claim</h2>\r\n                </header>\r\n                <!-- widget div-->\r\n                <div>\r\n\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form\">\r\n                            <fieldset>\r\n                                <section></section>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">SSIN <span [style.color]=\"!ssnNoValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"benSno\" class=\"form-control\" [(ngModel)]=\"ssin\" placeholder=\"Enter SSIN\"\r\n                                                   NumbersOnly maxlength=\"50\"\r\n                                                   #benSno=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': benSno.invalid && (!ssnNoValid || benSno.touched), 'valid-data': benSno.valid && ssnNoValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"benSno.invalid && (!ssnNoValid ||benSno.touched)\">\r\n                                                <span style=\"color: red;\">SSIN is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Mobile Number <span [style.color]=\"!nomineeContactValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"nomineeContact\" class=\"form-control\" placeholder=\"Mobile Number\" [(ngModel)]=\"nomineeMobileNumber\"\r\n                                                   NumbersOnly minlength=\"10\" maxlength=\"10\"\r\n                                                   #nomineeContact=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': nomineeContact.invalid && (!nomineeContactValid || nomineeContact.touched ), 'valid-data': nomineeContact.valid && nomineeContactValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"nomineeContact.invalid && (!nomineeContactValid ||nomineeContact.touched) && !nomineeContact.errors.minlength\">\r\n                                                <span style=\"color: red;\">Mobile Number is required </span>\r\n                                            </div>\r\n                                            <div *ngIf=\"nomineeContact.invalid && (nomineeContact.errors.minlength) \">\r\n                                                <span style=\"color: red;\">Invalid Mobile Number </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section *ngIf=\"isOtpVisible\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">OTP <span [style.color]=\"!otpValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"otp\" class=\"form-control\" placeholder=\"OTP\" [(ngModel)]=\"otpNumber\"\r\n                                                   NumbersOnly minlength=\"4\" maxlength=\"4\"\r\n                                                   #otp=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': otp.invalid && (!otpValid || otp.touched ), 'valid-data': otp.valid && otpValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"otp.invalid && (!otpValid ||otp.touched) && !otp.errors.minlength\">\r\n                                                <span style=\"color: red;\">OTP is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\" style=\"padding-left:50px;padding-bottom:10px;padding-top:31px;\">\r\n                                            <a class=\"btn btn-success\" (click)=\"VerifyOTP()\">Verify</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section *ngIf=\"isClaimNoVisible\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label class=\"label\">Claim Reference No. <span [style.color]=\"!claimNoValid?'red':''\"><b>*</b></span></label>\r\n                                            <input type=\"text\" name=\"claimReferenceNo\" class=\"form-control\" placeholder=\"Claim Reference No.\" [(ngModel)]=\"claimRefNo\"\r\n                                                   NumbersOnly #claimReferenceNo=\"ngModel\"\r\n                                                   [ngClass]=\"{'invalid-data': claimReferenceNo.invalid && (!claimNoValid || claimReferenceNo.touched ), 'valid-data': claimReferenceNo.valid && claimNoValid}\"\r\n                                                   required>\r\n                                            <div *ngIf=\"claimReferenceNo.invalid && (!claimNoValid ||claimReferenceNo.touched)\">\r\n                                                <span style=\"color: red;\">Claim Reference No. is required </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                                <section *ngIf=\"isClaimTrackVisible\">\r\n                                    <header>Claim Track</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <!-- row -->\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"width:98%\">\r\n                                                    <div class=\"well well-sm\">\r\n                                                        <div class=\"smart-timeline\">\r\n                                                            <ul class=\"smart-timeline-list\">\r\n\r\n                                                                <li *ngFor=\"let item of claimsTrack\">\r\n                                                                    <div class=\"smart-timeline-icon\">\r\n                                                                        <i class=\"fa fa-user\"></i>\r\n                                                                    </div>\r\n                                                                    <div class=\"smart-timeline-time\">\r\n                                                                        <small>{{formatDate(item.actionDate)}}</small>\r\n                                                                    </div>\r\n                                                                    <div class=\"smart-timeline-content\">\r\n                                                                        <p>\r\n                                                                            <a href=\"javascript:void(0);\"><strong>{{item.userName}} - {{item.action}}</strong></a>\r\n                                                                        </p>\r\n                                                                        <p>\r\n                                                                            {{item.actionComments}}\r\n                                                                        </p>\r\n                                                                    </div>\r\n                                                                </li>\r\n\r\n                                                            </ul>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </section>\r\n                            </fieldset>\r\n\r\n                            <footer>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isSendVisible\" (click)=\"SendOTP()\">Send OTP</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isReapplyVisible\" (click)=\"Reapply()\">Reapply</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isRefertoALCVisible\" (click)=\"applyRefertoALC()\">Refer to ALC</a>\r\n                                <a class=\"btn btn-success\" *ngIf=\"isRefertoDLCVisible\" (click)=\"applyRefertoDLC()\">Refer to DLC</a>\r\n                                <a class=\"btn btn-blue\" *ngIf=\"isPullTrackVisible\" (click)=\"PullTrack()\">Pull Track</a>\r\n\r\n                                <a class=\"btn btn-default\" (click)=\"clearClaim()\">Reset</a>\r\n                                <a class=\"btn btn-danger\" href=\"/\">Cancel</a>\r\n                            </footer>\r\n                        </form>\r\n                        <!--/ Success states for elements -->\r\n                    </div>\r\n                    <!-- end widget content -->\r\n                </div>\r\n                <!-- end widget div -->\r\n            </div>\r\n            <!-- end widget -->\r\n        </article>\r\n        <!-- WIDGET END -->\r\n    </div>\r\n    <!-- end row -->\r\n</section>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n     aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard:false}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Success Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div [innerHTML]=\"successMessage\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"okClick()\">\r\n                    Ok\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/track-claim-nominee/track-claim-nominee.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/track-claim-nominee/track-claim-nominee.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrackClaimNomineeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackClaimNomineeComponent", function() { return TrackClaimNomineeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_claim_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/claim-data.service */ "./src/app/services/claim-data.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
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





var TrackClaimNomineeComponent = /** @class */ (function () {
    function TrackClaimNomineeComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.claimsTrack = [];
        //claimsTrack: ClaimTrack = {} as ClaimTrack;
        this.nomineeContactValid = true;
        this.ssnNoValid = true;
        this.isOtpVisible = false;
        this.otpValid = true;
        this.isSendVisible = true;
        this.claimNoValid = true;
        this.isPullTrackVisible = false;
        this.isClaimTrackVisible = false;
        this.isClaimNoVisible = false;
        this.isReapplyVisible = false;
        this.isRefertoALCVisible = false;
        this.isRefertoDLCVisible = false;
    }
    TrackClaimNomineeComponent.prototype.ngOnInit = function () {
    };
    TrackClaimNomineeComponent.prototype.formatDate = function (date) {
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
    TrackClaimNomineeComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    TrackClaimNomineeComponent.prototype.SendOTP = function () {
        var _this = this;
        var isValid = true;
        this.ssnNoValid = this.nomineeContactValid = true;
        if (this.ssin == undefined || this.ssin <= 0) {
            this.ssnNoValid = isValid = false;
        }
        if (this.nomineeMobileNumber == undefined || this.nomineeMobileNumber.toString() == "") {
            this.nomineeContactValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .sendOTPforNominee(this.ssin, this.nomineeMobileNumber)
                    .subscribe(function (data) {
                    debugger;
                    if (data) {
                        _this.successMessage = data;
                        if (_this.successMessage.toLowerCase() == "otp sent successfully to registered mobile number") {
                            _this.isOtpVisible = true;
                        }
                        _this.successModal.show();
                    }
                    else {
                        //tobe delete this when insficient amont not sent otp
                        // this.isOtpVisible = true;
                        _this.successMessage = "Server down due to technical problem";
                        _this.successModal.show();
                    }
                });
            }
        }
    };
    TrackClaimNomineeComponent.prototype.VerifyOTP = function () {
        var _this = this;
        var isValid = true;
        this.otpValid = true;
        if (this.otpNumber == undefined || this.otpNumber.toString() == "") {
            this.otpValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            debugger;
            this.dataService
                .verifyOTP(this.nomineeMobileNumber, this.otpNumber)
                .subscribe(function (data) {
                _this.successMessage = data;
                if (data) {
                    _this.isOtpVisible = _this.isSendVisible = false;
                    _this.isPullTrackVisible = _this.isClaimNoVisible = true;
                    _this.otpNumber = _this.claimRefNo = "";
                }
                else { // tobe resend
                    _this.isOtpVisible = _this.isSendVisible = true;
                    _this.isPullTrackVisible = _this.isClaimNoVisible = false;
                    alert("Please enter valid otp ");
                }
            });
        }
    };
    TrackClaimNomineeComponent.prototype.PullTrack = function () {
        var _this = this;
        var isValid = true;
        this.claimNoValid = true;
        if (this.claimRefNo == undefined || this.claimRefNo.toString() == "") {
            this.claimNoValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            //for claim Track
            this.dataService
                .pullTrack(this.claimRefNo)
                .subscribe(function (data) {
                _this.claimsTrack = data;
                _this.isClaimTrackVisible = true;
                if (_this.claimsTrack != null && _this.claimsTrack.length > 0) {
                    if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].SendbackfromInspector || _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].SendbackfromALC) {
                        _this.isReapplyVisible = true;
                    }
                    else if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].RejectfromALC || _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferSendbackbyALC) {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = true;
                        _this.isRefertoDLCVisible = false;
                    }
                    else if (_claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferedRejectbyALC || _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"][_this.claimsTrack[_this.claimsTrack.length - 1].action] == _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_3__["ClaimStatus"].ReferSendbackfromDLC) {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = false;
                        _this.isRefertoDLCVisible = true;
                    }
                    else {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = false;
                        _this.isRefertoDLCVisible = false;
                    }
                }
            });
            //for claim id
            this.dataService
                .getCalimId(this.claimRefNo)
                .subscribe(function (data) {
                if (data) {
                    _this.claimId = data.item1;
                    _this.stausId = data.item2;
                    _this.transactionTypeString = data.item3;
                }
            });
        }
    };
    TrackClaimNomineeComponent.prototype.Reapply = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "reapply", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.applyRefertoALC = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.applyRefertoDLC = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.okClick = function () {
        this.successModal.hide();
    };
    TrackClaimNomineeComponent.prototype.clearClaim = function () {
        this.nomineeContactValid = this.ssnNoValid = this.isSendVisible = this.otpValid = this.claimNoValid = true;
        this.isPullTrackVisible = this.isClaimTrackVisible = this.isClaimNoVisible = this.isOtpVisible = this.isReapplyVisible = false;
        this.nomineeMobileNumber = this.ssin = this.otpNumber = this.claimRefNo = "";
        //this.claimsTrack = {} as ClaimTrack;
        this.claimsTrack = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('successModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], TrackClaimNomineeComponent.prototype, "successModal", void 0);
    TrackClaimNomineeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-claim-nominee',
            template: __webpack_require__(/*! ./track-claim-nominee.component.html */ "./src/app/track-claim-nominee/track-claim-nominee.component.html"),
            styles: [__webpack_require__(/*! ./track-claim-nominee.component.css */ "./src/app/track-claim-nominee/track-claim-nominee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_claim_data_service__WEBPACK_IMPORTED_MODULE_1__["ClaimNomineeDataService"]])
    ], TrackClaimNomineeComponent);
    return TrackClaimNomineeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    //apiurl:"http://192.168.200.10:8099/v1/"
    //apiurl: "http://162.216.193.100:8099/v1/"
    //apiurl: "http://36.255.252.179:9025/v1/"
    // apiurl: "http://localhost:8085/v1/"
    //Live
    //apiurl: "https://ssy.wblabour.gov.in/SSYAPI/v1/",
    //weburl: "https://ssy.wblabour.gov.in",
    //gripsurl: "https://wbifms.gov.in/GRIPS/v1epay.do",
    //gripsverifyurl: "https://wbifms.gov.in/GRIPS/DeptVarifyPayment.do"
    //9026- test server
    //apiurl: "http://36.255.252.179:9027/v1/",
    //weburl: "http://36.255.252.179:9026"
    //UAT
    //apiurl: "http://172.16.93.180/SSYAPI/v1/",
    //weburl: "http://172.16.93.180/",
    //gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    //gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"
    //Dev
    //apiurl: "http://localhost:64163/v1/",
    //weburl: "http://36.255.252.179:9026",
    //gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    //gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"
    //sdc
    //apiurl: "http://172.20.176.51/SSYAPI/v1/",
    //weburl: "http://172.20.176.51",
    //gripsurl: "https://wbifms.gov.in/GRIPS/v1epay.do",
    //gripsverifyurl: "https://wbifms.gov.in/GRIPS/DeptVarifyPayment.do"
    //local
    apiurl: "http://localhost:64163/v1/",
    weburl: "http://localhost:2126/",
    //weburl: "http://36.255.252.179:9026",
    gripsurl: "http://202.61.117.90/GRIPS/v1epay.do",
    gripsverifyurl: "http://202.61.117.90/GRIPS/DeptVarifyPayment.do"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\VKD Workspace\SSY Project\Local configure\ssyweb\ssyweb\SSYNEW\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map