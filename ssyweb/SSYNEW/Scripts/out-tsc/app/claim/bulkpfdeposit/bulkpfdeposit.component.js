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
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { UserType } from '../pipes/constnts.model';
import { Months } from '../models/pf.months.model';
import { AttachmentType } from '../pipes/constnts.model';
var BulkpfdepositComponent = /** @class */ (function () {
    function BulkpfdepositComponent(router, route, dataService, user) {
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
        this.pfCollectionDtlInfo = {};
        this.pfCollectionDetailsList = [];
        this.pfCollectionDetails = {};
        this.pfCollectionMaster = {};
        this.pfCollectionMasterList = [];
        this.pfCollectionDtlDetails = {};
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
        //agentPfValidation: boolean = false;
        this.workerTypeValid = false;
        //agentDepositAmountValidation: boolean = false;
        this.monthSettings = {};
        this.selectedMonthIds = [];
        //editedselectedMonthIds: Array<any> = [];
        // sMon: Array<PfMonths> = [];
        this.sMon = [];
        this.pfmonth1 = {};
        this.disableCollectionDate = true;
        this.isValidMonth = true;
        this.amountReq = true;
        this.payInSlipUploaded = true;
        this.payInSlipCertificate = {};
        this.noRecords = true;
        this.bulkPFDeposit = {};
        this.activeYear = {};
        this.isDepartmentUser = true;
        this.isReceiptNoRange = false;
        this.collectionYear = {};
        this.validPFNo = true;
        this.showAddRow = true;
        this.workerTypeReq = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
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
    BulkpfdepositComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getActiveFinancialYear();
        this.pfMonths = this.months;
        this.getWorkerTypeDetails();
        this.getPFMasterConfigDetails();
        //-------------------
        this.monthSettings = {
            singleSelection: false,
            idField: 'monthId',
            textField: 'monthName',
            enableCheckAll: false,
            itemsShowLimit: 2,
        };
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others) {
            this.isDepartmentUser = false;
            this.dataService
                .getUserDetails(this.user.user.deptUserid)
                .subscribe(function (data) {
                _this.userDetails = data;
                if (_this.userDetails != null) {
                    _this.agentUserId = _this.user.user.deptUserid;
                    _this.agentName = _this.user.user.userName;
                    _this.locationName = _this.userDetails.locationName;
                    _this.agentSubDivId = _this.userDetails.subDivId;
                    //Get subdiv wise rlo bank details
                    // this.getSubDivRLOBankDetails(this.agentSubDivId);
                    //this.getAgentReceiptBooks(this.agentUserId);
                    _this.getAgentLegacyPfDetails(_this.agentUserId);
                }
            });
        }
        else {
            this.getAgentList();
        }
    };
    BulkpfdepositComponent.prototype.addFieldValue = function () {
        var _this = this;
        if (this.validatePFCollectionDtl(this.newAttribute)) {
            debugger;
            if (this.isValidMonth) {
                this.monthSelection(this.newAttribute);
                var str = "";
                var newString = "";
                this.newAttribute.pfCollectionDtlList = [];
                var _loop_1 = function (i) {
                    if (this_1.pfCollectionDetailsList.findIndex(function (x) { return x.benSno == _this.beneficiary.benSno && x.month == _this.newAttribute.selectedMonths[i].monthId && x.year == _this.newAttribute.selectedMonths[i].year; }) == -1 && this_1.rowIndex == -1) {
                        //this.newAttribute.monthName = "";
                        //this.newAttribute.month = this.pfSelectedMonths[i].monthId;
                        //this.newAttribute.year = this.pfSelectedMonths[i].year;
                        newString += this_1.newAttribute.selectedMonths[i].monthName + ",";
                        debugger;
                        this_1.newAttribute.pfCollectionDtlList.push({ monthPaid: this_1.newAttribute.selectedMonths[i].monthId, yearPaid: this_1.newAttribute.selectedMonths[i].year, amount: this_1.newAttribute.selectedMonths[i].amount });
                        //this.newAttribute.monthList.push(this.pfSelectedMonths[i].monthId);
                        //this.newAttribute.selectedMonths = this.pfSelectedMonths;
                    }
                    else if (this_1.pfCollectionDetailsList.findIndex(function (x) { return x.benSno == _this.beneficiary.benSno && x.month == _this.newAttribute.selectedMonths[i].monthId && x.year == _this.newAttribute.selectedMonths[i].year; }) != -1 && this_1.rowIndex == -1) {
                        str = "already " + this_1.newAttribute.selectedMonths[i].monthName + " this month is added to ssin";
                        alert(str);
                        return { value: void 0 };
                    }
                };
                var this_1 = this;
                //this.newAttribute.monthList = [];
                for (var i = 0; i < this.newAttribute.selectedMonths.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                if (str == "") {
                    if (this.pfCollectionDetailsList.findIndex(function (x) { return x.bookNo == _this.newAttribute.bookNo && x.receiptNo == _this.newAttribute.receiptNo; }) == -1) {
                        this.newAttribute.benSno = this.beneficiary.benSno;
                        this.newAttribute.benFullName = this.beneficiary.benFullName;
                        this.newAttribute.benSSINOrPFAccountNo = this.beneficiary.benSSINOrPFAccountNo;
                        this.newAttribute.benPFAccountId = this.beneficiary.benPFAccountId;
                        //this.newAttribute.year = this.pfSelectedMonths[0].year;
                        this.newAttribute.monthName = newString.substr(0, newString.length - 1);
                        this.newAttribute.bookName = this.agentReceiptBooks.find(function (x) { return x.id == _this.newAttribute.bookNo; }).bookNo;
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
                        alert("already this receipt is generated");
                        return;
                    }
                }
                this.beneficiary.benFullName = '';
                this.beneficiary.benSSINOrPFAccountNo = '';
            }
        }
    };
    BulkpfdepositComponent.prototype.editFieldValue = function (index, field) {
        var _this = this;
        debugger;
        field.isEdit = true;
        this.remainingAmount = Number(this.remainingAmount) + Number(field.collectionAmount);
        this.total = Number(this.total) - Number(field.collectionAmount);
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
    BulkpfdepositComponent.prototype.saveFieldValue = function (index, field) {
        if (this.validatePFCollectionDtl(field)) {
            field.isEdit = false;
            var newString = '';
            for (var i = 0; i < field.selectedMonths.length; i++) {
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
    };
    BulkpfdepositComponent.prototype.deleteFieldValue = function (index, field) {
        this.pfCollectionDetailsList.splice(index, 1);
        this.remainingAmount = Number(this.remainingAmount) + Number(field.collectionAmount);
        this.total = Number(this.total) - Number(field.collectionAmount);
        if (this.total > 0 && this.total == this.depositedAmount)
            this.showAddRow = false;
        else
            this.showAddRow = true;
    };
    BulkpfdepositComponent.prototype.getAgentList = function () {
        var _this = this;
        this.dataService
            .getAgentLocationWise(Number(this.user.user.userTpe), this.user.user.deptUserid)
            .subscribe(function (data) {
            _this.agentList = data;
        });
    };
    BulkpfdepositComponent.prototype.agentChange = function (eve) {
        this.agentUserId = eve;
        this.agentName = this.agentList.find(function (x) { return x.userid == eve; }).userName;
        this.locationName = this.agentList.find(function (x) { return x.userid == eve; }).locationName;
        this.agentSubDivId = this.agentList.find(function (x) { return x.userid == eve; }).subDivId;
        // this.getAgentReceiptBooks(eve);
        this.getAgentLegacyPfDetails(eve);
    };
    BulkpfdepositComponent.prototype.workerTypeChange = function (eve) {
        //Get subdiv wise rlo bank details
        this.getSubDivRLOBankDetails(this.agentSubDivId, eve);
    };
    BulkpfdepositComponent.prototype.getPFMasterConfigDetails = function () {
        var _this = this;
        this.dataService
            .getPFMasterConfigDetails()
            .subscribe(function (data) {
            _this.pfMasterConfig = data;
        });
    };
    BulkpfdepositComponent.prototype.getSubDivRLOBankDetails = function (id, workerTypeId) {
        var _this = this;
        this.dataService
            .getSubDivRLOBankDetails(id, workerTypeId)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    BulkpfdepositComponent.prototype.bankChange = function (eve) {
        this.rloOfficeId = this.bankDetails.find(function (x) { return x.rloOfficeBankId == eve; }).rloOfficeId;
    };
    BulkpfdepositComponent.prototype.getAgentReceiptBooks = function (userId) {
        var _this = this;
        this.agentReceiptBooks = [];
        debugger;
        if (this.collectionDate != undefined && this.depositDate != undefined) {
            this.dataService
                .getAgentCollectionBooks(userId, new Date(this.collectionDate), new Date(this.depositDate))
                .subscribe(function (data) {
                debugger;
                _this.agentReceiptBooks = data;
            });
        }
    };
    BulkpfdepositComponent.prototype.getAgentLegacyPfDetails = function (userId) {
        var _this = this;
        debugger;
        var collectionAmount = 0;
        this.dataService
            .getAgentLegacyPfDetails(userId)
            .subscribe(function (data) {
            _this.pfCollectionDetailsList = data;
            if (_this.pfCollectionDetailsList != null && _this.pfCollectionDetailsList.length > 0) {
                var _loop_2 = function (i) {
                    _this.pfCollectionDetailsList[i].monthList = [];
                    if (_this.pfCollectionDetailsList[i].depositPayInSlipDocument != null) {
                        debugger;
                        _this.payInSlipCertificate = _this.pfCollectionDetailsList[i].depositPayInSlipDocument;
                    }
                    //this.payInSlipCertificate.fileName = this.pfCollectionDetailsList[i].depositPayInSlipDocumentFileName;
                    _this.workerTypeId = _this.pfCollectionDetailsList[i].workerTypeId;
                    _this.depositDate = new Date(_this.pfCollectionDetailsList[i].depositDate);
                    _this.bankId = _this.pfCollectionDetailsList[i].bankId;
                    _this.depositedAmount = _this.remainingAmount = _this.pfCollectionDetailsList[i].depositAmount;
                    _this.payinSlip = _this.pfCollectionDetailsList[i].payinSlipNo;
                    _this.rloOfficeId = _this.bankDetails.find(function (x) { return x.rloOfficeBankId == _this.pfCollectionDetailsList[i].bankId; }).rloOfficeId;
                    _this.pfCollectionDetailsList[i].bookName = _this.agentReceiptBooks.find(function (x) { return x.id == _this.pfCollectionDetailsList[i].bookNo; }).bookNo;
                    var newString = _this.getSelectedMonths(_this.pfCollectionDetailsList[i].pfCollectionDtlList);
                    _this.pfCollectionDetailsList[i].monthName = newString.substr(0, newString.length - 1);
                    debugger;
                    _this.pfCollectionDetailsList[i].monthList = _this.getSelectedMonthList(_this.pfCollectionDetailsList[i].pfCollectionDtlList);
                    collectionAmount += _this.pfCollectionDetailsList[i].collectionAmount;
                    _this.pfCollectionDetailsList[i].selectedMonths = _this.getSelectedMonthArray(_this.pfCollectionDetailsList[i].pfCollectionDtlList);
                    _this.getSubDivRLOBankDetails(_this.agentSubDivId, _this.workerTypeId);
                };
                for (var i = 0; i < _this.pfCollectionDetailsList.length; i++) {
                    _loop_2(i);
                }
                _this.remainingAmount = _this.remainingAmount - collectionAmount;
                _this.total = _this.total + collectionAmount;
            }
        });
    };
    BulkpfdepositComponent.prototype.getSelectedMonthList = function (pfCollectionDtlList) {
        var monthList = [];
        var _loop_3 = function (i) {
            var id = this_2.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_2.months.filter(function (x) { return x.Id == id; });
            monthList.push(m[0].monthId);
        };
        var this_2 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_3(i);
        }
        return monthList;
    };
    BulkpfdepositComponent.prototype.getSelectedMonths = function (pfCollectionDtlList) {
        var monName = "";
        var _loop_4 = function (i) {
            var id = this_3.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_3.months.filter(function (x) { return x.Id == id; });
            monName += m[0].monthName + ",";
        };
        var this_3 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_4(i);
        }
        return monName;
    };
    BulkpfdepositComponent.prototype.getSelectedMonthArray = function (pfCollectionDtlList) {
        var monthsSelected = [];
        var _loop_5 = function (i) {
            var id = this_4.months.find(function (x) { return x.monthId == pfCollectionDtlList[i].monthPaid; }).Id;
            var m = this_4.months.filter(function (x) { return x.Id == id; });
            this_4.pfmonth1 = {};
            this_4.pfmonth1.Id = m[0].Id;
            this_4.pfmonth1.monthId = m[0].monthId;
            this_4.pfmonth1.monthName = m[0].monthName;
            monthsSelected.push(this_4.pfmonth1);
        };
        var this_4 = this;
        for (var i = 0; i < pfCollectionDtlList.length; i++) {
            _loop_5(i);
        }
        return monthsSelected;
    };
    BulkpfdepositComponent.prototype.saveLegacyPFDetails = function (depositDetails, type) {
        var _this = this;
        debugger;
        if (this.validateDetails(depositDetails, type)) {
            var _loop_6 = function (i) {
                this_5.pfCollectionMaster = {};
                debugger;
                this_5.pfCollectionMaster.pfCollectionId = depositDetails[i].pfCollectionId;
                this_5.pfCollectionMaster.agentNo = this_5.agentUserId;
                this_5.pfCollectionMaster.collectionAmount = depositDetails[i].collectionAmount;
                this_5.pfCollectionMaster.benPFAccountId = depositDetails[i].benPFAccountId;
                this_5.pfCollectionMaster.benSno = depositDetails[i].benSno;
                this_5.pfCollectionMaster.collectionDate = depositDetails[i].collectionDate;
                this_5.pfCollectionMaster.bookNo = depositDetails[i].bookNo;
                this_5.pfCollectionMaster.receiptNo = depositDetails[i].receiptNo;
                this_5.pfCollectionMaster.rloOfficeId = this_5.rloOfficeId;
                this_5.pfCollectionMaster.depositDate = new Date(this_5.depositDate);
                this_5.pfCollectionMaster.bankId = this_5.bankId;
                this_5.pfCollectionMaster.payinSlipNo = this_5.payinSlip;
                this_5.pfCollectionMaster.depositAmount = this_5.depositedAmount;
                this_5.pfCollectionMaster.month = depositDetails[i].month;
                this_5.pfCollectionMaster.year = new Date(depositDetails[i].collectionDate).getFullYear(); //depositDetails[i].year;
                this_5.pfCollectionMaster.workerTypeId = this_5.workerTypeId;
                this_5.pfCollectionMaster.isSaveDraft = type;
                //--------------------------
                if (depositDetails[i].selectedMonths != null && depositDetails[i].selectedMonths.length > 0) {
                    this_5.pfCollectionMaster.pfCollectionDtlList = [];
                    var _loop_7 = function (j) {
                        this_5.pfCollectionDtlDetails = {};
                        this_5.pfCollectionDtlDetails.monthPaid = depositDetails[i].selectedMonths[j].monthId;
                        var id = this_5.months.find(function (x) { return x.monthId == depositDetails[i].selectedMonths[j].monthId; }).Id;
                        if (id >= 10)
                            this_5.pfCollectionDtlDetails.yearPaid = this_5.fEndYear;
                        else
                            this_5.pfCollectionDtlDetails.yearPaid = this_5.fStartYear;
                        this_5.pfCollectionDtlDetails.amount = this_5.pfMasterConfig.beneficiaryPFContribution;
                        this_5.pfCollectionMaster.pfCollectionDtlList.push(this_5.pfCollectionDtlDetails);
                    };
                    for (var j = 0; j < depositDetails[i].selectedMonths.length; j++) {
                        _loop_7(j);
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
                this_5.pfCollectionMasterList.push(this_5.pfCollectionMaster);
            };
            var this_5 = this;
            for (var i = 0; i < depositDetails.length; i++) {
                _loop_6(i);
            }
            this.bulkPFDeposit.collectionMasterList = this.pfCollectionMasterList;
            this.bulkPFDeposit.payInSlipCertificate = this.payInSlipCertificate;
            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .submitLegacyPFDetails(this.bulkPFDeposit)
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
    BulkpfdepositComponent.prototype.validateDetails = function (depositDetails, id) {
        var isValid = true;
        this.ARNReq = this.depositDateReq = this.depositBankValid = this.depositedAmountReq = this.payInSlipUploaded = this.workerTypeReq = true;
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
        if (depositDetails == null || (depositDetails != null && depositDetails.length == 0)) {
            this.noRecords = isValid = false;
        }
        if (this.workerTypeId == undefined || this.workerTypeId == 0) {
            this.workerTypeReq = isValid = false;
        }
        if (id == 2)
            if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) {
                isValid = this.payInSlipUploaded = false;
            }
        return isValid;
    };
    BulkpfdepositComponent.prototype.monthSelection = function (pfDetails) {
        var _this = this;
        if (pfDetails.selectedMonths != null && pfDetails.selectedMonths != undefined && pfDetails.selectedMonths.length > 0) {
            pfDetails.selectedMonths.filter(function (x) { return x.amount = _this.pfMasterConfig.beneficiaryPFContribution; });
            pfDetails.selectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
        }
    };
    BulkpfdepositComponent.prototype.onItemSelect = function (eve, pfDetails) {
        var _this = this;
        debugger;
        this.pfSelectedMonth = eve;
        this.getPFMasterConfigDetails();
        this.pfTotalAmount = 0;
        var s = null;
        var id = this.months.find(function (x) { return x.monthId == eve.monthId; }).Id;
        if (id >= 10) {
            pfDetails.selectedMonths.find(function (x) { return x.monthId == eve.monthId; }).year = this.fEndYear;
        }
        else
            pfDetails.selectedMonths.find(function (x) { return x.monthId == eve.monthId; }).year = this.fStartYear;
        //let m = this.months.filter(x => x.Id == id);
        //s = m;
        //if (s != null && s != undefined) {
        //    this.pfSelectedMonths = s;
        pfDetails.selectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
        //}
        debugger;
        this.dataService
            .isValidMonthSubmitted(this.beneficiary.benSno, eve.monthId, pfDetails.selectedMonths.find(function (x) { return x.monthId == eve.monthId; }).year)
            .subscribe(function (data) {
            if (data) {
                _this.isValidMonth = false;
                alert("already added please select another month");
            }
            else {
                _this.isValidMonth = true;
            }
        });
    };
    BulkpfdepositComponent.prototype.pfMonthChange = function (value) {
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
    BulkpfdepositComponent.prototype.receiptNoChange = function (bookNo, receiptNo) {
        var _this = this;
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
                }
            }
        });
    };
    BulkpfdepositComponent.prototype.validatePFCollectionDtl = function (pfDetails) {
        var isValid = true;
        debugger;
        //if (this.agentUserId == undefined || this.agentUserId == null) { this.ARNReq = isValid = false; }
        //if (this.depositDate == undefined || this.depositDate == null) { this.depositDateReq = isValid = false; }
        //if (this.bankId == undefined || this.bankId == null) { this.depositBankValid = isValid = false; }
        if (pfDetails.ssI_Number == undefined || pfDetails.ssI_Number == "") {
            this.ssinValid = isValid = false;
        }
        //if (this.pfSelectedMonths == undefined || this.pfSelectedMonths.length == 0) { this.pfMonthIsValid = isValid = false; }
        if (pfDetails.selectedMonths == undefined || pfDetails.selectedMonths.length == 0) {
            this.pfMonthIsValid = isValid = false;
        }
        //if (this.selectedMonthIds == undefined || this.selectedMonthIds.length == 0) { this.pfMonthIsValid = isValid = false; }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == null) {
            this.bookNoIsValid = isValid = false;
        }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == null || pfDetails.receiptNo.toString() == "") {
            this.receiptNoIsValid = isValid = false;
        }
        if (pfDetails.collectionDate == undefined || pfDetails.collectionDate == null) {
            this.collectionDateReq = isValid = false;
        }
        if (pfDetails.collectionAmount == undefined || pfDetails.collectionAmount == null || pfDetails.collectionAmount.toString() == "") {
            this.amountReq = isValid = false;
        }
        if (this.depositedAmount == undefined || this.depositedAmount == 0 || this.depositedAmount == null) {
            this.depositedAmountReq = isValid = false;
        }
        if (this.isReceiptNoRange) {
            isValid = false;
        }
        debugger;
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
    };
    BulkpfdepositComponent.prototype.searchSSINNo = function (ssnNo) {
        var _this = this;
        this.isValidSave = this.isMonthEnable = true;
        this.benficiaryInactive = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getBeneficiaryDetailsBySearch1(ssnNo.trim(), true)
                .subscribe(function (data) {
                _this.beneficiary = data;
                if (_this.beneficiary != null) {
                    _this.isValidSave = true;
                    if (_this.beneficiary.isActive && _this.beneficiary.status == 1) {
                        //this.ssinValid = true;
                        _this.isValidSave = false;
                        _this.isMonthEnable = false;
                        if (_this.beneficiary.benSSINOrPFAccountNo == "")
                            _this.validPFNo = false;
                        else
                            _this.validPFNo = true;
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
            this.beneficiary = {};
            this.ssinValid = true;
        }
    };
    BulkpfdepositComponent.prototype.clearValues = function () {
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
    BulkpfdepositComponent.prototype.okClick = function () {
        this.successModal.hide();
        // window.location.href = "claim/bulkpfdeposit";
        this.clearValues();
        this.pfCollectionDtlInfo = {};
        this.pfCollectionDetailsList = [];
        this.pfCollectionDetails = {};
        this.pfCollectionMaster = {};
        this.pfCollectionMasterList = [];
        this.pfCollectionDtlDetails = {};
        this.payInSlipCertificate = {};
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
    };
    BulkpfdepositComponent.prototype.addReceiptBook = function () {
        window.location.href = "pfconfig/receiptbook";
    };
    BulkpfdepositComponent.prototype.cancleClick = function () {
        if (Number(this.user.user.userTpe) == UserType.ServiceProvider || Number(this.user.user.userTpe) == UserType.Others) {
            window.location.href = "Agent/AgentDashboard";
        }
        else
            window.location.href = "Home/DeptDashboard";
    };
    BulkpfdepositComponent.prototype.depositedAmountChange = function (amount) {
        if (this.total == 0)
            this.remainingAmount = amount;
        else
            this.remainingAmount = amount - this.total;
        //if (amount > this.pfMasterConfig.agentCollectionLimit) {
        //    this.agentDepositAmountValidation = true;
        //}
        //else {
        //    this.agentDepositAmountValidation = false;
        //}
    };
    BulkpfdepositComponent.prototype.getWorkerTypeDetails = function () {
        var _this = this;
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe(function (data) {
            _this.WorkerTypeList = data;
        });
    };
    BulkpfdepositComponent.prototype.depositDateChange = function (eve) {
        this.disableCollectionDate = false;
        this.collectionMinDt = eve;
        //this.getAgentReceiptBooks(this.agentUserId);
    };
    BulkpfdepositComponent.prototype.bookChange = function (args) {
        var _this = this;
        debugger;
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
    BulkpfdepositComponent.prototype.onFileChanged = function (inputValue) {
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
                //model.pfDepositId = this.depositId;
                model.createdBy = _this.user.user.deptUserid;
                //this.payInSlip = model;
                _this.payInSlipCertificate = model;
            };
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    };
    BulkpfdepositComponent.prototype.getActiveFinancialYear = function () {
        var _this = this;
        this.dataService
            .getActiveFinancialYear()
            .subscribe(function (data) {
            _this.activeYear = data;
            //this.minDt = new Date(this.activeYear.startDate);
            //this.maxDt = new Date(this.activeYear.endDate);
        });
    };
    BulkpfdepositComponent.prototype.collectionDateChange = function (eve) {
        var _this = this;
        debugger;
        this.collectionDate = new Date(eve);
        this.dataService
            .getCollectionFinancialYear(new Date(eve))
            .subscribe(function (data) {
            _this.collectionYear = data;
            if (_this.collectionYear != null) {
                debugger;
                _this.currentyear = new Date(eve).getFullYear();
                var currentMonth = new Date(eve).getMonth();
                if (currentMonth <= 3) {
                    _this.fStartYear = _this.currentyear - 1;
                    _this.fEndYear = _this.currentyear;
                }
                else {
                    _this.fStartYear = _this.currentyear;
                    _this.fEndYear = _this.currentyear + 1;
                }
            }
            debugger;
            _this.getAgentReceiptBooks(_this.agentUserId);
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], BulkpfdepositComponent.prototype, "successModal", void 0);
    BulkpfdepositComponent = __decorate([
        Component({
            selector: 'app-bulkpfdeposit',
            templateUrl: './bulkpfdeposit.component.html',
            styleUrls: ['./bulkpfdeposit.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], BulkpfdepositComponent);
    return BulkpfdepositComponent;
}());
export { BulkpfdepositComponent };
//# sourceMappingURL=bulkpfdeposit.component.js.map