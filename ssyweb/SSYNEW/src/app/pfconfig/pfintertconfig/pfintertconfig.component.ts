import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PFInterestConfig } from 'src/app/models/pfInterestConfig.model';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-pfintertconfig',
    templateUrl: './pfintertconfig.component.html',
    styleUrls: ['./pfintertconfig.component.css']
})
export class PfintertconfigComponent implements OnInit, OnDestroy {
    @ViewChild('successModal') public successModal: ModalDirective;

    private route$: Subscription;

    pfConfig: PFInterestConfig = {} as PFInterestConfig;
    interestCodeValid: boolean = false;
    interestCalculationDayValid: boolean = false;
    interestRateValid: boolean = false;
    effectiveFromDateValid: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    successMessage: string;
    interestConfigId: number = 0;
    mode: string = "add";
    isSaveVisible: boolean = true;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: PFConfigDataService) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }

    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.interestConfigId = params["interestConfigId"];
                this.mode = params["mode"];
                if (this.mode == "view") {
                    this.isSaveVisible = false;
                }
                else {
                    this.isSaveVisible = true;
                }
                if (this.interestConfigId > 0) {

                    this.getPFInterestConfigDetailsById(this.interestConfigId);
                }
            }
        );
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true;
    }

    clearData() {
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true; debugger;
        if (this.mode == "edit") {
            this.getPFInterestConfigDetailsById(this.interestConfigId);
        }
        else {
            this.pfConfig = {} as PFInterestConfig;
        }
    }

    validatePFInterestConfigData(pfConfigData: PFInterestConfig): boolean {
        let isValid = true;
        this.interestCodeValid = this.interestCalculationDayValid = this.interestRateValid = this.effectiveFromDateValid = true;

        if (pfConfigData.interestCode == undefined) { this.interestCodeValid = isValid = false }
        if (pfConfigData.interestCalculationDay <= 0 || pfConfigData.interestCalculationDay == undefined) { this.interestCalculationDayValid = isValid = false }
        if (pfConfigData.interestRate <= 0 || pfConfigData.interestRate == undefined) { this.interestRateValid = isValid = false }
        if (pfConfigData.effectiveDateFrom == undefined) { this.effectiveFromDateValid = isValid = false }

        return isValid;
    }

    saveClaimsData(pfConfigData: PFInterestConfig) {
        let isValid = true;

        if (this.validatePFInterestConfigData(pfConfigData)) {

            this.successMessage = "";
            //  console.log(pfConfigData);

            pfConfigData.status = 1;

            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SavePFInterestConfigData(pfConfigData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "PF Interest Configuration was saved successfully";
                            this.successModal.show();
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                            this.successModal.show();
                        }
                    });
            }

        }
        else {
            return;
        }


    }

    okClick() {
        //this.successModal.hide();

        window.location.href = "PFConfig/pfinterestconfig";

    }

    getHistoryData() {
        window.location.href = "PFConfig/pfinterestconfiglist";
    }

    getPFInterestConfigDetailsById(id: any) {
        this.dataService
            .GetPFInterestConfigDetailsById(id)
            .subscribe((data: any) => {
                debugger;
                this.pfConfig = data;

                this.pfConfig.effectiveDateFrom = new Date(this.pfConfig.effectiveDateFrom);
                this.pfConfig.effectiveDateTo = new Date(this.pfConfig.effectiveDateTo);
            });
    }

    cancelClick() {
        window.location.href = "Home/DeptDashboard";
    }
}
