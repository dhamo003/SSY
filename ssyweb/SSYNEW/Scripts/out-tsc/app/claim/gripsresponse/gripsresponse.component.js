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
import { UserService } from 'src/app/UserService';
import { ClaimDataService } from '../services/claim-data.service';
import { Router, ActivatedRoute } from '@angular/router';
var GripsresponseComponent = /** @class */ (function () {
    function GripsresponseComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.gripsResponse = {};
    }
    //@HostListener('window:beforeunload', ['$event'])
    //unloadNotification($event: any) {
    //    debugger;
    //    $event.returnValue = true;
    //    this.router.navigate(['.'], { relativeTo: this.route.parent });
    //}
    GripsresponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.gripsResponse.eNCDATA = this.userService.user.encData;
        this.gripsResponse.serviceProvider = this.userService.user.serviceProvider;
        var x = this.route.parent;
        //Transaction Status => 1 success
        //                      2 pending
        //                      3 failure
        if (this.userService.user.isDoubleVerification) {
            this.dataService
                .decryptGripsDoubleVerificationResponse(this.gripsResponse)
                .then(function (data) {
                debugger;
                if (data == 1)
                    _this.status = "Payment is done successfully";
                else if (data == 2)
                    _this.status = "Payment is Pending";
                else
                    _this.status = "Payment Failed";
            });
        }
        else {
            this.dataService
                .decryptGripsResponse(this.gripsResponse)
                .then(function (data) {
                debugger;
                if (data == 1)
                    _this.status = "Payment is done successfully";
                else if (data == 2)
                    _this.status = "Payment is Pending";
                else
                    _this.status = "Payment Failed";
            });
        }
    };
    GripsresponseComponent = __decorate([
        Component({
            selector: 'app-gripsresponse',
            templateUrl: './gripsresponse.component.html',
            styleUrls: ['./gripsresponse.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ClaimDataService, UserService])
    ], GripsresponseComponent);
    return GripsresponseComponent;
}());
export { GripsresponseComponent };
//# sourceMappingURL=gripsresponse.component.js.map