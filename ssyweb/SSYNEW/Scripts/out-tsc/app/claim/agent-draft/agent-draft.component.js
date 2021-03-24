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
import { EntryPoint, UserType } from '../pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { pagination } from '../../claim/pipes/constnts.model';
var AgentDraftComponent = /** @class */ (function () {
    function AgentDraftComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        this.deleteStatus = false;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    AgentDraftComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    AgentDraftComponent.prototype.ngOnInit = function () {
        if (this.userService.user.userTpe == UserType.CA.toString())
            this.entryPoint = EntryPoint.CA;
        else if (this.userService.user.userTpe == UserType.Lwfc.toString())
            this.entryPoint = EntryPoint.Lwfc;
        else
            this.entryPoint = EntryPoint.Agent;
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", this.page, this.pageSize);
        //this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);
    };
    AgentDraftComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    AgentDraftComponent.prototype.getClaimsByAgentID = function (id, entrypoint, ssin, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getAllDraftClaimsByAgent(id, entrypoint, ssin, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    AgentDraftComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/agentclaimentry', { claimId: item.claimId, mode: "draft", claimStatus: item.statusId }], { skipLocationChange: true });
    };
    AgentDraftComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    AgentDraftComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, claim.claimType)
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    AgentDraftComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);
    };
    AgentDraftComponent.prototype.onDeleteClaimClick = function (item) {
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
    AgentDraftComponent.prototype.changepage = function (page) {
        // this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0", this.page, this.pageSize);
    };
    AgentDraftComponent.prototype.GetResults = function () {
        if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
            this.strSSIN = this.ssinSearchText.trim();
        else
            this.strSSIN = "0";
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, pagination.pageNo, pagination.pageSize);
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], AgentDraftComponent.prototype, "successModal", void 0);
    AgentDraftComponent = __decorate([
        Component({
            selector: 'app-agent-draft',
            templateUrl: './agent-draft.component.html',
            styleUrls: ['./agent-draft.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], AgentDraftComponent);
    return AgentDraftComponent;
}());
export { AgentDraftComponent };
//# sourceMappingURL=agent-draft.component.js.map