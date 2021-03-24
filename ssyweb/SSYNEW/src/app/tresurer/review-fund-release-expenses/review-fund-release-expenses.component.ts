import { Component, OnInit, ViewChild } from '@angular/core';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TresurerDataService } from '../services/tresurer-data.service';
import { UserService } from '../../UserService';
import { Subscription } from 'rxjs';
//import { FundClaimList, FundRequestDetailsModel } from '../../models/fundRequestedClaimsDetails.model';
import { ClaimsList, FundReleaseOrderDetailsModel } from '../../models/fundReleaseOrderDetails.model';
import { ReviewModel } from '../../models/review.model';
import { WorkflowTrans, UserType, ClaimConstants } from '../../claim/pipes/constnts.model';
import { RloBankDetails } from '../../models/rlobankdetails.model';
import { ExcelService } from '../../services/excel.service';
import { NEFTDetails } from '../../models/neftdetails.model';
import { debounce } from 'rxjs-compat/operator/debounce';
import { FundReleaseOrderExpenses, FundRequestExpensesDtlList } from '../../models/fundReleaseOrderExpenses.model';

@Component({
  selector: 'app-review-fund-release-expenses',
  templateUrl: './review-fund-release-expenses.component.html',
  styleUrls: ['./review-fund-release-expenses.component.css']
})
export class ReviewFundReleaseExpensesComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    private route$: Subscription;
    private fundReleaseOrderHdrId: any;
    mode: string;
    fundrequestDetails: FundReleaseOrderExpenses;
    expensesData: FundRequestExpensesDtlList[];
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    AmountShortfall: any;
    date = new Date();
    showErrorMessage: boolean = false;
    boardIdValid: boolean = true;
    successMessage: string;
    fundReviewModel: ReviewModel = {} as ReviewModel;
    bankDetails: Array<RloBankDetails> = [];
    bank: RloBankDetails;
    alcId: any;
    bankIsValid: boolean = true;
    sumofamount: number;
    rloBankId: number;
    NEFTFileName: string;
    NEFTDetails: NEFTDetails[] = [] as NEFTDetails[];
    NEFTData: NEFTDetails = {} as NEFTDetails;
    enableNEFT: boolean = false;
    constructor(public router: Router, private route: ActivatedRoute, private dataService: TresurerDataService, private userService: UserService, private excelService: ExcelService) { }

    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.fundReleaseOrderHdrId = params["fundReleaseOrderHdrId"];
                this.alcId = params["alcId"];
                //this.mode = params["mode"];
                //if (this.mode != "pending") {
                //    this.isVisable = false;
                //}
            }
        );
        this.getFundRequestedExpensesById(this.fundReleaseOrderHdrId);
        //this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.alcId, UserType.AsstLabourCom);
        // this.getRLOBankDetails(this.alcId, UserType.AsstLabourCom);
    }


    getFundRequestedExpensesById(fundReleaseOrderHdrId: any) {
        this.sumofamount = 0;
        this.expensesData = [];
        this.dataService
            .getFundRequestedExpensesById(fundReleaseOrderHdrId)
            .subscribe((data: any) => {
                this.fundrequestDetails = data;
                this.expensesData = data.expensesList;
                this.expensesData.forEach(x => this.sumofamount += x.fundsRequired);
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

                this.getRLOBankDetails(this.RloOfficeAddress.rloOfficeId);
            });
    }


    updateFundRequest(id: any) {
        if (this.rloBankId == undefined || this.rloBankId <= 0) { this.bankIsValid = false; return; }

        this.fundReviewModel.rloBankAccountId = this.rloBankId;
        this.fundReviewModel.statusId = id;
        this.fundReviewModel.transactionId = this.fundrequestDetails.fundRequestId;
        this.fundReviewModel.claimType = null;
        this.fundReviewModel.wfId = WorkflowTrans.fundworkflow;
        this.fundReviewModel.userId = this.userService.user.deptUserid;
        this.fundReviewModel.fundReleaseOrderHdrId = this.fundrequestDetails.fundReleaseOrderHdrId;
        this.fundReviewModel.fundRequestType = 2;// Expenses
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .updateComments(this.fundReviewModel)
                .then((data: any) => {
                    this.successMessage = "Fund request updated successfully";
                    this.successModal.show();
                });
        }
    }

    cancelclick() {
        //if (this.mode == "pending") {
        this.router.navigate(['tresurer/fundreleaselist']);
        //}
    }
    okClick() {
        this.successModal.hide();
        this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: false });
    }

    setNEFTDetails() {
        this.NEFTDetails = [];
        let rloBankAccountId = this.fundrequestDetails.rloBankAccountId;
        let rloBankId = this.rloBankId;
        let bankId = ((rloBankAccountId != undefined && rloBankAccountId != null) ? rloBankAccountId : ((rloBankId != undefined && rloBankId != 0) ? rloBankId : 0));
        if (this.bankDetails != undefined) {
            this.bankDetails.forEach((eachObj) => {
                if (eachObj.rloOfficeBankId == bankId) {
                    this.bank = eachObj;
                }
            });
        }
        if (bankId != 0 && this.bank != undefined) {
            let tempNEFTData = this.NEFTData;
            this.enableNEFT = true;
            this.NEFTFileName = "NEFT Document";
            if (this.RloOfficeAddress != undefined) {
                tempNEFTData.nameofthePayee = this.RloOfficeAddress.rloOfficeName;
            }
            else {
                tempNEFTData.nameofthePayee = ""
            }
            tempNEFTData.contactNumber = "";
            tempNEFTData.idNumber = "";
            tempNEFTData.natureOfId = "";
            tempNEFTData.nameOfBank = this.bank.bankName;
            tempNEFTData.bankBranchCode = this.bank.bankBranch;
            tempNEFTData.accountNumber = this.bank.bankAccountNo;
            tempNEFTData.IFSCCode = this.bank.ifsc;
            tempNEFTData.amount = this.sumofamount.toString();
            tempNEFTData.narration = "";
            this.NEFTDetails.push(tempNEFTData);
        }
    }


    getRLOBankDetails(id: any) {
        this.dataService
            .getRLOBankDetails(id)
            .subscribe((data: any) => {
                this.bankDetails = data;
            });
    }

    downloadNeftDocument() {
        this.setNEFTDetails();
        this.showErrorMessage = false;
        let downloadNEFTDetails = this.NEFTDetails;
        if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
            this.excelService.exportAsExcelFile(downloadNEFTDetails, this.NEFTFileName);
        }
    }

    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
}
