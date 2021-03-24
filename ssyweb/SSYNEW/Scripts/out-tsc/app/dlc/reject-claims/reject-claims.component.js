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
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';
var RejectClaimsComponent = /** @class */ (function () {
    //Paging props end
    function RejectClaimsComponent(router, dataService, userService) {
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
    RejectClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "reject", chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    RejectClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    RejectClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    RejectClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "reject", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    RejectClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    RejectClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedRejectbyDLC, WorkflowTrans.workflowreferral, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            // this.claimsData = data;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            console.log(_this.claimsData);
        });
    };
    RejectClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedRejectbyDLC, WorkflowTrans.workflowreferral, "0", "0", this.page, this.pageSize);
    };
    RejectClaimsComponent.prototype.GetResults = function () {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";
            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedRejectbyDLC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }
    };
    RejectClaimsComponent = __decorate([
        Component({
            selector: 'app-reject-claims',
            templateUrl: './reject-claims.component.html',
            styleUrls: ['./reject-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, DlcDataService, UserService])
    ], RejectClaimsComponent);
    return RejectClaimsComponent;
}());
export { RejectClaimsComponent };
//# sourceMappingURL=reject-claims.component.js.map