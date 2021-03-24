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
import { UserService } from '../../UserService';
import { TresurerDataService } from '../services/tresurer-data.service';
import { ClaimStatus, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ExcelService } from '../../services/excel.service';
import { ModalDirective } from 'ngx-bootstrap';
var PaymentReleaseComponent = /** @class */ (function () {
    function PaymentReleaseComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
        this.bankDetails = [];
        this.claimData = {};
        this.normalizedObject = {};
        this.date = new Date();
        this.selectedAll = true;
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        this.processedClaimsView = false;
        this.paymentIdValid = true;
        this.selectedClaimList = [];
        this.bankIsValid = true;
        this.ifmsVisible = true;
    }
    PaymentReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.processId = params["processId"];
            _this.alcId = params["alcId"];
            //this.mode = params["mode"];
            //if (this.mode != "pending") {
            //    this.isVisable = false;
            //}
        });
        //this.getPaymentProcessIds(this.userService.user.deptUserid, this.userService.user.userTpe);
        //this.getRLOBankDetails(3075, 6);
        //this.getPaymentProcessIds(14844, 13);
        this.selectPaymentProcessId(this.processId);
    };
    //Not used now
    //Fill the dropdown values 
    //getPaymentProcessIds(id:any,type:any) {
    //    this.dataService
    //        .getTreasurerPaymentProcesses(id, type)
    //        .subscribe((data: any) => {
    //            this.paymentProcessIds = data;
    //        });
    //}
    //Drop down change event
    PaymentReleaseComponent.prototype.selectPaymentProcessId = function (processId) {
        this.showErrorMessage = false;
        this.sumofAmount = 0;
        if (processId > 0) {
            this.paymentIdValid = true;
            this.getPaymentProcessedDetails(processId);
            //Rlo office Info
            this.GetRLOOfficeUserInformation(processId);
            this.processedClaimsView = true;
        }
        else
            this.paymentIdValid = false;
    };
    PaymentReleaseComponent.prototype.getPaymentProcessedDetails = function (id) {
        var _this = this;
        this.claimDetails = [];
        //this.selectedAll = false;
        this.dataService
            .getPaymentProcessedDetails(id)
            .subscribe(function (data) {
            _this.claimDetails = data;
            //if (this.claimDetails != null && this.claimDetails.length > 0) {
            _this.selectAll();
            // }
        });
    };
    PaymentReleaseComponent.prototype.getRLOBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getRLOBankDetails(id)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    PaymentReleaseComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimDetails.length; i++) {
            this.claimDetails[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimDetails[i].approvedAmount;
            }
        }
    };
    PaymentReleaseComponent.prototype.GetRLOOfficeUserInformation = function (processId) {
        var _this = this;
        this.dataService
            .getRLOUserInfoByProcessingId(this.processId)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            _this.getRLOBankDetails(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    PaymentReleaseComponent.prototype.paymentRelease = function () {
        var _this = this;
        debugger;
        if (this.rloBankId == undefined || this.rloBankId <= 0) {
            this.bankIsValid = false;
            return;
        }
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = ClaimStatus.PaymentReleasebyTreasurer;
            this.claimData.paymentReleasedClaims = this.selectedClaimList; //this.claimsList;
            this.claimData.rloBankAccountId = this.rloBankId;
            this.claimData.paymentProcessingId = this.processId;
            this.claimData.paymentReleaseDate = null;
            this.claimData.releasedAmount = this.sumofAmount;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePaymentReleaseClaims(this.claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Payment released succesfully.";
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                    }
                    _this.successModal.show();
                });
            }
        }
        else {
            this.showErrorMessage = true;
        }
    };
    PaymentReleaseComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.sumofAmount = 0;
        // this.getPaymentProcessedDetails(this.processId);
        this.cancelClick();
    };
    PaymentReleaseComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimDetails.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    PaymentReleaseComponent.prototype.selectedClaims = function () {
        var res = this.claimDetails.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: ClaimConstants[res[i].claimType] });
        }
    };
    PaymentReleaseComponent.prototype.downloadNeftDocument = function () {
        var _this = this;
        this.ifmsVisible = false;
        this.NEFTData = [];
        this.showErrorMessage = false;
        this.NEFTFileName = "NEFT Details";
        this.selectedClaims();
        this.dataService
            .getPaymentNEFTDetails(this.selectedClaimList)
            .then(function (data) {
            debugger;
            _this.NEFTData = data;
            var downloadNEFTDetails = _this.NEFTData;
            if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
                _this.excelService.exportAsExcelFile(downloadNEFTDetails, _this.NEFTFileName);
            }
        });
    };
    PaymentReleaseComponent.prototype.cancelClick = function () {
        this.router.navigate(['tresurer/paymentprocessedlist'], { skipLocationChange: true });
    };
    PaymentReleaseComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], PaymentReleaseComponent.prototype, "successModal", void 0);
    PaymentReleaseComponent = __decorate([
        Component({
            selector: 'app-payment-release',
            templateUrl: './payment-release.component.html',
            styleUrls: ['./payment-release.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, TresurerDataService, UserService, ExcelService])
    ], PaymentReleaseComponent);
    return PaymentReleaseComponent;
}());
export { PaymentReleaseComponent };
//# sourceMappingURL=payment-release.component.js.map