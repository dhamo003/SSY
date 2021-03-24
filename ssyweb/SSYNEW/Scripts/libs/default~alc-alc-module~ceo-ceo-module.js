(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alc-alc-module~ceo-ceo-module"],{

/***/ "./src/app/alc/claimviewdata/claimviewdata.component.css":
/*!***************************************************************!*\
  !*** ./src/app/alc/claimviewdata/claimviewdata.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alc/claimviewdata/claimviewdata.component.html":
/*!****************************************************************!*\
  !*** ./src/app/alc/claimviewdata/claimviewdata.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widget-grid\" class=\"\">\r\n\r\n\r\n    <div class=\"row\">\r\n        <article class=\"col-sm-12 col-md-12 col-lg-12 nocollapse\">\r\n            <div class=\"jarviswidget jarviswidget-color-blueDark\" id=\"wid-id-1\" data-widget-editbutton=\"false\" data-widget-sortable=\"false\">\r\n\r\n                <header>\r\n                    <h2>Claim Entry View </h2>\r\n                </header>\r\n\r\n                <div>\r\n\r\n                    <!-- widget edit box -->\r\n                    <div class=\"jarviswidget-editbox\">\r\n                        <!-- This area used as dropdown edit box -->\r\n\r\n                    </div>\r\n                    <!-- end widget edit box -->\r\n                    <!-- widget content -->\r\n                    <div class=\"widget-body no-padding\">\r\n\r\n                        <!-- Success states for elements -->\r\n                        <form class=\"smart-form smart-form-main\">\r\n                            <header>Beneficiary Details</header>\r\n\r\n                            <fieldset>\r\n                                <section>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Name: </strong>{{beneficiary?.benFullName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>SSIN: </strong>{{beneficiary?.ssI_Number}}</label>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Bank Name: </strong>{{beneficiary?.benBankName}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Account No: </strong>{{beneficiary?.benBankAccNo}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>IFSC Code: </strong>{{beneficiary?.benBankIfscCode}}</label>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n                                            <label><strong>Branch: </strong>{{beneficiary?.benBankBranch}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n\r\n                            </fieldset>\r\n                            <div *ngIf=\"isOnDeathofBeneficiaryOnRequestofNominee\">\r\n                                <header>Nominee Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Name: </strong>{{claim?.nomineeName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Address: </strong>{{claim?.nomineeAddress}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Birth: </strong>{{claim?.nomineeDOBString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Contact Number: </strong>{{claim?.nomineeContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Bank Account No: </strong>{{claim?.nomineeBankAccount}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>IFSC Code: </strong>{{claim?.nomineeIFSCCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.providentFundDetails != null\">\r\n                                <header>Provident Fund</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> PF No.: </strong>{{claim.providentFundDetails.pfno}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Claim Amount:</strong> {{claim.providentFundDetails.claimAmount}} /-\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Date of Maturity:</strong> {{claim.providentFundDetails.maturityDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong>  Locking Period Up-to:</strong> {{claim.providentFundDetails.lockingPeriodDateString}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6 \">\r\n                                                <label>\r\n                                                    <strong> Type of Claim:</strong> {{claim.providentFundDetails.typeOfClaimName}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                            <div class=\"col col-6 \" *ngIf=\"isPrematureClaim\">\r\n                                                <label>\r\n                                                    <strong> Reason for Preclosure:</strong>  {{claim.providentFundDetails.reasonForPreClosure}}\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.providentFundDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"claim.educationDetails != null\">\r\n                                <header>Education</header>\r\n\r\n                                <fieldset>\r\n\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.educationDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n\r\n                                            <div><strong>Approved Amount : </strong> {{claim?.educationDetails?.approvedAmount}}</div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Dependent Details</header>\r\n                                <fieldset>\r\n                                    <section *ngFor=\"let detail of educationList\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Student: </strong>{{detail?.dependentName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong>Name of the Institution : </strong> {{detail?.institutionName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of the Principal/Head Master of the institution:</strong>{{detail?.institutionPrinicipleName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label> <strong> Contact Number of the Institution: </strong>{{detail?.institutionContact}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Registration No./Roll No. of last exam passed: </strong>{{detail?.registrationRollNo}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Year of Examination: </strong>{{detail?.year}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission: </strong>{{detail?.dateofAdmissionString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Last Exam Passed: </strong>{{detail?.lastExamPassedName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Presently Reading: </strong>{{detail?.presentlyReadingName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Eligible Amount :</strong>{{detail?.eligibleAmount}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.healthFamilyDetails != null\">\r\n                                <header>Health & Family</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.healthFamilyDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col col-6\">\r\n\r\n                                            <div><strong>Approved Amount : </strong> {{claim?.healthFamilyDetails?.approvedAmount}}</div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Health & Family Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Type of Claim: </strong>{{claim?.healthFamilyDetails?.typeOfClaimName}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Hospital : </strong> {{claim?.healthFamilyDetails?.hospitalName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Hospitalization/OPD:</strong>{{claim?.healthFamilyDetails?.typeOfHospitalizationName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Patient Id: </strong>{{claim?.healthFamilyDetails?.patientId}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Name of Disease: </strong>{{claim?.healthFamilyDetails?.nameOfTheDiseaseString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.nameOfTheDisease==56\">\r\n                                                <label><strong> Name of clinical test: </strong>{{claim?.healthFamilyDetails?.nameOfClinicalTestString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"viewMetWithAnAccident\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong> Met with an Accident:</strong>{{claim?.healthFamilyDetails?.isAccident}}\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Clinical Test: </strong>{{claim?.healthFamilyDetails?.costOfClinicalTest}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Cost of Medicine: </strong>{{claim?.healthFamilyDetails?.costOfMedicine}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==2\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of First Appointment: </strong>{{claim?.healthFamilyDetails?.firstAppointmentDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Claim for: </strong>{{claim?.healthFamilyDetails?.claimForName}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                                <label><strong> Cost of Hospitalization: </strong>{{claim?.healthFamilyDetails?.costOfHospitalization}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalization==1\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of Admission to Hospital: </strong>{{claim?.healthFamilyDetails?.admittedDateString}}</label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Discharge :</strong>{{claim?.healthFamilyDetails?.dischargeDateString}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.familyMemberId != undefined && claim?.healthFamilyDetails?.familyMemberId !=0\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Family Member Name: </strong>{{claim?.healthFamilyDetails?.familyMemberName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"claim?.healthFamilyDetails?.reasonForDelaySubmission != undefined || claim?.healthFamilyDetails?.reasonForDelaySubmission != null\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.healthFamilyDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <div *ngIf=\"claim?.healthFamilyDetails?.typeOfHospitalizationName!='OPD' && claim?.healthFamilyDetails?.claimFor == 5\">\r\n                                    <header>Loss of Employment</header>\r\n                                    <fieldset>\r\n                                        <section>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> From Date: </strong>{{claim?.healthFamilyDetails?.loeFromDateString}}</label>\r\n                                                </div>\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong>To Date :</strong>{{claim?.healthFamilyDetails?.loeToDateString}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col col-6\">\r\n                                                    <label><strong> Amount: </strong>{{claim?.healthFamilyDetails?.loeAmount}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                                    </fieldset>\r\n                                </div>\r\n\r\n                                <header>View Packages</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\" *ngIf=\"selectedPackages.length>0\">\r\n                                            <table class=\"table table-striped\" [mfData]=\"selectedPackages\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th><mfDefaultSorter by=\"packageName\">Package Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"packageCode\">Package Code</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"ailmentName\">Ailment Name</mfDefaultSorter></th>\r\n                                                        <th><mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let pak of mf.data;\">\r\n                                                        <td>{{pak.packageName}}</td>\r\n                                                        <td>{{pak.packageCode}}</td>\r\n                                                        <td>{{pak.ailmentName}}</td>\r\n                                                        <td>{{pak.amount}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tfoot><tr><td colspan=\"4\"><mfBootstrapPaginator></mfBootstrapPaginator></td></tr></tfoot>\r\n                                            </table>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.disabilityDetails != null\">\r\n                                <header>Disability</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.disabilityDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.disabilityDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Disability Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Date of release from hospital/Accident: </strong>{{claim?.disabilityDetails?.dateofReleaseString}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Disability : </strong> {{claim?.disabilityDetails?.natureOfDisabilityName}}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Disability: </strong>{{claim?.disabilityDetails?.detailsOfDisability}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\" *ngIf=\"claim?.disabilityDetails?.reasonForDelaySubmission != undefined || claim?.disabilityDetails?.reasonForDelaySubmission != null\">\r\n                                                <label><strong>  Reason for Delay Submission: </strong>{{claim?.disabilityDetails?.reasonForDelaySubmission}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                            <div *ngIf=\"this.claim.deathDetails != null\">\r\n                                <header>Death</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Claim Amount : </strong> {{claim?.deathDetails?.claimAmount}}</div>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n\r\n                                                <div><strong>Approved Amount : </strong> {{claim?.deathDetails?.approvedAmount}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n                                </fieldset>\r\n                                <header>Death Details</header>\r\n                                <fieldset>\r\n                                    <section>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label>\r\n                                                    <strong>Nature of Death : </strong> {{claim?.deathDetails?.natureofDeathName}}\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong>Date of Death: </strong>{{claim?.deathDetails?.dateofDeathString}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Details of Death: </strong>{{claim?.deathDetails?.detailsofDeath}} </label>\r\n                                            </div>\r\n                                            <div class=\"col col-6\">\r\n                                                <label><strong> Place of Death: </strong>{{claim?.deathDetails?.placeofDeath}} </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </section>\r\n\r\n                                </fieldset>\r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </article>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/alc/claimviewdata/claimviewdata.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/alc/claimviewdata/claimviewdata.component.ts ***!
  \**************************************************************/
/*! exports provided: ClaimviewdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimviewdataComponent", function() { return ClaimviewdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_pipes_constnts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../claim/pipes/constnts.model */ "./src/app/claim/pipes/constnts.model.ts");
/* harmony import */ var _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alc-data.service */ "./src/app/alc/services/alc-data.service.ts");
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
    ClaimviewdataComponent.prototype.getData = function (claim) {
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
            template: __webpack_require__(/*! ./claimviewdata.component.html */ "./src/app/alc/claimviewdata/claimviewdata.component.html"),
            styles: [__webpack_require__(/*! ./claimviewdata.component.css */ "./src/app/alc/claimviewdata/claimviewdata.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_alc_data_service__WEBPACK_IMPORTED_MODULE_3__["AlcDataService"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ClaimviewdataComponent);
    return ClaimviewdataComponent;
}());



/***/ }),

