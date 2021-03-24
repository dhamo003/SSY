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
import { pagination } from '../../claim/pipes/constnts.model';
var PaymentProcessedListComponent = /** @class */ (function () {
    //Paging props end
    function PaymentProcessedListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentProcessData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    PaymentProcessedListComponent.prototype.ngOnInit = function () {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
    };
    PaymentProcessedListComponent.prototype.getPaymentProcessDetails = function (id, type, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getTreasurerPaymentProcesses(id, type, pageNo, pageSize)
            .subscribe(function (data) {
            _this.paymentProcessData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentProcessedListComponent.prototype.onreviewClick = function (item) {
        this.router.navigate(['tresurer/paymentrelease', { processId: item.paymentProcessingID, alcId: item.createdBy }], { skipLocationChange: true });
    };
    PaymentProcessedListComponent.prototype.changepage = function (page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
    };
    PaymentProcessedListComponent = __decorate([
        Component({
            selector: 'app-payment-processed-list',
            templateUrl: './payment-processed-list.component.html',
            styleUrls: ['./payment-processed-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, TresurerDataService, UserService])
    ], PaymentProcessedListComponent);
    return PaymentProcessedListComponent;
}());
export { PaymentProcessedListComponent };
//# sourceMappingURL=payment-processed-list.component.js.map