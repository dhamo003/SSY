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
var PfcommissionconfiglistComponent = /** @class */ (function () {
    function PfcommissionconfiglistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.pfConfigList = [];
    }
    PfcommissionconfiglistComponent.prototype.ngOnInit = function () {
        this.GetPFCommissionConfigDetails(this.page, this.pageSize);
    };
    PfcommissionconfiglistComponent.prototype.GetPFCommissionConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPFCommissionConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pfConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfcommissionconfiglistComponent.prototype.changePage = function (page) {
        this.GetPFCommissionConfigDetails(page, this.pageSize);
    };
    PfcommissionconfiglistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "edit" }], { skipLocationChange: true });
    };
    PfcommissionconfiglistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "view" }], { skipLocationChange: true });
    };
    PfcommissionconfiglistComponent = __decorate([
        Component({
            selector: 'app-pfcommissionconfiglist',
            templateUrl: './pfcommissionconfiglist.component.html',
            styleUrls: ['./pfcommissionconfiglist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], PfcommissionconfiglistComponent);
    return PfcommissionconfiglistComponent;
}());
export { PfcommissionconfiglistComponent };
//# sourceMappingURL=pfcommissionconfiglist.component.js.map