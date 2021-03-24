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
import { DlcDataService } from '../services/dlc-data.service';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';
import { UserService } from '../../UserService';
var PendingApprovalClaimsComponent = /** @class */ (function () {
    //Paging props end
    function PendingApprovalClaimsComponent(router, dataService, userService) {
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
    PendingApprovalClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    PendingApprovalClaimsComponent.prototype.onreviewClick = function (item, index) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "pending", claimAmount: item.claimAmount, chronologicalOrder: index }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    PendingApprovalClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    PendingApprovalClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    PendingApprovalClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral, this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "pending", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    PendingApprovalClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    PendingApprovalClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral, this.page, this.pageSize);
    };
    PendingApprovalClaimsComponent = __decorate([
        Component({
            selector: 'app-pending-approval-claims',
            templateUrl: './pending-approval-claims.component.html',
            styleUrls: ['./pending-approval-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, DlcDataService, UserService])
    ], PendingApprovalClaimsComponent);
    return PendingApprovalClaimsComponent;
}());
export { PendingApprovalClaimsComponent };
//# sourceMappingURL=pending-approval-claims.component.js.map