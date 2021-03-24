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
import { ModalDirective } from "ngx-bootstrap";
import { InspectorDataService } from '../services/inspector-data.service';
import { UserService } from '../../UserService';
import { LovConstants } from '../../claim/pipes/constnts.model';
var InspectorLegacyClaimEntryComponent = /** @class */ (function () {
    function InspectorLegacyClaimEntryComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claim = {};
        //isInspector: boolean = false;
        this.ssnNoValid = true;
        this.dateofPaymentValid = true;
        this.categoryValid = true;
        this.claimAmountValid = true;
        this.oldRegdNoValid = true;
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    InspectorLegacyClaimEntryComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    InspectorLegacyClaimEntryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    InspectorLegacyClaimEntryComponent.prototype.SaveLegacyClaim = function (claimData) {
        var _this = this;
        debugger;
        if (this.validate(claimData)) {
            claimData.userId = this.userService.user.deptUserid;
            claimData.userType = Number(this.userService.user.userTpe);
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveLegacyClaimDetails(claimData)
                    .then(function (data) {
                    if (data) {
                        _this.successMessage = "Legacy claim successfully Saved";
                        _this.successModal.show();
                    }
                    else {
                        _this.successMessage = "Invalid transaction";
                        _this.successModal.show();
                    }
                });
            }
        }
        else
            return;
    };
    InspectorLegacyClaimEntryComponent.prototype.validate = function (claimData) {
        var isValid = true;
        if (claimData.ssinNumber == null || claimData.ssinNumber == undefined) {
            this.ssnNoValid = isValid = false;
        }
        if (claimData.claimDate == null || claimData.claimDate == undefined) {
            this.dateofPaymentValid = isValid = false;
        }
        if (claimData.claimCategory == 0 || claimData.claimCategory == undefined) {
            this.categoryValid = isValid = false;
        }
        if (claimData.claimAmount == null || claimData.claimAmount == undefined) {
            this.claimAmountValid = isValid = false;
        }
        if (claimData.oldRegdNo == null || claimData.oldRegdNo == undefined) {
            this.oldRegdNoValid = isValid = false;
        }
        return isValid;
    };
    InspectorLegacyClaimEntryComponent.prototype.CancelClick = function () {
        debugger;
        this.router.navigate(['inspector/inspectorlegacylist']);
    };
    InspectorLegacyClaimEntryComponent.prototype.okClick = function () {
        debugger;
        this.successModal.hide();
        this.router.navigate(['inspector/inspectorlegacylist']);
    };
    InspectorLegacyClaimEntryComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.LegacyClaimCategory)
            .subscribe(function (data) {
            _this.categoryLov = data;
        });
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], InspectorLegacyClaimEntryComponent.prototype, "successModal", void 0);
    InspectorLegacyClaimEntryComponent = __decorate([
        Component({
            selector: 'app-inspector-legacy-claim-entry',
            templateUrl: './inspector-legacy-claim-entry.component.html',
            styleUrls: ['./inspector-legacy-claim-entry.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, InspectorDataService, UserService])
    ], InspectorLegacyClaimEntryComponent);
    return InspectorLegacyClaimEntryComponent;
}());
export { InspectorLegacyClaimEntryComponent };
//# sourceMappingURL=inspector-legacy-claim-entry.component.js.map