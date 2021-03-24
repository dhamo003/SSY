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
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { UserService } from '../../UserService';
import { EntryPoint } from '../pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { pagination } from '../../claim/pipes/constnts.model';
var ClaimDraftComponent = /** @class */ (function () {
    //Paging props end
    function ClaimDraftComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        this.deleteStatus = false;
        // claimsData: any = [];
        this.claimsData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    ClaimDraftComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ClaimDraftComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, "0");
    };
    ClaimDraftComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ClaimDraftComponent.prototype.ngOnInit = function () {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.page, this.pageSize);
    };
    ClaimDraftComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ClaimDraftComponent.prototype.getClaimsByBenID = function (id, entrypoint, userType, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getAllDraftClaimsByBen(id, entrypoint, userType, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ClaimDraftComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, mode: "draft", claimStatus: item.statusId }], { skipLocationChange: true });
    };
    ClaimDraftComponent.prototype.onViewClaimClick = function (item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId }], { skipLocationChange: true });
    };
    ClaimDraftComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, claim.claimType)
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    ClaimDraftComponent.prototype.onDeleteClaimClick = function (item) {
        var _this = this;
        if (confirm("Are you sure to proceed ")) {
            this.dataService.deleteClaimById(item.claimId)
                .subscribe(function (data) {
                _this.deleteStatus = data;
                if (_this.deleteStatus) {
                    _this.successMessage = "Your claim was deleted successfully";
                }
                else {
                    _this.successMessage = "Invalid transaction";
                }
                _this.successModal.show();
            });
        }
    };
    ClaimDraftComponent.prototype.changepage = function (page) {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.page, this.pageSize);
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ClaimDraftComponent.prototype, "successModal", void 0);
    ClaimDraftComponent = __decorate([
        Component({
            selector: 'app-claim-draft',
            templateUrl: './claim-draft.component.html',
            styleUrls: ['./claim-draft.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], ClaimDraftComponent);
    return ClaimDraftComponent;
}());
export { ClaimDraftComponent };
//# sourceMappingURL=claim-draft.component.js.map