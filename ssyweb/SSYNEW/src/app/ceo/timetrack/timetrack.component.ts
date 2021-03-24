import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { EducationDetailModel, EducationHdrModel } from '../../claim/models/education.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { window } from 'rxjs-compat/operator/window';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans } from '../../claim/pipes/constnts.model';
import { CeoDataService } from '../services/ceo-data.service';

@Component({
  selector: 'app-timetrack',
  templateUrl: './timetrack.component.html',
  styleUrls: ['./timetrack.component.css']
})
export class TimetrackComponent implements OnInit {

    private route$: Subscription;
    private tranctionType: any;
    private transactionId: any;
    private workflowId: any;

    mode: string;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: CeoDataService, private userService: UserService) {

    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.transactionId = params["transactionId"];
                this.tranctionType = params["tranctionType"];
                this.mode = params["mode"];
                this.workflowId = params["workflowId"];
            }
        );
        this.getClaimDetailsByClaimId(this.transactionId, ClaimConstants[this.tranctionType], this.workflowId)
    }
    getClaimDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }

    onBackClaimClick() {
        if (this.mode == "claimstatus") {
            this.router.navigate(['ceo/claimstatus'], { skipLocationChange: true });
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
