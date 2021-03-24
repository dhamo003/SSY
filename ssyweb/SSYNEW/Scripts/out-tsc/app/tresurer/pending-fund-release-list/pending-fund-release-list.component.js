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
import { TresurerDataService } from '../services/tresurer-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, pagination } from '../../claim/pipes/constnts.model';
var PendingFundReleaseListComponent = /** @class */ (function () {
    //Paging props end
    function PendingFundReleaseListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //public claimsData: Claims[]=[];
        this.fundRequest = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    PendingFundReleaseListComponent.prototype.ngOnInit = function () {
        debugger;
        //this.getFundReleaseDetails(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard);
        this.getFundReleaseDetails(this.userService.user.deptUserid, ClaimStatus.ApprovebyBoard, this.page, this.pageSize);
    };
    PendingFundReleaseListComponent.prototype.getFundReleaseDetails = function (id, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundReleaseDetails(id, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    PendingFundReleaseListComponent.prototype.onreviewClick = function (item, index) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['tresurer/fundrelease', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId, mode: "pending", chronologicalOrder: index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['tresurer/reviewfundreleaseexpenses', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId }], { skipLocationChange: true });
    };
    PendingFundReleaseListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    PendingFundReleaseListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    PendingFundReleaseListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    PendingFundReleaseListComponent.prototype.changepage = function (page) {
        this.getFundReleaseDetails(this.userService.user.deptUserid, ClaimStatus.ApprovebyBoard, this.page, this.pageSize);
    };
    PendingFundReleaseListComponent = __decorate([
        Component({
            selector: 'app-pending-fund-release-list',
            templateUrl: './pending-fund-release-list.component.html',
            styleUrls: ['./pending-fund-release-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, TresurerDataService, UserService])
    ], PendingFundReleaseListComponent);
    return PendingFundReleaseListComponent;
}());
export { PendingFundReleaseListComponent };
//# sourceMappingURL=pending-fund-release-list.component.js.map