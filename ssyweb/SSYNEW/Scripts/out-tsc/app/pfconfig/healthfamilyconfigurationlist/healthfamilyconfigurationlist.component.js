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
var HealthfamilyconfigurationlistComponent = /** @class */ (function () {
    function HealthfamilyconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.helConfigList = [];
    }
    HealthfamilyconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetHealthFamilyConfigDetails(this.page, this.pageSize);
    };
    HealthfamilyconfigurationlistComponent.prototype.GetHealthFamilyConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetHealthFamilyConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.helConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    HealthfamilyconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetHealthFamilyConfigDetails(page, this.pageSize);
    };
    HealthfamilyconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    HealthfamilyconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    HealthfamilyconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    HealthfamilyconfigurationlistComponent = __decorate([
        Component({
            selector: 'app-healthfamilyconfigurationlist',
            templateUrl: './healthfamilyconfigurationlist.component.html',
            styleUrls: ['./healthfamilyconfigurationlist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], HealthfamilyconfigurationlistComponent);
    return HealthfamilyconfigurationlistComponent;
}());
export { HealthfamilyconfigurationlistComponent };
//# sourceMappingURL=healthfamilyconfigurationlist.component.js.map