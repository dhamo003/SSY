import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BenefitConfigData } from 'src/app/models/benefitConfigData.model';

@Component({
    selector: 'app-educationconfiguration',
    templateUrl: './educationconfiguration.component.html',
    styleUrls: ['./educationconfiguration.component.css']
})
export class EducationconfigurationComponent implements OnInit, OnDestroy {

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
    effectiveFromDateValid2: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    educationBenefitConfigDetails: BenefitConfigData[] = [] as BenefitConfigData[];
    eduConfig: BenefitConfigData = {} as BenefitConfigData;
    eduConfig1: BenefitConfigData = {} as BenefitConfigData;
    eduConfig2: BenefitConfigData = {} as BenefitConfigData;
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
                    this.getEducationConfigDetailsById(this.noofTimesId);
                    this.nextId = this.noofTimesId + 1;
                }
                else {
                    if (this.mode == "edit") {
                        this.getEducationConfigDetailsById(this.noofTimesId);
                    }
                }
            }
        );
    }

    clearData() {
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;
        if (this.mode == "edit") {
            this.getEducationConfigDetailsById(this.noofTimesId);
        }
        else {
        this.eduConfig = {} as BenefitConfigData;
        this.eduConfig1 = {} as BenefitConfigData;
        this.eduConfig2 = {} as BenefitConfigData;
         }
    }

    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }

    validateEducationConfigData(eduConfig: BenefitConfigData, eduConfig1: BenefitConfigData, eduConfig2: BenefitConfigData): boolean {
        let isValid = true;
        this.logicValid = this.valueValid = true;
        this.logicValid1 = this.valueValid1 = true;
        this.logicValid2 = this.valueValid2 = this.effectiveFromDateValid2 = true;

        if (eduConfig.logic == undefined) { this.logicValid = isValid = false }
        if (eduConfig1.logic == undefined) { this.logicValid1 = isValid = false }
        if (eduConfig2.logic == undefined) { this.logicValid2 = isValid = false }
        if (eduConfig.value == undefined) { this.valueValid = isValid = false }
        if (eduConfig1.value == undefined) { this.valueValid1 = isValid = false }
        if (eduConfig2.value == undefined) { this.valueValid2 = isValid = false }
        if (eduConfig2.dateEffectiveFrom == undefined) { this.effectiveFromDateValid2 = isValid = false }

        return isValid;
    }

    saveEducationConfigData(eduConfig: BenefitConfigData, eduConfig1: BenefitConfigData, eduConfig2: BenefitConfigData) {
        let isValid = true;

        if (this.validateEducationConfigData(eduConfig, eduConfig1, eduConfig2)) {

            this.successMessage = "";
            debugger;
            eduConfig.noofTimes = this.nextId;
            eduConfig.ruleName = "Date of Admission Exceeding";
            eduConfig.status = true;
            eduConfig.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);

            eduConfig1.noofTimes = this.nextId;
            eduConfig1.ruleName = "Son Age Exceeding";
            eduConfig1.status = true;
            eduConfig1.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig1.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);

            eduConfig2.noofTimes = this.nextId;
            eduConfig2.ruleName = "MaxLimitExceeded";
            eduConfig2.status = true;
            eduConfig2.dateEffectiveFrom = new Date(eduConfig2.dateEffectiveFrom);
            eduConfig2.dateEffectiveTo = new Date(eduConfig2.dateEffectiveTo);

            this.educationBenefitConfigDetails[0] = eduConfig;
            this.educationBenefitConfigDetails[1] = eduConfig1;
            this.educationBenefitConfigDetails[2] = eduConfig2;

            debugger;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SaveEducationConfigData(this.educationBenefitConfigDetails)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Education Configuration was saved successfully";
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
        window.location.href = "PFConfig/educationconfigurationlist";
    }

    getEducationConfigDetailsById(noofTimesId: any) {
        this.dataService
            .GetEducationConfigDetailsById(noofTimesId)
            .subscribe((data: any) => {
                debugger;
                this.educationBenefitConfigDetails = data;

                if (this.educationBenefitConfigDetails != null && this.educationBenefitConfigDetails.length > 0) {
                    this.eduConfig = this.educationBenefitConfigDetails[0];
                    this.eduConfig1 = this.educationBenefitConfigDetails[1];
                    this.eduConfig2 = this.educationBenefitConfigDetails[2];
                }

                this.eduConfig2.dateEffectiveFrom = new Date(this.eduConfig2.dateEffectiveFrom);
                this.eduConfig2.dateEffectiveTo = new Date(this.eduConfig2.dateEffectiveTo);
            });
    }
}
