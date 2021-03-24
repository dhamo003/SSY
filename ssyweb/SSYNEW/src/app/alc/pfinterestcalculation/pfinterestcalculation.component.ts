import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FinancialYearModel } from 'src/app/models/financialYear.model';
import { DistrictModel } from 'src/app/models/districts.model';
import { BlockModel } from 'src/app/models/blocks.model';
import { PFInterestCalculationModel } from 'src/app/models/pfInterestCalculation.model';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-pfinterestcalculation',
  templateUrl: './pfinterestcalculation.component.html',
  styleUrls: ['./pfinterestcalculation.component.css']
})
export class PfinterestcalculationComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;

    route$: Subscription;
    financialYears: FinancialYearModel[];
    districts: DistrictModel[];
    blocks: BlockModel[];
    pfInterest: PFInterestCalculationModel = {} as PFInterestCalculationModel;
    districtValid: boolean = true;
    locationCodeValid: boolean = true;
    ssinFromValid: boolean = true;
    //ssinToValid: boolean = true;
    financialYearValid: boolean = true;
    successMessage: string;
    interestType: number=1;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService) { }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        this.GetDistricts();
        this.GetFinancialYears();
    }
    GetDistricts() {
        this.dataService
            .GetDistricts()
            .subscribe((data: any) => {
                this.districts = data;
            });
    }
    GetFinancialYears() {
        this.dataService
            .GetFinancialYears()
            .subscribe((data: any) => {
                this.financialYears = data;
            });
    }
    districtChange(districtId) {
        this.dataService
            .GetLocationCodes(districtId)
            .subscribe((data: any) => {
                this.blocks = data;
            });
    }
    calculatePFInterest() {
        
        if (this.validateDetails()) {
            if (this.pfInterest.districtId == 0) {
                this.pfInterest.locationId = 0;
            }
            if (this.pfInterest.ssinTo == undefined || this.pfInterest.ssinTo == null) {
                this.pfInterest.ssinTo = this.pfInterest.ssinFrom;
            } debugger;
            this.pfInterest.interestType = this.interestType;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .CalculatePFInterest(this.pfInterest)
                    .then((data: boolean) => {
                        debugger;
                        if (data) {
                            this.successMessage = "PF Interest Calculated Successfully";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
        }
    }
    validateDetails(): boolean {
        debugger;
        let isValid = true;
        this.districtValid = this.locationCodeValid = this.ssinFromValid = this.financialYearValid= true;
        if (this.pfInterest.districtId == -1 || this.pfInterest.districtId == undefined) { this.districtValid = isValid = false }
        if (this.pfInterest.districtId != 0)
            if (this.pfInterest.locationId == -1 || this.pfInterest.locationId == undefined) { this.locationCodeValid = isValid = false }
        if (this.pfInterest.ssinFrom == undefined) { this.ssinFromValid = isValid = false; }
        if (this.pfInterest.financialYearId == 0 || this.pfInterest.financialYearId == undefined) { this.financialYearValid = isValid = false }
        return isValid;
    }
    okClick() {
        this.successModal.hide();
        window.location.href = "alc/pfinterestcalculation";
    }
    radioChange(id: any) {
        this.interestType = id;
    }
}
