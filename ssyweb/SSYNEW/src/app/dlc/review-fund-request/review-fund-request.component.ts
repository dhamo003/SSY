import { Component, OnInit, ViewChild } from '@angular/core';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FundClaimList, FundRequestDetailsModel } from '../../models/fundRequestedClaimsDetails.model';
import { ReviewModel } from '../../models/review.model';
import { WorkflowTrans, UserType, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { ClaimView } from '../../claim/models/claimview.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { EducationDetailModel } from '../../claim/models/education.model';

@Component({
    selector: 'app-review-fund-request',
    templateUrl: './review-fund-request.component.html',
    styleUrls: ['./review-fund-request.component.css']
})
export class ReviewFundRequestComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('child') private child: ClaimviewdataComponent;
    private route$: Subscription;
    private fundRequestId: any;
    private workflowId: any;
    mode: string;
    fundrequestDetails: FundRequestDetailsModel;
    claimsData: FundClaimList[];
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    successMessage: string;
    dlcComments: string;
    alcComments: string;
    boardComments: string;
    fundReviewModel: ReviewModel = {} as ReviewModel;
    alcId: any;
    isVisible: boolean = false;
    sumofamount: number;
    commentsValid: boolean = true;
    claimsTrack: ClaimTrack = {} as ClaimTrack;

    claimId: any;
    claimType: any;
    tranctionId: any;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    claim: ClaimView = {} as ClaimView;
    chronologicalOrder: number = 0;
    isCOExceptionCommentsReq: boolean = false;
    coexceptionCommentsValid: boolean = true;
    claimCOExceptionDetails: string = "";
    dlcChronologicalOrderComments: string;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: DlcDataService, private userService: UserService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestId = params["fundRequestId"];
                this.alcId = params["alcId"];
                this.mode = params["mode"];
                if (this.mode == "pending") {
                    this.isVisible = true;
                }
                this.workflowId = params["workflowId"];
                this.chronologicalOrder = params["chronologicalOrder"];
                if (this.chronologicalOrder > 0) {
                    alert("You are not following the chronological order");
                    this.isCOExceptionCommentsReq = true;
                }
            }
        );

        // this.getFundRequestedClaimsById(this.fundRequestId);
        this.getFundRequestedClaimsById(this.fundRequestId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
    }


    getFundRequestedClaimsById(fundRequestId: any) {
        this.sumofamount = 0;
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.claimsData = data.fundClaimList;
                this.claimsData.forEach(x => this.sumofamount += x.approvedAmount)
                this.dlcComments = this.fundrequestDetails.dlcComments;
                this.alcComments = this.fundrequestDetails.alcComments;
                this.boardComments = this.fundrequestDetails.boardComments;
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

    updateFundRequest(id: any,type:string) {
        debugger;
        if (this.dlcComments == undefined || this.dlcComments == "") {
            this.commentsValid = false;
           // return;
        }
        if ((this.dlcChronologicalOrderComments == undefined || this.dlcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = false;
           // return;
        }
        if (!this.commentsValid || !this.coexceptionCommentsValid) { return;}

        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestHdrId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.dlcComments = this.dlcComments;
        this.fundReviewModel.dlcChronologicalOrderComments = this.dlcChronologicalOrderComments;
        this.fundReviewModel.fundRequestType = 1;// Claims
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then((data: any) => {
                    if (type.toLowerCase() == "forward") {
                        this.successMessage = "Fund request forwarded to CEO";
                    }
                    else
                        this.successMessage = "Fund request " + type + " successfully";
                    this.successModal.show();
                });
        }
    }
    getClaimTrackDetailsByClaimId(transactionId: any, tranctionType: any, wfId: any) {
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe((data: any) => {
                this.claimsTrack = data;
            });
    }
    cancelclick() {
        if (this.mode == "pending") {
            this.router.navigate(['dlc/fundrequestedclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['dlc/sendbackfundrequestlist']);
        }
        else if (this.mode == "forward") {
            this.router.navigate(['dlc/forwardfundrequestlist']);
        }
    }
    okClick() {
        this.successModal.hide();
       this.cancelclick();
        //this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: false });
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
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    viewClaimInfo(claim: any) {
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
                    debugger;
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
