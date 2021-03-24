import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';

@Component({
  selector: 'app-deathconfiguration',
  templateUrl: './deathconfiguration.component.html',
  styleUrls: ['./deathconfiguration.component.css']
})
export class DeathconfigurationComponent implements OnInit, OnDestroy {

    @ViewChild('successModal') public successModal: ModalDirective;

    private route$: Subscription;

    //ruleValid: boolean = false;
    logicValid: boolean = false;
    valueValid: boolean = false;
    effectiveFromDateValid2: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    deathBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    eduConfig: BenefitConfigData = {} as BenefitConfigData;
    isSaveVisible: boolean = true;
    successMessage: string;
    rowId: number = 0;
    noofTimesId: number = 0;
    mode: string;
    status: any;
    nextId: number;

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
        this.logicValid = this.valueValid = true;
        this.effectiveFromDateValid2 = true;
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.rowId = params["rowId"];
                this.mode = params["mode"];
                this.status = params["status"];
                this.noofTimesId = Number(params["noofTimesId"]);
                if (this.mode == "view") {
                    this.isSaveVisible = false;
                }
                else {
                    this.isSaveVisible = true;
                }
                if (this.noofTimesId > 0) {
                    this.getDeathConfigDetailsById(this.noofTimesId);
                    this.nextId = this.noofTimesId + 1;
                }
                else {
                    if (this.mode == "edit") {
                        this.getDeathConfigDetailsById(this.noofTimesId);
                    }
                }
            });
    }

    clearData() {
        this.logicValid = this.valueValid = true;
       this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getDeathConfigDetailsById(this.noofTimesId);
        }
        else {
            this.eduConfig = {} as BenefitConfigData;
        }
    }

    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }

    validateDeathConfigData(eduConfig: BenefitConfigData): boolean {
        let isValid = true;
        this.logicValid = this.valueValid = true;
        this.effectiveFromDateValid2 = true;

        if (eduConfig.logic == undefined) { this.logicValid = isValid = false }
        
        if (eduConfig.value == undefined) { this.valueValid = isValid = false }
       
        if (eduConfig.dateEffectiveFrom == undefined) { this.effectiveFromDateValid2 = isValid = false }

        return isValid;
    }

    saveDeathConfigData(eduConfig: BenefitConfigData) {
        let isValid = true;

        if (this.validateDeathConfigData(eduConfig)) {

            this.successMessage = "";
            debugger;
            eduConfig.noofTimes = this.nextId;
            eduConfig.ruleName = "Date of Death Exceeding";
            eduConfig.status = true;
            eduConfig.dateEffectiveFrom = new Date(eduConfig.dateEffectiveFrom);
            eduConfig.dateEffectiveTo = new Date(eduConfig.dateEffectiveTo);

            this.deathBenefitConfigDetails[0] = eduConfig;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveDeathConfigData(this.deathBenefitConfigDetails)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Death Configuration was saved successfully";
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
        window.location.href = "Home/DeptDashboard";
    }

    getHistoryData() {
        window.location.href = "PFConfig/deathconfigurationlist";
    }

    getDeathConfigDetailsById(noofTimesId: any) {
        debugger;
        this.dataService
            .GetDeathConfigDetailsById(noofTimesId)
            .subscribe((data: any) => {
                debugger;
                this.deathBenefitConfigDetails = data;

                if (this.deathBenefitConfigDetails != null && this.deathBenefitConfigDetails.length > 0) {
                    this.eduConfig = this.deathBenefitConfigDetails[0];
                }

                this.eduConfig.dateEffectiveFrom = new Date(this.eduConfig.dateEffectiveFrom);
                this.eduConfig.dateEffectiveTo = new Date(this.eduConfig.dateEffectiveTo);
            });
    }
}
