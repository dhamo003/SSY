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
var PfinterestconfiglistComponent = /** @class */ (function () {
    function PfinterestconfiglistComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.pfConfigList = [];
    }
    PfinterestconfiglistComponent.prototype.ngOnInit = function () {
        this.GetPFInterestConfigDetails(this.page, this.pageSize);
    };
    PfinterestconfiglistComponent.prototype.GetPFInterestConfigDetails = function (pageNo, pageSize) {
        var _this = this;
        debugger;
        this.dataService
            .GetPFInterestConfigDetails(pageNo, pageSize)
            .subscribe(function (data) {
            debugger;
            _this.pfConfigList = data.results;
            _this.totalRows = data.rowCount;
        });
    };
    PfinterestconfiglistComponent.prototype.changePage = function (page) {
        this.GetPFInterestConfigDetails(page, this.pageSize);
    };
    PfinterestconfiglistComponent.prototype.onEditClick = function (item) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "edit" }], { skipLocationChange: true });
    };
    PfinterestconfiglistComponent.prototype.onViewClick = function (item) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "view" }], { skipLocationChange: true });
    };
    PfinterestconfiglistComponent = __decorate([
        Component({
            selector: 'app-pfinterestconfiglist',
            templateUrl: './pfinterestconfiglist.component.html',
            styleUrls: ['./pfinterestconfiglist.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], PfinterestconfiglistComponent);
    return PfinterestconfiglistComponent;
}());
export { PfinterestconfiglistComponent };
//# sourceMappingURL=pfinterestconfiglist.component.js.map