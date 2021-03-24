import { Component, OnInit } from '@angular/core';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { ClaimTypes } from 'src/app/models/ClaimTypes.model';
import { ClaimConstants } from 'src/app/claim/pipes/constnts.model';

@Component({
  selector: 'app-benefitconfiguration',
  templateUrl: './benefitconfiguration.component.html',
  styleUrls: ['./benefitconfiguration.component.css']
})
export class BenefitconfigurationComponent implements OnInit {

    public claimConfig: ClaimTypes[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        
        this.GetBenefitConfigDetails();
  }
    GetBenefitConfigDetails() {
        debugger;
        this.dataService
            .GetBenefitConfigDetails()
            .subscribe((data: any) => {
                debugger;
                this.claimConfig = data;
            });
    }

    onEditClick(item: any) {
        switch (item.claimMasterId) {
            case ClaimConstants.PF: {
                this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: 0, mode: "edit"}], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.Education: {
                this.router.navigate(['pfconfig/educationconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0 }], { skipLocationChange: true });
                break;
            }
            case ClaimConstants.HealthFamily: {
                this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: 0, status: true, mode: "edit", noofTimesId: 0}], { skipLocationChange: true });
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
    }
    onHistoryClick(item: any) {
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
        
    }
}
