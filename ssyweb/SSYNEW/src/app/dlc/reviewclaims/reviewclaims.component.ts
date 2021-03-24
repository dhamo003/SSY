import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../../claim/services/claim-data.service';
import { ClaimView } from '../../claim/models/claimview.model';
import { EducationHdrModel, EducationDetailModel } from '../../claim/models/education.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { Subscription } from 'rxjs';

import { DlcDataService } from '../services/dlc-data.service';
import { ReviewModel } from '../../models/review.model';
import { ModalDirective } from 'ngx-bootstrap';
import { UserService } from '../../UserService';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { ClaimTrack } from '../../claim/models/track.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import { ClaimExceptionDetailsModel } from '../../models/claimExceptionDetails';
import { Claims } from '../../claim/models/claims.model';

@Component({
    selector: 'app-reviewclaims',
    templateUrl: './reviewclaims.component.html',
    styleUrls: ['./reviewclaims.component.css']
})
export class ReviewclaimsComponent implements OnInit, OnDestroy {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('historyModal') public historyModal: ModalDirective;
    public claimsHistoryData: Claims[] = [];
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    public claimsData: any;
    private route$: Subscription;
    private claimId: number;
    private claimType: number;
    private tranctionId: any;
    private workflowId: any;
    approvedAmountValid: boolean = true;
    dlcCommentsValid: boolean = true;
    review: ReviewModel = {} as ReviewModel;
    claim: ClaimView = {} as ClaimView;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    successMessage: string;
    mode: string;
    isVisable: boolean = true;
    viewMetWithAnAccident: boolean = false;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    claimExceptionDetails: string = "";
    isVisibleClaimExceptions: boolean = false;
    claimAmount: any = 0;
    expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    isPrematureClaim: boolean = false;
    isShowClaimsHistory: boolean = false;
    isApprovedAmountDisable: boolean = true;
    isOnDeathofBeneficiaryOnRequestofNominee: boolean = false;
    chronologicalOrder: number = 0;
    isCOExceptionCommentsReq: boolean = false;
    coexceptionCommentsValid: boolean = true;
    claimCOExceptionDetails: string = "";
    isVisibleCOExceptions: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: DlcDataService, private userService: UserService, private sanitizer: DomSanitizer) {

    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"];
                this.claimType = ClaimConstants[params["claimType"]];
                this.tranctionId = params["transactionId"];
                this.claimAmount = params["claimAmount"];
                this.mode = params["mode"]
                if (this.mode != "pending") {
                    this.isVisable = this.isApprovedAmountDisable = false;
                }
                else {
                    this.isShowClaimsHistory = true;
                    if (this.claimType != ClaimConstants.HealthFamily && this.claimType != ClaimConstants.PF) {
                        this.isApprovedAmountDisable = false;
                    }
                    
                }
                this.workflowId = params["workflowId"];
                this.chronologicalOrder = params["chronologicalOrder"];
                if (this.chronologicalOrder > 0) {
                    alert("You are not following the chronological order");
                    this.isCOExceptionCommentsReq = true;
                }
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
    getClaimsByDlc(id: number, status: any) {
        this.dataService
            .getClaimsByDlc(id)
            .subscribe((data: any) => {
                this.claimsData = data;
                console.log(this.claimsData);
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
                    this.review.dlcComments = this.claim.educationDetails.dlcComments;
                    this.review.exceptionComments = this.claim.educationDetails.exceptionComments;
                    //educationClaimExceptionDetails
                    if (this.claim.educationDetails.educationClaimExceptionDetails != null) {
                        if (this.claim.educationDetails.educationClaimExceptionDetails.length > 0) {
                            for (var i = 0; i < this.claim.educationDetails.educationClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.educationDetails.educationClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.educationDetails.alcChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.educationDetails.alcChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                }
                if (this.claim.healthFamilyDetails != null) {
                    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }
                    let data = this.claim.healthFamilyDetails.healthFamilyPackages;
                    for (var i = 0; i < data.length; i++) {
                        this.packages.filter(x => x.packageID == data[i].packageID)[0].isChecked = true;
                    }
                    this.selectedPackages = this.packages.filter(x => x.isChecked == true);
                    this.review.approvedAmount = this.claim.healthFamilyDetails.approvedAmount;
                    this.review.dlcComments = this.claim.healthFamilyDetails.dlcComments;
                    this.review.exceptionComments = this.claim.healthFamilyDetails.exceptionComments;
                    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                    }
                    //healthClaimExceptionDetails
                    if (this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                        if (this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                            debugger;
                            for (var i = 0; i < this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.healthFamilyDetails.alcChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.healthFamilyDetails.alcChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
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
                    this.review.dlcComments = this.claim.disabilityDetails.dlcComments;
                    this.review.exceptionComments = this.claim.disabilityDetails.exceptionComments;
                    //disabilityClaimExceptionDetails
                    if (this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                        if (this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                            debugger;
                            for (var i = 0; i < this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.disabilityDetails.alcChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.disabilityDetails.alcChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
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
                    this.review.dlcComments = this.claim.deathDetails.dlcComments;
                    this.review.exceptionComments = this.claim.deathDetails.exceptionComments;
                    //deathClaimExceptionDetails
                    if (this.claim.deathDetails.deathClaimExceptionDetails != null) {
                        if (this.claim.deathDetails.deathClaimExceptionDetails.length > 0) {
                            debugger;
                            for (var i = 0; i < this.claim.deathDetails.deathClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.deathDetails.deathClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.deathDetails.alcChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.deathDetails.alcChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                }
                if (this.claim.providentFundDetails != null) {
                    debugger;
                    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        this.isPrematureClaim = true;
                    }
                    this.review.approvedAmount = this.claim.providentFundDetails.approvedAmount;
                    this.review.dlcComments = this.claim.providentFundDetails.dlcComments;
                    this.review.exceptionComments = this.claim.providentFundDetails.exceptionComments;
                    //pfClaimExceptionDetails
                    if (this.claim.providentFundDetails.pfClaimExceptionDetails != null) {
                        if (this.claim.providentFundDetails.pfClaimExceptionDetails.length > 0) {
                            debugger;
                            for (var i = 0; i < this.claim.providentFundDetails.pfClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.providentFundDetails.pfClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.providentFundDetails.alcChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.providentFundDetails.alcChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                }
                if (this.claim.attachment != null) {
                    for (var k = 0; k < this.claim.attachment.length; k++) {
                        if (this.claim.attachment[k].fileName != null) {
                            let attachment = this.claim.attachment[k];
                            if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                            }
                            this.claim.attachment[k] = attachment;
                            this.attachmentList.push(attachment);
                        }
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
viewAttachment() {
        this.attachModel.show();
    }
    Getimage(imageData: AttachmentModel) {
        const data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    }
 getUrlOfPdf(imageData?: AttachmentModel) {
        this.dataService
            .getAttachment()
            .then((data: any) => {
                var url = URL.createObjectURL(data);
                console.log(url);
            });

    }
    okClick() {
        this.successModal.hide();
        this.router.navigate(['dlc/pendingapprovalclaims']);
    }
    saveClaim(status: number, type: any, mode: string) {
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflowreferral;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.dlcChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;

                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
                    if (this.review.approvedAmount != undefined || this.review.approvedAmount != 0) {
                        ////Exception Rule - 6	When Claimamount>Approved Amount
                        //if (this.claimAmount > this.review.approvedAmount) {

                        //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                        //    exp.exceptionText = "Approved Amount lessthan Claim Amount";
                        //    exp.exceptionCapturedDate = new Date();
                        //    exp.raisedBy = this.userService.user.deptUserid;

                        //    this.expection.push(exp);
                        //}

                        //Exception Rule - 7	When Claimamount<Approved Amount
                        if (this.claimAmount < this.review.approvedAmount) {

                            const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                            exp.exceptionText = "Approved amount greater than claim amount";
                            exp.exceptionCapturedDate = new Date();
                            exp.raisedBy = this.userService.user.deptUserid;

                            this.expection.push(exp);
                        }
                        
                    }
                }
                this.review.claimExceptionDetails = this.expection;
            }
            if (mode == "accepted") {
                debugger;
                if (this.claim.deathDetails != null) { this.review.benDeathStatus = true; }
            }
            //-----------------
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
        if (this.mode == "pending") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });

        }
        else if (this.mode == "reject") {
            this.router.navigate(['dlc/rejectclaims'], { skipLocationChange: true });

        }
        else if (this.mode == "approve") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });

        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
    }
    validateClaim(type: any) {
        let isValid = true;
        this.approvedAmountValid = this.dlcCommentsValid = true;
        if (type == 0)
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) { this.approvedAmountValid = isValid = false; }
        if (this.review.dlcComments == undefined || this.review.dlcComments == "") { this.dlcCommentsValid = isValid = false; }
        if ((this.review.dlcChronologicalOrderComments == undefined || this.review.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) { this.coexceptionCommentsValid = isValid = false; }
        return isValid;

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

