import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants, LovConstants } from '../../claim/pipes/constnts.model';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { PaymentProcessModel, PaymentClaims } from '../../claim/models/paymentprocess.model';
import { Dictionary } from 'lodash'
import * as Collections from 'typescript-collections';
import { forEach } from 'typescript-collections/dist/lib/arrays';
import { ModalDirective } from 'ngx-bootstrap';
import { BoardMasterDetails } from '../../models/boardDetails.model';
import { WorkFlowMaster } from '../../models/workerTypeDetails.model';
import { LocationsMaster } from '../../models/locationsDetails.model';
import { ClaimTypes } from '../../models/ClaimTypes.model';
import { FundRequestModel, PaymentModel } from '../../models/fundRequestProcess.model';
import { LovDetails } from '../../claim/models/Lov.model';
import { FundRequestExpensesHdr, FundRequestExpensesDtlList } from '../../models/expenses.model';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { ClaimView } from '../../claim/models/claimview.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentModel } from '../../claim/models/attachment.model';
import { EducationDetailModel } from '../../claim/models/education.model';

@Component({
    selector: 'app-fund-request',
    templateUrl: './fund-request.component.html',
    styleUrls: ['./fund-request.component.css']
})
export class FundRequestComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('expensesModal') public expensesModal: ModalDirective;
    @ViewChild('attachModal') public attachModel: ModalDirective;
    @ViewChild('child') private child: ClaimviewdataComponent;

    claimsData: Claims[];
    alcDetails: AlcDetails;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    claimData: FundRequestModel = {} as FundRequestModel;
    AmountShortfall: any;
    date = new Date();
    selectedAll: any;
    GetClaimVisible: boolean = false;
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    selectedClaimList: Array<PaymentModel> = [];
    successMessage: string;
    boardList: BoardMasterDetails[];
    WorkerTypeList: WorkFlowMaster[];
    LocationList: LocationsMaster[];
    boardId: any;
    claimMasterIds: Array<any> = [];
    locationsIds: Array<any> = [];
    claimTypesList: ClaimTypes[];
    sumofAmount: any = 0;
    selectedLocations: any;
    selectedClaimTypes: any;
    dropdownSettings = {};
    locationSettings = {};
    sumofAmountVisible: boolean = false;
    claim: ClaimView = {} as ClaimView;
    expensesTypesLov: LovDetails[];
    expenseTypeValid: boolean = true;
    viewExpenses: boolean = false;
    rowIndex = -1;
    fundRequestExpensesData: FundRequestExpensesHdr = {} as FundRequestExpensesHdr;
    expensesDetailsArray: Array<FundRequestExpensesDtlList> = [];
    expensesDetails: FundRequestExpensesDtlList = {} as FundRequestExpensesDtlList;
    fundRequestType: string = "claims";
    showErrorMessage1: boolean = false;
    fundRequiredValid: boolean = true;
    claimId: any;
    claimType: any;
    tranctionId: any;
    attachmentList: Array<AttachmentModel> = [];
    educationList: Array<EducationDetailModel> = [];
    commentsValid: boolean = true;
    alcComments: string;
    constructor(public router: Router, private dataService: AlcDataService, private userService: UserService, private sanitizer: DomSanitizer) {

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
    ngOnInit() {
       // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getWorkerTypeDetails();
        this.getBoardDetails();
        this.getExpenses();
        this.getClaimTypesMasterDetails();
        this.boardId = 0;
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
    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    GetClaims() {
        
        if (this.boardId > 0) {
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
            if (this.locationsIds.length > 0 ) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ')
            }
            else {
                locationId = 0;
            }
            this.sumofAmount = 0;
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    }
    getAllApprovalClaims(deptUserid: number, type: any, boardId: any, claimTypeIds: any, locationsIds: any) {
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe((data: any) => {
                this.claimsData = data;
                this.GetClaimVisible = true;
                this.sumofAmountVisible = this.claimsData.length > 0 ? true : false;
            });
    }

    GetAlcInformation(deptUserid: number) {
        this.dataService
            .GetAlcInformation(deptUserid)
            .subscribe((data: any) => {
                this.alcDetails = data;
                if (this.alcDetails.approvedClaimsAmount > this.alcDetails.balanceOfTheAmount)
                    this.AmountShortfall = (this.alcDetails.approvedClaimsAmount - this.alcDetails.balanceOfTheAmount);
                else
                    this.AmountShortfall = 0;
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

    SubmitRequest() {
        debugger;

        if (this.boardId > 0) {
                this.boardIdValid = true;
                if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                    this.commentsValid = true;

                    if (this.fundRequestType == "claims") {
                        this.selectedClaims();
                        this.showErrorMessage = false;
                        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
                            this.claimData.createdBy = this.userService.user.deptUserid;
                            this.claimData.fundRequestDate = new Date();
                            this.claimData.creadtedDate = new Date();
                            this.claimData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                            this.claimData.statusId = ClaimStatus.FundRequestFromALC;
                            this.claimData.aLCComments = this.alcComments.trim();
                            this.claimData.fundRequestClaims = this.selectedClaimList;
                            let locationId;
                            if (this.locationsIds.length > 0) {
                                locationId = this.locationsIds.map(function (e) {
                                    return e.blockSno;
                                });
                            }
                            else {
                                locationId = this.LocationList.map(function (e) {
                                    return e.blockSno;
                                });
                            }
                            this.claimData.locations = locationId;
                            this.claimData.boardId = this.boardId;
                            this.claimData.fundRequested = this.sumofAmount;

                            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                            if (confirm("Are you sure to proceed ")) {
                                this.dataService
                                    .saveFundRequesteClaims(this.claimData)
                                    .then((data: any) => {
                                        if (data) {
                                            this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                            this.sumofAmount = 0;
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
                    else if (this.fundRequestType == "expenses") {
                        this.showErrorMessage1 = false;
                        if (this.expensesDetailsArray != null && this.expensesDetailsArray.length > 0) {
                            this.fundRequestExpensesData.createdBy = this.userService.user.deptUserid;
                            this.fundRequestExpensesData.fundRequestDate = new Date();
                            this.fundRequestExpensesData.createdDate = new Date();
                            this.fundRequestExpensesData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                            this.fundRequestExpensesData.statusId = ClaimStatus.FundRequestFromALC;
                            this.fundRequestExpensesData.boardId = this.boardId;


                            let sumofExpenses: number = 0;
                            for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                                sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                            }
                            this.fundRequestExpensesData.fundRequested = sumofExpenses;
                            this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                            this.fundRequestExpensesData.alcComments = this.alcComments.trim();
                            if (confirm("Are you sure to proceed ")) {
                                this.dataService
                                    .saveFundRequestExpenses(this.fundRequestExpensesData)
                                    .then((data: any) => {
                                        if (data) {
                                            this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                            this.sumofAmount = 0;
                                        }
                                        else {
                                            this.successMessage = "Invalid transaction";
                                        }
                                        this.successModal.show();
                                    });
                            }
                        }
                        else { this.showErrorMessage1 = true; }
                    }
                }
                else
                    this.commentsValid = false;
            }
            else
                this.boardIdValid = false;        
    }

    okClick() {
        this.successModal.hide();
        if (this.fundRequestType == "claims") {
            this.GetClaims();
            this.alcComments = "";
        }
        else if (this.fundRequestType == "expenses") {
            this.clearExpenses();
            this.expensesDetails = {} as FundRequestExpensesDtlList;
            this.expensesDetailsArray = [];
            this.alcComments = "";
        }
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
    checkIfAllSelected(itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item: any) {
            return item.selected == true;
        })

        if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        else { this.sumofAmount -= itemData.approvedAmount; }
    }
    selectedClaims() {
        var res = this.claimsData.filter(x => x.selected == true);
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            let claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: 1 });
        }
    }

    selectedLocationsList(args) {
        this.selectedLocations = args.target.options[args.target.selectedIndex];
    }

    selectedClaimTypesList(args) {
        this.selectedClaimTypes = args.target.options[args.target.selectedIndex];
    }

    getBoardDetails() {
        this.dataService
            .getBoardMasterData()
            .subscribe((data: any) => {
                this.boardList = data;
            });
    }

    getWorkerTypeDetails() {
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe((data: any) => {
                this.WorkerTypeList = data;
            });
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

    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }

    cancelClick() {
        this.router.navigate(['alc/fundrequestedclaims']);
    }
    selectBoardChange() {
        debugger;
        this.GetClaimVisible = false;
        this.claimsData = [];

    }

    getExpenses() {
        this.dataService
            .getlovDetails(LovConstants.ExpensesType)
            .subscribe((data: any) => {
                this.expensesTypesLov = data;
            });
    }
    openModel() {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    }
    addExpenseDetails(details: FundRequestExpensesDtlList) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type"); return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(x => x.itemId == details.itemId) == this.rowIndex) {
                        this.expensesDetailsArray.splice(this.rowIndex, 1);
                        details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
                        this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type"); return;
                    }
                }
            }
            this.expensesDetails = {} as FundRequestExpensesDtlList;
        }
    }
    editExpenseDetails(details: FundRequestExpensesDtlList) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    }
    removeExpenseDetails(details: FundRequestExpensesDtlList) {
        const index: number = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    }
    radioChange(id: any) {
        this.claimsData = [];
        this.expensesDetailsArray = [];
        if (id == 1) {
            //if (this.fundRequestType == "claims") {
            //    alert("claims");
            //}
            this.fundRequestType = "claims";
            //this.GetClaimVisible = true;
            this.viewExpenses = false;
        }
        if (id == 2) {
            // if (this.fundRequestType == "expenses") {
            //    alert("expenses");
            //}
            this.fundRequestType = "expenses";
            this.GetClaimVisible = false;
            this.viewExpenses = true;
        }
        
    }
    validateExpenseDetails(details: FundRequestExpensesDtlList): boolean {
        //debugger;
        let isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) { this.expenseTypeValid = isValid = false; }
        if (details.fundsRequired == undefined) { this.fundRequiredValid = isValid = false; }
        //if (details.registrationRollNo == undefined || details.registrationRollNo == "") { this.registrationNoValid = isValid = false; }
        //if (details.institutionContact != undefined && details.institutionContact.toString().length > 0 && details.institutionContact.toString().length < 10) {
        //    this.institutionContactValid = isValid = false;
        //}
        //if (details.year == undefined) { this.educationYearValid = isValid = false; }
        //if (this.viewuploadNonMarriage) {
        //    if (this.eduNonMarriage.length == 0) { this.uploadNonMarriageValid = isValid = false }
        //}

        //if (this.educertificates.length == 0) { this.uploadCertificatetValid = isValid = false }
        //if (this.eduSelfAttested.length == 0) { this.uploadselfattestedValid = isValid = false }
        //console.log(details.dateofAdmission);
        //if (details.dateofAdmission == undefined) { this.dateOfAdmissionValid = isValid = false; }
        //if (details.presentlyReading == undefined || details.presentlyReading <= 0) { this.presentlyReadingValid = isValid = false; }
        return isValid;
    }
    clearExpenses() {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    }

}

