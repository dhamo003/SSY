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
import { pagination, PFDepositeStatus } from '../pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import * as FileSaver from 'file-saver';
import { environment } from 'src/environments/environment';
var AgentPfDepositComponent = /** @class */ (function () {
    function AgentPfDepositComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        //PFCollectionDetails: PFCollectionDetails = {} as PFCollectionDetails;
        this.PFDepositDetails = {};
        //PFDepositDetailsObj: PFDepositDtlDetails = {} as PFDepositDtlDetails;
        this.depositDateReq = true;
        this.bankDetails = [];
        this.agentDetails = {};
        this.sumofAmount = 0;
        this.selectedCollectionsList = [];
        this.showErrorMessage = false;
        this.depositBankReq = true;
        this.workerTypeReq = true;
        this.generatePayInSlip = {};
        this.isGrips = false;
        this.isWorkerTypeSelected = false;
        this.gripsDeptCode = '';
        this.gripsDeptCodeError = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.toDayDate = new Date();
    }
    AgentPfDepositComponent.prototype.ngOnInit = function () {
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;
        //this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending,0, this.page, this.pageSize);
        this.getAgentDetailsForDeposit(this.user.user.deptUserid);
        this.getWorkerTypeDetails();
    };
    AgentPfDepositComponent.prototype.getAgentDetailsForDeposit = function (userId) {
        var _this = this;
        this.dataService
            .getAgentDetailsForDeposit(userId)
            .subscribe(function (data) {
            _this.agentDetails = data;
            if (_this.agentDetails != null) {
                if (_this.agentDetails.agentRLOInformation != null)
                    _this.rloOfficeId = _this.agentDetails.agentRLOInformation.rloOfficeId;
                //this.getSubDivRLOBankDetails(this.agentDetails.subDivId)
            }
        });
    };
    AgentPfDepositComponent.prototype.getPFPendingDepositItemsByAgent = function (userId, status, workerTypeId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPFDepositDetailsByAgentId(userId, 0, workerTypeId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.PFCollectionDetails1 = data;
            //this.PFCollectionDetails = data;
            //this.totalRows = this.PFCollectionDetails.rowCount;
            if (_this.PFCollectionDetails1 != null && _this.PFCollectionDetails1.length > 0) {
                _this.selectedAll = true;
                _this.selectAll();
            }
            else {
                _this.selectedAll = false;
            }
        });
    };
    AgentPfDepositComponent.prototype.changepage = function (page) {
        //this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending, page, this.pageSize);
    };
    AgentPfDepositComponent.prototype.submitPFDepositDetails = function (DepositDetails) {
        var _this = this;
        debugger;
        if (this.validatePFDeposit()) {
            this.selectedCollections();
            this.showErrorMessage = false;
            if (this.selectedCollectionsList != null && this.selectedCollectionsList.length > 0) {
                this.PFDepositDetails.agentNo = this.user.user.deptUserid;
                this.PFDepositDetails.rloOfficeId = this.rloOfficeId;
                //this.PFDepositDetails.bankId = this.bankId;
                this.PFDepositDetails.lwcBankCode = this.bankId;
                this.PFDepositDetails.payinSlipNo = 0;
                this.PFDepositDetails.collectionIds = this.selectedCollectionsList;
                this.PFDepositDetails.workerTypeId = this.workerTypeId;
                this.PFDepositDetails.depositDate = this.depositDate;
                if (this.isGrips) {
                    if (confirm("Do you want to proceed with GRIPS")) {
                        this.PFDepositDetails.mode = "grips";
                        this.PFDepositDetails.lwcBankCode = 0;
                        this.dataService
                            .submitPFDepositDetails(this.PFDepositDetails)
                            .then(function (data) {
                            debugger;
                            if (data) {
                                _this.encData = data;
                                var input = document.getElementById('ENCDATA');
                                input.value = _this.encData;
                                var input1 = document.getElementById('DEPT_CD');
                                input1.value = _this.gripsDeptCode;
                                var myForm = document.getElementById('form1');
                                myForm.action = environment.gripsurl;
                                myForm.submit();
                                //this.successMessage = "PF amount sucessfully deposited";
                            }
                            else {
                                _this.successMessage = "Invalid transaction";
                                _this.successModal.show();
                            }
                            //this.successModal.show();
                        });
                    }
                }
                else {
                    if (confirm("Are you sure to proceed")) {
                        this.PFDepositDetails.mode = "default";
                        this.dataService
                            .submitPFDepositDetails(this.PFDepositDetails)
                            .then(function (data) {
                            debugger;
                            if (data == "true") {
                                _this.successMessage = "PF amount sucessfully deposited";
                            }
                            else {
                                _this.successMessage = "Invalid transaction";
                            }
                            _this.successModal.show();
                        });
                    }
                }
            }
            else {
                this.showErrorMessage = true;
            }
        }
    };
    AgentPfDepositComponent.prototype.okClick = function () {
        this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending, 0, this.page, this.pageSize);
        this.depositDate = null;
        this.sumofAmount = 0;
        this.workerTypeId = 0;
        this.bankId = 0;
        this.successModal.hide();
    };
    AgentPfDepositComponent.prototype.getSubDivRLOBankDetails = function (id, workerTypeId) {
        var _this = this;
        this.dataService
            .getSubDivRLOBankDetails(id, workerTypeId)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    AgentPfDepositComponent.prototype.getLWCBankDetails = function (userId, workerTypeId) {
        var _this = this;
        this.dataService
            .getLWCBankDetails(userId, workerTypeId)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    AgentPfDepositComponent.prototype.selectAll = function () {
        debugger;
        this.sumofAmount = 0;
        for (var i = 0; i < this.PFCollectionDetails1.length; i++) {
            this.PFCollectionDetails1[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.PFCollectionDetails1[i].collectionAmount;
            }
        }
    };
    AgentPfDepositComponent.prototype.checkIfAllSelected = function (itemData) {
        this.selectedAll = this.PFCollectionDetails1.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.collectionAmount;
        }
        else {
            this.sumofAmount -= itemData.collectionAmount;
        }
    };
    AgentPfDepositComponent.prototype.selectedCollections = function () {
        var res = this.PFCollectionDetails1.filter(function (x) { return x.selected == true; });
        this.selectedCollectionsList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedCollectionsList.push(res[i].pfCollectionId);
        }
    };
    AgentPfDepositComponent.prototype.getWorkerTypeDetails = function () {
        var _this = this;
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe(function (data) {
            _this.WorkerTypeList = data;
        });
    };
    AgentPfDepositComponent.prototype.workerTypeChange = function (typeId) {
        debugger;
        this.gripsDeptCodeError = true;
        this.selectedCollectionsList = [];
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        //this.getSubDivRLOBankDetails(this.agentDetails.subDivId, typeId);
        this.getLWCBankDetails(this.user.user.deptUserid, typeId);
        this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending, typeId, this.page, this.pageSize);
        this.isWorkerTypeSelected = true;
        this.gripsDeptCode = this.WorkerTypeList.find(function (a) { return a.workerTypeId == typeId; }).gripsDeptCode;
        if (this.isGrips && (this.gripsDeptCode == '' || this.gripsDeptCode == undefined))
            this.gripsDeptCodeError = false;
    };
    AgentPfDepositComponent.prototype.validatePFDeposit = function () {
        debugger;
        var isValid = true;
        this.workerTypeReq = this.depositBankReq = this.depositDateReq = true;
        //this.showErrorMessage = false;
        if (this.depositDate == undefined || this.depositDate == null) {
            this.depositDateReq = isValid = false;
        }
        if (this.workerTypeId == undefined || this.workerTypeId == null) {
            this.workerTypeReq = isValid = false;
        }
        if (!this.isGrips) {
            if (this.bankId == undefined || this.bankId == null) {
                this.depositBankReq = isValid = false;
            }
        }
        else {
            if (this.gripsDeptCode == '' || this.gripsDeptCode == undefined) {
                this.gripsDeptCodeError = isValid = false;
            }
        }
        return isValid;
    };
    AgentPfDepositComponent.prototype.GenaratePdf = function () {
        if (this.validatePFDeposit())
            this.pdfModal.show();
    };
    AgentPfDepositComponent.prototype.downLoadPdf = function (type) {
        var _this = this;
        debugger;
        this.generatePayInSlip.depositDate = this.depositDate;
        this.generatePayInSlip.depositBankId = this.bankId;
        this.generatePayInSlip.agentName = this.userName;
        this.generatePayInSlip.agentCode = this.userCode;
        this.generatePayInSlip.totalAmount = this.sumofAmount;
        this.generatePayInSlip.deptUserId = this.user.user.deptUserid;
        this.dataService
            .genaratePdfPayInSlip(this.generatePayInSlip)
            .then(function (data) {
            debugger;
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
                FileSaver.saveAs(blob, "PayIn-Slip.pdf");
            }
            _this.pdfModal.hide();
        });
    };
    AgentPfDepositComponent.prototype.radioChange = function (id) {
        this.gripsDeptCodeError = true;
        this.isGrips = (id == 1 ? false : true);
        if (this.isGrips && (this.gripsDeptCode == '' || this.gripsDeptCode == undefined))
            this.gripsDeptCodeError = false;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositComponent.prototype, "pdfModal", void 0);
    AgentPfDepositComponent = __decorate([
        Component({
            selector: 'app-agent-pf-deposit',
            templateUrl: './agent-pf-deposit.component.html',
            styleUrls: ['./agent-pf-deposit.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], AgentPfDepositComponent);
    return AgentPfDepositComponent;
}());
export { AgentPfDepositComponent };
//# sourceMappingURL=agent-pf-deposit.component.js.map