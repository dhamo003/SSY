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
import { CeoDataService } from '../services/ceo-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
var ApprovedFundRequestListComponent = /** @class */ (function () {
    function ApprovedFundRequestListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.fundRequest = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.isclaimDta = false;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ApprovedFundRequestListComponent.prototype.onreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['ceo/fundrequest', { fundRequestId: item.fundRequestNumber, mode: 'view', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow, chronologicalOrder: -1 }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['ceo/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: 'view', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    };
    ApprovedFundRequestListComponent.prototype.onEditreviewClick = function (item) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['ceo/fundrequest', { fundRequestId: item.fundRequestNumber, mode: 'edit', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['ceo/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: 'edit', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    };
    ApprovedFundRequestListComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ApprovedFundRequestListComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ApprovedFundRequestListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ApprovedFundRequestListComponent.prototype.ngOnInit = function () {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, "0", 0, "0", this.page, this.pageSize);
    };
    ApprovedFundRequestListComponent.prototype.getFundRequestedClaims = function (id, type, wfType, statusId, rlo, fundRequestNo, requestDate, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getFundRequestedClaims(id, type, wfType, statusId, rlo, fundRequestNo, requestDate, pageNo, pageSize)
            .subscribe(function (data) {
            _this.fundRequest = data.results;
            _this.totalRows = data.rowCount;
            //console.log(this.fundRequest);
        });
    };
    ApprovedFundRequestListComponent.prototype.changepage = function (page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, "0", 0, "0", this.page, this.pageSize);
    };
    ApprovedFundRequestListComponent.prototype.GetResults = function () {
        debugger;
        if ((this.rloSearchText != null && this.rloSearchText != undefined) || (this.fundRequestNoText != null && this.fundRequestNoText != undefined) || (this.requestDateText != null && this.requestDateText != undefined)) {
            if (this.rloSearchText != null && this.rloSearchText != undefined && this.rloSearchText != "")
                this.strRLO = this.rloSearchText.trim();
            else
                this.strRLO = "0";
            if (this.fundRequestNoText != null && this.fundRequestNoText != undefined && this.fundRequestNoText != "")
                this.strFundRequestNo = Number(this.fundRequestNoText);
            else
                this.strFundRequestNo = 0;
            if (this.requestDateText != null && this.requestDateText != undefined) {
                this.strRequestDate = this.requestDateText.toISOString();
                var x = this.requestDateText.getUTCDate();
                var y = this.requestDateText.toDateString();
                var z = this.requestDateText.toLocaleDateString();
                var x1 = this.requestDateText.toLocaleString();
                var y1 = this.requestDateText.toUTCString();
            }
            else
                this.strRequestDate = "0";
            this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, this.strRLO, this.strFundRequestNo, this.strRequestDate, pagination.pageNo, pagination.pageSize);
        }
        else
            this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, "0", 0, "0", this.page, this.pageSize);
    };
    ApprovedFundRequestListComponent.prototype.getDetails = function (type, id) {
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
                .getFundRequestedClaimsById(id, this.userService.user.userTpe)
                .subscribe(function (data) {
                debugger;
                _this.claimsReqData = data.fundClaimList;
                _this.headertext = "Claims Details";
                _this.isclaimDta = true;
                _this.expensesModal.show();
            });
        }
    };
    ApprovedFundRequestListComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], ApprovedFundRequestListComponent.prototype, "expensesModal", void 0);
    ApprovedFundRequestListComponent = __decorate([
        Component({
            selector: 'app-approved-fund-request-list',
            templateUrl: './approved-fund-request-list.component.html',
            styleUrls: ['./approved-fund-request-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, CeoDataService, UserService])
    ], ApprovedFundRequestListComponent);
    return ApprovedFundRequestListComponent;
}());
export { ApprovedFundRequestListComponent };
//# sourceMappingURL=approved-fund-request-list.component.js.map