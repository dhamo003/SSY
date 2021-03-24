import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { UserType } from '../pipes/constnts.model';
import { NewRegUsers } from 'src/app/models/newReg.model';
import { PFBeneficiaryDetails } from '../models/pf.beneficiaryBasic.model';
import { FinancialYearMonths, PfMonths, Months, PFMasterConfigAmount } from '../models/pf.months.model';
import { PFCollectionDetailsList, PfCollectionDtlList } from '../models/pf.collectiondetails.model';
import { PFCollectionMaster, PFCollectionDtlDetails, bulkPFDeposit} from '../models/legacypfdataentry.model';
import { RloBankDetails } from 'src/app/models/rlobankdetails.model';
import { ReceiptBookModel } from 'src/app/models/receiptbook.model';
import { WorkFlowMaster } from 'src/app/models/workerTypeDetails.model';
import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { AttachmentType } from '../pipes/constnts.model';
import { FinancialYearModel } from '../../models/financialYear.model';

@Component({
    selector: 'app-bulkpfdeposit',
    templateUrl: './bulkpfdeposit.component.html',
    styleUrls: ['./bulkpfdeposit.component.css']
})
export class BulkpfdepositComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;

    successMessage: string;
    datePickerConfig: any;
    agentList: Array<NewRegUsers> = [];
    agentUserId: number;
    agentName: string;
    locationName: string;
    depositDate: Date;
    depositDateReq: boolean = true;
    bankId: number;
    payinSlip: number;
    workerTypeId: number;

    months = Months;
    rowIndex = -1;
    test: number;
    collectionDate: Date;
    ssin: any;
    ssinValid: boolean = true;
    pfMonthIsValid: boolean = true;
    pfAmountIsValid: boolean = true;
    collectionDateReq: boolean = true;
    receiptNoIsValid: boolean = true;
    bookNoIsValid: boolean = true;
    benficiaryInactive: boolean = false;
    beneficiary: PFBeneficiaryDetails = {} as PFBeneficiaryDetails;
    pfMonths: FinancialYearMonths[] = [] as FinancialYearMonths[];
    pfSelectedMonths: PfMonths[] = [] as PfMonths[];
    pfMasterConfig: PFMasterConfigAmount = {} as PFMasterConfigAmount;
    pfTotalAmount: number;

    pfCollectionDtlInfo: PfCollectionDtlList = {} as PfCollectionDtlList;
    pfCollectionDetailsList: Array<PFCollectionDetailsList> = [];
    pfCollectionDetails: PFCollectionDetailsList = {} as PFCollectionDetailsList;

    pfCollectionMaster: PFCollectionMaster = {} as PFCollectionMaster;
    pfCollectionMasterList: PFCollectionMaster[] = [] as PFCollectionMaster[];
    pfCollectionDtlDetails: PFCollectionDtlDetails = {} as PFCollectionDtlDetails;
    fStartYear: any;
    fEndYear: any;
    currentyear: any;
    toDayDate: Date;
    pfSelectedMonth: number;
    bankDetails: Array<RloBankDetails> = [];
    WorkerTypeList: WorkFlowMaster[];
    agentReceiptBooks: ReceiptBookModel[] = [] as ReceiptBookModel[];
    isValidSave: boolean = true;
    isMonthEnable: boolean = true;
    agentSubDivId: number;
    rloOfficeId: number;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    remainingAmount: number = 0;
    total: number = 0;
    depositedAmount: number;
    depositedAmountReq: boolean = true;
    depositBankValid: boolean = true;
    ARNReq: boolean = true;
    //agentPfValidation: boolean = false;
    workerTypeValid: boolean = false;
    //agentDepositAmountValidation: boolean = false;
    monthSettings = {};
    selectedMonthIds: Array<any> = [];
    //editedselectedMonthIds: Array<any> = [];
    // sMon: Array<PfMonths> = [];
    sMon: PfMonths[] = [] as PfMonths[];
    pfmonth1: PfMonths = {} as PfMonths;
    collectionMinDt: Date;
    disableCollectionDate: boolean = true;
    isValidMonth: boolean = true;
    amountReq: boolean = true;

    payInSlipUploaded: boolean = true;
    payInSlipCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    noRecords: boolean = true;
    bulkPFDeposit: bulkPFDeposit = {} as bulkPFDeposit;
    activeYear: FinancialYearModel = {} as FinancialYearModel;
    minDt: Date;
    maxDt: Date;
    isDepartmentUser: boolean = true;
    userDetails: NewRegUsers;
    receiptNoFrom: number;
    receiptNoTo: number;
    isReceiptNoRange: boolean = false;
    collectionYear: FinancialYearModel = {} as FinancialYearModel;
    validPFNo: boolean = true;
    showAddRow: boolean = true;
    workerTypeReq: boolean = true;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });

        this.toDayDate = new Date();
        this.currentyear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        if (currentMonth <= 3) {
            this.fStartYear = this.currentyear - 1;
            this.fEndYear = this.currentyear;
        }
        else {
            this.fStartYear = this.currentyear;
            this.fEndYear = this.currentyear + 1;
        }

        this.currentyear = this.fStartYear + '-' + this.fEndYear;
    }

    ngOnInit() {
        this.getActiveFinancialYear();
        this.pfMonths = this.months;
        this.getWorkerTypeDetails();
        this.getPFMasterConfigDetails();
        //-------------------
        this.monthSettings = {
            singleSelection: false,
            idField: 'monthId',
            textField: 'monthName',
            enableCheckAll:false,
            itemsShowLimit: 2,
        };
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others) {
            this.isDepartmentUser = false;

            this.dataService
                .getUserDetails(this.user.user.deptUserid)
                .subscribe((data: any) => {
                    this.userDetails = data;
                    if (this.userDetails != null) {
                        this.agentUserId = this.user.user.deptUserid;
                        this.agentName = this.user.user.userName;
                        this.locationName = this.userDetails.locationName;
                        this.agentSubDivId = this.userDetails.subDivId;

                        //Get subdiv wise rlo bank details
                       // this.getSubDivRLOBankDetails(this.agentSubDivId);
                        //this.getAgentReceiptBooks(this.agentUserId);
                        this.getAgentLegacyPfDetails(this.agentUserId);
                    }
                });
           
        }
        else {
            this.getAgentList();
        }
    }

    addFieldValue() {
        if (this.validatePFCollectionDtl(this.newAttribute)) {
            debugger;
            if (this.isValidMonth) {
                this.monthSelection(this.newAttribute);
                let str = "";
                let newString = "";
                this.newAttribute.pfCollectionDtlList = [];
                //this.newAttribute.monthList = [];
                for (let i = 0; i < this.newAttribute.selectedMonths.length; i++) {
                    if (this.pfCollectionDetailsList.findIndex(x => x.benSno == this.beneficiary.benSno && x.month == this.newAttribute.selectedMonths[i].monthId && x.year == this.newAttribute.selectedMonths[i].year) == -1 && this.rowIndex == -1) {


                        //this.newAttribute.monthName = "";
                        //this.newAttribute.month = this.pfSelectedMonths[i].monthId;
                        //this.newAttribute.year = this.pfSelectedMonths[i].year;
                        newString += this.newAttribute.selectedMonths[i].monthName + ",";
                        debugger;
                        this.newAttribute.pfCollectionDtlList.push({ monthPaid: this.newAttribute.selectedMonths[i].monthId, yearPaid: this.newAttribute.selectedMonths[i].year, amount: this.newAttribute.selectedMonths[i].amount });
                        //this.newAttribute.monthList.push(this.pfSelectedMonths[i].monthId);

                        //this.newAttribute.selectedMonths = this.pfSelectedMonths;

                    }
                    else if (this.pfCollectionDetailsList.findIndex(x => x.benSno == this.beneficiary.benSno && x.month == this.newAttribute.selectedMonths[i].monthId && x.year == this.newAttribute.selectedMonths[i].year) != -1 && this.rowIndex == -1) {
                        str = "already " + this.newAttribute.selectedMonths[i].monthName +" this month is added to ssin";
                        alert(str); return;
                    }
                }
                if (str == "") {
                    if (this.pfCollectionDetailsList.findIndex(x => x.bookNo == this.newAttribute.bookNo && x.receiptNo == this.newAttribute.receiptNo) == -1) {
                        this.newAttribute.benSno = this.beneficiary.benSno;
                        this.newAttribute.benFullName = this.beneficiary.benFullName;
                        this.newAttribute.benSSINOrPFAccountNo = this.beneficiary.benSSINOrPFAccountNo;
                        this.newAttribute.benPFAccountId = this.beneficiary.benPFAccountId;
                        //this.newAttribute.year = this.pfSelectedMonths[0].year;
                        this.newAttribute.monthName = newString.substr(0, newString.length - 1);
                        this.newAttribute.bookName = this.agentReceiptBooks.find(x => x.id == this.newAttribute.bookNo).bookNo;

                        this.remainingAmount = this.remainingAmount - Number(this.newAttribute.collectionAmount);
                        this.total = this.total + Number(this.newAttribute.collectionAmount);
                        //this.newAttribute.selectedMonths = this.pfSelectedMonths;
                        ////------------------------
                        //debugger;

                        //this.newAttribute.pfCollectionDtlList = [];
                        //this.newAttribute.monthName = "";
                        //for (let i = 0; i < this.pfSelectedMonths.length; i++) {
                        //    this.newAttribute.year = this.pfSelectedMonths[i].year;
                        //    this.newAttribute.monthName += this.pfSelectedMonths[i].monthName + ",";

                        //    this.newAttribute.pfCollectionDtlList.push({ monthPaid: this.pfSelectedMonths[i].monthId, yearPaid: this.pfSelectedMonths[i].year, amount: this.pfSelectedMonths[i].amount });
                        //}
                        ////----------------------------

                        this.pfCollectionDetailsList.push(this.newAttribute);
                        this.newAttribute = {};
                        this.selectedMonthIds = [];
                        if (this.total > 0 && this.total == this.depositedAmount)
                            this.showAddRow = false;
                        else
                            this.showAddRow = true;
                    }
                    else {
                        alert("already this receipt is generated"); return;
                    }
                }

                this.beneficiary.benFullName = '';
                this.beneficiary.benSSINOrPFAccountNo = '';
            }
        }
    }
    editFieldValue(index, field: PFCollectionDetailsList) {
        debugger;
        field.isEdit = true;
        this.remainingAmount = Number(this.remainingAmount) + Number(field.collectionAmount);
        this.total = Number(this.total) - Number(field.collectionAmount);
        if (field.collectionDate != null && field.collectionDate != undefined)
            field.collectionDate = new Date(field.collectionDate);
        if (this.agentReceiptBooks != null) {
            this.agentReceiptBooks.forEach(x => {
                if (x.id == field.bookNo) { this.minDt = new Date(x.date); }
            });
        }
    }
    saveFieldValue(index, field: PFCollectionDetailsList) {
        if (this.validatePFCollectionDtl(field)) {
            field.isEdit = false;
            let newString = '';
            for (let i = 0; i < field.selectedMonths.length; i++) {
                newString += field.selectedMonths[i].monthName + ",";
                //field.monthList.push(field.selectedMonths[i].monthId);

            }
            field.monthName = newString.substr(0, newString.length - 1);

            this.pfCollectionDetailsList.splice(index, 1);
            this.pfCollectionDetailsList.push(field);

            this.remainingAmount = Number(this.remainingAmount) - Number(field.collectionAmount);
            this.total = Number(this.total) + Number(field.collectionAmount);
            if (this.total > 0 && this.total == this.depositedAmount)
                this.showAddRow = false;
            else
                this.showAddRow = true;
        }
    }
    deleteFieldValue(index, field: PFCollectionDetailsList) {
        this.pfCollectionDetailsList.splice(index, 1);
        this.remainingAmount = Number(this.remainingAmount) + Number(field.collectionAmount);
        this.total = Number(this.total) - Number(field.collectionAmount);
        if (this.total > 0 && this.total == this.depositedAmount)
            this.showAddRow = false;
        else
            this.showAddRow = true;
    }
    getAgentList() {
        this.dataService
            .getAgentLocationWise(Number(this.user.user.userTpe), this.user.user.deptUserid)
            .subscribe((data: any) => {
                this.agentList = data;
            });
    }
    agentChange(eve) {
        this.agentUserId = eve;
        this.agentName = this.agentList.find(x => x.userid == eve).userName;
        this.locationName = this.agentList.find(x => x.userid == eve).locationName;
        this.agentSubDivId = this.agentList.find(x => x.userid == eve).subDivId;
       // this.getAgentReceiptBooks(eve);
        this.getAgentLegacyPfDetails(eve);
    }
    workerTypeChange(eve) {
        //Get subdiv wise rlo bank details
        this.getSubDivRLOBankDetails(this.agentSubDivId, eve);
    }
    getPFMasterConfigDetails() {
        this.dataService
            .getPFMasterConfigDetails()
            .subscribe((data: any) => {
                this.pfMasterConfig = data;

            });
    }
    getSubDivRLOBankDetails(id: any, workerTypeId: any) {

        this.dataService
            .getSubDivRLOBankDetails(id, workerTypeId)
            .subscribe((data: any) => {

                this.bankDetails = data;
            });
    }
    bankChange(eve) {
        this.rloOfficeId = this.bankDetails.find(x => x.rloOfficeBankId == eve).rloOfficeId;
    }
    getAgentReceiptBooks(userId: number) {
        this.agentReceiptBooks = []; debugger;
        if (this.collectionDate != undefined && this.depositDate != undefined) {
            this.dataService
                .getAgentCollectionBooks(userId, new Date(this.collectionDate), new Date(this.depositDate))
                .subscribe((data: any) => {
                    debugger;
                    this.agentReceiptBooks = data;
                });
        }
             
    }
    getAgentLegacyPfDetails(userId: number) {
        debugger;
        let collectionAmount = 0;
        this.dataService
            .getAgentLegacyPfDetails(userId)
            .subscribe((data: any) => {
                this.pfCollectionDetailsList = data;
                if (this.pfCollectionDetailsList != null && this.pfCollectionDetailsList.length > 0) {
                    for (let i = 0; i < this.pfCollectionDetailsList.length; i++) {
                        this.pfCollectionDetailsList[i].monthList = [];
                        if (this.pfCollectionDetailsList[i].depositPayInSlipDocument != null) {
                            debugger;
                            this.payInSlipCertificate = this.pfCollectionDetailsList[i].depositPayInSlipDocument;
                        }
                        //this.payInSlipCertificate.fileName = this.pfCollectionDetailsList[i].depositPayInSlipDocumentFileName;
                        this.workerTypeId = this.pfCollectionDetailsList[i].workerTypeId;
                        this.depositDate = new Date(this.pfCollectionDetailsList[i].depositDate);
                        this.bankId = this.pfCollectionDetailsList[i].bankId;
                        this.depositedAmount = this.remainingAmount= this.pfCollectionDetailsList[i].depositAmount;
                        this.payinSlip = this.pfCollectionDetailsList[i].payinSlipNo;
                        this.rloOfficeId = this.bankDetails.find(x => x.rloOfficeBankId == this.pfCollectionDetailsList[i].bankId).rloOfficeId;

                        this.pfCollectionDetailsList[i].bookName = this.agentReceiptBooks.find(x => x.id == this.pfCollectionDetailsList[i].bookNo).bookNo;
                        let newString= this.getSelectedMonths(this.pfCollectionDetailsList[i].pfCollectionDtlList);
                        this.pfCollectionDetailsList[i].monthName = newString.substr(0, newString.length - 1);
                        debugger;
                        this.pfCollectionDetailsList[i].monthList = this.getSelectedMonthList(this.pfCollectionDetailsList[i].pfCollectionDtlList);
                        collectionAmount += this.pfCollectionDetailsList[i].collectionAmount;
                        this.pfCollectionDetailsList[i].selectedMonths = this.getSelectedMonthArray(this.pfCollectionDetailsList[i].pfCollectionDtlList);


                        this.getSubDivRLOBankDetails(this.agentSubDivId, this.workerTypeId);
                    }
                    this.remainingAmount = this.remainingAmount - collectionAmount;
                    this.total = this.total + collectionAmount;
                }
            });
    }
    getSelectedMonthList(pfCollectionDtlList: PfCollectionDtlList[]): number[] {
        let monthList= [];
        for (let i = 0; i < pfCollectionDtlList.length; i++) {

            let id = this.months.find(x => x.monthId == pfCollectionDtlList[i].monthPaid).Id;
            let m = this.months.filter(x => x.Id == id);

            monthList.push(m[0].monthId);
        }
        return monthList;
    }
    getSelectedMonths(pfCollectionDtlList: PfCollectionDtlList[]): string {
        let monName = "";
        for (let i = 0; i < pfCollectionDtlList.length; i++) {

            let id = this.months.find(x => x.monthId == pfCollectionDtlList[i].monthPaid).Id;
            let m = this.months.filter(x => x.Id == id);

            monName += m[0].monthName + ",";
        }
        return monName;
    }
    getSelectedMonthArray(pfCollectionDtlList: PfCollectionDtlList[]): PfMonths[] {
        let monthsSelected = [] as PfMonths[];
        for (let i = 0; i < pfCollectionDtlList.length; i++) {

            let id = this.months.find(x => x.monthId == pfCollectionDtlList[i].monthPaid).Id;
            let m = this.months.filter(x => x.Id == id);

            this.pfmonth1 = {} as PfMonths;
            this.pfmonth1.Id = m[0].Id;
            this.pfmonth1.monthId = m[0].monthId;
            this.pfmonth1.monthName = m[0].monthName;

            monthsSelected.push(this.pfmonth1);
        }
        return monthsSelected;
    }
    saveLegacyPFDetails(depositDetails: PFCollectionDetailsList[], type: number) {

        debugger;
        if (this.validateDetails(depositDetails, type)) {

            for (let i = 0; i < depositDetails.length; i++) {
                this.pfCollectionMaster = {} as PFCollectionMaster;
                debugger;
                this.pfCollectionMaster.pfCollectionId = depositDetails[i].pfCollectionId;
                this.pfCollectionMaster.agentNo = this.agentUserId;
                this.pfCollectionMaster.collectionAmount = depositDetails[i].collectionAmount;
                this.pfCollectionMaster.benPFAccountId = depositDetails[i].benPFAccountId;

                this.pfCollectionMaster.benSno = depositDetails[i].benSno;
                this.pfCollectionMaster.collectionDate = depositDetails[i].collectionDate;
                this.pfCollectionMaster.bookNo = depositDetails[i].bookNo;
                this.pfCollectionMaster.receiptNo = depositDetails[i].receiptNo;
                this.pfCollectionMaster.rloOfficeId = this.rloOfficeId;

                this.pfCollectionMaster.depositDate = new Date(this.depositDate);
                this.pfCollectionMaster.bankId = this.bankId;
                this.pfCollectionMaster.payinSlipNo = this.payinSlip;
                this.pfCollectionMaster.depositAmount = this.depositedAmount;

                this.pfCollectionMaster.month = depositDetails[i].month;
                this.pfCollectionMaster.year = new Date(depositDetails[i].collectionDate).getFullYear();//depositDetails[i].year;

                this.pfCollectionMaster.workerTypeId = this.workerTypeId;
                this.pfCollectionMaster.isSaveDraft = type;
                //--------------------------

                if (depositDetails[i].selectedMonths != null && depositDetails[i].selectedMonths.length > 0) {
                    this.pfCollectionMaster.pfCollectionDtlList = [];
                    for (let j = 0; j < depositDetails[i].selectedMonths.length; j++) {
                        this.pfCollectionDtlDetails = {} as PFCollectionDtlDetails;

                        this.pfCollectionDtlDetails.monthPaid = depositDetails[i].selectedMonths[j].monthId;
                        let id = this.months.find(x => x.monthId == depositDetails[i].selectedMonths[j].monthId).Id;
                        if (id >= 10) 
                            this.pfCollectionDtlDetails.yearPaid = this.fEndYear;
                        else
                            this.pfCollectionDtlDetails.yearPaid = this.fStartYear;
                        this.pfCollectionDtlDetails.amount = this.pfMasterConfig.beneficiaryPFContribution;

                        this.pfCollectionMaster.pfCollectionDtlList.push(this.pfCollectionDtlDetails);
                    }
                }
                //if (depositDetails[i].pfCollectionDtlList != null && depositDetails[i].pfCollectionDtlList.length > 0) {
                //    this.pfCollectionMaster.pfCollectionDtlList = [];
                //    for (let j = 0; j < depositDetails[i].pfCollectionDtlList.length; j++) {
                //        this.pfCollectionDtlDetails = {} as PFCollectionDtlDetails;

                //        this.pfCollectionDtlDetails.monthPaid = depositDetails[i].pfCollectionDtlList[j].monthPaid;
                //        this.pfCollectionDtlDetails.yearPaid = depositDetails[i].pfCollectionDtlList[j].yearPaid;
                //        this.pfCollectionDtlDetails.amount = depositDetails[i].pfCollectionDtlList[j].amount;

                //        this.pfCollectionMaster.pfCollectionDtlList.push(this.pfCollectionDtlDetails);
                //    }
                //}
                //--------------------------
                this.pfCollectionMasterList.push(this.pfCollectionMaster);
            }

            this.bulkPFDeposit.collectionMasterList = this.pfCollectionMasterList;
            this.bulkPFDeposit.payInSlipCertificate = this.payInSlipCertificate;
            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .submitLegacyPFDetails(this.bulkPFDeposit)
                    .then((data: any) => {
                        if (data) {
                            if (type == 1)
                                this.successMessage = "Saved sucessfully";
                            else
                                this.successMessage = "PF amount sucessfully deposited";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
        }
    }
    validateDetails(depositDetails: PFCollectionDetailsList[], id: any) : boolean
    {
        let isValid = true;
        this.ARNReq = this.depositDateReq = this.depositBankValid = this.depositedAmountReq = this.payInSlipUploaded = this.workerTypeReq = true;
        if (this.agentUserId == undefined || this.agentUserId == 0) { this.ARNReq = isValid = false; }
        if (this.depositDate == undefined || this.depositDate == null) { this.depositDateReq = isValid = false; }
        if (this.bankId == undefined || this.bankId == 0) { this.depositBankValid = isValid = false; }
        if (this.depositedAmount == undefined || this.depositedAmount == null) { this.depositedAmountReq = isValid = false; }
        if (depositDetails == null || (depositDetails != null && depositDetails.length == 0)) { this.noRecords = isValid = false; }
        if (this.workerTypeId == undefined || this.workerTypeId == 0) { this.workerTypeReq = isValid = false; }
        if (id == 2)
            if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) { isValid = this.payInSlipUploaded = false; }
        return isValid;

    }
    monthSelection(pfDetails: PFCollectionDetailsList) {
        if (pfDetails.selectedMonths != null && pfDetails.selectedMonths != undefined && pfDetails.selectedMonths.length > 0) {
                    pfDetails.selectedMonths.filter(x => x.amount = this.pfMasterConfig.beneficiaryPFContribution);
                    pfDetails.selectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));
            }
    }
    onItemSelect(eve, pfDetails: PFCollectionDetailsList ) {
        debugger;
        this.pfSelectedMonth = eve;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        let s = null;
        let id = this.months.find(x => x.monthId == eve.monthId).Id;

        if (id >= 10) {
            pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fEndYear;
        }
        else
            pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fStartYear;
        //let m = this.months.filter(x => x.Id == id);

        //s = m;
        //if (s != null && s != undefined) {
        //    this.pfSelectedMonths = s;
        pfDetails.selectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));

        //}
        debugger;
        this.dataService
            .isValidMonthSubmitted(this.beneficiary.benSno, eve.monthId, pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year)
            .subscribe((data: any) => {

                if (data) {
                    this.isValidMonth = false;
                    alert("already added please select another month");
                }
                else {
                    this.isValidMonth = true;
                }

            });
    }
    pfMonthChange(value) {
        this.pfSelectedMonth = value;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        let s = null;
        let id = this.months.find(x => x.monthId == value).Id;
        let m = this.months.filter(x => x.Id == id);

        s = m;
        if (s != null && s != undefined) {
            this.pfSelectedMonths = s;
            this.pfSelectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));
        }

        this.dataService
            .isValidMonthSubmitted(this.beneficiary.benSno, this.pfSelectedMonths[0].monthId, this.pfSelectedMonths[0].year)
            .subscribe((data: any) => {

                if (data) {
                    alert("already added please select another month");
                }

            });
    }
    receiptNoChange(bookNo: any,receiptNo: any) {
        this.dataService
            .isValidBookReceipt(bookNo, receiptNo)
            .subscribe((data: any) => {

                if (data) {
                    alert("already added please select another book and receipt");
                }
                else {
                    if (receiptNo < this.receiptNoFrom || receiptNo > this.receiptNoTo) {
                        this.isReceiptNoRange = true;
                    }
                    else {
                        this.isReceiptNoRange = false;
                    }
                }
            });
    }
    validatePFCollectionDtl(pfDetails: PFCollectionDetailsList): boolean {
        let isValid = true;
        debugger;
        //if (this.agentUserId == undefined || this.agentUserId == null) { this.ARNReq = isValid = false; }
        //if (this.depositDate == undefined || this.depositDate == null) { this.depositDateReq = isValid = false; }
        //if (this.bankId == undefined || this.bankId == null) { this.depositBankValid = isValid = false; }
        if (pfDetails.ssI_Number == undefined || pfDetails.ssI_Number == "") { this.ssinValid = isValid = false; }
        //if (this.pfSelectedMonths == undefined || this.pfSelectedMonths.length == 0) { this.pfMonthIsValid = isValid = false; }
        if (pfDetails.selectedMonths == undefined || pfDetails.selectedMonths.length == 0) { this.pfMonthIsValid = isValid = false; }
        //if (this.selectedMonthIds == undefined || this.selectedMonthIds.length == 0) { this.pfMonthIsValid = isValid = false; }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == null) { this.bookNoIsValid = isValid = false; }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == null || pfDetails.receiptNo.toString() == "") { this.receiptNoIsValid = isValid = false; }
        if (pfDetails.collectionDate == undefined || pfDetails.collectionDate == null) { this.collectionDateReq = isValid = false; }
        if (pfDetails.collectionAmount == undefined || pfDetails.collectionAmount == null || pfDetails.collectionAmount.toString() == "") { this.amountReq = isValid = false; }
        if (this.depositedAmount == undefined || this.depositedAmount == 0 || this.depositedAmount == null) { this.depositedAmountReq = isValid = false; }
        if (this.isReceiptNoRange) { isValid = false; } debugger;
        //case 1 - if depositedAmount < collectionAmount
        if ((this.depositedAmount != undefined || this.depositedAmount != 0 || this.depositedAmount != null) && (pfDetails.collectionAmount != undefined || pfDetails.collectionAmount != null)) {
            if (Number(this.depositedAmount) < Number(pfDetails.collectionAmount)) {
                alert("Collection Amount exceeds Deposit Amount");
                isValid = false;
            }
        }
        //if (this.depositedAmount > this.pfMasterConfig.agentCollectionLimit) {
        //    this.agentDepositAmountValidation = true;
        //    isValid = false;
        //}
        //else {
        //    this.agentDepositAmountValidation = false;
        //}
        //if (this.total > this.pfMasterConfig.agentCollectionLimit || pfDetails.collectionAmount > this.pfMasterConfig.agentCollectionLimit || this.remainingAmount < 0) {
        //if ((this.total + Number(pfDetails.collectionAmount)) > this.pfMasterConfig.agentCollectionLimit || this.remainingAmount < 0) {
        //    this.agentPfValidation = true;
        //    isValid = false;
        //}
        //else {
        //    this.agentPfValidation = false;
        //}
        return isValid;
    }
    searchSSINNo(ssnNo: any) {
        this.isValidSave = this.isMonthEnable = true;
        this.benficiaryInactive = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getBeneficiaryDetailsBySearch1(ssnNo.trim(), true)
                .subscribe((data: any) => {
                    this.beneficiary = data;
                    if (this.beneficiary != null) {
                        this.isValidSave = true;
                        if (this.beneficiary.isActive && this.beneficiary.status == 1) {
                            //this.ssinValid = true;
                            this.isValidSave = false;
                            this.isMonthEnable = false;
                            if (this.beneficiary.benSSINOrPFAccountNo == "")
                                this.validPFNo = false;
                            else
                                this.validPFNo = true;
                        }
                        //else {
                        //    this.ssinValid = false;
                        //}
                    }
                    //else {
                    //    this.ssinValid = false;
                    //}
                });
        }
        else {
            this.beneficiary = {} as PFBeneficiaryDetails;
            this.ssinValid = true;
        }
    }
    clearValues() {
        this.beneficiary = {} as PFBeneficiaryDetails;
        this.pfSelectedMonths = [];
        this.collectionDateReq = true;
        this.ssinValid = true;
        this.receiptNoIsValid = true;
        this.bookNoIsValid = true;
        this.pfMonthIsValid = true;
        this.depositedAmountReq = true;
        this.depositBankValid = true;
        this.ARNReq = true;
        this.amountReq = true;
        this.workerTypeReq = true;
    }
    okClick() {
        this.successModal.hide();

        // window.location.href = "claim/bulkpfdeposit";
        this.clearValues();
        this.pfCollectionDtlInfo = {} as PfCollectionDtlList;
        this.pfCollectionDetailsList = [];
        this.pfCollectionDetails = {} as PFCollectionDetailsList;

        this.pfCollectionMaster = {} as PFCollectionMaster;
        this.pfCollectionMasterList = [] as PFCollectionMaster[];
        this.pfCollectionDtlDetails = {} as PFCollectionDtlDetails;
        this.payInSlipCertificate = {} as PayInSlipAttachmentModel;
        //this.agentUserCode = "";
        //this.location = null;
        //this.locationName = "";
        this.depositDate = null;
        this.payinSlip = null;
        this.depositedAmount = null;
        this.remainingAmount = 0;
        this.total = 0;
        this.agentUserId = 0;
        this.workerTypeId = 0;
        this.bankId = 0;
        this.showAddRow = true;
    }
    addReceiptBook() {
        window.location.href = "pfconfig/receiptbook";
    }
    cancleClick() {
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others) {
            window.location.href = "Agent/AgentDashboard";
        }
        else
            window.location.href = "Home/DeptDashboard";
    }
    depositedAmountChange(amount: any) {
        if (this.total ==0)
            this.remainingAmount = amount;
        else
            this.remainingAmount = amount - this.total;

        //if (amount > this.pfMasterConfig.agentCollectionLimit) {
        //    this.agentDepositAmountValidation = true;
        //}
        //else {
        //    this.agentDepositAmountValidation = false;
        //}
    }
    getWorkerTypeDetails() {
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe((data: any) => {
                this.WorkerTypeList = data;
            });
    }
    depositDateChange(eve) {
        this.disableCollectionDate = false;
        this.collectionMinDt = eve;
        //this.getAgentReceiptBooks(this.agentUserId);
    }
    bookChange(args) {
        debugger;
        if (this.agentReceiptBooks != null) {
            this.agentReceiptBooks.forEach(x => {
                if (x.id == args.target.value) {
                    this.minDt = new Date(x.date);
                    this.receiptNoFrom = x.receiptNoFrom;
                    this.receiptNoTo = x.receiptNoTo;
                }
            });
        }
    }
    onFileChanged(inputValue: any): void {
        var file: File = inputValue.target.files[0];
        if (file.type === "application/pdf" || file.type.includes("image/")) {
            if (file.size > 2000000) {
                alert("File is too big!");
                return;
            };
            var myReader: FileReader = new FileReader();
            myReader.onloadend = (e) => {
                const model: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
                model.fileName = file.name;
                model.filePath = "test";
                model.fileContent = myReader.result.toString().split(',')[1];
                model.statusId = 1;

                model.attachmentType = AttachmentType.PayinSlip;
                //model.pfDepositId = this.depositId;
                model.createdBy = this.user.user.deptUserid;

                //this.payInSlip = model;
                this.payInSlipCertificate = model;
            }
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    }
    getActiveFinancialYear() {
        this.dataService
            .getActiveFinancialYear()
            .subscribe((data: any) => {
                this.activeYear = data;
                //this.minDt = new Date(this.activeYear.startDate);
                //this.maxDt = new Date(this.activeYear.endDate);
            });
    }
    collectionDateChange(eve) {
        debugger;
        this.collectionDate = new Date(eve);
        
        this.dataService
            .getCollectionFinancialYear(new Date(eve))
            .subscribe((data: any) => {
                this.collectionYear = data;
                if (this.collectionYear != null) {
                    debugger;
                    this.currentyear = new Date(eve).getFullYear();
                    let currentMonth = new Date(eve).getMonth();
                    if (currentMonth <= 3) {
                        this.fStartYear = this.currentyear - 1;
                        this.fEndYear = this.currentyear;
                    }
                    else {
                        this.fStartYear = this.currentyear;
                        this.fEndYear = this.currentyear + 1;
                    }
                } 
                debugger;
                this.getAgentReceiptBooks(this.agentUserId);
            }); 
    }
}
