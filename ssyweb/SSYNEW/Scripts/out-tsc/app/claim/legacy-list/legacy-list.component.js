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
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { pagination } from '../../claim/pipes/constnts.model';
var LegacyListComponent = /** @class */ (function () {
    //Paging props end
    function LegacyListComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    LegacyListComponent.prototype.ngOnInit = function () {
        //if (this.userService.user.userTpe == UserType.Inspector.toString()) {
        //    this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
        //}
        //else {
        this.getLegacyClaimsList(this.userService.user.userid, this.page, this.pageSize);
        //}
    };
    LegacyListComponent.prototype.getLegacyClaimsList = function (id, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getLegacyClaimsList(id, pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.legacyClaimsData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    LegacyListComponent.prototype.onreviewClick = function (item) {
        debugger;
        // this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view", statusId: item.statusId }], { skipLocationChange: true });
    };
    LegacyListComponent.prototype.changepage = function (page) {
        this.getLegacyClaimsList(this.userService.user.userid, this.page, this.pageSize);
    };
    LegacyListComponent = __decorate([
        Component({
            selector: 'app-legacy-list',
            templateUrl: './legacy-list.component.html',
            styleUrls: ['./legacy-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], LegacyListComponent);
    return LegacyListComponent;
}());
export { LegacyListComponent };
//# sourceMappingURL=legacy-list.component.js.map