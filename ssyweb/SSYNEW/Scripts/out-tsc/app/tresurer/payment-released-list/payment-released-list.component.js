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
var PaymentReleasedListComponent = /** @class */ (function () {
    //Paging props end
    function PaymentReleasedListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.paymentReleaseData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    PaymentReleasedListComponent.prototype.ngOnInit = function () {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    PaymentReleasedListComponent.prototype.getPaymentReleaseDetails = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPaymentReleaseDetails(id, pageNo, pageSize)
            .subscribe(function (data) {
            _this.paymentReleaseData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PaymentReleasedListComponent.prototype.onreviewClick = function (item) {
        debugger;
        this.router.navigate(['tresurer/reviewpaymentrelease', { releaseId: item.paymentReleaseId, processId: item.paymentProcessingId, userId: item.createdBy }], { skipLocationChange: true });
    };
    PaymentReleasedListComponent.prototype.changepage = function (page) {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
    };
    PaymentReleasedListComponent = __decorate([
        Component({
            selector: 'app-payment-released-list',
            templateUrl: './payment-released-list.component.html',
            styleUrls: ['./payment-released-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, TresurerDataService, UserService])
    ], PaymentReleasedListComponent);
    return PaymentReleasedListComponent;
}());
export { PaymentReleasedListComponent };
//# sourceMappingURL=payment-released-list.component.js.map