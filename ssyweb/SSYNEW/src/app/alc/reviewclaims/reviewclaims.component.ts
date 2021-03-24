import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../../claim/services/claim-data.service';
import { ClaimView } from '../../claim/models/claimview.model';
import { EducationHdrModel, EducationDetailModel } from '../../claim/models/education.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, ClaimCheckList, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { Subscription } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap';
import { AlcDataService } from '../services/alc-data.service';
import { ReviewModel } from '../../models/review.model';
import { UserService } from '../../UserService';
import { flatten } from '@angular/core/src/render3/util';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimTrack } from '../../claim/models/track.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import { ClaimExceptionDetailsModel } from '../../models/claimExceptionDetails';
import { Claims } from '../../claim/models/claims.model';
import { CheckListDetails } from '../../models/CheckListDetails';
import { BenNominee } from '../../claim/models/ben.nominee.model';
import { forEach } from '../../../../node_modules/typescript-collections/dist/lib/arrays';

@Component({
    selector: 'app-reviewclaims',
    templateUrl: './reviewclaims.component.html',
    styleUrls: ['./reviewclaims.component.css']
})
export class ReviewclaimsComponent implements OnInit, OnDestroy {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('historyModal') public historyModal: ModalDirective;
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('nomineeModal') public nomineeModal: ModalDirective;

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
    isVisable: boolean = true;
    isApprovedAmountDisable: boolean = true;
    mode: string;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    viewMetWithAnAccident: boolean = false;
    claimExceptionDetails: string = "";
    isVisibleClaimExceptions: boolean = false;
    claimAmount: any = 0;
    expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    isPrematureClaim: boolean = false;
    isShowClaimsHistory: boolean = false;
    healthCheckList: CheckListDetails[];
    pfCheckList: CheckListDetails[];
    deathCheckList: CheckListDetails[];
    disabilityCheckList: CheckListDetails[];
    educationCheckList: CheckListDetails[];
    isInvalidNominee: boolean = false;
    isOnDeathofBeneficiaryOnRequestofNominee: boolean = false;
    chronologicalOrder: number = 0;
    isCOExceptionCommentsReq: boolean = false;
    coexceptionCommentsValid: boolean = true;
    claimCOExceptionDetails: string = "";
    isVisibleCOExceptions: boolean = false;
    enableSearchStudentLink: boolean = true;
    //Validation Nominee variables
    nomineeNameValid: boolean = true;
    relationshipValid: boolean = true;
    genderValid: boolean = true;
    nomineeDOBValid: boolean = true;
    nomineeShareValid: boolean = true;
    nomineeBankNameValid: boolean = true;
    nomineeBankAccountValid: boolean = true;
    nomineeBankAccountMinlengthValid: boolean = true;
    nomineeBranchNameValid: boolean = true;
    nomineeIFSCCodeValid: boolean = true;
    benficiaryNominee: Array<BenNominee> = [];
    benficiaryNomineeDetails: Array<BenNominee> = [];
    benNomineenDetails: BenNominee = {} as BenNominee;
    rowIndex = -1;
    dobNominee: any;
    typeOfMode: string;
    successValue: string = "review";

    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService, private sanitizer: DomSanitizer) {

    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }
    ngOnInit() {
        debugger;
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                debugger;
                this.claimId = params["claimId"];
                this.claimType = ClaimConstants[params["claimType"]];
                this.tranctionId = params["transactionId"];
                this.mode = params["mode"];
                this.claimAmount = params["claimAmount"];
                if (this.mode != "pending") {
                    this.isVisable = this.isApprovedAmountDisable = false;
                    this.enableSearchStudentLink = false;
                }
                else {
                    this.isShowClaimsHistory = true;
                    this.enableSearchStudentLink = true;
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
        this.getHealthCheckList();
        this.getEducationCheckList();
        this.getDisabilityCheckList();
        this.getDeathCheckList();
        this.getPFCheckList();
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
                debugger;
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
                    if (this.mode == "pending") {
                        this.review.approvedAmount = this.claim.educationDetails.claimAmount;
                    }
                    else
                        this.review.approvedAmount = this.claim.educationDetails.approvedAmount;

                    this.review.alcComments = this.claim.educationDetails.alcComments;
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
                    if (this.claim.educationDetails.inspChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.educationDetails.inspChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                    //check list
                    if (this.claim.educationDetails.educationClaimCheckListDetails != null) {
                        if(this.claim.educationDetails.educationClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < this.claim.educationDetails.educationClaimCheckListDetails.length; i++) {
                            if (this.educationCheckList.length > 0) {
                                for (var j = 0; j < this.educationCheckList.length; j++) {
                                    if (this.claim.educationDetails.educationClaimCheckListDetails[i].checkListDtlId == this.educationCheckList[j].checkListDtlId) {
                                        this.educationCheckList[j].checked = true;
                                    }
                                }
                            }
                            }
                        }
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
                    this.review.alcComments = this.claim.healthFamilyDetails.alcComments;
                    this.review.exceptionComments = this.claim.healthFamilyDetails.exceptionComments;
                    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                    }
                    //healthClaimExceptionDetails
                    if (this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                        if (this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                            for (var i = 0; i < this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.healthFamilyDetails.inspChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.healthFamilyDetails.inspChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                    //check list
                    if (this.claim.healthFamilyDetails.healthClaimCheckListDetails != null) {
                        if(this.claim.healthFamilyDetails.healthClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < this.claim.healthFamilyDetails.healthClaimCheckListDetails.length; i++) {
                            if (this.healthCheckList.length > 0) {
                                for (var j = 0; j < this.healthCheckList.length; j++) {
                                    if (this.claim.healthFamilyDetails.healthClaimCheckListDetails[i].checkListDtlId == this.healthCheckList[j].checkListDtlId) {
                                        this.healthCheckList[j].checked = true;
                                    }
                                }
                            }
                            }
                        }
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
                    if (this.mode == "pending") {
                        this.review.approvedAmount = this.claim.disabilityDetails.claimAmount;
                    }
                    else
                        this.review.approvedAmount = this.claim.disabilityDetails.approvedAmount;

                    this.review.alcComments = this.claim.disabilityDetails.alcComments;
                    this.review.exceptionComments = this.claim.disabilityDetails.exceptionComments;
                    //disabilityClaimExceptionDetails
                    if (this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                        if (this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                            for (var i = 0; i < this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //Chronological Order Exception Details
                    if (this.claim.disabilityDetails.inspChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.disabilityDetails.inspChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                    //check list
                    if (this.claim.disabilityDetails.disabilityClaimCheckListDetails != null) {
                        if(this.claim.disabilityDetails.disabilityClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < this.claim.disabilityDetails.disabilityClaimCheckListDetails.length; i++) {
                            if (this.disabilityCheckList.length > 0) {
                                for (var j = 0; j < this.disabilityCheckList.length; j++) {
                                    if (this.claim.disabilityDetails.disabilityClaimCheckListDetails[i].checkListDtlId == this.disabilityCheckList[j].checkListDtlId) {
                                        this.disabilityCheckList[j].checked = true;
                                    }
                                }
                            }
                            }
                        }
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
                    if (this.mode == "pending") {
                        this.review.approvedAmount = this.claim.deathDetails.claimAmount;
                    }
                    else
                        this.review.approvedAmount = this.claim.deathDetails.approvedAmount;

                    this.review.alcComments = this.claim.deathDetails.alcComments;
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
                    if (this.claim.deathDetails.inspChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.deathDetails.inspChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                    //check list
                    if (this.claim.deathDetails.deathClaimCheckListDetails != null) {
                        if(this.claim.deathDetails.deathClaimCheckListDetails.length > 0) {
                            for (var i = 0; i < this.claim.deathDetails.deathClaimCheckListDetails.length; i++) {
                                if (this.deathCheckList.length > 0) {
                                    for (var j = 0; j < this.deathCheckList.length; j++) {
                                        if (this.claim.deathDetails.deathClaimCheckListDetails[i].checkListDtlId == this.deathCheckList[j].checkListDtlId) {
                                            this.deathCheckList[j].checked = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.claim.providentFundDetails != null) {
                    debugger;
                    if (this.claim.providentFundDetails.typeOfClaim != null && this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                        this.isPrematureClaim = true;
                    }
                    this.review.approvedAmount = this.claim.providentFundDetails.approvedAmount;
                    this.review.alcComments = this.claim.providentFundDetails.alcComments;
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
                    if (this.claim.providentFundDetails.inspChronologicalOrderComments != null) {
                        this.claimCOExceptionDetails = this.claim.providentFundDetails.inspChronologicalOrderComments;
                        this.isVisibleCOExceptions = true;
                    }
                    //check list
                    if (this.claim.providentFundDetails.pfClaimCheckListDetails != null) {
                        if(this.claim.providentFundDetails.pfClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < this.claim.providentFundDetails.pfClaimCheckListDetails.length; i++) {
                            if (this.pfCheckList.length > 0) {
                                for (var j = 0; j < this.pfCheckList.length; j++) {
                                    if (this.claim.providentFundDetails.pfClaimCheckListDetails[i].checkListDtlId == this.pfCheckList[j].checkListDtlId) {
                                        this.pfCheckList[j].checked = true;
                                    }
                                }
                            }
                            }
                        }
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


                if (this.claim.entryPoint == EntryPoint.Nominee) {
                    //this.showSendBack = false;
                    if (this.mode == "pending") {
                        //(March-15-2019 ) committed this code based on suman/client request
                        if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
                            this.isInvalidNominee = true;
                            this.getBeneficiaryNomineeDetails(this.claim.benSno);
                            this.rowIndex = this.rowIndex + this.benficiaryNominee.length;
                        }
                    }
                }
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
        if(this.successValue == "review")
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    }
    saveClaim(status: number, type: any, mode: string) {
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflow;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.alcChronologicalOrderComments; // "You are not following the chronological order";
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

                if (this.isInvalidNominee) {
                debugger;
                this.review.benficiaryNomineeDetails = this.benficiaryNominee;
            }
            }
            if (mode == "approved") {
                debugger;
                if (this.claim.deathDetails != null) { this.review.benDeathStatus = true; }
            }
            //-----------------
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateComments(this.review)
                    .then((data: any) => {
                        this.successValue = "review";
                        this.successMessage = "Claim " + mode + " successfully";
                        this.successModal.show();
                    });
            }
        }
    }
    cancelclick() {
        if (this.mode == "pending") {
            this.router.navigate(['alc/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/sendbackclaims']);

        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/rejectclaims']);

        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/approvalclaims']);

        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['alc/claimstatus']);

        }
        else if (this.mode == "search") {
            this.router.navigate(['alc/searchstudent'], { skipLocationChange: true });

        }
    }

    validateClaim(type: any) {
        let isValid = true;
        let sharePercentage = 0;
        let count = 0;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) { this.approvedAmountValid = isValid = false; }
            //(March-15-2019 )ALC should reject if the nominee name is still not matching
            //if (this.claim.entryPoint == EntryPoint.Nominee) {
            //    if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
            //        this.isInvalidNominee = true;
            //        alert("Invalid  Nominee");
            //        isValid = false;
            //    }
            //}
        }

        if (this.review.alcComments == undefined || this.review.alcComments == "") { this.alcCommentsValid = isValid = false; }
        if ((this.review.alcChronologicalOrderComments == undefined || this.review.alcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) { this.coexceptionCommentsValid = isValid = false; }

        //Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        if (this.isInvalidNominee) {
            debugger;
            if (this.benficiaryNominee.length > 0) {
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
                }
                if (sharePercentage != 100) {
                    alert("Share Allocation Accepts only 100%");
                    isValid = false;
                }
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    if (this.benficiaryNominee[i].isMappingNominee) {
                        count++;
                    }
                }
                if (count != 1) {
                    alert("Please select one nominee to mapping ");
                    isValid = false;
                }
            }
            else {
                alert("Please map one nominee to this claim ");
                isValid = false;
            }
        }
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

    getHealthCheckList() {
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.HealthFamilyCheckList)
            .subscribe((data: any) => {
                this.healthCheckList = data;
            });
    }
    getEducationCheckList() {
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.EducationCheckList)
            .subscribe((data: any) => {
                this.educationCheckList = data;
            });
    }
    getDisabilityCheckList() {
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.DisabilityCheckList)
            .subscribe((data: any) => {
                this.disabilityCheckList = data;
            });
    }
    getDeathCheckList() {
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.DeathCheckList)
            .subscribe((data: any) => {
                this.deathCheckList = data;
            });
    }
    getPFCheckList() {
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.PFCheckList)
            .subscribe((data: any) => {
                this.pfCheckList = data;
            });
    }
    searchLinkClick() {
        window.open('/inspector/searchstudent', 'searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    }
    getBeneficiaryNomineeDetails(id: any) {

        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe((data: any) => {
                debugger;
                this.benficiaryNominee = data;
                //this.benficiaryNomineeDetails = this.benficiaryNominee.slice(0, this.benficiaryNominee.length-1);
            });

    }
    selectNominee(item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;

        
    }
    //editNomineeDetails(details: BenNominee) {
    //    debugger;
    //    this.typeOfMode = "Edit";
    //    this.benNomineenDetails = details;
    //    this.rowIndex = this.benficiaryNominee.indexOf(details);
    //    this.lgModal.show();
    //}
    //addNomineeDetails(details: BenNominee) {
    //    debugger;
    //    if (this.validateNomineeDetails(details)) {
    //        if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == -1 && this.rowIndex == -1) {
    //            details.createdBy = this.userService.user.deptUserid;
    //            details.createdDate = new Date();
    //            // details.dob = new Date(this.dobNominee);
    //            this.benficiaryNominee.push(details);
    //            this.lgModal.hide();
    //        }
    //        else if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) != -1 && this.rowIndex == -1) {
    //            alert("already added please enter another nominee details"); return;
    //        }
    //        else {
    //            if (this.rowIndex != -1) {
    //                //this.benficiaryNominee.splice(this.rowIndex, 1);
    //                if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == this.rowIndex) {
    //                    //this.benficiaryNominee.push(details);
    //                    this.rowIndex = -1;
    //                    this.lgModal.hide();
    //                }
    //            }
    //        }
    //        this.benNomineenDetails = {} as BenNominee;
    //    }
    //}
    validateNomineeDetails(details: BenNominee): boolean {
        let isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") { this.nomineeNameValid = isValid = false; }
        //if (details.relationshipID == undefined || details.relationshipID <= 0) { this.relationshipValid = isValid = false; }
        //if (details.benNomineeGender == undefined || details.benNomineeGender == "") { this.genderValid = isValid = false; }
        if (details.dob == undefined) { this.nomineeDOBValid = isValid = false; }
        //if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") { this.nomineeShareValid = isValid = false; }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") { this.nomineeBankNameValid = isValid = false; }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "")
            { this.nomineeBankAccountValid = isValid = false; }
        else if (details.benNomineeBankAccNo.length < 9)
            { this.nomineeBankAccountMinlengthValid = isValid = false; }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") { this.nomineeBranchNameValid = isValid = false; }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") { this.nomineeIFSCCodeValid = isValid = false; }

        return isValid;
    }
    editFieldValue(index, field: BenNominee) {
        debugger;
        field.isEdit = true;
        if (field.dob != null && field.dob != undefined)
            field.dob = new Date(field.dob);
    }
    cancelFieldValue(index, field: BenNominee) {
        debugger;
        //field.benNomineeName = this.benficiaryNomineeDetails[index].benNomineeName;
        //field.dob = new Date(this.benficiaryNomineeDetails[index].dob);
        //field.benNomineeBankName = this.benficiaryNomineeDetails[index].benNomineeBankName;
        //field.benNomineeBankAccNo = this.benficiaryNomineeDetails[index].benNomineeBankAccNo;
        //field.benNomineeBankBranch = this.benficiaryNomineeDetails[index].benNomineeBankBranch;
        //field.benNomineeBankIfscCode = this.benficiaryNomineeDetails[index].benNomineeBankIfscCode;
        field.isEdit = false;
        this.getBeneficiaryNomineeDetails(this.claim.benSno);
    }
    saveFieldValue(index, field: BenNominee) {
        if (this.validateNomineeDetails(field)) {
            field.isEdit = false;
            //this.pfCollectionDetailsList.splice(index, 1);
            //this.pfCollectionDetailsList.push(field);
        }
    }
    mapNominee() {
        debugger;
        let count = 0;
        if (this.benficiaryNominee.length > 1) {
            for (var i = 0; i < this.benficiaryNominee.length; i++) {
                if (this.benficiaryNominee[i].isMappingNominee)
                    count++;
            }
        }
        if (count > 1) {
            alert("Please map only one nominee"); return;
        }
        else {
            this.benNomineenDetails = this.benficiaryNominee.find(x => x.isMappingNominee == true);
            this.benNomineenDetails.claimId = this.claimId;

            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateNomineeDetails(this.benNomineenDetails)
                    .then((data: any) => {
                        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
                        this.isInvalidNominee = false;
                        this.claimExceptionDetails = "";
                        this.isVisibleClaimExceptions = false;
                        this.successValue = "nominee";
                        this.successMessage = "Nominee Details Updated successfully";
                        this.successModal.show();
                    });
            }
            this.nomineeModal.hide();
        }
    }
}

