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
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';
var ReferralSendbackClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ReferralSendbackClaimsComponent(router, dataService, userService) {
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
    ReferralSendbackClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ReferralSendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['alc/referralreview', { claimId: item.claimId, claimType: item.claimType, tranctionId: item.claimRefernceNo, mode: "sendback", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    ReferralSendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "referalsendback", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    ReferralSendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ReferralSendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReferralSendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ReferralSendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferSendbackbyALC, WorkflowTrans.workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralSendbackClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data;
            console.log(_this.claimsData);
        });
    };
    ReferralSendbackClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferSendbackbyALC, WorkflowTrans.workflowreferral, "0", "0", this.page, this.pageSize);
    };
    ReferralSendbackClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferSendbackbyALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferSendbackbyALC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }
    };
    ReferralSendbackClaimsComponent = __decorate([
        Component({
            selector: 'app-referral-sendback-claims',
            templateUrl: './referral-sendback-claims.component.html',
            styleUrls: ['./referral-sendback-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, AlcDataService, UserService])
    ], ReferralSendbackClaimsComponent);
    return ReferralSendbackClaimsComponent;
}());
export { ReferralSendbackClaimsComponent };
//# sourceMappingURL=referral-sendback-claims.component.js.map