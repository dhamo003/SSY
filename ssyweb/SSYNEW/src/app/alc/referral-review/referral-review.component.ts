import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClaimView } from '../../claim/models/claimview.model';
import { EducationHdrModel, EducationDetailModel } from '../../claim/models/education.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { ReviewModel } from '../../models/review.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import { Claims } from '../../claim/models/claims.model';
@Component({
    selector: 'app-referral-review',
    templateUrl: './referral-review.component.html',
    styleUrls: ['./referral-review.component.css']
})
export class ReferralReviewComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
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
    isApprovedAmountDisable: boolean = true;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    viewMetWithAnAccident: boolean = false;
    isPrematureClaim: boolean = false;
    isShowClaimsHistory: boolean = false;
    isOnDeathofBeneficiaryOnRequestofNominee: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService, private sanitizer: DomSanitizer) {

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
                    this.isVisable = this.isApprovedAmountDisable= false;
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
        this.getPackages();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    }

    getPackages() {
        this.dataService
            .getPackages()
            .subscribe((data: any) => {
                this.packages = data;
                console.log(this.packages);
                var groups = new Set(this.packages.map(item => item.ailmentName));
            });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                this.claim = data;
                if (this.claim.educationDetails != null) {
                    this.educationList = this.claim.educationDetails.educationDetailList;
                    if (this.claim.educationDetails.educationDetailList.length > 0) {
                        for (var i = 0; i < this.claim.educationDetails.educationDetailList.length; i++) {
                            if (this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                                for (var j = 0; j < this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                    let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                        attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                    }
                                    this.attachmentList.push(attachment);
                                }
                            }
                        }
                    }
                    this.review.approvedAmount = this.claim.educationDetails.approvedAmount;
                    this.review.alcComments = this.claim.educationDetails.alcComments;
                    this.review.exceptionComments = this.claim.educationDetails.exceptionComments;
                }
                if (this.claim.healthFamilyDetails != null) {
                    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }
                    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                    }
                    this.review.approvedAmount = this.claim.healthFamilyDetails.approvedAmount;
                    this.review.alcComments = this.claim.healthFamilyDetails.alcComments;
                    this.review.exceptionComments = this.claim.healthFamilyDetails.exceptionComments;
                    let data = this.claim.healthFamilyDetails.healthFamilyPackages;
                    for (var i = 0; i < data.length; i++) {
                        this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
                    }
                    this.selectedPackages = this.packages.filter(x => x.isChecked == true);
                }
                if (this.claim.disabilityDetails != null) {
                    for (var j = 0; j < this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.disabilityDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }
                    this.review.approvedAmount = this.claim.disabilityDetails.approvedAmount;
                    this.review.alcComments = this.claim.disabilityDetails.alcComments;
                    this.review.exceptionComments = this.claim.disabilityDetails.exceptionComments;
                }
                if (this.claim.deathDetails != null) {
                    for (var j = 0; j < this.claim.deathDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.deathDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }
                    this.review.approvedAmount = this.claim.deathDetails.approvedAmount;
                    this.review.alcComments = this.claim.deathDetails.alcComments;
                    this.review.exceptionComments = this.claim.deathDetails.exceptionComments;
                }
                if (this.claim.providentFundDetails != null) {
                    debugger;
                    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        this.isPrematureClaim = true;
                    }
                    this.review.approvedAmount = this.claim.providentFundDetails.approvedAmount;
                    this.review.alcComments = this.claim.providentFundDetails.alcComments;
                    this.review.exceptionComments = this.claim.providentFundDetails.exceptionComments;
                }
                if (this.claim.attachment != null) {
                    for (var k = 0; k < this.claim.attachment.length; k++) {
                        let attachment = this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.claim.attachment[k] = attachment;
                         this.attachmentList.push(attachment);
                    }
                }
                if (this.claim.entryPoint == EntryPoint.Nominee || (this.claim.entryPoint == EntryPoint.Agent && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                    || (this.claim.entryPoint == EntryPoint.CA && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (this.claim.entryPoint == EntryPoint.Lwfc && this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                    this.isOnDeathofBeneficiaryOnRequestofNominee = true;
                }
                this.getBenBasicDetails(this.claim.benSno);
                console.log(this.claim);
                this.getClaimTrackDetailsByClaimId(tranctionId, claimType, this.workflowId);
                if (this.isShowClaimsHistory)
                    this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, claimType);
            });
    }
    viewAttachment() {
        this.attachModel.show();
    }
    getBenBasicDetails(benNo: any) {
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe((data: any) => {
                this.beneficiary = data;
                console.log(this.beneficiary);
            });
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }
    okClick() {
        this.successModal.hide();
        this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    }
    saveClaim(status: number, type: any, mode: string) {
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflowreferral;
            this.review.userId = this.userService.user.deptUserid;
            if (mode == "approved") {
                debugger;
                if (this.claim.deathDetails != null) { this.review.benDeathStatus = true; }
            }
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateComments(this.review)
                    .then((data: any) => {
                        this.successMessage = "Claim " + mode + " successfully";
                        this.successModal.show();
                    });
            }
        }
    }
    cancelclick() {
        if (this.mode == "referal") {
            this.router.navigate(['alc/referclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/referralsendback']);

        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/referralreject']);

        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/referralapproval']);

        }
    }
    validateClaim(type: any) {
        let isValid = true;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) { this.approvedAmountValid = isValid = false; }
        if (this.review.alcComments == undefined || this.review.alcComments == "") { this.alcCommentsValid = isValid = false; }
        return isValid;

    }

    getApprovalPremission(id: any, type: any) {
        this.dataService
            .GetApprovalPremission(id, type)
            .subscribe((data: any) => {
                console.log(data);
            });
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
