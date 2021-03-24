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
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { Months, CollectionMonths } from '../models/pf.months.model';
import { ModalDirective } from 'ngx-bootstrap';
import { environment } from '../../../environments/environment';
import { UserType } from '../pipes/constnts.model';
var AgentPfCollectionFormComponent = /** @class */ (function () {
    function AgentPfCollectionFormComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.benficiaryInactive = false;
        this.beneficiary = {};
        this.IsValidssin = false;
        this.ssinValid = true;
        this.months = Months;
        this.collectionMonths = CollectionMonths;
        this.pfDetailsVisible = false;
        this.pfMonths = [];
        this.pfSelectedMonths = [];
        this.lastPaidDetails = {};
        this.pfDetails = {};
        this.pfCollectionDetails = {};
        this.pfMasterConfig = {};
        this.agentPfValidation = false;
        //Validation Props
        this.bookNoIsValid = true;
        this.receiptNoIsValid = true;
        this.pfMonthIsValid = true;
        this.weburl = environment.weburl;
        this.agentList = [];
        this.isAgentLoggedin = false;
        this.collectionDateReq = true;
        this.agentInfo = true;
        this.receiptGenerated = true;
        this.agentReceiptBooks = [];
        this.isAllDepositsPayInSlipsUploaded = true;
        this.lastPaidMonthValid = true;
        this.isbenLastCollectionDate = false;
        this.lastCollectionDateReq = true;
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
    AgentPfCollectionFormComponent.prototype.ngOnInit = function () {
        this.getAgentList();
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;
        this.getPFMasterConfigDetails();
        this.weburl = environment.weburl;
        if (this.user.user.userTpe == UserType.ServiceProvider.toString() || this.user.user.userTpe == UserType.CA.toString()) {
            this.agentInfo = false;
            this.checkAgentDepositsPayInSlipsUploaded(this.user.user.deptUserid);
        }
    };
    AgentPfCollectionFormComponent.prototype.getAgentCollectedAmount = function (userId) {
        var _this = this;
        this.dataService
            .getAgentCollectedAmount(userId)
            .subscribe(function (data) {
            _this.agentPfCollectAmount = data;
        });
    };
    AgentPfCollectionFormComponent.prototype.getPFMasterConfigDetails = function () {
        var _this = this;
        this.dataService
            .getPFMasterConfigDetails()
            .subscribe(function (data) {
            _this.pfMasterConfig = data;
            if (_this.pfMasterConfig != null) {
            }
        });
    };
    AgentPfCollectionFormComponent.prototype.searchSSINNo = function (ssnNo) {
        var _this = this;
        debugger;
        this.benficiaryInactive = false;
        this.isbenLastCollectionDate = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getBeneficiaryDetailsBySearch(ssnNo.trim())
                .subscribe(function (data) {
                debugger;
                _this.beneficiary = data;
                if (_this.beneficiary != null) {
                    if (_this.beneficiary.benLastCollectionDate != null) {
                        _this.benLastCollectionDate = new Date(_this.beneficiary.benLastCollectionDate);
                        _this.isbenLastCollectionDate = true;
                    }
                    if (_this.beneficiary.isActive && _this.beneficiary.status == 1) {
                        _this.ssinValid = true;
                        //this.getPaymentDetailsBybenSno(this.beneficiary.benSno);
                    }
                    else {
                        _this.ssinValid = false;
                    }
                }
                else {
                    _this.ssinValid = false;
                }
            });
        }
        else {
            this.beneficiary = {};
            this.ssinValid = true;
        }
    };
    AgentPfCollectionFormComponent.prototype.getPaymentDetailsBybenSno = function (benSno) {
        var _this = this;
        this.dataService
            .getLastPaidPfDetails(benSno)
            .subscribe(function (data) {
            debugger;
            _this.lastPaidDetails = data;
            if (_this.lastPaidDetails != null && (_this.lastPaidDetails.lastPaid != null || _this.lastPaidDetails.lastPaid.trim() != '')) {
                debugger;
                _this.displayMonthList(_this.lastPaidDetails.monthPaid, _this.lastPaidDetails.yearPaid);
            }
            else {
                _this.pfMonths = _this.months;
            }
        });
    };
    AgentPfCollectionFormComponent.prototype.displayMonthList = function (monthId, year) {
        //let monthid = this.months.find(x => x.monthId == monthId).monthId;
        if (year == this.fStartYear && monthId <= 3) {
            this.pfMonths = this.months;
        }
        else {
            var id_1 = this.months.find(function (x) { return x.monthId == monthId; }).Id;
            this.pfMonths = this.months.filter(function (x) { return x.Id > id_1; });
        }
    };
    AgentPfCollectionFormComponent.prototype.lastPaidMonthChange = function (value) {
        debugger;
        this.pfTotalAmount = 0;
        if (value != 0) {
            this.lastPaidDetails = {};
            this.lastPaidDetails.monthPaid = value;
            if (value <= 3)
                this.lastPaidDetails.yearPaid = this.fEndYear;
            else
                this.lastPaidDetails.yearPaid = this.fStartYear;
            this.displayMonthList(this.lastPaidDetails.monthPaid, this.lastPaidDetails.yearPaid);
        }
        else if (value == 0) {
            this.lastPaidDetails = {};
            this.lastPaidDetails.monthPaid = 0;
            this.lastPaidDetails.yearPaid = this.fStartYear;
            this.displayMonthList(this.lastPaidDetails.monthPaid, this.lastPaidDetails.yearPaid);
        }
        else {
            this.lastPaidDetails = null;
            this.pfMonths = this.months;
        }
        this.pfSelectedMonth = 0;
        this.pfSelectedMonths = null;
    };
    AgentPfCollectionFormComponent.prototype.pfMonthChange = function (value) {
        var _this = this;
        this.pfTotalAmount = 0;
        var s = null;
        var id = this.months.find(function (x) { return x.monthId == value; }).Id;
        var m = this.months.filter(function (x) { return x.Id <= id; });
        if (this.lastPaidDetails != null && this.lastPaidDetails.monthPaid > 0) {
            var lastId_1 = this.months.find(function (x) { return x.monthId == _this.lastPaidDetails.monthPaid; }).Id;
            var mon = this.months.filter(function (x) { return x.Id > lastId_1 && x.Id <= id; });
            s = mon;
            //s = m.filter(x => x.monthId > this.lastPaidDetails.monthPaid);
        }
        else {
            s = m;
        }
        if (s != null && s != undefined) {
            this.pfDetailsVisible = true;
            this.pfSelectedMonths = s;
            this.pfSelectedMonths.filter(function (x) { return x.amount = _this.pfMasterConfig.beneficiaryPFContribution; });
            this.pfSelectedMonths.filter(function (x) { return x.year = (x.Id >= 10 ? _this.fEndYear : _this.fStartYear); });
            for (var i = 0; i < this.pfSelectedMonths.length; i++) {
                this.pfTotalAmount += +this.pfSelectedMonths[i].amount;
            }
            var totalAmount = (this.agentPfCollectAmount + this.pfTotalAmount);
            debugger;
            if (this.user.user.userTpe == UserType.ServiceProvider.toString() || this.user.user.userTpe == UserType.CA.toString()) {
                if (totalAmount < this.pfMasterConfig.agentCollectionLimit) {
                    this.agentPfValidation = false;
                }
                else {
                    this.agentPfValidation = true;
                }
            }
        }
    };
    AgentPfCollectionFormComponent.prototype.SavePFCollectionDetails = function (pfDetails) {
        var _this = this;
        if (this.pfSelectedMonths == undefined || this.pfSelectedMonths.length == 0) {
            this.pfMonthIsValid = false;
        }
        if (pfDetails.bookNo == undefined || pfDetails.bookNo == 0) {
            this.bookNoIsValid = false;
        }
        if (pfDetails.receiptNo == undefined || pfDetails.receiptNo == 0) {
            this.receiptNoIsValid = false;
        }
        if (this.collectionDate == undefined || this.collectionDate == null) {
            this.collectionDateReq = false;
        }
        if (this.benLastCollectionDate == undefined || this.benLastCollectionDate == null) {
            this.lastCollectionDateReq = false;
        }
        if (!this.pfMonthIsValid || !this.bookNoIsValid || !this.receiptNoIsValid || !this.collectionDateReq || !this.lastCollectionDateReq)
            return;
        debugger;
        this.pfCollectionDetails.BenSno = this.beneficiary.benSno;
        this.pfCollectionDetails.AgentNo = this.agentUserId; //this.user.user.deptUserid;
        this.pfCollectionDetails.BookNo = pfDetails.bookNo;
        this.pfCollectionDetails.CollectionAmount = this.pfTotalAmount;
        this.pfCollectionDetails.CollectionDate = this.collectionDate;
        this.pfCollectionDetails.ReceiptNo = pfDetails.receiptNo;
        this.pfCollectionDetails.BenPFAccountId = this.beneficiary.benPFAccountId;
        this.pfCollectionDetails.RLOOfficeId = this.rloOffcieId;
        this.pfCollectionDetails.LastCollectionDate = this.benLastCollectionDate;
        if (!this.agentPfValidation) {
            this.pfCollectionDetails.PFCollectionDtlList = [];
            for (var i = 0; i < this.pfSelectedMonths.length; i++) {
                this.pfCollectionDetails.PFCollectionDtlList.push({ MonthPaid: this.pfSelectedMonths[i].monthId, YearPaid: this.pfSelectedMonths[i].year, Amount: this.pfSelectedMonths[i].amount });
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePFCollectionDetails(this.pfCollectionDetails)
                    .then(function (data) {
                    debugger;
                    if (data) {
                        _this.successMessage = "PF collections successfully submitted";
                        _this.pfTotalAmount = 0;
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
    };
    AgentPfCollectionFormComponent.prototype.okClick = function () {
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
    };
    AgentPfCollectionFormComponent.prototype.cancelClick = function () {
        this.router.navigate(['claim/PfDeposit']);
    };
    AgentPfCollectionFormComponent.prototype.clearValues = function () {
        this.lastPaidDetails = {};
        this.pfTotalAmount = 0;
        this.beneficiary = {};
        this.pfSelectedMonths = [];
        this.pfDetails = {};
        this.pfDetailsVisible = false;
        this.collectionDateReq = true;
    };
    AgentPfCollectionFormComponent.prototype.getAgentList = function () {
        var _this = this;
        this.dataService
            .getAgentList(0)
            .subscribe(function (data) {
            debugger;
            _this.agentList = data;
            if (_this.agentList != null && _this.agentList.length > 0) {
                for (var i = 0; i <= _this.agentList.length; i++) {
                    debugger;
                    if (_this.agentList[i].userid == _this.user.user.deptUserid) {
                        _this.agentUserId = _this.agentList[i].userid;
                        _this.agentUserName = _this.agentList[i].firstname + " " + _this.agentList[i].lastname;
                        _this.agentARNCode = _this.agentList[i].userCode;
                        _this.rloOffcieId = _this.agentList[i].rloOfficeId;
                        _this.isAgentLoggedin = true;
                        _this.getAgentCollectedAmount(_this.user.user.deptUserid);
                        _this.getAgentReceiptBooks(_this.user.user.deptUserid);
                    }
                }
            }
        });
    };
    AgentPfCollectionFormComponent.prototype.agentChange = function (eve) {
        debugger;
        this.agentUserId = eve;
        this.agentUserName = this.agentList.find(function (x) { return x.userid == eve; }).firstname + " " + this.agentList.find(function (x) { return x.userid == eve; }).lastname;
        this.rloOffcieId = this.agentList.find(function (x) { return x.userid == eve; }).rloOfficeId;
        this.getAgentCollectedAmount(eve);
        this.getAgentReceiptBooks(eve);
        this.checkAgentDepositsPayInSlipsUploaded(eve);
    };
    AgentPfCollectionFormComponent.prototype.getAgentReceiptBooks = function (userId) {
        var _this = this;
        this.dataService
            .getAgentBooks(userId)
            .subscribe(function (data) {
            _this.agentReceiptBooks = data;
        });
    };
    AgentPfCollectionFormComponent.prototype.bookNoChange = function (value) {
        var _this = this;
        this.receiptGenerated = true;
        this.dataService
            .getNextReceiptNo(value)
            .subscribe(function (data) {
            debugger;
            if (data == -1) {
                _this.pfDetails.receiptNo = 0;
                _this.receiptGenerated = false;
            }
            else
                _this.pfDetails.receiptNo = data;
        });
    };
    AgentPfCollectionFormComponent.prototype.checkAgentDepositsPayInSlipsUploaded = function (userId) {
        var _this = this;
        this.dataService
            .isAgentAllDepositsPayInSlipsUploaded(userId)
            .subscribe(function (data) {
            debugger;
            _this.isAllDepositsPayInSlipsUploaded = data;
        });
    };
    AgentPfCollectionFormComponent.prototype.checkReceiptNoForAgentBook = function (eve, bookId) {
        var _this = this;
        this.dataService
            .checkReceiptNoForAgentBook(bookId, eve)
            .subscribe(function (data) {
            debugger;
            _this.receiptValue = data;
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfCollectionFormComponent.prototype, "successModal", void 0);
    AgentPfCollectionFormComponent = __decorate([
        Component({
            selector: 'app-agent-pf-collection-form',
            templateUrl: './agent-pf-collection-form.component.html',
            styleUrls: ['./agent-pf-collection-form.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], AgentPfCollectionFormComponent);
    return AgentPfCollectionFormComponent;
}());
export { AgentPfCollectionFormComponent };
//# sourceMappingURL=agent-pf-collection-form.component.js.map