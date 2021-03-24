import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimModel } from '../claim/models/claim.model';
import { HealthFamilyModel, HealthFamilyPackageModel } from "../claim/models/health-and-family.model";
import { EducationHdrModel, EducationDetailModel } from "../claim/models/education.model";
import { DeathModel } from '../claim/models/death.model';
import { DisabilityModel } from '../claim/models/disability.modl';
import { ProvidentFund } from '../claim/models/providentfund.model';
import { ModalDirective, BsDatepickerConfig } from "ngx-bootstrap";
import { LovDetails } from '../claim/models/Lov.model';
import { ClaimConfig } from '../claim/models/claimconfig.model';
import { ClaimNomineeDataService } from '../services/claim-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, HealthFamilyBenefitConfiguration, EducationBenefitConfiguration, DeathBenefitConfiguration, PFStatusMaster } from '../claim/pipes/constnts.model';
import { Beneficiary } from '../claim/models/ben.model';
import { BenFamilyMember } from '../claim/models/ben.family.model';
import { HospitalModel } from '../claim/models/hospital.model';
import { AttachmentModel } from '../claim/models/attachment.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { Package } from '../models/package.model';
import { HealthFamilyPackage } from '../models/healthFamilyPackage.model';
import { environment } from '../../environments/environment.prod';
import * as FileSaver from 'file-saver';
import { ClaimExceptionDetailsModel } from '../models/claimExceptionDetails';
import { BenNominee } from '../claim/models/ben.nominee.model';
import { PFBalanceDetails } from '../models/pfBalanceDetails';
import { debug } from 'util';
import { Subscription } from 'rxjs';
import { ClinicalTestModel } from '../models/ClinicalTest.model';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';
import { ClaimConfigHdr } from '../claim/models/claimconfighdr.model';
import { BeneficiaryPFAccountDetails } from '../claim/models/ben.pfaccount.model';

@Component({
    selector: 'app-claim-entry-nominee',
    templateUrl: './claim-entry-nominee.component.html',
    styleUrls: ['./claim-entry-nominee.component.css']
})
export class ClaimEntryNomineeComponent implements OnInit {
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('packageModal') public packageModal: ModalDirective;
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('pdfModal') public pdfModal: ModalDirective;

    route$: Subscription;
    claimId: number = 0;
    mode: string;
    claimTypeString: any;
    claimStatus: number = 0;
    viewuploadNonMarriage: boolean = false;
    viewPf: boolean = false;
    viewHealth: boolean = false;
    viewDeath: boolean = false;
    viewEducation: boolean = false;
    viewDateOfFirstAppointment: boolean = false;
    viewNameOfClinicalTest: boolean = false;
    viewDateOfAdmit: boolean = false;
    viewMetWithAnAccident: boolean = false;
    viewFamily: boolean = false;
    viewSelf: boolean = false;
    viewLOEAmount: boolean = false;
    viewAccidental: boolean = false;
    viewEligibilityAmount: boolean = false;
    disableSubmitbutton: boolean = true;
    claim: ClaimModel = {} as ClaimModel;
    educationDetails: EducationDetailModel = {} as EducationDetailModel;
    educationDetailsArray: Array<EducationDetailModel> = [];
    hospitalizationLov: LovDetails[];
    healthtypeofClaim: LovDetails[];
    diseasesLov: LovDetails[];
    clinicalTestLov: LovDetails[];
    healthConfig: ClaimConfig[];
    pfConfig: ClaimConfig[];
    deathConfig: ClaimConfig[];
    disabilityConfig: ClaimConfig[];
    educationConfig: ClaimConfig[];
    eduConfig: ClaimConfig[];
    configConfig: ClaimConfig[];
    lastExampassed: LovDetails[];
    beneficiary: Beneficiary = {} as Beneficiary;
    benficiaryFamily: BenFamilyMember[];
    benficiaryFamilybyHealth: BenFamilyMember[];
    hospotalList: HospitalModel[];
    deathEligibility: any;
    eduCount: number = 0;
    successMessage: string;
    //Validation Claim Entry variables
    ssnNoValid: boolean = true;
    nomineeNameValid: boolean = true;
    nomineeContactValid: boolean = true;
    nomineeDOBValid: boolean = true;
    nomineeBankAccountValid: boolean = true;

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
    maxHelathClaimLimitExceeded: boolean = false;
    noDependents: boolean = false;
    benficiaryInactive: boolean = false;
    educationCheck: boolean = true;
    uploadselfattestedValid: boolean = true;
    uploadNonMarriageValid: boolean = true;
    uploadCertificatetValid: boolean = true;
    uplaodmain: boolean = true;
    claimReferenceNo: any;
    page = 4;

