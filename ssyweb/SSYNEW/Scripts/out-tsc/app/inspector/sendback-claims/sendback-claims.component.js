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
import { InspectorDataService } from '../services/inspector-data.service';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';
import { UserService } from '../../UserService';
var SendbackClaimsComponent = /** @class */ (function () {
    //Paging props end
    function SendbackClaimsComponent(router, dataService, userService) {
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
    SendbackClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    SendbackClaimsComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "sendback", workflowId: WorkflowTrans.workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "sendback", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    SendbackClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    SendbackClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        this.pageOfItems = pageOfItems;
    };
    SendbackClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    SendbackClaimsComponent.prototype.ngOnInit = function () {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, "0", "0", this.page, this.pageSize);
    };
    SendbackClaimsComponent.prototype.getApprovalClaims = function (id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    SendbackClaimsComponent.prototype.changepage = function (page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, "0", "0", this.page, this.pageSize);
    };
    SendbackClaimsComponent.prototype.GetResults = function () {
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
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.SendbackfromInspector, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }
    };
    SendbackClaimsComponent = __decorate([
        Component({
            selector: 'app-sendback-claims',
            templateUrl: './sendback-claims.component.html',
            styleUrls: ['./sendback-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, InspectorDataService, UserService])
    ], SendbackClaimsComponent);
    return SendbackClaimsComponent;
}());
export { SendbackClaimsComponent };
//# sourceMappingURL=sendback-claims.component.js.map