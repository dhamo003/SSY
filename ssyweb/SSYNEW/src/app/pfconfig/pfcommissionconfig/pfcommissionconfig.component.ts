import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BsDatepickerConfig, ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PFCommissionConfig } from 'src/app/models/pfCommissionConfig.model';

@Component({
  selector: 'app-pfcommissionconfig',
  templateUrl: './pfcommissionconfig.component.html',
  styleUrls: ['./pfcommissionconfig.component.css']
})
export class PfcommissionconfigComponent implements OnInit, OnDestroy {
    @ViewChild('successModal') public successModal: ModalDirective;

    private route$: Subscription;
    datePickerConfig: Partial<BsDatepickerConfig>;
    pfConfig: PFCommissionConfig = {} as PFCommissionConfig;
    commissionCodeValid: boolean = false;
    percentageOnNormalAmountValid: boolean = false;
    fixedNormalAmountValid: boolean = false;
    effectiveDateFromValid: boolean = false;
    effectiveDateToValid: boolean = false;
    commissionTypeValid: boolean = false;
    agentTypeValid: boolean = false;
    successMessage: string;
    commissionConfigId: number = 0;
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
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.commissionConfigId = params["commissionConfigId"];
                this.mode = params["mode"];
                if (this.mode == "view") {
                    this.isSaveVisible = false;
                }
                else {
                    this.isSaveVisible = true;
                }
                if (this.commissionConfigId > 0) {

                    this.getPFCommissionConfigDetailsById(this.commissionConfigId);
                }
            }
        );
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = this.commissionTypeValid = this.agentTypeValid= true;
    }

    clearData() {
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = this.commissionTypeValid = this.agentTypeValid = true;
        if (this.mode == "edit") {
            this.getPFCommissionConfigDetailsById(this.commissionConfigId);
        }
        else {
            this.pfConfig = {} as PFCommissionConfig;
        }
    }

    validatePFCommissionConfigData(pfConfigData: PFCommissionConfig): boolean {
        let isValid = true;
        this.commissionCodeValid = this.percentageOnNormalAmountValid = this.fixedNormalAmountValid = this.effectiveDateFromValid = this.effectiveDateToValid = true;

        if (pfConfigData.commissionCode == undefined) { this.commissionCodeValid = isValid = false }
        if (pfConfigData.percentageOnNormalAmount <= 0 || pfConfigData.percentageOnNormalAmount == undefined) { this.percentageOnNormalAmountValid = isValid = false }
        if (pfConfigData.fixedNormalAmount <= 0 || pfConfigData.fixedNormalAmount == undefined) { this.fixedNormalAmountValid = isValid = false }
        if (pfConfigData.effectiveDateFrom == undefined) { this.effectiveDateFromValid = isValid = false }
        if (pfConfigData.effectiveDateTo == undefined) { this.effectiveDateToValid = isValid = false }
        if (pfConfigData.commissionType == undefined) { this.commissionTypeValid = isValid = false }
        if (pfConfigData.agentType == undefined) { this.agentTypeValid = isValid = false }

        return isValid;
    }
    saveClaimsData(pfConfigData: PFCommissionConfig) {
        let isValid = true;

        if (this.validatePFCommissionConfigData(pfConfigData)) {

            this.successMessage = "";
            //  console.log(pfConfigData);

            pfConfigData.status = 1;

            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .SavePFCommissionConfigData(pfConfigData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "PF Commission Configuration was saved successfully";
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

        window.location.href = "PFConfig/pfcommissionconfig";

    }

    getHistoryData() {
        window.location.href = "PFConfig/pfcommissionconfiglist";
    }

    getPFCommissionConfigDetailsById(id: any) {
        this.dataService
            .GetPFCommissionConfigDetailsById(id)
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
