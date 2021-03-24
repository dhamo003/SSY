import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimModel } from '../models/claim.model';
import { ClaimDataService } from '../services/claim-data.service';
import { BeneficiaryBank } from '../models/ben.bank.model';
import { BenFamilyMember } from '../models/ben.family.model';
import { BenNominee } from '../models/ben.nominee.model';
import { Beneficiary } from '../models/ben.model';
import { LovDetails } from '../models/Lov.model';
import { ClaimConfig } from '../models/claimconfig.model';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, HealthClaimEligibility, PFTypeOfClaim, DisabilityBenefitConfiguration, HealthFamilyBenefitConfiguration, EducationBenefitConfiguration, PFStatusMaster } from '../pipes/constnts.model';
import { EducationDetailModel, EducationHdrModel } from '../models/education.model';
import { HealthFamilyModel, HealthFamilyPackageModel } from '../models/health-and-family.model';
import { DeathModel } from '../models/death.model';
import { DisabilityModel } from '../models/disability.modl';
import { ProvidentFund } from '../models/providentfund.model';
import { ModalDirective } from "ngx-bootstrap";
import { AttachmentModel } from '../models/attachment.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { HospitalModel } from '../models/hospital.model';
import { fail } from 'assert';
import { filter } from 'rxjs/operator/filter';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FinancialYearModel } from '../../models/financialYear.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import * as FileSaver from 'file-saver';
import { ClaimExceptionDetailsModel } from '../../models/claimExceptionDetails';
import { PFBalanceDetails } from '../../models/pfBalanceDetails';
import { ClinicalTestModel } from 'src/app/models/ClinicalTest.model';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';
import { PFConfigurationModel } from 'src/app/models/pfconfiguration.model';
import { ClaimConfigHdr } from '../models/claimconfighdr.model';
import { BeneficiaryPFAccountDetails } from '../models/ben.pfaccount.model';



@Component({
    selector: 'app-claim-entry',
    templateUrl: './claim-entry.component.html',
    styleUrls: ['./claim-entry.component.css']
})
export class ClaimEntryComponent implements OnInit, OnDestroy {
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('packageModal') public packageModal: ModalDirective;
    @ViewChild('pdfModal') public pdfModal: ModalDirective;

    route$: Subscription;
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
    viewDateOfFirstAppointment: boolean = false;
    viewNameOfClinicalTest: boolean = false;
    viewDateOfAdmit: boolean = false;
    viewMetWithAnAccident: boolean = false;
    viewFamily: boolean = false;
    viewSelf: boolean = false;
    viewLOEAmount: boolean = false;
    viewAccidental: boolean = false;
    viewEligibilityAmount: boolean = false;
    enableDeatheligibility: boolean = false;
    claim: ClaimModel = {} as ClaimModel;
    educationDetails: EducationDetailModel = {} as EducationDetailModel;
    educationDetailsArray: Array<EducationDetailModel> = [];
    hospitalizationLov: LovDetails[];
    diseasesLov: LovDetails[];
    clinicalTestLov: LovDetails[];
    healthtypeofClaim: LovDetails[];
    healthConfig: ClaimConfig[];
    pfConfig: ClaimConfig[];
    deathConfig: ClaimConfig[];
    disabilityConfig: ClaimConfig[];
    educationConfig: ClaimConfig[];
    configConfig: ClaimConfig[];
    lastExampassed: LovDetails[];
    beneficiary: Beneficiary = {} as Beneficiary;
    benficiaryFamily: BenFamilyMember[];
    benficiaryFamilybyHealth: BenFamilyMember[];
    hospotalList: HospitalModel[];
    deathEligibility: any;
    disableEligibility: any;
    disableEducationCheckbox = false;
    disableHealthCheckbox = false;
    disablePFCheckbox: boolean = false;
    successMessage: string;
    checkeducation: boolean = false;
    //Validation Claim Entry variables
    ssnNoValid: boolean = true;
    nomineeNameValid: boolean = true;
    nomineeContactValid: boolean = true;
    nomineeDOBValid: boolean = true;
    nomineeBankAccountValid: boolean = true;

