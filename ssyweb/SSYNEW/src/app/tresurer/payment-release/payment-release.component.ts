import { Component, OnInit, ViewChild } from '@angular/core';
import { RloBankDetails } from '../../models/rlobankdetails.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../UserService';
import { TresurerDataService } from '../services/tresurer-data.service';
import { Claims } from '../../claim/models/claims.model';
import { AlcDetails, RloOfficeInformation, RloOffice } from '../../models/AlcDetails.model';
import { PaymentProcessModel, PaymentClaims  } from '../../claim/models/paymentprocess.model';
import { ClaimStatus, ClaimConstants, UserType } from '../../claim/pipes/constnts.model';
import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';
import { ExcelService } from '../../services/excel.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { IFMSDetails } from '../../models/IFMSDetails.model';

@Component({
  selector: 'app-payment-release',
  templateUrl: './payment-release.component.html',
  styleUrls: ['./payment-release.component.css']
})
export class PaymentReleaseComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    bankDetails: Array<RloBankDetails> = [];
    officeDetails: RloOfficeInformation;
    RloOfficeAddress: RloOffice;
    claimDetails: Claims[];
    claimData: PaymentProcessModel = {} as PaymentProcessModel;
    normalizedObject: any = {}
    date = new Date();
    selectedAll: boolean=true;
    sumofAmount: any = 0;
    showErrorMessage:boolean = false;
    processedClaimsView: boolean = false;
    paymentIdValid: boolean = true;
    paymentProcessIds: PaymentProcessMasterData[];
    private route$: Subscription;
    successMessage: string;
    processId: any;
    alcId: any;
    selectedClaimList: Array<PaymentClaims> = [];
    rloBankId: number;
    bankIsValid: boolean = true;
    NEFTFileName: string;
    NEFTData: IFMSDetails[];
    ifmsVisible: boolean = true;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: TresurerDataService, private userService: UserService, private excelService: ExcelService) { }
  
    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.processId = params["processId"];
                this.alcId = params["alcId"];
                //this.mode = params["mode"];
                //if (this.mode != "pending") {
                //    this.isVisable = false;
                //}
            }
        );
        //this.getPaymentProcessIds(this.userService.user.deptUserid, this.userService.user.userTpe);
        //this.getRLOBankDetails(3075, 6);
        //this.getPaymentProcessIds(14844, 13);
        this.selectPaymentProcessId(this.processId);
    }

    //Not used now
    //Fill the dropdown values 
    //getPaymentProcessIds(id:any,type:any) {
    //    this.dataService
    //        .getTreasurerPaymentProcesses(id, type)
    //        .subscribe((data: any) => {
    //            this.paymentProcessIds = data;
    //        });
    //}

    //Drop down change event
    selectPaymentProcessId(processId) {
        this.showErrorMessage = false;
        this.sumofAmount = 0;
        if (processId > 0) {
            this.paymentIdValid = true;
            this.getPaymentProcessedDetails(processId);
            //Rlo office Info
            this.GetRLOOfficeUserInformation(processId);
            
            this.processedClaimsView = true;
        }
        else
            this.paymentIdValid = false;
            
    }
    getPaymentProcessedDetails(id: any) {
        this.claimDetails = [];
        //this.selectedAll = false;
        this.dataService
            .getPaymentProcessedDetails(id)
            .subscribe((data: any) => {
                this.claimDetails = data;
                //if (this.claimDetails != null && this.claimDetails.length > 0) {
                    this.selectAll();
               // }
            });
    }

    getRLOBankDetails(id:any) {
        this.dataService
            .getRLOBankDetails(id)
            .subscribe((data: any) => {
                this.bankDetails = data;
            });
    }
   
    selectAll() {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimDetails.length; i++) {
            this.claimDetails[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimDetails[i].approvedAmount;
            }
        }
    }
  
    GetRLOOfficeUserInformation(processId:any) {
        this.dataService
            .getRLOUserInfoByProcessingId(this.processId)
            .subscribe((data: any) => {
                this.officeDetails = data;
                this.RloOfficeAddress = data.rloOffices[0];
                this.getRLOBankDetails(this.RloOfficeAddress.rloOfficeId);
            });
    }

    paymentRelease() {
        debugger;
        if (this.rloBankId == undefined || this.rloBankId <= 0) { this.bankIsValid = false; return; }

        this.selectedClaims();
        this.showErrorMessage = false;
        if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
            this.claimData.createdBy = this.userService.user.deptUserid;
            this.claimData.creadtedDate = new Date();
            this.claimData.rloOfficeId = this.RloOfficeAddress.rloOfficeId;
            this.claimData.statusId = ClaimStatus.PaymentReleasebyTreasurer;
            this.claimData.paymentReleasedClaims = this.selectedClaimList;//this.claimsList;
            this.claimData.rloBankAccountId = this.rloBankId;
            this.claimData.paymentProcessingId = this.processId;
            this.claimData.paymentReleaseDate = null;
            this.claimData.releasedAmount = this.sumofAmount;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePaymentReleaseClaims(this.claimData)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Payment released succesfully.";
                        }
                        else {
                            this.successMessage = "Invalid transaction";
                        }
                        this.successModal.show();
                    });
            }
        }
        else { this.showErrorMessage = true;}
    }
    okClick() {
        this.successModal.hide();
        this.sumofAmount = 0;
        // this.getPaymentProcessedDetails(this.processId);
        this.cancelClick();
    }

    checkIfAllSelected(itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimDetails.every(function (item: any) {
            return item.selected == true;
        });

        if (itemData.selected == true) { this.sumofAmount += itemData.approvedAmount; }
        else { this.sumofAmount -= itemData.approvedAmount;  }

    }
    selectedClaims() {
        var res = this.claimDetails.filter(x => x.selected == true);
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
           
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: ClaimConstants[res[i].claimType] });
        }
    }

    downloadNeftDocument() {
        this.ifmsVisible = false;
        this.NEFTData = [];
        this.showErrorMessage = false;
        this.NEFTFileName = "NEFT Details";
        this.selectedClaims();
        this.dataService
            .getPaymentNEFTDetails(this.selectedClaimList)
            .then((data: any) => {
                debugger;
                this.NEFTData = data;
                let downloadNEFTDetails = this.NEFTData;
                if (downloadNEFTDetails != null && downloadNEFTDetails.length > 0) {
                    this.excelService.exportAsExcelFile(downloadNEFTDetails, this.NEFTFileName);
                }
            });
    }
    cancelClick() {
        this.router.navigate(['tresurer/paymentprocessedlist'], { skipLocationChange: true });
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
}
