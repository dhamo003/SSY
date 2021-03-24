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
var PfconfigurationlistComponent = /** @class */ (function () {
    //Paging props end
    function PfconfigurationlistComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.configurationData = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    PfconfigurationlistComponent.prototype.ngOnInit = function () {
        this.getPFConfigurations(this.page, this.pageSize);
    };
    PfconfigurationlistComponent.prototype.getPFConfigurations = function (pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getPFConfigurations(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.configurationData = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfconfigurationlistComponent.prototype.changepage = function (page) {
        this.getPFConfigurations(this.page, this.pageSize);
    };
    PfconfigurationlistComponent.prototype.onEditClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "edit" }], { skipLocationChange: true });
    };
    PfconfigurationlistComponent.prototype.onViewClick = function (item) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "view" }], { skipLocationChange: true });
    };
    PfconfigurationlistComponent.prototype.cancelClick = function () {
        window.location.href = "pfconfig/benefitconfiguration";
    };
    PfconfigurationlistComponent = __decorate([
        Component({
            selector: 'app-pfconfigurationlist',
            templateUrl: './pfconfigurationlist.component.html',
            styleUrls: ['./pfconfigurationlist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService, UserService])
    ], PfconfigurationlistComponent);
    return PfconfigurationlistComponent;
}());
export { PfconfigurationlistComponent };
//# sourceMappingURL=pfconfigurationlist.component.js.map