    rowIndex = -1;
    rowEligibleAmount = 0;
    totalHealthClaimAmount = 0;
    typeOfAilmentClaimedAmount = 0
    surgeryClaimedAmount = 0
    lossOfEmploymentAmount = 0;
    validateDependent: boolean = false;
    restrictSave: boolean = false;
    maxDate: any;
    maxDateNext3Months: any;
    //ssin: string;
    ssin: any;
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
    healthCondolationCertificate: AttachmentModel = {} as AttachmentModel;
    reasonForHealthDelayValid: boolean = false;
    enableReasonForDelaySubmissionInHealth: boolean = false;
    isHealthClaimEdit: boolean = false;
    healthCondolationCertificateUploaded: boolean = false;

    dischargeMinDt: Date;
    disableDischarge: boolean = true;
    maxAdmitDate: Date;

    minDate: any;
    minLOEDate: Date;
    healthOriginalVoucher: AttachmentModel = {} as AttachmentModel;
    healthSelfAttached: AttachmentModel = {} as AttachmentModel;
    healthDischargeCertificate: AttachmentModel = {} as AttachmentModel;
    healthExpensesSheet: AttachmentModel = {} as AttachmentModel;
    healthAttachmentList: AttachmentModel[] = [] as AttachmentModel[];
    genaratePdfs = [];
    mainUpload: AttachmentModel;
    mainUploadList: AttachmentModel[] = [] as AttachmentModel[];
    educertificates: AttachmentModel[] = [] as AttachmentModel[];
    eduNonMarriage: AttachmentModel[] = [] as AttachmentModel[];
    eduSelfAttested: AttachmentModel[] = [] as AttachmentModel[];
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    result: any[];
    datePickerConfig: Partial<BsDatepickerConfig>;
    //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    educationClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    healthClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    benficiaryNominee: Array<BenNominee> = [];
    //Death
    disableDeathCheckbox = false;
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
    deathClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    disableHealthCheckbox: boolean = true;
    disableEduCheckbox: boolean = true;
    isHFSubmitted: boolean = false;
    isEduSubmitted: boolean = false;
    //PF
    disablePFCheckbox: boolean = true;
    pfBalanceDetails: PFBalanceDetails;
    pfExsits: boolean = false;
    pfClaimAmount: any;

    isPFSubmitted: boolean = false;
    viewNomineeShare: boolean = false;
    benNomineeShareAmount: number;
    benNomineeSno: number = 0;
    isNomineesExist: boolean = true;
    isNomineesMatch: boolean = true;
    isValidNomineeName: boolean = true;
    isValidNomineeDOB: boolean = true;
    pfClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    ClaimStatusId: number = 0;
    isBenNomineeSubmittedClaim: boolean = false;
    isClaimEdit: boolean = false;
    clinicalTestSettings = {};
    nameOfClinicalTestIds: Array<any> = [];
    clinicalTestDetails: ClinicalTestModel[] = [] as ClinicalTestModel[];

    healthFamilyBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    educationBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    deathBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    isDisabledBaseOnLastExamPassed: boolean = false;
    marriedValid: boolean = true;
    isMarried: boolean = false;
    isDuplicateDependent: boolean = false;
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

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimNomineeDataService) {
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails = {} as EducationHdrModel;
        this.claim.deathDetails = {} as DeathModel;
        this.claim.disabilityDetails = {} as DisabilityModel;
        this.claim.providentFundDetails = {} as ProvidentFund;
        this.maxAdmitDate = new Date();
        this.maxDate = new Date();
        this.maxDateNext3Months = new Date(new Date().setMonth(new Date().getMonth() + 3));
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        this.disableDischarge = true;
    }

    ngOnInit() {

        this.otherHospitalValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid =   true;//this.originalVoucher =
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
                this.mode = params["mode"];
                this.claimTypeString = params["tranctionType"];
                this.claimStatus = Number(params["claimStatus"]);
                //if (this.claimStatus >= ClaimStatus.Submitted) {
                //    this.GenaratePdfVisible = false;
                //    //this.disableSubmitbutton = false;
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
        if (this.mode == undefined || this.mode == null) { this.mode = "entry"; }
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
    deleteClaimExceptions(id: any) {
        this.dataService
            .deleteClaimExceptions(id)
            .subscribe((data: any) => { });
    }
    getClaimDetailsByClaimId(id: any) {
        this.dataService
            .getClaimDetailsById(id)
            .subscribe((data: any) => {

                this.claim = data;
                this.isClaimEdit = this.isHealthClaimEdit =  true;
                if (this.claim != null) {
                    this.claim.nomineeDOB = new Date(this.claim.nomineeDOB);
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
                        if (this.claim.providentFundDetails != null && this.claim.providentFundDetails.pfId > 0) {
                            this.viewPf = true;
                        }
                    }
                    if (this.claimTypeString == "Education") {
                        this.disableHealthCheckbox = true;
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
                                    }
                                }
                            }
                        }
                    }
                    if (this.claimTypeString == "HealthFamily") {

                        this.disableHealthCheckbox = true;
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
                    }
                    if (this.claimTypeString == "PF") {
                        if (this.claim.providentFundDetails != null && this.claim.providentFundDetails.pfId > 0) {
                            this.viewPf = true;
                        }
                    }
                    if (this.claim.attachment != null && this.claim.attachment.length > 0) {
                        this.mainUpload = this.claim.attachment[0];
                    }

                    this.ssin = this.claim.ssin;
                    // this.valuechange(this.claim.ssin);
                    this.dataService
                        .getBeneficiaryBasicDetailsByNo(this.ssin,false)
                        .subscribe((data: any) => {

                            this.beneficiary = data;
                            if (this.beneficiary != null) {
                                if (this.beneficiary.isActive) {
                                    this.benficiaryInactive = false;

                                    this.getBenficiaryFamilyDetails(this.beneficiary.benSno);
                                    this.getBenficiaryFamilyDetailsByHealth(this.beneficiary.benSno);
                                    this.getBenficiaryEduCount(this.beneficiary.benSno);
                                    this.getBeneficiaryNomineeDetails(this.beneficiary.benSno);
                                }
                            }
                        });
                }
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
    pfChange(eve) {
        this.viewPf = !this.viewPf;
        
        let share = 0;

        if (this.viewPf) {
            this.getPfBalance(this.beneficiary.benSno);

            this.viewNomineeShare = true;
            share = this.benficiaryNominee.find(n => n.benNomineeSno == this.benNomineeSno).benNomineeSharePercentage;
            if (this.benficiaryNominee.length == 1) {
                if (share == 0) {
                    share = 100;
                }
            }
            this.benNomineeShareAmount = Math.round(this.pfClaimAmount * (share / 100));
        }

    }
    getPfBalance(benSno: any) {

        this.pfExsits = false;
        this.dataService
            .getPfBalance(benSno)
            .subscribe((data: any) => {
                this.pfBalanceDetails = data;

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
    }
    validatePfSubmit(ssiNumber: any, nomineeId: any) {

        this.dataService
            .validatePfSubmit(ssiNumber, nomineeId)
            .subscribe((data: any) => {
                this.isPFSubmitted = data;
                //if (this.isPFSubmitted) {
                //    alert(this.isPFSubmitted);
                //    this.disablePFCheckbox = false;
                //}

            });

    }
    ValidateNomineeName(name) {
        this.ValidateNomineePFDetails();
    }
    ValidateNomineeDOB(dob) {

        this.ValidateNomineePFDetails(dob);
    }
    ValidateNomineePFDetails(dob?: any) {
        this.disablePFCheckbox = false;
        if ((this.claim.nomineeName != undefined && this.claim.nomineeName.trim() != "") && (dob != undefined && dob != null)) {// && (this.claim.nomineeDOB != undefined && this.claim.nomineeDOB != "")) {
            if (this.benficiaryNominee.length > 0) {
                var benNominee = this.benficiaryNominee.find(n => n.benNomineeName.trim().toLowerCase() == this.claim.nomineeName.trim().toLowerCase());
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
    }

    healthChange(eve) {
        this.restrictSave = false; this.disableEdu = false; this.noDependents = false;
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    }
    deathChange(eve) {
        //this.viewDeath = !this.viewDeath;
        this.isBenNomineeSubmittedClaim = false;
        this.isSameBenNomineeClaimSubmitted(this.beneficiary.benSno, 0, ClaimConstants.Death, eve);
    }
    educationChange(eve) {
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
            this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true;
            this.viewEducation = false;
            eve.target.checked = false;
            this.viewHealth = false;
            return;
        }
        this.viewEducation = !this.viewEducation;
        this.validateDependent = false;
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
    hospitalizationChange(eve) {
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
        this.viewAccidental = this.viewEligibilityAmount = this.placeOfDeathValid = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            const data = this.deathConfig.find(x => x.claimConfigId == natureOfDeathData);
            this.viewEligibilityAmount = true; this.deathEligibility = data.annualLimit;
            this.natureofDeathName = data.claimConfigOptionName;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = this.placeOfDeathValid = true;
        }
    }
    selectDependent(args) {
        const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == args.target.value);
        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId, false)
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
        this.marriedValid = true;
        this.isMarried = false;
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
                var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
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
    getDisabilityConfiguration() {
        this.dataService
            .getClaimConfiguration(ClaimConstants.Disability)
            .subscribe((data: any) => {
                this.disabilityConfig = data;
            });
    }
    valuechange(ssnNo: any) {
        this.isCAFUpdated = false;
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails = {} as EducationHdrModel;
        this.claim.deathDetails = {} as DeathModel;
        this.claim.disabilityDetails = {} as DisabilityModel;
        this.claim.providentFundDetails = {} as ProvidentFund;
        this.educationDetailsArray = [];
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            if (confirm("Are you sure to proceed ")) {
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
                                        this.benficiaryInactive = false;
                                        if (this.mode == "entry") {
                                            this.getNomineeClaimEntryValidation(this.beneficiary.benSno);
                                        }
                                        this.getBenficiaryFamilyDetails(this.beneficiary.benSno);
                                        this.getBenficiaryFamilyDetailsByHealth(this.beneficiary.benSno);
                                        this.getBenficiaryEduCount(this.beneficiary.benSno);
                                        this.getBeneficiaryNomineeDetails(this.beneficiary.benSno);
                                        if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
                                            this.dataService.getBeneficiaryPFAccountDetails(this.beneficiary.benSno).subscribe((data1: any) => {
                                                debugger;
                                                this.beneficiaryPFAccountDetails = data1;
                                                if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                                    if (this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                                        this.getPfBalance(this.beneficiary.benSno);

                                                            this.validatePfSubmit(this.beneficiary.ssI_Number, 0);
                                                        if (this.isPFSubmitted) {
                                                            this.disablePFCheckbox = true;
                                                        }
                                                        else {
                                                            this.disablePFCheckbox = false;
                                                        }
                                                    }
                                                    else
                                                        alert("Your Pf Account is closed/Inactive");
                                                }
                                                else {
                                                    this.disablePFCheckbox = true;
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
                                            this.pfExsits = true;
                                        }
                                    }
                                    else {
                                        this.benficiaryInactive = true; this.restrictSave = true; this.viewEducation = false; this.disableEdu = true;
                                    }
                                }
                                else
                                {
                                    this.isCAFUpdated = true;
                                }
                                console.log(this.beneficiary);
                            });
                    }
                });

            }
        }
        else {
            this.beneficiary = {} as Beneficiary;
            this.viewEducation = false;
        }
    }
    getNomineeClaimEntryValidation(id: any) {
        this.dataService
            .getNomineeClaimEntryValidation(id)
            .subscribe((data: any) => {

                if (data) {
                    var healthCount = data.item1;
                    var eduCount = data.item2;
                    //health Check box
                    if (healthCount > 0) { this.disableHealthCheckbox = false; }
                    else {
                        this.disableHealthCheckbox = true;
                        this.isHFSubmitted = true
                    }
                    //Education Check box
                    if (eduCount > 0) { this.disableEduCheckbox = false; }
                    else {
                        this.disableEduCheckbox = true;
                        this.isEduSubmitted = true;
                    }
                }
            });
    }
    getBeneficiaryNomineeDetails(id: any) {

        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe((data: any) => {

                this.benficiaryNominee = data;
            });

    }
    getHospitals() {
        this.dataService
            .getAllHospitals()
            .subscribe((data: any) => {
                this.hospotalList = data;
                console.log(this.hospotalList);
            });
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
    getBenficiaryEduCount(id: any) {

        this.dataService
            .getBeneficiaryEduCount(id)
            .subscribe((data: any) => {
                this.eduCount = data;
                if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                    var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
                    if (eduBenefit != null) {
                        var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
                        if (cond) {
                        //if (this.eduCount >= 2) {
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

    getBenficiaryFamilyDetails(id: any) {
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.Education)
            .subscribe((data: any) => {
                this.benficiaryFamily = data;
                if (this.benficiaryFamily != null && this.benficiaryFamily.length > 0) { this.noDependents = false; }
                //else { this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true; }
                console.log(this.benficiaryFamily);
            });
    }
    getBenficiaryFamilyDetailsByHealth(id: any) {
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
            .subscribe((data: any) => {

                this.benficiaryFamilybyHealth = data;

            });
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

    validateHealthData(claimData: ClaimModel, id: any): boolean {
        let isValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = true;//this.originalVoucher = 
        this.isClaimEffectiveDate = false;
        if (id == 2) {
            if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
        }
        if (this.hospotalId > 0) {
            if (this.claim.healthFamilyDetails.otherHospital == undefined) { this.otherHospitalValid = isValid = false };
        }
        if (this.claim.healthFamilyDetails.claimFor == undefined) { this.claimForValid = isValid = false }
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
            if (this.claim.healthFamilyDetails.familyMemberId == 0 || this.claim.healthFamilyDetails.familyMemberId == undefined) { this.familyMember = isValid = false }
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
        else if (this.claim.healthFamilyDetails.costOfClinicalTest == 0 && this.claim.healthFamilyDetails.costOfHospitalization == 0 && this.claim.healthFamilyDetails.costOfMedicine == 0) {
            isValid = false;
            alert("Please enter atleast one valid cost");
            return;
        }
        else {
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

        //if (this.viewDateOfAdmit) {
        //    if (this.claim.healthFamilyDetails.admittedDate == undefined) { this.dateofAdmin = isValid = false }
        //    if (this.claim.healthFamilyDetails.dischargeDate == undefined) { this.dateofDischargeValid = isValid = false }
        //}
        //if (this.viewDateOfFirstAppointment) {
        //    if (this.claim.healthFamilyDetails.firstAppointmentDate == undefined) { this.dateofAppointment = isValid = false };

        //}
        
        if (this.enableReasonForDelaySubmissionInHealth) {
            if (this.claim.healthFamilyDetails.reasonForDelaySubmission == undefined) { this.reasonForHealthDelayValid = isValid = false };
            if (this.healthCondolationCertificate.fileName == undefined) { this.healthCondolationCertificateUploaded = isValid = false };
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
    validateClaimsData(claimData: ClaimModel, id?): boolean {
        let isValid = true;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        if (this.beneficiary.benSno == undefined || this.beneficiary.benSno <= 0) { this.ssnNoValid = isValid = false; }
        if (claimData.nomineeName == undefined || claimData.nomineeName == "") { this.nomineeNameValid = isValid = false; }
        if (claimData.nomineeContact == undefined || claimData.nomineeContact.toString() == "") { this.nomineeContactValid = isValid = false; }
        if (claimData.nomineeDOB == undefined) { this.nomineeDOBValid = isValid = false; }
        if (claimData.nomineeBankAccount == undefined || claimData.nomineeBankAccount == "") { this.nomineeBankAccountValid = isValid = false; }
        if (id == null) {
            if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
        }
        return isValid;
    }
    okClick() {
        this.successModal.hide();
        window.location.href = "/";
    }
    downloadRecipt(refNo: any, amount: any, name: any, nomineeName: any) {
        this.dataService
            .downloadReceipt(this.beneficiary.benFirstName, this.beneficiary.ssI_Number, refNo, amount, name, nomineeName)
            .then((data: any) => {
                let dd = data;
                var url = window.URL.createObjectURL(data);
                window.open(url);
            });
    }
    saveClaimsData(claimData: ClaimModel) {
        let isValidNomineeId = true;
        let isValid = true;
        let hasNomineeShare = true;
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
            if (!claimData.educationDetails.isanyothersourceofthegovernment) { return this.educationCheck = isValid = false; }
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
            const attachedList: Array<AttachmentModel> = [];
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
                                    //if (diffDays > 90) {

                                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                                const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                                var eduBenefit2 = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.SonAgeExceeding.toLowerCase());
                                if (eduBenefit2 != null) {
                                    var cond2 = eval(age + eduBenefit2.logic + eduBenefit2.value);
                                    //if (age >= 21) {
                                    if (cond2) {
                                        //if (age >= 21) {

                                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                claimData.educationDetails.statusId = this.ClaimStatusId;//ClaimStatus.Submitted;
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
                        var helBenefit = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofFirstAppointmentExceeding.toLowerCase());
                        if (helBenefit != null) {
                            var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                            if (cond && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {
                                //if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                        var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofDischargeExceeding.toLowerCase());
                        if (helBenefit2 != null) {
                            var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                            if (cond2 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                                //if (diffDays > 60 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const oo: HealthFamilyPackage = {} as HealthFamilyPackage;
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
                claimData.healthFamilyDetails.statusId = this.ClaimStatusId;//ClaimStatus.Submitted;
                claimData.healthFamilyDetails.createdBy = 89;
                if (!this.isOtherHospital) {
                    claimData.healthFamilyDetails.otherHospital == undefined;
                }
                else {
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
            if (this.claim.deathDetails != null) {
                this.deathClaimExceptionDetails = [];

                if (this.claim.deathDetails.deathId > 0)
                    claimData.deathDetails.deathId = this.claim.deathDetails.deathId;

                claimData.deathDetails.claimType = ClaimConstants.Death;
                claimData.deathDetails.statusId = this.ClaimStatusId;//ClaimStatus.Submitted;
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
                        var deaBenefit = this.deathBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == DeathBenefitConfiguration.DateofDeathExceeding.toLowerCase()); 
                        if (deaBenefit != null) {
                            var cond = eval(diffDays + deaBenefit.logic + deaBenefit.value);
                            if (cond) {
                                //if (diffDays > 90) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                claimData.providentFundDetails.statusId = this.ClaimStatusId;//ClaimStatus.Submitted;
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
                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                var benNominee = this.benficiaryNominee.find(n => n.benNomineeName.trim().toLowerCase() == this.claim.nomineeName.trim().toLowerCase());
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

                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                       
                        const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                claimData.nomineeId = null;}

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
                    .then((data: any) => {
                        if (data) {

                            this.claim.claimId = data.item5;
                            this.claimReferenceNo = data.item3;
                            let refNo;
                            if (this.viewPf) {
                                let downloads = { refNo: "", amount: 0, name: "PF", nomineeName: "" };
                                downloads.refNo = data.item1;
                                downloads.amount = this.claim.providentFundDetails.claimAmount;
                                downloads.nomineeName = this.claim.nomineeName;
                                this.genaratePdfs.push(downloads);
                                refNo = data.item1 + " (PF) ";
                            }
                            if (this.viewHealth) {
                                let downloads = { refNo: "", amount: 0, name: "Health & Family", nomineeName: "" };
                                downloads.refNo = data.item2;
                                downloads.amount = this.claim.healthFamilyDetails.claimAmount;
                                downloads.nomineeName = this.claim.nomineeName;
                                this.genaratePdfs.push(downloads);
                                refNo = data.item2 + " (Health & Family) ";
                            }
                            if (this.viewDeath) {
                                let downloads = { refNo: "", amount: 0, name: "Death", nomineeName: "" };
                                downloads.refNo = data.item4;
                                downloads.amount = this.claim.deathDetails.claimAmount;
                                downloads.nomineeName = this.claim.nomineeName;
                                this.genaratePdfs.push(downloads);
                                refNo = data.item4 + " (Death) ";
                            }
                            if (this.viewEducation) {
                                let downloads = { refNo: "", amount: 0, name: "Education", nomineeName: "" };
                                if (refNo == undefined) {
                                    downloads.refNo = data.item3;
                                    downloads.amount = this.claim.educationDetails.claimAmount;
                                    downloads.nomineeName = this.claim.nomineeName;
                                    this.genaratePdfs.push(downloads);
                                    refNo = data.item3 + " (Education) ";
                                }
                                else {
                                    downloads.refNo = data.item3;
                                    downloads.amount = this.claim.educationDetails.claimAmount;
                                    downloads.nomineeName = this.claim.nomineeName;
                                    this.genaratePdfs.push(downloads);
                                    refNo = " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Death) " + data.item4;
                                }
                            }
                            this.claimReferenceNo = refNo;
                            for (var i = 0; i < this.genaratePdfs.length; i++) {
                                this.successMessage = "Your claim was successfully submitted, your claim ticket id: " + this.genaratePdfs[i].refNo + "(" + this.genaratePdfs[i].name + ")" + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process. <br/>  <br/>";
                            }
                            //   this.successMessage = "Your claim was successfully submitted, your claim ticket id: " + refNo + ".You are requested to submit the relevant documents and original application form to the concerned inspector for further process";
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
            return;
        }


    }
    UpdateClaimStatusIdByStatus() {

        if (this.mode == "entry")
            this.ClaimStatusId = ClaimStatus.Submitted;
        else {
            if (this.claimStatus < 5)
                this.ClaimStatusId = 2;
            else if (this.claimStatus == 5) this.ClaimStatusId = 4;
            else if (this.claimStatus == 6 || this.claimStatus == 10) this.ClaimStatusId = 8;
            else if (this.claimStatus == 9 || this.claimStatus == 13) this.ClaimStatusId = 12;
        }
    }
    claerClaim() {
        this.isRegistrationNo = false;
        this.isCAFUpdated = false;
        this.ssin = "";
        this.pfExsits = this.isPFSubmitted = this.isHFSubmitted = this.isEduSubmitted = this.isBenNomineeSubmittedClaim = false;
        this.isNomineesExist = this.isNomineesMatch = true;
        this.natureOfDeath = this.dateofDeath = this.deathCertificateUploaded = this.isDeath1 = this.isDeath2 = this.isDeath3 = this.placeOfDeathValid = this.bankPassbookUploaded = true;
        this.benficiaryInactive = this.validateDependent = this.noDependents = this.maxLimitExceeded = false;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded =   true;//this.originalVoucher =
        this.restrictSave = false; this.viewEducation = false; this.disableEdu = false; this.noDependents = false;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        this.claim = {} as ClaimModel;
        this.educationDetailsArray = [];
        this.viewEducation = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewPf = false;
        this.rowIndex = -1;
        this.eduCount = 0;
        this.rowEligibleAmount = 0;
        this.beneficiary = {} as Beneficiary;
        this.benficiaryFamily = [] as BenFamilyMember[];
        this.healthOriginalVoucher = {} as AttachmentModel;
        this.healthSelfAttached = {} as AttachmentModel;
        this.healthDischargeCertificate = {} as AttachmentModel;
        this.healthExpensesSheet = {} as AttachmentModel;
        this.healthAttachmentList = [] as AttachmentModel[];
        this.mainUploadList = [] as AttachmentModel[];
        this.educertificates = [] as AttachmentModel[];
        this.eduNonMarriage = [] as AttachmentModel[];
        this.eduSelfAttested = [] as AttachmentModel[];
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails = {} as EducationHdrModel;
        this.claim.educationDetails.educationDetailList = [];
        this.natureOfDeath = this.dateofDeath = true;
        this.deathAttachmentList = [] as AttachmentModel[];
        this.deathCertificate = {} as AttachmentModel;
        this.healthCondolationCertificate = {} as AttachmentModel;
    }
    GenaratePdf(claimData: ClaimModel, type) {

        let isValid = true;
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


    }

    validateBasicDetails(claimData) {
        let isValid = true;
        this.ssnNoValid = this.nomineeNameValid = this.nomineeContactValid = this.nomineeDOBValid = this.nomineeBankAccountValid = true;
        if (this.beneficiary.benSno == undefined || this.beneficiary.benSno <= 0 || this.ssin == "") { this.ssnNoValid = isValid = false; }
        if (claimData.nomineeName == undefined || claimData.nomineeName == "") { this.nomineeNameValid = isValid = false; }
        if (claimData.nomineeContact == undefined || claimData.nomineeContact.toString() == "") { this.nomineeContactValid = isValid = false; }
        if (claimData.nomineeDOB == undefined || claimData.nomineeDOB == "") { this.nomineeDOBValid = isValid = false; }
        if (claimData.nomineeBankAccount == undefined || claimData.nomineeBankAccount == "") { this.nomineeBankAccountValid = isValid = false; }

        return isValid;
    }

    downLoadPdf(claimData: ClaimModel, type) {

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
                    this.disableSubmitbutton = false;
                }
                this.pdfModal.hide();
                //var url = window.URL.createObjectURL(blob);
                //this.disableSubmitbutton = false;
                //window.open(url);
            });
    }

    loeFromDateChange(eve) {
        this.minLOEDate = new Date(this.claim.healthFamilyDetails.loeFromDate);
        this.calculateLossOfEmploymentAmount();
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
                        //var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
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
    isSameBenNomineeClaimSubmitted(id: any, nomineeId: any, claimType: any, eve) {
        this.dataService
            .isSameBenNomineeClaimSubmitted(id, nomineeId, claimType)
            .subscribe((data: any) => {
                
                if (claimType == ClaimConstants.Death) {
                    this.isBenNomineeSubmittedClaim = data;
                    if (this.isBenNomineeSubmittedClaim) {
                        this.viewDeath = false;
                        eve.target.checked = false;
                        this.disableDeathCheckbox = true;
                    }
                    else {
                        this.viewDeath = !this.viewDeath;
                    }
                }
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

    radioChange(id: any) {
        if (id == 1) 
            this.isRegistrationNo = false;
        if (id == 2) 
            this.isRegistrationNo = true;
    }
    updateCAFDetails() {
        debugger;
        if (this.isRegistrationNo)
            window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
        else {
            this.dataService
                .getRegistrationNumber(this.ssin)
                .subscribe((data: any) => {
                    if(data)
                        window.location.href = "/Registration/DeathclaimFrom?ID=" + data;
                    else
                        window.location.href = "/Registration/DeathclaimFrom?ID=" + this.ssin;
                });
            
        }

    }
}