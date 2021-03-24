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
import { AttachmentType } from '../pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import * as FileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
var AgentPfDepositedListComponent = /** @class */ (function () {
    function AgentPfDepositedListComponent(router, route, dataService, user, httpClient, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.pFDepositDetails = {};
        this.payInSlipUploaded = true;
        this.dateOfDepostValid = true;
        this.data = {};
        this.payInSlipCertificate = {};
        //mainUpload: AttachmentModel;
        this.formIVCertificate = {};
        this.formIVUploaded = true;
        this.FormIVDetail = {};
        this.isVisible = false;
        this.attachments = [];
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.toDayDate = new Date();
    }
    AgentPfDepositedListComponent.prototype.ngOnInit = function () {
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.page, this.pageSize);
    };
    AgentPfDepositedListComponent.prototype.getPFDepositedItemsByAgent = function (userId, status, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPFDepositStatusDetailsByAgentId(userId, status, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pFDepositDetails = data;
            _this.totalRows = _this.pFDepositDetails.rowCount;
        });
    };
    AgentPfDepositedListComponent.prototype.changepage = function (page) {
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, page, this.pageSize);
    };
    AgentPfDepositedListComponent.prototype.onFileChanged = function (inputValue, attachmentType) {
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
                model.attachmentType = attachmentType == "payinslip" ? AttachmentType.PayinSlip : AttachmentType.FormIV;
                model.pfDepositId = _this.depositId;
                model.createdBy = _this.user.user.deptUserid;
                //this.payInSlip = model;
                if (attachmentType == "payinslip")
                    _this.payInSlipCertificate = model;
                else
                    _this.formIVCertificate = model;
            };
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    };
    AgentPfDepositedListComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.page, this.pageSize);
    };
    AgentPfDepositedListComponent.prototype.upload = function (details) {
        this.depositId = details.pfDepositId;
        this.clearData();
        this.payInSlipModal.show();
    };
    AgentPfDepositedListComponent.prototype.uploadGripsFormIV = function (details) {
        this.depositId = details.pfDepositId;
        this.bankDepositDate = details.depositDate;
        this.isVisible = false;
        //this.clearData();
        this.payInSlipCertificate = {};
        this.formIVCertificate = {};
        this.gripsFormIVModal.show();
    };
    AgentPfDepositedListComponent.prototype.savePaySlip = function () {
        var _this = this;
        debugger;
        if (this.validatePayInSlip()) {
            this.data.bankDepositDate = this.bankDepositDate;
            this.data.scrollNumber = (this.scrollNumber == undefined || this.scrollNumber == null) ? 0 : this.scrollNumber;
            this.data.payInSlipAttachment = this.payInSlipCertificate;
            this.data.formIVAttachment = this.formIVCertificate;
            //this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            //this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.data)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "PayIn Slip Uploaded successfully";
                    }
                    else {
                        _this.successMessage = "PayIn Slip Not Uploaded";
                    }
                    _this.payInSlipModal.hide();
                    _this.successModal.show();
                });
            }
        }
    };
    AgentPfDepositedListComponent.prototype.saveGripsFormIV = function () {
        var _this = this;
        debugger;
        if (this.validateForFormIV()) {
            this.data.bankDepositDate = this.bankDepositDate;
            this.data.scrollNumber = 0;
            this.data.payInSlipAttachment = null;
            this.data.formIVAttachment = this.formIVCertificate;
            //this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            //this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.data)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Form IV Uploaded successfully";
                    }
                    else {
                        _this.successMessage = "Form IV Not Uploaded";
                    }
                    _this.gripsFormIVModal.hide();
                    _this.successModal.show();
                });
            }
        }
    };
    AgentPfDepositedListComponent.prototype.validatePayInSlip = function () {
        debugger;
        var isValid = this.dateOfDepostValid = this.payInSlipUploaded = this.formIVUploaded = true; //this.payInSlipNumberValid =
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) {
            isValid = this.dateOfDepostValid = false;
        }
        // if (this.scrollNumber == null && this.scrollNumber == undefined) { isValid = this.payInSlipNumberValid = false; }
        if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) {
            isValid = this.payInSlipUploaded = false;
        }
        if (this.formIVCertificate.fileName == null && this.formIVCertificate.fileName == undefined) {
            isValid = this.formIVUploaded = false;
        }
        return isValid;
    };
    AgentPfDepositedListComponent.prototype.validateForFormIV = function () {
        debugger;
        var isValid = true; //this.payInSlipNumberValid = 
        if (this.formIVCertificate.fileName == null && this.formIVCertificate.fileName == undefined) {
            isValid = this.formIVUploaded = false;
        }
        return isValid;
    };
    AgentPfDepositedListComponent.prototype.clearData = function () {
        this.bankDepositDate = null;
        this.scrollNumber = null;
        this.isVisible = false;
        this.payInSlipCertificate = {};
        this.formIVCertificate = {};
    };
    AgentPfDepositedListComponent.prototype.GenaratePdf = function () {
        this.dateOfDepostValid = true;
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) {
            this.dateOfDepostValid = false;
        }
        else
            this.pdfModal.show();
    };
    AgentPfDepositedListComponent.prototype.GenarateGripsFormIV = function () {
        this.pdfModal.show();
    };
    AgentPfDepositedListComponent.prototype.downLoadPdf = function (type) {
        var _this = this;
        debugger;
        this.FormIVDetail.lwfccode = this.userName;
        this.FormIVDetail.bankdepositdate = this.bankDepositDate;
        this.FormIVDetail.scrollno = (this.scrollNumber == null || this.scrollNumber == undefined ? 0 : this.scrollNumber);
        this.FormIVDetail.depositId = this.depositId;
        this.dataService
            .genaratePdfFormIV(this.FormIVDetail)
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
                FileSaver.saveAs(blob, "Form-IV.pdf");
            }
            _this.pdfModal.hide();
            _this.isVisible = true;
        });
    };
    AgentPfDepositedListComponent.prototype.onRePayClick = function (item) {
        var _this = this;
        debugger;
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .repayToGrips(item.pfDepositId)
                .subscribe(function (data) {
                debugger;
                if (data) {
                    _this.encData = data;
                    var input = document.getElementById('ENCDATA');
                    input.value = _this.encData;
                    var input1 = document.getElementById('DEPT_CD');
                    input1.value = item.gripsDeptCode;
                    var myForm = document.getElementById('form2');
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
        //this.repayModal.show();
    };
    AgentPfDepositedListComponent.prototype.postData = function () {
        var myForm = document.getElementById('form1');
        myForm.submit();
    };
    AgentPfDepositedListComponent.prototype.onVerifyClick = function (item) {
        var _this = this;
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .postDoubleVerificationGrips(item.pfDepositId)
                .subscribe(function (data) {
                debugger;
                if (data) {
                    _this.encData = data;
                    var input = document.getElementById('xmlString');
                    input.value = _this.encData;
                    var input1 = document.getElementById('Dept_Cd');
                    input1.value = item.gripsDeptCode;
                    var myForm = document.getElementById('form1');
                    myForm.action = environment.gripsverifyurl;
                    myForm.submit();
                }
                else {
                    _this.successMessage = "Invalid transaction";
                    _this.successModal.show();
                }
            });
        }
    };
    AgentPfDepositedListComponent.prototype.onPDFViewClick = function (item) {
        debugger;
        this.pfDepositId = item.pfDepositId;
        this.pfDepositModal.show();
    };
    AgentPfDepositedListComponent.prototype.downLoadPFDetailsPdf = function (type) {
        var _this = this;
        debugger;
        this.dataService
            .downloadPFDepositDetails(this.pfDepositId)
            .then(function (data) {
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
                FileSaver.saveAs(blob, "PFDepositDetails.pdf");
            }
            _this.pfDepositModal.hide();
        });
    };
    AgentPfDepositedListComponent.prototype.getAttachments = function (pfdepositId) {
        var _this = this;
        debugger;
        //this.isVisible = true;
        this.dataService.getPFDepositAttachments(pfdepositId)
            .subscribe(function (data) {
            if (data) {
                _this.attachments = data;
                if (_this.attachments != null && _this.attachments.length > 0) {
                    for (var j = 0; j < _this.attachments.length; j++) {
                        //let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                        if (_this.attachments[j].fileName.split('.')[_this.attachments[j].fileName.split('.').length - 1] == 'pdf') {
                            _this.attachments[j].attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + _this.attachments[j].fileContent);
                        }
                    }
                    //this.attachments = payInSlip;
                }
                _this.attachModal.show();
            }
        });
    };
    __decorate([
        ViewChild('payInSlipModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "payInSlipModal", void 0);
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('pdfModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "pdfModal", void 0);
    __decorate([
        ViewChild('pfDepositModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "pfDepositModal", void 0);
    __decorate([
        ViewChild('gripsFormIVModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "gripsFormIVModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], AgentPfDepositedListComponent.prototype, "attachModal", void 0);
    AgentPfDepositedListComponent = __decorate([
        Component({
            selector: 'app-agent-pf-deposited-list',
            templateUrl: './agent-pf-deposited-list.component.html',
            styleUrls: ['./agent-pf-deposited-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService, HttpClient, DomSanitizer])
    ], AgentPfDepositedListComponent);
    return AgentPfDepositedListComponent;
}());
export { AgentPfDepositedListComponent };
//# sourceMappingURL=agent-pf-deposited-list.component.js.map