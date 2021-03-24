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
var ForwardFundRequestListComponent = /** @class */ (function () {
    function ForwardFundRequestListComponent(router, dataService, userService) {
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
    ForwardFundRequestListComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'forward', workflowId: WorkflowTrans.fundworkflow, chronologicalOrder: -1 }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'forward', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    };
    ForwardFundRequestListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ForwardFundRequestListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ForwardFundRequestListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ForwardFundRequestListComponent.prototype.ngOnInit = function () {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ForwardtoBoard, this.page, this.pageSize);
    };
    ForwardFundRequestListComponent.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ForwardFundRequestListComponent.prototype.changepage = function (page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ForwardtoBoard, this.page, this.pageSize);
    };
    ForwardFundRequestListComponent.prototype.getDetails = function (type, id) {
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
    ForwardFundRequestListComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], ForwardFundRequestListComponent.prototype, "expensesModal", void 0);
    ForwardFundRequestListComponent = __decorate([
        Component({
            selector: 'app-forward-fund-request-list',
            templateUrl: './forward-fund-request-list.component.html',
            styleUrls: ['./forward-fund-request-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, DlcDataService, UserService])
    ], ForwardFundRequestListComponent);
    return ForwardFundRequestListComponent;
}());
export { ForwardFundRequestListComponent };
//# sourceMappingURL=forward-fund-request-list.component.js.map