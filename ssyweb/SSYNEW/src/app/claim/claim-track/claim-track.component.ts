import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { EducationDetailModel, EducationHdrModel } from '../models/education.model';
import { ClaimTrack } from '../models/track.model';
import { Beneficiary } from '../models/ben.model';
import { window } from 'rxjs-compat/operator/window';
import { ClaimsComponent } from '../claims/claims.component';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans } from '../pipes/constnts.model';


@Component({
    selector: 'app-claim-track',
    templateUrl: './claim-track.component.html',
    styleUrls: ['./claim-track.component.css']
})
export class ClaimTrackComponent implements OnInit, OnDestroy {

    private route$: Subscription;
    private tranctionType: any;
    private transactionId: any;
    private workflowId: any;
    mode: string;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private userService: UserService) {

    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {

        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.transactionId = params["transactionId"];
                this.tranctionType = params["tranctionType"];
                this.workflowId = params["workflowId"];
                this.mode = params["mode"];
            }
        );
        
        this.getClaimDetailsByClaimId(this.transactionId, ClaimConstants[this.tranctionType], this.workflowId)
    }
    getClaimDetailsByClaimId(transactionId: any, tranctionType: any, wfId:any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType,wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;

            });
    }
    onBackClaimClick() {
        if (this.mode == "referal") {
            this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "agentreferal") {
            this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });
        }
        else {
            if (this.userService.user.userid != undefined && this.userService.user.userid != 0 && this.userService.user.userid.toString() != "") {
                this.router.navigate(['claim/Claims'], { skipLocationChange: true });
            }
            else {
                this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
                }
        }
    }
    formatDate(date: any) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        let dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();

        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    }
    nthDay(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}
