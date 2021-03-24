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
import { ModalDirective } from 'ngx-bootstrap';
import { Months } from '../models/pf.months.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { UserType, AttachmentType } from '../pipes/constnts.model';
var LegacypfdetailsComponent = /** @class */ (function () {
    function LegacypfdetailsComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.agentList = [];
        this.depositDateReq = true;
        this.months = Months;
        this.rowIndex = -1;
        this.ssinValid = true;
        this.pfMonthIsValid = true;
        this.pfAmountIsValid = true;
        this.collectionDateReq = true;
        this.receiptNoIsValid = true;
        this.bookNoIsValid = true;
        this.benficiaryInactive = false;
        this.beneficiary = {};
        this.pfMonths = [];
        this.pfSelectedMonths = [];
        this.pfMasterConfig = {};
        this.bankDetails = [];
        this.agentReceiptBooks = [];
        this.isValidSave = true;
        this.isMonthEnable = true;
        this.fieldArray = [];
        this.newAttribute = {};
        this.remainingAmount = 0;
        this.total = 0;
        this.depositedAmountReq = true;
        this.depositBankValid = true;
        this.ARNReq = true;
        this.workerTypeValid = false;
        this.monthSettings = {};
        this.selectedMonthIds = [];
        this.sMon = [];
        this.pfmonth1 = {};
        this.disableCollectionDate = true;
        this.isValidMonth = true;
        this.amountReq = true;
        this.payInSlipUploaded = true;
        this.payInSlipCertificate = {};
        this.noRecords = true;
        this.activeYear = {};
        this.isDepartmentUser = true;
        this.isReceiptNoRange = false;
        this.collectionYear = {};
        // validPFNo: boolean = true;
        this.showAddRow = true;
        this.workerTypeReq = true;
        this.pfLegacyMaster = {};
        this.pfLegacyDtl1List = [];
        this.pfLegacyDtl1 = {};
        this.pfLegacyDtl2 = {};
        this.pfLegacyMasterId = 0;
        this.validWTBen = false;
        this.editStr = "";
        this.DepositMinDateReq = false;
        this.todayMinDepositDateReq = false;
        this.todayMinCollectionDateReq = false;
        this.receiptGenerated = true;
        this.financialYearValid = true;
        this.isColDateinRangeYear = false;
        this.isInterestCalculated = false;
        this.benRegDateMinCollectionDate = false;
        this.benRegDateMinFinancialYear = false;
        this.validBenLocation = false;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        debugger;
        this.toDayDate = new Date();
        this.currentyear = new Date().getFullYear();
        var currentMonth = new Date().getMonth();
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
    LegacypfdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.pfLegacyMasterId = params["pfLegacyMasterId"] != null ? Number(params["pfLegacyMasterId"]) : 0;
        });
        this.getActiveFinancialYear();
        this.pfMonths = this.months;
        this.getWorkerTypeDetails();
        this.getPFMasterConfigDetails();
        //-------------------
        this.monthSettings = {
            singleSelection: false,
            idField: 'Id',
            textField: 'monthName',
            enableCheckAll: false,
            itemsShowLimit: 2,
        };
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.CA) {
            this.isDepartmentUser = false;
            this.dataService
                .getUserDetails(this.user.user.deptUserid)
                .subscribe(function (data) {
                _this.userDetails = data;
                if (_this.userDetails != null) {
                    _this.agentUserId = _this.user.user.deptUserid;
                    _this.agentName = _this.user.user.userName;
                    _this.locationName = _this.userDetails.locationName;
                    _this.locationId = _this.userDetails.location;
                    _this.agentSubDivId = _this.userDetails.subDivId;
                    if (_this.userDetails.agentRLOInformation != null)
                        _this.rloOfficeId = _this.userDetails.agentRLOInformation.rloOfficeId;
                    _this.getAgentBooks(_this.agentUserId);
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
    };
    LegacypfdetailsComponent.prototype.validatePFCollectionDtl = function (pfDetails) {
        var isValid = true;
        debugger;
        if (pfDetails.ssI_Number == undefined || pfDetails.ssI_Number == "") {
            this.ssinValid = isValid = false;
        }
        if (pfDetails.selectedMonths == undefined || pfDetails.selectedMonths.length == 0) {
            this.pfMonthIsValid = isValid = false;
        }
        else {
            if (pfDetails.selectedMonths.length > 0 && this.pfMasterConfig != null && (pfDetails.amountPaid != undefined || pfDetails.amountPaid != null || pfDetails.amountPaid.toString() != "")) {
                var contAmount = 0;
                contAmount = (pfDetails.selectedMonths.length * this.pfMasterConfig.beneficiaryPFContribution);
                if (contAmount > pfDetails.amountPaid) {
                    alert("Collection Amount less than Contribution Amount");
                    isValid = false;
                }
            }
        }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == null) {
            this.bookNoIsValid = isValid = false;
        }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == null || pfDetails.receiptNo.toString() == "") {
            this.receiptNoIsValid = isValid = false;
        }
        if (pfDetails.collectionDate == undefined || pfDetails.collectionDate == null) {
            this.collectionDateReq = isValid = false;
        }
        if (pfDetails.amountPaid == undefined || pfDetails.amountPaid == null || pfDetails.amountPaid.toString() == "") {
            this.amountReq = isValid = false;
        }
        if (this.depositedAmount == undefined || this.depositedAmount == 0 || this.depositedAmount == null) {
            this.depositedAmountReq = isValid = false;
        }
        if (this.isReceiptNoRange) {
            isValid = false;
        }
        if ((this.depositedAmount != undefined || this.depositedAmount != 0 || this.depositedAmount != null) && (pfDetails.amountPaid != undefined || pfDetails.amountPaid != null)) {
            if (Number(this.depositedAmount) < Number(pfDetails.amountPaid)) {
                alert("Collection Amount exceeds Deposit Amount");
                isValid = false;
            }
        }
        if (this.validWTBen) {
            isValid = false;
        }
        if (this.DepositMinDateReq) {
            isValid = false;
        }
        if (this.todayMinCollectionDateReq) {
            isValid = false;
        }
        if (this.benRegDateMinCollectionDate) {
            isValid = false;
        }
        var amt = 0;
        for (var i = 0; i < this.pfLegacyDtl1List.length; i++) {
            amt = Number(amt) + Number(this.pfLegacyDtl1List[i].amountPaid);
        }
        amt = amt + Number(pfDetails.amountPaid);
        if (Number(this.depositedAmount) < Number(amt)) {
            alert("Collection Amount exceeds Deposit Amount");
            isValid = false;
        }
        if (this.validBenLocation) {
            isValid = false;
        }
        return isValid;
    };
    LegacypfdetailsComponent.prototype.addFieldValue = function () {
        var _this = this;
        if (this.validatePFCollectionDtl(this.newAttribute)) {
            debugger;
            if (this.isValidMonth) {
                this.monthSelection(this.newAttribute);
                var str = "";
                var newString = "";
                this.newAttribute.pfLegacyDtl2 = [];
                for (var i = 0; i < this.newAttribute.selectedMonths.length; i++) {
                    debugger;
                    if (this.pfLegacyDtl1List != null && this.pfLegacyDtl1List.length > 0) {
                        for (var j = 0; j < this.pfLegacyDtl1List.length; j++) {
                            if (this.pfLegacyDtl1List[j].benSno == this.beneficiary.benSno) {
                                for (var k = 0; k < this.pfLegacyDtl1List[j].selectedMonths.length; k++) {
                                    if (this.pfLegacyDtl1List[j].selectedMonths[k].monthId == this.newAttribute.selectedMonths[i].monthId
                                        && this.pfLegacyDtl1List[j].selectedMonths[k].year == this.newAttribute.selectedMonths[i].year) {
                                        str = "already " + this.newAttribute.selectedMonths[i].monthName + " this month is added to ssin";
                                        alert(str);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    newString += this.newAttribute.selectedMonths[i].monthName + ",";
                    this.newAttribute.pfLegacyDtl2.push({ monthPaid: this.newAttribute.selectedMonths[i].monthId, yearPaid: this.newAttribute.selectedMonths[i].year, amount: this.newAttribute.selectedMonths[i].amount });
                }
                if (str == "") {
                    if (this.pfLegacyDtl1List.findIndex(function (x) { return x.bookNo == _this.newAttribute.bookNo && x.receiptNo == _this.newAttribute.receiptNo; }) == -1) {
                        this.newAttribute.benSno = this.beneficiary.benSno;
                        this.newAttribute.benFullName = this.beneficiary.benFullName;
                        this.newAttribute.benSSINOrPFAccountNo = this.beneficiary.benSSINOrPFAccountNo;
                        this.newAttribute.benPFAccountId = this.beneficiary.benPFAccountId;
                        this.newAttribute.monthName = newString.substr(0, newString.length - 1);
                        this.newAttribute.bookName = this.agentReceiptBooks.find(function (x) { return x.id == _this.newAttribute.bookNo; }).bookNo;
                        //this.remainingAmount = this.remainingAmount - Number(this.newAttribute.amountPaid);
                        //this.total = this.total + Number(this.newAttribute.amountPaid);
                        this.pfLegacyDtl1List.push(this.newAttribute);
                        var amt = 0;
                        for (var i = 0; i < this.pfLegacyDtl1List.length; i++) {
                            amt = Number(amt) + Number(this.pfLegacyDtl1List[i].amountPaid);
                        }
                        if (this.depositedAmount >= amt) {
                            this.remainingAmount = Number(this.depositedAmount) - Number(amt);
                        }
                        this.total = amt;
                        this.newAttribute = {};
                        this.selectedMonthIds = [];
                        if (this.total > 0 && this.total == this.depositedAmount)
                            this.showAddRow = false;
                        else {
                            this.showAddRow = true;
                            // this.newAttribute.ssI_Number = this.nextSSIN;
                            this.newAttribute.collectionDate = this.collectionDate;
                            this.newAttribute.bookNo = this.agentReceiptBooks.find(function (x) { return x.id == _this.bookId; }).id;
                            this.nextReceiptNo = Number(this.pfLegacyDtl1List[this.pfLegacyDtl1List.length - 1].receiptNo);
                            if (this.nextReceiptNo != null && this.nextReceiptNo != undefined) {
                                if (this.nextReceiptNo < this.receiptNoFrom || this.nextReceiptNo > this.receiptNoTo) {
                                    this.isReceiptNoRange = true;
                                }
                                else {
                                    this.isReceiptNoRange = false;
                                    var recNo = Number(this.nextReceiptNo) + 1;
                                    debugger;
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
                        alert("already this receipt is generated");
                        return;
                    }
                }
                this.pfLegacyMaster.pfLegacyDtl1List = this.pfLegacyDtl1List;
                this.beneficiary.benFullName = '';
                this.beneficiary.benSSINOrPFAccountNo = '';
                this.nextReceiptNo = null;
            }
        }
    };
    LegacypfdetailsComponent.prototype.editFieldValue = function (index, field) {
        var _this = this;
        field.isEdit = true;
        this.searchSSINNo(field.ssI_Number);
        this.beneficiary.benFullName = "";
        this.beneficiary.benSSINOrPFAccountNo = "";
        this.remainingAmount = Number(this.remainingAmount) + Number(field.amountPaid);
        this.total = Number(this.total) - Number(field.amountPaid);
        if (field.collectionDate != null && field.collectionDate != undefined)
            field.collectionDate = new Date(field.collectionDate);
        if (this.agentReceiptBooks != null) {
            this.agentReceiptBooks.forEach(function (x) {
                if (x.id == field.bookNo) {
                    _this.minDt = new Date(x.date);
                }
            });
        }
    };
    LegacypfdetailsComponent.prototype.saveFieldValue = function (index, field) {
        if (this.validatePFCollectionDtl(field)) {
            field.isEdit = false;
            var newString = '';
            for (var i = 0; i < field.selectedMonths.length; i++) {
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
    };
    LegacypfdetailsComponent.prototype.deleteFieldValue = function (index, field) {
        this.pfLegacyDtl1List.splice(index, 1);
        var amt = 0;
        for (var i = 0; i < this.pfLegacyDtl1List.length; i++) {
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
    };
    LegacypfdetailsComponent.prototype.getAgentList = function () {
        var _this = this;
        this.dataService
            .getAgentLocationWise(Number(this.user.user.userTpe), this.user.user.deptUserid)
            .subscribe(function (data) {
            _this.agentList = data;
        });
    };
    LegacypfdetailsComponent.prototype.agentChange = function (eve) {
        this.agentUserId = eve;
        this.agentName = this.agentList.find(function (x) { return x.userid == eve; }).userName;
        this.locationName = this.agentList.find(function (x) { return x.userid == eve; }).locationName;
        this.locationId = this.agentList.find(function (x) { return x.userid == eve; }).location;
        this.agentSubDivId = this.agentList.find(function (x) { return x.userid == eve; }).subDivId;
        //this.getAgentLegacyPfDetails(eve);
    };
    LegacypfdetailsComponent.prototype.workerTypeChange = function (eve) {
        //Get subdiv wise rlo bank details
        //this.getSubDivRLOBankDetails(this.agentSubDivId, eve);
        this.getLWCBankDetails(this.agentUserId, eve);
    };
    LegacypfdetailsComponent.prototype.getPFMasterConfigDetails = function () {
        var _this = this;
        this.dataService
            .getPFMasterConfigDetails()
            .subscribe(function (data) {
            _this.pfMasterConfig = data;
        });
    };
    LegacypfdetailsComponent.prototype.getSubDivRLOBankDetails = function (id, workerTypeId) {
        var _this = this;
        this.dataService
            .getSubDivRLOBankDetails(id, workerTypeId)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    LegacypfdetailsComponent.prototype.getLWCBankDetails = function (userId, workerTypeId) {
        var _this = this;
        this.dataService
            .getLWCBankDetails(userId, workerTypeId)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    //bankChange(eve) {
    //    this.rloOfficeId = this.bankDetails.find(x => x.rloOfficeBankId == eve).rloOfficeId;
    //}
    LegacypfdetailsComponent.prototype.getAgentReceiptBooks = function (userId) {
        var _this = this;
        this.agentReceiptBooks = [];
        if (this.collectionDate != undefined && this.depositDate != undefined) {
            this.dataService
                .getAgentCollectionBooks(userId, new Date(this.collectionDate), new Date(this.depositDate))
                .subscribe(function (data) {
                _this.agentReceiptBooks = data;
            });
        }
    };
    LegacypfdetailsComponent.prototype.getAgentBooks = function (userId) {
        var _this = this;
        this.agentReceiptBooks = [];
        this.dataService
            .getAgentBooks(userId)
            .subscribe(function (data) {
            _this.agentReceiptBooks = data;
        });
    };
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
    LegacypfdetailsComponent.prototype.getSelectedMonthList = function (pfCollectionDtlList) {
        var monthList = [];
        var _loop_1 = function (i) {
            var id = this_1.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_1.months.filter(function (x) { return x.Id == id; });
            monthList.push(m[0].monthId);
        };
        var this_1 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_1(i);
        }
        return monthList;
    };
    LegacypfdetailsComponent.prototype.getSelectedMonths = function (pfCollectionDtlList) {
        debugger;
        var monName = "";
        var _loop_2 = function (i) {
            var id = this_2.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_2.months.filter(function (x) { return x.Id == id; });
            monName += m[0].monthName + ",";
        };
        var this_2 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_2(i);
        }
        return monName;
    };
    LegacypfdetailsComponent.prototype.getSelectedMonthArray = function (pfCollectionDtlList) {
        var monthsSelected = [];
        var _loop_3 = function (i) {
            var id = this_3.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_3.months.filter(function (x) { return x.Id == id; });
            this_3.pfmonth1 = {};
            this_3.pfmonth1.Id = m[0].Id;
            this_3.pfmonth1.monthId = m[0].monthId;
            this_3.pfmonth1.monthName = m[0].monthName;
            monthsSelected.push(this_3.pfmonth1);
        };
        var this_3 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_3(i);
        }
        return monthsSelected;
    };
    LegacypfdetailsComponent.prototype.saveLegacyPFDetails = function (depositDetails, type) {
        var _this = this;
        debugger;
        if (this.validateDetails(depositDetails, type)) {
            if (depositDetails != null) {
                this.pfLegacyMaster = {};
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
                    var _loop_4 = function (i) {
                        this_4.pfLegacyDtl1 = {};
                        this_4.pfLegacyDtl1.amountPaid = depositDetails.pfLegacyDtl1List[i].amountPaid;
                        this_4.pfLegacyDtl1.benPFAccountId = depositDetails.pfLegacyDtl1List[i].benPFAccountId;
                        this_4.pfLegacyDtl1.benSno = depositDetails.pfLegacyDtl1List[i].benSno;
                        this_4.pfLegacyDtl1.collectionDate = depositDetails.pfLegacyDtl1List[i].collectionDate;
                        this_4.pfLegacyDtl1.bookNo = depositDetails.pfLegacyDtl1List[i].bookNo;
                        this_4.pfLegacyDtl1.receiptNo = depositDetails.pfLegacyDtl1List[i].receiptNo;
                        //PFLegacyDtl2
                        debugger;
                        if (depositDetails.pfLegacyDtl1List[i].selectedMonths != null && depositDetails.pfLegacyDtl1List[i].selectedMonths.length > 0) {
                            this_4.pfLegacyDtl1.pfLegacyDtl2List = [];
                            var _loop_5 = function (j) {
                                this_4.pfLegacyDtl2 = {};
                                debugger;
                                this_4.pfLegacyDtl2.monthPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].monthId;
                                var id = this_4.months.find(function (x) { return x.monthId == depositDetails.pfLegacyDtl1List[i].selectedMonths[j].monthId; }).Id;
                                if (id >= 10)
                                    //this.pfLegacyDtl2.yearPaid = this.fEndYear;
                                    this_4.pfLegacyDtl2.yearPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].year;
                                else
                                    //this.pfLegacyDtl2.yearPaid = this.fStartYear;
                                    this_4.pfLegacyDtl2.yearPaid = depositDetails.pfLegacyDtl1List[i].selectedMonths[j].year;
                                this_4.pfLegacyDtl2.amount = this_4.pfMasterConfig.beneficiaryPFContribution;
                                this_4.pfLegacyDtl1.pfLegacyDtl2List.push(this_4.pfLegacyDtl2);
                            };
                            for (var j = 0; j < depositDetails.pfLegacyDtl1List[i].selectedMonths.length; j++) {
                                _loop_5(j);
                            }
                        }
                        this_4.pfLegacyMaster.pfLegacyDtl1List.push(this_4.pfLegacyDtl1);
                    };
                    var this_4 = this;
                    for (var i = 0; i < depositDetails.pfLegacyDtl1List.length; i++) {
                        _loop_4(i);
                    }
                }
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .submitLegacyPFDetails(this.pfLegacyMaster)
                    .then(function (data) {
                    if (data) {
                        if (type == 1)
                            _this.successMessage = "Saved sucessfully";
                        else
                            _this.successMessage = "PF amount sucessfully deposited";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
    };
    LegacypfdetailsComponent.prototype.validateDetails = function (depositDetails, id) {
        var isValid = true;
        this.ARNReq = this.depositDateReq = this.depositBankValid = this.depositedAmountReq = this.payInSlipUploaded = this.workerTypeReq = this.financialYearValid = true;
        if (this.agentUserId == undefined || this.agentUserId == 0) {
            this.ARNReq = isValid = false;
        }
        if (this.depositDate == undefined || this.depositDate == null) {
            this.depositDateReq = isValid = false;
        }
        if (this.bankId == undefined || this.bankId == 0) {
            this.depositBankValid = isValid = false;
        }
        if (this.depositedAmount == undefined || this.depositedAmount == null) {
            this.depositedAmountReq = isValid = false;
        }
        if (depositDetails == null || (depositDetails.pfLegacyDtl1List != null && depositDetails.pfLegacyDtl1List.length == 0)) {
            this.noRecords = isValid = false;
        }
        if (this.workerTypeId == undefined || this.workerTypeId == 0) {
            this.workerTypeReq = isValid = false;
        }
        if (this.financialYearId == undefined || this.financialYearId == 0) {
            this.financialYearValid = isValid = false;
        }
        if (this.todayMinDepositDateReq) {
            isValid = false;
        }
        if (id == 2)
            if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) {
                isValid = this.payInSlipUploaded = false;
            }
        return isValid;
    };
    LegacypfdetailsComponent.prototype.monthSelection = function (pfDetails) {
        var _this = this;
        if (pfDetails.selectedMonths != null && pfDetails.selectedMonths != undefined && pfDetails.selectedMonths.length > 0) {
            var _loop_6 = function (i) {
                pfDetails.selectedMonths.find(function (x) { return x.Id == pfDetails.selectedMonths[i].Id; }).monthId = this_5.months.find(function (x) { return x.Id == pfDetails.selectedMonths[i].Id; }).monthId;
            };
            var this_5 = this;
            for (var i = 0; i < pfDetails.selectedMonths.length; i++) {
                _loop_6(i);
            }
            pfDetails.selectedMonths.filter(function (x) { return x.amount = _this.pfMasterConfig.beneficiaryPFContribution; });
            pfDetails.selectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
        }
    };
    LegacypfdetailsComponent.prototype.onItemSelect = function (eve, pfDetails, index) {
        var _this = this;
        this.pfSelectedMonth = eve;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        //let id = this.months.find(x => x.monthId == eve.monthId).Id;
        var id = this.months.find(function (x) { return x.Id == eve.Id; }).Id;
        if (id >= 10) {
            //pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fEndYear;
            pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).year = this.fEndYear;
            pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).monthId = this.months.find(function (x) { return x.Id == eve.Id; }).monthId;
        }
        else {
            //pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year = this.fStartYear;
            pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).year = this.fStartYear;
            pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).monthId = this.months.find(function (x) { return x.Id == eve.Id; }).monthId;
        }
        pfDetails.selectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
        this.dataService
            //.isValidMonthSubmitted(this.beneficiary.benSno, eve.monthId, pfDetails.selectedMonths.find(x => x.monthId == eve.monthId).year)
            .isValidMonthSubmitted(this.beneficiary.benSno, pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).monthId, pfDetails.selectedMonths.find(function (x) { return x.Id == eve.Id; }).year)
            .subscribe(function (data) {
            debugger;
            if (data) {
                _this.isValidMonth = false;
                alert("already added please select another month");
                return;
            }
            else {
                _this.isValidMonth = true;
                debugger;
                _this.monthContributionAmount = pfDetails.selectedMonths.length * _this.pfMasterConfig.beneficiaryPFContribution;
                if (pfDetails.isEdit) {
                    pfDetails.amountPaid = _this.monthContributionAmount;
                }
                else {
                    debugger;
                    _this.newAttribute.amountPaid = _this.monthContributionAmount;
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
    };
    LegacypfdetailsComponent.prototype.onItemDeSelect = function (eve, pfDetails) {
        debugger;
        this.monthContributionAmount = pfDetails.selectedMonths.length * this.pfMasterConfig.beneficiaryPFContribution;
        if (pfDetails.isEdit) {
            pfDetails.amountPaid = this.monthContributionAmount;
        }
        else {
            debugger;
            this.newAttribute.amountPaid = this.monthContributionAmount;
        }
    };
    LegacypfdetailsComponent.prototype.pfMonthChange = function (value) {
        var _this = this;
        this.pfSelectedMonth = value;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        var s = null;
        var id = this.months.find(function (x) { return x.monthId == value; }).Id;
        var m = this.months.filter(function (x) { return x.Id == id; });
        s = m;
        if (s != null && s != undefined) {
            this.pfSelectedMonths = s;
            this.pfSelectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
        }
        this.dataService
            .isValidMonthSubmitted(this.beneficiary.benSno, this.pfSelectedMonths[0].monthId, this.pfSelectedMonths[0].year)
            .subscribe(function (data) {
            if (data) {
                alert("already added please select another month");
            }
        });
    };
    LegacypfdetailsComponent.prototype.receiptNoChange = function (bookNo, receiptNo) {
        var _this = this;
        this.nextReceiptNo = null;
        this.dataService
            .isValidBookReceipt(bookNo, receiptNo)
            .subscribe(function (data) {
            if (data) {
                alert("already added please select another book and receipt");
            }
            else {
                if (receiptNo < _this.receiptNoFrom || receiptNo > _this.receiptNoTo) {
                    _this.isReceiptNoRange = true;
                }
                else {
                    _this.isReceiptNoRange = false;
                    //let recNo = Number(receiptNo) + 1; debugger;
                    //if (recNo >= this.receiptNoFrom && recNo <= this.receiptNoTo)
                    //    this.nextReceiptNo = recNo;
                }
            }
        });
    };
    LegacypfdetailsComponent.prototype.searchSSINNo = function (ssnNo) {
        var _this = this;
        this.isValidSave = this.isMonthEnable = true;
        this.benficiaryInactive = this.isInterestCalculated = this.benRegDateMinFinancialYear = this.validBenLocation = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.nextSSIN = ssnNo.trim();
            this.dataService
                .getLegacyPFBeneficiaryBasicDetailsByID(ssnNo.trim(), true)
                .subscribe(function (data) {
                debugger;
                _this.beneficiary = data;
                if (_this.beneficiary != null) {
                    _this.isValidSave = true;
                    //if (this.beneficiary.isActive && this.beneficiary.status == 1) {
                    //----------Ben location code
                    //if (this.beneficiary.benBmc != null && (this.locationId != undefined && this.locationId != null)) {
                    //    if (this.beneficiary.benBmc == this.locationId)
                    //    {
                    if (_this.financialYearId != undefined && _this.financialYearId > 0) {
                        //BenRegDate <= financial year end date
                        var financialYear = _this.finanacialYearList.find(function (x) { return x.financialYearId == _this.financialYearId; });
                        if (financialYear != null && (_this.beneficiary.benRegDate != undefined || _this.beneficiary.benRegDate != null)) {
                            var endDate = new Date(financialYear.endDate);
                            var regDate = new Date(_this.beneficiary.benRegDate);
                            var timeDiff = (endDate.getTime() - regDate.getTime());
                            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            if (diffDays >= 0) {
                                _this.dataService
                                    .isInterestCalculatedforBen(_this.financialYearId, _this.beneficiary.benSno)
                                    .subscribe(function (data2) {
                                    if (!data2) {
                                        //this.ssinValid = true;
                                        _this.isValidSave = false;
                                        _this.isMonthEnable = false;
                                        //if (this.beneficiary.benSSINOrPFAccountNo == "")
                                        //    this.validPFNo = false;
                                        //else
                                        //    this.validPFNo = true;
                                        if (_this.beneficiary.benOccupationId != null && (_this.workerTypeId != null && _this.workerTypeId != undefined)) {
                                            if (_this.beneficiary.benOccupationId == _this.workerTypeId)
                                                _this.validWTBen = false;
                                            else
                                                _this.validWTBen = true;
                                        }
                                        if (_this.newAttribute.ssI_Number == undefined || _this.newAttribute.ssI_Number == "") {
                                            _this.beneficiary.benFullName = "";
                                            _this.beneficiary.benSSINOrPFAccountNo = "";
                                        }
                                    }
                                    else
                                        _this.isInterestCalculated = true;
                                });
                            }
                            else
                                _this.benRegDateMinFinancialYear = true;
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
            this.beneficiary = {};
            this.ssinValid = true;
        }
    };
    LegacypfdetailsComponent.prototype.clearValues = function () {
        this.beneficiary = {};
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
    };
    LegacypfdetailsComponent.prototype.okClick = function () {
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
    };
    LegacypfdetailsComponent.prototype.addReceiptBook = function () {
        window.location.href = "pfconfig/receiptbook";
    };
    LegacypfdetailsComponent.prototype.cancleClick = function () {
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others || Number(this.user.user.userTpe) == UserType.CA) {
            window.location.href = "Agent/bulkpfdepositlist"; //"Agent/AgentDashboard";
        }
        else
            window.location.href = "Home/DeptDashboard";
    };
    LegacypfdetailsComponent.prototype.depositedAmountChange = function (amount) {
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
    };
    LegacypfdetailsComponent.prototype.getWorkerTypeDetails = function () {
        var _this = this;
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe(function (data) {
            _this.WorkerTypeList = data;
        });
    };
    LegacypfdetailsComponent.prototype.depositDateChange = function (eve) {
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
            else
                this.todayMinDepositDateReq = true;
            this.getfinanacialYearListDetails(deposDate);
        }
    };
    LegacypfdetailsComponent.prototype.bookChange = function (args) {
        var _this = this;
        this.bookId = args.target.value;
        if (this.agentReceiptBooks != null) {
            this.agentReceiptBooks.forEach(function (x) {
                if (x.id == args.target.value) {
                    _this.minDt = new Date(x.date);
                    _this.receiptNoFrom = x.receiptNoFrom;
                    _this.receiptNoTo = x.receiptNoTo;
                }
            });
        }
    };
    LegacypfdetailsComponent.prototype.onFileChanged = function (inputValue) {
        var _this = this;
        var file = inputValue.target.files[0];
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
                model.statusId = 1;
                model.attachmentType = AttachmentType.PayinSlip;
                model.createdBy = _this.user.user.deptUserid;
                _this.payInSlipCertificate = model;
            };
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    };
    LegacypfdetailsComponent.prototype.getActiveFinancialYear = function () {
        var _this = this;
        this.dataService
            .getActiveFinancialYear()
            .subscribe(function (data) {
            _this.activeYear = data;
        });
    };
    LegacypfdetailsComponent.prototype.collectionDateChange = function (eve) {
        var _this = this;
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
                        .subscribe(function (data1) {
                        debugger;
                        if (data1) {
                            var timeDiff1 = (_this.toDayDate.getTime() - _this.collectionDate.getTime());
                            var diffDays1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24));
                            if (diffDays1 >= 0) {
                                //BenRegDate < collection Date
                                if (_this.beneficiary != null && (_this.beneficiary.benRegDate != undefined || _this.beneficiary.benRegDate != null)) {
                                    var regDate1 = new Date(_this.beneficiary.benRegDate);
                                    debugger;
                                    //var regDate = new Date(regDate1.getFullYear(), regDate1.getMonth() + 1, regDate1.getDate());
                                    var regDate = new Date(regDate1.getFullYear(), regDate1.getMonth() + 1, 1);
                                    _this.colMonths = new Date(regDate);
                                    var timeDiff2 = (_this.collectionDate.getTime() - regDate.getTime());
                                    var diffDays2 = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
                                    if (diffDays2 >= 0) {
                                        //------------------------
                                        _this.dataService
                                            .getCollectionFinancialYear(new Date(eve))
                                            .subscribe(function (data) {
                                            _this.collectionYear = data;
                                            if (_this.collectionYear != null) {
                                                _this.currentyear = new Date(eve).getFullYear();
                                                var currentMonth = new Date(eve).getMonth() + 1;
                                                if (currentMonth <= 3) {
                                                    _this.fStartYear = _this.currentyear - 1;
                                                    _this.fEndYear = _this.currentyear;
                                                }
                                                else {
                                                    _this.fStartYear = _this.currentyear;
                                                    _this.fEndYear = _this.currentyear + 1;
                                                }
                                            }
                                            _this.getAgentReceiptBooks(_this.agentUserId);
                                        });
                                    }
                                    else
                                        _this.benRegDateMinCollectionDate = true;
                                }
                            }
                            else
                                _this.todayMinCollectionDateReq = true;
                        }
                        else {
                            _this.isColDateinRangeYear = true;
                        }
                    });
                }
            }
            else {
                this.DepositMinDateReq = true;
            }
        }
    };
    LegacypfdetailsComponent.prototype.getLegacyPFCollectionDetails = function (pfLegacyMasterId) {
        var _this = this;
        var collectionAmount = 0;
        this.dataService
            .getLegacyPFCollectionDetails(pfLegacyMasterId)
            .subscribe(function (data) {
            debugger;
            _this.pfLegacyMaster = data;
            if (_this.pfLegacyMaster != null) {
                _this.depositDate = new Date(_this.pfLegacyMaster.depositDate);
                if (_this.pfLegacyMaster.pfLegacyDtl1List != null && _this.pfLegacyMaster.pfLegacyDtl1List.length > 0) {
                    _this.agentReceiptBooks = [];
                    var x = _this.pfLegacyMaster.pfLegacyDtl1List.sort(function (a, b) { return new Date(b.collectionDate).getTime() - new Date(a.collectionDate).getTime(); });
                    if (x[_this.pfLegacyMaster.pfLegacyDtl1List.length - 1].collectionDate != undefined && _this.depositDate != undefined) {
                        _this.dataService
                            .getAgentCollectionBooks(_this.agentUserId, new Date(x[_this.pfLegacyMaster.pfLegacyDtl1List.length - 1].collectionDate), new Date(_this.depositDate))
                            .subscribe(function (data1) {
                            _this.agentReceiptBooks = data1;
                            _this.depositedAmount = _this.remainingAmount = _this.pfLegacyMaster.depositAmount;
                            _this.workerTypeId = _this.pfLegacyMaster.workerTypeId;
                            //this.getSubDivRLOBankDetails(this.agentSubDivId, this.workerTypeId);
                            _this.getLWCBankDetails(_this.agentUserId, _this.workerTypeId);
                            //this.bankId = this.pfLegacyMaster.bankId;
                            _this.bankId = _this.pfLegacyMaster.lwcBankCode;
                            _this.rloOfficeId = _this.pfLegacyMaster.rloOfficeId; //this.bankDetails.find(x => x.rloOfficeBankId == this.pfLegacyMaster.bankId).rloOfficeId;
                            _this.financialYearId = _this.pfLegacyMaster.financialYearId;
                            _this.payinSlip = _this.pfLegacyMaster.payinSlipNo;
                            if (_this.pfLegacyMaster.payInSlip != null) {
                                _this.payInSlipCertificate = _this.pfLegacyMaster.payInSlip;
                            }
                            if (_this.pfLegacyMaster.pfLegacyDtl1List != null && _this.pfLegacyMaster.pfLegacyDtl1List.length > 0) {
                                debugger;
                                _this.pfLegacyDtl1List = _this.pfLegacyMaster.pfLegacyDtl1List;
                                var _loop_7 = function (i) {
                                    _this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = [];
                                    debugger;
                                    _this.pfLegacyMaster.pfLegacyDtl1List[i].bookName = _this.agentReceiptBooks.find(function (x) { return x.id == _this.pfLegacyMaster.pfLegacyDtl1List[i].bookNo; }).bookNo;
                                    var newString = _this.getSelectedMonths(_this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                    _this.pfLegacyMaster.pfLegacyDtl1List[i].monthName = newString.substr(0, newString.length - 1);
                                    _this.pfLegacyMaster.pfLegacyDtl1List[i].monthList = _this.getSelectedMonthList(_this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                    collectionAmount = collectionAmount + _this.pfLegacyMaster.pfLegacyDtl1List[i].amountPaid;
                                    _this.pfLegacyMaster.pfLegacyDtl1List[i].selectedMonths = _this.getSelectedMonthArray(_this.pfLegacyMaster.pfLegacyDtl1List[i].pfLegacyDtl2List);
                                };
                                for (var i = 0; i < _this.pfLegacyMaster.pfLegacyDtl1List.length; i++) {
                                    _loop_7(i);
                                }
                                _this.remainingAmount = _this.remainingAmount - collectionAmount;
                                _this.total = _this.total + collectionAmount;
                                debugger;
                                var pfDtlList = _this.pfLegacyMaster.pfLegacyDtl1List[_this.pfLegacyMaster.pfLegacyDtl1List.length - 1];
                                if (pfDtlList != null) {
                                    _this.collectionDate = new Date(pfDtlList.collectionDate);
                                    _this.bookId = pfDtlList.bookNo;
                                    _this.nextReceiptNo = Number(pfDtlList.receiptNo) + 1;
                                    _this.newAttribute.collectionDate = _this.collectionDate;
                                    _this.newAttribute.bookNo = _this.agentReceiptBooks.find(function (x) { return x.id == _this.bookId; }).id;
                                    _this.newAttribute.receiptNo = _this.nextReceiptNo;
                                }
                            }
                            if (_this.total > 0 && _this.total == _this.depositedAmount)
                                _this.showAddRow = false;
                            else
                                _this.showAddRow = true;
                        });
                    }
                }
            }
        });
    };
    LegacypfdetailsComponent.prototype.getfinanacialYearListDetails = function (deposDate) {
        var _this = this;
        this.dataService
            .getfinanacialYearListDetails(deposDate)
            .subscribe(function (data) {
            _this.finanacialYearList = data;
            if (_this.finanacialYearList != null && _this.finanacialYearList.length > 0) {
                _this.financialYearId = _this.finanacialYearList[_this.finanacialYearList.length - 1].financialYearId;
            }
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], LegacypfdetailsComponent.prototype, "successModal", void 0);
    LegacypfdetailsComponent = __decorate([
        Component({
            selector: 'app-legacypfdetails',
            templateUrl: './legacypfdetails.component.html',
            styleUrls: ['./legacypfdetails.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], LegacypfdetailsComponent);
    return LegacypfdetailsComponent;
}());
export { LegacypfdetailsComponent };
//# sourceMappingURL=legacypfdetails.component.js.map