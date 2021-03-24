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
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
var DeathconfigurationlistComponent = /** @class */ (function () {
    function DeathconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.deathConfigList = [];
    }
    DeathconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetDeathConfigDetails(this.page, this.pageSize);
    };
    DeathconfigurationlistComponent.prototype.GetDeathConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetDeathConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.deathConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    DeathconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetDeathConfigDetails(page, this.pageSize);
    };
    DeathconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DeathconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DeathconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DeathconfigurationlistComponent = __decorate([
        Component({
            selector: 'app-deathconfigurationlist',
            templateUrl: './deathconfigurationlist.component.html',
            styleUrls: ['./deathconfigurationlist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], DeathconfigurationlistComponent);
    return DeathconfigurationlistComponent;
}());
export { DeathconfigurationlistComponent };
//# sourceMappingURL=deathconfigurationlist.component.js.map