    //Validation Education variables
    studentNameValid: boolean = true;
    institutionNameValid: boolean = true;
    institutionContactValid: boolean = true;
    registrationNoValid: boolean = true;
    educationYearValid: boolean = true;
    dateOfAdmissionValid: boolean = true;
    marriedValid: boolean = true;
    isMarried: boolean = false;
    presentlyReadingValid: boolean = true;
    disableEdu: boolean = false;
    maxLimitExceeded: boolean = false;
    maxHelathClaimLimitExceeded: boolean = false;
    noDependents: boolean = false;
    benficiaryInactive: boolean = false;
    disableSubmitbutton: boolean = true;
    educationCheck: boolean = true;
    uploadselfattestedValid: boolean = true;
    uploadNonMarriageValid: boolean = true;
    uploadCertificatetValid: boolean = true;
    uplaodmain: boolean = true;

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

    healthOriginalVoucher: AttachmentModel = {} as AttachmentModel;
    healthSelfAttached: AttachmentModel = {} as AttachmentModel;
    healthDischargeCertificate: AttachmentModel = {} as AttachmentModel;
    healthExpensesSheet: AttachmentModel = {} as AttachmentModel;
    healthAttachmentList: AttachmentModel[] = [] as AttachmentModel[];

    eduCount: number = 0;
    submitYear = new Date().toISOString().split('T')[0];
    rowIndex = -1;
    mode: string = "";
    rowEligibleAmount = 0;
    totalHealthClaimAmount = 0;
    typeOfAilmentClaimedAmount = 0
    surgeryClaimedAmount = 0
    lossOfEmploymentAmount = 0;
    validateDependent: boolean = false;
    mainUpload: AttachmentModel;
    mainUploadList: AttachmentModel[] = [] as AttachmentModel[];
    educertificates: AttachmentModel[] = [] as AttachmentModel[];
    eduNonMarriage: AttachmentModel[] = [] as AttachmentModel[];
    eduSelfAttested: AttachmentModel[] = [] as AttachmentModel[];
    maxDate: any;
    saveType: number;
    datePickerConfig: any;
    //Button variables
    GenaratePdfVisible: boolean = true;
    SubmitVisible: boolean = true;
    SaveVisible: boolean = true;
    restrictSave: boolean = false;
    ClaimStatusId: number = 0;
    maxAdmitDate: Date;
    minDate: any;
    minLOEDate: Date;
    isLOEToDate: boolean = true;
    minDischargeDate: Date;
    isDischargeDate: boolean = true;
    dischargeMinDt: Date;
    disableDischarge: boolean = true;
    disableCost: boolean = true;
    activeYear: FinancialYearModel = {} as FinancialYearModel;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    result: any[];
    //expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    beneficiaryBank: BeneficiaryBank = {} as BeneficiaryBank;
    educationClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    healthClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    //Disability
    disableDisabilityCheckbox = false;
    disabilityCertificate: AttachmentModel = {} as AttachmentModel;
    deathCertificate: AttachmentModel = {} as AttachmentModel;
    condolationCertificate: AttachmentModel = {} as AttachmentModel;
    disabilityAttachmentList: AttachmentModel[] = [] as AttachmentModel[];
    disabilityCertificateUploaded: boolean = false;
    condolationCertificateUploaded: boolean = false;
    dateofrelease: boolean = false;
    natureOfDisability: boolean = false;
    reasonForDelayValid: boolean = false;
    checkNatureOfDisability: boolean = false;
    isDeathorpermanent1: boolean = false;
    isDeathorpermanent2: boolean = false;
    isDeathorpermanent3: boolean = false;
    natureOfDisabilityName: string;
    beneficiaryAppliedDisabilities: number[] = [] as number[];
    disabilityClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    enableReasonForDelaySubmission: boolean = false;
    //PF
    pfBalanceDetails: PFBalanceDetails;
    pfExsits: boolean = false;
    pfClaimAmount: number;
    isPrematureClaim: boolean = false;
    isPFSubmitted: boolean = false;
    pfTypeOfClaimValid: boolean = false;
    reasonForPreclosureValid: boolean = false;
    //pfLockingPeriodDate: string;
    pfAccountStatus: string;
    benMaturityDate: Date = null;
    pfLockingPeriod: Date = null;
    pfClaimExceptionDetails: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    isClaimEdit: boolean = false;
    isDisabilityClaimEdit: boolean = false;

