import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';

@Component({
  selector: 'app-healthfamilyconfiguration',
  templateUrl: './healthfamilyconfiguration.component.html',
  styleUrls: ['./healthfamilyconfiguration.component.css']
})
export class HealthfamilyconfigurationComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;

    private route$: Subscription;

    //ruleValid: boolean = false;
    logicValid: boolean = false;
    valueValid: boolean = false;
    //effectiveFromDateValid: boolean = false;
    //ruleValid1: boolean = false;
    logicValid1: boolean = false;
    valueValid1: boolean = false;
    //effectiveFromDateValid1: boolean = false;
    //ruleValid2: boolean = false;
    logicValid2: boolean = false;
    valueValid2: boolean = false;
    logicValid3: boolean = false;
    valueValid3: boolean = false;
    logicValid4: boolean = false;
    valueValid4: boolean = false;
    effectiveFromDateValid2: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    healthBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    helConfig: BenefitConfigData = {} as BenefitConfigData;
    helConfig1: BenefitConfigData = {} as BenefitConfigData;
    helConfig2: BenefitConfigData = {} as BenefitConfigData;
    helConfig3: BenefitConfigData = {} as BenefitConfigData;
    helConfig4: BenefitConfigData = {} as BenefitConfigData;
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
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;
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
                    this.getHealthFamilyConfigDetailsById(this.noofTimesId);
                    this.nextId = this.noofTimesId + 1;
                }
                else {
                    if (this.mode == "edit") {
                        this.getHealthFamilyConfigDetailsById(this.noofTimesId);
                    }
                }
            }
        );
    }

    clearData() {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;
        if (this.mode == "edit") {
            this.getHealthFamilyConfigDetailsById(this.noofTimesId);
        }
        else {
            this.helConfig = {} as BenefitConfigData;
            this.helConfig1 = {} as BenefitConfigData;
            this.helConfig2 = {} as BenefitConfigData;
            this.helConfig3 = {} as BenefitConfigData;
            this.helConfig4 = {} as BenefitConfigData;
         }
    }

    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }

    validateHealthFamilyConfigData(helConfig: BenefitConfigData, helConfig1: BenefitConfigData, helConfig2: BenefitConfigData, helConfig3: BenefitConfigData, helConfig4: BenefitConfigData): boolean {
        let isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        this.logicValid3 = this.valueValid3 = true;
        this.logicValid4 = this.valueValid4 = true;

        if (helConfig.logic == undefined) { this.logicValid = isValid = false }
        if (helConfig1.logic == undefined) { this.logicValid1 = isValid = false }
        if (helConfig2.logic == undefined) { this.logicValid2 = isValid = false }
        if (helConfig3.logic == undefined) { this.logicValid3 = isValid = false }
        if (helConfig4.logic == undefined) { this.logicValid4 = isValid = false }

        if (helConfig.value == undefined) { this.valueValid = isValid = false }
        if (helConfig1.value == undefined) { this.valueValid1 = isValid = false }
        if (helConfig2.value == undefined) { this.valueValid2 = isValid = false }
        if (helConfig3.value == undefined) { this.valueValid3 = isValid = false }
        if (helConfig4.value == undefined) { this.valueValid4 = isValid = false }
        if (helConfig2.dateEffectiveFrom == undefined) { this.effectiveFromDateValid2 = isValid = false }

        return isValid;
    }

    saveHealthFamilyConfigData(helConfig: BenefitConfigData, helConfig1: BenefitConfigData, helConfig2: BenefitConfigData, helConfig3: BenefitConfigData, helConfig4: BenefitConfigData) {
        let isValid = true;

        if (this.validateHealthFamilyConfigData(helConfig, helConfig1, helConfig2, helConfig3, helConfig4)) {

            this.successMessage = "";
            debugger;
            helConfig.noofTimes = this.nextId;
            helConfig.ruleName = "Date of First Appointment Exceeding";
            helConfig.status = true;
            helConfig.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);

            helConfig1.noofTimes = this.nextId;
            helConfig1.ruleName = "Date of Discharge Exceeding";
            helConfig1.status = true;
            helConfig1.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig1.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);

            helConfig2.noofTimes = this.nextId;
            helConfig2.ruleName = "Loss Of Employment Date Differnce";
            helConfig2.status = true;
            helConfig2.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig2.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);

            helConfig3.noofTimes = this.nextId;
            helConfig3.ruleName = "Loss Of Employment Amount Exceeding";
            helConfig3.status = true;
            helConfig3.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig3.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);

            helConfig4.noofTimes = this.nextId;
            helConfig4.ruleName = "Reason For Delay Submission";
            helConfig4.status = true;
            helConfig4.dateEffectiveFrom = new Date(helConfig2.dateEffectiveFrom);
            helConfig4.dateEffectiveTo = new Date(helConfig2.dateEffectiveTo);

            this.healthBenefitConfigDetails[0] = helConfig;
            this.healthBenefitConfigDetails[1] = helConfig1;
            this.healthBenefitConfigDetails[2] = helConfig2;
            this.healthBenefitConfigDetails[3] = helConfig3;
            this.healthBenefitConfigDetails[4] = helConfig4;

            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveHealthFamilyConfigData(this.healthBenefitConfigDetails)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Health&Family Configuration was saved successfully";
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
        window.location.href = "PFConfig/healthfamilyconfigurationlist";
    }

    getHealthFamilyConfigDetailsById(noofTimesId: any) {
        this.dataService
            .GetHealthFamilyConfigDetailsById(noofTimesId)
            .subscribe((data: any) => {
                debugger;
                this.healthBenefitConfigDetails = data;

                if (this.healthBenefitConfigDetails != null && this.healthBenefitConfigDetails.length > 0) {
                    this.helConfig = this.healthBenefitConfigDetails[0];
                    this.helConfig1 = this.healthBenefitConfigDetails[1];
                    this.helConfig2 = this.healthBenefitConfigDetails[2];
                    this.helConfig3 = this.healthBenefitConfigDetails[3];
                    this.helConfig4 = this.healthBenefitConfigDetails[4];
                }

                this.helConfig2.dateEffectiveFrom = new Date(this.helConfig2.dateEffectiveFrom);
                this.helConfig2.dateEffectiveTo = new Date(this.helConfig2.dateEffectiveTo);
            });
    }

}
