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
import { pagination } from '../../claim/pipes/constnts.model';
import { Router } from '@angular/router';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { UserService } from '../../UserService';
var ReceiptbooklistComponent = /** @class */ (function () {
    //Paging props end
    function ReceiptbooklistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.receiptBookData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    ReceiptbooklistComponent.prototype.ngOnInit = function () {
        this.getReceiptBooks(this.page, this.pageSize);
    };
    ReceiptbooklistComponent.prototype.getReceiptBooks = function (pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getReceiptBooks(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.receiptBookData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    ReceiptbooklistComponent.prototype.changepage = function (page) {
        this.getReceiptBooks(this.page, this.pageSize);
    };
    ReceiptbooklistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/receiptbook', { id: item.id, mode: "view" }], { skipLocationChange: true });
    };
    ReceiptbooklistComponent = __decorate([
        Component({
            selector: 'app-receiptbooklist',
            templateUrl: './receiptbooklist.component.html',
            styleUrls: ['./receiptbooklist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService, UserService])
    ], ReceiptbooklistComponent);
    return ReceiptbooklistComponent;
}());
export { ReceiptbooklistComponent };
//# sourceMappingURL=receiptbooklist.component.js.map