    isBenNomineeSubmittedClaim: boolean = false;
    clinicalTestSettings = {};
    nameOfClinicalTestIds: Array<any> = [];
    clinicalTestDetails: ClinicalTestModel[] = [] as ClinicalTestModel[];

    disabilityBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    healthFamilyBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    pfBenefitConfigDetails: PFConfigurationModel = {} as PFConfigurationModel;
    educationBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    isDisabledBaseOnLastExamPassed: boolean = false;
    isDuplicateDependent: boolean = false;
    isBenDeath: boolean = false;

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

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService) {
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
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        this.pfTypeOfClaimValid = this.otherHospitalValid = true;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded = this.reasonForHealthDelayValid =  true;//this.originalVoucher =
        this.dateofrelease = this.natureOfDisability = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = this.reasonForDelayValid = true;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"] != null ? Number(params["claimId"]) : 0;
                this.mode = params["mode"];
                this.claimType = ClaimConstants.Education;
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
    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    openModel() {
        this.isDuplicateDependent = false;
        this.studentNameValid = this.institutionNameValid = this.registrationNoValid = this.institutionContactValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = this.marriedValid=true;
        this.uploadCertificatetValid = this.uploadselfattestedValid = true;
        this.rowIndex = -1;
        this.rowEligibleAmount = 0;
        this.eduSelfAttested = [] as AttachmentModel[];
        this.educertificates = [] as AttachmentModel[];
        this.eduNonMarriage = [] as AttachmentModel[];
        this.educationDetails = {} as EducationDetailModel;
        //this.educationDetails.year = new Date().getFullYear();
        this.educationDetails.year = this.activeYear.seqPrefix;
        this.lgModal.show();
    }
    getBeneficiaryAppliedDisabilities(id: any, claimId: any) {

        this.dataService
            .getBeneficiaryAppliedDisabilities(id, claimId)
            .subscribe((data: any) => {
                this.beneficiaryAppliedDisabilities = data;

            });
    }
    getBeneficiaryBankDetails(id: any) {
        this.dataService
            .getBeneficiaryBankDetails(id)
            .subscribe((data: any) => {
                this.beneficiaryBank = data;

            });
    }
    getBenficiaryFamilyDetailsByHealth(id: any) {
        this.dataService
            .getBeneficiaryFamilyDetails(id, ClaimConstants.HealthFamily)
            .subscribe((data: any) => {
                this.benficiaryFamilybyHealth = data;

            });
    }
    converToDateString(inputDate: any) {
        return new Date(inputDate).toISOString().split('T')[0];
    }
    debugger;
    disabilityChange(id: any) {
        debugger;
        if (id != 0) {
            this.enableDeatheligibility = true;
            let data = this.disabilityConfig.find(x => x.claimConfigId == id);
            this.disableEligibility = data.annualLimit;
            this.natureOfDisabilityName = data.claimConfigOptionName;
            debugger;
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
            this.enableDeatheligibility = false;
            this.disableEligibility = 0;
        }
    }

    getBenficiarydetails(id: any) {
        this.dataService
            .getBeneficiaryBasicDetailsById(id)
            .subscribe((data: any) => {
                this.beneficiary = data;
                if (this.beneficiary != null && this.beneficiary.benDeathStatus != 1) {
                    if (this.beneficiary.isActive) {
                        this.getBenficiaryFamilyDetailsByHealth(this.beneficiary.benSno);
                        if (this.beneficiary != null) {
                            debugger;
                            if (this.beneficiary.benPFStatus != null && this.beneficiary.benPFStatus == 1) {
                                this.dataService.getBeneficiaryPFAccountDetails(this.beneficiary.benSno).subscribe((data1: any) => {
                                    debugger;
                                    this.beneficiaryPFAccountDetails = data1;
                                    if (this.beneficiaryPFAccountDetails != null && (this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != null && this.beneficiaryPFAccountDetails.beneficiaryPFAccountNO != "")) {
                                        if (this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.Active || this.beneficiaryPFAccountDetails.pfStatus == PFStatusMaster.PartialClosed) {
                                            this.getPfBalance(this.beneficiary.benSno);
                                            this.validatePfSubmit(this.beneficiary.ssI_Number);
                                        }
                                        else
                                            alert("Your Pf Account is closed/Inactive");
                                    }
                                    else
                                        alert("No pf details available for this given SSIN number");
                                });
                            }
                            else {

                                this.disablePFCheckbox = true;
                                this.pfExsits = true;
                            }
                        }

                    }
                    else {
                        this.benficiaryInactive = true; this.restrictSave = true; this.disableEdu = true;
                    }
                }
                else {
                     this.restrictSave =this.isBenDeath =this.disablePFCheckbox = this.disableHealthCheckbox = this.disableDisabilityCheckbox = this.disableEducationCheckbox= true;
                }
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
                    case "healthExpensesSheet":
                        model.attachmentType = AttachmentType.ExpensesSheet;
                        model.claimType = ClaimConstants.HealthFamily;
                        this.healthExpensesSheet = model;
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

    }
    healthChange(eve) {
        this.viewHealth = !this.viewHealth;
        this.getBeneficiaryHealthClaimAmount(this.beneficiary.benSno);
    }
    deathChange(eve) {
        this.viewDeath = !this.viewDeath;
    }
    educationChange(eve) {

        if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
            var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
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
            this.restrictSave = true; this.viewEducation = false; this.disableEdu = true; this.noDependents = true;
            this.viewEducation = false;
            eve.target.checked = false;
            return;
        }

        this.viewEducation = eve.target.checked;
        this.validateDependent = false;
    }
    getClaimDetailsByClaimId(id: any) {
        this.dataService
            .getClaimDetailsById(id)
            .subscribe((data: any) => {
                this.claim = data;
                this.isClaimEdit = this.isDisabilityClaimEdit = this.isHealthClaimEdit = true;
                //this.disableHealthCheckbox = true; }
                //else this.disableEducationCheckbox = true; this.disableEdu = true; }
                if (this.claimTypeString == undefined || this.claimTypeString == null) {
                    if (this.claim.educationDetails != null && this.claim.educationDetails.educationHdrId != 0) {
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
                    if (this.claim.healthFamilyDetails != null && this.claim.healthFamilyDetails.healthFamilyId != 0) {

                        this.viewHealth = true;
                        if (this.claim.healthFamilyDetails.hospitalId != null && this.claim.healthFamilyDetails.hospitalId != undefined && this.claim.healthFamilyDetails.otherHospital != undefined && this.claim.healthFamilyDetails.otherHospital != null) {
                            this.isOtherHospital = true;
                            this.hospotalId = this.claim.healthFamilyDetails.hospitalId;
                        }
                        if (this.claim.healthFamilyDetails.claimFor == 5) {
                            if (this.claim.healthFamilyDetails.typeOfHospitalization != 2) { this.viewSelf = true; }
                        }
                        else if (this.claim.healthFamilyDetails.claimFor == 6) {
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
                            ));
                    }
                    if (this.claim.disabilityDetails != null && this.claim.disabilityDetails.disabilityId > 0) {
                        this.viewDeath = true;

                        if (this.claim.disabilityDetails.dateofRelease != null) {

                            this.claim.disabilityDetails.dateofRelease = new Date(this.claim.disabilityDetails.dateofRelease);
                        }
                        if (this.claim.disabilityDetails.natureOfDisability != null) {
                            this.enableDeatheligibility = true;
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
                    if (this.claim.educationDetails != null && this.claim.educationDetails.educationHdrId > 0) {
                        this.viewEducation = true;
                        if (this.claim.educationDetails.educationDetailList != null && this.claim.educationDetails.educationDetailList.length > 0) {
                            this.educationDetailsArray = this.claim.educationDetails.educationDetailList;
                            this.rowIndex = this.rowIndex + this.educationDetailsArray.length; debugger;
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
                    //this.disablePFCheckbox = true;
                    if (this.claim.healthFamilyDetails != null && this.claim.healthFamilyDetails.healthFamilyId != 0) {
                        this.viewHealth = true;
                        if (this.claim.healthFamilyDetails.otherHospital != undefined && this.claim.healthFamilyDetails.otherHospital != null) {
                            this.isOtherHospital = true;
                        }
                        if (this.claim.healthFamilyDetails.claimFor == 5) {
                            if (this.claim.healthFamilyDetails.typeOfHospitalization != 2) { this.viewSelf = true; }
                        }
                        else if (this.claim.healthFamilyDetails.claimFor == 6) {
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
                            ));
                    }
                }
                if (this.claimTypeString == "Disability") {
                    this.disableDisabilityCheckbox = true;
                    this.disableHealthCheckbox = true;
                    this.disableEducationCheckbox = true;
                    //this.disablePFCheckbox = true;
                    if (this.claim.disabilityDetails != null && this.claim.disabilityDetails.disabilityId > 0) {
                        this.viewDeath = true;
                        if (this.claim.disabilityDetails.dateofRelease != null) {
                            this.claim.disabilityDetails.dateofRelease = new Date(this.claim.disabilityDetails.dateofRelease);
                        }
                        if (this.claim.disabilityDetails.natureOfDisability != null) {
                            this.enableDeatheligibility = true;
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
                console.log(this.claim);
                this.getBenficiaryFamilyDetails(this.claim.benSno);
                this.getBenficiaryEduCount(this.claim.benSno); 
                this.getBenficiarydetails(this.claim.benSno);
            });
    }
    //PF
    validatePfSubmit(ssiNumber: any) {

        this.dataService
            .validatePfSubmit(ssiNumber, 0)
            .subscribe((data: any) => {
                this.isPFSubmitted = data;
                if (this.isPFSubmitted) {
                    this.disablePFCheckbox = true;
                }
            });
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
                    return
                }
            }
        }

        return isValid;
    }
    getPfBalance(bensno: any) {
        this.pfExsits = false;
        this.dataService
            .getPfBalance(bensno)
            .subscribe((data: any) => {
                this.pfBalanceDetails = data;
                if (this.pfBalanceDetails != null && this.pfBalanceDetails != undefined) {
                    if (this.pfBalanceDetails.code == "000") {
                        //claim amount=   balance + cantribution +( (Contribution/25 ) * 30)
                        this.pfClaimAmount = this.pfBalanceDetails.balance + this.pfBalanceDetails.contribution + ((this.pfBalanceDetails.contribution / 25) * 30);

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
                    }
                    else {

                        this.disablePFCheckbox = true;
                        this.pfExsits = true;
                    }
                }
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
    //health
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
    }
    natureOfDeathChange(natureOfDeathData) {
        this.viewAccidental = this.viewEligibilityAmount = false;
        if (this.claim.deathDetails.natureofDeath > 0) {
            const data = this.deathConfig.find(x => x.claimConfigId == natureOfDeathData);
            this.viewEligibilityAmount = true; this.deathEligibility = data.annualLimit;
        }
        if (this.claim.deathDetails.natureofDeath == 16) {
            this.viewAccidental = true;
        }
    }
    selectDependent(args) {
        const data = this.benficiaryFamily.find(x => x.benFamilyMemSno == args.target.value);

        this.dataService
            .isDuplicateDependentSubmitted(data.benSno, data.benFamilyMemSno, this.claimId,true)
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
                        //    return
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
        this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.uplaodmain = this.studentNameValid = this.institutionNameValid = this.institutionContactValid = this.registrationNoValid = this.educationYearValid = this.dateOfAdmissionValid = this.presentlyReadingValid = true;
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
        console.log(details.dateofAdmission);
        if (details.dateofAdmission == undefined && !this.isDisabledBaseOnLastExamPassed) { this.dateOfAdmissionValid = isValid = false; }
        if ((details.presentlyReading == undefined || details.presentlyReading <= 0) && !this.isDisabledBaseOnLastExamPassed) { this.presentlyReadingValid = isValid = false; }
        debugger;
        if (this.isMarried && (details.isMarried == undefined || details.isMarried == null)) { this.marriedValid = isValid = false; }
        else if(this.isMarried && details.isMarried == "1"){
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
                var eduBenefit = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.MaxLimitExceeded.toLowerCase());
                if (eduBenefit != null) {
                    var cond = eval(this.eduCount + eduBenefit.logic + eduBenefit.value);
                }
                if (cond) { this.maxLimitExceeded = true; }
            }
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

        }
    }
    getHospitalization() {
        this.dataService
            .getlovDetails(LovConstants.Hospitalization)
            .subscribe((data: any) => {
                this.hospitalizationLov = data;
            });
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
        debugger;
        this.dataService
            .getClaimConfiguration(ClaimConstants.Disability)
            .subscribe((data: any) => {
                console.log(data);
                this.disabilityConfig = data;
            });
    }
    valuechange(ssnNo: any) {
        this.dataService
            .getBeneficiaryBasicDetailsByNo(ssnNo)
            .subscribe((data: any) => {
                this.beneficiary = data;

                if (this.beneficiary != null) {
                    if (this.beneficiary.isActive) {
                        this.benficiaryInactive = false;
                        this.getBenficiaryFamilyDetails(this.beneficiary.benSno);
                        this.getBenficiaryEduCount(this.beneficiary.benSno);
                    }
                    else {
                        this.benficiaryInactive = true; this.restrictSave = true; this.viewEducation = false; this.disableEdu = true;
                    }
                }
                console.log(this.beneficiary);
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

    validateClaimsData(claimData: ClaimModel, id: any): boolean {

        let isValid = true;
        if (id == 1) return isValid;

        this.educationCheck = this.ssnNoValid = true;
        if (id == 2) {
            if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
        }
        return isValid;
    }
    okClick() {
        this.successModal.hide();
        if (this.saveType == 1) {
            window.location.href = "claim/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "claim/claims";
        } else if (this.mode == "referal") {
            window.location.href = "claim/referralclaims";
        }
        else {
            window.location.href = "claim/claims";

        }

    }
    cancleClick() {
        if (this.saveType == 1) {
            window.location.href = "claim/DraftClaims";
        }
        else if (this.mode == "claim") {
            window.location.href = "claim/claims";
        } else if (this.mode == "referal") {
            window.location.href = "claim/referralclaims";
        }
        else {
            window.location.href = "claim/claims";

        }
    }
    validateDisabilityData(claimData: ClaimModel, id: any): boolean {

        let isValid = true;
        this.natureOfDisability = this.dateofrelease = this.disabilityCertificateUploaded = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
        this.isClaimEffectiveDate = false;
        if (id == 2) {
            if (this.mainUpload == undefined) { this.uplaodmain = isValid = false }
        }
        if (this.disabilityCertificate.fileName == undefined) { this.disabilityCertificateUploaded = isValid = false };
        if (this.claim.disabilityDetails.dateofRelease == undefined) { this.dateofrelease = isValid = false };
        //if (this.claim.disabilityDetails.natureOfDisability == undefined) { this.natureOfDisability = isValid = false }
        if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyintentional == undefined) { this.isDeathorpermanent1 = isValid = false }
        if (this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == false || this.claim.disabilityDetails.isDeathorpermanentdisabilitynotcausedbyinjuries == undefined) { this.isDeathorpermanent2 = isValid = false }
        if (this.claim.disabilityDetails.isOtherFinancialAssistance == false || this.claim.disabilityDetails.isOtherFinancialAssistance == undefined) { this.isDeathorpermanent3 = isValid = false }
        if (this.claim.disabilityDetails.natureOfDisability == undefined) {
            this.natureOfDisability = isValid = false;
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
        debugger;
        if (this.claim.disabilityDetails.dateofRelease != undefined) { 
            if (this.claim.disabilityDetails.dateofRelease < new Date(this.disabilityClaimEffectiveDate)) {
                this.claimEffectiveDate = this.disabilityClaimEffectiveDate;
                this.isClaimEffectiveDate = true;
                isValid = false;
            }
        }
        return isValid;
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
                if (this.claim.healthFamilyDetails.firstAppointmentDate  < new Date(this.healthFamilyClaimEffectiveDate)) {
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
    downLoadPdf(claimData: ClaimModel, type) {
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
            if (!claimData.educationDetails.isanyothersourceofthegovernment) { return this.educationCheck = isValid = false; }
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
                                    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

                                    var eduBenefit2 = this.educationBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == EducationBenefitConfiguration.SonAgeExceeding.toLowerCase());
                                    if (eduBenefit2 != null) {
                                        var cond2 = eval(age + eduBenefit2.logic + eduBenefit2.value);
                                        //if (age >= 21) {
                                        if (cond2) {
                                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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

                        var helBenefit = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofFirstAppointmentExceeding.toLowerCase());
                        if (helBenefit != null) {
                            var cond = eval(diffDays + helBenefit.logic + helBenefit.value);
                            if (cond && this.claim.healthFamilyDetails.typeOfHospitalization == 2) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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

                        var helBenefit2 = this.healthFamilyBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == HealthFamilyBenefitConfiguration.DateofDischargeExceeding.toLowerCase());
                        if (helBenefit2 != null) {
                            var cond2 = eval(diffDays + helBenefit2.logic + helBenefit2.value);
                            if (cond2 && this.claim.healthFamilyDetails.typeOfHospitalization == 1) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                claimData.healthFamilyDetails.statusId = this.ClaimStatusId;
                claimData.healthFamilyDetails.loeAmount = this.lossOfEmploymentAmount;
                claimData.healthFamilyDetails.createdBy = this.userService.user.userid;
                if (!this.isOtherHospital) {
                    claimData.healthFamilyDetails.otherHospital == undefined;
                }
                else {
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                        var disBenefit = this.disabilityBenefitConfigDetails.find(x => x.ruleName.toLowerCase() == DisabilityBenefitConfiguration.DateOfReleaseExceeding.toLowerCase()); 
                        if (disBenefit != null) {
                            var cond = eval(diffDays + disBenefit.logic + disBenefit.value);
                            if (cond) {

                                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
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
                                    }
                                    if (this.viewDeath) {
                                        refNo = data.item4 + " (Disability) ";
                                    }
                                    if (this.viewPf) {
                                        refNo = data.item1 + " (PF) ";
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item1 + " (PF) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                    }
                                    if (this.viewEducation) {
                                        if (refNo == undefined) {
                                            refNo = data.item3 + " (Education) ";
                                        }
                                        else {
                                            refNo = " (Health & Family) " + data.item2 + " , " + " (Education) " + data.item3 + " , " + " (Disability) " + data.item4;
                                        }
                                    }
                                    this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + refNo + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process";
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
                                    this.successMessage = "Your application is saved";
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
                                    let refNo;
                                    if (this.viewHealth) {
                                        refNo = data.item2 + " (Health & Family) ";
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item2 + " (Health & Family) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

                                    }
                                    if (this.viewDeath) {
                                        refNo = data.item4 + " (Disability) ";
                                        this.successMessage += "Your claim was successfully submitted, your claim ticket id: " + data.item4 + " (Disability) " + ".You are requested to submit the relevant documents and original application form to the concerned inspector within 15 days for further process <br/>  <br/>";

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
        this.pfExsits = this.isPFSubmitted = false;
        this.typeOfClaimValid = this.dateofAppointment = this.hospital = this.hospitalization = this.dateofAdmin = this.dateofDischargeValid = this.claimForValid = this.familyMember = this.hospitalselfAttested = this.dischargeCertificate = this.rigisterESI = this.loeFromDate = this.loeToDate = this.healthCondolationCertificateUploaded =  true;//this.originalVoucher =
        this.restrictSave = false; this.viewEducation = false; this.disableEdu = false; this.noDependents = false;
        this.uplaodmain = this.uploadselfattestedValid = this.uploadNonMarriageValid = this.uploadCertificatetValid = this.educationCheck = true;
        this.claim = {} as ClaimModel;
        this.educationDetailsArray = [];
        this.viewEducation = false;
        this.viewHealth = false;
        this.viewDeath = false;
        this.viewPf = false;
        this.rowIndex = -1;
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
        this.claim.healthFamilyDetails = {} as HealthFamilyModel;
        this.claim.educationDetails.isanyothersourceofthegovernment = false;
        //this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease = true;
        this.disabilityAttachmentList = [] as AttachmentModel[];
        this.disabilityCertificate = {} as AttachmentModel;
        this.disabilityCertificateUploaded = this.natureOfDisability = this.dateofrelease = this.isDeathorpermanent1 = this.isDeathorpermanent2 = this.isDeathorpermanent3 = this.checkNatureOfDisability = this.condolationCertificateUploaded = true;
        this.condolationCertificate = {} as AttachmentModel;
        this.healthCondolationCertificate = {} as AttachmentModel;
        this.pfTypeOfClaimValid = true;
        if (this.claim.claimId == undefined) {
            this.claim = {} as ClaimModel;
            this.claim.healthFamilyDetails = {} as HealthFamilyModel;
            this.claim.educationDetails = {} as EducationHdrModel;
            this.claim.disabilityDetails = {} as DisabilityModel;
            this.claim.educationDetails.educationDetailList = [];
            this.getBenficiaryFamilyDetails(this.claim.benSno);
            this.getBenficiaryEduCount(this.claim.benSno);
            this.getBenficiarydetails(this.claim.benSno);
        }
        else {

            this.getClaimDetailsByClaimId(this.claimId);
        }
    }
    UpdateClaimStatusIdByStatus(type: any) {
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
                //---------------
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
                        debugger;
                            var date1 = new Date(this.claim.healthFamilyDetails.loeFromDate);
                            var date2 = new Date(this.claim.healthFamilyDetails.loeToDate);
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            if (diffDays != NaN) {
                                diffDays += 1;
                                //-----------------------
                                debugger;
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

    admittedDateChange(args) {
        this.minDischargeDate = new Date(this.claim.healthFamilyDetails.admittedDate);
        this.isDischargeDate = false;
    }

    getActiveFinancialYear() {
        this.dataService
            .getActiveFinancialYear()
            .subscribe((data: any) => {
                this.activeYear = data;
            });
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
                    this.disablePFCheckbox = this.disableHealthCheckbox = this.disableDisabilityCheckbox = this.disableEducationCheckbox = true;
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
    }
    compareDates() {

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
    getPFBenefitConfigurationDetails() {
        this.dataService
            .getPFConfigurationDetails(0)
            .subscribe((data: any) => {
                debugger;
                this.pfBenefitConfigDetails = data;
            });
    }
}
