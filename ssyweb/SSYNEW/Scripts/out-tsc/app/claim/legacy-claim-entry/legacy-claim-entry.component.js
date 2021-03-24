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
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { LovConstants } from '../pipes/constnts.model';
var LegacyClaimEntryComponent = /** @class */ (function () {
    function LegacyClaimEntryComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claim = {};
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
    LegacyClaimEntryComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    LegacyClaimEntryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    LegacyClaimEntryComponent.prototype.SaveLegacyClaim = function (claimData) {
        var _this = this;
        debugger;
        if (this.validate(claimData)) {
            claimData.userId = this.userService.user.userid;
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
    LegacyClaimEntryComponent.prototype.validate = function (claimData) {
        var isValid = true;
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
    LegacyClaimEntryComponent.prototype.CancelClick = function () {
        debugger;
        this.router.navigate(['claim/legacylist']);
    };
    LegacyClaimEntryComponent.prototype.okClick = function () {
        debugger;
        this.successModal.hide();
        window.location.href = "claim/legacylist";
    };
    LegacyClaimEntryComponent.prototype.getCategories = function () {
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
    ], LegacyClaimEntryComponent.prototype, "successModal", void 0);
    LegacyClaimEntryComponent = __decorate([
        Component({
            selector: 'app-legacy-claim-entry',
            templateUrl: './legacy-claim-entry.component.html',
            styleUrls: ['./legacy-claim-entry.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], LegacyClaimEntryComponent);
    return LegacyClaimEntryComponent;
}());
export { LegacyClaimEntryComponent };
//# sourceMappingURL=legacy-claim-entry.component.js.map