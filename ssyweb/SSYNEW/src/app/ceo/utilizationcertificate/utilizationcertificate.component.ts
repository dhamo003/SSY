import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { CeoDataService } from '../services/ceo-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants, LovConstants, UserType } from '../../claim/pipes/constnts.model';
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
import { FundReleaseOrder } from '../../models/fundReleaseOrder.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { DatepickerOptions } from 'ng2-datepicker';
import { FinancialYearModel } from 'src/app/models/financialYear.model';
import { UtilizationCertificate } from '../../models/utilizationcertificate.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-utilizationcertificate',
  templateUrl: './utilizationcertificate.component.html',
  styleUrls: ['./utilizationcertificate.component.css']
})
export class UtilizationcertificateComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('expensesModal') public expensesModal: ModalDirective;

    //alcDetails: AlcDetails;
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    selectedAll: any;
    showErrorMessage: boolean = false;
    successMessage: string;
    route$: Subscription;
    ucId: number = 0;
    alcId: number = 0;
    mode: string = "";
    sumofAmount: any = 0;
    public fundReleaseOrder: FundReleaseOrder[] = [];
    //utilizationDate: any;
    //financialYearId: any;
    datePickerConfig: any;
    financialYears: FinancialYearModel[];
    certificatesVisible: boolean = false;
    utilizationCertificateDateValid: boolean = true;
    financialYearValid: boolean = true;
    openingBalanceValid: boolean = true;
    utilizedValid: boolean = true;
    utilizationCertificate = {} as UtilizationCertificate;
    selectedReleaseOrdersList: Array<number> = [];
    viewMode: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: CeoDataService, private userService: UserService) {
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
        this.GetFinancialYears();
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.ucId = params["ucId"] != null ? Number(params["ucId"]) : 0;
                this.mode = params["mode"];
                this.alcId = params["alcId"] != null ? Number(params["alcId"]) : 0;
            }
        );
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
        if (this.ucId > 0 && this.mode == "view") {
            this.viewMode = true;
            this.certificatesVisible = true;
            this.getUtilizationCertificateDetails(this.ucId);
        }
    }
    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    GetFinancialYears() {
        this.dataService
            .GetFinancialYears()
            .subscribe((data: any) => {
                this.financialYears = data;
            });
    }
    GetReleaseOrders(rloOfficeId: number, finYear: number) {
        debugger;
        this.dataService
            .GetReleaseOrders(rloOfficeId, finYear)
            .subscribe((data: any) => {
                this.fundReleaseOrder = data;
            });
    }
    //GetAlcInformation(deptUserid: number) {
    //    this.dataService
    //        .GetAlcInformation(deptUserid)
    //        .subscribe((data: any) => {
    //            this.alcDetails = data;
    //            if (this.alcDetails.approvedClaimsAmount > this.alcDetails.balanceOfTheAmount)
    //                this.AmountShortfall = (this.alcDetails.approvedClaimsAmount - this.alcDetails.balanceOfTheAmount);
    //            else
    //                this.AmountShortfall = 0;
    //        });
    //}

    GetRLOOfficeUserInformation(deptUserid: number, userType: any) {
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe((data: any) => {
                this.officeDetails = data;
                this.RloOfficeAddress = data.rloOffices[0];
            });
    }
    financialYearChange(year) {
        this.GetReleaseOrders(this.RloOfficeAddress.rloOfficeId, year);
        this.certificatesVisible = true;
    }
    SubmitRequest() {
        debugger;

        if (this.validateDetails()) {
            this.selectedReleaseOrders();
            this.showErrorMessage = false;
            if (this.selectedReleaseOrdersList != null && this.selectedReleaseOrdersList.length > 0) {
                this.utilizationCertificate.rloOfficeID = this.RloOfficeAddress.rloOfficeId;
                this.utilizationCertificate.createdBy = this.userService.user.deptUserid;
                this.utilizationCertificate.statusId = 1;
                this.utilizationCertificate.createdDate = new Date();

                this.utilizationCertificate.fundReleaseOrdersList = this.selectedReleaseOrdersList;
                //this.claimData.fundRequested = this.sumofAmount;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveUtilizationCertificate(this.utilizationCertificate)
                        .then((data: any) => {
                            if (data) {
                                this.successMessage = "Utilization Certificate created successfully"; 
                                this.sumofAmount = 0;
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
    }
    selectAll() {
        this.showErrorMessage = false;
        for (var i = 0; i < this.fundReleaseOrder.length; i++) {
            this.fundReleaseOrder[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.fundReleaseOrder[i].sanctionedAmount;
            }
        }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    }
    checkIfAllSelected(itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.fundReleaseOrder.every(function (item: any) {
            return item.selected == true;
        })

        if (itemData.selected == true) { this.sumofAmount += itemData.sanctionedAmount; }
        else { this.sumofAmount -= itemData.sanctionedAmount; }
        this.utilizationCertificate.fundRecieved = this.sumofAmount;
    }
    selectedReleaseOrders() {
        var res = this.fundReleaseOrder.filter(x => x.selected == true);
        this.selectedReleaseOrdersList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedReleaseOrdersList.push(res[i].fundReleaseOrderHdrId);
        }
    }
    cancelClick() {
        this.router.navigate(['ceo/utilizationcertificatelist']);
    }
    validateDetails(): boolean {
        let isValid = true;
        this.utilizationCertificateDateValid = this.financialYearValid = this.openingBalanceValid = this.utilizedValid = true;
        this.showErrorMessage = false;
        if (this.utilizationCertificate.date == undefined) { this.utilizationCertificateDateValid = isValid = false }
        if (this.utilizationCertificate.financialYearId == 0 || this.utilizationCertificate.financialYearId == undefined) { this.financialYearValid = isValid = false }
        if (this.utilizationCertificate.openingBalance == undefined || this.utilizationCertificate.openingBalance <= 0) { this.openingBalanceValid = isValid = false; }
        if (this.utilizationCertificate.fundUtilized == undefined || this.utilizationCertificate.fundUtilized <= 0) { this.utilizedValid = isValid = false; }
        return isValid;
    }
    getBalance(event: any) {
        debugger;
        let a: number = 0;
        let b: number = 0;
        let c: number = 0;
        a = this.utilizationCertificate.openingBalance != undefined ? +this.utilizationCertificate.openingBalance : 0;
        b = this.utilizationCertificate.fundRecieved != undefined ? +this.utilizationCertificate.fundRecieved : 0;
        c = this.utilizationCertificate.fundUtilized != undefined ? +this.utilizationCertificate.fundUtilized : 0;
        //alert((a + b) - c);
        this.utilizationCertificate.balance = ((a + b) - c);
    }
    getUtilizationCertificateDetails(ucId: number) {
        this.dataService
            .getUtilizationCertificateDetails(ucId)
            .subscribe((data: any) => {
                this.utilizationCertificate = data;
                this.fundReleaseOrder = data.certificateReleaseOrders;

                this.utilizationCertificate.date = new Date(this.utilizationCertificate.date);
            });
    }
    okClick() {
        this.successModal.hide();
        window.location.href = "ceo/utilizationcertificatelist";
    }

}