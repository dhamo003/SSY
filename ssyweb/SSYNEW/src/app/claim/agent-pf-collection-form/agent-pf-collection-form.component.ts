import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { FinancialYearMonths, Months, CollectionMonths, PfMonths, PfPaidDetails, PFMasterConfigAmount } from '../models/pf.months.model';
import { FinancialYearModel } from 'src/app/models/financialYear.model';
import { fail } from 'assert';
import { PFDetails } from '../models/PFDetails.model';
import { PFBeneficiaryDetails } from '../models/pf.beneficiaryBasic.model';
import { PFPaymentCollectionDetails } from '../models/pfpayment.model';
import { ModalDirective } from 'ngx-bootstrap';
import { environment } from '../../../environments/environment';
import { NewRegUsers } from 'src/app/models/newReg.model';
import { UserType } from '../pipes/constnts.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { DatepickerOptions } from 'ng2-datepicker';
import { ReceiptBookModel } from '../../models/receiptbook.model';

@Component({
    selector: 'app-agent-pf-collection-form',
    templateUrl: './agent-pf-collection-form.component.html',
    styleUrls: ['./agent-pf-collection-form.component.css']
})
export class AgentPfCollectionFormComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    successMessage: string;
    toDayDate: Date;
    benficiaryInactive: boolean = false;
    beneficiary: PFBeneficiaryDetails = {} as PFBeneficiaryDetails;
    ssin: number;
    userName: string;
    userCode: string;
    IsValidssin: boolean = false;
    ssinValid: boolean = true;
    months = Months;
    collectionMonths = CollectionMonths;
    currentyear: any;
    fStartYear: any;
    fEndYear: any;
    pfDetailsVisible: boolean = false;
    pfMonths: FinancialYearMonths[] = [] as FinancialYearMonths[];
    pfSelectedMonths: PfMonths[] = [] as PfMonths[];
    lastPaidDetails: PfPaidDetails = {} as PfPaidDetails;
    pfDetails: PFDetails = {} as PFDetails;
    pfCollectionDetails: PFPaymentCollectionDetails = {} as PFPaymentCollectionDetails;
    pfMasterConfig: PFMasterConfigAmount = {} as PFMasterConfigAmount;
    agentPfCollectAmount: number;
    pfTotalAmount: number;
    agentPfValidation: boolean = false;
    //Validation Props
    bookNoIsValid: boolean = true;
    receiptNoIsValid: boolean = true;
    pfMonthIsValid: boolean = true;
    weburl: string = environment.weburl;
    agentList: Array<NewRegUsers> = [];
    agentUserId: number;
    agentUserName: string;
    isAgentLoggedin: boolean=false;
    collectionDate: Date;
    collectionDateReq: boolean = true;
    datePickerConfig: any;
    agentInfo: boolean = true;
    receiptGenerated: boolean = true;
    agentReceiptBooks: ReceiptBookModel[] = [] as ReceiptBookModel[];
    isAllDepositsPayInSlipsUploaded: boolean = true;
    rloOffcieId: number;

    receiptValue: number;
    pfSelectedMonth: number;
    lastPaidMonthValid: boolean = true;
    pfLastPaidMonth: number;

    agentARNCode: string;
    isbenLastCollectionDate: boolean = false;
    benLastCollectionDate: Date;
    lastCollectionDateReq: boolean = true;

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
            this.fEndYear = this.currentyear+1;
        }

        this.currentyear = this.fStartYear + '-' + this.fEndYear;

    }

    ngOnInit() {
        this.getAgentList();
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;
        this.getPFMasterConfigDetails();
        this.weburl = environment.weburl;
        if (this.user.user.userTpe == UserType.ServiceProvider.toString() || this.user.user.userTpe == UserType.CA.toString()) {
            this.agentInfo = false;

            this.checkAgentDepositsPayInSlipsUploaded(this.user.user.deptUserid);
        }
    }
    getAgentCollectedAmount(userId: number) {
        this.dataService
            .getAgentCollectedAmount(userId)
            .subscribe((data: any) => {
                this.agentPfCollectAmount = data;
            });
    }
    getPFMasterConfigDetails() {
        this.dataService
            .getPFMasterConfigDetails()
            .subscribe((data: any) => {
                this.pfMasterConfig = data;
                if (this.pfMasterConfig != null) {

                }

            });
    }
    searchSSINNo(ssnNo: any) {
        debugger;


        this.benficiaryInactive = false;
        this.isbenLastCollectionDate = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getBeneficiaryDetailsBySearch(ssnNo.trim())
                .subscribe((data: any) => {
                    debugger;
                    this.beneficiary = data;
                    if (this.beneficiary != null) {

                        if (this.beneficiary.benLastCollectionDate != null) {
                            this.benLastCollectionDate = new Date(this.beneficiary.benLastCollectionDate);
                            this.isbenLastCollectionDate = true;
                        }

                        if (this.beneficiary.isActive && this.beneficiary.status==1) {
                            this.ssinValid = true;

                            //this.getPaymentDetailsBybenSno(this.beneficiary.benSno);
                        }
                        else {
                            this.ssinValid = false;
                        }
                    }
                    else {
                        this.ssinValid = false;
                    }
                });
        }
        else {
            this.beneficiary = {} as PFBeneficiaryDetails;
            this.ssinValid = true;
        }
    }
    getPaymentDetailsBybenSno(benSno: number): any {
        this.dataService
            .getLastPaidPfDetails(benSno)
            .subscribe((data: any) => {
                debugger;
                this.lastPaidDetails = data;
                if (this.lastPaidDetails != null && (this.lastPaidDetails.lastPaid != null || this.lastPaidDetails.lastPaid.trim() != '')) {
                    debugger;
                    this.displayMonthList(this.lastPaidDetails.monthPaid, this.lastPaidDetails.yearPaid);
                }
                else {
                    this.pfMonths = this.months;
                }
            });
    }

    displayMonthList(monthId: any, year: any) {
        //let monthid = this.months.find(x => x.monthId == monthId).monthId;
        if (year == this.fStartYear && monthId <= 3) {
            this.pfMonths = this.months;
        }
        else {
            let id = this.months.find(x => x.monthId == monthId).Id;
            this.pfMonths = this.months.filter(x => x.Id > id);
        }
    }
    lastPaidMonthChange(value) {
        debugger;
        this.pfTotalAmount = 0;
        if (value != 0) {
            this.lastPaidDetails = {} as PfPaidDetails;
            this.lastPaidDetails.monthPaid = value;
            if (value <= 3)
                this.lastPaidDetails.yearPaid = this.fEndYear
            else
                this.lastPaidDetails.yearPaid = this.fStartYear
            this.displayMonthList(this.lastPaidDetails.monthPaid, this.lastPaidDetails.yearPaid);
        }
        else if (value == 0)
        {
            this.lastPaidDetails = {} as PfPaidDetails;
            this.lastPaidDetails.monthPaid = 0;
           
            this.lastPaidDetails.yearPaid = this.fStartYear
            this.displayMonthList(this.lastPaidDetails.monthPaid, this.lastPaidDetails.yearPaid);
        }
        else {
            this.lastPaidDetails = null;
            this.pfMonths = this.months;
        }
        this.pfSelectedMonth = 0;
        this.pfSelectedMonths = null;
    }
    pfMonthChange(value) {
        this.pfTotalAmount = 0;
        let s = null;
        let id = this.months.find(x => x.monthId == value).Id;
        let m = this.months.filter(x => x.Id <= id);
        if (this.lastPaidDetails != null && this.lastPaidDetails.monthPaid > 0) {
            let lastId = this.months.find(x => x.monthId == this.lastPaidDetails.monthPaid).Id;
            let mon = this.months.filter(x => x.Id > lastId && x.Id <= id);
            s = mon;
            //s = m.filter(x => x.monthId > this.lastPaidDetails.monthPaid);
        }
        else {
            s = m;
        }

        if (s != null && s != undefined) {
            this.pfDetailsVisible = true;
            this.pfSelectedMonths = s;
            this.pfSelectedMonths.filter(x => x.amount = this.pfMasterConfig.beneficiaryPFContribution);
            this.pfSelectedMonths.filter(x => x.year = (x.Id >= 10 ? this.fEndYear : this.fStartYear));
            for (let i = 0; i < this.pfSelectedMonths.length; i++) {
                this.pfTotalAmount += +this.pfSelectedMonths[i].amount;
            }
            let totalAmount = (this.agentPfCollectAmount + this.pfTotalAmount); debugger;
            if (this.user.user.userTpe == UserType.ServiceProvider.toString() || this.user.user.userTpe == UserType.CA.toString())
            {
                if (totalAmount < this.pfMasterConfig.agentCollectionLimit) {
                    this.agentPfValidation = false;
                }
                else {
                    this.agentPfValidation = true;
                }
            }
        }
    }   
    
    SavePFCollectionDetails(pfDetails: PFDetails) {
        if (this.pfSelectedMonths == undefined || this.pfSelectedMonths.length == 0) { this.pfMonthIsValid = false; }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == 0) { this.bookNoIsValid = false; }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == 0) { this.receiptNoIsValid = false; }
        if (this.collectionDate == undefined || this.collectionDate == null) { this.collectionDateReq = false; }
        if (this.benLastCollectionDate == undefined || this.benLastCollectionDate == null) { this.lastCollectionDateReq = false; }

        if (!this.pfMonthIsValid || !this.bookNoIsValid || !this.receiptNoIsValid || !this.collectionDateReq || !this.lastCollectionDateReq ) return;
        debugger;
        this.pfCollectionDetails.BenSno = this.beneficiary.benSno;
        this.pfCollectionDetails.AgentNo = this.agentUserId;//this.user.user.deptUserid;
        this.pfCollectionDetails.BookNo = pfDetails.bookNo;
        this.pfCollectionDetails.CollectionAmount = this.pfTotalAmount;
        this.pfCollectionDetails.CollectionDate = this.collectionDate;
        this.pfCollectionDetails.ReceiptNo = pfDetails.receiptNo;
        this.pfCollectionDetails.BenPFAccountId = this.beneficiary.benPFAccountId;
        this.pfCollectionDetails.RLOOfficeId = this.rloOffcieId;
        this.pfCollectionDetails.LastCollectionDate = this.benLastCollectionDate;
     
        if (!this.agentPfValidation) {
            this.pfCollectionDetails.PFCollectionDtlList = [];
            for (let i = 0; i < this.pfSelectedMonths.length; i++) {
                this.pfCollectionDetails.PFCollectionDtlList.push({ MonthPaid: this.pfSelectedMonths[i].monthId, YearPaid: this.pfSelectedMonths[i].year, Amount: this.pfSelectedMonths[i].amount });
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePFCollectionDetails(this.pfCollectionDetails)
                    .then((data: any) => {
                        debugger;
                        if (data) {
                            this.successMessage = "PF collections successfully submitted";
                            this.pfTotalAmount = 0;
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
        }

    }

    okClick() {
        this.successModal.hide();
        //this.ngOnInit();
        //this.beneficiary = {} as PFBeneficiaryDetails;
        //this.ssin = null;

        if (this.user.user.userTpe == UserType.Inspector.toString())
            window.location.href = "Inspector/PfCollectionForm";
        else if (this.user.user.userTpe == UserType.AsstLabourCom.toString())
            window.location.href = "ALC/PfCollectionForm";
        else
            window.location.href = "Agent/PfCollectionForm";
       // this.router.navigate(['claim/PfCollectionForm']);
    }
    cancelClick() {
        this.router.navigate(['claim/PfDeposit']);
    }
    clearValues() {
        this.lastPaidDetails = {} as PfPaidDetails;
        this.pfTotalAmount = 0;
        this.beneficiary = {} as PFBeneficiaryDetails;
        this.pfSelectedMonths=[];
        this.pfDetails = {} as PFDetails;
        this.pfDetailsVisible = false;
        this.collectionDateReq = true;
    }

    getAgentList() {
        this.dataService
            .getAgentList(0)
            .subscribe((data: any) => {
                debugger;
                this.agentList = data;
                if (this.agentList != null && this.agentList.length > 0) {
                    for (var i = 0; i <= this.agentList.length; i++) {
                        debugger;
                        if (this.agentList[i].userid == this.user.user.deptUserid) {
                            this.agentUserId = this.agentList[i].userid;
                            this.agentUserName = this.agentList[i].firstname + " " + this.agentList[i].lastname;
                            this.agentARNCode = this.agentList[i].userCode;
                            this.rloOffcieId = this.agentList[i].rloOfficeId;
                            this.isAgentLoggedin = true;
                            this.getAgentCollectedAmount(this.user.user.deptUserid);
                            this.getAgentReceiptBooks(this.user.user.deptUserid);
                        }
                    }
                }
            });
    }

    agentChange(eve) {
        debugger;
        this.agentUserId = eve;
        this.agentUserName = this.agentList.find(x => x.userid == eve).firstname + " " + this.agentList.find(x => x.userid == eve).lastname;
        this.rloOffcieId = this.agentList.find(x => x.userid == eve).rloOfficeId;        
        this.getAgentCollectedAmount(eve);
        this.getAgentReceiptBooks(eve);
        this.checkAgentDepositsPayInSlipsUploaded(eve);
    }
    getAgentReceiptBooks(userId: number) {
        this.dataService
            .getAgentBooks(userId)
            .subscribe((data: any) => {
                this.agentReceiptBooks = data;
            });
    }
    bookNoChange(value) {
        this.receiptGenerated = true;
        this.dataService
            .getNextReceiptNo(value)
            .subscribe((data: any) => {
                debugger;
                if (data == -1)
                {
                    this.pfDetails.receiptNo = 0;
                    this.receiptGenerated = false;
                }
                else
                    this.pfDetails.receiptNo = data;
            });
    }

    checkAgentDepositsPayInSlipsUploaded(userId: number) {
        this.dataService
            .isAgentAllDepositsPayInSlipsUploaded(userId)
            .subscribe((data: any) => {
                debugger;
                this.isAllDepositsPayInSlipsUploaded = data;
            });
    }
    checkReceiptNoForAgentBook(eve,bookId) {
        this.dataService
            .checkReceiptNoForAgentBook(bookId, eve)
            .subscribe((data: any) => {
                debugger;
                this.receiptValue = data;
            });
    }
}
