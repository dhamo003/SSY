import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';

@Component({
  selector: 'app-disabilityconfiguration',
  templateUrl: './disabilityconfiguration.component.html',
  styleUrls: ['./disabilityconfiguration.component.css']
})
export class DisabilityconfigurationComponent implements OnInit, OnDestroy {

    @ViewChild('successModal') public successModal: ModalDirective;

    private route$: Subscription;

    //ruleValid: boolean = false;
    logicValid: boolean = false;
    valueValid: boolean = false;
    //effectiveFromDateValid: boolean = false;
    //ruleValid1: boolean = false;
    logicValid1: boolean = false;
    valueValid1: boolean = false;
    
    effectiveFromDateValid2: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    disabilityBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    disConfig: BenefitConfigData = {} as BenefitConfigData;
    disConfig1: BenefitConfigData = {} as BenefitConfigData;
    
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
        this.logicValid1 = this.valueValid1 = true;
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
                    this.getDisabilityConfigDetailsById(this.noofTimesId);
                    this.nextId = this.noofTimesId + 1;
                }
                else {
                    if (this.mode == "edit") {
                        this.getDisabilityConfigDetailsById(this.noofTimesId);
                    }
                }
            }
        );
    }

    clearData() {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getDisabilityConfigDetailsById(this.noofTimesId);
        }
        else {
            this.disConfig = {} as BenefitConfigData;
            this.disConfig1 = {} as BenefitConfigData;
        }
    }

    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }

    validateDisabilityConfigData(disConfig: BenefitConfigData, disConfig1: BenefitConfigData): boolean {
        let isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.effectiveFromDateValid2 = true;

        if (disConfig.logic == undefined) { this.logicValid = isValid = false }
        if (disConfig1.logic == undefined) { this.logicValid1 = isValid = false }
        
        if (disConfig.value == undefined) { this.valueValid = isValid = false }
        if (disConfig1.value == undefined) { this.valueValid1 = isValid = false }
        
        if (disConfig.dateEffectiveFrom == undefined) { this.effectiveFromDateValid2 = isValid = false }

        return isValid;
    }

    saveDisabilityConfigData(disConfig: BenefitConfigData, disConfig1: BenefitConfigData) {
        let isValid = true;

        if (this.validateDisabilityConfigData(disConfig, disConfig1)) {

            this.successMessage = "";
            debugger;
            disConfig.noofTimes = this.nextId;
            disConfig.ruleName = "Date of Release Exceeding";
            disConfig.status = true;
            disConfig.dateEffectiveFrom = new Date(disConfig.dateEffectiveFrom);
            disConfig.dateEffectiveTo = new Date(disConfig.dateEffectiveTo);

            disConfig1.noofTimes = this.nextId;
            disConfig1.ruleName = "Reason For Delay Submission";
            disConfig1.status = true;
            disConfig1.dateEffectiveFrom = new Date(disConfig.dateEffectiveFrom);
            disConfig1.dateEffectiveTo = new Date(disConfig.dateEffectiveTo);

            this.disabilityBenefitConfigDetails[0] = disConfig;
            this.disabilityBenefitConfigDetails[1] = disConfig1;

            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveDisabilityConfigData(this.disabilityBenefitConfigDetails)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Disability Configuration was saved successfully";
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
        window.location.href = "PFConfig/disabilityconfigurationlist";
    }

    getDisabilityConfigDetailsById(noofTimesId: any) {
        this.dataService
            .GetDisabilityConfigDetailsById(noofTimesId)
            .subscribe((data: any) => {
                debugger;
                this.disabilityBenefitConfigDetails = data;

                if (this.disabilityBenefitConfigDetails != null && this.disabilityBenefitConfigDetails.length > 0) {
                    this.disConfig = this.disabilityBenefitConfigDetails[0];
                    this.disConfig1 = this.disabilityBenefitConfigDetails[1];
                }

                this.disConfig.dateEffectiveFrom = new Date(this.disConfig.dateEffectiveFrom);
                this.disConfig.dateEffectiveTo = new Date(this.disConfig.dateEffectiveTo);
            });
    }
}
