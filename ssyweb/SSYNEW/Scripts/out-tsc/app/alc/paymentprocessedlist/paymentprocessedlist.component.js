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
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { pagination } from '../../claim/pipes/constnts.model';
var PaymentprocessedlistComponent = /** @class */ (function () {
    //Paging props end
    function PaymentprocessedlistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentProcessData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    PaymentprocessedlistComponent.prototype.ngOnInit = function () {
        debugger;
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize); //ClaimStatus.PaymentProcessingbyALC
    };
    PaymentprocessedlistComponent.prototype.getPaymentProcessDetails = function (id, statusId, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPaymentProcessDetails(id, statusId, pageNo, pageSize)
            .subscribe(function (data) {
            //this.paymentProcessData = data;
            _this.paymentProcessData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentprocessedlistComponent.prototype.onreviewClick = function (item) {
        debugger;
        this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view", statusId: item.statusId }], { skipLocationChange: true });
    };
    PaymentprocessedlistComponent.prototype.changepage = function (page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize);
    };
    PaymentprocessedlistComponent = __decorate([
        Component({
            selector: 'app-paymentprocessedlist',
            templateUrl: './paymentprocessedlist.component.html',
            styleUrls: ['./paymentprocessedlist.component.css']
        }),
        __metadata("design:paramtypes", [Router, AlcDataService, UserService])
    ], PaymentprocessedlistComponent);
    return PaymentprocessedlistComponent;
}());
export { PaymentprocessedlistComponent };
//# sourceMappingURL=paymentprocessedlist.component.js.map