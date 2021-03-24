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
import { EntryPoint, WorkflowTrans, ClaimConstants, pagination, UserType } from '../pipes/constnts.model';
var AgentClaimsComponent = /** @class */ (function () {
    function AgentClaimsComponent(router, dataService, userService) {
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
    AgentClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    AgentClaimsComponent.prototype.ngOnInit = function () {
        if (this.userService.user.userTpe == UserType.CA.toString())
            this.entryPoint = EntryPoint.CA;
        else if (this.userService.user.userTpe == UserType.Lwfc.toString())
            this.entryPoint = EntryPoint.Lwfc;
        else
            this.entryPoint = EntryPoint.Agent;
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", "0", this.page, this.pageSize);
    };
    AgentClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    AgentClaimsComponent.prototype.getClaimsByAgentID = function (id, entrypoint, ssin, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getAllClaimsByAgent(id, entrypoint, ssin, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    AgentClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    AgentClaimsComponent.prototype.trackClaim = function (item) {
        this.router.navigate(['claim/ClaimTrack'], { skipLocationChange: true });
    };
    AgentClaimsComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/agentclaimentry', { claimId: item.claimId, mode: "claim", claimStatus: item.statusId, tranctionType: item.claimType }], { skipLocationChange: true });
    };
    AgentClaimsComponent.prototype.onViewClaimClick = function (item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "claim", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    AgentClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "claim", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    AgentClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    AgentClaimsComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    AgentClaimsComponent.prototype.changepage = function (page) {
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", "0", this.page, this.pageSize);
    };
    AgentClaimsComponent.prototype.GetResults = function () {
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
            //    .getSearchAllClaimsByAgent(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }
    };
    AgentClaimsComponent = __decorate([
        Component({
            selector: 'app-agent-claims',
            templateUrl: './agent-claims.component.html',
            styleUrls: ['./agent-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], AgentClaimsComponent);
    return AgentClaimsComponent;
}());
export { AgentClaimsComponent };
//# sourceMappingURL=agent-claims.component.js.map