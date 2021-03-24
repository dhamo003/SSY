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
import { ModalDirective } from "ngx-bootstrap";
import { LovConstants } from '../pipes/constnts.model';
var AdjustemententryformComponent = /** @class */ (function () {
    function AdjustemententryformComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.beneficiary = {};
        this.adjustment = {};
        this.isBenVisible = false;
        this.ssinValid = true;
        this.adjustmentDateReq = true;
        //adjustmentAmountReq: boolean = true;
        this.benAdjustmentAmountReq = true;
        this.govtAdjustmentAmountReq = true;
        this.typeIsValid = true;
        this.referencenumberReq = true;
        this.remarksReq = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
        this.toDayDate = new Date();
    }
    AdjustemententryformComponent.prototype.ngOnInit = function () {
        this.getAdjustmentType();
    };
    AdjustemententryformComponent.prototype.validateAdjustment = function () {
        var isValid = true;
        if (this.adjustment.ssinORPFNumber == undefined || this.adjustment.ssinORPFNumber == "") {
            this.ssinValid = isValid = false;
        }
        if (this.adjustment.adjustmentDate == undefined || this.adjustment.adjustmentDate == null) {
            this.adjustmentDateReq = isValid = false;
        }
        if (this.adjustment.benAdjustmentAmount == undefined || this.adjustment.benAdjustmentAmount == null || this.adjustment.benAdjustmentAmount.toString() == "") {
            this.benAdjustmentAmountReq = isValid = false;
        }
        if (this.adjustment.govtAdjustmentAmount == undefined || this.adjustment.govtAdjustmentAmount == null || this.adjustment.govtAdjustmentAmount.toString() == "") {
            this.govtAdjustmentAmountReq = isValid = false;
        }
        if (this.adjustment.adjustmentType == undefined || this.adjustment.adjustmentType == null) {
            this.typeIsValid = isValid = false;
        }
        //if (this.adjustment.reference == undefined || this.adjustment.reference == null || this.adjustment.reference.trim() == "") { this.referencenumberReq = isValid = false; }
        //if (this.adjustment.remarks == undefined || this.adjustment.remarks == null || this.adjustment.remarks.trim() == "") { this.remarksReq = isValid = false; }
        return isValid;
    };
    AdjustemententryformComponent.prototype.searchSSINNo = function (ssnNo) {
        var _this = this;
        this.isBenVisible = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getAdjustmentBeneficiaryBasicDetailsByID(ssnNo.trim())
                .subscribe(function (data) {
                debugger;
                _this.beneficiary = data;
                _this.isBenVisible = true;
            });
        }
        else {
            this.beneficiary = {};
        }
    };
    AdjustemententryformComponent.prototype.saveAdjustment = function () {
        var _this = this;
        this.adjustment.benSno = this.beneficiary.benSno;
        if (this.validateAdjustment()) {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveAdjustment(this.adjustment)
                    .then(function (data) {
                    //if (data) {
                    _this.successMessage = "Adjustment is saved successfully";
                    _this.successModal.show();
                    //}
                    //else {
                    //    this.successMessage = "Invalid transaction";
                    //    this.successModal.show();
                    //}
                });
            }
        }
    };
    AdjustemententryformComponent.prototype.clearValues = function () {
        this.adjustment.adjustmentDate = null;
        this.adjustment.benAdjustmentAmount = null;
        this.adjustment.govtAdjustmentAmount = null;
        this.adjustment.adjustmentTypeId = 0;
        this.adjustment.reference = "";
        this.adjustment.remarks = "";
    };
    AdjustemententryformComponent.prototype.okClick = function () {
        this.clearValues();
        this.successModal.hide();
    };
    AdjustemententryformComponent.prototype.adjustmentTypeChange = function (args) {
        debugger;
        this.adjustment.adjustmentType = args.target.options[args.target.selectedIndex].text;
    };
    AdjustemententryformComponent.prototype.getAdjustmentType = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.AdjustmentType)
            .subscribe(function (data) {
            _this.adjustmentTypeLov = data;
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AdjustemententryformComponent.prototype, "successModal", void 0);
    AdjustemententryformComponent = __decorate([
        Component({
            selector: 'app-adjustemententryform',
            templateUrl: './adjustemententryform.component.html',
            styleUrls: ['./adjustemententryform.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], AdjustemententryformComponent);
    return AdjustemententryformComponent;
}());
export { AdjustemententryformComponent };
//# sourceMappingURL=adjustemententryform.component.js.map