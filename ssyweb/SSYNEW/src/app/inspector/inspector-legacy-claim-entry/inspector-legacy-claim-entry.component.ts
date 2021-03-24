import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalDirective } from "ngx-bootstrap";
import { InspectorDataService } from '../services/inspector-data.service';
import { UserService } from '../../UserService';
import { LegacyClaims } from '../../models/LegacyClaims';
import { UserType, LovConstants } from '../../claim/pipes/constnts.model';
import { LovDetails } from '../../claim/models/Lov.model';

@Component({
  selector: 'app-inspector-legacy-claim-entry',
  templateUrl: './inspector-legacy-claim-entry.component.html',
  styleUrls: ['./inspector-legacy-claim-entry.component.css']
})
export class InspectorLegacyClaimEntryComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    datePickerConfig: any;
    route$: Subscription;
    claim: LegacyClaims = {} as LegacyClaims;
    successMessage: string;
    //isInspector: boolean = false;
    ssnNoValid: boolean = true;
    dateofPaymentValid: boolean = true;
    categoryValid: boolean = true;
    claimAmountValid: boolean = true;
    oldRegdNoValid: boolean = true;
    categoryLov: LovDetails[];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: InspectorDataService, private userService: UserService) {
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
            claimData.userId = this.userService.user.deptUserid;
            
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
       
        if (claimData.ssinNumber == null || claimData.ssinNumber == undefined) { this.ssnNoValid = isValid = false }
        if (claimData.claimDate == null || claimData.claimDate == undefined) { this.dateofPaymentValid = isValid = false }
        if (claimData.claimCategory == 0 || claimData.claimCategory == undefined) { this.categoryValid = isValid = false }
        if (claimData.claimAmount == null || claimData.claimAmount == undefined) { this.claimAmountValid = isValid = false }
        if (claimData.oldRegdNo == null || claimData.oldRegdNo == undefined) { this.oldRegdNoValid = isValid = false }

        return isValid;
    }
    CancelClick() {
        debugger;
            this.router.navigate(['inspector/inspectorlegacylist']);
    }
    okClick() {
        debugger;
        this.successModal.hide();
        this.router.navigate(['inspector/inspectorlegacylist']);
        
        
    }
    getCategories() {
        this.dataService
            .getlovDetails(LovConstants.LegacyClaimCategory)
            .subscribe((data: any) => {
                this.categoryLov = data;
            });
    }
}