/***/ "./src/app/alc/services/alc-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/alc/services/alc-data.service.ts ***!
  \**************************************************/
/*! exports provided: AlcDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlcDataService", function() { return AlcDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-dictionary */ "./src/app/alc/services/api-dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlcDataService = /** @class */ (function () {
    function AlcDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    AlcDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            debugger;
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    AlcDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetApprovalPremission = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getApprovalPremission.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getAttachment = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    AlcDataService.prototype.GetAllApprovalClaims = function (id, type, boardId, claimType, locationsId) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (boardId == null || boardId == 'undefined')
            boardId = "0";
        if (claimType == null || claimType == 'undefined')
            claimType = "0";
        if (locationsId == null || locationsId == 'undefined')
            locationsId = "0";
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAllApprovalClaims.url + "/" + id + "/" + type + "/" + boardId + "/" + claimType + "/" + locationsId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetAlcInformation = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAlcInformation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveProcessingClaims = function (claim) {
        debugger;
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveProcessingClaims.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedClaims = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaims.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBoardMasterData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getWorkerTypeMasterData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getWorkerTypeDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getLocationsMasterData = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getLocationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimTypesMasterData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimTypeMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveFundRequesteClaims = function (claim) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveFundRequestClaims.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetFundRequestClaims = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getReleaseFundRequest = function (id, statusId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedClaims.url + "/" + id + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //
    AlcDataService.prototype.getPaymentProcessDetails = function (id, statusId, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPaymentProcessDetails.url + "/" + id + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getPaymentProcessById = function (paymentProcessId) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPaymentProcessById.url + "/" + paymentProcessId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            debugger;
            return res;
        });
    };
    AlcDataService.prototype.getPackages = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundReleaseClaimsByFundReleaseHdrId = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundReleaseClaimsByFundReleaseHdrId.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getlovDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveFundRequestExpenses = function (fundRequest) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveFundRequestExpenses.url, fundRequest).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedExpenses = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedExpenses.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getUtilizationCertificates = function (id, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetReleaseOrders = function (rloOfficeId, finYearId, boardId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId + "/" + boardId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetFinancialYears = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveUtilizationCertificate = function (utilizationCertificate) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].saveUtilizationCertificate.url, utilizationCertificate).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getUtilizationCertificateDetails = function (ucId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.downloadUtilizationCertificate = function (ucId) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getUtilizationCertificate.url + "/" + ucId, ucId);
    };
    AlcDataService.prototype.getClaimCheckListDetails = function (checkLisiId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //genaratePdfFormV(claim: any) {
    //    return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    //}
    AlcDataService.prototype.getAllApprovalSearchClaims = function (id, type, ssin, benName, benMobile, boardId, claimType, locationsId) {
        debugger;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (boardId == null || boardId == 'undefined')
            boardId = "0";
        if (claimType == null || claimType == 'undefined')
            claimType = "0";
        if (locationsId == null || locationsId == 'undefined')
            locationsId = "0";
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getAllApprovalSearchClaims.url + "/" + id + "/" + type + "/" + ssin + "/" + benName + "/" + benMobile + "/" + boardId + "/" + claimType + "/" + locationsId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestSearchClaims = function (Id, ssin, benName, benMobile) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getFundRequestSearchClaims.url + "/" + Id + "/" + ssin + "/" + benName + "/" + benMobile, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetDistricts = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getDistricts.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetLocationCodes = function (districtId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getLocationCodes.url + "/" + districtId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.CalculatePFInterest = function (pfInterest) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].calculatePFInterest.url, pfInterest).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', _api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.updateNomineeDetails = function (benNomineeDetails) {
        return this.apiService.PostData(_api_dictionary__WEBPACK_IMPORTED_MODULE_3__["ApiDictionary"].updateNomineeDetails.url, benNomineeDetails).then(function (res) {
            return res;
        });
    };
    AlcDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlcDataService);
    return AlcDataService;
}());



