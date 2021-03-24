import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { PFConfigurationModel } from '../../models/pfconfiguration.model';
import { ModalDirective } from "ngx-bootstrap";
import { Subscription } from 'rxjs';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { BsDatepickerConfig } from "ngx-bootstrap";

@Component({
    selector: 'app-pfconfiguration',
    templateUrl: './pfconfiguration.component.html',
    styleUrls: ['./pfconfiguration.component.css']
})
export class PfconfigurationComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    //@ViewChild('historyModal') public historyModal: ModalDirective;
    route$: Subscription;
    effectiveFromDateValid: boolean = true;
    effectiveToDateValid: boolean = true;

    benMonthlyContributionValid: boolean = true;
    govMonthlyContributionValid: boolean = true;
    minAgeValid: boolean = true;
    maxAgeValid: boolean = true;
    avgFamilyIncomeValid: boolean = true;
    lockPeriodValid: boolean = true;
    inactivePeriodValid: boolean = true;
    maturityAgeValid: boolean = true;
    logic2Valid: boolean = true;
    collectionCutOffValid: boolean = true;
    interestRateValid: boolean = true;
    collectionCutOffRange: boolean = true;
    agentCollectionLimitValid: boolean = true;

    configuration: PFConfigurationModel = {} as PFConfigurationModel;
    datePickerConfig: Partial<BsDatepickerConfig>;
    successMessage: string;
    pfConfigurationId: number;
    mode: string = "add";
    maxDate: Date;
    //public configurationData: PFConfigurationModel[] = [];
    totalRows: any;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: PFConfigDataService) {
        this.maxDate = new Date();
        //this.mode = "add";
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
    }

    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.pfConfigurationId = params["pfConfigurationId"] != null ? Number(params["pfConfigurationId"]) : 0;
                this.mode = params["mode"] == undefined ? 'add' : params["mode"];
                if (this.mode == "edit" || this.mode == "view")
                    this.getConfigurationDetails(this.pfConfigurationId);
            }
        );
        //console.log(this.configuration);
    }
    getConfigurationDetails(id: any) {
        this.dataService
            .getPFConfigurationDetails(id)
            .subscribe((data: any) => {
                debugger;
                this.configuration = data;

                this.configuration.dateEffectiveFrom = new Date(this.configuration.dateEffectiveFrom);
                this.configuration.dateEffectiveTo = new Date(this.configuration.dateEffectiveTo);
            });
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }

    saveContribution(configurationModel: PFConfigurationModel) {
        if (this.validateConfiguration()) {
            if (this.mode != "view") {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .savePFConfiguration(this.configuration)
                        .then((data: any) => {
                            this.successMessage = "Configuration updated successfully";
                            this.successModal.show();
                        });
                }

            }

        }
    }
    validateConfiguration() {
        let isValid = true;
        this.effectiveFromDateValid = this.effectiveToDateValid = this.benMonthlyContributionValid = this.govMonthlyContributionValid = true;
        this.minAgeValid = this.maxAgeValid = this.avgFamilyIncomeValid = this.lockPeriodValid = this.inactivePeriodValid = this.maturityAgeValid = true;
        this.logic2Valid = this.collectionCutOffValid = this.collectionCutOffRange = this.interestRateValid = true;

        if (this.configuration.dateEffectiveFrom == undefined) { this.effectiveFromDateValid = isValid = false }
        if (this.configuration.dateEffectiveTo == undefined) { this.effectiveToDateValid = isValid = false }
        if (this.configuration.beneficiaryPFContribution == undefined) { this.benMonthlyContributionValid = isValid = false }
        if (this.configuration.governmentPFContribution == undefined) { this.govMonthlyContributionValid = isValid = false }
        if (this.configuration.minAge == undefined) { this.minAgeValid = isValid = false }
        if (this.configuration.maxAge == undefined) { this.maxAgeValid = isValid = false }
        if (this.configuration.averageMonthlyIncome == undefined) { this.avgFamilyIncomeValid = isValid = false }
        if (this.configuration.pfLockingPeriodMonths == undefined) { this.lockPeriodValid = isValid = false }
        if (this.configuration.inActivePeriodMonths == undefined) { this.inactivePeriodValid = isValid = false }
        if (this.configuration.maturityAge == undefined) { this.maturityAgeValid = isValid = false }
        if (this.configuration.maturityAgeLogic == undefined) { this.logic2Valid = isValid = false }
        debugger;
        if (this.configuration.collectionCutoff == undefined) { this.collectionCutOffValid = isValid = false }
        else if (this.configuration.collectionCutoff < 1 || this.configuration.collectionCutoff > 30) { this.collectionCutOffRange = isValid = false }

        if (this.configuration.pfInterestRate == undefined) { this.interestRateValid = isValid = false }
        if (this.configuration.agentCollectionLimit == undefined) { this.agentCollectionLimitValid = isValid = false }


        return isValid;
    }
    clearContribution() {
        debugger;
        if (this.mode == "edit") {
            this.getConfigurationDetails(this.pfConfigurationId);
        }
        if (this.mode == "add") {
            this.configuration = {} as PFConfigurationModel;
        }
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }

    showHistory() {
        this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
        //this.getPFConfigurations(1,10);
        //this.historyModal.show();
    }
    okClick() {
        this.successModal.hide();
    }
    //getPFConfigurations(pageNo?: any, pageSize?: any) {
    //    this.dataService
    //        .getPFConfigurations(pageNo, pageSize)
    //        .subscribe((data: any) => {
    //            this.configurationData = data.results;
    //            this.totalRows = data.rowCount;
    //        });
    //}
}