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
import { UserService } from '../../UserService';
import { ClaimConstants } from '../../claim/pipes/constnts.model';
import { DlcDataService } from '../services/dlc-data.service';
var TimetrackComponent = /** @class */ (function () {
    function TimetrackComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsTrack = {};
        this.educationDetails = {};
        this.beneficiary = {};
    }
    TimetrackComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    TimetrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.transactionId = params["transactionId"];
            _this.tranctionType = params["tranctionType"];
            _this.mode = params["mode"];
            _this.workflowId = params["workflowId"];
        });
        this.getClaimDetailsByClaimId(this.transactionId, ClaimConstants[this.tranctionType], this.workflowId);
    };
    TimetrackComponent.prototype.getClaimDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    TimetrackComponent.prototype.onBackClaimClick = function () {
        if (this.mode == "reject") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "sendback") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "pending") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        if (this.mode == "approval") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        if (this.mode == "claimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
    };
    TimetrackComponent.prototype.formatDate = function (date) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        var dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    };
    TimetrackComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    TimetrackComponent = __decorate([
        Component({
            selector: 'app-timetrack',
            templateUrl: './timetrack.component.html',
            styleUrls: ['./timetrack.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, DlcDataService, UserService])
    ], TimetrackComponent);
    return TimetrackComponent;
}());
export { TimetrackComponent };
//# sourceMappingURL=timetrack.component.js.map