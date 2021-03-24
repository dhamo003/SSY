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
var DisabilityconfigurationlistComponent = /** @class */ (function () {
    function DisabilityconfigurationlistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.disConfigList = [];
    }
    DisabilityconfigurationlistComponent.prototype.ngOnInit = function () {
        this.GetDisabilityConfigDetails(this.page, this.pageSize);
    };
    DisabilityconfigurationlistComponent.prototype.GetDisabilityConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetDisabilityConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.disConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    DisabilityconfigurationlistComponent.prototype.changePage = function (page) {
        this.GetDisabilityConfigDetails(page, this.pageSize);
    };
    DisabilityconfigurationlistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DisabilityconfigurationlistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    };
    DisabilityconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    DisabilityconfigurationlistComponent = __decorate([
        Component({
            selector: 'app-disabilityconfigurationlist',
            templateUrl: './disabilityconfigurationlist.component.html',
            styleUrls: ['./disabilityconfigurationlist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], DisabilityconfigurationlistComponent);
    return DisabilityconfigurationlistComponent;
}());
export { DisabilityconfigurationlistComponent };
//# sourceMappingURL=disabilityconfigurationlist.component.js.map