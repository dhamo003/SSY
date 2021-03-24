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
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { EntryPoint, WorkflowTrans, ClaimConstants, pagination, UserType } from '../pipes/constnts.model';
var AgentReferrallComponent = /** @class */ (function () {
    function AgentReferrallComponent(router, dataService, userService) {
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
    AgentReferrallComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    AgentReferrallComponent.prototype.ngOnInit = function () {
        if (this.userService.user.userTpe == UserType.CA.toString())
            this.entryPoint = EntryPoint.CA;
        else if (this.userService.user.userTpe == UserType.Lwfc.toString())
            this.entryPoint = EntryPoint.Lwfc;
        else
            this.entryPoint = EntryPoint.Agent;
        this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", "0", this.page, this.pageSize);
    };
    AgentReferrallComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    AgentReferrallComponent.prototype.getReferralClaimsByAgentID = function (id, entrypoint, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getAllReferralClaimsByAgent(id, entrypoint, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    AgentReferrallComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    AgentReferrallComponent.prototype.trackClaim = function (item) {
        this.router.navigate(['claim/ClaimTrack'], { skipLocationChange: true });
    };
    AgentReferrallComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/agentclaimentry', { claimId: item.claimId, mode: "referal", claimStatus: item.statusId, tranctionType: item.claimType }], { skipLocationChange: true });
    };
    AgentReferrallComponent.prototype.onViewClaimClick = function (item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "referal", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    AgentReferrallComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "agentreferal", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    };
    AgentReferrallComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    AgentReferrallComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    AgentReferrallComponent.prototype.changepage = function (page) {
        this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", "0", this.page, this.pageSize);
    };
    AgentReferrallComponent.prototype.GetResults = function () {
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
            //    .getSearchAllReferralClaimsByAgent(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }
    };
    AgentReferrallComponent = __decorate([
        Component({
            selector: 'app-agent-referrall',
            templateUrl: './agent-referrall.component.html',
            styleUrls: ['./agent-referrall.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], AgentReferrallComponent);
    return AgentReferrallComponent;
}());
export { AgentReferrallComponent };
//# sourceMappingURL=agent-referrall.component.js.map