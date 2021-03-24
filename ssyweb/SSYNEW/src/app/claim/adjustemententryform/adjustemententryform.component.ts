import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { AdjustmentModel } from '../models/adjustment.model';
import { Beneficiary } from '../models/ben.model';
import { ModalDirective } from "ngx-bootstrap";
import { LovConstants } from '../pipes/constnts.model';
import { LovDetails } from '../models/Lov.model';

@Component({
    selector: 'app-adjustemententryform',
    templateUrl: './adjustemententryform.component.html',
    styleUrls: ['./adjustemententryform.component.css']
})
export class AdjustemententryformComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    successMessage: string;
    datePickerConfig: any;
    beneficiary: Beneficiary = {} as Beneficiary;
    adjustment: AdjustmentModel = {} as AdjustmentModel;
    isBenVisible: boolean = false;
    ssinValid: boolean = true;
    adjustmentDateReq: boolean = true;
    //adjustmentAmountReq: boolean = true;
    benAdjustmentAmountReq: boolean = true;
    govtAdjustmentAmountReq: boolean = true;
    typeIsValid: boolean = true;
    referencenumberReq: boolean = true;
    remarksReq: boolean = true;
    toDayDate: Date;
    adjustmentTypeLov: LovDetails[];
    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        this.toDayDate = new Date();
    }

    ngOnInit() {
        this.getAdjustmentType();
    }
    validateAdjustment(): boolean {
        let isValid = true;
        if (this.adjustment.ssinORPFNumber == undefined || this.adjustment.ssinORPFNumber == "") { this.ssinValid = isValid = false; }
        if (this.adjustment.adjustmentDate == undefined || this.adjustment.adjustmentDate == null) { this.adjustmentDateReq = isValid = false; }
        if (this.adjustment.benAdjustmentAmount == undefined || this.adjustment.benAdjustmentAmount == null || this.adjustment.benAdjustmentAmount.toString() == "") { this.benAdjustmentAmountReq = isValid = false; }
        if (this.adjustment.govtAdjustmentAmount == undefined || this.adjustment.govtAdjustmentAmount == null || this.adjustment.govtAdjustmentAmount.toString() == "") { this.govtAdjustmentAmountReq = isValid = false; }
        if (this.adjustment.adjustmentType == undefined || this.adjustment.adjustmentType == null) { this.typeIsValid = isValid = false; }
        //if (this.adjustment.reference == undefined || this.adjustment.reference == null || this.adjustment.reference.trim() == "") { this.referencenumberReq = isValid = false; }
        //if (this.adjustment.remarks == undefined || this.adjustment.remarks == null || this.adjustment.remarks.trim() == "") { this.remarksReq = isValid = false; }
        return isValid;
    }
    searchSSINNo(ssnNo: any) {
        this.isBenVisible = false;
        if (ssnNo != undefined && ssnNo.trim() != "") {
            this.clearValues();
            this.dataService
                .getAdjustmentBeneficiaryBasicDetailsByID(ssnNo.trim())
                .subscribe((data: any) => {
                    debugger;
                    this.beneficiary = data;
                    this.isBenVisible = true;
                });
        }
        else {
            this.beneficiary = {} as Beneficiary;
        }
    }
    saveAdjustment() {
        this.adjustment.benSno = this.beneficiary.benSno;
        if (this.validateAdjustment()) {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveAdjustment(this.adjustment)
                    .then((data: any) => {
                        //if (data) {
                        this.successMessage = "Adjustment is saved successfully";
                        this.successModal.show();
                        //}
                        //else {
                        //    this.successMessage = "Invalid transaction";
                        //    this.successModal.show();
                        //}
                    });
            }
        }
    }
    clearValues() {
        this.adjustment.adjustmentDate = null;
        this.adjustment.benAdjustmentAmount = null;
        this.adjustment.govtAdjustmentAmount = null;
        this.adjustment.adjustmentTypeId = 0;
        this.adjustment.reference = "";
        this.adjustment.remarks = "";
    }
    okClick() {
        this.clearValues()
        this.successModal.hide();
    }
    adjustmentTypeChange(args) {
        debugger;
        this.adjustment.adjustmentType = args.target.options[args.target.selectedIndex].text; 
    }
    getAdjustmentType() {
        this.dataService
            .getlovDetails(LovConstants.AdjustmentType)
            .subscribe((data: any) => {
                this.adjustmentTypeLov = data;
            });
    }
}

