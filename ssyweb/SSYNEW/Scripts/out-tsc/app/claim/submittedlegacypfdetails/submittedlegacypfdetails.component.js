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
import { pagination } from '../pipes/constnts.model';
import { AttachmentType } from '../pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
var SubmittedlegacypfdetailsComponent = /** @class */ (function () {
    function SubmittedlegacypfdetailsComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.pfCollectionDetails = [];
        this.payInSlipUploaded = true;
        this.dateOfDepostValid = true;
        this.payInSlipNumberValid = true;
        this.payInSlipCertificate = {};
        this.pfDepositDetails = [];
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.toDayDate = new Date();
    }
    SubmittedlegacypfdetailsComponent.prototype.ngOnInit = function () {
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;
        this.getLegacyPFDetails(this.user.user.deptUserid, this.page, this.pageSize);
    };
    SubmittedlegacypfdetailsComponent.prototype.getLegacyPFDetails = function (userId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getSubmittedLegacyPFDetails(userId, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pfDepositDetails = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    SubmittedlegacypfdetailsComponent.prototype.changepage = function (page) {
        // this.getPFDeposits(this.user.user.deptUserid, Number(this.user.user.userTpe), PFDepositeStatus.deposited, this.page, this.pageSize);
        this.getLegacyPFDetails(this.user.user.deptUserid, this.page, this.pageSize);
    };
    SubmittedlegacypfdetailsComponent.prototype.onFileChanged = function (inputValue) {
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
                model.pfDepositId = _this.depositId;
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
    SubmittedlegacypfdetailsComponent.prototype.upload = function (details) {
        this.depositId = details.pfDepositId;
        this.payInSlipModal.show();
    };
    SubmittedlegacypfdetailsComponent.prototype.savePaySlip = function () {
        var _this = this;
        if (this.validatePayInSlip()) {
            this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.payInSlipCertificate)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "PayIn Slip Uploaded successfully";
                    }
                    else {
                        _this.successMessage = "PayIn Slip Not Uploaded";
                    }
                    _this.payInSlipModal.hide();
                });
            }
        }
    };
    SubmittedlegacypfdetailsComponent.prototype.validatePayInSlip = function () {
        var isValid = true;
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) {
            isValid = this.dateOfDepostValid = false;
        }
        if (this.scrollNumber == null && this.scrollNumber == undefined) {
            isValid = this.payInSlipNumberValid = false;
        }
        if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) {
            isValid = this.payInSlipUploaded = false;
        }
        return isValid;
    };
    SubmittedlegacypfdetailsComponent.prototype.viewCollections = function (pfLegacyMasterId) {
        this.router.navigate(['claim/bulkpfdepositcollectionlist', { pfLegacyMasterId: pfLegacyMasterId }], { skipLocationChange: true });
    };
    __decorate([
        ViewChild('payInSlipModal'),
        __metadata("design:type", ModalDirective)
    ], SubmittedlegacypfdetailsComponent.prototype, "payInSlipModal", void 0);
    __decorate([
        ViewChild('collectionsModal'),
        __metadata("design:type", ModalDirective)
    ], SubmittedlegacypfdetailsComponent.prototype, "collectionsModal", void 0);
    SubmittedlegacypfdetailsComponent = __decorate([
        Component({
            selector: 'app-submittedlegacypfdetails',
            templateUrl: './submittedlegacypfdetails.component.html',
            styleUrls: ['./submittedlegacypfdetails.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], SubmittedlegacypfdetailsComponent);
    return SubmittedlegacypfdetailsComponent;
}());
export { SubmittedlegacypfdetailsComponent };
//# sourceMappingURL=submittedlegacypfdetails.component.js.map