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
import { ClaimDataService } from '../services/claim-data.service';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, PFStatusMaster } from '../pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { UserService } from '../../UserService';
import * as FileSaver from 'file-saver';
var ClaimEntryComponent = /** @class */ (function () {
    function ClaimEntryComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
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
        this.enableDeatheligibility = false;
        this.claim = {};
        this.educationDetails = {};
        this.educationDetailsArray = [];
        this.beneficiary = {};
        this.disableEducationCheckbox = false;
        this.disableHealthCheckbox = false;
        this.disablePFCheckbox = false;
        this.checkeducation = false;
        //Validation Claim Entry variables
        this.ssnNoValid = true;
        this.nomineeNameValid = true;
        this.nomineeContactValid = true;
        this.nomineeDOBValid = true;
        this.nomineeBankAccountValid = true;
        //Validation Education variables
        this.studentNameValid = true;
        this.institutionNameValid = true;
        this.institutionContactValid = true;
        this.registrationNoValid = true;
        this.educationYearValid = true;
        this.dateOfAdmissionValid = true;
        this.marriedValid = true;
        this.isMarried = false;
        this.presentlyReadingValid = true;
        this.disableEdu = false;
        this.maxLimitExceeded = false;
        this.maxHelathClaimLimitExceeded = false;
        this.noDependents = false;
        this.benficiaryInactive = false;
        this.disableSubmitbutton = true;
        this.educationCheck = true;
        this.uploadselfattestedValid = true;
        this.uploadNonMarriageValid = true;
        this.uploadCertificatetValid = true;
        this.uplaodmain = true;
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
        this.healthOriginalVoucher = {};
        this.healthSelfAttached = {};
        this.healthDischargeCertificate = {};
        this.healthExpensesSheet = {};
        this.healthAttachmentList = [];
        this.eduCount = 0;
        this.submitYear = new Date().toISOString().split('T')[0];
        this.rowIndex = -1;
        this.mode = "";
        this.rowEligibleAmount = 0;
        this.totalHealthClaimAmount = 0;
        this.typeOfAilmentClaimedAmount = 0;
        this.surgeryClaimedAmount = 0;
        this.lossOfEmploymentAmount = 0;
        this.validateDependent = false;
        this.mainUploadList = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.eduSelfAttested = [];
        //Button variables
        this.GenaratePdfVisible = true;
        this.SubmitVisible = true;
        this.SaveVisible = true;
        this.restrictSave = false;
        this.ClaimStatusId = 0;
        this.isLOEToDate = true;
        this.isDischargeDate = true;
        this.disableDischarge = true;
        this.disableCost = true;
        this.activeYear = {};
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
        this.beneficiaryBank = {};
        this.educationClaimExceptionDetails = [];
        this.healthClaimExceptionDetails = [];
        //Disability
        this.disableDisabilityCheckbox = false;
        this.disabilityCertificate = {};
        this.deathCertificate = {};
        this.condolationCertificate = {};
        this.disabilityAttachmentList = [];
        this.disabilityCertificateUploaded = false;
        this.condolationCertificateUploaded = false;
        this.dateofrelease = false;
        this.natureOfDisability = false;
        this.reasonForDelayValid = false;
        this.checkNatureOfDisability = false;
        this.isDeathorpermanent1 = false;
        this.isDeathorpermanent2 = false;
        this.isDeathorpermanent3 = false;
        this.beneficiaryAppliedDisabilities = [];
        this.disabilityClaimExceptionDetails = [];
        this.enableReasonForDelaySubmission = false;
        this.pfExsits = false;
        this.isPrematureClaim = false;
        this.isPFSubmitted = false;
        this.pfTypeOfClaimValid = false;
        this.reasonForPreclosureValid = false;
        this.benMaturityDate = null;
        this.pfLockingPeriod = null;
        this.pfClaimExceptionDetails = [];
        this.isClaimEdit = false;
        this.isDisabilityClaimEdit = false;
        this.isBenNomineeSubmittedClaim = false;
        this.clinicalTestSettings = {};
        this.nameOfClinicalTestIds = [];
        this.clinicalTestDetails = [];
        this.disabilityBenefitConfigDetails = [];
        this.healthFamilyBenefitConfigDetails = [];
        this.pfBenefitConfigDetails = {};
        this.educationBenefitConfigDetails = [];
        this.isDisabledBaseOnLastExamPassed = false;
        this.isDuplicateDependent = false;
        this.isBenDeath = false;
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
        this.maxDate = new Date();
        this.maxAdmitDate = new Date();
        //this.maxDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ClaimEntryComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ClaimEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pfTypeOfClaimValid = this.otherHospitalValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid = true; //this.originalVoucher =
        this.dateofrelease = this.natureOfDisability = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = this.reasonForDelayValid = true;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
            _this.mode = params["mode"];
            _this.claimType = ClaimConstants.Education;
            _this.claimTypeString = params["tranctionType"];
            _this.claimStatus = params["claimStatus"] != null ? Number(params["claimStatus"]) : 0;
            //if (this.claimStatus >= ClaimStatus.Submitted) {
            //    this.GenaratePdfVisible = false;
            //    this.disableSubmitbutton = false;
            //    this.SaveVisible = false;
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
        //this.claimId = 149;//params["claimId"];
        //this.claimType = ClaimConstants.Education;
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
        this.getDisabilityBenefitConfigurationDetails();
        this.getHealthFamilyBenefitConfigurationDetails();
        this.getPFBenefitConfigurationDetails();
        this.getEducationBenefitConfigurationDetails();
        if (this.claimId > 0) {
            // this.viewEducation = true;
            this.getClaimDetailsByClaimId(this.claimId);
        }
        else {
            this.getBenficiaryFamilyDetails(this.userService.user.userid);
            this.getBenficiaryEduCount(this.userService.user.userid);
            this.getBenficiarydetails(this.userService.user.userid);
            //this.getBeneficiaryBankDetails(this.userService.user.userid);
        }
        this.isBenNomineeClaimSubmitted(this.userService.user.userid);
        this.getBeneficiaryBankDetails(this.userService.user.userid);
        this.getBeneficiaryAppliedDisabilities(this.userService.user.userid, this.claimId);
        this.getActiveFinancialYear();
        this.getClaimsConfiguartionDetails();
        ////pf
        //
        //if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
        //    if (this.beneficiary.regNumber != null && this.beneficiary.regNumber != "") {
        //        this.getPfBalance(this.beneficiary.regNumber);
        //        this.validatePfSubmit(this.beneficiary.ssI_Number);
        //    }
        //    else
        //        alert("No pf details available for this given SSIN number");
        //}
        //else {
        //    this.disablePFCheckbox = true;
        //    this.pfExsits = true;
        //}
    };
    ClaimEntryComponent.prototype.getClaimsConfiguartionDetails = function () {
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
    ClaimEntryComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ClaimEntryComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ClaimEntryComponent.prototype.openModel = function () {
        this.isDuplicateDependent = false;
        this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = this.marriedValid = true;
        this.uploadCertificatetValid = this.uploadselfattestedValid = true;
        this.rowIndex = -1;
        this.rowEligibleAmount = 0;
        this.eduSelfAttested = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.educationDetails = {};
        //this.educationDetails.year = new Date().getFullYear();
        this.educationDetails.year = this.activeYear.seqPrefix;
        this.lgModal.show();
    };
    ClaimEntryComponent.prototype.getBeneficiaryAppliedDisabilities = function (id, claimId) {
        var _this = this;
        this.dataService
            .getBeneficiaryAppliedDisabilities(id, claimId)
            .subscribe(function (data) {
            _this.beneficiaryAppliedDisabilities = data;
        });
    };
    ClaimEntryComponent.prototype.getBeneficiaryBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryBankDetails(id)
            .subscribe(function (data) {
            _this.beneficiaryBank = data;
        });
    };
    ClaimEntryComponent.prototype.getBenficiaryFamilyDetailsByHealth = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.benficiaryFamilybyHealth = data;
        });
    };
    ClaimEntryComponent.prototype.converToDateString = function (inputDate) {
        return new Date(inputDate).toISOString().split('T')[0];
    };
    ClaimEntryComponent.prototype.disabilityChange = function (id) {
        var _this = this;
        debugger;
        if (id != 0) {
            this.enableDeatheligibility = true;
            var data = this.disabilityConfig.find(function (x) { return x.claimConfigId == id; });
            this.disableEligibility = data.annualLimit;
            this.natureOfDisabilityName = data.claimConfigOptionName;
            debugger;
            var data1 = this.beneficiaryAppliedDisabilities.find(function (x) { return x == _this.claim.disabilityDetails.natureOfDisability; });
            if (data1) {
                this.checkNatureOfDisability = false;
                //alert("Claim has been already submitted with this nature of disability");
                //return;
            }
            else {
                this.checkNatureOfDisability = true;
            }
        }
        else {
            this.enableDeatheligibility = false;
            this.disableEligibility = 0;
        }
    };
    ClaimEntryComponent.prototype.getBenficiarydetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(id)
            .subscribe(function (data) {
            _this.beneficiary = data;
            if (_this.beneficiary != null && _this.beneficiary.benDeathStatus != 1) {
                if (_this.beneficiary.isActive) {
                    _this.getBenficiaryFamilyDetailsByHealth(_this.beneficiary.benSno);
                    if (_this.beneficiary != null) {
                        debugger;
                        if (_this.beneficiary.benPFStatus != null && _this.beneficiary.benPFStatus == 1) {
                            _this.dataService.getBeneficiaryPFAccountDetails(_this.beneficiary.benSno).subscribe(function (data1) {
                                debugger;
                                _this.beneficiaryPFAccountDetails = data1;
                                if (_this.beneficiaryPFAccountDetails != null && (_this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && _this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                    if (_this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || _this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                        _this.getPfBalance(_this.beneficiary.benSno);
                                        _this.validatePfSubmit(_this.beneficiary.ssI_Number);
                                    }
                                    else
                                        alert("Your Pf Account is closed/Inactive");
                                }
                                else
                                    alert("No pf details available for this given SSIN number");
                            });
                        }
                        else {
                            _this.disablePFCheckbox = true;
                            _this.pfExsits = true;
                        }
                    }
                }
                else {
                    _this.benficiaryInactive = true;
                    _this.restrictSave = true;
                    _this.disableEdu = true;
                }
            }
            else {
                _this.restrictSave = _this.isBenDeath = _this.disablePFCheckbox = _this.disableHealthCheckbox = _this.disableDisabilityCheckbox = _this.disableEducationCheckbox = true;
            }
        });
    };
    ClaimEntryComponent.prototype.changeCertificate = function (inputValue, type) {
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
                model.statusId = ClaimStatus.Submitted;
                switch (type) {
                    case "certificate":
                        model.attachmentType = AttachmentType.Scholarship;
                        model.claimType = ClaimConstants.Education;
                        _this.educertificates.push(model);
                        break;
                    case "nonMarriage":
                        model.attachmentType = AttachmentType.NonMarriage;
                        model.claimType = ClaimConstants.Education;
                        _this.eduNonMarriage.push(model);
                        break;
                    case "selfAttest":
                        model.attachmentType = AttachmentType.PassingExamCertificate;
                        model.claimType = ClaimConstants.Education;
                        _this.eduSelfAttested.push(model);
                        break;
                    case "dischargeCertificate":
                        model.attachmentType = AttachmentType.DischargeCertificate;
                        model.claimType = ClaimConstants.HealthFamily;
                        _this.healthDischargeCertificate = model;
                        break;
                    case "originalVoucher":
                        model.attachmentType = AttachmentType.OriginalVouchers;
                        model.claimType = ClaimConstants.HealthFamily;
                        _this.healthOriginalVoucher = model;
                        break;
                    case "healthselfAttest":
                        model.attachmentType = AttachmentType.DoctorPrescription;
                        model.claimType = ClaimConstants.HealthFamily;
                        _this.healthSelfAttached = model;
                        break;
                    case "main":
                        model.attachmentType = AttachmentType.FormV;
                        model.claimType = null;
                        _this.mainUpload = model;
                        break;
                    case "disablityCertificate":
                        model.attachmentType = AttachmentType.DisabilityCertificate;
                        model.claimType = ClaimConstants.Disability;
                        _this.disabilityCertificate = model;
                        break;
                    case "healthExpensesSheet":
                        model.attachmentType = AttachmentType.ExpensesSheet;
                        model.claimType = ClaimConstants.HealthFamily;
                        _this.healthExpensesSheet = model;
                        break;
                    case "condolationCertificate":
                        model.attachmentType = AttachmentType.Condolationcertificate;
                        model.claimType = ClaimConstants.Disability;
                        _this.condolationCertificate = model;
                        break;
                    case "healthCondolationCertificate":
                        model.attachmentType = AttachmentType.Condolationcertificate;
                        model.claimType = ClaimConstants.HealthFamily;
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
    ClaimEntryComponent.prototype.removeUploadCertificates = function (edu, type) {
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
    ClaimEntryComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    ClaimEntryComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    ClaimEntryComponent.prototype.pfChange = function (eve) {
        this.viewPf = !this.viewPf;
        //if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
        //    if (this.beneficiary.regNumber != null && this.beneficiary.regNumber != "") {
        //        this.getPfBalance(this.beneficiary.regNumber);
        //    }
        //    else
        //        alert("No pf details available for this given SSIN number");
        //    this.validatePfSubmit(this.beneficiary.ssI_Number);
        //}
        //else {
        //    this.disablePFCheckbox = false;
        //    this.pfExsits = true;
        //    this.viewPf = !this.viewPf;
        //}
    };
    ClaimEntryComponent.prototype.healthChange = function (eve) {
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    };
    ClaimEntryComponent.prototype.deathChange = function (eve) {
        this.viewDeath = !this.viewDeath;
    };
    ClaimEntryComponent.prototype.educationChange = function (eve) {
        if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
            var eduBenefit = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toLowerCase(); });
            if (eduBenefit != null) {
                var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
            }
            //if (this.eduCount >= 2 && this.claimId == 0) {
            if (cond && this.claimId == 0) {
                this.disableEdu = true;
                this.maxLimitExceeded = true;
                this.restrictSave = true;
                this.viewEducation = false;
                eve.target.checked = false;
                return;
            }
        }
        if (this.benficiaryFamily == null || this.benficiaryFamily.length == 0) {
            this.restrictSave = true;
            this.viewEducation = false;
            this.disableEdu = true;
            this.noDependents = true;
            this.viewEducation = false;
            eve.target.checked = false;
            return;
        }
        this.viewEducation = eve.target.checked;
        this.validateDependent = false;
    };
    ClaimEntryComponent.prototype.getClaimDetailsByClaimId = function (id) {
        var _this = this;
        this.dataService
            .getClaimDetailsById(id)
            .subscribe(function (data) {
            _this.claim = data;
            _this.isClaimEdit = _this.isDisabilityClaimEdit = _this.isHealthClaimEdit = true;
            //this.disableHealthCheckbox = true; }
            //else this.disableEducationCheckbox = true; this.disableEdu = true; }
            if (_this.claimTypeString == undefined || _this.claimTypeString == null) {
                if (_this.claim.educationDetails != null && _this.claim.educationDetails.educationHdrId != 0) {
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
                if (_this.claim.healthFamilyDetails != null && _this.claim.healthFamilyDetails.healthFamilyId != 0) {
                    _this.viewHealth = true;
                    if (_this.claim.healthFamilyDetails.hospitalId != null && _this.claim.healthFamilyDetails.hospitalId != undefined && _this.claim.healthFamilyDetails.otherHospital != undefined && _this.claim.healthFamilyDetails.otherHospital != null) {
                        _this.isOtherHospital = true;
                        _this.hospotalId = _this.claim.healthFamilyDetails.hospitalId;
                    }
                    if (_this.claim.healthFamilyDetails.claimFor == 5) {
                        if (_this.claim.healthFamilyDetails.typeOfHospitalization != 2) {
                            _this.viewSelf = true;
                        }
                    }
                    else if (_this.claim.healthFamilyDetails.claimFor == 6) {
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
                        if (eachObj.attachmentType === AttachmentType.OriginalVouchers) {
                            _this.healthOriginalVoucher = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.DischargeCertificate) {
                            _this.healthDischargeCertificate = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.DoctorPrescription) {
                            _this.healthSelfAttached = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.ExpensesSheet) {
                            _this.healthExpensesSheet = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
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
                if (_this.claim.disabilityDetails != null && _this.claim.disabilityDetails.disabilityId > 0) {
                    _this.viewDeath = true;
                    if (_this.claim.disabilityDetails.dateofRelease != null) {
                        _this.claim.disabilityDetails.dateofRelease = new Date(_this.claim.disabilityDetails.dateofRelease);
                    }
                    if (_this.claim.disabilityDetails.natureOfDisability != null) {
                        _this.enableDeatheligibility = true;
                        _this.disableEligibility = _this.claim.disabilityDetails.claimAmount;
                    }
                    _this.claim.disabilityDetails.attachmentDTOList.forEach(function (eachObj) {
                        if (eachObj.attachmentType === AttachmentType.DisabilityCertificate) {
                            _this.disabilityCertificate = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                            _this.condolationCertificate = eachObj;
                        }
                    });
                }
                if (_this.claim.providentFundDetails != null && _this.claim.providentFundDetails.pfId > 0) {
                    _this.viewPf = true;
                    if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        _this.isPrematureClaim = true;
                    }
                }
            }
            if (_this.claimTypeString == "Education") {
                if (_this.claim.educationDetails != null && _this.claim.educationDetails.educationHdrId > 0) {
                    _this.viewEducation = true;
                    if (_this.claim.educationDetails.educationDetailList != null && _this.claim.educationDetails.educationDetailList.length > 0) {
                        _this.educationDetailsArray = _this.claim.educationDetails.educationDetailList;
                        _this.rowIndex = _this.rowIndex + _this.educationDetailsArray.length;
                        debugger;
                        if (_this.educationDetailsArray != null && _this.educationDetailsArray.length > 0) {
                            for (var i = 0; i < _this.educationDetailsArray.length; i++) {
                                if (_this.educationDetailsArray[i].presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                    _this.viewuploadNonMarriage = true;
                                }
                                else {
                                    _this.viewuploadNonMarriage = false;
                                }
                                debugger;
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
                _this.disableEducationCheckbox = true;
                //this.disablePFCheckbox = true;
                if (_this.claim.healthFamilyDetails != null && _this.claim.healthFamilyDetails.healthFamilyId != 0) {
                    _this.viewHealth = true;
                    if (_this.claim.healthFamilyDetails.otherHospital != undefined && _this.claim.healthFamilyDetails.otherHospital != null) {
                        _this.isOtherHospital = true;
                    }
                    if (_this.claim.healthFamilyDetails.claimFor == 5) {
                        if (_this.claim.healthFamilyDetails.typeOfHospitalization != 2) {
                            _this.viewSelf = true;
                        }
                    }
                    else if (_this.claim.healthFamilyDetails.claimFor == 6) {
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
                        if (eachObj.attachmentType === AttachmentType.OriginalVouchers) {
                            _this.healthOriginalVoucher = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.DischargeCertificate) {
                            _this.healthDischargeCertificate = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.DoctorPrescription) {
                            _this.healthSelfAttached = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.ExpensesSheet) {
                            _this.healthExpensesSheet = eachObj;
                        }
                        if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
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
            if (_this.claimTypeString == "Disability") {
                _this.disableDisabilityCheckbox = true;
                _this.disableHealthCheckbox = true;
                _this.disableEducationCheckbox = true;
                //this.disablePFCheckbox = true;
                if (_this.claim.disabilityDetails != null && _this.claim.disabilityDetails.disabilityId > 0) {
                    _this.viewDeath = true;
                    if (_this.claim.disabilityDetails.dateofRelease != null) {
                        _this.claim.disabilityDetails.dateofRelease = new Date(_this.claim.disabilityDetails.dateofRelease);
                    }
                    if (_this.claim.disabilityDetails.natureOfDisability != null) {
                        _this.enableDeatheligibility = true;
                        _this.disableEligibility = _this.claim.disabilityDetails.claimAmount;
                    }
                }
                _this.claim.disabilityDetails.attachmentDTOList.forEach(function (eachObj) {
                    if (eachObj.attachmentType === AttachmentType.DisabilityCertificate) {
                        _this.disabilityCertificate = eachObj;
                    }
                    if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                        _this.condolationCertificate = eachObj;
                    }
                });
            }
            if (_this.claimTypeString == "PF") {
                if (_this.claim.providentFundDetails != null && _this.claim.providentFundDetails.pfId > 0) {
                    _this.viewPf = true;
                    if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        _this.isPrematureClaim = true;
                    }
                }
            }
            if (_this.claim.attachment != null && _this.claim.attachment.length > 0) {
                _this.mainUpload = _this.claim.attachment[0];
            }
            //  this.mainUpload = this.claim.attachment[0];
            console.log(_this.claim);
            _this.getBenficiaryFamilyDetails(_this.claim.benSno);
            _this.getBenficiaryEduCount(_this.claim.benSno);
            _this.getBenficiarydetails(_this.claim.benSno);
        });
    };
    //PF
    ClaimEntryComponent.prototype.validatePfSubmit = function (ssiNumber) {
        var _this = this;
        this.dataService
            .validatePfSubmit(ssiNumber, 0)
            .subscribe(function (data) {
            _this.isPFSubmitted = data;
            if (_this.isPFSubmitted) {
                _this.disablePFCheckbox = true;
            }
        });
    };
    ClaimEntryComponent.prototype.validatePFData = function (claimData, id) {
        var isValid = true;
        //this.natureOfDeath = this.dateofDeath = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = true;
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        if (this.claim.providentFundDetails.typeOfClaim == undefined) {
            this.pfTypeOfClaimValid = isValid = false;
        }
        else if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) //Premature
         {
            if (this.claim.providentFundDetails.reasonForPreClosure == undefined) {
                this.reasonForPreclosureValid = isValid = false;
            }
            ;
            if (this.pfLockingPeriod != undefined && this.pfLockingPeriod != null) {
                var date1 = new Date(this.pfLockingPeriod);
                var timeDiff = (this.maxDate.getTime() - date1.getTime());
                //var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                if (timeDiff < 0) {
                    alert("Premature can not be possible before locking period");
                    return;
                }
                if (timeDiff < 0 && this.pfAccountStatus.toLowerCase() == "suspend") {
                    alert("Irrespective of the locking period I can apply for premature");
                    return;
                }
            }
        }
        else if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.FinalPayment) //FinalPayment
         {
            if (this.pfBenefitConfigDetails != null) {
                //final payment  - age > 60 
                var date1 = new Date(this.beneficiary.benDob);
                var age = this.maxDate.getFullYear() - date1.getFullYear();
                var m = this.maxDate.getMonth() - date1.getMonth();
                if (m < 0 || (m === 0 && this.maxDate.getDate() < date1.getDate())) {
                    age--;
                }
                var cond = eval(age + this.pfBenefitConfigDetails.maturityAgeLogic + this.pfBenefitConfigDetails.maturityAge);
                // if (age < 60) {
                if (cond) {
                    alert("you are not eligible for this claim beacause your age less than 60");
                    return;
                }
            }
        }
        return isValid;
    };
    ClaimEntryComponent.prototype.getPfBalance = function (bensno) {
        var _this = this;
        this.pfExsits = false;
        this.dataService
            .getPfBalance(bensno)
            .subscribe(function (data) {
            _this.pfBalanceDetails = data;
            if (_this.pfBalanceDetails != null && _this.pfBalanceDetails != undefined) {
                if (_this.pfBalanceDetails.code == "000") {
                    //claim amount=   balance + cantribution +( (Contribution/25 ) * 30)
                    _this.pfClaimAmount = _this.pfBalanceDetails.balance + _this.pfBalanceDetails.contribution + ((_this.pfBalanceDetails.contribution / 25) * 30);
                    if (_this.pfBenefitConfigDetails != null) {
                        var date = new Date(_this.beneficiary.benDob);
                        //this.benMaturityDate = new Date(date.getFullYear() + 60, date.getMonth(), date.getDate());
                        _this.benMaturityDate = new Date(date.getFullYear() + _this.pfBenefitConfigDetails.maturityAge, date.getMonth(), date.getDate());
                        //pf Locking Period 3 year
                        if (_this.beneficiary.benRegDate != null) {
                            var lockingDate = new Date(_this.beneficiary.benRegDate);
                            //this.pfLockingPeriod = new Date(lockingDate.getFullYear() + 3, lockingDate.getMonth(), lockingDate.getDate());
                            _this.pfLockingPeriod = new Date(lockingDate.getFullYear(), lockingDate.getMonth() + _this.pfBenefitConfigDetails.pfLockingPeriodMonths, lockingDate.getDate());
                        }
                    }
                }
                else {
                    _this.disablePFCheckbox = true;
                    _this.pfExsits = true;
                }
            }
        });
    };
    ClaimEntryComponent.prototype.pfTypeOfClaimChange = function (eve) {
        if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
            this.isPrematureClaim = true;
            this.reasonForPreclosureValid = true;
        }
        else {
            this.isPrematureClaim = false;
        }
    };
    //health
    ClaimEntryComponent.prototype.hospitalChange = function (eve) {
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
    ClaimEntryComponent.prototype.typeOfClaimChange = function (eve) {
        if (this.claim.healthFamilyDetails.typeOfClaim == 5) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 1;
        }
        else if (this.claim.healthFamilyDetails.typeOfClaim == 0) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 0;
        }
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno, this.claim.healthFamilyDetails.typeOfClaim);
        this.hospitalizationChange(eve);
    };
    ClaimEntryComponent.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
        var _this = this;
        this.maxHelathClaimLimitExceeded = false;
        this.dataService
            .getBeneficiaryHealthClaimAmount(benSno, typeOfClaim)
            .subscribe(function (data) {
            var maxEligibleAmount = 0;
            if (typeOfClaim != 0) {
                if (typeOfClaim == 4) {
                    maxEligibleAmount = HealthClaimEligibility.TreatmentOfAilment;
                    _this.typeOfAilmentClaimedAmount = data;
                }
                else {
                    maxEligibleAmount = HealthClaimEligibility.Surgery;
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
                maxEligibleAmount = HealthClaimEligibility.TreatmentOfAilment + HealthClaimEligibility.Surgery;
                if (_this.totalHealthClaimAmount >= maxEligibleAmount) {
                    _this.viewHealth = false;
                    _this.maxHelathClaimLimitExceeded = true;
                }
            }
        });
    };
    ClaimEntryComponent.prototype.hospitalizationChange = function (eve) {
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
            this.claim.healthFamilyDetails.costOfClinicalTest = undefined;
            this.claim.healthFamilyDetails.costOfMedicine = undefined;
            if (this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                this.disableCost = false;
                if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                    this.viewNameOfClinicalTest = true;
                }
            }
        }
        this.claimForChange(eve);
    };
    ClaimEntryComponent.prototype.nameOfDiseaseChange = function (eve) {
        this.viewNameOfClinicalTest = this.disableCost = false;
        if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
            this.viewNameOfClinicalTest = true;
        }
        else {
            this.viewNameOfClinicalTest = false;
            this.claim.healthFamilyDetails.nameOfClinicalTest = undefined;
        }
    };
    ClaimEntryComponent.prototype.claimForChange = function (eve) {
        debugger;
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
    ClaimEntryComponent.prototype.natureOfDeathChange = function (natureOfDeathData) {
        this.viewAccidental = this.viewEligibilityAmount = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            var data = this.deathConfig.find(function (x) { return x.claimConfigId == natureOfDeathData; });
            this.viewEligibilityAmount = true;
            this.deathEligibility = data.annualLimit;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = true;
        }
    };
    ClaimEntryComponent.prototype.selectDependent = function (args) {
        var _this = this;
        var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == args.target.value; });
        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId, true)
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
                    //    return
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
    ClaimEntryComponent.prototype.selectLastExamPassed = function (args, education) {
        debugger;
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
    ClaimEntryComponent.prototype.selectPresentlyReading = function (args, education) {
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
    ClaimEntryComponent.prototype.chkAccidentChange = function (args, value) {
        if (value == true) {
            this.claim.healthFamilyDetails.claimFor = 5;
        }
        else {
            this.claim.healthFamilyDetails.claimFor = 0;
        }
        this.claimForChange(args);
    };
    ClaimEntryComponent.prototype.validateEducationDetails = function (details) {
        var isValid = true;
        this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.uplaodmain = this.studentNameValid = this.institutionNameValid = this.institutionContactValid = this.registrationNoValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = true;
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
        console.log(details.dateofAdmission);
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
    ClaimEntryComponent.prototype.addEducationDetails = function (details) {
        if (this.claim.educationDetails.claimAmount == undefined) {
            this.claim.educationDetails.claimAmount = 0;
        }
        if (this.validateEducationDetails(details)) {
            details.statusId = ClaimStatus.Submitted;
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
            var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == details.dependentId; });
            this.claim.educationDetails.claimAmount += details.eligibleAmount == undefined ? 0 : details.eligibleAmount;
            this.educationDetails = {};
        }
    };
    ClaimEntryComponent.prototype.editEducationDetails = function (details) {
        var _this = this;
        this.educationDetails = details;
        this.eduSelfAttested = [];
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.educationDetails.dateofAdmission = new Date(details.dateofAdmission);
        this.educationDetails.attachmentDetailsList.forEach(function (eachObj) {
            if (eachObj.attachmentType === AttachmentType.Scholarship) {
                _this.educertificates.push(eachObj);
            }
            if (eachObj.attachmentType === AttachmentType.NonMarriage) {
                _this.eduNonMarriage.push(eachObj);
            }
            if (eachObj.attachmentType === AttachmentType.PassingExamCertificate) {
                _this.eduSelfAttested.push(eachObj);
            }
        });
        this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.educationDetailsArray.indexOf(details);
        this.lgModal.show();
    };
    ClaimEntryComponent.prototype.removeEducationDetails = function (details) {
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
        }
    };
    ClaimEntryComponent.prototype.getHospitalization = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.Hospitalization)
            .subscribe(function (data) {
            _this.hospitalizationLov = data;
        });
    };
    ClaimEntryComponent.prototype.getDiseases = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.Diseases)
            .subscribe(function (data) {
            _this.diseasesLov = data;
        });
    };
    ClaimEntryComponent.prototype.getClinicalTests = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClinicalTests)
            .subscribe(function (data) {
            _this.clinicalTestLov = data;
        });
    };
    ClaimEntryComponent.prototype.getHealthClainFor = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClaimFor)
            .subscribe(function (data) {
            _this.healthtypeofClaim = data;
        });
    };
    ClaimEntryComponent.prototype.getLastExamPassed = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.LastExamPassed)
            .subscribe(function (data) {
            _this.lastExampassed = data;
        });
    };
    ClaimEntryComponent.prototype.getPfConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.PF)
            .subscribe(function (data) {
            _this.pfConfig = data;
        });
    };
    ClaimEntryComponent.prototype.getHealthandFamilyConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthConfig = data;
        });
    };
    ClaimEntryComponent.prototype.getEducationConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationConfig = data;
            _this.dataService.eduConfig = data;
        });
    };
    ClaimEntryComponent.prototype.getDeathConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Death)
            .subscribe(function (data) {
            _this.deathConfig = data;
        });
    };
    ClaimEntryComponent.prototype.getDisabilityConfiguration = function () {
        var _this = this;
        debugger;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Disability)
            .subscribe(function (data) {
            console.log(data);
            _this.disabilityConfig = data;
        });
    };
    ClaimEntryComponent.prototype.valuechange = function (ssnNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsByNo(ssnNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            if (_this.beneficiary != null) {
                if (_this.beneficiary.isActive) {
                    _this.benficiaryInactive = false;
                    _this.getBenficiaryFamilyDetails(_this.beneficiary.benSno);
                    _this.getBenficiaryEduCount(_this.beneficiary.benSno);
                }
                else {
                    _this.benficiaryInactive = true;
                    _this.restrictSave = true;
                    _this.viewEducation = false;
                    _this.disableEdu = true;
                }
            }
            console.log(_this.beneficiary);
        });
    };
    ClaimEntryComponent.prototype.getHospitals = function () {
        var _this = this;
        this.dataService
            .getAllHospitals()
            .subscribe(function (data) {
            _this.hospotalList = data;
            console.log(_this.hospotalList);
        });
    };
    ClaimEntryComponent.prototype.getBenficiaryEduCount = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryEduCount(id)
            .subscribe(function (data) {
            _this.eduCount = data;
            if (_this.mode == "draft" && (_this.educationDetailsArray != null && _this.educationDetailsArray.length > 0)) {
                _this.eduCount = _this.eduCount + _this.educationDetailsArray.length;
            }
            if (_this.educationBenefitConfigDetails != null && _this.educationBenefitConfigDetails.length > 0) {
                var eduBenefit = _this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toLowerCase(); });
                if (eduBenefit != null) {
                    var cond = eval(_this.eduCount + eduBenefit.logic + eduBenefit.value);
                    if (cond && _this.claimId == 0) {
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
    ClaimEntryComponent.prototype.getBenficiaryFamilyDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.Education)
            .subscribe(function (data) {
            _this.benficiaryFamily = data;
            if (_this.benficiaryFamily != null && _this.benficiaryFamily.length > 0) {
                _this.noDependents = false;
            }
            //else { this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true; }
            console.log(_this.benficiaryFamily);
        });
    };
    ClaimEntryComponent.prototype.validateClaimsData = function (claimData, id) {
        var isValid = true;
        if (id == 1)
            return isValid;
        this.educationCheck = this.ssnNoValid = true;
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        return isValid;
    };
    ClaimEntryComponent.prototype.okClick = function () {
        this.successModal.hide();
        if (this.saveType == 1) {
            window.location.href = "claim/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "claim/claims";
        }
        else if (this.mode == "referal") {
            window.location.href = "claim/referralclaims";
        }
        else {
            window.location.href = "claim/claims";
        }
    };
    ClaimEntryComponent.prototype.cancleClick = function () {
        if (this.saveType == 1) {
            window.location.href = "claim/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "claim/claims";
        }
        else if (this.mode == "referal") {
            window.location.href = "claim/referralclaims";
        }
        else {
            window.location.href = "claim/claims";
        }
    };
    ClaimEntryComponent.prototype.validateDisabilityData = function (claimData, id) {
        var _this = this;
        var isValid = true;
        this.natureOfDisability = this.dateofrelease = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
        this.isClaimEffectiveDate = false;
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        if (this.disabilityCertificate.fileName == undefined) {
            this.disabilityCertificateUploaded = isValid = false;
        }
        ;
        if (this.claim.disabilityDetails.dateofRelease == undefined) {
            this.dateofrelease = isValid = false;
        }
        ;
        //if (this.claim.disabilityDetails.natureOfDisability == undefined) { this.natureOfDisability = isValid = false }
        if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == undefined) {
            this.isDeathorpermanent1 = isValid = false;
        }
        if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == undefined) {
            this.isDeathorpermanent2 = isValid = false;
        }
        if (this.claim.disabilityDetails.isOtherFinancialAssistance == false || this.claim.disabilityDetails.isOtherFinancialAssistance == undefined) {
            this.isDeathorpermanent3 = isValid = false;
        }
        if (this.claim.disabilityDetails.natureOfDisability == undefined) {
            this.natureOfDisability = isValid = false;
        }
        else {
            var data = this.beneficiaryAppliedDisabilities.find(function (x) { return x == _this.claim.disabilityDetails.natureOfDisability; });
            if (data) {
                this.checkNatureOfDisability = isValid = false;
                //alert("Claim has been already submitted with this nature of disability");
                //return;
            }
        }
        if (this.enableReasonForDelaySubmission) {
            if (this.claim.disabilityDetails.reasonForDelaySubmission == undefined) {
                this.reasonForDelayValid = isValid = false;
            }
            ;
            if (this.condolationCertificate.fileName == undefined) {
                this.condolationCertificateUploaded = isValid = false;
            }
            ;
        }
        debugger;
        if (this.claim.disabilityDetails.dateofRelease != undefined) {
            if (this.claim.disabilityDetails.dateofRelease < new Date(this.disabilityClaimEffectiveDate)) {
                this.claimEffectiveDate = this.disabilityClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        return isValid;
    };
    ClaimEntryComponent.prototype.validateHealthData = function (claimData, id) {
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
                this.rigisterESI = isValid = false;
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
        else {
            if (this.claim.healthFamilyDetails.costOfClinicalTest == 0 && this.claim.healthFamilyDetails.costOfHospitalization == 0 && this.claim.healthFamilyDetails.costOfMedicine == 0) {
                isValid = false;
                alert("Please enter atleast one valid cost");
                return;
            }
            var amount = Number(claimData.healthFamilyDetails.costOfClinicalTest != undefined ? claimData.healthFamilyDetails.costOfClinicalTest : 0) + Number(claimData.healthFamilyDetails.costOfHospitalization != undefined ? claimData.healthFamilyDetails.costOfHospitalization : 0) + Number(claimData.healthFamilyDetails.costOfMedicine != undefined ? claimData.healthFamilyDetails.costOfMedicine : 0);
            if (amount == 0) {
                isValid = false;
                alert("Please enter atleast one valid cost");
                return;
            }
            var remainingAmount = 0;
            if (this.claim.healthFamilyDetails.typeOfClaim == 4) {
                remainingAmount = HealthClaimEligibility.TreatmentOfAilment - this.typeOfAilmentClaimedAmount;
            }
            else {
                remainingAmount = HealthClaimEligibility.Surgery - this.surgeryClaimedAmount;
            }
            if (amount > remainingAmount) {
                isValid = false;
                alert("Cost of Clinical Test, Cost of Medicine, Cost of Hospitalization should not be more than " + remainingAmount);
                return;
            }
        }
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
    ClaimEntryComponent.prototype.downLoadPdf = function (claimData, type) {
        var _this = this;
        this.claim.deathDetails = null;
        if (!this.viewPf) {
            this.claim.providentFundDetails = null;
        }
        if (!this.viewDeath) {
            this.claim.disabilityDetails = null;
        }
        else {
            claimData.disabilityDetails.natureOfDisabilityName = this.natureOfDisabilityName;
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
        claimData.attachment = this.mainUploadList;
        claimData.ssin = this.beneficiary.ssI_Number;
        claimData.entryPoint = EntryPoint.Beneficiary;
        claimData.onBehalfBen = true;
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
                FileSaver.saveAs(blob, "FormV.pdf");
            }
            _this.disableSubmitbutton = false;
            _this.pdfModal.hide();
            //var url = window.URL.createObjectURL(blob);
            //this.disableSubmitbutton = false;
            //window.open(url);
        });
    };
    ClaimEntryComponent.prototype.GenaratePdf = function (claimData, type) {
        var isValid = true;
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
                //return;
                isValid = false;
            }
        }
        if (this.viewDeath) {
            if (!this.validateDisabilityData(claimData, type)) {
                //return;
                isValid = false;
            }
        }
        if (this.viewPf) {
            if (!this.validatePFData(claimData, type)) {
                //return;
                isValid = false;
            }
            else {
                claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
            }
        }
        //Keep Education Validations after all the health,pf,death, disability validations
        if (this.viewEducation) {
            if (this.educationDetailsArray.length == 0) {
                alert("Please add atleast one student");
                //return;
                isValid = false;
            }
            else if (this.educationDetailsArray.length > 0) {
                debugger;
                for (var i = 0; i < this.educationDetailsArray.length; i++) {
                    if (this.educationDetailsArray[i].isDuplicate) {
                        alert("Already claim has submitted for this dependent in this year please select another dependent");
                        isValid = false;
                        return;
                    }
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
            if (!claimData.educationDetails.isanyothersourceofthegovernment) {
                return this.educationCheck = isValid = false;
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
    ClaimEntryComponent.prototype.saveClaimsData = function (claimData, type) {
        var _this = this;
        var isValid = true;
        this.validateDependent = false;
        if (type != 1) {
            if (this.viewHealth) {
                if (!this.validateHealthData(claimData, type)) {
                    //return;
                    isValid = false;
                }
            }
            if (this.viewDeath) {
                if (!this.validateDisabilityData(claimData, type)) {
                    //return;
                    isValid = false;
                }
            }
            if (this.viewPf) {
                if (!this.validatePFData(claimData, type)) {
                    isValid = false;
                    return;
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
        }
        if (isValid == false) {
            return;
        }
        if (this.validateClaimsData(claimData, type)) {
            this.UpdateClaimStatusIdByStatus(type);
            if (this.ClaimStatusId <= 7)
                claimData.workflowId = WorkflowTrans.workflow;
            else
                claimData.workflowId = WorkflowTrans.workflowreferral;
            var attachedList_3 = [];
            this.claim.deathDetails = null;
            if (!this.viewPf) {
                this.claim.providentFundDetails = null;
            }
            if (!this.viewDeath) {
                this.claim.disabilityDetails = null;
            }
            if (!this.viewHealth) {
                this.claim.healthFamilyDetails = null;
            }
            if (!this.viewEducation) {
                this.claim.educationDetails = null;
            }
            if (this.educertificates.length > 0) {
                this.educertificates.forEach(function (contact) {
                    attachedList_3.push(contact);
                });
            }
            if (this.eduNonMarriage.length > 0) {
                this.eduNonMarriage.forEach(function (contact) {
                    attachedList_3.push(contact);
                });
            }
            if (this.eduSelfAttested.length > 0) {
                this.eduSelfAttested.forEach(function (contact) {
                    attachedList_3.push(contact);
                });
            }
            // this.mainUploadList.push(this.mainUpload);
            this.claim.benSno = this.beneficiary.benSno;
            if (this.mainUpload != undefined) {
                claimData.attachment.push(this.mainUpload);
            }
            claimData.ssin = this.beneficiary.ssI_Number;
            claimData.entryPoint = EntryPoint.Beneficiary;
            if (this.claim.educationDetails != null) {
                if (this.educationDetailsArray.length > 0) {
                    claimData.educationDetails.educationDetailList = this.educationDetailsArray;
                    //---------------------------
                    //this.expection = [];
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
                                        var exp = {};
                                        exp.exceptionText = "Student (Dependent) " + data.benDependentName + " admission date exceeding 90 days";
                                        exp.exceptionCapturedDate = new Date();
                                        exp.raisedBy = this.userService.user.userid;
                                        //this.expection.push(exp);
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
                                            var exp = {};
                                            exp.exceptionText = "Student (Dependent) " + data.benDependentName + " age exceeding 21";
                                            exp.exceptionCapturedDate = new Date();
                                            exp.raisedBy = this.userService.user.userid;
                                            // this.expection.push(exp);
                                            this.educationClaimExceptionDetails.push(exp);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    claimData.educationDetails.educationClaimExceptionDetails = this.educationClaimExceptionDetails;
                    //--------------------
                }
                else
                    claimData.educationDetails.educationDetailList = null;
                //claimData.educationDetails.attachmentDetailsList = attachedList;
                claimData.educationDetails.claimType = ClaimConstants.Education;
                claimData.educationDetails.statusId = this.ClaimStatusId;
                claimData.educationDetails.CreatedBy = this.userService.user.userid;
            }
            if (this.claim.healthFamilyDetails != null) {
                //-------------------------------
                //this.expection = []; 
                this.healthClaimExceptionDetails = [];
                if (this.healthFamilyBenefitConfigDetails != null && this.healthFamilyBenefitConfigDetails.length > 0) {
                    //Exception Rule - 4 if(Currentdate-Firstappointmentdate >60 and OPD)
                    if (this.claim.healthFamilyDetails.firstAppointmentDate != null && this.claim.healthFamilyDetails.firstAppointmentDate != undefined) {
                        var date1 = new Date(this.claim.healthFamilyDetails.firstAppointmentDate);
                        var date2 = new Date(Date.now());
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        //---------------------
                        var helBenefit = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofFirstAppointmentExceeding" /* DateofFirstAppointmentExceeding */.toLowerCase(); });
                        if (helBenefit != null) {
                            var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                            if (cond && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                var exp = {};
                                exp.exceptionText = "First appointment date exceeding 60 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = this.userService.user.userid;
                                //this.expection.push(exp);
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
                        //---------------------
                        var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateofDischargeExceeding" /* DateofDischargeExceeding */.toLowerCase(); });
                        if (helBenefit2 != null) {
                            var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                            if (cond2 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                var exp = {};
                                exp.exceptionText = "Discharge date exceeding 60 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = this.userService.user.userid;
                                // this.expection.push(exp);
                                this.healthClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
                //--------------------
                this.healthFamilyPackages = [];
                claimData.healthFamilyDetails.healthFamilyPackages = [];
                for (var i = 0; i < this.selectedPackages.length; i++) {
                    var oo = {};
                    if (claimData.claimId > 0) {
                        oo.healthFamilyId = claimData.healthFamilyDetails.healthFamilyId;
                    }
                    oo.packageID = this.selectedPackages[i].packageID;
                    oo.ailmentName = this.selectedPackages[i].ailmentName;
                    oo.packageName = this.selectedPackages[i].packageName;
                    this.healthFamilyPackages.push(oo);
                }
                claimData.healthFamilyDetails.healthFamilyPackages = this.healthFamilyPackages;
                claimData.healthFamilyDetails.claimAmount = Number(claimData.healthFamilyDetails.costOfClinicalTest != undefined ? claimData.healthFamilyDetails.costOfClinicalTest : 0) + Number(claimData.healthFamilyDetails.costOfHospitalization != undefined ? claimData.healthFamilyDetails.costOfHospitalization : 0) + Number(claimData.healthFamilyDetails.costOfMedicine != undefined ? claimData.healthFamilyDetails.costOfMedicine : 0) + ((this.viewSelf) ? claimData.healthFamilyDetails.loeAmount : 0);
                claimData.healthFamilyDetails.claimType = ClaimConstants.HealthFamily;
                claimData.healthFamilyDetails.statusId = this.ClaimStatusId;
                claimData.healthFamilyDetails.loeAmount = this.lossOfEmploymentAmount;
                claimData.healthFamilyDetails.createdBy = this.userService.user.userid;
                if (!this.isOtherHospital) {
                    claimData.healthFamilyDetails.otherHospital == undefined;
                }
                else {
                    var exp = {};
                    exp.exceptionText = "Application has been submitted with a non listed hospital";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.userService.user.userid;
                    // this.expection.push(exp);
                    this.healthClaimExceptionDetails.push(exp);
                }
                if (!this.viewDateOfAdmit) {
                    claimData.healthFamilyDetails.admittedDate == undefined;
                    claimData.healthFamilyDetails.dischargeDate == undefined;
                    claimData.healthFamilyDetails.costOfHospitalization == undefined;
                }
                if (!this.viewDateOfFirstAppointment) {
                    claimData.healthFamilyDetails.firstAppointmentDate == undefined;
                    claimData.healthFamilyDetails.nameOfTheDisease == undefined;
                    // claimData.healthFamilyDetails.nameOfClinicalTest == undefined;
                    this.nameOfClinicalTestIds = [];
                }
                else {
                    if (!this.viewNameOfClinicalTest) {
                        // claimData.healthFamilyDetails.nameOfClinicalTest == undefined;
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
            if (this.claim.disabilityDetails != null) {
                claimData.disabilityDetails.claimType = ClaimConstants.Disability;
                claimData.disabilityDetails.statusId = this.ClaimStatusId;
                claimData.disabilityDetails.createdBy = this.userService.user.userid;
                claimData.disabilityDetails.claimAmount = this.disableEligibility;
                this.disabilityAttachmentList.push(this.disabilityCertificate);
                if (this.enableReasonForDelaySubmission) {
                    this.disabilityAttachmentList.push(this.condolationCertificate);
                }
                claimData.disabilityDetails.attachmentDTOList = this.disabilityAttachmentList;
                //Disability Exceptions
                //Exception Rule - Selected Other Nature Of Disability
                this.disabilityClaimExceptionDetails = [];
                //let data = this.beneficiaryAppliedDisabilities.find(x => x == this.claim.disabilityDetails.natureOfDisability);
                //if (data == undefined) {
                if (this.beneficiaryAppliedDisabilities.length > 0) {
                    var exp = {};
                    exp.exceptionText = "Beneficiary applied another nature of disability";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.userService.user.userid;
                    this.disabilityClaimExceptionDetails.push(exp);
                }
                //Exception Rule - if(Currentdate-dateofRelease >90)
                if (this.claim.disabilityDetails.dateofRelease != null && this.claim.disabilityDetails.dateofRelease != undefined) {
                    var date1 = new Date(this.claim.disabilityDetails.dateofRelease);
                    var date2 = new Date(Date.now());
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    //---------------------
                    //var post = 10, logic = '>', value = 100;
                    //var valid = eval(post + logic + value);
                    if (this.disabilityBenefitConfigDetails != null && this.disabilityBenefitConfigDetails.length > 0) {
                        var disBenefit = this.disabilityBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateOfReleaseExceeding" /* DateOfReleaseExceeding */.toLowerCase(); });
                        if (disBenefit != null) {
                            var cond = eval(diffDays + disBenefit.logic + disBenefit.value);
                            if (cond) {
                                var exp = {};
                                exp.exceptionText = "Date of release from hospital/Accident date exceeding 90 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = this.userService.user.userid;
                                this.disabilityClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                    //-----------------------
                    //if (diffDays > 90) {
                    //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                    //    exp.exceptionText = "Date of release from hospital/Accident date exceeding 90 days";
                    //    exp.exceptionCapturedDate = new Date();
                    //    exp.raisedBy = this.userService.user.userid;
                    //    this.disabilityClaimExceptionDetails.push(exp);
                    //}
                }
                //claimData.disabilityDetails.disabilityClaimExceptionDetails = this.disabilityClaimExceptionDetails;
            }
            if (this.claim.providentFundDetails != null) {
                //claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                claimData.providentFundDetails.claimAmount = this.pfClaimAmount;
                claimData.providentFundDetails.claimType = ClaimConstants.PF;
                claimData.providentFundDetails.statusId = this.ClaimStatusId;
                claimData.providentFundDetails.createdBy = this.userService.user.userid;
                claimData.providentFundDetails.maturityDate = this.benMaturityDate;
                claimData.providentFundDetails.lockingPeriodDate = this.pfLockingPeriod;
                if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                    claimData.providentFundDetails.pFNO = this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO;
                }
                else {
                    claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                }
            }
            if (this.beneficiary.benRegDate != null && this.beneficiary.benRegDate != undefined) {
                debugger;
                var benregDate = new Date(this.beneficiary.benRegDate);
                var todayDate = new Date();
                var diffYears = todayDate.getFullYear() - benregDate.getFullYear();
                var m = todayDate.getMonth() - benregDate.getMonth();
                if (m < 0 || (m === 0 && todayDate.getDate() < benregDate.getDate())) {
                    diffYears--;
                }
                if (diffYears < 1) {
                    var exp = {};
                    exp.exceptionText = "Beneficiary has not completed one year of registration";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.userService.user.userid;
                    this.healthClaimExceptionDetails.push(exp);
                    this.educationClaimExceptionDetails.push(exp);
                    this.disabilityClaimExceptionDetails.push(exp);
                }
            }
            if ((this.beneficiary.benBankAccNo == undefined || this.beneficiary.benBankAccNo == null || this.beneficiary.benBankAccNo == "")) {
                // if (this.beneficiaryBank == null || this.beneficiaryBank == undefined || this.beneficiaryBank.benBankName == null && this.beneficiaryBank.benBankIfscCode == null) {
                // this.expection = [];
                var exp = {};
                exp.exceptionText = "Benificiary does not have bank account number";
                exp.exceptionCapturedDate = new Date();
                exp.raisedBy = this.userService.user.userid;
                // this.expection.push(exp);
                this.healthClaimExceptionDetails.push(exp);
                this.educationClaimExceptionDetails.push(exp);
                this.disabilityClaimExceptionDetails.push(exp);
                this.pfClaimExceptionDetails.push(exp);
            }
            else {
                if (this.beneficiary.isAssignedMultiple) {
                    var exp = {};
                    exp.exceptionText = "Bank account number assigned to the multiple beneficiaries";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.userService.user.userid;
                    this.healthClaimExceptionDetails.push(exp);
                    this.educationClaimExceptionDetails.push(exp);
                    this.disabilityClaimExceptionDetails.push(exp);
                    this.pfClaimExceptionDetails.push(exp);
                }
            }
            if (type != 1) {
                if (this.claim.educationDetails != null && this.educationClaimExceptionDetails.length > 0) {
                    claimData.educationDetails.educationClaimExceptionDetails = this.educationClaimExceptionDetails;
                }
                if (this.claim.healthFamilyDetails != null && this.healthClaimExceptionDetails.length > 0) {
                    claimData.healthFamilyDetails.healthClaimExceptionDetails = this.healthClaimExceptionDetails;
                }
                if (this.claim.disabilityDetails != null && this.disabilityClaimExceptionDetails.length > 0) {
                    claimData.disabilityDetails.disabilityClaimExceptionDetails = this.disabilityClaimExceptionDetails;
                }
                if (this.claim.providentFundDetails != null && this.pfClaimExceptionDetails.length > 0) {
                    claimData.providentFundDetails.pfClaimExceptionDetails = this.pfClaimExceptionDetails;
                }
            }
            claimData.StatusId = this.ClaimStatusId;
            claimData.CreatedBy = this.userService.user.userid;
            this.successMessage = "";
            this.saveType = type;
            console.log(claimData);
            if (this.claimId > 0) {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .updateClaim(claimData)
                        .then(function (data) {
                        if (data) {
                            if (type == 1) {
                                _this.mode = "draft";
                                _this.successMessage = "Your claim was updated successfully";
                            }
                            else {
                                var refNo = void 0;
                                if (_this.viewHealth) {
                                    refNo = data.item2 + " (Health & Family) ";
                                }
                                if (_this.viewDeath) {
                                    refNo = data.item4 + " (Disability) ";
                                }
                                if (_this.viewPf) {
                                    refNo = data.item1 + " (PF) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewEducation) {
                                    if (refNo == undefined) {
                                        refNo = data.item3 + " (Education) ";
                                    }
                                    else {
                                        refNo = " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4;
                                    }
                                }
                                _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + refNo + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process";
                            }
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
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .createClaim(claimData)
                        .then(function (data) {
                        if (data) {
                            if (type == 1) {
                                _this.mode = "draft";
                                _this.successMessage = "Your application is saved";
                                //this.successMessage = "Your claim was saved successfully";
                                //let refNo;
                                //if (this.viewHealth) {
                                //    refNo = data.item2 + " (Health & Family) ";
                                //    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process <br/>  <br/>";
                                //}
                                //if (this.viewDeath) {
                                //    refNo = data.item4 + " (Disability) ";
                                //    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process <br/>  <br/>";
                                //}
                                //if (this.viewPf) {
                                //    refNo = data.item1 + " (PF) ";
                                //    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process <br/>  <br/>";
                                //}
                                //if (this.viewEducation) {
                                //    if (refNo == undefined) {
                                //        refNo = data.item3 + " (Education) ";
                                //        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + " (Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process <br/>  <br/>";
                                //    }
                                //    else {
                                //        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + "(Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process <br/>  <br/>";
                                //        refNo = " (PF) " + data.item1 + " , " + " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4 + " , " + " (Death) " + data.item4;
                                //    }
                                //}
                            }
                            else {
                                var refNo = void 0;
                                if (_this.viewHealth) {
                                    refNo = data.item2 + " (Health & Family) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewDeath) {
                                    refNo = data.item4 + " (Disability) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewPf) {
                                    refNo = data.item1 + " (PF) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewEducation) {
                                    if (refNo == undefined) {
                                        refNo = data.item3 + " (Education) ";
                                        _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + " (Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                    }
                                    else {
                                        _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + "(Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                        refNo = " (PF) " + data.item1 + " , " + " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4 + " , " + " (Death) " + data.item4;
                                    }
                                }
                            }
                            _this.successModal.show();
                        }
                        else {
                            _this.successMessage = "Invalid transaction";
                            _this.successModal.show();
                        }
                    });
                }
            }
        }
        else {
            return;
        }
    };
    ClaimEntryComponent.prototype.claerClaim = function () {
        this.pfExsits = this.isPFSubmitted = false;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true; //this.originalVoucher =
        this.restrictSave = false;
        this.viewEducation = false;
        this.disableEdu = false;
        this.noDependents = false;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = true;
        this.claim = {};
        this.educationDetailsArray = [];
        this.viewEducation = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewPf = false;
        this.rowIndex = -1;
        this.eduCount = 0;
        this.rowEligibleAmount = 0;
        this.educationDetailsArray = [];
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
        this.claim.educationDetails.isanyothersourceofthegovernment = false;
        //this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease = true;
        this.disabilityAttachmentList = [];
        this.disabilityCertificate = {};
        this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
        this.condolationCertificate = {};
        this.healthCondolationCertificate = {};
        this.pfTypeOfClaimValid = true;
        if (this.claim.claimId == undefined) {
            this.claim = {};
            this.claim.healthFamilyDetails = {};
            this.claim.educationDetails = {};
            this.claim.disabilityDetails = {};
            this.claim.educationDetails.educationDetailList = [];
            this.getBenficiaryFamilyDetails(this.claim.benSno);
            this.getBenficiaryEduCount(this.claim.benSno);
            this.getBenficiarydetails(this.claim.benSno);
        }
        else {
            this.getClaimDetailsByClaimId(this.claimId);
        }
    };
    ClaimEntryComponent.prototype.UpdateClaimStatusIdByStatus = function (type) {
        if (type == 1)
            this.ClaimStatusId = 1;
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
    ClaimEntryComponent.prototype.loeFromDateChange = function (eve) {
        //alert(this.claim.healthFamilyDetails.loeFromDate);
        this.minLOEDate = new Date(this.claim.healthFamilyDetails.loeFromDate);
        this.calculateLossOfEmploymentAmount();
    };
    ClaimEntryComponent.prototype.loeToDateChange = function (eve) {
        this.calculateLossOfEmploymentAmount();
    };
    ClaimEntryComponent.prototype.dateofadminchange = function (eve) {
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
    ClaimEntryComponent.prototype.dateofdischargechange = function (eve) {
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
                //---------------
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
    ClaimEntryComponent.prototype.calculateLossOfEmploymentAmount = function () {
        debugger;
        var calculatedAmount = 0;
        if (this.healthFamilyBenefitConfigDetails != null && this.healthFamilyBenefitConfigDetails.length > 0) {
            if (this.claim.healthFamilyDetails.claimFor != undefined && this.claim.healthFamilyDetails.claimFor == 5) {
                if (this.claim.healthFamilyDetails.claimFor != undefined && this.claim.healthFamilyDetails.typeOfHospitalization != 2) {
                    if (this.claim.healthFamilyDetails.loeFromDate != undefined && this.claim.healthFamilyDetails.loeToDate != undefined) {
                        debugger;
                        var date1 = new Date(this.claim.healthFamilyDetails.loeFromDate);
                        var date2 = new Date(this.claim.healthFamilyDetails.loeToDate);
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        if (diffDays != NaN) {
                            diffDays += 1;
                            //-----------------------
                            debugger;
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
    ClaimEntryComponent.prototype.admittedDateChange = function (args) {
        this.minDischargeDate = new Date(this.claim.healthFamilyDetails.admittedDate);
        this.isDischargeDate = false;
    };
    ClaimEntryComponent.prototype.getActiveFinancialYear = function () {
        var _this = this;
        this.dataService
            .getActiveFinancialYear()
            .subscribe(function (data) {
            _this.activeYear = data;
        });
    };
    ClaimEntryComponent.prototype.checkAll = function (e, item) {
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
    ClaimEntryComponent.prototype.submitClick = function () {
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
    ClaimEntryComponent.prototype.checkIfAllSelected = function (item) {
    };
    ClaimEntryComponent.prototype.viewPackages = function () {
        this.packageModal.show();
    };
    ClaimEntryComponent.prototype.getPackages = function () {
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
    ClaimEntryComponent.prototype.isBenNomineeClaimSubmitted = function (id) {
        var _this = this;
        this.dataService
            .isBenNomineeClaimSubmitted(id)
            .subscribe(function (data) {
            _this.isBenNomineeSubmittedClaim = data;
            if (_this.isBenNomineeSubmittedClaim) {
                _this.disablePFCheckbox = _this.disableHealthCheckbox = _this.disableDisabilityCheckbox = _this.disableEducationCheckbox = true;
            }
        });
    };
    ClaimEntryComponent.prototype.disabilityDateofReleaseChange = function (eve) {
        if (eve != null) {
            if (!this.isDisabilityClaimEdit) {
                var date1 = new Date(eve);
                var date2 = new Date(Date.now());
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                if (this.disabilityBenefitConfigDetails != null && this.disabilityBenefitConfigDetails.length > 0) {
                    var disBenefit = this.disabilityBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "ReasonForDelaySubmission" /* ReasonForDelaySubmission */.toLowerCase(); });
                    if (disBenefit != null) {
                        var cond = eval(diffDays + disBenefit.logic + disBenefit.value);
                        if (cond) {
                            this.enableReasonForDelaySubmission = true;
                        }
                        else {
                            this.claim.disabilityDetails.reasonForDelaySubmission = null;
                            this.condolationCertificate = null;
                            this.enableReasonForDelaySubmission = false;
                        }
                    }
                }
                //if (diffDays > 90) {
                //    this.enableReasonForDelaySubmission = true;
                //}
                //else {
                //    this.claim.disabilityDetails.reasonForDelaySubmission = null;
                //    this.condolationCertificate = null;
                //    this.enableReasonForDelaySubmission = false;
                //}
            }
            else {
                this.isDisabilityClaimEdit = false;
                if (this.claim.disabilityDetails.reasonForDelaySubmission != undefined || this.claim.disabilityDetails.reasonForDelaySubmission != null)
                    this.enableReasonForDelaySubmission = true;
                else
                    this.enableReasonForDelaySubmission = false;
            }
        }
    };
    ClaimEntryComponent.prototype.compareDates = function () {
        if (this.claim.disabilityDetails.dateofRelease != undefined && !this.isDisabilityClaimEdit) {
            var date1 = new Date(this.claim.disabilityDetails.dateofRelease);
            var date2 = new Date(Date.now());
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays > 90) {
                return true;
            }
            else
                return false;
        }
        else if (this.isDisabilityClaimEdit) {
            this.isDisabilityClaimEdit = false;
            if (this.claim.disabilityDetails.reasonForDelaySubmission != undefined || this.claim.disabilityDetails.reasonForDelaySubmission != null)
                return true;
            else
                return false;
        }
    };
    ClaimEntryComponent.prototype.getDisabilityBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Disability)
            .subscribe(function (data) {
            _this.disabilityBenefitConfigDetails = data;
        });
    };
    ClaimEntryComponent.prototype.getHealthFamilyBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthFamilyBenefitConfigDetails = data;
        });
    };
    ClaimEntryComponent.prototype.getEducationBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationBenefitConfigDetails = data;
        });
    };
    ClaimEntryComponent.prototype.getPFBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getPFConfigurationDetails(0)
            .subscribe(function (data) {
            debugger;
            _this.pfBenefitConfigDetails = data;
        });
    };
    __decorate([
        ViewChild('lgModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryComponent.prototype, "lgModal", void 0);
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('packageModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryComponent.prototype, "packageModal", void 0);
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryComponent.prototype, "pdfModal", void 0);
    ClaimEntryComponent = __decorate([
        Component({
            selector: 'app-claim-entry',
            templateUrl: './claim-entry.component.html',
            styleUrls: ['./claim-entry.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], ClaimEntryComponent);
    return ClaimEntryComponent;
}());
export { ClaimEntryComponent };
//# sourceMappingURL=claim-entry.component.js.map