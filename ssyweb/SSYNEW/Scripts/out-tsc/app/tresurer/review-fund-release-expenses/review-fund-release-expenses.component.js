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
import { TresurerDataService } from '../services/tresurer-data.service';
import { UserService } from '../../UserService';
import { WorkflowTrans, UserType, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ExcelService } from '../../services/excel.service';
var ReviewFundReleaseExpensesComponent = /** @class */ (function () {
    function ReviewFundReleaseExpensesComponent(router, route, dataService, userService, excelService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.excelService = excelService;
        this.date = new Date();
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.fundReviewModel = {};
        this.bankDetails = [];
        this.bankIsValid = true;
        this.NEFTDetails = [];
        this.NEFTData = {};
        this.enableNEFT = false;
    }
    ReviewFundReleaseExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.fundReleaseOrderHdrId = params["fundReleaseOrderHdrId"];
            _this.alcId = params["alcId"];
            //this.mode = params["mode"];
            //if (this.mode != "pending") {
            //    this.isVisable = false;
            //}
        });
        this.getFundRequestedExpensesById(this.fundReleaseOrderHdrId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
        // this.getRLOBankDetails(this.alcId, UserType.AsstLabourCom);
    };
    ReviewFundReleaseExpensesComponent.prototype.getFundRequestedExpensesById = function (fundReleaseOrderHdrId) {
        var _this = this;
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundReleaseOrderHdrId)
            .subscribe(function (data) {
            _this.fundrequestDetails = data;
            _this.expensesData = data.expensesList;
            _this.expensesData.forEach(function (x) { return _this.sumofamount += x.fundsRequired; });
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            if (_this.officeDetails.approvedClaimsAmount > _this.RloOfficeAddress.balanceOfTheAmount)
                _this.AmountShortfall = (_this.officeDetails.approvedClaimsAmount - _this.RloOfficeAddress.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
            _this.getRLOBankDetails(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.updateFundRequest = function (id) {
        var _this = this;
        if (this.rloBankId == undefined || this.rloBankId <= 0) {
            this.bankIsValid = false;
            return;
        }
        this.fundReviewModel.rloBankAccountId = this.rloBankId;
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.fundReleaseOrderHdrId = this.fundrequestDetails.fundReleaseOrderHdrId;
        this.fundReviewModel.fundRequestType = 2; // Expenses
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then(function (data) {
                _this.successMessage = "Fund request updated successfully";
                _this.successModal.show();
            });
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.cancelclick = function () {
        //if (this.mode == "pending") {
        this.router.navigate(['tresurer/fundreleaselist']);
        //}
    };
    ReviewFundReleaseExpensesComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: false });
    };
    ReviewFundReleaseExpensesComponent.prototype.setNEFTDetails = function () {
        var _this = this;
        this.NEFTDetails = [];
        var rloBankAccountId = this.fundrequestDetails.rloBankAccountId;
        var rloBankId = this.rloBankId;
        var bankId = ((rloBankAccountId != undefined && rloBankAccountId != null) ? rloBankAccountId : ((rloBankId != undefined && rloBankId != 0) ? rloBankId : 0));
        if (this.bankDetails != undefined) {
            this.bankDetails.forEach(function (eachObj) {
                if (eachObj.rloOfficeBankId == bankId) {
                    _this.bank = eachObj;
                }
            });
        }
        if (bankId != 0 && this.bank != undefined) {
            var tempNEFTData = this.NEFTData;
            this.enableNEFT = true;
            this.NEFTFileName = "NEFT Document";
            if (this.RloOfficeAddress != undefined) {
                tempNEFTData.nameofthePayee = this.RloOfficeAddress.rloOfficeName;
            }
            else {
                tempNEFTData.nameofthePayee = "";
            }
            tempNEFTData.contactNumber = "";
            tempNEFTData.idNumber = "";
            tempNEFTData.natureOfId = "";
            tempNEFTData.nameOfBank = this.bank.bankName;
            tempNEFTData.bankBranchCode = this.bank.bankBranch;
            tempNEFTData.accountNumber = this.bank.bankAccountNo;
            tempNEFTData.IFSCCode = this.bank.ifsc;
            tempNEFTData.amount = this.sumofamount.toString();
            tempNEFTData.narration = "";
            this.NEFTDetails.push(tempNEFTData);
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.getRLOBankDetails = function (id) {
        var _this = this;
        this.dataService
            .getRLOBankDetails(id)
            .subscribe(function (data) {
            _this.bankDetails = data;
        });
    };
    ReviewFundReleaseExpensesComponent.prototype.downloadNeftDocument = function () {
        this.setNEFTDetails();
        this.showErrorMessage = false;
        var downloadNEFTDetails = this.NEFTDetails;
        if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadNEFTDetails, this.NEFTFileName);
        }
    };
    ReviewFundReleaseExpensesComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewFundReleaseExpensesComponent.prototype, "successModal", void 0);
    ReviewFundReleaseExpensesComponent = __decorate([
        Component({
            selector: 'app-review-fund-release-expenses',
            templateUrl: './review-fund-release-expenses.component.html',
            styleUrls: ['./review-fund-release-expenses.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, TresurerDataService, UserService, ExcelService])
    ], ReviewFundReleaseExpensesComponent);
    return ReviewFundReleaseExpensesComponent;
}());
export { ReviewFundReleaseExpensesComponent };
//# sourceMappingURL=review-fund-release-expenses.component.js.map