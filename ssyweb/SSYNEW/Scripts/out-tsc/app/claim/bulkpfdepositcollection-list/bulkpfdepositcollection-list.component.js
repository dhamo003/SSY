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
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
var BulkpfdepositcollectionListComponent = /** @class */ (function () {
    function BulkpfdepositcollectionListComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.pfCollectionDetails1 = [];
        this.pfCollectionDetails = [];
    }
    BulkpfdepositcollectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.pfDepositId = params["pfLegacyMasterId"];
        });
        this.viewCollections();
    };
    BulkpfdepositcollectionListComponent.prototype.viewCollections = function () {
        var _this = this;
        this.dataService
            .getLegacyPFCollections(this.pfDepositId)
            .subscribe(function (data) {
            debugger;
            _this.pfCollectionDetails = data;
        });
    };
    BulkpfdepositcollectionListComponent.prototype.viewCollections1 = function () {
        var _this = this;
        this.dataService
            .getCollections(this.pfDepositId)
            .subscribe(function (data) {
            debugger;
            _this.pfCollectionDetails1 = data;
        });
    };
    BulkpfdepositcollectionListComponent.prototype.cancelClick = function () {
        window.location.href = "Agent/submittedlegacypfdetails";
    };
    BulkpfdepositcollectionListComponent = __decorate([
        Component({
            selector: 'app-bulkpfdepositcollection-list',
            templateUrl: './bulkpfdepositcollection-list.component.html',
            styleUrls: ['./bulkpfdepositcollection-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], BulkpfdepositcollectionListComponent);
    return BulkpfdepositcollectionListComponent;
}());
export { BulkpfdepositcollectionListComponent };
//# sourceMappingURL=bulkpfdepositcollection-list.component.js.map