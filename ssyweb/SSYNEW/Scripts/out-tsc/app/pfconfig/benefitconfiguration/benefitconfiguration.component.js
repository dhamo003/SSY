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
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { ClaimConstants } from 'src/app/claim/pipes/constnts.model';
var BenefitconfigurationComponent = /** @class */ (function () {
    function BenefitconfigurationComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.claimConfig = [];
    }
    BenefitconfigurationComponent.prototype.ngOnInit = function () {
        this.GetBenefitConfigDetails();
    };
    BenefitconfigurationComponent.prototype.GetBenefitConfigDetails = function () {
        var _this = this;
        debugger;
        this.dataService
            .GetBenefitConfigDetails()
            .subscribe(function (data) {
            debugger;
            _this.claimConfig = data;
        });
    };
    BenefitconfigurationComponent.prototype.onEditClick = function (item) {
        switch (item.claimMasterId) {
            case ClaimConstants.PF: {
                this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: 0, mode: "edit" }], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Education: {
                this.router.navigate(['pfconfig/educationconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.HealthFamily: {
                this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Death: {
                this.router.navigate(['pfconfig/deathconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Disability: {
                this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            default: break;
        }
    };
    BenefitconfigurationComponent.prototype.onHistoryClick = function (item) {
        switch (item.claimMasterId) {
            case ClaimConstants.PF: {
                this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Education: {
                this.router.navigate(['pfconfig/educationconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.HealthFamily: {
                this.router.navigate(['pfconfig/healthfamilyconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Death: {
                this.router.navigate(['pfconfig/deathconfigurationlist'], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Disability: {
                this.router.navigate(['pfconfig/disabilityconfigurationlist'], { skipLocationChange: true });
                break;
            }
            default: break;
        }
    };
    BenefitconfigurationComponent = __decorate([
        Component({
            selector: 'app-benefitconfiguration',
            templateUrl: './benefitconfiguration.component.html',
            styleUrls: ['./benefitconfiguration.component.css']
        }),
        __metadata("design:paramtypes", [Router, PFConfigDataService])
    ], BenefitconfigurationComponent);
    return BenefitconfigurationComponent;
}());
export { BenefitconfigurationComponent };
//# sourceMappingURL=benefitconfiguration.component.js.map