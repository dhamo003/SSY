import { Component, OnInit, ViewChild } from '@angular/core';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
import { FundRequestDetailsModel, FundClaimList } from '../../models/fundRequestedClaimsDetails.model';
import { ClaimConstants, ClaimStatus, WorkflowTrans } from '../../claim/pipes/constnts.model';
import { ClaimTypes } from '../../models/ClaimTypes.model';
import { FundRequestModel, PaymentModel } from '../../models/fundRequestProcess.model';
import { LocationsMaster } from '../../models/locationsDetails.model';
import { ClaimTrack } from '../../claim/models/track.model';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { ClaimView } from '../../claim/models/claimview.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { EducationDetailModel } from '../../claim/models/education.model';


@Component({
  selector: 'app-reviewfundrequest',
  templateUrl: './reviewfundrequest.component.html',
  styleUrls: ['./reviewfundrequest.component.css']
})
export class ReviewfundrequestComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('addClaimsModal') public addClaimsModal: ModalDirective; 
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('child') private child: ClaimviewdataComponent;

    private route$: Subscription;
    private fundRequestId: any;
    private workflowId: any;
    editmode: boolean = false;
    fundrequestDetails: FundRequestDetailsModel;
    claimsData: FundClaimList[];
    newclaimsData: FundClaimList[];
    addclaimsData: FundClaimList[];
    claimData: FundRequestModel = {} as FundRequestModel;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    selectedAll: boolean = false;
    newselectedAll: any;
    successMessage: string;
    sumofAmount: any = 0;
    mode: string;
    selectedClaimList: Array<PaymentModel> = [];
    LocationList: LocationsMaster[];
    claimMasterIds: Array<any> = [];
    locationsIds: Array<any> = [];
    claimTypesList: ClaimTypes[];
    selectedLocations: any;
    selectedClaimTypes: any;
    dropdownSettings = {};
    locationSettings = {};
    GetClaimVisible: boolean = false;
    claimsTrack: ClaimTrack = {} as ClaimTrack;

    claimId: any;
    claimType: any;
    tranctionId: any;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    claim: ClaimView = {} as ClaimView;
    alcComments: string;
    commentsValid: boolean = true;
    dlcComments: string;
    boardComments: string;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: AlcDataService, private userService: UserService, private sanitizer: DomSanitizer)  { }

    ngOnInit() {
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundRequestId = params["fundRequestId"];
                this.mode = params["mode"];
                if (this.mode == "edit") {
                    this.editmode = true;
                    this.selectedAll = true;
                }
                else
                    this.editmode = false;
                this.workflowId = params["workflowId"];
            }
        );
       // this.getFundRequestedClaimsById(this.fundRequestId);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getClaimTypesMasterDetails();
        this.getFundRequestedClaimsById(this.fundRequestId);
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'claimMasterId',
            textField: 'claimName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.locationSettings = {
            singleSelection: false,
            idField: 'blockSno',
            textField: 'blockName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    
    getFundRequestedClaimsById(fundRequestId:any) {
        this.claimsData = [];
        this.dataService
            .getFundRequestedClaimsById(fundRequestId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.claimsData = data.fundClaimList;
                this.alcComments = data.alcComments;
                this.dlcComments = data.dlcComments;
                this.boardComments = data.boardComments;
                this.selectAll();
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

                this.getLocationDetailsByRloId(this.RloOfficeAddress.rloOfficeId);
            });
    }


    selectAll() {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    }
    checkIfAllSelected() {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item: any) {
            return item.selected == true;
        })

       // if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
       // else { this.sumofAmount -= itemData.approvedAmount; }
    }
    selectedClaims() {
        this.sumofAmount = 0;
        var res = this.claimsData;
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            let claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: res[i].selected ? 1 : 0 });
            if (res[i].selected == true) { this.sumofAmount += res[i].approvedAmount;}
        }
    }
    SubmitRequest() {
        this.selectedClaims();
        this.showErrorMessage = false; 

        if (this.selectedClaimList != null && this.selectedClaimList.length > 0 && this.selectedClaimList.filter(x => x.statusId == 1).length > 0) {
            debugger;
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                this.claimData.updatedBy = this.userService.user.deptUserid;
                this.claimData.updatedDate = new Date();
                this.claimData.statusId = ClaimStatus.FundRequestFromALC;
                this.claimData.fundRequestClaims = this.selectedClaimList;
                this.claimData.fundRequestHdrId = this.fundRequestId;
                this.claimData.fundRequestDate = new Date();
                //this.claimData.boardId = this.boardId;
                this.claimData.aLCComments = this.alcComments.trim();
                this.claimData.fundRequested = this.sumofAmount;
                //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveFundRequesteClaims(this.claimData)
                        .then((data: any) => {
                            if (data) {
                                this.successMessage = "Fund request was successfully updated";
                            }
                            else {
                                this.successMessage = "Invalid transaction";
                            }
                            this.successModal.show();
                        });
                    //}
                }
            }
            else
                this.commentsValid = false;
        }
        else { this.showErrorMessage = true; }
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
        this.cancelclick();
        //this.GetClaims();
    }
    cancelclick() {
        this.router.navigate(['alc/fundrequestedclaims']);
    }

    ShowAddClaims() {
        this.resetModelPopup();
        this.addClaimsModal.show();
    }

    CancelAddClaims() {
        this.resetModelPopup();
        this.addClaimsModal.hide();
    }

    getLocationDetailsByRloId(id: any) {
        this.dataService
            .getLocationsMasterData(id)
            .subscribe((data: any) => {
                this.LocationList = data;
            });
    }

    getClaimTypesMasterDetails() {
        this.dataService
            .getClaimTypesMasterData()
            .subscribe((data: any) => {

                this.claimTypesList = data;
            });
    }
    GetClaims() {
        debugger;
        if (this.fundrequestDetails.boardId > 0) {
            this.boardIdValid = true;
            let claimMaster;
            let locationId;
            if (this.claimMasterIds.length > 0) {
                claimMaster = this.claimMasterIds.map(function (e) {
                    return e.claimMasterId;
                }).join(', ')
            }
            else {
                claimMaster = 0;
            }
            if (this.locationsIds.length > 0) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ')
            }
            else {
                locationId = 0;
            }
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.fundrequestDetails.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    }

    getAllApprovalClaims(deptUserid: number, type: any, boardId: any, claimTypeIds: any, locationsIds: any) {
        this.newclaimsData = [];
        this.newselectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe((data: any) => {
                this.newclaimsData = data;
                this.GetClaimVisible = true;
            });
    }

    newselectAll() {
        this.showErrorMessage = false;
        for (var i = 0; i < this.newclaimsData.length; i++) {
            this.newclaimsData[i].selected = this.newselectedAll;
        }
    }
    newcheckIfAllSelected() {
        this.showErrorMessage = false;
        this.newselectedAll=this.newclaimsData.every(function (item: any) {
            return item.selected == true;
        })
    }
    
    AddNewClaims() {
        debugger;
        if (this.newclaimsData != null && this.newclaimsData.length > 0) {
            var res = this.newclaimsData.filter(x => x.selected == true);
            if (res != null && res.length > 0) {
                this.addclaimsData = [];
                for (var i = 0; i < res.length; i++) {
                    this.addclaimsData.push(res[i]);
                    this.claimsData.push(res[i]);
                }
                this.claimsData = this.claimsData.filter((el, i, a) => i === a.indexOf(el));
                this.resetModelPopup();
                this.addClaimsModal.hide();
            }
        }
    }

    removeDuplicateUsingFilter(arr) {
        let unique_array = arr.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array
    }

    resetModelPopup() {
        this.locationSettings = {};
        this.dropdownSettings = {};
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.GetClaimVisible = false;
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
