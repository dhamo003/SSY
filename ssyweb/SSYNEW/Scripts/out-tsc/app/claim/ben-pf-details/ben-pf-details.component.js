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
import { UserService } from 'src/app/UserService';
import { ClaimDataService } from '../services/claim-data.service';
import { pagination, UserType } from '../pipes/constnts.model';
var BenPfDetailsComponent = /** @class */ (function () {
    function BenPfDetailsComponent(router, route, dataService, user) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.user = user;
        this.benPFDetails = [];
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
        this.ssnNoValid = true;
        this.isVisibleBenPFDetails = false;
        this.isMessageVisible = false;
    }
    BenPfDetailsComponent.prototype.ngOnInit = function () {
    };
    BenPfDetailsComponent.prototype.searchSSINNo = function (id) {
        if (id != undefined && id.trim() != "") {
            this.getBeneficiaryPFDetails(id, this.page, this.pageSize);
        }
        else
            this.ssnNoValid = false;
    };
    BenPfDetailsComponent.prototype.getBeneficiaryPFDetails = function (id, page, pageSize) {
        var _this = this;
        this.dataService
            .getBeneficiaryPFDetails(id.trim(), page, pageSize)
            .subscribe(function (data) {
            debugger;
            if (data != null && (data.rowCount > 0)) {
                _this.isVisibleBenPFDetails = true;
                _this.benPFDetails = data.results;
                _this.totalRows = data.rowCount;
                _this.isMessageVisible = false;
            }
            else {
                _this.isVisibleBenPFDetails = false;
                _this.isMessageVisible = true;
            }
        });
    };
    BenPfDetailsComponent.prototype.changePage = function (page) {
        debugger;
        this.getBeneficiaryPFDetails(this.ssin, page, this.pageSize);
    };
    BenPfDetailsComponent.prototype.cancelClick = function () {
        debugger;
        if (this.user.user.userTpe == UserType.Beneficiary.toString())
            // this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
            window.location.href = "Home/Dashboard";
        else
            window.location.href = "Home/DeptDashboard";
    };
    BenPfDetailsComponent = __decorate([
        Component({
            selector: 'app-ben-pf-details',
            templateUrl: './ben-pf-details.component.html',
            styleUrls: ['./ben-pf-details.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], BenPfDetailsComponent);
    return BenPfDetailsComponent;
}());
export { BenPfDetailsComponent };
//# sourceMappingURL=ben-pf-details.component.js.map