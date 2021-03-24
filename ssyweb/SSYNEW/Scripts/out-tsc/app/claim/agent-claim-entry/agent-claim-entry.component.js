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
import { Router, ActivatedRoute } from '@angular/router';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, UserType, PFStatusMaster } from '../pipes/constnts.model';
import { UserService } from '../../UserService';
import { ClaimDataService } from '../services/claim-data.service';
import * as FileSaver from 'file-saver';
var AgentClaimEntryComponent = /** @class */ (function () {
    function AgentClaimEntryComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.claimId = 0;
        this.claimStatus = 0;
        this.viewuploadNonMarriage = false;
        this.viewPf = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewEducation = false;
        this.viewDisability = false;
        this.viewDateOfFirstAppointment = false;
        this.viewDateOfAdmit = false;
        this.viewMetWithAnAccident = false;
        this.viewFamily = false;
        this.viewSelf = false;
        this.viewLOEAmount = false;
        this.viewAccidental = false;
        this.viewEligibilityAmount = false;
        this.viewDeathFieldsAndNominee = false;
        this.viewDisabilityFieldsAndNominee = false;
        this.enableDeathEligibility = false;
        this.disableSubmitbutton = true;
        this.disabledssin = false;
        this.disableEducationCheckbox = false;
        this.disableHealthCheckbox = false;
        this.claim = {};
        this.educationDetails = {};
        this.educationDetailsArray = [];
        this.hospitalizationLov = [];
        this.healthtypeofClaim = [];
        this.healthConfig = [];
        this.pfConfig = [];
        this.deathConfig = [];
        this.disabilityConfig = [];
        this.educationConfig = [];
        this.configConfig = [];
        this.lastExampassed = [];
        this.reasonForApply = [];
        this.beneficiary = {};
        this.benficiaryFamily = [];
        this.benficiaryChildren = [];
        this.benficiaryNominee = [];
        this.hospotalList = [];
        this.maxHelathClaimLimitExceeded = false;
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
        this.educationCheck = true;
        this.uploadselfattestedValid = true;
        this.uploadNonMarriageValid = true;
        this.uploadCertificatetValid = true;
        this.uplaodmain = true;
        this.reasonForApplyValid = true;
        this.ssinReq = true;
        this.eduCount = 0;
        this.rowIndex = -1;
        this.totalHealthClaimAmount = 0;
        this.typeOfAilmentClaimedAmount = 0;
        this.surgeryClaimedAmount = 0;
        this.lossOfEmploymentAmount = 0;
        this.rowEligibleAmount = 0;
        this.validateDependent = false;
        this.noDependents = false;
        this.benficiaryInactive = false;
        this.disableDischarge = true;
        this.minAppointmentDate = new Date(new Date().getTime() - (60 * 24 * 60 * 60 * 1000));
        this.mode = "";
        this.educertificates = [];
        this.eduNonMarriage = [];
        this.eduSelfAttested = [];
        this.mainUploadList = [];
        this.healthOriginalVoucher = {};
        this.healthSelfAttached = {};
        this.healthDischargeCertificate = {};
        this.healthExpensesSheet = {};
        this.healthAttachmentList = [];
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
        this.viewNameOfClinicalTest = false;
        this.healthCondolationCertificate = {};
        this.reasonForHealthDelayValid = false;
        this.enableReasonForDelaySubmissionInHealth = false;
        this.isHealthClaimEdit = false;
        this.healthCondolationCertificateUploaded = false;
        //Button variables
        this.GenaratePdfVisible = true;
        this.SubmitVisible = true;
        this.SaveVisible = true;
        this.restrictSave = false;
        this.ClaimStatusId = 0;
        this.isVisable = true;
        this.isLOEToDate = true;
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
        this.educationClaimExceptionDetails = [];
        this.healthClaimExceptionDetails = [];
        //Disability
        this.disableDisabilityCheckbox = true;
        this.disabilityCertificate = {};
        this.disabilityAttachmentList = [];
        this.condolationCertificate = {};
        this.disabilityCertificateUploaded = false;
        this.condolationCertificateUploaded = false;
        this.dateofrelease1 = false;
        this.natureOfDisability = false;
        this.reasonForDelayValid = false;
        this.checkNatureOfDisability = true;
        this.isDeathorpermanent1 = false;
        this.isDeathorpermanent2 = false;
        this.isDeathorpermanent3 = false;
        this.enableReasonForDelaySubmission = false;
        this.isDisabilityClaimEdit = false;
        //Death
        this.disableDeathCheckbox = true;
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
        this.beneficiaryAppliedDisabilities = [];
        this.disabilityClaimExceptionDetails = [];
        this.deathClaimExceptionDetails = [];
        this.pfExsits = false;
        this.disablePFCheckbox = false;
        this.isPrematureClaim = false;
        this.pfTypeOfClaimValid = false;
        this.isPFSubmitted = false;
        this.benNomineeShareAmount = 0;
        this.viewNomineeShare = false;
        this.disablePFTypeOfClaim = false;
        this.reasonForPreclosureValid = false;
        this.benMaturityDate = null;
        this.pfLockingPeriod = null;
        this.isNomineesExist = true;
        this.pfClaimExceptionDetails = [];
        this.nomineeRequired = true;
        this.isBenNomineeSubmittedClaim = false;
        this.isBenNomineeSubmittedPFClaim = false;
        //deathCheckBox: boolean = false;
        //pfCheckBox: boolean = false;
        this.isEduSubmitted = false;
        this.isHFSubmitted = false;
        //healthCheckBox: boolean = false;
        //educationCheckBox: boolean = false;
        this.pfExsitsValue = false;
        this.isClaimEdit = false;
        this.clinicalTestSettings = {};
        this.nameOfClinicalTestIds = [];
        this.clinicalTestDetails = [];
        this.disabilityBenefitConfigDetails = [];
        this.healthFamilyBenefitConfigDetails = [];
        this.educationBenefitConfigDetails = [];
        this.deathBenefitConfigDetails = [];
        this.pfBenefitConfigDetails = {};
        this.isDisabledBaseOnLastExamPassed = false;
        this.marriedValid = true;
        this.isMarried = false;
        this.isDuplicateDependent = false;
        this.isBenDeath = false;
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
        this.maxDate = new Date();
        this.maxAdmitDate = new Date();
        //this.maxDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.minAppointmentDate = new Date(this.minAppointmentDate);
    }
    AgentClaimEntryComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    AgentClaimEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pfTypeOfClaimValid = this.otherHospitalValid = true; //this.disablePFCheckbox = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid = true; // this.originalVoucher =
        this.dateofrelease1 = this.natureOfDisability = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = this.reasonForDelayValid = true;
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
            _this.mode = params["mode"];
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
        //this.claim.ssin=""
        //this.claimId = 137;//params["claimId"];
        //this.claimType = ClaimConstants.Education;
        this.getDisabilityBenefitConfigurationDetails();
        this.getHealthFamilyBenefitConfigurationDetails();
        this.getPFBenefitConfigurationDetails();
        this.getEducationBenefitConfigurationDetails();
        this.getDeathBenefitConfigurationDetails();
        this.getClaimsConfiguartionDetails();
        if (this.claimId > 0) {
            this.getAllLoads();
            this.deleteClaimExceptions(this.claimId);
            this.getClaimDetailsByClaimId(this.claimId);
        }
        else {
            this.getAllLoads();
        }
    };
    AgentClaimEntryComponent.prototype.getClaimsConfiguartionDetails = function () {
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
    AgentClaimEntryComponent.prototype.getAllLoads = function () {
        this.getDeathConfiguration();
        this.getDisabIlityConfiguration();
        this.getEducationConfiguration();
        this.getHealthandFamilyConfiguration();
        this.getPfConfiguration();
        this.getHospitalization();
        this.getHealthClainFor();
        this.getHospitals();
        this.getDiseases();
        this.getClinicalTests();
        this.getLastExamPassed();
        this.getReasonForApply();
        this.getPackages();
    };
    AgentClaimEntryComponent.prototype.getDiseases = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.Diseases)
            .subscribe(function (data) {
            _this.diseasesLov = data;
        });
    };
    AgentClaimEntryComponent.prototype.getClinicalTests = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClinicalTests)
            .subscribe(function (data) {
            _this.clinicalTestLov = data;
        });
    };
    AgentClaimEntryComponent.prototype.openModel = function () {
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
    AgentClaimEntryComponent.prototype.getClaimDetailsByClaimId = function (id) {
        var _this = this;
        this.dataService
            .getClaimDetailsById(id)
            .subscribe(function (data) {
            _this.claim = data;
            _this.isClaimEdit = _this.isDisabilityClaimEdit = _this.isHealthClaimEdit = true;
            if (_this.claim != null) {
                //if (this.claimTypeString == "Education") { this.disableHealthCheckbox = true; }
                //else if (this.claimTypeString == "HealthFamily") { this.disableEducationCheckbox = true; this.disableEdu = true; }
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
                    if (_this.claim.disabilityDetails != null && _this.claim.disabilityDetails.disabilityId > 0) {
                        _this.viewDisability = true;
                        if (_this.claim.disabilityDetails.dateofRelease != null) {
                            _this.claim.disabilityDetails.dateofRelease = new Date(_this.claim.disabilityDetails.dateofRelease);
                        }
                        if (_this.claim.disabilityDetails.natureOfDisability != null) {
                            _this.enableDeathEligibility = true;
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
                    _this.disableHealthCheckbox = true;
                    _this.disableEducationCheckbox = true;
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
                    _this.disableHealthCheckbox = true;
                    _this.disableEducationCheckbox = true;
                    if (_this.claim.deathDetails != null && _this.claim.deathDetails.deathId > 0) {
                        _this.viewDeath = true;
                        if (_this.claim.deathDetails.dateofDeath != null) {
                            _this.claim.deathDetails.dateofDeath = new Date(_this.claim.deathDetails.dateofDeath);
                        }
                        //if (this.claim.deathDetails.natureofDeath == 16) {
                        //    this.viewAccidental = true;
                        //}
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
                if (_this.claimTypeString == "Disability") {
                    _this.disableDisabilityCheckbox = true;
                    //this.disableDeathCheckbox = true;
                    _this.disableHealthCheckbox = true;
                    _this.disableEducationCheckbox = true;
                    if (_this.claim.disabilityDetails != null && _this.claim.disabilityDetails.disabilityId > 0) {
                        _this.viewDisability = true;
                        if (_this.claim.disabilityDetails.dateofRelease != null) {
                            _this.claim.disabilityDetails.dateofRelease = new Date(_this.claim.disabilityDetails.dateofRelease);
                        }
                        if (_this.claim.disabilityDetails.natureOfDisability != null) {
                            _this.enableDeathEligibility = true;
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
                //console.log(this.claim);
                //this.getBenficiaryFamilyDetails(this.claim.benSno);
                //this.getBenficiaryEduCount(this.claim.benSno);
                _this.ssin = _this.claim.ssin;
                _this.searchSSINNo(_this.claim.ssin);
            }
        });
    };
    AgentClaimEntryComponent.prototype.getBeneficiaryAppliedDisabilities = function (id, claimId) {
        var _this = this;
        this.dataService
            .getBeneficiaryAppliedDisabilities(id, claimId)
            .subscribe(function (data) {
            _this.beneficiaryAppliedDisabilities = data;
        });
    };
    AgentClaimEntryComponent.prototype.changeCertificate = function (inputValue, type) {
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
    AgentClaimEntryComponent.prototype.removeUploadCertificates = function (edu, type) {
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
    AgentClaimEntryComponent.prototype.showChildModal = function () {
        this.lgModal.show();
    };
    AgentClaimEntryComponent.prototype.hideChildModal = function () {
        this.lgModal.hide();
    };
    AgentClaimEntryComponent.prototype.pfChange = function (eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
            if (this.pfExsitsValue == false) {
                if (this.claim.reasonForApply != 16) {
                    this.validatePfSubmit(this.ssin.trim(), 0, eve);
                }
                else
                    this.validatePfSubmit(this.ssin.trim(), this.claim.nomineeId, eve);
            }
            else {
                this.viewPf = false;
                eve.target.checked = false;
                this.disablePFCheckbox = true;
                this.pfExsits = true;
            }
            //if (this.claim.reasonForApply == 16) {
            //    this.validatePfSubmit(this.ssin.trim(), this.claim.nomineeId, eve);
            //    //this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, this.claim.nomineeId, ClaimConstants.PF, eve);
            //}
            //else {
            //    this.pfCode();
            //}
        }
        else {
            this.viewPf = false;
            eve.target.checked = false;
            this.disablePFCheckbox = true;
            this.pfExsits = true;
        }
    };
    AgentClaimEntryComponent.prototype.pfCode = function () {
        var _this = this;
        var share = 0;
        //this.pfCheckBox = !this.viewPf;
        this.viewPf = !this.viewPf;
        if (this.viewPf) { //this.viewDeathFieldsAndNominee = true && 
            //16-On Death of Beneficiary
            if (this.claim.reasonForApply == 16) {
                this.viewNomineeShare = true;
                if (this.benficiaryNominee != null && this.benficiaryNominee != undefined) {
                    share = this.benficiaryNominee.find(function (n) { return n.benNomineeSno == _this.claim.nomineeId; }).benNomineeSharePercentage;
                    if (this.benficiaryNominee.length == 1) {
                        if (share == 0) {
                            share = 100;
                        }
                    }
                    if (this.pfClaimAmount != undefined && this.pfClaimAmount != null && this.pfClaimAmount > 0)
                        this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
                }
                this.claim.providentFundDetails.typeOfClaim = PFTypeOfClaim.FinalPayment;
                this.disablePFTypeOfClaim = true;
            }
        }
    };
    AgentClaimEntryComponent.prototype.healthChange = function (eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        if (this.claim.reasonForApply == 16) {
            this.getNomineeClaimEntryValidation(this.beneficiary.benSno, ClaimConstants.HealthFamily, eve);
        }
        else {
            this.healthCode();
        }
    };
    AgentClaimEntryComponent.prototype.healthCode = function () {
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        this.restrictSave = false;
        this.viewEducation = false;
        this.disableEdu = false;
        this.noDependents = false;
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    };
    AgentClaimEntryComponent.prototype.deathChange = function (eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, this.claim.nomineeId, ClaimConstants.Death, eve);
    };
    AgentClaimEntryComponent.prototype.disabilityChangeEvent = function (eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        this.viewDisability = !this.viewDisability;
    };
    AgentClaimEntryComponent.prototype.educationChange = function (eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        if (this.claim.reasonForApply == 16) {
            this.getNomineeClaimEntryValidation(this.beneficiary.benSno, ClaimConstants.Education, eve);
        }
        else {
            this.educationCode(eve);
        }
    };
    AgentClaimEntryComponent.prototype.educationCode = function (eve) {
        if (this.eduCount >= 2 && this.claimId == 0) {
            this.disableEdu = true;
            this.maxLimitExceeded = true;
            this.restrictSave = true;
            this.viewEducation = false;
            //this.viewHealth = false;
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
            //this.viewHealth = false;
            return;
        }
        this.viewEducation = eve.target.checked;
        this.validateDependent = false;
    };
    AgentClaimEntryComponent.prototype.disabilityChange = function (id) {
        var _this = this;
        if (id != 0) {
            this.enableDeathEligibility = true;
            var data = this.disabilityConfig.find(function (x) { return x.claimConfigId == id; });
            this.disableEligibility = data.annualLimit;
            this.natureOfDisabilityName = data.claimConfigOptionName;
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
            this.enableDeathEligibility = false;
            this.disableEligibility = 0;
        }
    };
    AgentClaimEntryComponent.prototype.getPfBalance = function (benSno) {
        var _this = this;
        this.pfExsitsValue = false;
        this.dataService
            .getPfBalance(benSno)
            .subscribe(function (data) {
            _this.pfBalanceDetails = data;
            if (_this.pfBalanceDetails != null && _this.pfBalanceDetails != undefined) {
                if (_this.pfBalanceDetails.code == "000") {
                    //this.viewPf = !this.viewPf;
                    //claim amount=   balance + cantribution +( (Contribution/25 ) * 30)
                    _this.pfClaimAmount = _this.pfBalanceDetails.balance + _this.pfBalanceDetails.contribution + ((_this.pfBalanceDetails.contribution / 25) * 30);
                    //this.pfLockingPeriodDate = this.pfBalanceDetails.lockingPeriodDate;
                    _this.pfAccountStatus = _this.pfBalanceDetails.accountStatus;
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
                    //this.pfExsits = false;
                    _this.pfExsitsValue = false;
                }
                else {
                    //
                    //this.disablePFCheckbox = false;
                    _this.pfExsitsValue = true;
                    //this.pfExsits = true;
                    //this.viewPf = false;
                }
            }
            //if (this.pfExsits == false) {
            //    this.validatePfSubmit(this.ssin.trim(), 0);
            //}
            //else {
            //    this.disablePFCheckbox = true;
            //}
        });
    };
    AgentClaimEntryComponent.prototype.pfTypeOfClaimChange = function (eve) {
        if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
            this.isPrematureClaim = true;
            this.reasonForPreclosureValid = true;
        }
        else {
            this.isPrematureClaim = false;
        }
    };
    AgentClaimEntryComponent.prototype.typeOfClaimChange = function (eve) {
        if (this.claim.healthFamilyDetails.typeOfClaim == 5) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 1;
        }
        else if (this.claim.healthFamilyDetails.typeOfClaim == 0) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 0;
        }
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno, this.claim.healthFamilyDetails.typeOfClaim);
        this.hospitalizationChange(eve);
    };
    AgentClaimEntryComponent.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
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
    AgentClaimEntryComponent.prototype.hospitalChange = function (eve) {
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
    AgentClaimEntryComponent.prototype.hospitalizationChange = function (eve) {
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
    AgentClaimEntryComponent.prototype.nameOfDiseaseChange = function (eve) {
        this.viewNameOfClinicalTest = this.disableCost = false;
        if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
            this.viewNameOfClinicalTest = true;
        }
        else {
            this.viewNameOfClinicalTest = false;
            this.claim.healthFamilyDetails.nameOfClinicalTest = undefined;
        }
    };
    AgentClaimEntryComponent.prototype.claimForChange = function (eve) {
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
    AgentClaimEntryComponent.prototype.natureOfDeathChange = function (natureOfDeathData) {
        this.viewAccidental = this.viewEligibilityAmount = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            var data = this.deathConfig.find(function (x) { return x.claimConfigId == natureOfDeathData; });
            this.viewEligibilityAmount = true;
            this.deathEligibility = data.annualLimit;
            this.natureofDeathName = data.claimConfigOptionName;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = true;
        }
    };
    AgentClaimEntryComponent.prototype.selectDependent = function (args) {
        var _this = this;
        var data = this.benficiaryFamily.find(function (x) { return x.benFamilyMemSno == args.target.value; });
        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId, this.claim.reasonForApply == 16 ? false : true)
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
                    //    return;
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
    AgentClaimEntryComponent.prototype.selectLastExamPassed = function (args, education) {
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
    AgentClaimEntryComponent.prototype.selectPresentlyReading = function (args, education) {
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
    AgentClaimEntryComponent.prototype.reasonForApplyChange = function (mode) {
        this.isRegistrationNo = false;
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isBenDeath = false;
        this.disablePFCheckbox = this.disableHealthCheckbox = this.disableEducationCheckbox = false;
        //this.disablePFCheckbox = this.disableHealthCheckbox = this.disableDisabilityCheckbox = this.disableDeathCheckbox = this.disableEducationCheckbox = true;
        this.viewDisability = false;
        this.viewDeath = false;
        this.viewPf = false;
        this.viewHealth = false;
        this.viewEducation = false;
        this.viewDeathFieldsAndNominee = false;
        this.claim.healthFamilyDetails.claimFor = 0;
        this.isNomineesExist = true;
        //16-On Death of Beneficiary / On Request of Nominee
        //17-On Disability of Beneficiary
        //18-On Request of Beneficiary
        if (mode == 16) {
            this.isBenDeath = false;
            this.disableDisabilityCheckbox = true;
            this.disableDeathCheckbox = false;
            this.viewDeathFieldsAndNominee = true;
            if (this.ssin != undefined && this.ssin.trim() != "" && this.beneficiary != null) {
                this.getBeneficiaryNomineeDetails(this.beneficiary.benSno);
                if (this.benficiaryNominee.length == 0)
                    this.isNomineesExist = false;
                else
                    this.isNomineesExist = true;
            }
            //this.getNomineeClaimEntryValidation(this.beneficiary.benSno);
        }
        else {
            if (this.beneficiary != null && this.beneficiary.benDeathStatus == 1) {
                this.isBenDeath = true;
                this.disableDeathCheckbox = true;
                this.disableEducationCheckbox = true;
                this.disableDisabilityCheckbox = true;
                this.disableHealthCheckbox = true;
                this.disablePFCheckbox = true;
            }
            else {
                if (this.claim.reasonForApply == 17) {
                    this.disableEducationCheckbox = true;
                    this.disableHealthCheckbox = true;
                    this.disablePFCheckbox = true;
                }
                this.disableDeathCheckbox = true;
                this.disableDisabilityCheckbox = false;
                this.isBenNomineeClaimSubmitted(this.beneficiary.benSno);
            }
        }
        if (mode == 16 || mode == 17) {
            this.claim.healthFamilyDetails.claimFor = 5;
        }
        this.claimForChange(null);
    };
    AgentClaimEntryComponent.prototype.nomineeChange = function (nomineeSno) {
        //this.validatePfSubmit(this.ssin.trim(), nomineeSno);
        this.claim.nomineeId = nomineeSno;
        if (this.benficiaryNominee.length > 0) {
            var nominee = this.benficiaryNominee.find(function (x) { return x.benNomineeSno == nomineeSno; });
            if (nominee != null) {
                this.claim.nomineeName = nominee.benNomineeName;
                this.claim.nomineeBankAccount = nominee.benNomineeBankAccNo;
                this.claim.nomineeIFSCCode = nominee.benNomineeBankIfscCode;
            }
        }
    };
    AgentClaimEntryComponent.prototype.chkAccidentChange = function (args, value) {
        if (value == true) {
            this.claim.healthFamilyDetails.claimFor = 5;
        }
        else {
            this.claim.healthFamilyDetails.claimFor = 0;
        }
        this.claimForChange(args);
    };
    AgentClaimEntryComponent.prototype.validateEducationDetails = function (details) {
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
    AgentClaimEntryComponent.prototype.addEducationDetails = function (details) {
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
                var eduBenefit = this.educationBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "MaxLimitExceeded" /* MaxLimitExceeded */.toString(); });
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
    AgentClaimEntryComponent.prototype.editEducationDetails = function (details) {
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
    AgentClaimEntryComponent.prototype.removeEducationDetails = function (details) {
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
    AgentClaimEntryComponent.prototype.getHospitalization = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.Hospitalization)
            .subscribe(function (data) {
            _this.hospitalizationLov = data;
        });
    };
    AgentClaimEntryComponent.prototype.getHealthClainFor = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ClaimFor)
            .subscribe(function (data) {
            _this.healthtypeofClaim = data;
        });
    };
    AgentClaimEntryComponent.prototype.getLastExamPassed = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.LastExamPassed)
            .subscribe(function (data) {
            _this.lastExampassed = data;
        });
    };
    AgentClaimEntryComponent.prototype.getReasonForApply = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ReasonForApply)
            .subscribe(function (data) {
            _this.reasonForApply = data;
        });
    };
    AgentClaimEntryComponent.prototype.getPfConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.PF)
            .subscribe(function (data) {
            _this.pfConfig = data;
        });
    };
    AgentClaimEntryComponent.prototype.getHealthandFamilyConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthConfig = data;
        });
    };
    AgentClaimEntryComponent.prototype.getEducationConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationConfig = data;
            _this.dataService.eduConfig = data;
        });
    };
    AgentClaimEntryComponent.prototype.getDeathConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Death)
            .subscribe(function (data) {
            _this.deathConfig = data;
        });
    };
    AgentClaimEntryComponent.prototype.getDisabIlityConfiguration = function () {
        var _this = this;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Disability)
            .subscribe(function (data) {
            _this.disabilityConfig = data;
        });
    };
    AgentClaimEntryComponent.prototype.searchSSINNo = function (ssnNo) {
        var _this = this;
        this.benficiaryNominee = [];
        this.pfExsits = this.isPFSubmitted = this.isCAFUpdated = false;
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        if (this.claimId <= 0) {
            this.viewDisability = false;
            this.viewDeath = false;
            this.viewPf = false;
        }
        // this.viewDeathFieldsAndNominee = false;
        //this.viewDisability = this.viewDeath = this.disableDisabilityCheckbox = this.disableDeathCheckbox = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            if (confirm("Are you sure to proceed ")) {
                debugger;
                if (this.viewDeathFieldsAndNominee) {
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
                                        _this.ssin = _this.beneficiary.ssI_Number;
                                        _this.disabledssin = true;
                                        _this.benficiaryInactive = false;
                                        _this.getBenficiaryFamilyDetails(_this.beneficiary.benSno);
                                        _this.getBenficiaryFamilyDetailsByHealth(_this.beneficiary.benSno);
                                        _this.getBenficiaryEduCount(_this.beneficiary.benSno);
                                        _this.getBeneficiaryNomineeDetails(_this.beneficiary.benSno);
                                        debugger;
                                        _this.getBeneficiaryAppliedDisabilities(_this.beneficiary.benSno, _this.claimId);
                                        if (_this.beneficiary.benPFStatus != null && _this.beneficiary.benPFStatus == 1) {
                                            _this.dataService.getBeneficiaryPFAccountDetails(_this.beneficiary.benSno).subscribe(function (data1) {
                                                debugger;
                                                _this.beneficiaryPFAccountDetails = data1;
                                                if (_this.beneficiaryPFAccountDetails != null && (_this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && _this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                    if (_this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || _this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                                        _this.getPfBalance(_this.beneficiary.benSno);
                                                    }
                                                    else
                                                        alert("Your Pf Account is closed/Inactive");
                                                }
                                                else
                                                    alert("No pf details available for this given SSIN number");
                                            });
                                        }
                                        debugger;
                                        if (_this.claim.reasonForApply == 16) {
                                            _this.isBenDeath = false;
                                            _this.disableDisabilityCheckbox = true;
                                            _this.disableDeathCheckbox = false;
                                            _this.viewDeathFieldsAndNominee = true;
                                        }
                                        else {
                                            if (_this.beneficiary != null && _this.beneficiary.benDeathStatus == 1) {
                                                _this.isBenDeath = true;
                                                _this.disableDeathCheckbox = true;
                                                _this.disableEducationCheckbox = true;
                                                _this.disableDisabilityCheckbox = true;
                                                _this.disableHealthCheckbox = true;
                                                _this.disablePFCheckbox = true;
                                            }
                                            else {
                                                if (_this.claim.reasonForApply == 17) {
                                                    _this.disableEducationCheckbox = true;
                                                    _this.disableHealthCheckbox = true;
                                                    _this.disablePFCheckbox = true;
                                                }
                                                _this.disableDeathCheckbox = true;
                                                _this.disableDisabilityCheckbox = false;
                                                _this.isBenNomineeClaimSubmitted(_this.beneficiary.benSno);
                                            }
                                        }
                                    }
                                    else {
                                        _this.benficiaryInactive = true;
                                        _this.restrictSave = true;
                                        _this.viewEducation = false;
                                        _this.disableEdu = true;
                                    }
                                }
                                else
                                    _this.isCAFUpdated = true;
                                console.log(_this.beneficiary);
                            });
                        }
                    });
                }
                else {
                    if (!this.isCAFUpdated) {
                        this.dataService
                            .getBeneficiaryBasicDetailsByNo(ssnNo.trim(), this.isRegistrationNo)
                            .subscribe(function (data) {
                            _this.beneficiary = data;
                            if (_this.beneficiary != null) {
                                if (_this.beneficiary.isActive) {
                                    _this.disabledssin = true;
                                    _this.benficiaryInactive = false;
                                    _this.getBenficiaryFamilyDetails(_this.beneficiary.benSno);
                                    _this.getBenficiaryFamilyDetailsByHealth(_this.beneficiary.benSno);
                                    _this.getBenficiaryEduCount(_this.beneficiary.benSno);
                                    _this.getBeneficiaryNomineeDetails(_this.beneficiary.benSno);
                                    debugger;
                                    _this.getBeneficiaryAppliedDisabilities(_this.beneficiary.benSno, _this.claimId);
                                    if (_this.beneficiary.benPFStatus != null && _this.beneficiary.benPFStatus == 1) {
                                        _this.dataService.getBeneficiaryPFAccountDetails(_this.beneficiary.benSno).subscribe(function (data1) {
                                            debugger;
                                            _this.beneficiaryPFAccountDetails = data1;
                                            if (_this.beneficiaryPFAccountDetails != null && (_this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && _this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                if (_this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || _this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                                    _this.getPfBalance(_this.beneficiary.benSno);
                                                }
                                                else
                                                    alert("Your Pf Account is closed/Inactive");
                                            }
                                            else
                                                alert("No pf details available for this given SSIN number");
                                        });
                                    }
                                    //-----------------
                                    //16-On Death of Beneficiary / On Request of Nominee
                                    //17-On Disability of Beneficiary
                                    //18-On Request of Beneficiary
                                    debugger;
                                    if (_this.claim.reasonForApply == 16) {
                                        _this.isBenDeath = false;
                                        _this.disableDisabilityCheckbox = true;
                                        _this.disableDeathCheckbox = false;
                                        _this.viewDeathFieldsAndNominee = true;
                                    }
                                    else {
                                        if (_this.beneficiary != null && _this.beneficiary.benDeathStatus == 1) {
                                            _this.isBenDeath = true;
                                            _this.disableDeathCheckbox = true;
                                            _this.disableEducationCheckbox = true;
                                            _this.disableDisabilityCheckbox = true;
                                            _this.disableHealthCheckbox = true;
                                            _this.disablePFCheckbox = true;
                                        }
                                        else {
                                            if (_this.claim.reasonForApply == 17) {
                                                _this.disableEducationCheckbox = true;
                                                _this.disableHealthCheckbox = true;
                                                _this.disablePFCheckbox = true;
                                            }
                                            _this.disableDeathCheckbox = true;
                                            _this.disableDisabilityCheckbox = false;
                                            _this.isBenNomineeClaimSubmitted(_this.beneficiary.benSno);
                                        }
                                    }
                                    //------=====================
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
                    }
                }
            }
        }
        else {
            this.beneficiary = {};
            this.viewEducation = false;
        }
    };
    AgentClaimEntryComponent.prototype.getHospitals = function () {
        var _this = this;
        this.dataService
            .getAllHospitals()
            .subscribe(function (data) {
            _this.hospotalList = data;
            console.log(_this.hospotalList);
        });
    };
    AgentClaimEntryComponent.prototype.getBenficiaryEduCount = function (id) {
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
                        //if (this.eduCount >= 2 && this.claimId == 0) {
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
    AgentClaimEntryComponent.prototype.getBenficiaryFamilyDetailsByHealth = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.benficiaryFamilybyHealth = data;
        });
    };
    AgentClaimEntryComponent.prototype.getBenficiaryFamilyDetails = function (id, type) {
        var _this = this;
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.Education)
            .subscribe(function (data) {
            _this.benficiaryChildren = data;
            _this.benficiaryFamily = data;
        });
    };
    AgentClaimEntryComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            _this.benficiaryNominee = data;
            if (_this.benficiaryNominee.length == 0)
                _this.isNomineesExist = false;
            else
                _this.isNomineesExist = true;
        });
    };
    AgentClaimEntryComponent.prototype.validateHealthData = function (claimData, id) {
        var isValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true; //this.originalVoucher =
        this.isClaimEffectiveDate = false;
        if (id == 1) {
            if (this.beneficiary.benSno == undefined) {
                this.ssinReq = isValid = false;
            }
            return isValid;
        }
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
        if (this.claim.healthFamilyDetails.claimFor == undefined || this.claim.healthFamilyDetails.claimFor == 0) {
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
    AgentClaimEntryComponent.prototype.validateClaimsData = function (claimData, id) {
        var isValid = true;
        this.ssinReq = this.reasonForApplyValid = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.nomineeRequired = true;
        if (id == 1) {
            if (this.beneficiary.benSno == undefined) {
                this.ssinReq = isValid = false;
            }
            return isValid;
        }
        if (this.claim.reasonForApply <= 0 || this.claim.reasonForApply == undefined) {
            this.reasonForApplyValid = isValid = false;
        }
        // Death of Beneficiary
        if (this.claim.reasonForApply == 16) {
            if (this.claim.nomineeId <= 0 || this.claim.nomineeId == undefined) {
                this.nomineeRequired = isValid = false;
            }
        }
        if (this.beneficiary.benSno == undefined) {
            this.ssinReq = isValid = false;
        }
        if (id == 2) {
            if (this.mainUpload == undefined) {
                this.uplaodmain = isValid = false;
            }
        }
        return isValid;
    };
    AgentClaimEntryComponent.prototype.validateDisabilityData = function (claimData, id) {
        var _this = this;
        var isValid = true;
        this.natureOfDisability = this.dateofrelease1 = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
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
            this.dateofrelease1 = isValid = false;
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
        if (this.claim.disabilityDetails.dateofRelease != undefined) {
            if (this.claim.disabilityDetails.dateofRelease < new Date(this.disabilityClaimEffectiveDate)) {
                this.claimEffectiveDate = this.disabilityClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        return isValid;
    };
    AgentClaimEntryComponent.prototype.validateDeathData = function (claimData, id) {
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
    AgentClaimEntryComponent.prototype.validatePFData = function (claimData, id) {
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
                debugger;
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
        else if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.FinalPayment && this.claim.reasonForApply != 16) //FinalPayment and Not Death of Benficiary
         {
            if (this.pfBenefitConfigDetails != null) {
                //final payment  - age > 60 
                debugger;
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
    AgentClaimEntryComponent.prototype.validatePfSubmit = function (ssiNumber, nomineeId, eve) {
        var _this = this;
        var share = 0;
        if (nomineeId > 0) {
            this.dataService
                .validatePfSubmit(ssiNumber, 0)
                .subscribe(function (data) {
                _this.isPFSubmitted = data;
                if (_this.isPFSubmitted) {
                    _this.viewPf = false;
                    eve.target.checked = false;
                    _this.disablePFCheckbox = true;
                    _this.pfExsits = true;
                }
                else {
                    _this.dataService
                        .validatePfSubmit(ssiNumber, nomineeId)
                        .subscribe(function (data) {
                        _this.isPFSubmitted = data;
                        if (_this.isPFSubmitted) {
                            _this.viewPf = false;
                            eve.target.checked = false;
                            _this.disablePFCheckbox = true;
                            _this.pfExsits = true;
                        }
                        else {
                            _this.pfCode();
                        }
                        //else {
                        //    
                        //    this.disablePFCheckbox = false;
                        //    if (this.viewPf && nomineeId > 0) {
                        //        //16-On Death of Beneficiary
                        //        if (this.claim.reasonForApply == 16) {
                        //            this.viewNomineeShare = true;
                        //            if (this.benficiaryNominee != null && this.benficiaryNominee != undefined) {
                        //                share = this.benficiaryNominee.find(n => n.benNomineeSno == this.claim.nomineeId).benNomineeSharePercentage;
                        //                if (this.benficiaryNominee.length == 1) {
                        //                    if (share == 0) {
                        //                        share = 100;
                        //                    }
                        //                }
                        //                if (this.pfClaimAmount != undefined && this.pfClaimAmount != null && this.pfClaimAmount > 0)
                        //                    this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
                        //            }
                        //            this.claim.providentFundDetails.typeOfClaim = PFTypeOfClaim.FinalPayment;
                        //            this.disablePFTypeOfClaim = true;
                        //        }
                        //        //else {
                        //        //    this.pfCode();
                        //        //}
                        //    }
                        //}
                    });
                }
            });
        }
        else {
            this.dataService
                .validatePfSubmit(ssiNumber, nomineeId)
                .subscribe(function (data) {
                _this.isPFSubmitted = data;
                if (_this.isPFSubmitted) {
                    _this.viewPf = false;
                    eve.target.checked = false;
                    _this.disablePFCheckbox = true;
                    _this.pfExsits = true;
                }
                else {
                    _this.pfCode();
                }
                //else {
                //    this.disablePFCheckbox = false;
                //    if (this.viewPf && nomineeId > 0) {
                //        //16-On Death of Beneficiary
                //        if (this.claim.reasonForApply == 16) {
                //            this.viewNomineeShare = true;
                //            if (this.benficiaryNominee != null && this.benficiaryNominee != undefined) {
                //                share = this.benficiaryNominee.find(n => n.benNomineeSno == this.claim.nomineeId).benNomineeSharePercentage;
                //                if (this.benficiaryNominee.length == 1) {
                //                    if (share == 0) {
                //                        share = 100;
                //                    }
                //                }
                //                if (this.pfClaimAmount != undefined && this.pfClaimAmount != null && this.pfClaimAmount > 0)
                //                    this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
                //            }
                //            this.claim.providentFundDetails.typeOfClaim = PFTypeOfClaim.FinalPayment;
                //            this.disablePFTypeOfClaim = true;
                //        }
                //        else {
                //            this.pfCode();
                //        }
                //    }
                //}
            });
        }
    };
    AgentClaimEntryComponent.prototype.okClick = function () {
        //this.successModal.hide();
        if (this.mode == "draft") {
            window.location.href = "agent/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "agent/claims";
        }
        else if (this.mode == "referal") {
            window.location.href = "agent/agentreferral";
        }
        else {
            window.location.href = "agent/claims";
        }
    };
    AgentClaimEntryComponent.prototype.cancleClick = function () {
        if (this.mode == "draft") {
            window.location.href = "agent/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "agent/claims";
        }
        else if (this.mode == "referal") {
            window.location.href = "agent/agentreferral";
        }
        else {
            window.location.href = "agent/claims";
        }
    };
    AgentClaimEntryComponent.prototype.downLoadPdf = function (claimData, type) {
        var _this = this;
        if (!this.viewPf) {
            this.claim.providentFundDetails = null;
        }
        if (!this.viewDeath) {
            this.claim.deathDetails = null;
        }
        else {
            claimData.deathDetails.natureofDeathName = this.natureofDeathName;
            claimData.deathDetails.claimAmount = this.deathEligibility;
        }
        if (!this.viewDisability) {
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
        if (this.user.user.userTpe == UserType.CA.toString())
            claimData.entryPoint = EntryPoint.CA;
        else if (this.user.user.userTpe == UserType.Lwfc.toString())
            claimData.entryPoint = EntryPoint.Lwfc;
        else
            claimData.entryPoint = EntryPoint.Agent;
        //claimData.entryPoint = EntryPoint.Agent;
        if (claimData.reasonForApply == 16)
            this.claim.onBehalfBen = false;
        else
            this.claim.onBehalfBen = true;
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
    AgentClaimEntryComponent.prototype.GenaratePdf = function (claimData, type) {
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
        if (this.viewDisability) {
            if (!this.validateDisabilityData(claimData, type)) {
                //return;
                isValid = false;
            }
        }
        if (this.viewDeath) {
            if (!this.validateDeathData(claimData, type)) {
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
    AgentClaimEntryComponent.prototype.saveClaimsData = function (claimData, type) {
        var _this = this;
        var isValid = true;
        var hasNomineeShare = true;
        this.validateDependent = false;
        if (type != 1) {
            if (this.viewHealth) {
                if (!this.validateHealthData(claimData, type)) {
                    //return;
                    isValid = false;
                }
            }
            if (this.viewDisability) {
                if (!this.validateDisabilityData(claimData, type)) {
                    //return;
                    isValid = false;
                }
            }
            if (this.viewDeath) {
                if (!this.validateDeathData(claimData, type)) {
                    //return;
                    isValid = false;
                }
            }
            if (this.viewPf) {
                if (!this.validatePFData(claimData, type)) {
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
                    //return
                    this.educationCheck = isValid = false;
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
            var attachedList = [];
            if (!this.viewPf) {
                this.claim.providentFundDetails = null;
            }
            if (!this.viewDeath) {
                this.claim.deathDetails = null;
            }
            if (!this.viewDisability) {
                this.claim.disabilityDetails = null;
            }
            if (!this.viewHealth) {
                this.claim.healthFamilyDetails = null;
            }
            if (!this.viewEducation) {
                this.claim.educationDetails = null;
            }
            // this.mainUploadList.push(this.mainUpload);
            this.claim.benSno = this.beneficiary.benSno;
            if (this.mainUpload != undefined) {
                // claimData.attachment.push(this.mainUpload);
                this.mainUploadList.push(this.mainUpload);
            }
            claimData.attachment = this.mainUploadList;
            this.claim.benSno = this.beneficiary.benSno;
            claimData.ssin = this.beneficiary.ssI_Number;
            if (this.user.user.userTpe == UserType.CA.toString())
                claimData.entryPoint = EntryPoint.CA;
            else if (this.user.user.userTpe == UserType.Lwfc.toString())
                claimData.entryPoint = EntryPoint.Lwfc;
            else
                claimData.entryPoint = EntryPoint.Agent;
            if (this.claim.educationDetails != null) {
                if (this.educationDetailsArray.length > 0) {
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
                                        var exp = {};
                                        exp.exceptionText = "Student (Dependent) " + data.benDependentName + " admission date exceeding 90 days";
                                        exp.exceptionCapturedDate = new Date();
                                        exp.raisedBy = this.user.user.deptUserid;
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
                                            exp.raisedBy = this.user.user.deptUserid;
                                            this.educationClaimExceptionDetails.push(exp);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // claimData.educationDetails.educationClaimExceptionDetails = this.educationClaimExceptionDetails;
                }
                else
                    claimData.educationDetails.educationDetailList = null;
                //claimData.educationDetails.attachmentDetailsList = attachedList;
                claimData.educationDetails.claimType = ClaimConstants.Education;
                claimData.educationDetails.statusId = this.ClaimStatusId;
                claimData.educationDetails.CreatedBy = this.user.user.deptUserid;
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
                                exp.raisedBy = this.user.user.deptUserid;
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
                                // if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                var exp = {};
                                exp.exceptionText = "Discharge date exceeding 60 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = this.user.user.deptUserid;
                                this.healthClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
                // claimData.healthFamilyDetails.healthClaimExceptionDetails = this.healthClaimExceptionDetails;
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
                claimData.healthFamilyDetails.createdBy = this.user.user.deptUserid;
                if (!this.isOtherHospital) {
                    claimData.healthFamilyDetails.otherHospital == undefined;
                }
                else {
                    var exp = {};
                    exp.exceptionText = "Application has been submitted with a non listed hospital";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.user.user.deptUserid;
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
                    //claimData.healthFamilyDetails.nameOfClinicalTest == undefined;
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
            if (this.claim.reasonForApply == 16 || this.claim.reasonForApply == 17) {
                if (this.benficiaryNominee != null && this.benficiaryNominee.length > 0) {
                    for (var i = 0; i < this.benficiaryNominee.length; i++) {
                        if ((this.benficiaryNominee[i].benNomineeBankAccNo == null || this.benficiaryNominee[i].benNomineeBankAccNo == undefined) && (this.benficiaryNominee[i].benNomineeBankIfscCode == null || this.benficiaryNominee[i].benNomineeBankIfscCode == undefined)) {
                            var exp = {};
                            exp.exceptionText = "bank details does not exists for nominee";
                            exp.exceptionCapturedDate = new Date();
                            exp.raisedBy = this.user.user.deptUserid;
                            this.educationClaimExceptionDetails.push(exp);
                            this.healthClaimExceptionDetails.push(exp);
                        }
                    }
                    //Nominee Details
                    var nominee = this.benficiaryNominee.find(function (x) { return x.benNomineeSno == claimData.nomineeId; });
                    if (nominee != null) {
                        claimData.nomineeName = nominee.benNomineeName;
                        //claimData.nomineeContact
                        claimData.nomineeDOB = nominee.dob;
                        claimData.nomineeBankAccount = nominee.benNomineeBankAccNo;
                        claimData.nomineeIFSCCode = nominee.benNomineeBankIfscCode;
                        claimData.nomineeRelationwithBen = nominee.relationshipID;
                    }
                }
            }
            if (this.claim.disabilityDetails != null) {
                this.disabilityClaimExceptionDetails = [];
                claimData.disabilityDetails.claimType = ClaimConstants.Disability;
                claimData.disabilityDetails.statusId = this.ClaimStatusId;
                claimData.disabilityDetails.createdBy = this.user.user.deptUserid;
                claimData.disabilityDetails.claimAmount = this.disableEligibility;
                this.disabilityAttachmentList.push(this.disabilityCertificate);
                if (this.enableReasonForDelaySubmission) {
                    this.disabilityAttachmentList.push(this.condolationCertificate);
                }
                claimData.disabilityDetails.attachmentDTOList = this.disabilityAttachmentList;
                //Disability Exceptions
                //Exception Rule - Selected Other Nature Of Disability
                //let data = this.beneficiaryAppliedDisabilities.find(x => x == this.claim.disabilityDetails.natureOfDisability);
                //if (data == undefined) {
                if (this.beneficiaryAppliedDisabilities.length > 0) {
                    var exp = {};
                    exp.exceptionText = "Beneficiary applied another nature of disability";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.user.user.deptUserid;
                    this.disabilityClaimExceptionDetails.push(exp);
                    //alert("Claim has been already submitted with this nature of disability");
                    //return;
                }
                //Exception Rule - if(Currentdate-dateofRelease >90)
                if (this.claim.disabilityDetails.dateofRelease != null && this.claim.disabilityDetails.dateofRelease != undefined) {
                    var date1 = new Date(this.claim.disabilityDetails.dateofRelease);
                    var date2 = new Date(Date.now());
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    if (this.disabilityBenefitConfigDetails != null && this.disabilityBenefitConfigDetails.length > 0) {
                        var disBenefit = this.disabilityBenefitConfigDetails.find(function (x) { return x.ruleName.toLowerCase() == "DateOfReleaseExceeding" /* DateOfReleaseExceeding */.toLowerCase(); });
                        if (disBenefit != null) {
                            var cond = eval(diffDays + disBenefit.logic + disBenefit.value);
                            if (cond) {
                                //if (diffDays > 90) {
                                var exp = {};
                                exp.exceptionText = "Date of release from hospital/Accident date exceeding 90 days";
                                exp.exceptionCapturedDate = new Date();
                                exp.raisedBy = this.user.user.deptUserid;
                                this.disabilityClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
            }
            if (this.claim.deathDetails != null) {
                this.deathClaimExceptionDetails = [];
                claimData.deathDetails.claimType = ClaimConstants.Death;
                claimData.deathDetails.statusId = this.ClaimStatusId;
                claimData.deathDetails.createdBy = this.user.user.deptUserid;
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
                                exp.raisedBy = this.user.user.deptUserid;
                                this.deathClaimExceptionDetails.push(exp);
                            }
                        }
                    }
                }
            }
            if (this.claim.providentFundDetails != null) {
                //claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                claimData.providentFundDetails.claimType = ClaimConstants.PF;
                claimData.providentFundDetails.statusId = this.ClaimStatusId;
                claimData.providentFundDetails.createdBy = this.user.user.deptUserid;
                claimData.providentFundDetails.nomineeId = this.claim.nomineeId;
                claimData.providentFundDetails.maturityDate = this.benMaturityDate;
                claimData.providentFundDetails.lockingPeriodDate = this.pfLockingPeriod;
                if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                    claimData.providentFundDetails.pFNO = this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO;
                }
                else {
                    claimData.providentFundDetails.pFNO = this.beneficiary.regNumber;
                }
                if (this.claim.reasonForApply == 16) {
                    //share = this.benficiaryNominee.find(n => n.benNomineeSno == this.claim.nomineeId).benNomineeSharePercentage;
                    //if(share == 0)
                    claimData.providentFundDetails.claimAmount = this.benNomineeShareAmount;
                }
                else
                    claimData.providentFundDetails.claimAmount = this.pfClaimAmount;
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
                        exp.raisedBy = this.user.user.deptUserid;
                        this.pfClaimExceptionDetails.push(exp);
                    }
                }
            }
            //16-On Death of Beneficiary / On Request of Nominee
            //17-On Disability of Beneficiary
            //18-On Request of Beneficiary
            if (this.claim.reasonForApply == 17 || this.claim.reasonForApply == 18) {
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
                        exp.raisedBy = this.user.user.deptUserid;
                        this.healthClaimExceptionDetails.push(exp);
                        this.educationClaimExceptionDetails.push(exp);
                        this.disabilityClaimExceptionDetails.push(exp);
                        this.deathClaimExceptionDetails.push(exp);
                    }
                }
                //--------------------
                debugger;
                if ((this.beneficiary.benBankAccNo == undefined || this.beneficiary.benBankAccNo == null || this.beneficiary.benBankAccNo == "")) {
                    var exp = {};
                    exp.exceptionText = "Benificiary does not have bank account number";
                    exp.exceptionCapturedDate = new Date();
                    exp.raisedBy = this.user.user.deptUserid;
                    this.healthClaimExceptionDetails.push(exp);
                    this.educationClaimExceptionDetails.push(exp);
                    this.disabilityClaimExceptionDetails.push(exp);
                    this.deathClaimExceptionDetails.push(exp);
                    this.pfClaimExceptionDetails.push(exp);
                }
                else {
                    if (this.beneficiary.isAssignedMultiple) {
                        var exp = {};
                        exp.exceptionText = "Bank account number assigned to the multiple beneficiaries";
                        exp.exceptionCapturedDate = new Date();
                        exp.raisedBy = this.user.user.deptUserid;
                        this.healthClaimExceptionDetails.push(exp);
                        this.educationClaimExceptionDetails.push(exp);
                        this.disabilityClaimExceptionDetails.push(exp);
                        this.deathClaimExceptionDetails.push(exp);
                        this.pfClaimExceptionDetails.push(exp);
                    }
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
                if (this.claim.deathDetails != null && this.deathClaimExceptionDetails.length > 0) {
                    claimData.deathDetails.deathClaimExceptionDetails = this.deathClaimExceptionDetails;
                }
                if (this.claim.providentFundDetails != null && this.pfClaimExceptionDetails.length > 0) {
                    claimData.providentFundDetails.pfClaimExceptionDetails = this.pfClaimExceptionDetails;
                }
            }
            claimData.StatusId = this.ClaimStatusId;
            claimData.CreatedBy = this.user.user.deptUserid;
            this.saveType = type;
            this.successMessage = "";
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
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewDisability) {
                                    refNo = data.item4 + " (Disability) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewDeath) {
                                    refNo = data.item5 + " (Death) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Death) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
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
            else {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .createClaim(claimData)
                        .then(function (data) {
                        if (data) {
                            if (type == 1) {
                                _this.mode = "draft";
                                _this.successMessage = "Your claim was saved successfully";
                            }
                            else {
                                var refNo = void 0;
                                if (_this.viewHealth) {
                                    refNo = data.item2 + " (Health & Family) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewDisability) {
                                    refNo = data.item4 + " (Disability) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                }
                                if (_this.viewDeath) {
                                    refNo = data.item5 + " (Death) ";
                                    _this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Death) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
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
    AgentClaimEntryComponent.prototype.claerClaim = function () {
        this.isRegistrationNo = false;
        this.isCAFUpdated = false;
        this.isHFSubmitted = this.isEduSubmitted = this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isBenDeath = false;
        //this.deathCheckBox = this.pfCheckBox = this.healthCheckBox = this.educationCheckBox = false;
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
        this.viewDisability = false;
        this.viewPf = false;
        this.rowIndex = -1;
        this.ssin = "";
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
        this.disabilityAttachmentList = [];
        this.disabilityCertificate = {};
        this.deathAttachmentList = [];
        this.deathCertificate = {};
        this.claim.healthFamilyDetails = {};
        this.claim.educationDetails.isanyothersourceofthegovernment = false;
        this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease1 = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.condolationCertificate = {};
        this.healthCondolationCertificate = {};
        this.pfTypeOfClaimValid = true;
        this.viewDeathFieldsAndNominee = false;
        if (this.claim.claimId == undefined) {
            this.claim = {};
            this.claim.healthFamilyDetails = {};
            this.claim.educationDetails = {};
            this.claim.educationDetails.educationDetailList = [];
        }
        else {
            this.getClaimDetailsByClaimId(this.claimId);
        }
    };
    AgentClaimEntryComponent.prototype.UpdateClaimStatusIdByStatus = function (type) {
        debugger;
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
    AgentClaimEntryComponent.prototype.loeFromDateChange = function (eve) {
        //alert(this.claim.healthFamilyDetails.loeFromDate);
        this.minLOEDate = new Date(this.claim.healthFamilyDetails.loeFromDate);
        this.isLOEToDate = false;
    };
    AgentClaimEntryComponent.prototype.loeToDateChange = function (eve) {
        this.calculateLossOfEmploymentAmount();
    };
    AgentClaimEntryComponent.prototype.dateofadminchange = function (eve) {
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
    AgentClaimEntryComponent.prototype.dateofdischargechange = function (eve) {
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
    AgentClaimEntryComponent.prototype.calculateLossOfEmploymentAmount = function () {
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
    AgentClaimEntryComponent.prototype.checkAll = function (e, item) {
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
    AgentClaimEntryComponent.prototype.submitClick = function () {
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
    AgentClaimEntryComponent.prototype.checkIfAllSelected = function (item) {
    };
    AgentClaimEntryComponent.prototype.viewPackages = function () {
        this.packageModal.show();
    };
    AgentClaimEntryComponent.prototype.getPackages = function () {
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
    AgentClaimEntryComponent.prototype.isBenNomineeClaimSubmitted = function (id) {
        var _this = this;
        this.dataService
            .isBenNomineeClaimSubmitted(id)
            .subscribe(function (data) {
            _this.isBenNomineeSubmittedClaim = data;
            if (_this.isBenNomineeSubmittedClaim) {
                _this.disablePFCheckbox = _this.disableHealthCheckbox = _this.disableDisabilityCheckbox = _this.disableDeathCheckbox = _this.disableEducationCheckbox = true;
            }
        });
    };
    AgentClaimEntryComponent.prototype.isSameBenNomineeClaimSubmitted = function (id, nomineeId, claimType, eve) {
        var _this = this;
        this.dataService
            .isSameBenNomineeClaimSubmitted(id, nomineeId, claimType)
            .subscribe(function (data) {
            if (claimType == ClaimConstants.Death) {
                _this.isBenNomineeSubmittedClaim = data;
                if (_this.isBenNomineeSubmittedClaim) {
                    _this.viewDeath = false;
                    //this.deathCheckBox = false;
                    eve.target.checked = false;
                    _this.disableDeathCheckbox = true;
                }
                else {
                    //this.deathCheckBox = !this.viewDeath;
                    _this.viewDeath = !_this.viewDeath;
                }
            }
            else if (claimType == ClaimConstants.PF) {
                _this.isBenNomineeSubmittedPFClaim = data;
                if (_this.isBenNomineeSubmittedPFClaim) {
                    _this.viewPf = false;
                    //this.pfCheckBox = false;
                    eve.target.checked = false;
                    _this.disablePFCheckbox = true;
                }
                else {
                    _this.pfCode();
                }
            }
        });
    };
    AgentClaimEntryComponent.prototype.getNomineeClaimEntryValidation = function (id, claimType, eve) {
        var _this = this;
        this.dataService
            .getNomineeClaimEntryValidation(id)
            .subscribe(function (data) {
            if (data) {
                var healthCount = data.item1;
                var eduCount = data.item2;
                //health Check box
                if (claimType == ClaimConstants.HealthFamily) {
                    if (healthCount > 0) {
                        _this.isHFSubmitted = false;
                        _this.disableHealthCheckbox = false;
                        _this.healthCode();
                    }
                    else {
                        _this.isHFSubmitted = true;
                        _this.disableHealthCheckbox = true;
                        //this.healthCheckBox = false;
                        eve.target.checked = false;
                    }
                }
                //Education Check box
                if (claimType == ClaimConstants.Education) {
                    if (eduCount > 0) {
                        _this.isEduSubmitted = false;
                        _this.disableEducationCheckbox = false;
                        _this.educationCode(eve);
                    }
                    else {
                        _this.isEduSubmitted = true;
                        _this.disableEducationCheckbox = true;
                        //this.educationCheckBox = false;
                        eve.target.checked = false;
                    }
                }
            }
        });
    };
    AgentClaimEntryComponent.prototype.disabilityDateofReleaseChange = function (eve) {
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
                            // if (diffDays > 90) {
                            this.enableReasonForDelaySubmission = true;
                        }
                        else {
                            this.claim.disabilityDetails.reasonForDelaySubmission = null;
                            this.condolationCertificate = null;
                            this.enableReasonForDelaySubmission = false;
                        }
                    }
                }
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
    AgentClaimEntryComponent.prototype.getDisabilityBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Disability)
            .subscribe(function (data) {
            _this.disabilityBenefitConfigDetails = data;
        });
    };
    AgentClaimEntryComponent.prototype.getHealthFamilyBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.HealthFamily)
            .subscribe(function (data) {
            _this.healthFamilyBenefitConfigDetails = data;
        });
    };
    AgentClaimEntryComponent.prototype.getEducationBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.educationBenefitConfigDetails = data;
        });
    };
    AgentClaimEntryComponent.prototype.getDeathBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getBenefitConfigurationDetails(ClaimConstants.Education)
            .subscribe(function (data) {
            _this.deathBenefitConfigDetails = data;
        });
    };
    AgentClaimEntryComponent.prototype.getPFBenefitConfigurationDetails = function () {
        var _this = this;
        this.dataService
            .getPFConfigurationDetails(0)
            .subscribe(function (data) {
            _this.pfBenefitConfigDetails = data;
        });
    };
    AgentClaimEntryComponent.prototype.deleteClaimExceptions = function (id) {
        this.dataService
            .deleteClaimExceptions(id)
            .subscribe(function (data) { });
    };
    AgentClaimEntryComponent.prototype.radioChange = function (id) {
        if (id == 1)
            this.isRegistrationNo = false;
        if (id == 2)
            this.isRegistrationNo = true;
    };
    AgentClaimEntryComponent.prototype.updateCAFDetails = function () {
        var _this = this;
        if (this.isRegistrationNo)
            window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
        else {
            this.dataService
                .getRegistrationNumber(this.ssin)
                .subscribe(function (data) {
                debugger;
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
    ], AgentClaimEntryComponent.prototype, "lgModal", void 0);
    __decorate([
        ViewChild('packageModal'),
        __metadata("design:type", ModalDirective)
    ], AgentClaimEntryComponent.prototype, "packageModal", void 0);
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AgentClaimEntryComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], AgentClaimEntryComponent.prototype, "pdfModal", void 0);
    AgentClaimEntryComponent = __decorate([
        Component({
            selector: 'app-agent-claim-entry',
            templateUrl: './agent-claim-entry.component.html',
            styleUrls: ['./agent-claim-entry.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], AgentClaimEntryComponent);
    return AgentClaimEntryComponent;
}());
export { AgentClaimEntryComponent };
//# sourceMappingURL=agent-claim-entry.component.js.map