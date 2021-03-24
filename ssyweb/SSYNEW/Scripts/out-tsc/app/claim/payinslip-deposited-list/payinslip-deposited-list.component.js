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
import { DomSanitizer } from '@angular/platform-browser';
var PayInSlipDepositedListComponent = /** @class */ (function () {
    function PayInSlipDepositedListComponent(router, route, dataService, user, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.sanitizer = sanitizer;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.pFDepositDetails = {};
        this.payInSlipUploaded = true;
        this.dateOfDepostValid = true;
        this.payInSlipNumberValid = true;
        this.payInSlipCertificate = [];
        this.isVisible = false;
        this.isVisible1 = false;
        this.pfCollectionDetails = [];
        this.formIVContent = {};
        this.FormIVDetail = {};
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.toDayDate = new Date();
    }
    PayInSlipDepositedListComponent.prototype.ngOnInit = function () {
        debugger;
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, Number(this.user.user.userTpe), "0", "0", this.page, this.pageSize);
    };
    PayInSlipDepositedListComponent.prototype.getPFDepositedItemsByAgent = function (userId, userType, depositFromDate, depositToDate, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPFDepositStatusDetailsByUser(userId, userType, depositFromDate, depositToDate, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pFDepositDetails = data;
            _this.totalRows = _this.pFDepositDetails.rowCount;
            //this.payInSlipCertificate[0] = this.pFDepositDetails.results[0].payInSlip;
        });
    };
    PayInSlipDepositedListComponent.prototype.changepage = function (page) {
        if (this.depositFromDate != null && this.depositFromDate != undefined)
            this.strDepositFromDate = this.depositFromDate.toISOString();
        else
            this.strDepositFromDate = "0";
        if (this.depositToDate != null && this.depositToDate != undefined)
            this.strDepositToDate = this.depositToDate.toISOString();
        else
            this.strDepositToDate = "0";
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.strDepositFromDate, this.strDepositToDate, page, this.pageSize);
    };
    PayInSlipDepositedListComponent.prototype.viewPayInSlipOld = function (payInSlip) {
        debugger;
        this.isVisible = true;
        //if (payInSlip.fileName.split('.')[payInSlip.fileName.split('.').length - 1] == 'pdf') {
        //    this.payInSlipCertificate.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + payInSlip.fileContent);
        //}
        if (payInSlip != null && payInSlip.length > 0) {
            for (var j = 0; j < payInSlip.length; j++) {
                //let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                if (payInSlip[j].fileName.split('.')[payInSlip[j].fileName.split('.').length - 1] == 'pdf') {
                    payInSlip[j].attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + payInSlip[j].fileContent);
                }
            }
            this.payInSlipCertificate = payInSlip;
        }
        this.attachModal.show();
    };
    PayInSlipDepositedListComponent.prototype.viewPayInSlip = function (pfDepositId, transactionType) {
        var _this = this;
        debugger;
        this.isVisible = true;
        this.dataService.getPFDepositAttachments(pfDepositId)
            .subscribe(function (data) {
            debugger;
            _this.payInSlipCertificate = data;
            if (_this.payInSlipCertificate != null && _this.payInSlipCertificate.length > 0) {
                for (var j = 0; j < _this.payInSlipCertificate.length; j++) {
                    if (_this.payInSlipCertificate[j].fileName.split('.')[_this.payInSlipCertificate[j].fileName.split('.').length - 1] == 'pdf') {
                        _this.payInSlipCertificate[j].attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + _this.payInSlipCertificate[j].fileContent);
                    }
                }
            }
            _this.attachModal.show();
        });
    };
    PayInSlipDepositedListComponent.prototype.viewCollections = function (pfDepositId, transactionType) {
        var _this = this;
        this.isVisible1 = true;
        if (transactionType.toLowerCase() == 'online') {
            this.dataService
                .getCollections(pfDepositId)
                .subscribe(function (data) {
                debugger;
                _this.pfCollectionDetails = data;
                _this.collectionsModal.show();
            });
        }
        else {
            this.dataService
                .getLegacyCollections(pfDepositId)
                .subscribe(function (data) {
                debugger;
                _this.pfCollectionDetails = data;
                _this.collectionsModal.show();
            });
        }
    };
    PayInSlipDepositedListComponent.prototype.GetResults = function () {
        if (this.depositFromDate != null && this.depositFromDate != undefined)
            this.strDepositFromDate = this.depositFromDate.toISOString();
        else
            this.strDepositFromDate = "0";
        if (this.depositToDate != null && this.depositToDate != undefined)
            this.strDepositToDate = this.depositToDate.toISOString();
        else
            this.strDepositToDate = "0";
        if (this.strDepositFromDate == "0" || this.strDepositToDate == "0")
            alert("please enter the from and to dates");
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, Number(this.user.user.userTpe), this.strDepositFromDate, this.strDepositToDate, pagination.pageNo, pagination.pageSize);
    };
    PayInSlipDepositedListComponent.prototype.viewFormIV = function (pfLegacyMasterDetails) {
        debugger;
        this.FormIVDetail.lwfccode = this.userName;
        this.FormIVDetail.bankdepositdate = pfLegacyMasterDetails.depositDate;
        this.FormIVDetail.scrollno = 0;
        this.FormIVDetail.depositId = pfLegacyMasterDetails.pfDepositId;
        this.dataService
            .genaratePdfLegacyFormIV(this.FormIVDetail)
            .then(function (data) {
            debugger;
            var blob = new Blob([data.body], { type: 'application/pdf' });
            var blobUrl = URL.createObjectURL(blob);
            //window.location.href = blobUrl;
            window.open(blobUrl, "_blank");
            //this.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
            //this.attachModalFormIV.show();
        });
    };
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], PayInSlipDepositedListComponent.prototype, "attachModal", void 0);
    __decorate([
        ViewChild('collectionsModal'),
        __metadata("design:type", ModalDirective)
    ], PayInSlipDepositedListComponent.prototype, "collectionsModal", void 0);
    __decorate([
        ViewChild('attachModalFormIV'),
        __metadata("design:type", ModalDirective)
    ], PayInSlipDepositedListComponent.prototype, "attachModalFormIV", void 0);
    PayInSlipDepositedListComponent = __decorate([
        Component({
            selector: 'app-payinslip-deposited-list',
            templateUrl: './payinslip-deposited-list.component.html',
            styleUrls: ['./payinslip-deposited-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService, DomSanitizer])
    ], PayInSlipDepositedListComponent);
    return PayInSlipDepositedListComponent;
}());
export { PayInSlipDepositedListComponent };
//# sourceMappingURL=payinslip-deposited-list.component.js.map