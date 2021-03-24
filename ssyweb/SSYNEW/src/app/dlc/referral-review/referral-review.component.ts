import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClaimView } from '../../claim/models/claimview.model';
import { EducationHdrModel } from '../../claim/models/education.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { ReviewModel } from '../../models/review.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { ClaimConstants, WorkflowTrans, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Claims } from '../../claim/models/claims.model';

@Component({
  selector: 'app-referral-review',
  templateUrl: './referral-review.component.html',
  styleUrls: ['./referral-review.component.css']
})
export class ReferralReviewComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('historyModal') public historyModal: ModalDirective;
    public claimsHistoryData: Claims[] = [];
    private route$: Subscription;
    private claimId: number;
    private claimType: number;
    private tranctionId: any;
    private workflowId: any;
    approvedAmountValid: boolean = true;
    alcCommentsValid: boolean = true;
    claim: ClaimView = {} as ClaimView;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;
    successMessage: string;
    review: ReviewModel = {} as ReviewModel;
    mode: string;
    isVisable: boolean = true;
    isShowClaimsHistory: boolean = false;
    isApprovedAmountDisable: boolean = true;
    isOnDeathofBeneficiaryOnRequestofNominee: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: DlcDataService, private userService: UserService) {

    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"];
                this.claimType = ClaimConstants[params["claimType"]];
                this.tranctionId = params["transactionId"]
                this.mode = params["mode"];
                if (this.mode != "referal") {
                    this.isVisable = this.isApprovedAmountDisable = false;
                }
                else {
                    this.isShowClaimsHistory = true;
                    if (this.claimType != ClaimConstants.HealthFamily && this.claimType != ClaimConstants.PF) {
                        this.isApprovedAmountDisable = false;
                    }
                }
                this.workflowId = params["workflowId"];
            }
        );
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    }


    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                this.claim = data;
                if (this.claim.entryPoint == EntryPoint.Nominee || (this.claim.entryPoint == EntryPoint.Agent && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                    || (this.claim.entryPoint == EntryPoint.CA && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (this.claim.entryPoint == EntryPoint.Lwfc && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                    this.isOnDeathofBeneficiaryOnRequestofNominee = true;
                }
                this.getBenBasicDetails(this.claim.benSno);
                console.log(this.claim);
                if (this.isShowClaimsHistory)
                    this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, claimType);
            });
    }
    getBenBasicDetails(benNo: any) {
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe((data: any) => {
                this.beneficiary = data;
                console.log(this.beneficiary);
            });
    }
    okClick() {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    }
    saveClaim(status: number, mode: string) {
        debugger;
        this.review.benDeathStatus = false;
        this.review.statusId = status;
        this.review.transactionId = this.tranctionId;
        this.review.claimType = this.claimType;
        this.review.wfId = WorkflowTrans.workflow;
        this.review.userId = this.userService.user.deptUserid;

        if (mode == "approved") {
            debugger;
            if (this.claim.deathDetails != null) { this.review.benDeathStatus = true; }
        }

        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.review)
                .then((data: any) => {
                    this.successMessage = "Claim updated successfully";
                    this.successModal.show();
                });
        }
    }
    cancelclick() {
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    }
    validateClaim() {
        let isValid = true;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) { this.approvedAmountValid = isValid = false; }
        if (this.review.alcComments == undefined || this.review.alcComments == "") { this.alcCommentsValid = isValid = false; }
        return isValid;

    }
    viewHistory() {
        this.historyModal.show();
    }
    getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any) {
        debugger;
        this.dataService
            .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType)
            .subscribe((data: any) => {
                this.claimsHistoryData = data;
            });
    }

}
