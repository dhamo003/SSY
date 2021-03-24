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
import { ClaimNomineeDataService } from '../services/claim-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, PFStatusMaster } from '../claim/pipes/constnts.model';
import * as FileSaver from 'file-saver';
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
                            if (eachObj.attachmentType === AttachmentType.DeathCertificate) {
                                _this.deathCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === AttachmentType.FirstPageofBankPassbook) {
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
                            if (eachObj.attachmentType === AttachmentType.DeathCertificate) {
                                _this.deathCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === AttachmentType.FirstPageofBankPassbook) {
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
                    case "deathCertificate":
                        model.attachmentType = AttachmentType.DeathCertificate;
                        model.claimType = ClaimConstants.Death;
                        _this.deathCertificate = model;
                        break;
                    case "healthExpensesSheet":
                        model.attachmentType = AttachmentType.ExpensesSheet;
                        model.claimType = ClaimConstants.HealthFamily;
                        _this.healthExpensesSheet = model;
                        break;
                    case "bankPassbook":
                        model.attachmentType = AttachmentType.FirstPageofBankPassbook;
                        model.claimType = ClaimConstants.Death;
                        _this.bankPassbook = model;
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
            .getlovDetails(LovConstants.Diseases)
            .subscribe(function (data) {
            _this.diseasesLov = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getClinicalTests = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClinicalTests)
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
        this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, 0, ClaimConstants.Death, eve);
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
            .getlovDetails(LovConstants.Hospitalization)
            .subscribe(function (data) {
            _this.hospitalizationLov = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getHealthClainFor = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClaimFor)
            .subscribe(function (data) {
            _this.healthtypeofClaim = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getLastExamPassed = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.LastExamPassed)
            .subscribe(function (data) {
            _this.lastExampassed = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getPfConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.PF)
            .subscribe(function (data) {
            _this.pfConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getHealthandFamilyConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getEducationConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationConfig = data;
            _this.dataService.eduConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDeathConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Death)
            .subscribe(function (data) {
            _this.deathConfig = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDisabilityConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Disability)
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
                                                if (_this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || _this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
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
    ClaimEntryNomineeComponent.prototype.getBenficiaryFamilyDetailsByHealth = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
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
                claimData.workflowId = WorkflowTrans.workflow;
            else
                claimData.workflowId = WorkflowTrans.workflowreferral;
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
            claimData.entryPoint = EntryPoint.Nominee;
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
                claimData.educationDetails.claimType = ClaimConstants.Education;
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
                claimData.healthFamilyDetails.claimType = ClaimConstants.HealthFamily;
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
                claimData.deathDetails.claimType = ClaimConstants.Death;
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
                claimData.providentFundDetails.claimType = ClaimConstants.PF;
                claimData.providentFundDetails.statusId = this.ClaimStatusId; //ClaimStatus.Submitted;
                claimData.providentFundDetails.createdBy = 89;
                claimData.providentFundDetails.nomineeId = this.benNomineeSno;
                claimData.providentFundDetails.claimAmount = this.benNomineeShareAmount;
                claimData.providentFundDetails.typeOfClaim = PFTypeOfClaim.FinalPayment;
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
            claimData.StatusId = ClaimStatus.Submitted;
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
            this.ClaimStatusId = ClaimStatus.Submitted;
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
            claimData.providentFundDetails.typeOfClaim = PFTypeOfClaim.FinalPayment;
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
        claimData.entryPoint = EntryPoint.Nominee;
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
                FileSaver.saveAs(blob, "FormV.pdf");
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
            if (claimType == ClaimConstants.Death) {
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
            .getBenefitConfigurationDetails(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthFamilyBenefitConfigDetails = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getEducationBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationBenefitConfigDetails = data;
        });
    };
    ClaimEntryNomineeComponent.prototype.getDeathBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Education)
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
        ViewChild('lgModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryNomineeComponent.prototype, "lgModal", void 0);
    __decorate([
        ViewChild('packageModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryNomineeComponent.prototype, "packageModal", void 0);
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryNomineeComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimEntryNomineeComponent.prototype, "pdfModal", void 0);
    ClaimEntryNomineeComponent = __decorate([
        Component({
            selector: 'app-claim-entry-nominee',
            templateUrl: './claim-entry-nominee.component.html',
            styleUrls: ['./claim-entry-nominee.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimNomineeDataService])
    ], ClaimEntryNomineeComponent);
    return ClaimEntryNomineeComponent;
}());
export { ClaimEntryNomineeComponent };
//# sourceMappingURL=claim-entry-nominee.component.js.map