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
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ModalDirective } from 'ngx-bootstrap';
var UtilizationcertificateComponent = /** @class */ (function () {
    //boardId: any;
    function UtilizationcertificateComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.showErrorMessage = false;
        this.sumofAmount = 0;
        this.ucId = 0;
        this.mode = "";
        this.fundReleaseOrder = [];
        this.certificatesVisible = false;
        this.utilizationCertificateDateValid = true;
        this.financialYearValid = true;
        this.openingBalanceValid = true;
        this.utilizedValid = true;
        this.utilizationCertificate = {};
        this.selectedReleaseOrdersList = [];
        this.viewMode = false;
        this.boardIdValid = true;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    UtilizationcertificateComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    UtilizationcertificateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetFinancialYears();
        this.getBoardDetails();
        //this.boardId = 0;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.ucId = params["ucId"] != null ? Number(params["ucId"]) : 0;
            _this.mode = params["mode"];
        });
        if (this.ucId > 0 && this.mode == "view") {
            this.viewMode = true;
            this.certificatesVisible = true;
            this.getUtilizationCertificateDetails(this.ucId);
        }
    };
    UtilizationcertificateComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    UtilizationcertificateComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UtilizationcertificateComponent.prototype.GetFinancialYears = function () {
        var _this = this;
        this.dataService
            .GetFinancialYears()
            .subscribe(function (data) {
            _this.financialYears = data;
        });
    };
    UtilizationcertificateComponent.prototype.GetReleaseOrders = function (rloOfficeId, finYear, boardId) {
        var _this = this;
        debugger;
        this.dataService
            .GetReleaseOrders(rloOfficeId, finYear, boardId)
            .subscribe(function (data) {
            _this.fundReleaseOrder = data;
        });
    };
    //GetAlcInformation(deptUserid: number) {
    //    this.dataService
    //        .GetAlcInformation(deptUserid)
    //        .subscribe((data: any) => {
    //            this.alcDetails = data;
    //            if (this.alcDetails.approvedClaimsAmount > this.alcDetails.balanceOfTheAmount)
    //                this.AmountShortfall = (this.alcDetails.approvedClaimsAmount - this.alcDetails.balanceOfTheAmount);
    //            else
    //                this.AmountShortfall = 0;
    //        });
    //}
    UtilizationcertificateComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
        });
    };
    UtilizationcertificateComponent.prototype.financialYearChange = function (year) {
        this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, year, this.utilizationCertificate.boardId);
        this.certificatesVisible = true;
    };
    UtilizationcertificateComponent.prototype.getData = function () {
        if (this.utilizationCertificate.financialYearId != undefined && this.utilizationCertificate.financialYearId > 0
            && this.utilizationCertificate.boardId != undefined && this.utilizationCertificate.boardId > 0) {
            this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, this.utilizationCertificate.financialYearId, this.utilizationCertificate.boardId);
            this.certificatesVisible = true;
        }
    };
    UtilizationcertificateComponent.prototype.SubmitRequest = function () {
        var _this = this;
        debugger;
        if (this.validateDetails()) {
            this.selectedReleaseOrders();
            this.showErrorMessage = false;
            if (this.selectedReleaseOrdersList != null && this.selectedReleaseOrdersList.length > 0) {
                this.utilizationCertificate.rloOfficeID = this.RloOfficeAddress.rloOfficeId;
                this.utilizationCertificate.createdBy = this.userService.user.deptUserid;
                this.utilizationCertificate.statusId = 1;
                this.utilizationCertificate.createdDate = new Date();
                //this.utilizationCertificate.boardId = this.boardId;
                this.utilizationCertificate.fundReleaseOrdersList = this.selectedReleaseOrdersList;
                //this.claimData.fundRequested = this.sumofAmount;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveUtilizationCertificate(this.utilizationCertificate)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "Utilization Certificate created successfully";
                            _this.sumofAmount = 0;
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
        }
    };
    UtilizationcertificateComponent.prototype.selectAll = function () {
        this.showErrorMessage = false;
        for (var i = 0; i < this.fundReleaseOrder.length; i++) {
            this.fundReleaseOrder[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.fundReleaseOrder[i].sanctionedAmount;
            }
        }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    };
    UtilizationcertificateComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.fundReleaseOrder.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.sanctionedAmount;
        }
        else {
            this.sumofAmount -= itemData.sanctionedAmount;
        }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    };
    UtilizationcertificateComponent.prototype.selectedReleaseOrders = function () {
        var res = this.fundReleaseOrder.filter(function (x) { return x.selected == true; });
        this.selectedReleaseOrdersList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedReleaseOrdersList.push(res[i].fundReleaseOrderHdrId);
        }
    };
    UtilizationcertificateComponent.prototype.cancelClick = function () {
        this.router.navigate(['alc/utilizationcertificatelist']);
    };
    UtilizationcertificateComponent.prototype.validateDetails = function () {
        var isValid = true;
        this.utilizationCertificateDateValid = this.financialYearValid = this.openingBalanceValid = this.utilizedValid = true;
        this.showErrorMessage = false;
        if (this.utilizationCertificate.date == undefined) {
            this.utilizationCertificateDateValid = isValid = false;
        }
        if (this.utilizationCertificate.financialYearId == 0 || this.utilizationCertificate.financialYearId == undefined) {
            this.financialYearValid = isValid = false;
        }
        if (this.utilizationCertificate.openingBalance == undefined || this.utilizationCertificate.openingBalance <= 0) {
            this.openingBalanceValid = isValid = false;
        }
        if (this.utilizationCertificate.fundUtilized == undefined || this.utilizationCertificate.fundUtilized <= 0) {
            this.utilizedValid = isValid = false;
        }
        return isValid;
    };
    UtilizationcertificateComponent.prototype.getBalance = function (event) {
        debugger;
        var a = 0;
        var b = 0;
        var c = 0;
        a = this.utilizationCertificate.openingBalance != undefined ? +this.utilizationCertificate.openingBalance : 0;
        b = this.utilizationCertificate.fundRecieved != undefined ? +this.utilizationCertificate.fundRecieved : 0;
        c = this.utilizationCertificate.fundUtilized != undefined ? +this.utilizationCertificate.fundUtilized : 0;
        //alert((a + b) - c);
        this.utilizationCertificate.balance = ((a + b) - c);
    };
    UtilizationcertificateComponent.prototype.getUtilizationCertificateDetails = function (ucId) {
        var _this = this;
        this.dataService
            .getUtilizationCertificateDetails(ucId)
            .subscribe(function (data) {
            _this.utilizationCertificate = data;
            _this.fundReleaseOrder = data.certificateReleaseOrders;
            _this.utilizationCertificate.date = new Date(_this.utilizationCertificate.date);
        });
    };
    UtilizationcertificateComponent.prototype.okClick = function () {
        this.successModal.hide();
        window.location.href = "alc/utilizationcertificatelist";
    };
    UtilizationcertificateComponent.prototype.getBoardDetails = function () {
        var _this = this;
        this.dataService
            .getBoardMasterData()
            .subscribe(function (data) {
            _this.boardList = data;
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], UtilizationcertificateComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], UtilizationcertificateComponent.prototype, "expensesModal", void 0);
    UtilizationcertificateComponent = __decorate([
        Component({
            selector: 'app-utilizationcertificate',
            templateUrl: './utilizationcertificate.component.html',
            styleUrls: ['./utilizationcertificate.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService])
    ], UtilizationcertificateComponent);
    return UtilizationcertificateComponent;
}());
export { UtilizationcertificateComponent };
//# sourceMappingURL=utilizationcertificate.component.js.map