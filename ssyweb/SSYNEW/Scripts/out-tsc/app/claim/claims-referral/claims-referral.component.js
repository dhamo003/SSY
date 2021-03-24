var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { UserService } from '../../UserService';
import { EntryPoint, WorkflowTrans, ClaimConstants, pagination } from '../pipes/constnts.model';
var ClaimsReferralComponent = /** @class */ (function () {
    //Paging props end
    function ClaimsReferralComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    ClaimsReferralComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ClaimsReferralComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ClaimsReferralComponent.prototype.ngOnInit = function () {
        //Todo: change parameters 
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, "0", this.page, this.pageSize);
    };
    ClaimsReferralComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ClaimsReferralComponent.prototype.getReferralClaimsByBenID = function (id, entrypoint, userType, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getAllReferralClaimsByBenficiary(id, entrypoint, userType, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(data);
        });
    };
    ClaimsReferralComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, tranctionType: item.claimType, claimStatus: item.statusId, mode: "referal" }], { skipLocationChange: true });
    };
    ClaimsReferralComponent.prototype.onViewClaimClick = function (item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "referal", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    ClaimsReferralComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ClaimsReferralComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    ClaimsReferralComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflow, mode: "referal" }], { skipLocationChange: true });
        //this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    ClaimsReferralComponent.prototype.changepage = function (page) {
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, "0", this.page, this.pageSize);
    };
    ClaimsReferralComponent.prototype.GetResults = function () {
        if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
            this.strClaimRefNo = this.claimReferenceNoText.trim();
        else
            this.strClaimRefNo = "0";
        //this.dataService
        //    .getSearchAllReferralClaimsByBenficiary(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
        //    .subscribe((data: any) => {
        //        this.claimsData = data.results;
        //        this.totalRows = data.rowCount;
        //    });
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
    };
    ClaimsReferralComponent = __decorate([
        Component({
            selector: 'app-claims-referral',
            templateUrl: './claims-referral.component.html',
            styleUrls: ['./claims-referral.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], ClaimsReferralComponent);
    return ClaimsReferralComponent;
}());
export { ClaimsReferralComponent };
//# sourceMappingURL=claims-referral.component.js.map