import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { InspectorDataService } from '../services/inspector-data.service';
import { ClaimDataService } from '../../claim/services/claim-data.service';
import { ClaimView } from '../../claim/models/claimview.model';
import { EducationHdrModel, EducationDetailModel } from '../../claim/models/education.model';
import { Beneficiary } from '../../claim/models/ben.model';
import { ClaimConstants, WorkflowTrans, EntryPoint, PFTypeOfClaim, pagination, ClaimCheckList, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { Subscription } from 'rxjs';
import { ReviewModel } from '../../models/review.model';
import { ModalDirective, BsDatepickerConfig } from "ngx-bootstrap";
import { UserService } from '../../UserService';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimTrack } from '../../claim/models/track.model';
import { Package } from '../../models/package.model';
import { HealthFamilyPackage } from '../../models/healthFamilyPackage.model';
import { ClaimExceptionDetailsModel } from '../../models/claimExceptionDetails';
import { Claims } from '../../claim/models/claims.model';
import { FlatTreeNode } from 'typescript-collections/dist/lib/MultiRootTree';
import { BenNominee } from '../../claim/models/ben.nominee.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { DatepickerOptions } from 'ng2-datepicker';
import { parse } from 'cfb/types';
import { CheckListDetails } from '../../models/CheckListDetails';
import { ClaimCheckListDetailsModel } from '../../models/ClaimCheckListDetails';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
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
    @ViewChild('claimModal') public claimModal: ModalDirective;
    @ViewChild('child') private child: ClaimviewdataComponent;
    @ViewChild('confirmForcedCloseModal') public confirmForcedCloseModal: ModalDirective;
    @ViewChild('searchStudentModal') public searchStudentModal: ModalDirective;

    public claimsHistoryData: Claims[] = [];
    public forcedClaimsData: Claims[] = [];
    private route$: Subscription;
    private claimId: number;
    private claimType: number;
    private tranctionId: any;
    private workflowId: any;
    claim: ClaimView = {} as ClaimView;
    claim1: ClaimView = {} as ClaimView;
    private claimId1: number;
    private claimType1: number;
    private tranctionId1: any;
    educationDetails: EducationHdrModel = {} as EducationHdrModel;
    beneficiary: Beneficiary = {} as Beneficiary;
    mode: string;
    successMessage: string;
    showSendBack: boolean = true;
    approvedAmountValid: boolean = true;
    inspectorCommentsValid: boolean = true;
    review: ReviewModel = {} as ReviewModel;
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    isvisable: boolean = true;
    isApprovedAmountDisable: boolean = true;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    packages: Package[] = [] as Package[];
    selectedPackages: Package[] = [] as Package[];
    healthFamilyPackages: HealthFamilyPackage[] = [] as HealthFamilyPackage[];
    viewMetWithAnAccident: boolean = false;
    claimExceptionDetails: string = "";
    isVisibleClaimExceptions: boolean = false;
    claimAmount: any = 0;
    expection: ClaimExceptionDetailsModel[] = [] as ClaimExceptionDetailsModel[];
    isPrematureClaim: boolean = false;
    benMaturityDate: Date;
    isShowClaimsHistory: boolean = false;
    isMapForcedClaim: boolean = false;
    selectedAll: boolean = false;
    forcedClaimsDataSelected: boolean = true;
    forcedCloseClaims: Array<number> = [];
    allForcedCloseClaims: Array<number> = [];
    // isInvalidNominee: boolean = false;
    benficiaryNominee: Array<BenNominee> = [];
    benNomineenDetails: BenNominee = {} as BenNominee;
    maxDate: any;
    //datePickerConfig: any;
    datePickerConfig: Partial<BsDatepickerConfig>;
    //Validation Nominee variables
    nomineeNameValid: boolean = true;
    relationshipValid: boolean = true;
    genderValid: boolean = true;
    nomineeDOBValid: boolean = true;
    nomineeShareValid: boolean = true;
    nomineeBankNameValid: boolean = true;
    nomineeBankAccountValid: boolean = true;
    nomineeBranchNameValid: boolean = true;
    nomineeIFSCCodeValid: boolean = true;
    rowIndex = -1;
    dobNominee: any;
    typeOfMode: string;
    healthCheckList: CheckListDetails[];
    pfCheckList: CheckListDetails[];
    deathCheckList: CheckListDetails[];
    disabilityCheckList: CheckListDetails[];
    educationCheckList: CheckListDetails[];
    checkList: ClaimCheckListDetailsModel[] = [] as ClaimCheckListDetailsModel[];
    isOnDeathofBeneficiaryOnRequestofNominee: boolean = false;
    chronologicalOrder: number = 0;
    isCOExceptionCommentsReq: boolean = false;
    coexceptionCommentsValid: boolean = true;
    //isEduOptionHead: boolean = true;
    //isPFOptionHead: boolean = true;
    //isHealthOptionHead: boolean = true;
    //isDisOptionHead: boolean = true;
    //isDeathOptionHead: boolean = true;

    isOptionHead: boolean = true;
    isDeathBenDisable: boolean = false;
    enableSearchStudentLink: boolean = true;
    //If Paging required in future
    ////Paging props start
    //page: number = pagination.pageNo;
    //totalRows: any;
    //pageSize: number = pagination.pageSize;
    ////Paging props end
    constructor(public router: Router, private route: ActivatedRoute, private dataService: InspectorDataService, private userService: UserService, private sanitizer: DomSanitizer) {
        this.maxDate = new Date();

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
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.claimId = params["claimId"];
                this.claimType = ClaimConstants[params["claimType"]];
                this.tranctionId = params["transactionId"];
                this.mode = params["mode"];
                this.claimAmount = params["claimAmount"];
                if (this.mode != "pending") {
                    this.isvisable = this.isApprovedAmountDisable = false;
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
                    debugger;
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
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                this.claim = data;
                debugger;
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

                    this.review.inspectorComments = this.claim.educationDetails.inspectorComments;
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
                    debugger;
                    //check list
                    if (this.claim.educationDetails.educationClaimCheckListDetails != null) {
                        if (this.claim.educationDetails.educationClaimCheckListDetails.length > 0) {
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
                    this.review.inspectorComments = this.claim.healthFamilyDetails.inspectorComments;
                    this.review.exceptionComments = this.claim.healthFamilyDetails.exceptionComments;
                    if (this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                        if (this.claim.healthFamilyDetails.typeOfClaim == 5) { this.viewMetWithAnAccident = true; }
                    }
                    //healthClaimExceptionDetails
                    if (this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                        if (this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                            debugger;
                            // this.claimExceptionDetailsList = this.claim.healthFamilyDetails.healthClaimExceptionDetails;
                            for (var i = 0; i < this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                                this.claimExceptionDetails = this.claimExceptionDetails.concat(this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");

                            }

                            this.isVisibleClaimExceptions = true;
                        }
                    }
                    //check list
                    if (this.claim.healthFamilyDetails.healthClaimCheckListDetails != null) {
                        if (this.claim.healthFamilyDetails.healthClaimCheckListDetails.length > 0) {
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
                    debugger;
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

                    this.review.inspectorComments = this.claim.disabilityDetails.inspectorComments;
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
                    //check list
                    debugger;
                    if (this.claim.disabilityDetails.disabilityClaimCheckListDetails != null) {
                        if (this.claim.disabilityDetails.disabilityClaimCheckListDetails.length > 0) {
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
                        this.isDeathBenDisable = true;
                    }
                    else
                        this.review.approvedAmount = this.claim.deathDetails.approvedAmount;

                    this.review.inspectorComments = this.claim.deathDetails.inspectorComments;
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
                    //check list
                    if (this.claim.deathDetails.deathClaimCheckListDetails != null) {
                        if (this.claim.deathDetails.deathClaimCheckListDetails.length > 0) {
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
                    this.review.inspectorComments = this.claim.providentFundDetails.inspectorComments;
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
                    //check list
                    if (this.claim.providentFundDetails.pfClaimCheckListDetails != null) {
                        if (this.claim.providentFundDetails.pfClaimCheckListDetails.length > 0) {
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

                if (this.claim.entryPoint == EntryPoint.Nominee) {
                    //this.showSendBack = false;
                    if (this.mode == "pending") {
                        if (this.claimType == ClaimConstants.HealthFamily || this.claimType == ClaimConstants.Education) {
                            this.isMapForcedClaim = true;
                            this.getBeneficiaryForcedClosedClaims(this.claim.benSno, claimType);
                        }
                        ////(March-15-2019 ) committed this code based on suman/client request
                        //if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
                        //    this.isInvalidNominee = true;
                        //    this.getBeneficiaryNomineeDetails(this.claim.benSno);
                        //    this.rowIndex = this.rowIndex + this.benficiaryNominee.length;
                        //}
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
                //this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, claimType, this.page, this.pageSize);
            });
    }
    getBeneficiaryNomineeDetails(id: any) {

        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe((data: any) => {

                this.benficiaryNominee = data;
            });

    }

    openModel() {
        this.typeOfMode = "Add";
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        this.rowIndex = -1;

        this.benNomineenDetails = {} as BenNominee;
        this.benNomineenDetails.benSno = this.claim.benSno;
        this.lgModal.show();
    }

    selectRelationship(args, benNominee: BenNominee) {
        this.benNomineenDetails.benNomineeRelation = args.target.options[args.target.selectedIndex].text;
        //this.benNomineenDetails.dob = new Date();
    }
    mappingNominee(item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;
    }
    addNomineeDetails(details: BenNominee) {
        debugger;
        if (this.validateNomineeDetails(details)) {
            if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == -1 && this.rowIndex == -1) {
                details.createdBy = this.userService.user.deptUserid;
                details.createdDate = new Date();
                // details.dob = new Date(this.dobNominee);
                this.benficiaryNominee.push(details);
                this.lgModal.hide();
            }
            else if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) != -1 && this.rowIndex == -1) {
                alert("already added please enter another nominee details"); return;
            }
            else {
                if (this.rowIndex != -1) {
                    //this.benficiaryNominee.splice(this.rowIndex, 1);
                    if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == this.rowIndex) {
                        //this.benficiaryNominee.push(details);
                        this.rowIndex = -1;
                        this.lgModal.hide();
                    }
                }
            }
            this.benNomineenDetails = {} as BenNominee;
        }
    }
    editNomineeDetails(details: BenNominee) {
        debugger;
        this.typeOfMode = "Edit";
        this.benNomineenDetails = details;
        this.rowIndex = this.benficiaryNominee.indexOf(details);
        this.lgModal.show();
    }

    clearNomineeDetails() {

    }
    validateNomineeDetails(details: BenNominee): boolean {
        let isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") { this.nomineeNameValid = isValid = false; }
        if (details.relationshipID == undefined || details.relationshipID <= 0) { this.relationshipValid = isValid = false; }
        if (details.benNomineeGender == undefined || details.benNomineeGender == "") { this.genderValid = isValid = false; }
        if (details.dob == undefined) { this.nomineeDOBValid = isValid = false; }
        if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") { this.nomineeShareValid = isValid = false; }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") { this.nomineeBankNameValid = isValid = false; }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "") { this.nomineeBankAccountValid = isValid = false; }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") { this.nomineeBranchNameValid = isValid = false; }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") { this.nomineeIFSCCodeValid = isValid = false; }

        return isValid;
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
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
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
        this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: false });
    }
    saveClaim(status: number, type: any, mode: string) {
        debugger;
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
                //    exp.exceptionText = this.review.inspChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;

                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
                    debugger;
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
            if (this.isMapForcedClaim) {
                if (this.forcedClaimsData != undefined && this.forcedClaimsData.length > 0) {
                    for (var k = 0; k < this.forcedClaimsData.length; k++) {
                        if (this.forcedClaimsData[k].selected) {
                            this.forcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                        }
                        this.allForcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                    }
                }
                this.review.UpdateForcedClaims = this.forcedCloseClaims;
                this.review.AllForcedClaims = this.allForcedCloseClaims;
            }
            //if (this.isInvalidNominee) {
            //    debugger;
            //    this.review.benficiaryNomineeDetails = this.benficiaryNominee;
            //}
            this.checkList = [];
            debugger;
            if (mode == "Forward") {

                if (this.claim.providentFundDetails != null) {
                    if (this.pfCheckList.length > 0) {
                        for (var i = 0; i < this.pfCheckList.length; i++) {
                            const chk: ClaimCheckListDetailsModel = {} as ClaimCheckListDetailsModel;
                            if (this.pfCheckList[i].checked) {
                                chk.checkListDtlId = this.pfCheckList[i].checkListDtlId;

                                this.checkList.push(chk);
                            }

                        }
                    }
                }
                if (this.claim.healthFamilyDetails != null) {
                    if (this.healthCheckList.length > 0) {
                        for (var i = 0; i < this.healthCheckList.length; i++) {
                            const chk: ClaimCheckListDetailsModel = {} as ClaimCheckListDetailsModel;
                            if (this.healthCheckList[i].checked) {
                                chk.checkListDtlId = this.healthCheckList[i].checkListDtlId;

                                this.checkList.push(chk);
                            }

                        }
                    }
                }
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                    if (this.deathCheckList.length > 0) {
                        for (var i = 0; i < this.deathCheckList.length; i++) {
                            const chk: ClaimCheckListDetailsModel = {} as ClaimCheckListDetailsModel;
                            if (this.deathCheckList[i].checked) {
                                chk.checkListDtlId = this.deathCheckList[i].checkListDtlId;

                                this.checkList.push(chk);
                            }

                        }
                    }
                }
                if (this.claim.disabilityDetails != null) {
                    if (this.disabilityCheckList.length > 0) {
                        for (var i = 0; i < this.disabilityCheckList.length; i++) {
                            const chk: ClaimCheckListDetailsModel = {} as ClaimCheckListDetailsModel;
                            if (this.disabilityCheckList[i].checked) {
                                chk.checkListDtlId = this.disabilityCheckList[i].checkListDtlId;

                                this.checkList.push(chk);
                            }

                        }
                    }
                }
                if (this.claim.educationDetails != null) {
                    if (this.educationCheckList.length > 0) {
                        for (var i = 0; i < this.educationCheckList.length; i++) {
                            const chk: ClaimCheckListDetailsModel = {} as ClaimCheckListDetailsModel;
                            if (this.educationCheckList[i].checked) {
                                chk.checkListDtlId = this.educationCheckList[i].checkListDtlId;

                                this.checkList.push(chk);
                            }

                        }
                    }
                }
                this.review.claimCheckListDetails = this.checkList;
            }
            else if (mode == "force close") {
                this.confirmForcedCloseModal.hide();
                this.review.benDeathStatus = true;
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
        //|| this.mode == "view"
        if (this.mode == "pending") {
            this.router.navigate(['inspector/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['inspector/sendbackclaims']);

        }
        else if (this.mode == "reject") {
            this.router.navigate(['inspector/rejectclaims']);

        }
        else if (this.mode == "approve") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });

        }
        else if (this.mode == "force") {
            this.router.navigate(['inspector/forcecloseclaims'], { skipLocationChange: true });

        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });

        }
        else if (this.mode == "search") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });

        }
    }

    validateClaim(type: any) {
        debugger;
        let isValid = true;
        let sharePercentage = 0;
        let count = 0;
        let chkListCount = 0;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) { this.approvedAmountValid = isValid = false; }
            if (this.claim.providentFundDetails != null) {
                if (this.pfCheckList.length > 0) {
                    for (var i = 0; i < this.pfCheckList.length; i++) {
                        if (this.pfCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.healthFamilyDetails != null) {
                if (this.healthCheckList.length > 0) {
                    for (var i = 0; i < this.healthCheckList.length; i++) {
                        if (this.healthCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.deathDetails != null) {
                if (this.deathCheckList.length > 0) {
                    for (var i = 0; i < this.deathCheckList.length; i++) {
                        if (this.deathCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.disabilityDetails != null) {
                if (this.disabilityCheckList.length > 0) {
                    for (var i = 0; i < this.disabilityCheckList.length; i++) {
                        if (this.disabilityCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.educationDetails != null) {
                if (this.educationCheckList.length > 0) {
                    for (var i = 0; i < this.educationCheckList.length; i++) {
                        if (this.educationCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (chkListCount <= 0) {
                alert("At least one document needs to be checked");
                isValid = false;
            }
        }
        if (this.review.inspectorComments == undefined || this.review.inspectorComments == "") { this.inspectorCommentsValid = isValid = false; }
        if ((this.review.inspChronologicalOrderComments == undefined || this.review.inspChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) { this.coexceptionCommentsValid = isValid = false; }
        if (this.isMapForcedClaim) {
            if (this.forcedClaimsData.find(c => c.selected == true) == undefined) {
                this.forcedClaimsDataSelected = isValid = false;
            }
        }
        ////Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        //if (this.isInvalidNominee) {
        //    debugger;
        //    if (this.benficiaryNominee.length > 0) {
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
        //        }
        //        if (sharePercentage != 100) {
        //            alert("Share Allocation Accepts only 100%");
        //            isValid = false;
        //        }
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            if (this.benficiaryNominee[i].isMappingNominee) {
        //                count++;
        //            }
        //        }
        //        if (count != 1) {
        //            alert("Please select one nominee to mapping ");
        //            isValid = false;
        //        }
        //    }
        //    else {
        //        alert("Please map one nominee to this claim ");
        //        isValid = false;
        //    }
        //}
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
    //If Paging required in future
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    debugger;
    //    this.dataService
    //        .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType, pageNo, pageSize)
    //        .subscribe((data: any) => {
    //            this.claimsHistoryData = data.results;
    //            this.totalRows = data.rowCount;
    //        });
    //}
    //changepage(page) {
    //    this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, this.claimType, this.page, this.pageSize);
    //}
    getBeneficiaryForcedClosedClaims(benSNo: any, tranctionType: any) {
        this.dataService
            .getBeneficiaryForcedClosedClaims(benSNo, tranctionType)
            .subscribe((data: any) => {
                this.forcedClaimsData = data;
            });
    }
    selectAll() {
        this.forcedClaimsDataSelected = true;
        for (var i = 0; i < this.forcedClaimsData.length; i++) {
            this.forcedClaimsData[i].selected = this.selectedAll;
        }
    }
    checkIfAllSelected() {
        this.forcedClaimsDataSelected = true;
        this.selectedAll = this.forcedClaimsData.every(function (item: any) {
            return item.selected == true;
        })
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
    disabilityCheckedListChange(eve, checkListDtlId) {
        debugger;
        if (this.disabilityCheckList != null) {
            for (var i = 0; i < this.disabilityCheckList.length; i++) {
                if (this.disabilityCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.disabilityCheckList[i].checked = true;
                    else
                        this.disabilityCheckList[i].checked = false;
                }
            }
            if (this.disabilityCheckList.find(e => e.checked == true))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    }
    pfCheckedListChange(eve, checkListDtlId) {
        debugger;
        if (this.pfCheckList != null) {
            for (var i = 0; i < this.pfCheckList.length; i++) {
                if (this.pfCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.pfCheckList[i].checked = true;
                    else
                        this.pfCheckList[i].checked = false;
                }
            }
            if (this.pfCheckList.find(e => e.checked == true))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    }
    educationCheckedListChange(eve, checkListDtlId) {
        debugger;
        if (this.educationCheckList != null) {
            for (var i = 0; i < this.educationCheckList.length; i++) {
                if (this.educationCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.educationCheckList[i].checked = true;
                    else
                        this.educationCheckList[i].checked = false;
                }
            }
            if (this.educationCheckList.find(e => e.checked == true))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    }
    healthCheckedListChange(eve, checkListDtlId) {
        debugger;
        if (this.healthCheckList != null) {
            for (var i = 0; i < this.healthCheckList.length; i++) {
                if (this.healthCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.healthCheckList[i].checked = true;
                    else
                        this.healthCheckList[i].checked = false;
                }
            }
            if (this.healthCheckList.find(e => e.checked == true))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    }
    deathCheckedListChange(eve, checkListDtlId) {
        debugger;
        if (this.deathCheckList != null) {
            for (var i = 0; i < this.deathCheckList.length; i++) {
                if (this.deathCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.deathCheckList[i].checked = true;
                    else
                        this.deathCheckList[i].checked = false;
                }
            }
            if (this.deathCheckList.find(e => e.checked == true))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    }

    viewClaimInfo1(claim) {
        this.claimId = claim.claimId;
        this.claimType = this.claimType;
        this.tranctionId = 16;
        this.claimModal.show();
    }

    viewClaimInfo(claim: any) {
        debugger;
        this.claimId1 = claim.claimId;
        this.claimType1 = this.claimType;
        this.tranctionId1 = claim.transactionId;
        //this.attachmentList = [];
        this.getClaimDetailsByClaimId1(this.claimId1, this.tranctionId1, this.claimType1);
    }
    getClaimDetailsByClaimId1(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                debugger;
                this.claim1 = data;
                this.child.getData(this.claim1);
                this.claimModal.show();
            });
    }

    noClick() {
        this.confirmForcedCloseModal.hide();
    }
    forcedCloseClick(type: any) {
        if (this.validateClaim(type)) {
            this.confirmForcedCloseModal.show();
        }
    }
    searchLinkClick() {
        window.open('/inspector/searchstudent','searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    }
}
