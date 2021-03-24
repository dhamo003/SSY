import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimModel } from '../models/claim.model';
import { HealthFamilyModel, HealthFamilyPackageModel } from "../models/health-and-family.model";
import { EducationHdrModel, EducationDetailModel } from "../models/education.model";
import { DeathModel } from '../models/death.model';
import { DisabilityModel } from '../models/disability.modl';
import { ProvidentFund } from '../models/providentfund.model';
import { ModalDirective } from "ngx-bootstrap";
import { LovDetails } from '../models/Lov.model';
import { ClaimConfig } from '../models/claimconfig.model';
import { ClaimNomineeDataService } from '../../services/claim-data.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, UserType, EducationBenefitConfiguration, HealthFamilyBenefitConfiguration, DisabilityBenefitConfiguration, DeathBenefitConfiguration, PFStatusMaster } from '../pipes/constnts.model';
import { Beneficiary } from '../models/ben.model';
import { BenFamilyMember } from '../models/ben.family.model';
import { HospitalModel } from '../models/hospital.model';
import { AttachmentModel } from '../models/attachment.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { ClaimDataService } from '../services/claim-data.service';
import { fail } from 'assert';
import { retry } from 'rxjs/operators';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import { Package } from '../../models/package.model';
import { BenNominee } from '../models/ben.nominee.model';
import * as FileSaver from 'file-saver';
import { ClaimExceptionDetailsModel } from '../../models/claimExceptionDetails';
import { PFBalanceDetails } from '../../models/pfBalanceDetails';
import { stream } from 'xlsx/types';
import { forEach } from 'typescript-collections/dist/lib/arrays';
import { ClaimTypes } from '../../models/ClaimTypes.model';
import { ClinicalTestModel } from 'src/app/models/ClinicalTest.model';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';
import { PFConfigurationModel } from 'src/app/models/pfconfiguration.model';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { ClaimConfigHdr } from '../models/claimconfighdr.model';
import { BeneficiaryPFAccountDetails } from '../models/ben.pfaccount.model';

@Component({
    selector: 'app-agent-claim-entry',
    templateUrl: './agent-claim-entry.component.html',
    styleUrls: ['./agent-claim-entry.component.css']
})
export class AgentClaimEntryComponent implements OnInit, OnDestroy {
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('packageModal') public packageModal: ModalDirective;
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('pdfModal') public pdfModal: ModalDirective;

    route$: Subscription;
    ssin: any;
    claimId: number = 0;
    claimType: number;
    claimTypeString: any;
    claimStatus: number = 0;
    claimReference: number;
    viewuploadNonMarriage: boolean = false;
    viewPf: boolean = false;
    viewHealth: boolean = false;
    viewDeath: boolean = false;
    viewEducation: boolean = false;
    viewDisability: boolean = false;
    viewDateOfFirstAppointment: boolean = false;
    viewDateOfAdmit: boolean = false;
    viewMetWithAnAccident: boolean = false;
    viewFamily: boolean = false;
    viewSelf: boolean = false;
    viewLOEAmount: boolean = false;
    viewAccidental: boolean = false;
    viewEligibilityAmount: boolean = false;
    viewDeathFieldsAndNominee: boolean = false;
    viewDisabilityFieldsAndNominee: boolean = false;
    enableDeathEligibility: boolean = false;
    disableSubmitbutton: boolean = true;
    disabledssin: boolean = false;
    disableEducationCheckbox = false;
    disableHealthCheckbox = false;
    claim: ClaimModel = {} as ClaimModel;
    educationDetails: EducationDetailModel = {} as EducationDetailModel;
    educationDetailsArray: Array<EducationDetailModel> = [];
    hospitalizationLov: Array<LovDetails> = [];
    healthtypeofClaim: Array<LovDetails> = [];
    healthConfig: Array<ClaimConfig> = [];
    pfConfig: Array<ClaimConfig> = [];
    deathConfig: Array<ClaimConfig> = [];
    disabilityConfig: Array<ClaimConfig> = [];
    educationConfig: Array<ClaimConfig> = [];
    configConfig: Array<ClaimConfig> = [];
    lastExampassed: Array<LovDetails> = [];
    reasonForApply: Array<LovDetails> = [];
    beneficiary: Beneficiary = {} as Beneficiary;
    benficiaryFamily: Array<BenFamilyMember> = [];
    benficiaryFamilybyHealth: BenFamilyMember[];
    benficiaryChildren: Array<BenFamilyMember> = [];
    benficiaryNominee: Array<BenNominee> = [];
    hospotalList: Array<HospitalModel> = [];
    deathEligibility: any;
    disableEligibility: any;
    successMessage: string;
    maxHelathClaimLimitExceeded: boolean = false;
    //Validation Education variables
    studentNameValid: boolean = true;
    institutionNameValid: boolean = true;
    registrationNoValid: boolean = true;
    institutionContactValid: boolean = true;
    educationYearValid: boolean = true;
    dateOfAdmissionValid: boolean = true;
    presentlyReadingValid: boolean = true;
    disableEdu: boolean = false;
    maxLimitExceeded: boolean = false;
    myGroup: any;
    educationCheck: boolean = true;
    uploadselfattestedValid: boolean = true;
    uploadNonMarriageValid: boolean = true;
    uploadCertificatetValid: boolean = true;
    uplaodmain: boolean = true;
    reasonForApplyValid: boolean = true;
    ssinReq: boolean = true;
    eduCount: number = 0;
    rowIndex = -1;
    totalHealthClaimAmount = 0;
    typeOfAilmentClaimedAmount = 0
    surgeryClaimedAmount = 0
    lossOfEmploymentAmount = 0;
    rowEligibleAmount = 0;
    saveType: number;
    validateDependent: boolean = false;
    noDependents: boolean = false;
    benficiaryInactive: boolean = false;
    disableDischarge: boolean = true;
    dischargeMinDt: Date;
    minAppointmentDate = new Date(new Date().getTime() - (60 * 24 * 60 * 60 * 1000));
    mode: string = "";
    mainUpload: AttachmentModel;
    educertificates: AttachmentModel[] = [] as AttachmentModel[];
    eduNonMarriage: AttachmentModel[] = [] as AttachmentModel[];
    eduSelfAttested: AttachmentModel[] = [] as AttachmentModel[];
    mainUploadList: AttachmentModel[] = [] as AttachmentModel[];

    healthOriginalVoucher: AttachmentModel = {} as AttachmentModel;
    healthSelfAttached: AttachmentModel = {} as AttachmentModel;
    healthDischargeCertificate: AttachmentModel = {} as AttachmentModel;
    healthExpensesSheet: AttachmentModel = {} as AttachmentModel;
    healthAttachmentList: AttachmentModel[] = [] as AttachmentModel[];
    diseasesLov: LovDetails[];
    clinicalTestLov: LovDetails[];
    // health & family 
    typeOfClaimValid: boolean = false;
    hospital: boolean = false;
    hospitalization: boolean = false;
    dateofAdmin: boolean = false;
    dateofDischargeValid: boolean = false;
    claimForValid: boolean = false;
    familyMember: boolean = false;
    hospitalselfAttested: boolean = false;
    isOtherHospital: boolean = false;
    otherHospitalValid: boolean = false;
    hospotalId: number = 0;
    disableCost: boolean = true;
    //originalVoucher: boolean = false;
    dischargeCertificate: boolean = false;
    rigisterESI: boolean = false;
    dateofAppointment: boolean = false;
    loeFromDate: boolean = false;
    loeToDate: boolean = false;
    showDisCertUpload: boolean = true;
    viewNameOfClinicalTest: boolean = false;
    healthCondolationCertificate: AttachmentModel = {} as AttachmentModel;
    reasonForHealthDelayValid: boolean = false;
    enableReasonForDelaySubmissionInHealth: boolean = false;
    isHealthClaimEdit: boolean = false;
    healthCondolationCertificateUploaded: boolean = false;

