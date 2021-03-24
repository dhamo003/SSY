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
import { Router } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
var FundRequestedClaimsComponent = /** @class */ (function () {
    function FundRequestedClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.isclaimDta = false;
    }
    FundRequestedClaimsComponent.prototype.onreviewClick = function (item, index) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: WorkflowTrans.fundworkflow, chronologicalOrder: index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    };
    FundRequestedClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    FundRequestedClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    FundRequestedClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    FundRequestedClaimsComponent.prototype.ngOnInit = function () {
        this.claimStatusIds = ClaimStatus.FundRequestFromALC + "," + ClaimStatus.SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, this.claimStatusIds, this.page, this.pageSize);
    };
    FundRequestedClaimsComponent.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    FundRequestedClaimsComponent.prototype.changepage = function (page) {
        this.claimStatusIds = ClaimStatus.FundRequestFromALC + "," + ClaimStatus.SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, this.claimStatusIds, this.page, this.pageSize);
    };
    FundRequestedClaimsComponent.prototype.getDetails = function (type, id) {
        var _this = this;
        if (type == "Expenses") {
            this.dataService
                .getFundRequestedExpensesById(id)
                .subscribe(function (data) {
                _this.expensesData = data.fundRequestExpensesDtlList;
                _this.headertext = "Expenses Details";
                _this.isclaimDta = false;
                _this.expensesModal.show();
            });
        }
        else {
            this.dataService
                .getFundRequestedClaimsById(id)
                .subscribe(function (data) {
                debugger;
                _this.claimsReqData = data.fundClaimList;
                _this.headertext = "Claims Details";
                _this.isclaimDta = true;
                _this.expensesModal.show();
            });
        }
    };
    FundRequestedClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], FundRequestedClaimsComponent.prototype, "expensesModal", void 0);
    FundRequestedClaimsComponent = __decorate([
        Component({
            selector: 'app-fund-requested-claims',
            templateUrl: './fund-requested-claims.component.html',
            styleUrls: ['./fund-requested-claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, DlcDataService, UserService])
    ], FundRequestedClaimsComponent);
    return FundRequestedClaimsComponent;
}());
export { FundRequestedClaimsComponent };
//# sourceMappingURL=fund-requested-claims.component.js.map