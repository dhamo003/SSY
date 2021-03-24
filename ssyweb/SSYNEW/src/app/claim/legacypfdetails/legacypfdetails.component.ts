import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NewRegUsers } from 'src/app/models/newReg.model';
import { Months, FinancialYearMonths, PfMonths, PFMasterConfigAmount } from '../models/pf.months.model';
import { PFBeneficiaryDetails } from '../models/pf.beneficiaryBasic.model';
import { RloBankDetails } from 'src/app/models/rlobankdetails.model';
import { WorkFlowMaster } from 'src/app/models/workerTypeDetails.model';
import { ReceiptBookModel } from 'src/app/models/receiptbook.model';
import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { FinancialYearModel } from 'src/app/models/financialYear.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { UserType, AttachmentType } from '../pipes/constnts.model';
import { PFLegacyMaster, PFLegacyDtl1, PFLegacyDtl2 } from '../models/pfLegacyMaster.model';
import { Subscription } from 'rxjs';
import { LwcBankMst } from 'src/app/models/lwcBankMst.model';

@Component({
    selector: 'app-legacypfdetails',
    templateUrl: './legacypfdetails.component.html',
    styleUrls: ['./legacypfdetails.component.css']
})

export class LegacypfdetailsComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;

    route$: Subscription;
    successMessage: string;
    datePickerConfig: any;
    agentList: Array<NewRegUsers> = [];
    agentUserId: number;
    agentName: string;
    locationName: string;
    locationId: number;
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

    fStartYear: any;
    fEndYear: any;
    currentyear: any;
    toDayDate: Date;
    pfSelectedMonth: number;
    bankDetails: Array<LwcBankMst> = [];
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
    workerTypeValid: boolean = false;
    monthSettings = {};
    selectedMonthIds: Array<any> = [];
    sMon: PfMonths[] = [] as PfMonths[];
    pfmonth1: PfMonths = {} as PfMonths;
    collectionMinDt: Date;
    disableCollectionDate: boolean = true;
    isValidMonth: boolean = true;
    amountReq: boolean = true;

    payInSlipUploaded: boolean = true;
    payInSlipCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    noRecords: boolean = true;
    activeYear: FinancialYearModel = {} as FinancialYearModel;
    minDt: Date;
    maxDt: Date;
    isDepartmentUser: boolean = true;
    userDetails: NewRegUsers;
    receiptNoFrom: number;
    receiptNoTo: number;
    isReceiptNoRange: boolean = false;
    collectionYear: FinancialYearModel = {} as FinancialYearModel;
    // validPFNo: boolean = true;
    showAddRow: boolean = true;
    workerTypeReq: boolean = true;
    pfLegacyMaster: PFLegacyMaster = {} as PFLegacyMaster;
    pfLegacyDtl1List: Array<PFLegacyDtl1> = [];
    pfLegacyDtl1: PFLegacyDtl1 = {} as PFLegacyDtl1;
    pfLegacyDtl2: PFLegacyDtl2 = {} as PFLegacyDtl2;
    pfLegacyMasterId: number = 0;
    nextSSIN: any;
    input: any;
    validWTBen: boolean = false;
    bookId: number;
    nextReceiptNo: number;
    monthContributionAmount: number;
    editStr: string = "";
    DepositMinDateReq: boolean = false;
    todayMinDepositDateReq: boolean = false;
    todayMinCollectionDateReq: boolean = false;
    receiptGenerated: boolean = true;
    financialYearValid: boolean = true;
    financialYearId: number;
    finanacialYearList: FinancialYearModel[];
    isColDateinRangeYear: boolean = false;
    isInterestCalculated: boolean = false;
    benRegDateMinCollectionDate: boolean = false;
    benRegDateMinFinancialYear: boolean = false;
    colMonths: Date;
    validBenLocation: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        debugger;
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

        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.pfLegacyMasterId = params["pfLegacyMasterId"] != null ? Number(params["pfLegacyMasterId"]) : 0;
            }
        );
        this.getActiveFinancialYear();
        this.pfMonths = this.months;
        this.getWorkerTypeDetails();
        this.getPFMasterConfigDetails();
        //-------------------
        this.monthSettings = {
            singleSelection: false,
            idField: 'Id',//'monthId',
            textField: 'monthName',
            enableCheckAll: false,
            itemsShowLimit: 2,
        };
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.CA) {
            this.isDepartmentUser = false;

            this.dataService
                .getUserDetails(this.user.user.deptUserid)
                .subscribe((data: any) => {
                    this.userDetails = data;
                    if (this.userDetails != null) {
                        this.agentUserId = this.user.user.deptUserid;
                        this.agentName = this.user.user.userName;
                        this.locationName = this.userDetails.locationName;
                        this.locationId = this.userDetails.location;
                        this.agentSubDivId = this.userDetails.subDivId;
                        if (this.userDetails.agentRLOInformation != null)
                            this.rloOfficeId = this.userDetails.agentRLOInformation.rloOfficeId;

                        this.getAgentBooks(this.agentUserId);
                        // this.getAgentLegacyPfDetails(this.agentUserId);
                    }
                });

        }
        else {
            this.getAgentList();
        }
        debugger;
        if (this.pfLegacyMasterId > 0) {
            this.getLegacyPFCollectionDetails(this.pfLegacyMasterId);
        }
    }
    validatePFCollectionDtl(pfDetails: PFLegacyDtl1): boolean {
        let isValid = true;
        debugger;
        if (pfDetails.ssI_Number == undefined || pfDetails.ssI_Number == "") { this.ssinValid = isValid = false; }
        if (pfDetails.selectedMonths == undefined || pfDetails.selectedMonths.length == 0) { this.pfMonthIsValid = isValid = false; }
        else {
            if (pfDetails.selectedMonths.length > 0 && this.pfMasterConfig != null && (pfDetails.amountPaid != undefined || pfDetails.amountPaid != null || pfDetails.amountPaid.toString() != "")) {
                let contAmount = 0;
                contAmount = (pfDetails.selectedMonths.length * this.pfMasterConfig.beneficiaryPFContribution);
                if (contAmount > pfDetails.amountPaid) {
                    alert("Collection Amount less than Contribution Amount");
                    isValid = false;
                }
            }
        }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == null) { this.bookNoIsValid = isValid = false; }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == null || pfDetails.receiptNo.toString() == "") { this.receiptNoIsValid = isValid = false; }
        if (pfDetails.collectionDate == undefined || pfDetails.collectionDate == null) { this.collectionDateReq = isValid = false; }
        if (pfDetails.amountPaid == undefined || pfDetails.amountPaid == null || pfDetails.amountPaid.toString() == "") { this.amountReq = isValid = false; }
        if (this.depositedAmount == undefined || this.depositedAmount == 0 || this.depositedAmount == null) { this.depositedAmountReq = isValid = false; }
        if (this.isReceiptNoRange) { isValid = false; }
        if ((this.depositedAmount != undefined || this.depositedAmount != 0 || this.depositedAmount != null) && (pfDetails.amountPaid != undefined || pfDetails.amountPaid != null)) {
            if (Number(this.depositedAmount) < Number(pfDetails.amountPaid)) {
                alert("Collection Amount exceeds Deposit Amount");
                isValid = false;
            }
        }
        if (this.validWTBen) { isValid = false; }
        if (this.DepositMinDateReq) { isValid = false; }
        if (this.todayMinCollectionDateReq) { isValid = false; }
        if (this.benRegDateMinCollectionDate) { isValid = false; }
        let amt = 0;
        for (let i = 0; i < this.pfLegacyDtl1List.length; i++) {
            amt = Number(amt) + Number(this.pfLegacyDtl1List[i].amountPaid);
        }
        amt = amt + Number(pfDetails.amountPaid);
        if (Number(this.depositedAmount) < Number(amt)) {
            alert("Collection Amount exceeds Deposit Amount");
            isValid = false;
        }
        if (this.validBenLocation) { isValid = false; }
        return isValid;
    }
    addFieldValue() {
        if (this.validatePFCollectionDtl(this.newAttribute)) {
            debugger;
            if (this.isValidMonth) {
                this.monthSelection(this.newAttribute);
                let str = "";
                let newString = "";
                this.newAttribute.pfLegacyDtl2 = [];
                for (let i = 0; i < this.newAttribute.selectedMonths.length; i++) {
                    debugger;
                    if (this.pfLegacyDtl1List != null && this.pfLegacyDtl1List.length > 0) {
                        for (let j = 0; j < this.pfLegacyDtl1List.length; j++) {
                            if (this.pfLegacyDtl1List[j].benSno == this.beneficiary.benSno) {
                                for (let k = 0; k < this.pfLegacyDtl1List[j].selectedMonths.length; k++) {
                                    if (this.pfLegacyDtl1List[j].selectedMonths[k].monthId == this.newAttribute.selectedMonths[i].monthId
                                        && this.pfLegacyDtl1List[j].selectedMonths[k].year == this.newAttribute.selectedMonths[i].year) {
                                        str = "already " + this.newAttribute.selectedMonths[i].monthName + " this month is added to ssin";
                                        alert(str); return;
                                    }
                                }
                            }
                        }
                    }
                    newString += this.newAttribute.selectedMonths[i].monthName + ",";
                    this.newAttribute.pfLegacyDtl2.push({ monthPaid: this.newAttribute.selectedMonths[i].monthId, yearPaid: this.newAttribute.selectedMonths[i].year, amount: this.newAttribute.selectedMonths[i].amount });
                }
                if (str == "") {
                    if (this.pfLegacyDtl1List.findIndex(x => x.bookNo == this.newAttribute.bookNo && x.receiptNo == this.newAttribute.receiptNo) == -1) {
                        this.newAttribute.benSno = this.beneficiary.benSno;
                        this.newAttribute.benFullName = this.beneficiary.benFullName;
                        this.newAttribute.benSSINOrPFAccountNo = this.beneficiary.benSSINOrPFAccountNo;
                        this.newAttribute.benPFAccountId = this.beneficiary.benPFAccountId;
                        this.newAttribute.monthName = newString.substr(0, newString.length - 1);
                        this.newAttribute.bookName = this.agentReceiptBooks.find(x => x.id == this.newAttribute.bookNo).bookNo;

                        //this.remainingAmount = this.remainingAmount - Number(this.newAttribute.amountPaid);
                        //this.total = this.total + Number(this.newAttribute.amountPaid);

                        this.pfLegacyDtl1List.push(this.newAttribute);
                        let amt = 0;
                        for (let i = 0; i < this.pfLegacyDtl1List.length; i++) {
                            amt = Number(amt) + Number(this.pfLegacyDtl1List[i].amountPaid);
                        }
                        if (this.depositedAmount >= amt) {
                            this.remainingAmount = Number(this.depositedAmount) - Number(amt);
                        }
                        this.total = amt; this.newAttribute = {};
                        this.selectedMonthIds = [];
                        if (this.total > 0 && this.total == this.depositedAmount)
                            this.showAddRow = false;
                        else {
                            this.showAddRow = true;
                            // this.newAttribute.ssI_Number = this.nextSSIN;
                            this.newAttribute.collectionDate = this.collectionDate;
                            this.newAttribute.bookNo = this.agentReceiptBooks.find(x => x.id == this.bookId).id;

                            this.nextReceiptNo = Number(this.pfLegacyDtl1List[this.pfLegacyDtl1List.length - 1].receiptNo);
                            if (this.nextReceiptNo != null && this.nextReceiptNo != undefined) {
                                if (this.nextReceiptNo < this.receiptNoFrom || this.nextReceiptNo > this.receiptNoTo) {
                                    this.isReceiptNoRange = true;
                                }
                                else {
                                    this.isReceiptNoRange = false;
                                    let recNo = Number(this.nextReceiptNo) + 1; debugger;
                                    if (recNo >= this.receiptNoFrom && recNo <= this.receiptNoTo)
                                        this.nextReceiptNo = recNo;
                                }
                            }
                            this.newAttribute.receiptNo = this.nextReceiptNo;
                            if (Number(this.depositedAmount) < Number(amt)) {
                                alert("Collection Amount exceeds Deposit Amount");
                                this.remainingAmount = 0;
                                this.showAddRow = false;
                            }
                        }
                    }
                    else {
                        alert("already this receipt is generated"); return;
                    }
                }
                this.pfLegacyMaster.pfLegacyDtl1List = this.pfLegacyDtl1List;
                this.beneficiary.benFullName = '';
                this.beneficiary.benSSINOrPFAccountNo = '';
                this.nextReceiptNo = null;

            }
        }
    }
    editFieldValue(index, field: PFLegacyDtl1) {

        field.isEdit = true;

        this.searchSSINNo(field.ssI_Number);
        this.beneficiary.benFullName = "";
        this.beneficiary.benSSINOrPFAccountNo = ""; this.remainingAmount = Number(this.remainingAmount) + Number(field.amountPaid);
        this.total = Number(this.total) - Number(field.amountPaid);
        if (field.collectionDate != null && field.collectionDate != undefined)
            field.collectionDate = new Date(field.collectionDate);
        if (this.agentReceiptBooks != null) {
            this.agentReceiptBooks.forEach(x => {
                if (x.id == field.bookNo) { this.minDt = new Date(x.date); }
            });
        }
    }
    saveFieldValue(index, field: PFLegacyDtl1) {
        if (this.validatePFCollectionDtl(field)) {
            field.isEdit = false;
            let newString = '';
            for (let i = 0; i < field.selectedMonths.length; i++) {
                newString += field.selectedMonths[i].monthName + ",";
            }
            field.monthName = newString.substr(0, newString.length - 1);

            this.pfLegacyDtl1List.splice(index, 1);
            this.pfLegacyDtl1List.push(field);
            this.pfLegacyMaster.pfLegacyDtl1List = this.pfLegacyDtl1List;
            this.remainingAmount = Number(this.remainingAmount) - Number(field.amountPaid);
            this.total = Number(this.total) + Number(field.amountPaid);
            if (this.total > 0 && this.total == this.depositedAmount)
                this.showAddRow = false;
            else
                this.showAddRow = true;
        }
    }
    deleteFieldValue(index, field: PFLegacyDtl1) {
        this.pfLegacyDtl1List.splice(index, 1);
        let amt = 0;
        for (let i = 0; i < this.pfLegacyDtl1List.length; i++) {
            amt = Number(amt) + Number(this.pfLegacyDtl1List[i].amountPaid);
        }
        if (this.depositedAmount >= amt) {
            this.remainingAmount = Number(this.depositedAmount) - Number(amt);
        }
        this.total = amt;

        if (this.total > 0 && this.total == this.depositedAmount)
            this.showAddRow = false;
        else {
            this.showAddRow = true;
            if (Number(this.depositedAmount) < Number(amt)) {
                alert("Collection Amount exceeds Deposit Amount");
                this.remainingAmount = 0;
                this.showAddRow = false;
            }
        }
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
        this.locationId = this.agentList.find(x => x.userid == eve).location;
        this.agentSubDivId = this.agentList.find(x => x.userid == eve).subDivId;
        //this.getAgentLegacyPfDetails(eve);
    }
    workerTypeChange(eve) {
        //Get subdiv wise rlo bank details
        //this.getSubDivRLOBankDetails(this.agentSubDivId, eve);
        this.getLWCBankDetails(this.agentUserId, eve);
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
    getLWCBankDetails(userId: any, workerTypeId: any) {
        this.dataService
            .getLWCBankDetails(userId, workerTypeId)
            .subscribe((data: any) => {
                this.bankDetails = data;
            });
    }
    //bankChange(eve) {
    //    this.rloOfficeId = this.bankDetails.find(x => x.rloOfficeBankId == eve).rloOfficeId;
    //}
    getAgentReceiptBooks(userId: number) {
        this.agentReceiptBooks = [];
        if (this.collectionDate != undefined && this.depositDate != undefined) {
            this.dataService
                .getAgentCollectionBooks(userId, new Date(this.collectionDate), new Date(this.depositDate))
                .subscribe((data: any) => {

                    this.agentReceiptBooks = data;
                });
        }

    }
    getAgentBooks(userId: number) {
        this.agentReceiptBooks = [];
        this.dataService
            .getAgentBooks(userId)
            .subscribe((data: any) => {
                this.agentReceiptBooks = data;
            });
    }
    //getAgentLegacyPfDetails(userId: number) {

    //    let collectionAmount = 0;
    //    this.dataService
    //        .getAgentLegacyPfDetails(userId)
    //        .subscribe((data: any) => {
    //            this.pfLegacyMaster = data;
    //            if (this.pfLegacyMaster != null) {
    //                this.depositDate = new Date(this.pfLegacyMaster.depositDate);
    //                this.depositedAmount = this.remainingAmount = this.pfLegacyMaster.depositAmount;
    //                this.workerTypeId = this.pfLegacyMaster.workerTypeId;
    //                this.bankId = this.pfLegacyMaster.bankId;
    //                this.rloOfficeId = this.bankDetails.find(x => x.rloOfficeBankId == this.pfLegacyMaster.bankId).rloOfficeId;
    //                this.payinSlip = this.pfLegacyMaster.payinSlipNo;
    //                if (this.pfLegacyMaster.payInSlip != null) {
    //                    this.payInSlipCertificate = this.pfLegacyMaster.payInSlip;
    //                }

    //                if (this.pfLegacyMaster.pfLegacyDtl1List != null && this.pfLegacyMaster.pfLegacyDtl1List.length > 0) {

    //                    for (let i = 0; i < this.pfLegacyMaster.pfLegacyDtl1List.length; i++) {


    //                        this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = [];


    //                        this.pfLegacyMaster.pfLegacyDtl1List[i].bookName = this.agentReceiptBooks.find(x => x.id == this.pfLegacyMaster.pfLegacyDtl1List[i].bookNo).bookNo;
    //                        let newString = this.getSelectedMonths(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
    //                        this.pfLegacyMaster.pfLegacyDtl1List[i].monthName = newString.substr(0, newString.length - 1);

    //                        this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = this.getSelectedMonthList(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
    //                        collectionAmount += this.pfLegacyMaster.pfLegacyDtl1List[i].amountPaid;
    //                        this.pfLegacyMaster.pfLegacyDtl1List[i].selectedMonths = this.getSelectedMonthArray(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
    //                    }
    //                    this.remainingAmount = this.remainingAmount - collectionAmount;
    //                    this.total = this.total + collectionAmount;
    //                }
    //                //this.getSubDivRLOBankDetails(this.agentSubDivId, this.workerTypeId);
    //                this.getLWCBankDetails(this.agentUserId, this.workerTypeId);
    //            }
    //        });
    //}
    getSelectedMonthList(pfCollectionDtlList: PFLegacyDtl2[]): number[] {
        let monthList = [];
        for (let i = 0; i < pfCollectionDtlList.length; i++) {

            let id = this.months.find(x => x.monthId == pfCollectionDtlList[i].monthPaid).Id;
            let m = this.months.filter(x => x.Id == id);

            monthList.push(m[0].monthId);
        }
        return monthList;
    }
    getSelectedMonths(pfCollectionDtlList: PFLegacyDtl2[]): string {
        debugger;
        let monName = "";
        for (let i = 0; i < pfCollectionDtlList.length; i++) {

            let id = this.months.find(x => x.monthId == pfCollectionDtlList[i].monthPaid).Id;
            let m = this.months.filter(x => x.Id == id);

            monName += m[0].monthName + ",";
        }
        return monName;
    }
    getSelectedMonthArray(pfCollectionDtlList: PFLegacyDtl2[]): PfMonths[] {
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
    saveLegacyPFDetails(depositDetails: PFLegacyMaster, type: number) {
        debugger;
        if (this.validateDetails(depositDetails, type)) {
            if (depositDetails != null) {
                this.pfLegacyMaster = {} as PFLegacyMaster;

                this.pfLegacyMaster.pfLegacyMasterId = depositDetails.pfLegacyMasterId;
                this.pfLegacyMaster.agentNo = this.agentUserId;
                this.pfLegacyMaster.depositDate = new Date(this.depositDate);
                //this.pfLegacyMaster.bankId = this.bankId;
                this.pfLegacyMaster.lwcBankCode = this.bankId;
                this.pfLegacyMaster.payinSlipNo = this.payinSlip;
                this.pfLegacyMaster.depositAmount = this.depositedAmount;
                this.pfLegacyMaster.rloOfficeId = this.rloOfficeId;
                this.pfLegacyMaster.workerTypeId = this.workerTypeId;
                this.pfLegacyMaster.isSaveDraft = type;
                this.pfLegacyMaster.createdBy = this.user.user.deptUserid;
                this.pfLegacyMaster.updatedBy = this.user.user.deptUserid;
                this.pfLegacyMaster.payInSlip = this.payInSlipCertificate;
                this.pfLegacyMaster.financialYearId = this.financialYearId;
                //PFLegacyDtl1

                this.pfLegacyMaster.pfLegacyDtl1List = [];
                if (depositDetails.pfLegacyDtl1List != null && depositDetails.pfLegacyDtl1List.length > 0) {
                    for (let i = 0; i < depositDetails.pfLegacyDtl1List.length; i++) {
                        this.pfLegacyDtl1 = {} as PFLegacyDtl1;

                        this.pfLegacyDtl1.amountPaid = depositDetails.pfLegacyDtl1List[i].amountPaid;
                        this.pfLegacyDtl1.benPFAccountId = depositDetails.pfLegacyDtl1List[i].benPFAccountId;
                        this.pfLegacyDtl1.benSno = depositDetails.pfLegacyDtl1List[i].benSno;
                        this.pfLegacyDtl1.collectionDate = depositDetails.pfLegacyDtl1List[i].collectionDate;
                        this.pfLegacyDtl1.bookNo = depositDetails.pfLegacyDtl1List[i].bookNo;
                        this.pfLegacyDtl1.receiptNo = depositDetails.pfLegacyDtl1List[i].receiptNo;
                        //PFLegacyDtl2
                        debugger;
                        if (depositDetails.pfLegacyDtl1List[i].selectedMonths != null && depositDetails.pfLegacyDtl1List[i].selectedMonths.length > 0) {
                            this.pfLegacyDtl1.pfLegacyDtl2List = [] as PFLegacyDtl2[];
                            for (let j = 0; j < depositDetails.pfLegacyDtl1List[i].selectedMonths.length; j++) {
                                this.pfLegacyDtl2 = {} as PFLegacyDtl2;
                                debugger;
                                this.pfLegacyDtl2.monthPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].monthId;
                                let id = this.months.find(x => x.monthId == depositDetails.pfLegacyDtl1List[i].selectedMonths[j].monthId).Id;
                                if (id >= 10)
                                    //this.pfLegacyDtl2.yearPaid = this.fEndYear;
                                    this.pfLegacyDtl2.yearPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].year;
                                else
                                    //this.pfLegacyDtl2.yearPaid = this.fStartYear;
                                    this.pfLegacyDtl2.yearPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].year;
                                this.pfLegacyDtl2.amount = this.pfMasterConfig.beneficiaryPFContribution;


                                this.pfLegacyDtl1.pfLegacyDtl2List.push(this.pfLegacyDtl2);
                            }
                        }

                        this.pfLegacyMaster.pfLegacyDtl1List.push(this.pfLegacyDtl1);
                    }
                }
            }

            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .submitLegacyPFDetails(this.pfLegacyMaster)
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
    validateDetails(depositDetails: PFLegacyMaster, id: any): boolean {
        let isValid = true;
        this.ARNReq = this.depositDateReq = this.depositBankValid = this.depositedAmountReq = this.payInSlipUploaded = this.workerTypeReq = this.financialYearValid = true;
        if (this.agentUserId == undefined || this.agentUserId == 0) { this.ARNReq = isValid = false; }
        if (this.depositDate == undefined || this.depositDate == null) { this.depositDateReq = isValid = false; }
        if (this.bankId == undefined || this.bankId == 0) { this.depositBankValid = isValid = false; }
        if (this.depositedAmount == undefined || this.depositedAmount == null) { this.depositedAmountReq = isValid = false; }
        if (depositDetails == null || (depositDetails.pfLegacyDtl1List != null && depositDetails.pfLegacyDtl1List.length == 0)) { this.noRecords = isValid = false; }
        if (this.workerTypeId == undefined || this.workerTypeId == 0) { this.workerTypeReq = isValid = false; }
        if (this.financialYearId == undefined || this.financialYearId == 0) { this.financialYearValid = isValid = false; }
        if (this.todayMinDepositDateReq) { isValid = false; }
        if (id == 2)
            if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) { isValid = this.payInSlipUploaded = false; }
        return isValid;

    }
    monthSelection(pfDetails: PFLegacyDtl1) {
        if (pfDetails.selectedMonths != null && pfDetails.selectedMonths != undefined && pfDetails.selectedMonths.length > 0) {
            for (let i = 0; i < pfDetails.selectedMonths.length; i++) {
                pfDetails.selectedMonths.find(x => x.Id == pfDetails.selectedMonths[i].Id).monthId = this.months.find(x => x.Id == pfDetails.selectedMonths[i].Id).monthId;
            }
            pfDetails.selectedMonths.filter(x => x.amount = this.pfMasterConfig.beneficiaryPFContribution);
            pfDetails.selectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));
        }
    }
    onItemSelect(eve, pfDetails: PFLegacyDtl1, index) {
        this.pfSelectedMonth = eve;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        //let id = this.months.find(x => x.monthId == eve.monthId).Id;
        let id = this.months.find(x => x.Id == eve.Id).Id;

        if (id >= 10) {
            //pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fEndYear;
            pfDetails.selectedMonths.find(x => x.Id == eve.Id).year = this.fEndYear;
            pfDetails.selectedMonths.find(x => x.Id == eve.Id).monthId = this.months.find(x => x.Id == eve.Id).monthId;
        }
        else {
            //pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fStartYear;
            pfDetails.selectedMonths.find(x => x.Id == eve.Id).year = this.fStartYear;
            pfDetails.selectedMonths.find(x => x.Id == eve.Id).monthId = this.months.find(x => x.Id == eve.Id).monthId;
        }

        pfDetails.selectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));

        this.dataService
            //.isValidMonthSubmitted(this.beneficiary.benSno, eve.monthId, pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year)
            .isValidMonthSubmitted(this.beneficiary.benSno, pfDetails.selectedMonths.find(x => x.Id == eve.Id).monthId, pfDetails.selectedMonths.find(x => x.Id == eve.Id).year)
            .subscribe((data: any) => {
                debugger;
                if (data) {
                    this.isValidMonth = false;
                    alert("already added please select another month");
                    return;
                }
                else {
                    this.isValidMonth = true;
                    debugger;
                    this.monthContributionAmount = pfDetails.selectedMonths.length * this.pfMasterConfig.beneficiaryPFContribution;
                    if (pfDetails.isEdit) {
                        pfDetails.amountPaid = this.monthContributionAmount;
                    }
                    else {
                        debugger;
                        this.newAttribute.amountPaid = this.monthContributionAmount;
                    }
                    //debugger;
                    //if (this.colMonths != undefined && this.colMonths != null) {
                    //    var test = new Date(pfDetails.selectedMonths.find(x => x.Id == eve.Id).year, pfDetails.selectedMonths.find(x => x.Id == eve.Id).monthId - 1, 1);
                    //    var timeDiff1 = (test.getTime() - this.colMonths.getTime());
                    //    var diffDays1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24));
                    //    if (diffDays1 < 0) {
                    //        alert("Please select another month after beneficiary registration month");
                    //    }
                    //}
                }

            });
    }
    onItemDeSelect(eve, pfDetails: PFLegacyDtl1) {
        debugger;
        this.monthContributionAmount = pfDetails.selectedMonths.length * this.pfMasterConfig.beneficiaryPFContribution;
        if (pfDetails.isEdit) {
            pfDetails.amountPaid = this.monthContributionAmount;
        }
        else {
            debugger;
            this.newAttribute.amountPaid = this.monthContributionAmount;
        }
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
    receiptNoChange(bookNo: any, receiptNo: any) {
        this.nextReceiptNo = null;
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
                        //let recNo = Number(receiptNo) + 1; debugger;
                        //if (recNo >= this.receiptNoFrom && recNo <= this.receiptNoTo)
                        //    this.nextReceiptNo = recNo;
                    }
                }
            });
    }

    searchSSINNo(ssnNo: any) {
        this.isValidSave = this.isMonthEnable = true;
        this.benficiaryInactive = this.isInterestCalculated = this.benRegDateMinFinancialYear = this.validBenLocation = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.nextSSIN = ssnNo.trim();
            this.dataService
                .getLegacyPFBeneficiaryBasicDetailsByID(ssnNo.trim(), true)
                .subscribe((data: any) => {
                    debugger;
                    this.beneficiary = data;
                    if (this.beneficiary != null) {
                        this.isValidSave = true;
                        //if (this.beneficiary.isActive && this.beneficiary.status == 1) {
                        //----------Ben location code
                        //if (this.beneficiary.benBmc != null && (this.locationId != undefined && this.locationId != null)) {
                        //    if (this.beneficiary.benBmc == this.locationId)
                        //    {
                        if (this.financialYearId != undefined && this.financialYearId > 0) {
                            //BenRegDate <= financial year end date
                            var financialYear = this.finanacialYearList.find(x => x.financialYearId == this.financialYearId);
                            if (financialYear != null && (this.beneficiary.benRegDate != undefined || this.beneficiary.benRegDate != null)) {
                                var endDate = new Date(financialYear.endDate);
                                var regDate = new Date(this.beneficiary.benRegDate);
                                var timeDiff = (endDate.getTime() - regDate.getTime());
                                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                                if (diffDays >= 0) {
                                    this.dataService
                                        .isInterestCalculatedforBen(this.financialYearId, this.beneficiary.benSno)
                                        .subscribe((data2: any) => {
                                            if (!data2) {
                                                //this.ssinValid = true;
                                                this.isValidSave = false;
                                                this.isMonthEnable = false;
                                                //if (this.beneficiary.benSSINOrPFAccountNo == "")
                                                //    this.validPFNo = false;
                                                //else
                                                //    this.validPFNo = true;
                                                if (this.beneficiary.benOccupationId != null && (this.workerTypeId != null && this.workerTypeId != undefined)) {
                                                    if (this.beneficiary.benOccupationId == this.workerTypeId)
                                                        this.validWTBen = false;
                                                    else
                                                        this.validWTBen = true;
                                                }

                                                if (this.newAttribute.ssI_Number == undefined || this.newAttribute.ssI_Number == "") {
                                                    this.beneficiary.benFullName = "";
                                                    this.beneficiary.benSSINOrPFAccountNo = "";
                                                }
                                            }
                                            else this.isInterestCalculated = true;
                                        });
                                }
                                else this.benRegDateMinFinancialYear = true;
                            }
                        }

                        //}
                        //else {
                        //    this.ssinValid = false;
                        //}
                        //----------Ben location code
                        //    } 
                        //    else
                        //        this.validBenLocation = true;
                        //}
                        //--------------

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
        //this.clearValues();

        //this.pfLegacyMaster = {} as PFLegacyMaster;
        //this.pfLegacyDtl1List =[];
        //this.pfLegacyDtl1 = {} as PFLegacyDtl1;
        //this.pfLegacyDtl2 = {} as PFLegacyDtl2;
        //this.payInSlipCertificate = {} as PayInSlipAttachmentModel;

        //this.depositDate = null;
        //this.payinSlip = null;
        //this.depositedAmount = null;
        //this.remainingAmount = 0;
        //this.total = 0;
        //this.agentUserId = 0;
        //this.workerTypeId = 0;
        //this.bankId = 0;
        //this.showAddRow = true;
        window.location.href = "Agent/bulkpfdepositlist";
    }
    addReceiptBook() {
        window.location.href = "pfconfig/receiptbook";
    }
    cancleClick() {
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others || Number(this.user.user.userTpe) == UserType.CA) {
            window.location.href = "Agent/bulkpfdepositlist";//"Agent/AgentDashboard";
        }
        else
            window.location.href = "Home/DeptDashboard";
    }
    depositedAmountChange(amount: any) {
        if (this.total == 0)
            this.remainingAmount = amount;
        else {
            this.remainingAmount = amount - this.total;

            if (this.total > 0 && this.total == amount)
                this.showAddRow = false;
            else {
                this.showAddRow = true;
                if (Number(this.depositedAmount) < Number(this.total)) {
                    alert("Collection Amount exceeds Deposit Amount");
                }
            }
        }
    }
    getWorkerTypeDetails() {
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe((data: any) => {
                this.WorkerTypeList = data;
            });
    }
    depositDateChange(eve) {
        debugger;
        this.todayMinDepositDateReq = false;
        this.disableCollectionDate = false;
        if (eve != undefined) {
            var deposDate = new Date(eve);
            var timeDiff = (this.toDayDate.getTime() - deposDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays >= 0) {
                this.collectionMinDt = eve;
            }
            else this.todayMinDepositDateReq = true;
            this.getfinanacialYearListDetails(deposDate);
        }
    }
    bookChange(args) {
        this.bookId = args.target.value;
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
                model.createdBy = this.user.user.deptUserid;

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
            });
    }
    collectionDateChange(eve) {
        debugger;
        this.colMonths = null;
        this.DepositMinDateReq = this.todayMinCollectionDateReq = this.isColDateinRangeYear = this.benRegDateMinCollectionDate = false;
        if (eve != undefined && this.depositDate != undefined) {
            this.collectionDate = new Date(eve);
            var dDate = new Date(this.depositDate);
            var timeDiff = (dDate.getTime() - this.collectionDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays >= 0) {
                debugger;
                if (this.financialYearId != undefined && this.financialYearId > 0) {
                    this.dataService
                        .isValidCollectionYear(this.financialYearId, this.collectionDate)
                        .subscribe((data1: any) => {
                            debugger;
                            if (data1) {
                                var timeDiff1 = (this.toDayDate.getTime() - this.collectionDate.getTime());
                                var diffDays1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24));
                                if (diffDays1 >= 0) {
                                    //BenRegDate < collection Date
                                    if (this.beneficiary != null && (this.beneficiary.benRegDate != undefined || this.beneficiary.benRegDate != null)) {
                                        var regDate1 = new Date(this.beneficiary.benRegDate);
                                        debugger;
                                        //var regDate = new Date(regDate1.getFullYear(), regDate1.getMonth() + 1, regDate1.getDate());
                                        var regDate = new Date(regDate1.getFullYear(), regDate1.getMonth() + 1, 1);
                                        this.colMonths = new Date(regDate);
                                        var timeDiff2 = (this.collectionDate.getTime() - regDate.getTime());
                                        var diffDays2 = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
                                        if (diffDays2 >= 0) {
                                            //------------------------
                                            this.dataService
                                                .getCollectionFinancialYear(new Date(eve))
                                                .subscribe((data: any) => {
                                                    this.collectionYear = data;
                                                    if (this.collectionYear != null) {
                                                        this.currentyear = new Date(eve).getFullYear();
                                                        let currentMonth = new Date(eve).getMonth() + 1;
                                                        if (currentMonth <= 3) {
                                                            this.fStartYear = this.currentyear - 1;
                                                            this.fEndYear = this.currentyear;
                                                        }
                                                        else {
                                                            this.fStartYear = this.currentyear;
                                                            this.fEndYear = this.currentyear + 1;
                                                        }
                                                    }

                                                    this.getAgentReceiptBooks(this.agentUserId);
                                                });
                                        }
                                        else this.benRegDateMinCollectionDate = true;
                                    }

                                }
                                else this.todayMinCollectionDateReq = true;
                            }
                            else {
                                this.isColDateinRangeYear = true;
                            }
                        });
                }
            }
            else {
                this.DepositMinDateReq = true;
            }
        }
    }
    getLegacyPFCollectionDetails(pfLegacyMasterId: number) {

        let collectionAmount = 0;
        this.dataService
            .getLegacyPFCollectionDetails(pfLegacyMasterId)
            .subscribe((data: any) => {
                debugger;
                this.pfLegacyMaster = data;
                if (this.pfLegacyMaster != null) {
                    this.depositDate = new Date(this.pfLegacyMaster.depositDate);
                    if (this.pfLegacyMaster.pfLegacyDtl1List != null && this.pfLegacyMaster.pfLegacyDtl1List.length > 0) {
                        this.agentReceiptBooks = [];
                        var x = this.pfLegacyMaster.pfLegacyDtl1List.sort((a, b) => new Date(b.collectionDate).getTime() - new Date(a.collectionDate).getTime());
                        if (x[this.pfLegacyMaster.pfLegacyDtl1List.length - 1].collectionDate != undefined && this.depositDate != undefined) {

                            this.dataService
                                .getAgentCollectionBooks(this.agentUserId, new Date(x[this.pfLegacyMaster.pfLegacyDtl1List.length - 1].collectionDate), new Date(this.depositDate))
                                .subscribe((data1: any) => {
                                    this.agentReceiptBooks = data1;

                                    this.depositedAmount = this.remainingAmount = this.pfLegacyMaster.depositAmount;
                                    this.workerTypeId = this.pfLegacyMaster.workerTypeId;
                                    //this.getSubDivRLOBankDetails(this.agentSubDivId, this.workerTypeId);
                                    this.getLWCBankDetails(this.agentUserId, this.workerTypeId);
                                    //this.bankId = this.pfLegacyMaster.bankId;
                                    this.bankId = this.pfLegacyMaster.lwcBankCode;
                                    this.rloOfficeId = this.pfLegacyMaster.rloOfficeId;//this.bankDetails.find(x => x.rloOfficeBankId == this.pfLegacyMaster.bankId).rloOfficeId;
                                    this.financialYearId = this.pfLegacyMaster.financialYearId;
                                    this.payinSlip = this.pfLegacyMaster.payinSlipNo;
                                    if (this.pfLegacyMaster.payInSlip != null) {
                                        this.payInSlipCertificate = this.pfLegacyMaster.payInSlip;
                                    }

                                    if (this.pfLegacyMaster.pfLegacyDtl1List != null && this.pfLegacyMaster.pfLegacyDtl1List.length > 0) {
                                        debugger;
                                        this.pfLegacyDtl1List = this.pfLegacyMaster.pfLegacyDtl1List;
                                        for (let i = 0; i < this.pfLegacyMaster.pfLegacyDtl1List.length; i++) {
                                            this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = [];
                                            debugger;

                                            this.pfLegacyMaster.pfLegacyDtl1List[i].bookName = this.agentReceiptBooks.find(x => x.id == this.pfLegacyMaster.pfLegacyDtl1List[i].bookNo).bookNo;
                                            let newString = this.getSelectedMonths(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                            this.pfLegacyMaster.pfLegacyDtl1List[i].monthName = newString.substr(0, newString.length - 1);

                                            this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = this.getSelectedMonthList(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                            collectionAmount = collectionAmount + this.pfLegacyMaster.pfLegacyDtl1List[i].amountPaid;
                                            this.pfLegacyMaster.pfLegacyDtl1List[i].selectedMonths = this.getSelectedMonthArray(this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                        }
                                        this.remainingAmount = this.remainingAmount - collectionAmount;
                                        this.total = this.total + collectionAmount;
                                        debugger;
                                        var pfDtlList = this.pfLegacyMaster.pfLegacyDtl1List[this.pfLegacyMaster.pfLegacyDtl1List.length - 1];
                                        if (pfDtlList != null) {
                                            this.collectionDate = new Date(pfDtlList.collectionDate);
                                            this.bookId = pfDtlList.bookNo;
                                            this.nextReceiptNo = Number(pfDtlList.receiptNo) + 1;

                                            this.newAttribute.collectionDate = this.collectionDate;
                                            this.newAttribute.bookNo = this.agentReceiptBooks.find(x => x.id == this.bookId).id;
                                            this.newAttribute.receiptNo = this.nextReceiptNo;
                                        }
                                    }


                                    if (this.total > 0 && this.total == this.depositedAmount)
                                        this.showAddRow = false;
                                    else
                                        this.showAddRow = true;


                                });
                        }
                    }

                }
            });
    }
    getfinanacialYearListDetails(deposDate: Date) {
        this.dataService
            .getfinanacialYearListDetails(deposDate)
            .subscribe((data: any) => {
                this.finanacialYearList = data;
                if (this.finanacialYearList != null && this.finanacialYearList.length > 0) {
                    this.financialYearId = this.finanacialYearList[this.finanacialYearList.length - 1].financialYearId;
                }
            });
    }
}
