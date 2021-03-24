import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalDirective } from "ngx-bootstrap";
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { LegacyClaims } from '../../models/LegacyClaims';
import { UserType, LovConstants } from '../pipes/constnts.model';
import { LovDetails } from '../../claim/models/Lov.model';

@Component({
    selector: 'app-legacy-claim-entry',
    templateUrl: './legacy-claim-entry.component.html',
    styleUrls: ['./legacy-claim-entry.component.css']
})
export class LegacyClaimEntryComponent implements OnInit, OnDestroy {
    @ViewChild('successModal') public successModal: ModalDirective;
    datePickerConfig: any;
    route$: Subscription;
    claim: LegacyClaims = {} as LegacyClaims;
    successMessage: string;
    ssnNoValid: boolean = true;
    dateofPaymentValid: boolean = true;
    categoryValid: boolean = true;
    claimAmountValid: boolean = true;
    oldRegdNoValid: boolean = true;
    categoryLov: LovDetails[];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService) {
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
        this.getCategories();
    }
    SaveLegacyClaim(claimData: LegacyClaims) {
        debugger;
        if (this.validate(claimData)) {
            claimData.userId = this.userService.user.userid;
            claimData.userType = Number(this.userService.user.userTpe);
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveLegacyClaimDetails(claimData)
                    .then((data: any) => {

                        if (data) {
                            this.successMessage = "Legacy claim successfully Saved";
                            this.successModal.show();
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                            this.successModal.show();
                        }
                    });
            }
        }
        else
            return;
    }
    validate(claimData: LegacyClaims) {
        let isValid = true;
        if (claimData.claimDate == null || claimData.claimDate == undefined) { this.dateofPaymentValid = isValid = false }
        if (claimData.claimCategory == 0 || claimData.claimCategory == undefined) { this.categoryValid = isValid = false }
        if (claimData.claimAmount == null || claimData.claimAmount == undefined) { this.claimAmountValid = isValid = false }
        if (claimData.oldRegdNo == null || claimData.oldRegdNo == undefined) { this.oldRegdNoValid = isValid = false }

        return isValid;
    }
    CancelClick() {
        debugger;
        this.router.navigate(['claim/legacylist']);
        
    }
    okClick() {
        debugger;
        this.successModal.hide();
        window.location.href = "claim/legacylist";
    }
    getCategories() {
        this.dataService
            .getlovDetails(LovConstants.LegacyClaimCategory)
            .subscribe((data: any) => {
                this.categoryLov = data;
            });
    }
}