    //Button variables
    GenaratePdfVisible: boolean = true;
    SubmitVisible: boolean = true;
    SaveVisible: boolean = true;
    restrictSave: boolean = false;
    ClaimStatusId: number = 0;
    isVisable: boolean = true;
    maxDate: any;
    maxAdmitDate: any;
    minDate: any;
    minLOEDate: Date;
    isLOEToDate: boolean = true;
    datePickerConfig: any;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    result: any[];
    //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    educationClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    healthClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    //Disability
    disableDisabilityCheckbox = true;
    disabilityCertificate: AttachmentModel = {} as AttachmentModel;
    disabilityAttachmentList: AttachmentModel[] = [] as AttachmentModel[];
    condolationCertificate: AttachmentModel = {} as AttachmentModel;
    disabilityCertificateUploaded: boolean = false;
    condolationCertificateUploaded: boolean = false;
    dateofrelease1: boolean = false;
    natureOfDisability: boolean = false;
    reasonForDelayValid: boolean = false;
    checkNatureOfDisability: boolean = true;
    isDeathorpermanent1: boolean = false;
    isDeathorpermanent2: boolean = false;
    isDeathorpermanent3: boolean = false;
    natureOfDisabilityName: string;
    enableReasonForDelaySubmission: boolean = false;
    isDisabilityClaimEdit: boolean = false;
    //Death
    disableDeathCheckbox = true;
    deathCertificate: AttachmentModel = {} as AttachmentModel;
    bankPassbook: AttachmentModel = {} as AttachmentModel;
    deathAttachmentList: AttachmentModel[] = [] as AttachmentModel[];
    deathCertificateUploaded: boolean = false;
    bankPassbookUploaded: boolean = false;
    dateofDeath: boolean = false;
    natureOfDeath: boolean = false;
    isDeath1: boolean = false;
    isDeath2: boolean = false;
    isDeath3: boolean = false;
    placeOfDeathValid: boolean = false;
    natureofDeathName: string;
    beneficiaryAppliedDisabilities: number[] = [] as number[];
    disabilityClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    deathClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];

    //PF
    pfBalanceDetails: PFBalanceDetails;
    pfExsits: boolean = false;
    pfClaimAmount: any;
    disablePFCheckbox = false;
    isPrematureClaim: boolean = false;
    pfTypeOfClaimValid: boolean = false;
    // pfLockingPeriodDate: string;
    pfAccountStatus: string;
    isPFSubmitted: boolean = false;
    benNomineeShareAmount: number = 0;
    viewNomineeShare: boolean = false;
    disablePFTypeOfClaim: boolean = false;
    reasonForPreclosureValid: boolean = false;
    benMaturityDate: Date = null;
    pfLockingPeriod: Date = null;
    isNomineesExist: boolean = true;
    pfClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    nomineeRequired: boolean = true;

    isBenNomineeSubmittedClaim: boolean = false;
    isBenNomineeSubmittedPFClaim: boolean = false;
    //deathCheckBox: boolean = false;
    //pfCheckBox: boolean = false;
    isEduSubmitted: boolean = false;
    isHFSubmitted: boolean = false;
    //healthCheckBox: boolean = false;
    //educationCheckBox: boolean = false;
    pfExsitsValue: boolean = false;
    isClaimEdit: boolean = false;
    clinicalTestSettings = {};
    nameOfClinicalTestIds: Array<any> = [];
    clinicalTestDetails: ClinicalTestModel[] = [] as ClinicalTestModel[];

    disabilityBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    healthFamilyBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    educationBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    deathBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    pfBenefitConfigDetails: PFConfigurationModel = {} as PFConfigurationModel;
    isDisabledBaseOnLastExamPassed: boolean = false;
    maturityDate: any;
    marriedValid: boolean = true;
    isMarried: boolean = false;
    isDuplicateDependent: boolean = false;
    isBenDeath: boolean = false;
    isRegistrationNo: boolean = false;
    isCAFUpdated: boolean = false;

    //Claims Effective Dates
    pfClaimEffectiveDate: Date = null;
    healthFamilyClaimEffectiveDate: Date = null;
    disabilityClaimEffectiveDate: Date = null;
    deathClaimEffectiveDate: Date = null;
    educationClaimEffectiveDate: Date = null;

    claimConfigHdrDetails: ClaimConfigHdr[] = [] as ClaimConfigHdr[];
    isClaimEffectiveDate: boolean = false;
    claimEffectiveDate: Date = null;

    beneficiaryPFAccountDetails: BeneficiaryPFAccountDetails = {} as BeneficiaryPFAccountDetails;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) {
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails = {} as EducationHdrModel;
        this.claim.deathDetails = {} as DeathModel;
        this.claim.disabilityDetails = {} as DisabilityModel;
        this.claim.providentFundDetails = {} as ProvidentFund;
        this.maxDate = new Date();
        this.maxAdmitDate = new Date();
        //this.maxDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        this.minAppointmentDate = new Date(this.minAppointmentDate);
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        this.pfTypeOfClaimValid = this.otherHospitalValid = true;//this.disablePFCheckbox = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid = true;// this.originalVoucher =
        this.dateofrelease1 = this.natureOfDisability = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = this.reasonForDelayValid = true;
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {

                this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
                this.mode = params["mode"];
                this.claimTypeString = params["tranctionType"];
                this.claimStatus = params["claimStatus"] != null ? Number(params["claimStatus"]) : 0;
                //if (this.claimStatus >= ClaimStatus.Submitted) {
                //    this.GenaratePdfVisible = false;
                //    this.disableSubmitbutton = false;
                //    this.SaveVisible = false;
                //}
                //else {
                //    this.claimStatus = ClaimStatus.Submitted;
                //}
            }
        );
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
            this.getAllLoads()
            this.deleteClaimExceptions(this.claimId);
            this.getClaimDetailsByClaimId(this.claimId);
        }
        else {
            this.getAllLoads();
        }

    }
    getClaimsConfiguartionDetails(): any {

        this.dataService.getClaimConfigurationMaster()
            .subscribe((data: any) => {
                this.claimConfigHdrDetails = data;
                debugger;
                if (this.claimConfigHdrDetails != null) {
                    this.pfClaimEffectiveDate = this.claimConfigHdrDetails.find(c => c.claimMasterId == 1).cliamEffectiveDate;
                    this.healthFamilyClaimEffectiveDate = this.claimConfigHdrDetails.find(c => c.claimMasterId == 2).cliamEffectiveDate;
                    this.disabilityClaimEffectiveDate = this.claimConfigHdrDetails.find(c => c.claimMasterId == 3).cliamEffectiveDate;
                    this.deathClaimEffectiveDate = this.claimConfigHdrDetails.find(c => c.claimMasterId == 4).cliamEffectiveDate;
                    this.educationClaimEffectiveDate = this.claimConfigHdrDetails.find(c => c.claimMasterId == 5).cliamEffectiveDate;
                }
            });
    }
    getAllLoads() {
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
    }
    getDiseases() {
        this.dataService
            .getlovDetails(LovConstants.Diseases)
            .subscribe((data: any) => {
                this.diseasesLov = data;
            });
    }
    getClinicalTests() {
        this.dataService
            .getlovDetails(LovConstants.ClinicalTests)
            .subscribe((data: any) => {
                this.clinicalTestLov = data;
            });
    }
    openModel() {
        this.isDuplicateDependent = false;
        this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = this.marriedValid = true;
        this.uploadCertificatetValid = this.uploadselfattestedValid = true;
        this.rowIndex = -1;
        this.rowEligibleAmount = 0;
        this.eduSelfAttested = [] as AttachmentModel[];
        this.educertificates = [] as AttachmentModel[];
        this.eduNonMarriage = [] as AttachmentModel[];
        this.educationDetails = {} as EducationDetailModel;
        this.educationDetails.year = new Date().getFullYear();
        this.lgModal.show();
    }
    getClaimDetailsByClaimId(id: any) {
        this.dataService
            .getClaimDetailsById(id)
            .subscribe((data: any) => {
                this.claim = data;
                this.isClaimEdit = this.isDisabilityClaimEdit = this.isHealthClaimEdit = true;
                if (this.claim != null) {
                    //if (this.claimTypeString == "Education") { this.disableHealthCheckbox = true; }
                    //else if (this.claimTypeString == "HealthFamily") { this.disableEducationCheckbox = true; this.disableEdu = true; }
                    if (this.claimTypeString == undefined || this.claimTypeString == null) {
                        if (this.claim.educationDetails != null && this.claim.educationDetails.educationHdrId > 0) {
                            this.viewEducation = true;
                            if (this.claim.educationDetails.educationDetailList != null && this.claim.educationDetails.educationDetailList.length > 0) {
                                this.educationDetailsArray = this.claim.educationDetails.educationDetailList;
                                this.rowIndex = this.rowIndex + this.educationDetailsArray.length;
                                if (this.educationDetailsArray != null && this.educationDetailsArray.length > 0) {
                                    for (var i = 0; i < this.educationDetailsArray.length; i++) {
                                        if (this.educationDetailsArray[i].presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                            this.viewuploadNonMarriage = true;
                                        }
                                        else {
                                            this.viewuploadNonMarriage = false;
                                        }
                                        if (this.educationDetailsArray[i].lastExamPassedName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                            this.isDisabledBaseOnLastExamPassed = true;
                                            this.viewuploadNonMarriage = true;
                                        }
                                        else {
                                            this.isDisabledBaseOnLastExamPassed = false;
                                            this.viewuploadNonMarriage = false;
                                        }
                                        //Duplicate Dependent
                                        if (this.educationDetailsArray[i].isDuplicate) {
                                            //const data1 = this.benficiaryFamily.find(x => x.benFamilyMemSno == this.educationDetailsArray[i].dependentId);
                                            //var stringMsg = "Already this Dependent " + data1.benDependentName + " has submitted for this year please select another dependent";
                                            this.isDuplicateDependent = true;
                                            //alert("Already claim has submitted for this dependent in this year please select another dependent");
                                            //                    isValid = false;
                                        }
                                    }
                                }
                            }
                        }
                        if (this.claim.healthFamilyDetails != null && this.claim.healthFamilyDetails.healthFamilyId > 0) {
                            this.viewHealth = true;
                            if (this.claim.healthFamilyDetails.hospitalId != null && this.claim.healthFamilyDetails.hospitalId != undefined && this.claim.healthFamilyDetails.otherHospital != undefined && this.claim.healthFamilyDetails.otherHospital != null) {
                                this.isOtherHospital = true;
                                this.hospotalId = this.claim.healthFamilyDetails.hospitalId;
                            }
                            if (this.claim.healthFamilyDetails.claimFor === 5) {
                                this.viewSelf = true;
                            }
                            else if (this.claim.healthFamilyDetails.claimFor === 6) {
                                this.viewFamily = true;
                            }
                            if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                this.viewDateOfAdmit = true;
                                this.disableCost = false;
                                if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                            }
                            else if (this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                this.viewDateOfFirstAppointment = true;
                                this.showDisCertUpload = false;
                                if (this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                                    this.disableCost = false;
                                    if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                                        this.viewNameOfClinicalTest = true;
                                        if (this.claim.healthFamilyDetails.clinicalTestDetails != null && this.claim.healthFamilyDetails.clinicalTestDetails.length > 0) {
                                            if (this.clinicalTestLov != null && this.clinicalTestLov.length > 0) {
                                                const selectedClinicalTestDetails = Object.assign([], this.clinicalTestLov);
                                                const deletedClinicalTestDetails = Object.assign([], this.clinicalTestLov);

                                                for (var i = 0; i < this.claim.healthFamilyDetails.clinicalTestDetails.length; i++) {
                                                    var t = this.claim.healthFamilyDetails.clinicalTestDetails[i].clinicalTest;
                                                    var s = this.clinicalTestLov.filter(x => x.lovDtlId == t);

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
                                                this.nameOfClinicalTestIds = selectedClinicalTestDetails;
                                            }
                                        }
                                    }
                                }
                            }
                            if (this.claim.healthFamilyDetails.admittedDate != null && this.claim.healthFamilyDetails.admittedDate != undefined)
                                this.claim.healthFamilyDetails.admittedDate = new Date(this.claim.healthFamilyDetails.admittedDate);
                            if (this.claim.healthFamilyDetails.dischargeDate != null && this.claim.healthFamilyDetails.dischargeDate != undefined)
                                this.claim.healthFamilyDetails.dischargeDate = new Date(this.claim.healthFamilyDetails.dischargeDate);

                            if (this.claim.healthFamilyDetails.firstAppointmentDate != null) {
                                this.claim.healthFamilyDetails.firstAppointmentDate = new Date(this.claim.healthFamilyDetails.firstAppointmentDate);
                            }
                            this.claim.healthFamilyDetails.attachmentDTOList.forEach((eachObj) => {
                                if (eachObj.attachmentType === AttachmentType.OriginalVouchers) {
                                    this.healthOriginalVoucher = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.DischargeCertificate) {
                                    this.healthDischargeCertificate = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.DoctorPrescription) {
                                    this.healthSelfAttached = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.ExpensesSheet) {
                                    this.healthExpensesSheet = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                                    this.healthCondolationCertificate = eachObj;
                                }
                            });

                            let data = this.claim.healthFamilyDetails.healthFamilyPackages;
                            for (var i = 0; i < data.length; i++) {
                                this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
                            }
                            this.selectedPackages = this.packages.filter(x => x.isChecked == true);
                            var groups = new Set(this.packages.map(item => item.ailmentName));
                            this.result = [];
                            groups.forEach(g =>
                                this.result.push({
                                    name: g,
                                    values: this.packages.filter(i => i.ailmentName === g)
                                }
                                ))
                        }
                        if (this.claim.deathDetails != null && this.claim.deathDetails.deathId > 0) {
                            this.viewDeath = true;
                            if (this.claim.deathDetails.dateofDeath != null) {
                                this.claim.deathDetails.dateofDeath = new Date(this.claim.deathDetails.dateofDeath);
                            }
                            if (this.claim.deathDetails.natureofDeath > 0) {
                                this.deathEligibility = this.claim.deathDetails.claimAmount;
                                this.viewEligibilityAmount = true;

                                if (this.claim.deathDetails.natureofDeath == 16) {
                                    this.viewAccidental = true;
                                }
                            }
                            this.claim.deathDetails.attachmentDTOList.forEach((eachObj) => {

                                if (eachObj.attachmentType === AttachmentType.DeathCertificate) {
                                    this.deathCertificate = eachObj;
                                }

                                if (eachObj.attachmentType === AttachmentType.FirstPageofBankPassbook) {
                                    this.bankPassbook = eachObj;
                                }

                            });
                        }
                        if (this.claim.disabilityDetails != null && this.claim.disabilityDetails.disabilityId > 0) {
                            this.viewDisability = true;
                            if (this.claim.disabilityDetails.dateofRelease != null) {
                                this.claim.disabilityDetails.dateofRelease = new Date(this.claim.disabilityDetails.dateofRelease);
                            }
                            if (this.claim.disabilityDetails.natureOfDisability != null) {
                                this.enableDeathEligibility = true;
                                this.disableEligibility = this.claim.disabilityDetails.claimAmount;
                            }
                            this.claim.disabilityDetails.attachmentDTOList.forEach((eachObj) => {

                                if (eachObj.attachmentType === AttachmentType.DisabilityCertificate) {
                                    this.disabilityCertificate = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                                    this.condolationCertificate = eachObj;
                                }
                            });
                        }
                        if (this.claim.providentFundDetails != null && this.claim.providentFundDetails.pfId > 0) {

                            this.viewPf = true;
                            if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                                this.isPrematureClaim = true;
                            }
                        }
                    }
                    if (this.claimTypeString == "Education") {
                        this.disableHealthCheckbox = true;
                        this.disableEducationCheckbox = true;
                        if (this.claim.educationDetails != null && this.claim.educationDetails.educationHdrId > 0) {
                            this.viewEducation = true;
                            if (this.claim.educationDetails.educationDetailList != null && this.claim.educationDetails.educationDetailList.length > 0) {
                                this.educationDetailsArray = this.claim.educationDetails.educationDetailList;
                                this.rowIndex = this.rowIndex + this.educationDetailsArray.length;
                                if (this.educationDetailsArray != null && this.educationDetailsArray.length > 0) {
                                    for (var i = 0; i < this.educationDetailsArray.length; i++) {
                                        if (this.educationDetailsArray[i].presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                            this.viewuploadNonMarriage = true;
                                        }
                                        else {
                                            this.viewuploadNonMarriage = false;
                                        }
                                        debugger;
                                        if (this.educationDetailsArray[i].lastExamPassedName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") {
                                            this.isDisabledBaseOnLastExamPassed = true;
                                            this.viewuploadNonMarriage = true;
                                        }
                                        else {
                                            this.isDisabledBaseOnLastExamPassed = false;
                                            this.viewuploadNonMarriage = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (this.claimTypeString == "HealthFamily") {
                        this.disableHealthCheckbox = true;
                        this.disableEducationCheckbox = true;
                        if (this.claim.healthFamilyDetails != null && this.claim.healthFamilyDetails.healthFamilyId > 0) {
                            this.viewHealth = true;
                            if (this.claim.healthFamilyDetails.claimFor === 5) {
                                this.viewSelf = true;
                            }
                            else if (this.claim.healthFamilyDetails.claimFor === 6) {
                                this.viewFamily = true;
                            }
                            if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                this.viewDateOfAdmit = true;
                                this.disableCost = false;
                                if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                            }
                            else if (this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                this.viewDateOfFirstAppointment = true;
                                this.showDisCertUpload = false;
                                if (this.claim.healthFamilyDetails.nameOfTheDisease != null) {
                                    this.disableCost = false;
                                    if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
                                        this.viewNameOfClinicalTest = true;
                                        if (this.claim.healthFamilyDetails.clinicalTestDetails != null && this.claim.healthFamilyDetails.clinicalTestDetails.length > 0) {
                                            if (this.clinicalTestLov != null && this.clinicalTestLov.length > 0) {
                                                const selectedClinicalTestDetails = Object.assign([], this.clinicalTestLov);
                                                const deletedClinicalTestDetails = Object.assign([], this.clinicalTestLov);

                                                for (var i = 0; i < this.claim.healthFamilyDetails.clinicalTestDetails.length; i++) {
                                                    var t = this.claim.healthFamilyDetails.clinicalTestDetails[i].clinicalTest;
                                                    var s = this.clinicalTestLov.filter(x => x.lovDtlId == t);

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
                                                this.nameOfClinicalTestIds = selectedClinicalTestDetails;
                                            }
                                        }
                                    }
                                }
                            }
                            if (this.claim.healthFamilyDetails.admittedDate != null && this.claim.healthFamilyDetails.admittedDate != undefined)
                                this.claim.healthFamilyDetails.admittedDate = new Date(this.claim.healthFamilyDetails.admittedDate);
                            if (this.claim.healthFamilyDetails.dischargeDate != null && this.claim.healthFamilyDetails.dischargeDate != undefined)
                                this.claim.healthFamilyDetails.dischargeDate = new Date(this.claim.healthFamilyDetails.dischargeDate);

                            if (this.claim.healthFamilyDetails.firstAppointmentDate != null) {
                                this.claim.healthFamilyDetails.firstAppointmentDate = new Date(this.claim.healthFamilyDetails.firstAppointmentDate);
                            }
                            this.claim.healthFamilyDetails.attachmentDTOList.forEach((eachObj) => {
                                if (eachObj.attachmentType === AttachmentType.OriginalVouchers) {
                                    this.healthOriginalVoucher = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.DischargeCertificate) {
                                    this.healthDischargeCertificate = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.DoctorPrescription) {
                                    this.healthSelfAttached = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.ExpensesSheet) {
                                    this.healthExpensesSheet = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                                    this.healthCondolationCertificate = eachObj;
                                }
                            });

                            let data = this.claim.healthFamilyDetails.healthFamilyPackages;
                            for (var i = 0; i < data.length; i++) {
                                this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
                            }
                            this.selectedPackages = this.packages.filter(x => x.isChecked == true);
                            var groups = new Set(this.packages.map(item => item.ailmentName));
                            this.result = [];
                            groups.forEach(g =>
                                this.result.push({
                                    name: g,
                                    values: this.packages.filter(i => i.ailmentName === g)
                                }
                                ))
                        }
                    }
                    if (this.claimTypeString == "Death") {
                        this.disableDeathCheckbox = true;
                        this.disableHealthCheckbox = true;
                        this.disableEducationCheckbox = true;
                        if (this.claim.deathDetails != null && this.claim.deathDetails.deathId > 0) {
                            this.viewDeath = true;
                            if (this.claim.deathDetails.dateofDeath != null) {
                                this.claim.deathDetails.dateofDeath = new Date(this.claim.deathDetails.dateofDeath);
                            }
                            //if (this.claim.deathDetails.natureofDeath == 16) {
                            //    this.viewAccidental = true;
                            //}
                            if (this.claim.deathDetails.natureofDeath > 0) {
                                this.deathEligibility = this.claim.deathDetails.claimAmount;
                                this.viewEligibilityAmount = true;

                                if (this.claim.deathDetails.natureofDeath == 16) {
                                    this.viewAccidental = true;
                                }
                            }
                            this.claim.deathDetails.attachmentDTOList.forEach((eachObj) => {

                                if (eachObj.attachmentType === AttachmentType.DeathCertificate) {
                                    this.deathCertificate = eachObj;
                                }
                                if (eachObj.attachmentType === AttachmentType.FirstPageofBankPassbook) {
                                    this.bankPassbook = eachObj;
                                }
                            });
                        }
                    }
                    if (this.claimTypeString == "Disability") {
                        this.disableDisabilityCheckbox = true;
                        //this.disableDeathCheckbox = true;
                        this.disableHealthCheckbox = true;
                        this.disableEducationCheckbox = true;
                        if (this.claim.disabilityDetails != null && this.claim.disabilityDetails.disabilityId > 0) {
                            this.viewDisability = true;
                            if (this.claim.disabilityDetails.dateofRelease != null) {
                                this.claim.disabilityDetails.dateofRelease = new Date(this.claim.disabilityDetails.dateofRelease);
                            }
                            if (this.claim.disabilityDetails.natureOfDisability != null) {
                                this.enableDeathEligibility = true;
                                this.disableEligibility = this.claim.disabilityDetails.claimAmount;
                            }
                        }
                        this.claim.disabilityDetails.attachmentDTOList.forEach((eachObj) => {

                            if (eachObj.attachmentType === AttachmentType.DisabilityCertificate) {
                                this.disabilityCertificate = eachObj;
                            }
                            if (eachObj.attachmentType === AttachmentType.Condolationcertificate) {
                                this.condolationCertificate = eachObj;
                            }
                        });
                    }
                    if (this.claimTypeString == "PF") {
                        if (this.claim.providentFundDetails != null && this.claim.providentFundDetails.pfId > 0) {
                            this.viewPf = true;
                            if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                                this.isPrematureClaim = true;
                            }
                        }
                    }
                    if (this.claim.attachment != null && this.claim.attachment.length > 0) {
                        this.mainUpload = this.claim.attachment[0];
                    }

                    //  this.mainUpload = this.claim.attachment[0];
                    //console.log(this.claim);
                    //this.getBenficiaryFamilyDetails(this.claim.benSno);
                    //this.getBenficiaryEduCount(this.claim.benSno);
                    this.ssin = this.claim.ssin;
                    this.searchSSINNo(this.claim.ssin);
                }
            });
    }
    getBeneficiaryAppliedDisabilities(id: any, claimId: any) {
        this.dataService
            .getBeneficiaryAppliedDisabilities(id, claimId)
            .subscribe((data: any) => {
                this.beneficiaryAppliedDisabilities = data;

            });
    }

    changeCertificate(inputValue: any, type): void {
        var file: File = inputValue.target.files[0];
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
            };
            var myReader: FileReader = new FileReader();
            myReader.onloadend = (e) => {
                const model: AttachmentModel = {} as AttachmentModel;
                model.fileName = file.name;
                model.filePath = "test";
                model.fileContent = myReader.result.toString().split(',')[1];
                model.statusId = ClaimStatus.Submitted;

                switch (type) {

                    case "certificate":
                        model.attachmentType = AttachmentType.Scholarship;
                        model.claimType = ClaimConstants.Education;
                        this.educertificates.push(model);
                        break;
                    case "nonMarriage":
                        model.attachmentType = AttachmentType.NonMarriage;
                        model.claimType = ClaimConstants.Education;
                        this.eduNonMarriage.push(model);
                        break;
                    case "selfAttest":
                        model.attachmentType = AttachmentType.PassingExamCertificate;
                        model.claimType = ClaimConstants.Education;
                        this.eduSelfAttested.push(model);
                        break;
                    case "dischargeCertificate":
                        model.attachmentType = AttachmentType.DischargeCertificate;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthDischargeCertificate = model;
                        break;
                    case "originalVoucher":
                        model.attachmentType = AttachmentType.OriginalVouchers;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthOriginalVoucher = model
                        break;
                    case "healthselfAttest":
                        model.attachmentType = AttachmentType.DoctorPrescription;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthSelfAttached = model;
                        break;
                    case "main":
                        model.attachmentType = AttachmentType.FormV;
                        model.claimType = null;
                        this.mainUpload = model;
                        break;
                    case "disablityCertificate":
                        model.attachmentType = AttachmentType.DisabilityCertificate;
                        model.claimType = ClaimConstants.Disability;
                        this.disabilityCertificate = model;
                        break;
                    case "deathCertificate":
                        model.attachmentType = AttachmentType.DeathCertificate;
                        model.claimType = ClaimConstants.Death;
                        this.deathCertificate = model;
                        break;
                    case "healthExpensesSheet":
                        model.attachmentType = AttachmentType.ExpensesSheet;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthExpensesSheet = model;
                        break;
                    case "bankPassbook":
                        model.attachmentType = AttachmentType.FirstPageofBankPassbook;
                        model.claimType = ClaimConstants.Death;
                        this.bankPassbook = model;
                        break;
                    case "condolationCertificate":
                        model.attachmentType = AttachmentType.Condolationcertificate;
                        model.claimType = ClaimConstants.Disability;
                        this.condolationCertificate = model;
                        break;
                    case "healthCondolationCertificate":
                        model.attachmentType = AttachmentType.Condolationcertificate;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthCondolationCertificate = model;
                        break;
                }

            }
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    }

    removeUploadCertificates(edu, type) {
        if (type == "certificate") {
            const index: number = this.educertificates.indexOf(edu);
            if (index !== -1) {
                this.educertificates.splice(index, 1);
            }
        }
        if (type == "nonMarriage") {
            const index: number = this.eduNonMarriage.indexOf(edu);
            if (index !== -1) {
                this.eduNonMarriage.splice(index, 1);
            }
        }
        if (type == "selfAttest") {
            const index: number = this.eduSelfAttested.indexOf(edu);
            if (index !== -1) {
                this.eduSelfAttested.splice(index, 1);
            }
        }
    }

    public showChildModal(): void {
        this.lgModal.show();
    }

    public hideChildModal(): void {
        this.lgModal.hide();
    }
    pfChange(eve) {

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
    }
    pfCode() {
        let share = 0;
        //this.pfCheckBox = !this.viewPf;
        this.viewPf = !this.viewPf;
        if (this.viewPf) {//this.viewDeathFieldsAndNominee = true && 
            //16-On Death of Beneficiary
            if (this.claim.reasonForApply == 16) {
                this.viewNomineeShare = true;
                if (this.benficiaryNominee != null && this.benficiaryNominee != undefined) {
                    share = this.benficiaryNominee.find(n => n.benNomineeSno == this.claim.nomineeId).benNomineeSharePercentage;
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
    }
    healthChange(eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        if (this.claim.reasonForApply == 16) {
            this.getNomineeClaimEntryValidation(this.beneficiary.benSno, ClaimConstants.HealthFamily, eve);
        }
        else {
            this.healthCode();
        }
    }
    healthCode() {
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        this.restrictSave = false; this.viewEducation = false; this.disableEdu = false; this.noDependents = false;
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    }

    deathChange(eve) {

        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, this.claim.nomineeId, ClaimConstants.Death, eve);

    }
    disabilityChangeEvent(eve) {

        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        this.viewDisability = !this.viewDisability;
    }
    educationChange(eve) {
        this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isHFSubmitted = this.isEduSubmitted = this.isPFSubmitted = this.maxLimitExceeded = this.maxHelathClaimLimitExceeded = this.pfExsits = false;
        if (this.claim.reasonForApply == 16) {
            this.getNomineeClaimEntryValidation(this.beneficiary.benSno, ClaimConstants.Education, eve);
        }
        else {
            this.educationCode(eve);
        }
    }
    educationCode(eve) {
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
            this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true;
            this.viewEducation = false;
            eve.target.checked = false;
            //this.viewHealth = false;
            return;
        }
        this.viewEducation = eve.target.checked;
        this.validateDependent = false;
    }
    disabilityChange(id: any) {

        if (id != 0) {
            this.enableDeathEligibility = true;
            let data = this.disabilityConfig.find(x => x.claimConfigId == id);
            this.disableEligibility = data.annualLimit;
            this.natureOfDisabilityName = data.claimConfigOptionName;

            let data1 = this.beneficiaryAppliedDisabilities.find(x => x == this.claim.disabilityDetails.natureOfDisability);
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
    }
    getPfBalance(benSno: any) {
        this.pfExsitsValue = false;
        this.dataService
            .getPfBalance(benSno)
            .subscribe((data: any) => {
                this.pfBalanceDetails = data;

                if (this.pfBalanceDetails != null && this.pfBalanceDetails != undefined) {
                    if (this.pfBalanceDetails.code == "000") {
                        //this.viewPf = !this.viewPf;
                        //claim amount=   balance + cantribution +( (Contribution/25 ) * 30)
                        this.pfClaimAmount = this.pfBalanceDetails.balance + this.pfBalanceDetails.contribution + ((this.pfBalanceDetails.contribution / 25) * 30);
                        //this.pfLockingPeriodDate = this.pfBalanceDetails.lockingPeriodDate;
                        this.pfAccountStatus = this.pfBalanceDetails.accountStatus;

                        if (this.pfBenefitConfigDetails != null) {
                            var date = new Date(this.beneficiary.benDob);
                            //this.benMaturityDate = new Date(date.getFullYear() + 60, date.getMonth(), date.getDate());
                            this.benMaturityDate = new Date(date.getFullYear() + this.pfBenefitConfigDetails.maturityAge, date.getMonth(), date.getDate());
                            //pf Locking Period 3 year
                            if (this.beneficiary.benRegDate != null) {
                                var lockingDate = new Date(this.beneficiary.benRegDate);
                                //this.pfLockingPeriod = new Date(lockingDate.getFullYear() + 3, lockingDate.getMonth(), lockingDate.getDate());
                                this.pfLockingPeriod = new Date(lockingDate.getFullYear(), lockingDate.getMonth() + this.pfBenefitConfigDetails.pfLockingPeriodMonths, lockingDate.getDate());
                            }
                        }
                        //this.pfExsits = false;
                        this.pfExsitsValue = false;
                    }
                    else {
                        //
                        //this.disablePFCheckbox = false;
                        this.pfExsitsValue = true;
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
    }
    pfTypeOfClaimChange(eve) {

        if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
            this.isPrematureClaim = true;
            this.reasonForPreclosureValid = true;
        }
        else {
            this.isPrematureClaim = false;
        }
    }
    typeOfClaimChange(eve) {
        if (this.claim.healthFamilyDetails.typeOfClaim == 5) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 1;
        }
        else if (this.claim.healthFamilyDetails.typeOfClaim == 0) {
            this.claim.healthFamilyDetails.typeOfHospitalization = 0;
        }
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno, this.claim.healthFamilyDetails.typeOfClaim);
        this.hospitalizationChange(eve);
    }
    getBeneficiaryHealthClaimAmount(benSno: any, typeOfClaim?: any) {
        this.maxHelathClaimLimitExceeded = false;
        this.dataService
            .getBeneficiaryHealthClaimAmount(benSno, typeOfClaim)
            .subscribe((data: any) => {
                let maxEligibleAmount: number = 0;
                if (typeOfClaim != 0) {
                    if (typeOfClaim == 4) { maxEligibleAmount = HealthClaimEligibility.TreatmentOfAilment; this.typeOfAilmentClaimedAmount = data; }
                    else { maxEligibleAmount = HealthClaimEligibility.Surgery; this.surgeryClaimedAmount = data; }
                    if (data >= maxEligibleAmount) {
                        alert("Maximum claim limit has been reached for the selected claim type.");
                        this.claim.healthFamilyDetails.typeOfClaim = 0;
                        return;
                    }
                }
                else {
                    this.totalHealthClaimAmount = data;
                    maxEligibleAmount = HealthClaimEligibility.TreatmentOfAilment + HealthClaimEligibility.Surgery;
                    if (this.totalHealthClaimAmount >= maxEligibleAmount) {
                        this.viewHealth = false;
                        this.maxHelathClaimLimitExceeded = true;
                    }
                }
            });
    }
    hospitalChange(eve) {

        if (this.hospotalList.length > 0) {
            var hos = this.hospotalList.find(x => x.hospitalId == eve);
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
    }
    hospitalizationChange(eve) {
        this.viewDateOfFirstAppointment = this.viewDateOfAdmit = this.viewMetWithAnAccident = this.viewNameOfClinicalTest = false;
        this.showDisCertUpload = this.disableCost = true;
        if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
            this.viewDateOfAdmit = true;
            this.disableCost = false;
            if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }

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
    }
    nameOfDiseaseChange(eve) {
        this.viewNameOfClinicalTest = this.disableCost = false;
        if (this.claim.healthFamilyDetails.nameOfTheDisease == 56) {
            this.viewNameOfClinicalTest = true;
        }
        else {
            this.viewNameOfClinicalTest = false;
            this.claim.healthFamilyDetails.nameOfClinicalTest = undefined;
        }
    }

    claimForChange(eve) {
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
    }
    natureOfDeathChange(natureOfDeathData) {
        this.viewAccidental = this.viewEligibilityAmount = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            const data = this.deathConfig.find(x => x.claimConfigId == natureOfDeathData);
            this.viewEligibilityAmount = true; this.deathEligibility = data.annualLimit;
            this.natureofDeathName = data.claimConfigOptionName;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = true;
        }
    }
    selectDependent(args) {
        const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == args.target.value);
        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId, this.claim.reasonForApply == 16? false:true)
            .subscribe((data1: any) => {
                debugger;
                if (!data1) {
                    //--------------
                    if (this.educationDetailsArray.findIndex(x => x.dependentId == args.target.value) != -1 && this.rowIndex == -1) {
                        alert("already added please select another dependent"); this.educationDetails.dependentId = 0; return;
                    }

                    if (data.benDependentRelation.toLowerCase() == "daughter") {
                        this.isMarried = this.marriedValid = true;
                        this.getEducationConfiguration();
                        this.getLastExamPassed();
                    }
                    else if (data.benDependentRelation.toLowerCase() == "son") {
                        this.educationConfig = this.dataService.eduConfig;
                        const index = this.educationConfig.findIndex(x => x.claimConfigOptionName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development");
                        this.educationConfig.splice(index, 1);
                        // remove item from last Exam passed option
                        const indexLastExamPassed = this.lastExampassed.findIndex(l => l.optionName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development");
                        this.lastExampassed.splice(indexLastExamPassed, 1);
                        //var timeDiff = Math.abs(Date.now() - Date.parse(data.dob));
                        //const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                        //if (age >= 21) {
                        //    alert("your dependent not suitable for this claim beacause your son age 21");
                        //    return;
                        //}
                        this.isMarried = false;
                    }
                    else {
                        this.getEducationConfiguration();
                        this.getLastExamPassed();
                    }
                    this.isDuplicateDependent = false;
                }
                else {
                    this.isDuplicateDependent = true;
                }
                //-------------------
            });
        this.educationDetails.dependentName = args.target.options[args.target.selectedIndex].text;
        this.educationDetails.dependentRelation = args.target.options[args.target.selectedIndex].text.split('-')[1];
    }
selectLastExamPassed(args, education: EducationDetailModel) {
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
}
selectPresentlyReading(args, education: EducationDetailModel) {
    const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == education.dependentId);
    this.educationDetails.presentlyReadingName = args.target.options[args.target.selectedIndex].text;
    if (this.educationDetails.presentlyReading > 0) {
        const data = this.educationConfig.find(x => x.claimConfigId == this.educationDetails.presentlyReading);
        this.educationDetails.eligibleAmount = data.annualLimit;
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
}

    reasonForApplyChange(mode) {
    this.isRegistrationNo = false;
    this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isBenDeath= false;
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
}
nomineeChange(nomineeSno) {
    //this.validatePfSubmit(this.ssin.trim(), nomineeSno);
    this.claim.nomineeId = nomineeSno;
    if (this.benficiaryNominee.length > 0) {
        var nominee = this.benficiaryNominee.find(x => x.benNomineeSno == nomineeSno);
        if (nominee != null) {
            this.claim.nomineeName =  nominee.benNomineeName;
            this.claim.nomineeBankAccount = nominee.benNomineeBankAccNo;
            this.claim.nomineeIFSCCode = nominee.benNomineeBankIfscCode;
        }
    }
}
chkAccidentChange(args, value) {
    if (value == true) { this.claim.healthFamilyDetails.claimFor = 5; }
    else { this.claim.healthFamilyDetails.claimFor = 0; }
    this.claimForChange(args);
}
validateEducationDetails(details: EducationDetailModel): boolean {
    let isValid = true;
    this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = true;
    if (details.dependentId == undefined || details.dependentId <= 0) { this.studentNameValid = isValid = false; }
    if (details.institutionName == undefined || details.institutionName == "") { this.institutionNameValid = isValid = false; }
    if (details.registrationRollNo == undefined || details.registrationRollNo == "") { this.registrationNoValid = isValid = false; }
    if (details.institutionContact != undefined && details.institutionContact.toString().length > 0 && details.institutionContact.toString().length < 10) {
        this.institutionContactValid = isValid = false;
    }
    if (details.year == undefined) { this.educationYearValid = isValid = false; }
    if (this.viewuploadNonMarriage) {
        if (this.eduNonMarriage.length == 0) { this.uploadNonMarriageValid = isValid = false }
    }

    if (this.educertificates.length == 0 && !this.isDisabledBaseOnLastExamPassed) { this.uploadCertificatetValid = isValid = false }
    if (this.eduSelfAttested.length == 0) { this.uploadselfattestedValid = isValid = false }
    if (details.dateofAdmission == undefined && !this.isDisabledBaseOnLastExamPassed) { this.dateOfAdmissionValid = isValid = false; }
    if ((details.presentlyReading == undefined || details.presentlyReading <= 0) && !this.isDisabledBaseOnLastExamPassed) { this.presentlyReadingValid = isValid = false; }
    debugger;
    if (this.isMarried && (details.isMarried == undefined || details.isMarried == null)) { this.marriedValid = isValid = false; }
    else if (this.isMarried && details.isMarried == "1") {
        isValid = false;
        alert("This benefit not applicable for married student");
        return;
    }
    if (this.isDuplicateDependent) { isValid = false; }
    return isValid;
}
addEducationDetails(details: EducationDetailModel) {
    if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
    if (this.validateEducationDetails(details)) {
        details.statusId = ClaimStatus.Submitted;
        if (this.educationDetailsArray.findIndex(x => x.dependentId == details.dependentId) == -1 && this.rowIndex == -1) {

            const attachedList: AttachmentModel[] = [];
            if (this.educertificates.length > 0) {
                this.educertificates.forEach(contact => {
                    attachedList.push(contact);
                });
            }
            if (this.eduNonMarriage.length > 0) {
                this.eduNonMarriage.forEach(contact => {
                    attachedList.push(contact);
                });
            }
            if (this.eduSelfAttested.length > 0) {
                this.eduSelfAttested.forEach(contact => {
                    attachedList.push(contact);
                });
            }
            details.attachmentDetailsList = attachedList;
            details.isDuplicate = false;
            this.educationDetailsArray.push(details);
            this.claim.educationDetails.claimAmount -= this.rowEligibleAmount == undefined ? 0 : this.rowEligibleAmount;
            this.eduCount += 1;
            this.lgModal.hide();
        }
        else if (this.educationDetailsArray.findIndex(x => x.dependentId == details.dependentId) != -1 && this.rowIndex == -1) {
            alert("already added please select another dependent"); return;
        }
        else {
            if (this.rowIndex != -1) {
                if (this.educationDetailsArray.findIndex(x => x.dependentId == details.dependentId) == this.rowIndex) {
                    this.educationDetailsArray.splice(this.rowIndex, 1);
                    this.claim.educationDetails.claimAmount -= this.rowEligibleAmount == undefined ? 0 : this.rowEligibleAmount;
                    const attachedList: AttachmentModel[] = [];
                    if (this.educertificates.length > 0) {
                        this.educertificates.forEach(contact => {
                            attachedList.push(contact);
                        });
                    }
                    if (this.eduNonMarriage.length > 0) {
                        this.eduNonMarriage.forEach(contact => {
                            attachedList.push(contact);
                        });
                    }
                    if (this.eduSelfAttested.length > 0) {
                        this.eduSelfAttested.forEach(contact => {
                            attachedList.push(contact);
                        });
                    }
                    details.attachmentDetailsList = attachedList;
                    details.isDuplicate = false;
                    this.educationDetailsArray.push(details);
                    this.rowIndex = -1;
                    this.rowEligibleAmount = 0;
                    this.lgModal.hide();
                }
                else {
                    alert("already added please select another dependent"); return;
                }
            }
        }
        if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
            var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toString());
            if (eduBenefit != null) {
                var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
            }
            if (cond) { this.maxLimitExceeded = true; }
        }
        //if (this.eduCount >= 2) { this.maxLimitExceeded = true; }
        const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == details.dependentId);
        this.claim.educationDetails.claimAmount += details.eligibleAmount == undefined ? 0 : details.eligibleAmount;

        this.educationDetails = {} as EducationDetailModel;
    }
}
editEducationDetails(details: EducationDetailModel) {
    this.educationDetails = details;
    this.eduSelfAttested = [] as AttachmentModel[];
    this.educertificates = [] as AttachmentModel[];
    this.eduNonMarriage = [] as AttachmentModel[];
    this.educationDetails.dateofAdmission = new Date(details.dateofAdmission);
    this.educationDetails.attachmentDetailsList.forEach((eachObj) => {
        if (eachObj.attachmentType === AttachmentType.Scholarship) {
            this.educertificates.push(eachObj);
        }
        if (eachObj.attachmentType === AttachmentType.NonMarriage) {
            this.eduNonMarriage.push(eachObj);
        }
        if (eachObj.attachmentType === AttachmentType.PassingExamCertificate) {
            this.eduSelfAttested.push(eachObj);
        }
    });
    this.rowEligibleAmount = details.eligibleAmount;
    this.rowIndex = this.educationDetailsArray.indexOf(details);
    this.lgModal.show();
}
removeEducationDetails(details: EducationDetailModel) {
    const index: number = this.educationDetailsArray.indexOf(details);
    if (index !== -1) {
        this.claim.educationDetails.claimAmount -= this.educationDetailsArray[index].eligibleAmount == undefined ? 0 : this.educationDetailsArray[index].eligibleAmount;
        this.educationDetailsArray.splice(index, 1);
        if (this.educationDetailsArray.findIndex(x => x.presentlyReadingName == "Education assistance to unmarried daughter for completion of UG Education or Equivalent Skill Development") != -1) {
            this.viewuploadNonMarriage = true;
        }
        else {
            this.viewuploadNonMarriage = false;
        }
        this.eduCount -= 1;
        if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
            var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
            if (eduBenefit != null) {
                var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
            }
            if (cond) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
        //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
    }
}
getHospitalization() {
    this.dataService
        .getlovDetails(LovConstants.Hospitalization)
        .subscribe((data: any) => {
            this.hospitalizationLov = data;
        });
}
getHealthClainFor() {
    this.dataService
        .getlovDetails(LovConstants.ClaimFor)
        .subscribe((data: any) => {
            this.healthtypeofClaim = data;
        });
}
getLastExamPassed() {
    this.dataService
        .getlovDetails(LovConstants.LastExamPassed)
        .subscribe((data: any) => {
            this.lastExampassed = data;
        });
}
getReasonForApply() {
    this.dataService
        .getlovDetails(LovConstants.ReasonForApply)
        .subscribe((data: any) => {
            this.reasonForApply = data;
        });
}