/***/ }),

/***/ "./src/app/alc/services/api-dictionary.ts":
/*!************************************************!*\
  !*** ./src/app/alc/services/api-dictionary.ts ***!
  \************************************************/
/*! exports provided: ApiDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDictionary", function() { return ApiDictionary; });
var ApiDictionary = {
    getPendingApprovals: {
        url: 'GetPendingApprovals',
        params: { roleId: 'benSno' }
    },
    getClaimDetailsByClaimId: {
        url: 'getClaimDetails',
        params: { claimId: 'claimId' }
    },
    beneficiaryBasicDetails: {
        url: 'GetBeneficiaryBasicDetailsByID',
        params: { id: 'id' }
    },
    updateComments: {
        url: 'updateWorkFlowStatus',
        params: { roleId: 'benSno' }
    },
    getApprovalPremission: {
        url: 'GetApprovalPremission',
        params: { statusId: 'statusId' }
    },
    getAttachment: {
        url: "getAttachment",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getAllApprovalClaims: {
        url: 'getALCAndDLCApprovedClaimsForPaymentProcessing',
        //url: 'src/assets/data/approvedclaims.json',
        params: { roleId: 'alc' }
    },
    getAlcInformation: {
        url: 'GetALCInformation',
        // url: 'src/assets/data/alcpaymentdetails.json',
        params: { roleId: 'alc' }
    },
    saveProcessingClaims: {
        url: 'SavingPaymentProcessing',
        params: null
    },
    getRLOOfficeUserInformation: {
        url: 'GetRLOOfficeUserInformation',
        params: null
    },
    getBoardDetails: {
        url: 'getBoardDetails',
        params: null
    },
    getWorkerTypeDetails: {
        url: 'getWorkerTypeDetails',
        params: null
    },
    getLocationDetails: {
        url: 'getLocationDetails',
        params: { rloId: 'rloId' }
    },
    getClaimTypeMasterDetails: {
        url: 'getClaimConfigDetails',
        params: { rloId: 'rloId' }
    },
    saveFundRequestClaims: {
        url: 'saveFundRequest',
        params: null
    },
    getFundRequestedClaims: {
        url: 'GetFundRequestsByUserID',
        params: null
    },
    getFundRequestedClaimsById: {
        url: 'GetFundRequestByFundRequestId',
        //url: 'getFundReleaseClaimsByFundReleaseHdrId',
        // url: 'src/assets/data/approvedclaims.json',
        params: null
    },
    getClaimTrackDetailsByTransactionId: {
        url: "GetWorkflowTransactionLogDetails",
        params: { baseTransactionId: 'transactionId', transactionType: 'transactionType' }
    },
    getPaymentProcessDetails: {
        url: "GetALCPaymentProcessedList",
        params: null
    },
    getPaymentProcessById: {
        url: "GetPaymentProcessingHdrDetails",
        params: null
    },
    getPackages: {
        url: 'getPackages',
        params: null
    },
    getFundReleaseClaimsByFundReleaseHdrId: {
        url: 'getFundReleaseClaimsByFundReleaseHdrId',
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
    getLOVDetailsByLovId: {
        url: 'GetLOVDetailsByLovId',
        params: { lovId: 'lovId' }
    },
    saveFundRequestExpenses: {
        url: 'saveFundRequestExpenses',
        params: null
    },
    getFundRequestedExpenses: {
        url: 'GetFundRequestExpensesByUserID',
        params: null
    },
    getFundRequestedExpensesById: {
        url: 'getFundRequestExpensesByFundRequestId',
        params: null
    },
    getUtilizationCertificates: {
        url: 'getUtilizationCertificates',
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
    getClaimCheckListDetails: {
        url: "GetClaimCheckListDetails",
        params: null
    },
    getAllApprovalSearchClaims: {
        url: "GetAllApprovalSearchClaims",
        params: null
    },
    getFundRequestSearchClaims: {
        url: "GetFundRequestSearchClaims",
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
    getEducationClaimsSubmittedbyStudentName: {
        url: 'getEducationClaimsSubmittedbyStudentName',
        params: null
    },
    beneficiaryNomineeDetails: {
        url: 'GetBeneficiaryNomineeDetailsByBeneficiaryID',
        params: { benSno: 'benSno' }
    },
    updateNomineeDetails: {
        url: 'updateBeneficiaryNomineeDetails',
        params: null
    },
};


/***/ })

}]);
//# sourceMappingURL=default~alc-alc-module~ceo-ceo-module.js.map