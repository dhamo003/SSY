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
import { UserService } from '../../UserService';
import { ClaimConstants } from '../pipes/constnts.model';
var ClaimTrackComponent = /** @class */ (function () {
    function ClaimTrackComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsTrack = {};
        this.educationDetails = {};
        this.beneficiary = {};
    }
    ClaimTrackComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ClaimTrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.transactionId = params["transactionId"];
            _this.tranctionType = params["tranctionType"];
            _this.workflowId = params["workflowId"];
            _this.mode = params["mode"];
        });
        this.getClaimDetailsByClaimId(this.transactionId, ClaimConstants[this.tranctionType], this.workflowId);
    };
    ClaimTrackComponent.prototype.getClaimDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ClaimTrackComponent.prototype.onBackClaimClick = function () {
        if (this.mode == "referal") {
            this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "agentreferal") {
            this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });
        }
        else {
            if (this.userService.user.userid != undefined && this.userService.user.userid != 0 && this.userService.user.userid.toString() != "") {
                this.router.navigate(['claim/Claims'], { skipLocationChange: true });
            }
            else {
                this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
            }
        }
    };
    ClaimTrackComponent.prototype.formatDate = function (date) {
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
    ClaimTrackComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ClaimTrackComponent = __decorate([
        Component({
            selector: 'app-claim-track',
            templateUrl: './claim-track.component.html',
            styleUrls: ['./claim-track.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], ClaimTrackComponent);
    return ClaimTrackComponent;
}());
export { ClaimTrackComponent };
//# sourceMappingURL=claim-track.component.js.map