getPfConfiguration() {
    this.dataService
        .getClaimConfiguration(ClaimConstants.PF)
        .subscribe((data: any) => {
            this.pfConfig = data;
        });
}
getHealthandFamilyConfiguration() {
    this.dataService
        .getClaimConfiguration(ClaimConstants.HealthFamily)
        .subscribe((data: any) => {
            this.healthConfig = data;
        });
}
getEducationConfiguration() {
    this.dataService
        .getClaimConfiguration(ClaimConstants.Education)
        .subscribe((data: any) => {
            this.educationConfig = data;
            this.dataService.eduConfig = data;
        });
}
getDeathConfiguration() {
    this.dataService
        .getClaimConfiguration(ClaimConstants.Death)
        .subscribe((data: any) => {
            this.deathConfig = data;
        });
}
getDisabIlityConfiguration() {
    this.dataService
        .getClaimConfiguration(ClaimConstants.Disability)
        .subscribe((data: any) => {
            this.disabilityConfig = data;
        });
}
    searchSSINNo(ssnNo: any) {
        this.benficiaryNominee=[];
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
                    this.dataService.isCAFUpdated(ssnNo.trim(), this.isRegistrationNo).subscribe((data1: any) => {
                        debugger;
                        if (!data1)
                            this.isCAFUpdated = true;
                        else {
                            this.dataService
                                .getBeneficiaryBasicDetailsByNo(ssnNo.trim(), this.isRegistrationNo)
                                .subscribe((data: any) => {
                                    this.beneficiary = data;
                                    if (this.beneficiary != null && this.beneficiary.benSno > 0) {
                                        if (this.beneficiary.isActive) {
                                            this.ssin = this.beneficiary.ssI_Number;
                                            this.disabledssin = true;
                                            this.benficiaryInactive = false;
                                            this.getBenficiaryFamilyDetails(this.beneficiary.benSno);
                                            this.getBenficiaryFamilyDetailsByHealth(this.beneficiary.benSno);
                                            this.getBenficiaryEduCount(this.beneficiary.benSno);
                                            this.getBeneficiaryNomineeDetails(this.beneficiary.benSno); debugger;


                                            this.getBeneficiaryAppliedDisabilities(this.beneficiary.benSno, this.claimId);
                                            if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
                                                this.dataService.getBeneficiaryPFAccountDetails(this.beneficiary.benSno).subscribe((data1: any) => {
                                                    debugger;
                                                    this.beneficiaryPFAccountDetails = data1;
                                                    if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                        if (this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                                            this.getPfBalance(this.beneficiary.benSno);
                                                        }
                                                        else
                                                            alert("Your Pf Account is closed/Inactive");
                                                    }
                                                    else
                                                        alert("No pf details available for this given SSIN number");
                                                });
                                            }
                                            debugger;
                                            if (this.claim.reasonForApply == 16) {
                                                this.isBenDeath = false;
                                                this.disableDisabilityCheckbox = true;
                                                this.disableDeathCheckbox = false;
                                                this.viewDeathFieldsAndNominee = true;

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
                                        }
                                        else {
                                            this.benficiaryInactive = true;
                                            this.restrictSave = true;
                                            this.viewEducation = false;
                                            this.disableEdu = true;

                                        }
                                    }
                                    else
                                        this.isCAFUpdated = true;

                                    console.log(this.beneficiary);
                                });
                        }
                    });
                }
                else {
                    if (!this.isCAFUpdated) {
                        this.dataService
                            .getBeneficiaryBasicDetailsByNo(ssnNo.trim(), this.isRegistrationNo)
                            .subscribe((data: any) => {
                                this.beneficiary = data;
                                if (this.beneficiary != null) {
                                    if (this.beneficiary.isActive) {
                                        this.disabledssin = true;
                                        this.benficiaryInactive = false;
                                        this.getBenficiaryFamilyDetails(this.beneficiary.benSno);
                                        this.getBenficiaryFamilyDetailsByHealth(this.beneficiary.benSno);
                                        this.getBenficiaryEduCount(this.beneficiary.benSno);
                                        this.getBeneficiaryNomineeDetails(this.beneficiary.benSno); debugger;


                                        this.getBeneficiaryAppliedDisabilities(this.beneficiary.benSno, this.claimId);
                                        if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
                                            this.dataService.getBeneficiaryPFAccountDetails(this.beneficiary.benSno).subscribe((data1: any) => {
                                                debugger;
                                                this.beneficiaryPFAccountDetails = data1;
                                                if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                    if (this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                                        this.getPfBalance(this.beneficiary.benSno);
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
                                        if (this.claim.reasonForApply == 16) {
                                            this.isBenDeath = false;
                                            this.disableDisabilityCheckbox = true;
                                            this.disableDeathCheckbox = false;
                                            this.viewDeathFieldsAndNominee = true;

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
                                        //------=====================
                                    }
                                    else {
                                        this.benficiaryInactive = true;
                                        this.restrictSave = true;
                                        this.viewEducation = false;
                                        this.disableEdu = true;

                                    }
                                }
                                console.log(this.beneficiary);
                            });
                    }
                }
            }
    }
    else {
        this.beneficiary = {} as Beneficiary;
        this.viewEducation = false;
    }
}
getHospitals() {
    this.dataService
        .getAllHospitals()
        .subscribe((data: any) => {
            this.hospotalList = data;
            console.log(this.hospotalList);
        });
}

getBenficiaryEduCount(id: any) {
    this.dataService
        .getBeneficiaryEduCount(id)
        .subscribe((data: any) => {
            this.eduCount = data;
            if (this.mode == "draft" && (this.educationDetailsArray != null && this.educationDetailsArray.length > 0)) {
                this.eduCount = this.eduCount + this.educationDetailsArray.length;
            }
            if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
                if (eduBenefit != null) {
                    var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);

                    if (cond && this.claimId == 0) {
                        //if (this.eduCount >= 2 && this.claimId == 0) {
                        //this.disableEdu = true;
                        //this.maxLimitExceeded = true;
                        //this.restrictSave = true;
                    }
                    else {
                        this.disableEdu = false;
                        this.maxLimitExceeded = false;
                        this.restrictSave = false;
                    }
                }
            }
        });
}
getBenficiaryFamilyDetailsByHealth(id: any) {
    this.dataService
        .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
        .subscribe((data: any) => {
            this.benficiaryFamilybyHealth = data;
        });
}
getBenficiaryFamilyDetails(id: any, type?: any) {
    this.dataService
        .getBeneficiaryFamilyDetails(id, ClaimConstants.Education)
        .subscribe((data: any) => {
            this.benficiaryChildren = data;
            this.benficiaryFamily = data;
        });
}
getBeneficiaryNomineeDetails(id: any) {

    this.dataService
        .getBeneficiaryNomineeDetails(id)
        .subscribe((data: any) => {
            this.benficiaryNominee = data;
            if (this.benficiaryNominee.length == 0)
                this.isNomineesExist = false;
            else
                this.isNomineesExist = true;
        });
}
validateHealthData(claimData: ClaimModel, id: any): boolean {
    let isValid = true;
    this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true;//this.originalVoucher =
    this.isClaimEffectiveDate = false;
    if (id == 1) {
        if (this.beneficiary.benSno == undefined) { this.ssinReq = isValid = false }
        return isValid
    }
    if (id == 2) {
        if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
    }
    if (this.hospotalId > 0) {
        if (this.claim.healthFamilyDetails.otherHospital == undefined) { this.otherHospitalValid = isValid = false };
    }
    if (this.claim.healthFamilyDetails.claimFor == undefined || this.claim.healthFamilyDetails.claimFor == 0) { this.claimForValid = isValid = false }
    if (this.claim.healthFamilyDetails.typeOfClaim == undefined) { this.typeOfClaimValid = isValid = false }
    if (this.claim.healthFamilyDetails.hospitalId == 0 || this.claim.healthFamilyDetails.hospitalId == undefined) { this.hospital = isValid = false }
    if (this.claim.healthFamilyDetails.typeOfHospitalization == 0 || this.claim.healthFamilyDetails.typeOfHospitalization == undefined) { this.hospitalization = isValid = false }
    if (this.claim.healthFamilyDetails.isCertifynotESI == false || this.claim.healthFamilyDetails.isCertifynotESI == undefined) { this.rigisterESI = isValid = false }
    if (this.healthSelfAttached.fileName == undefined) { this.hospitalselfAttested = isValid = false };
    //if (this.healthOriginalVoucher.fileName == undefined) { this.originalVoucher = isValid = false };
    if (this.showDisCertUpload && this.healthDischargeCertificate.fileName == undefined) { this.dischargeCertificate = isValid = false };

    if (this.viewDateOfAdmit) {
        if (this.claim.healthFamilyDetails.admittedDate == undefined) { this.dateofAdmin = isValid = false }
        else {
            if (this.claim.healthFamilyDetails.admittedDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        if (this.claim.healthFamilyDetails.dischargeDate == undefined) { this.dateofDischargeValid = isValid = false }
        else {
            if (this.claim.healthFamilyDetails.dischargeDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
    }
    if (this.viewDateOfFirstAppointment) {
        if (this.claim.healthFamilyDetails.firstAppointmentDate == undefined) { this.dateofAppointment = isValid = false }
        else {
            if (this.claim.healthFamilyDetails.firstAppointmentDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
    }
    if (this.viewFamily) {
        if (this.claim.healthFamilyDetails.familyMemberId == 0 || this.claim.healthFamilyDetails.familyMemberId == undefined) { this.rigisterESI = isValid = false }
    }
    if (this.viewSelf) {
        if (this.claim.healthFamilyDetails.loeFromDate == undefined) { this.loeFromDate = isValid = false }
        else {
            if (this.claim.healthFamilyDetails.loeFromDate < new Date(this.healthFamilyClaimEffectiveDate)) {
                this.claimEffectiveDate = this.healthFamilyClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        if (this.claim.healthFamilyDetails.loeToDate == undefined) { this.loeToDate = isValid = false }
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
        let amount = Number(claimData.healthFamilyDetails.costOfClinicalTest != undefined ? claimData.healthFamilyDetails.costOfClinicalTest : 0) + Number(claimData.healthFamilyDetails.costOfHospitalization != undefined ? claimData.healthFamilyDetails.costOfHospitalization : 0) + Number(claimData.healthFamilyDetails.costOfMedicine != undefined ? claimData.healthFamilyDetails.costOfMedicine : 0);
        if (amount == 0) {
            isValid = false;
            alert("Please enter atleast one valid cost");
            return;
        }
        let remainingAmount = 0;
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
        if (this.claim.healthFamilyDetails.reasonForDelaySubmission == undefined) { this.reasonForHealthDelayValid = isValid = false };
        if (this.healthCondolationCertificate.fileName == undefined) { this.healthCondolationCertificateUploaded = isValid = false };
    }

    return isValid;
}
validateClaimsData(claimData: ClaimModel, id: any): boolean {
    let isValid = true;
    this.ssinReq = this.reasonForApplyValid = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.nomineeRequired = true;
    if (id == 1) {
        if (this.beneficiary.benSno == undefined) { this.ssinReq = isValid = false }
        return isValid
    }

    if (this.claim.reasonForApply <= 0 || this.claim.reasonForApply == undefined) { this.reasonForApplyValid = isValid = false }
    // Death of Beneficiary
    if (this.claim.reasonForApply == 16) {
        if (this.claim.nomineeId <= 0 || this.claim.nomineeId == undefined) { this.nomineeRequired = isValid = false }
    }
    if (this.beneficiary.benSno == undefined) { this.ssinReq = isValid = false }
    if (id == 2) {
        if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
    }
    return isValid;
}
validateDisabilityData(claimData: ClaimModel, id: any): boolean {
    let isValid = true;
    this.natureOfDisability = this.dateofrelease1 = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
    this.isClaimEffectiveDate = false;
    if (id == 2) {
        if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
    }
    if (this.disabilityCertificate.fileName == undefined) { this.disabilityCertificateUploaded = isValid = false };
    if (this.claim.disabilityDetails.dateofRelease == undefined) { this.dateofrelease1 = isValid = false };
    //if (this.claim.disabilityDetails.natureOfDisability == undefined) { this.natureOfDisability = isValid = false }
    if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == undefined) { this.isDeathorpermanent1 = isValid = false }
    if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == undefined) { this.isDeathorpermanent2 = isValid = false }
    if (this.claim.disabilityDetails.isOtherFinancialAssistance == false || this.claim.disabilityDetails.isOtherFinancialAssistance == undefined) { this.isDeathorpermanent3 = isValid = false }
    if (this.claim.disabilityDetails.natureOfDisability == undefined) {
        this.natureOfDisability = isValid = false
    }
    else {
        let data = this.beneficiaryAppliedDisabilities.find(x => x == this.claim.disabilityDetails.natureOfDisability);
        if (data) {
            this.checkNatureOfDisability = isValid = false;
            //alert("Claim has been already submitted with this nature of disability");
            //return;
        }
    }
    if (this.enableReasonForDelaySubmission) {
        if (this.claim.disabilityDetails.reasonForDelaySubmission == undefined) { this.reasonForDelayValid = isValid = false };
        if (this.condolationCertificate.fileName == undefined) { this.condolationCertificateUploaded = isValid = false };
    }
    if (this.claim.disabilityDetails.dateofRelease != undefined) {
        if (this.claim.disabilityDetails.dateofRelease < new Date(this.disabilityClaimEffectiveDate)) {
            this.claimEffectiveDate = this.disabilityClaimEffectiveDate;
            this.isClaimEffectiveDate = true;
            isValid = false;
        }
    }
    return isValid;
}
validateDeathData(claimData: ClaimModel, id: any): boolean {
    let isValid = true;
    this.natureOfDeath = this.dateofDeath = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = true;
    this.isClaimEffectiveDate = false;
    if (id == 2) {
        if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
    }
    if (this.deathCertificate.fileName == undefined) { this.deathCertificateUploaded = isValid = false };
    if (this.bankPassbook.fileName == undefined) { this.bankPassbookUploaded = isValid = false };
    if (this.claim.deathDetails.natureofDeath == undefined) { this.natureOfDeath = isValid = false };
    if (this.claim.deathDetails.dateofDeath == undefined) { this.dateofDeath = isValid = false }
    else {
        if (this.claim.deathDetails.dateofDeath < new Date(this.deathClaimEffectiveDate)) {
            this.claimEffectiveDate = this.deathClaimEffectiveDate;
            this.isClaimEffectiveDate = true;
            isValid = false;
        }
    }
    if (this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional == false || this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyintentional == undefined) { this.isDeath1 = isValid = false }
    if (this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == false || this.claim.deathDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == undefined) { this.isDeath2 = isValid = false }
    if (this.claim.deathDetails.isOtherFinancialAssistance == false || this.claim.deathDetails.isOtherFinancialAssistance == undefined) { this.isDeath3 = isValid = false }
    if (this.viewAccidental == true && this.claim.deathDetails.placeofDeath == undefined) { this.placeOfDeathValid = isValid = false };
    return isValid;
}
validatePFData(claimData: ClaimModel, id: any): boolean {
    let isValid = true;
    //this.natureOfDeath = this.dateofDeath = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = true;
    if (id == 2) {
        if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
    }
    if (this.claim.providentFundDetails.typeOfClaim == undefined) { this.pfTypeOfClaimValid = isValid = false }
    else if (this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) //Premature
    {
        if (this.claim.providentFundDetails.reasonForPreClosure == undefined) { this.reasonForPreclosureValid = isValid = false };

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
                return
            }
        }
    }

    return isValid;
}
validatePfSubmit(ssiNumber: any, nomineeId: any, eve) {
    let share = 0;
    if (nomineeId > 0) {
        this.dataService
            .validatePfSubmit(ssiNumber, 0)
            .subscribe((data: any) => {
                this.isPFSubmitted = data;
                if (this.isPFSubmitted) {
                    this.viewPf = false;
                    eve.target.checked = false;
                    this.disablePFCheckbox = true;
                    this.pfExsits = true;
                }
                else {

                    this.dataService
                        .validatePfSubmit(ssiNumber, nomineeId)
                        .subscribe((data: any) => {
                            this.isPFSubmitted = data;
                            if (this.isPFSubmitted) {
                                this.viewPf = false;
                                eve.target.checked = false;
                                this.disablePFCheckbox = true;
                                this.pfExsits = true;
                            }
                            else {

                                this.pfCode();
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
            .subscribe((data: any) => {
                this.isPFSubmitted = data;
                if (this.isPFSubmitted) {
                    this.viewPf = false;
                    eve.target.checked = false;
                    this.disablePFCheckbox = true;
                    this.pfExsits = true;
                }
                else {
                    this.pfCode();
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

}
okClick() {
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
}
cancleClick() {
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
}
downLoadPdf(claimData: ClaimModel, type) {

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
        .then((data: any) => {
            var blob = new Blob([data.body], { type: 'application/pdf' });
            if (type == 'print') {
                const blobUrl = URL.createObjectURL(blob);
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = blobUrl;
                document.body.appendChild(iframe);
                iframe.contentWindow.print();
            }
            else {
                FileSaver.saveAs(blob, "FormV.pdf");
            }
            this.disableSubmitbutton = false;
            this.pdfModal.hide();
            //var url = window.URL.createObjectURL(blob);
            //this.disableSubmitbutton = false;
            //window.open(url);
        });
}

GenaratePdf(claimData: ClaimModel, type) {

    let isValid = true;
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
        if (!claimData.educationDetails.isanyothersourceofthegovernment)
        {
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

}

saveClaimsData(claimData: ClaimModel, type: number) {
    let isValid = true;
    let hasNomineeShare = true;
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
            if (!claimData.educationDetails.isanyothersourceofthegovernment)
            {
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

        const attachedList: Array<AttachmentModel> = [];
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
                    const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == this.educationDetailsArray[i].dependentId);
                    if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                        //Exception Rule - 1 (if currentdate-admissiondate >90) 
                        if (this.educationDetailsArray[i].dateofAdmission != null && this.educationDetailsArray[i].dateofAdmission != undefined) {

                            var date1 = new Date(this.educationDetailsArray[i].dateofAdmission);
                            var date2 = new Date(Date.now());
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                            var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.DateofAdmissionExceeding.toLowerCase());
                            if (eduBenefit != null) {
                                var cond = eval(diffDays + eduBenefit.logic + eduBenefit.value);

                                //if (diffDays > 90) {
                                if (cond) {

                                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                                const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                                var eduBenefit2 = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.SonAgeExceeding.toLowerCase());
                                if (eduBenefit2 != null) {
                                    var cond2 = eval(age + eduBenefit2.logic + eduBenefit2.value);
                                    //if (age >= 21) {
                                    if (cond2) {

                                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    var helBenefit = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofFirstAppointmentExceeding.toLowerCase());
                    if (helBenefit != null) {
                        var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                        if (cond && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                            //if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {

                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofDischargeExceeding.toLowerCase());
                    if (helBenefit2 != null) {
                        var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                        if (cond2 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                            // if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {

                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                const oo: HealthFamilyPackage = {} as HealthFamilyPackage;

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
            claimData.healthFamilyDetails.statusId = this.ClaimStatusId
            claimData.healthFamilyDetails.loeAmount = this.lossOfEmploymentAmount;
            claimData.healthFamilyDetails.createdBy = this.user.user.deptUserid;
            if (!this.isOtherHospital) {
                claimData.healthFamilyDetails.otherHospital == undefined;
            }
            else {
                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                            const testId: ClinicalTestModel = {} as ClinicalTestModel;
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
                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                        exp.exceptionText = "bank details does not exists for nominee";
                        exp.exceptionCapturedDate = new Date();
                        exp.raisedBy = this.user.user.deptUserid;

                        this.educationClaimExceptionDetails.push(exp);
                        this.healthClaimExceptionDetails.push(exp);
                    }
                }
                //Nominee Details
                var nominee = this.benficiaryNominee.find(x => x.benNomineeSno == claimData.nomineeId);
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
                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    var disBenefit = this.disabilityBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == DisabilityBenefitConfiguration.DateOfReleaseExceeding.toLowerCase());
                    if (disBenefit != null) {
                        var cond = eval(diffDays + disBenefit.logic + disBenefit.value);
                        if (cond) {
                            //if (diffDays > 90) {

                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    var deaBenefit = this.deathBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == DeathBenefitConfiguration.DateofDeathExceeding.toLowerCase());
                    if (deaBenefit != null) {
                        var cond = eval(diffDays + deaBenefit.logic + deaBenefit.value);
                        if (cond) {
                            //if (diffDays > 90) {

                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    .then((data: any) => {
                        if (data) {
                            if (type == 1) {
                                this.mode = "draft";
                                this.successMessage = "Your claim was updated successfully";
                            }
                            else {
                                let refNo;
                                if (this.viewHealth) {
                                    refNo = data.item2 + " (Health & Family) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewDisability) {
                                    refNo = data.item4 + " (Disability) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewDeath) {
                                    refNo = data.item5 + " (Death) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Death) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewPf) {
                                    refNo = data.item1 + " (PF) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewEducation) {
                                    if (refNo == undefined) {
                                        refNo = data.item3 + " (Education) ";
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + " (Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                    }
                                    else {
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + "(Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                        refNo = " (PF) " + data.item1 + " , " + " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4 + " , " + " (Death) " + data.item4;
                                    }
                                }
                            }
                            this.successModal.show();
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                            this.successModal.show();
                        }
                    });
            }
        }
        else {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .createClaim(claimData)
                    .then((data: any) => {
                        if (data) {
                            if (type == 1) {
                                this.mode = "draft";
                                this.successMessage = "Your claim was saved successfully";
                            }
                            else {
                                let refNo;
                                if (this.viewHealth) {
                                    refNo = data.item2 + " (Health & Family) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewDisability) {
                                    refNo = data.item4 + " (Disability) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewDeath) {
                                    refNo = data.item5 + " (Death) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Death) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewPf) {
                                    refNo = data.item1 + " (PF) ";
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                }
                                if (this.viewEducation) {
                                    if (refNo == undefined) {
                                        refNo = data.item3 + " (Education) ";
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + " (Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                    }
                                    else {
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item3 + "(Education) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";
                                        refNo = " (PF) " + data.item1 + " , " + " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4 + " , " + " (Death) " + data.item4;
                                    }
                                }
                            }
                            this.successModal.show();
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                            this.successModal.show();
                        }
                    });
            }
        }
    }
    else {
        return;
    }


}
    claerClaim() {
       this.isRegistrationNo = false;
        this.isCAFUpdated = false;
    this.isHFSubmitted = this.isEduSubmitted = this.isBenNomineeSubmittedClaim = this.isBenNomineeSubmittedPFClaim = this.isBenDeath= false;
    //this.deathCheckBox = this.pfCheckBox = this.healthCheckBox = this.educationCheckBox = false;
    this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true;//this.originalVoucher =
    this.restrictSave = false; this.viewEducation = false; this.disableEdu = false; this.noDependents = false;
    this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = true;
    this.claim = {} as ClaimModel;
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
    this.healthOriginalVoucher = {} as AttachmentModel;
    this.healthSelfAttached = {} as AttachmentModel;
    this.healthDischargeCertificate = {} as AttachmentModel;
    this.healthExpensesSheet = {} as AttachmentModel;
    this.healthAttachmentList = [] as AttachmentModel[];
    this.mainUploadList = [] as AttachmentModel[];
    this.educertificates = [] as AttachmentModel[];
    this.eduNonMarriage = [] as AttachmentModel[];
    this.eduSelfAttested = [] as AttachmentModel[];
    this.disabilityAttachmentList = [] as AttachmentModel[];
    this.disabilityCertificate = {} as AttachmentModel;
    this.deathAttachmentList = [] as AttachmentModel[];
    this.deathCertificate = {} as AttachmentModel;
    this.claim.healthFamilyDetails = {} as HealthFamilyModel;
    this.claim.educationDetails.isanyothersourceofthegovernment = false;
    this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease1 = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded =  true;
    this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
    this.condolationCertificate = {} as AttachmentModel;
    this.healthCondolationCertificate = {} as AttachmentModel;
    this.pfTypeOfClaimValid = true;
    this.viewDeathFieldsAndNominee = false;
    if (this.claim.claimId == undefined) {
        this.claim = {} as ClaimModel;
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails = {} as EducationHdrModel;
        this.claim.educationDetails.educationDetailList = [];
    }
    else {

        this.getClaimDetailsByClaimId(this.claimId);
    }
}

    UpdateClaimStatusIdByStatus(type: any) {
        debugger;
    if (type == 1)
        this.ClaimStatusId = 1;
    else {
        if (this.claimStatus < 5)
            this.ClaimStatusId = 2;
        else if (this.claimStatus == 5) this.ClaimStatusId = 4;
        else if (this.claimStatus == 6 || this.claimStatus == 10) this.ClaimStatusId = 8;
        else if (this.claimStatus == 9 || this.claimStatus == 13) this.ClaimStatusId = 12;
    }
}
loeFromDateChange(eve) {
    //alert(this.claim.healthFamilyDetails.loeFromDate);
    this.minLOEDate = new Date(this.claim.healthFamilyDetails.loeFromDate);
    this.isLOEToDate = false;

}
loeToDateChange(eve) {
    this.calculateLossOfEmploymentAmount();
}

dateofadminchange(eve) {
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
}

dateofdischargechange(eve) {
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
                var helBenefit = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.ReasonForDelaySubmission.toLowerCase());
                if (helBenefit != null) {
                    var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                    if (cond) { this.enableReasonForDelaySubmissionInHealth = true; }
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
}

    calculateLossOfEmploymentAmount() {
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

                            var helBenefit = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.LossOfEmploymentDateDiffernce.toLowerCase());
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
                    var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.LossOfEmploymentAmountExceeding.toLowerCase());
                    if (helBenefit2 != null) {
                        var cond2 = eval(calculatedAmount + helBenefit2.logic + helBenefit2.value);
                        if (cond2) { calculatedAmount = 10000; }
                    }
                }
            }
        }
        //if (calculatedAmount > 10000) { calculatedAmount = 10000; }
        return calculatedAmount;
    }
    checkAll(e, item: any) {
    if (e.target.checked) {
        this.result.filter(x => x.name == item)[0].values.forEach((item) => {
            item.isChecked = true;
        });
    } else {
        this.result.filter(x => x.name == item)[0].values.forEach((item) => {
            item.isChecked = false;
        });
    }
}
submitClick() {
    this.selectedPackages = [];
    for (var i = 0; i < this.result.length; i++) {

        for (var j = 0; j < this.result[i].values.length; j++) {
            if (this.result[i].values[j].isChecked) {
                this.selectedPackages.push(this.result[i].values[j]);
            }
        }
    }
    this.packageModal.hide();
}
checkIfAllSelected(item: any) {

}
viewPackages() {
    this.packageModal.show();
}
getPackages() {
    this.dataService
        .getPackages()
        .subscribe((data: any) => {
            this.packages = data;
            console.log(this.packages);
            var groups = new Set(this.packages.map(item => item.ailmentName));
            this.result = [];
            groups.forEach(g =>
                this.result.push({
                    name: g,
                    values: this.packages.filter(i => i.ailmentName === g)
                }
                ))
        });
}
isBenNomineeClaimSubmitted(id: any) {
    this.dataService
        .isBenNomineeClaimSubmitted(id)
        .subscribe((data: any) => {

            this.isBenNomineeSubmittedClaim = data;
            if (this.isBenNomineeSubmittedClaim) {
                this.disablePFCheckbox = this.disableHealthCheckbox = this.disableDisabilityCheckbox = this.disableDeathCheckbox = this.disableEducationCheckbox = true;
            }
        });
}
isSameBenNomineeClaimSubmitted(id: any, nomineeId: any, claimType: any , eve) {
    this.dataService
        .isSameBenNomineeClaimSubmitted(id, nomineeId, claimType)
        .subscribe((data: any) => {

            if (claimType == ClaimConstants.Death) {
                this.isBenNomineeSubmittedClaim = data;
                if (this.isBenNomineeSubmittedClaim) {
                    this.viewDeath = false;
                    //this.deathCheckBox = false;
                    eve.target.checked = false;
                    this.disableDeathCheckbox = true;
                }
                else {
                    //this.deathCheckBox = !this.viewDeath;
                    this.viewDeath = !this.viewDeath;
                }
            }
            else if (claimType == ClaimConstants.PF) {
                this.isBenNomineeSubmittedPFClaim = data;
                if (this.isBenNomineeSubmittedPFClaim) {
                    this.viewPf = false;
                    //this.pfCheckBox = false;
                    eve.target.checked = false;
                    this.disablePFCheckbox = true;
                }
                else {
                    this.pfCode();
                }
            }
        });
}
getNomineeClaimEntryValidation(id: any, claimType: any ,eve) {
    this.dataService
        .getNomineeClaimEntryValidation(id)
        .subscribe((data: any) => {
            if (data) {
                var healthCount = data.item1;
                var eduCount = data.item2;
                //health Check box
                if (claimType == ClaimConstants.HealthFamily) {
                    if (healthCount > 0) {
                        this.isHFSubmitted = false;
                        this.disableHealthCheckbox = false;
                        this.healthCode();
                    }
                    else {
                        this.isHFSubmitted = true;
                        this.disableHealthCheckbox = true;
                        //this.healthCheckBox = false;
                        eve.target.checked = false;
                    }
                }
                //Education Check box
                if (claimType == ClaimConstants.Education) {
                    if (eduCount > 0) {
                        this.isEduSubmitted = false;
                        this.disableEducationCheckbox = false;
                        this.educationCode(eve);
                    }
                    else {
                        this.isEduSubmitted = true;
                        this.disableEducationCheckbox = true;
                        //this.educationCheckBox = false;
                        eve.target.checked = false;
                    }
                }
            }
        });
}
disabilityDateofReleaseChange(eve) {

    if (eve != null) {
        if (!this.isDisabilityClaimEdit) {
            var date1 = new Date(eve);
            var date2 = new Date(Date.now());
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (this.disabilityBenefitConfigDetails != null && this.disabilityBenefitConfigDetails.length > 0) {
                var disBenefit = this.disabilityBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == DisabilityBenefitConfiguration.ReasonForDelaySubmission.toLowerCase());
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
}
getDisabilityBenefitConfigurationDetails() {

    this.dataService
        .getBenefitConfigurationDetails(ClaimConstants.Disability)
        .subscribe((data: any) => {

            this.disabilityBenefitConfigDetails = data;
        });
}
getHealthFamilyBenefitConfigurationDetails() {

    this.dataService
        .getBenefitConfigurationDetails(ClaimConstants.HealthFamily)
        .subscribe((data: any) => {

            this.healthFamilyBenefitConfigDetails = data;
        });
}
getEducationBenefitConfigurationDetails() {

    this.dataService
        .getBenefitConfigurationDetails(ClaimConstants.Education)
        .subscribe((data: any) => {

            this.educationBenefitConfigDetails = data;
        });
}
getDeathBenefitConfigurationDetails() {

    this.dataService
        .getBenefitConfigurationDetails(ClaimConstants.Education)
        .subscribe((data: any) => {

            this.deathBenefitConfigDetails = data;
        });
}
getPFBenefitConfigurationDetails() {
    this.dataService
        .getPFConfigurationDetails(0)
        .subscribe((data: any) => {

            this.pfBenefitConfigDetails = data;
        });
    }
    deleteClaimExceptions(id: any) {
        this.dataService
            .deleteClaimExceptions(id)
            .subscribe((data: any) => { });
    }

    radioChange(id: any) {
        if (id == 1)
            this.isRegistrationNo = false;
        if (id == 2)
            this.isRegistrationNo = true;
    }
    updateCAFDetails() {
       
        if (this.isRegistrationNo)
            window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
        else {
            this.dataService
                .getRegistrationNumber(this.ssin)
                .subscribe((data: any) => {
                    debugger;
                    if(data)
                        window.location.href = "/Registration/DeathclaimFrom?ID=" + data;
                    else
                        window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
                });

        }

    }
}
