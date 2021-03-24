import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { FundRequestModel, PaymentModel } from '../../models/fundRequestProcess.model';
import { BoardMasterDetails } from '../../models/boardDetails.model';
import { WorkFlowMaster } from '../../models/workerTypeDetails.model';
import { LocationsMaster } from '../../models/locationsDetails.model';
import { FundClaimList, FundRequestDetailsModel } from '../../models/fundRequestedClaimsDetails.model';
import { Subscription } from 'rxjs';
import { CeoDataService } from '../services/ceo-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../UserService';
import { UserType,ClaimConstants, ClaimStatus, WorkflowTrans } from '../../claim/pipes/constnts.model';
import { ReviewModel } from '../../models/review.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { AttachmentModel } from 'src/app/claim/models/attachment.model';
import { ClaimView } from 'src/app/claim/models/claimview.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimviewdataComponent } from 'src/app/alc/claimviewdata/claimviewdata.component';
import { EducationDetailModel } from 'src/app/claim/models/education.model';

@Component({
  selector: 'app-fund-request',
  templateUrl: './fund-request.component.html',
  styleUrls: ['./fund-request.component.css']
})
export class FundRequestComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('child') private child: ClaimviewdataComponent;

    private route$: Subscription;
    private fundRequestId: any;
    private workflowId: any;
    editmode: boolean = false;
    fundrequestDetails: FundRequestDetailsModel;
    claimsData: FundClaimList[];
    claimData: FundRequestModel = {} as FundRequestModel;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    selectedAll: boolean = false;
    successMessage: string;
    sumofAmount: any = 0;
    mode: string;
    selectedClaimList: Array<PaymentModel> = [];
    boardComments: any;
    dlcComments: string;
    alcComments: string;
    fundReviewModel: ReviewModel = {} as ReviewModel;
    alcId: any;
    routeMode: string;
    commentsValid: boolean = true;
    isVisible: boolean = false;
    allClaimsRequested: any;
   
    claimsTrack: ClaimTrack = {} as ClaimTrack;
    chronologicalOrder: number = 0;
    isCOExceptionCommentsReq: boolean = false;
    coexceptionCommentsValid: boolean = true;
    claimCOExceptionDetails: string = "";
    isVisibleCOExceptions: boolean = false;
    ceoChronologicalOrderComments: any;

    claimId: any;
    claimType: any;
    tranctionId: any;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    claim: ClaimView = {} as ClaimView;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: CeoDataService, private userService: UserService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestId = params["fundRequestId"];
                this.mode = params["mode"];
                this.alcId = params["alcId"];
                this.routeMode = params["routeMode"];
                this.allClaimsRequested = params["allClaimsRequested"];
                debugger;
                if (this.mode == "edit") {
                    this.editmode = true;
                    this.selectedAll = true;
                    this.isVisible = true;
                }
                else if (this.mode == "view")
                {
                    this.isVisible = false;
                }
                else {
                    this.editmode = false;
                    this.isVisible = false;
                }
                this.workflowId = params["workflowId"];
                this.chronologicalOrder = params["chronologicalOrder"];
                if (this.chronologicalOrder > 0) {
                    alert("You are not following the chronological order");
                    this.isCOExceptionCommentsReq = true;
                }
                //this.editmode = true;
            }
        );
        debugger;
        this.getFundRequestedClaimsById(this.fundRequestId, this.userService.user.userTpe);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    }


    getFundRequestedClaimsById(fundRequestId: any, userType: any) {
        this.sumofAmount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId, userType)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.claimsData = data.fundClaimList;
                this.claimsData.forEach(x => this.sumofAmount += x.approvedAmount)
                //if (this.editmode)
                this.selectAll();
                this.boardComments = this.fundrequestDetails.boardComments;
                this.alcComments = this.fundrequestDetails.alcComments;
                this.dlcComments = this.fundrequestDetails.dlcComments;
                //Chronological Order Exception Details
                if (this.fundrequestDetails.dlcChronologicalOrderComments != null) {
                    this.claimCOExceptionDetails = this.fundrequestDetails.dlcChronologicalOrderComments;
                    this.isVisibleCOExceptions = true;
                }
                this.getClaimTrackDetailsByClaimId(this.fundRequestId, 0, this.workflowId);
            });
    }

    GetRLOOfficeUserInformation(deptUserid: number, userType: any) {
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe((data: any) => {
                this.officeDetails = data;
                this.RloOfficeAddress = data.rloOffices[0];
                if (this.officeDetails.approvedClaimsAmount > this.RloOfficeAddress.balanceOfTheAmount)
                    this.AmountShortfall = (this.officeDetails.approvedClaimsAmount - this.RloOfficeAddress.balanceOfTheAmount);
                else
                    this.AmountShortfall = 0;
            });
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }

    selectAll() {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            debugger;
            if (this.claimsData[i].paymentStatus == 0)
                this.claimsData[i].selected = this.selectedAll;
            else
                this.claimsData[i].selected = false;
            if (this.selectedAll && this.claimsData[i].paymentStatus == 0) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    }
    checkIfAllSelected(itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item: any) {
            return item.selected == true;
        })

        if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        else { this.sumofAmount -= itemData.approvedAmount; }
    }
    selectedClaims() {
        debugger;
        var res = this.claimsData.filter(x => x.selected == true);;
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            let claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
        }
    }
    SubmitRequest(Id:any) {
        debugger;
        this.selectedClaims();
        this.showErrorMessage = false;

        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(x => x.statusId == 1).length > 0) {
            this.claimData.updatedBy = this.userService.user.deptUserid;
            this.claimData.updatedDate = new Date();
            this.claimData.statusId = Id;
            
            this.claimData.fundRequestHdrId = this.fundRequestId;
            
            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveFundRequesteClaims(this.claimData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Fund request updated successfully";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
                //}
            }
        }
        else { this.showErrorMessage = true; }
    }


    updateFundRequest(id: any, type:string) {

        if (this.boardComments == undefined || this.boardComments == "") {
            this.commentsValid = false;
           // return;
        }
        if ((this.ceoChronologicalOrderComments == undefined || this.ceoChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = false;
            // return;
        }
        if (!this.commentsValid || !this.coexceptionCommentsValid) { return; }
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(x => x.statusId == 1).length > 0) {
            this.fundReviewModel.statusId = id;
            this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
            this.fundReviewModel.claimType = null;
            this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
            this.fundReviewModel.userId = this.userService.user.deptUserid;
            this.fundReviewModel.boardComments = this.boardComments;
            this.fundReviewModel.ceoChronologicalOrderComments = this.ceoChronologicalOrderComments;
            this.fundReviewModel.partialFundRequestClaims = this.selectedClaimList;
            this.fundReviewModel.partialFundRequestClaimsAmount = this.sumofAmount;
            this.fundReviewModel.fundRequestType = 1;// Claims
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateWorkFlowStatus(this.fundReviewModel)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Fund request " + type + " successfully";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
        }
        else { this.showErrorMessage = true; }
    }

    okClick() {
        this.successModal.hide();
        this.cancelclick();
      
    }
    cancelclick() {
        if (this.routeMode == "forward") {
            this.router.navigate(['ceo/fundrequestlist']);
        }
        else if (this.routeMode == "sendback") {
            this.router.navigate(['ceo/sendbackfundrequestlist']);
        }
        else if (this.routeMode == "approved") {
            this.router.navigate(['ceo/approvedfundrequestlist']);
        }
        else if (this.routeMode == "rejected") {
            this.router.navigate(['ceo/rejectedfundrequestlist']);
        }
    }
    //cancelclick() {
    //    this.router.navigate(['ceo/fundrequestlist']);
    //}

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
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    viewClaimInfo(claim: any) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, ClaimConstants[this.claimType]);
    }
    getClaimDetailsByClaimId(id: any, tranctionId: any, claimType: any) {
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe((data: any) => {
                this.claim = data;
                this.child.getData(this.claim);
                this.attachModel.show();
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
                }
                if (this.claim.healthFamilyDetails != null) {
                    for (var j = 0; j < this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.healthFamilyDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
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
                }
                if (this.claim.disabilityDetails != null) {
                    for (var j = 0; j < this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                        let attachment = this.claim.disabilityDetails.attachmentDTOList[j];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        this.attachmentList.push(attachment);
                    }
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
            });
    }
}
