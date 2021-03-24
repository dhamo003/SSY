import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants } from '../../claim/pipes/constnts.model';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { PaymentProcessModel, PaymentClaims } from '../../claim/models/paymentprocess.model';
import { Dictionary } from 'lodash'
import * as Collections from 'typescript-collections';
import { forEach } from 'typescript-collections/dist/lib/arrays';
import { ModalDirective } from 'ngx-bootstrap';
import { FundReleaseOrder } from '../../models/fundReleaseOrder.model';

@Component({
    selector: 'app-payment-processing',
    templateUrl: './payment-processing.component.html',
    styleUrls: ['./payment-processing.component.css']
})
export class PaymentProcessingComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    claimsData: Claims[];
    resultsData: Claims[];
    alcDetails: AlcDetails;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    claimData: PaymentProcessModel = {} as PaymentProcessModel;
    AmountShortfall: any;
    date = new Date();
    selectedAll: any;
    GetClaimVisible: boolean = false;
    showErrorMessage: boolean = false;
    selectedClaimList: Array<PaymentClaims> = [];
    successMessage: string;
    //teja
    fundRequest: FundReleaseOrder[];
    GetFundVisible: boolean = false;
    selectedFundRequestId: any;
    releaseDate: any;
    ReleaseDetailsVisible: boolean = false;
    ssinSearchText: string;
    nameSearchText: string;
    mobileSearchText: string;
    isSearch: boolean = false;
    strSSIN: string;
    strName: string;
    strMobile: string;



    constructor(public router: Router, private dataService: AlcDataService, private userService: UserService) {

    }

    ngOnInit() {
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetFundRequestDetails();
    }

    GetClaims() {
        if (!this.GetFundVisible)
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe);
        else if (this.GetFundVisible)
            this.getFundRequestClaims(this.selectedFundRequestId);
    }
    getAllApprovalClaims(deptUserid: number, type: any) {
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type)
            .subscribe((data: any) => {
                this.claimsData = data;
                this.GetClaimVisible = true;
                this.GetFundVisible = false;
                if (this.isSearch)
                    this.GetSearchResults();

                console.log(this.claimsData);
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

            });
    }

    SubmitRequest() {
        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.paymentProcessingDate = new Date();
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = ClaimStatus.PaymentProcessingbyALC;
            this.claimData.paymentProcessingClaims = this.selectedClaimList;// this.normalizeArray(this.claimsList1, ClaimConstants.Education.toString());//this.claimsList;
            //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
            //teja
            if (this.GetFundVisible)
                this.claimData.fundrequestId = this.selectedFundRequestId;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .saveProcessingClaims(this.claimData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Payment processing successfully submitted";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
            //}
        }
        else { this.showErrorMessage = true; }
    }

    okClick() {
        this.successModal.hide();
        this.CancelClick();
    }

    selectAll() {
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
        }
    }
    checkIfAllSelected() {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item: any) {
            return item.selected == true;
        })
    }
    selectedClaims() {
        var res = this.claimsData.filter(x => x.selected == true);
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            let claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId });
        }
    }
    //teja
    GetFundRequestDetails() {
        this.GetClaimVisible = false;
        this.GetFundRequestsByUserID(this.userService.user.deptUserid, ClaimStatus.Release);
    }
    GetFundRequestsByUserID(id: number, statusId: any) {
        this.dataService
            .getReleaseFundRequest(id, statusId)
            .subscribe((data: any) => {
                this.fundRequest = data;
                this.GetFundVisible = true;

            });
    }
    PaymentWithoutReleaseOrder() {
        this.releaseDate = "";
        this.selectedFundRequestId = "";
        this.GetFundVisible = false;
        this.GetClaimVisible = false;
        this.ReleaseDetailsVisible = false;
    }

    selectChange(args) {
        
        this.selectedFundRequestId = args.target.value;
        if (this.fundRequest != null) {
            this.ReleaseDetailsVisible = true;
            this.fundRequest.forEach(x => {
                if (x.fundReleaseOrderHdrId == this.selectedFundRequestId) { this.releaseDate = x.fundReleaseDateString; }
            });
        }
        this.claimsData = [];
        this.selectedAll = false;
    }
    getFundRequestClaims(fundRequestId: number) {
        
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundReleaseClaimsByFundReleaseHdrId(fundRequestId)
            .subscribe((data: any) => {
                
                this.claimsData = data//.fundClaimList;
                this.GetClaimVisible = true;
                if (this.isSearch)
                    this.GetSearchResults();
                console.log(this.claimsData);
            });
    }

    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    CancelClick() {
        this.router.navigate(['alc/paymentprocessedlist']);
    }
    GetResults() {
        
        this.isSearch = true;
        this.GetClaims();
    }

    GetSearchResults() {
        this.isSearch = false;
       
        if (this.claimsData != null && this.claimsData.length > 0) {
           
            if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.nameSearchText != null && this.nameSearchText != undefined) || (this.mobileSearchText != null && this.mobileSearchText != undefined)) {
                //const results = Object.assign([], this.claimsData); 
                //if (results != null && results.length > 0) {
                //    this.resultsData = results.filter(x => x.ssin == this.ssinSearchText.trim() || x.benName == this.nameSearchText.trim() || x.benMobileNumber == this.mobileSearchText.trim());
                //    this.claimsData = this.resultsData;
                //   // console.log(this.claimsData);
                //}
                if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                    this.strSSIN = this.ssinSearchText.trim();
                else
                    this.strSSIN = "0";

                if (this.nameSearchText != null && this.nameSearchText != undefined && this.nameSearchText!="")
                    this.strName = this.nameSearchText.trim();
                else
                    this.strName = "0";

                if (this.mobileSearchText != null && this.mobileSearchText != undefined && this.mobileSearchText != "")
                    this.strMobile = this.mobileSearchText.trim();
                else
                    this.strMobile = "0";

                if (!this.GetFundVisible)
                    this.getAllApprovalSearchClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.strSSIN, this.strName, this.strMobile);
                else if (this.GetFundVisible)
                    this.getFundRequestSearchClaims(this.selectedFundRequestId, this.strSSIN, this.strName, this.strMobile);
            }
        }
    }

    getAllApprovalSearchClaims(deptUserid: number, type: any,ssin:any,benName:any,benMobile:any) {
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getAllApprovalSearchClaims(deptUserid, type, ssin, benName, benMobile)
            .subscribe((data: any) => {
                this.claimsData = data;
                this.GetClaimVisible = true;
                this.GetFundVisible = false;
                //if (this.isSearch)
                //    this.GetSearchResults();

                console.log(this.claimsData);
            });
    }
    getFundRequestSearchClaims(fundRequestId: number, ssin: any, benName: any, benMobile: any) {
        
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .getFundRequestSearchClaims(fundRequestId, ssin, benName, benMobile)
            .subscribe((data: any) => {
                
                this.claimsData = data;
                this.GetClaimVisible = true;
                //if (this.isSearch)
                //    this.GetSearchResults();
                console.log(this.claimsData);
            });
    }
    //-------------------
}
