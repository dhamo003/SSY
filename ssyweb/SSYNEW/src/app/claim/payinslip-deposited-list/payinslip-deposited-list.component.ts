import { Component, OnInit, ViewChild } from '@angular/core';
import { PFDepositDetails, PFDeposits } from '../models/pf.deposit.details.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { pagination, PFDepositeStatus } from '../pipes/constnts.model';
import { AttachmentType } from '../pipes/constnts.model';
import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { ModalDirective, BsDatepickerConfig } from 'ngx-bootstrap';
import { PFCollectionDetailsList } from '../models/pf.collectiondetails.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentModel } from '../models/attachment.model';
import { FormIVDetails } from '../models/formIV.model';

@Component({
    selector: 'app-payinslip-deposited-list',
  templateUrl: './payinslip-deposited-list.component.html',
    styleUrls: ['./payinslip-deposited-list.component.css']
})
export class PayInSlipDepositedListComponent implements OnInit {
    @ViewChild('attachModal') public attachModal: ModalDirective;
    @ViewChild('collectionsModal') public collectionsModal: ModalDirective;
    @ViewChild('attachModalFormIV') public attachModalFormIV: ModalDirective;

    toDayDate: Date;
    datePickerConfig: any;
    userName: string;
    userCode: string;
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    pFDepositDetails: PFDeposits = {} as PFDeposits;

    successMessage: string;
    payInSlipUploaded: boolean = true;
    dateOfDepostValid: boolean = true;
    payInSlipNumberValid: boolean = true;
    bankDepositDate: Date;
    scrollNumber: number;
    payInSlipCertificate: PayInSlipAttachmentModel[] = [];
    depositId: number;
    isVisible: boolean = false;
    isVisible1: boolean = false;
    pfCollectionDetails: PFCollectionDetailsList[] = [];
    depositFromDate: Date;
    strDepositFromDate: string;
    depositToDate: Date;
    strDepositToDate: string;  
    formIVContent: AttachmentModel = {} as AttachmentModel;
    FormIVDetail: FormIVDetails = {} as FormIVDetails;
    attachmenturl: any;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService, private sanitizer: DomSanitizer) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        this.toDayDate = new Date();
    }

    ngOnInit() {
        debugger;
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, Number(this.user.user.userTpe),"0","0", this.page, this.pageSize);
        
    }

    getPFDepositedItemsByAgent(userId: any, userType: any, depositFromDate: any, depositToDate:any, pageNo: any, pageSize: any) {
        this.dataService
            .getPFDepositStatusDetailsByUser(userId, userType, depositFromDate, depositToDate, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pFDepositDetails = data;
                this.totalRows = this.pFDepositDetails.rowCount;
                //this.payInSlipCertificate[0] = this.pFDepositDetails.results[0].payInSlip;
            });
    }
    changepage(page) {
        if (this.depositFromDate != null && this.depositFromDate != undefined)
            this.strDepositFromDate = this.depositFromDate.toISOString();
        else
            this.strDepositFromDate = "0";
        if (this.depositToDate != null && this.depositToDate != undefined)
            this.strDepositToDate = this.depositToDate.toISOString();
        else
            this.strDepositToDate = "0";
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.strDepositFromDate, this.strDepositToDate, page, this.pageSize);
    }
    viewPayInSlipOld(payInSlip: PayInSlipAttachmentModel[]) {
        debugger;
        this.isVisible = true;
        
        //if (payInSlip.fileName.split('.')[payInSlip.fileName.split('.').length - 1] == 'pdf') {
        //    this.payInSlipCertificate.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + payInSlip.fileContent);
        //}

        if (payInSlip != null && payInSlip.length > 0) {
            for (var j = 0; j < payInSlip.length; j++) {
                //let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                if (payInSlip[j].fileName.split('.')[payInSlip[j].fileName.split('.').length - 1] == 'pdf') {
                    payInSlip[j].attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + payInSlip[j].fileContent);
                }
            }
            this.payInSlipCertificate = payInSlip;
        }
        this.attachModal.show();
    }
    viewPayInSlip(pfDepositId: number, transactionType: string) {
        debugger;
        this.isVisible = true;
        this.dataService.getPFDepositAttachments(pfDepositId)
            .subscribe((data: any) => {
                debugger;
                this.payInSlipCertificate = data;
                if (this.payInSlipCertificate != null && this.payInSlipCertificate.length > 0) {
                    for (var j = 0; j < this.payInSlipCertificate.length; j++) {
                        if (this.payInSlipCertificate[j].fileName.split('.')[this.payInSlipCertificate[j].fileName.split('.').length - 1] == 'pdf') {
                            this.payInSlipCertificate[j].attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + this.payInSlipCertificate[j].fileContent);
                        }
                    }
                }
                this.attachModal.show();
            });
       
    }
    viewCollections(pfDepositId: number,transactionType: string) {
        this.isVisible1 = true;
        if (transactionType.toLowerCase() == 'online') {
            this.dataService
                .getCollections(pfDepositId)
                .subscribe((data: any) => {
                    debugger;
                    this.pfCollectionDetails = data;
                    this.collectionsModal.show();
                });
        }
        else {
            this.dataService
                .getLegacyCollections(pfDepositId)
                .subscribe((data: any) => {
                    debugger;
                    this.pfCollectionDetails = data;
                    this.collectionsModal.show();
                });
        }

    }
    GetResults() {
        if (this.depositFromDate != null && this.depositFromDate != undefined)
            this.strDepositFromDate = this.depositFromDate.toISOString();
        else
            this.strDepositFromDate = "0";
        if (this.depositToDate != null && this.depositToDate != undefined)
            this.strDepositToDate = this.depositToDate.toISOString();
        else
            this.strDepositToDate = "0";
        if (this.strDepositFromDate == "0" || this.strDepositToDate == "0" )
            alert("please enter the from and to dates");
       
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, Number(this.user.user.userTpe), this.strDepositFromDate, this.strDepositToDate, pagination.pageNo, pagination.pageSize);
    }

    viewFormIV(pfLegacyMasterDetails: PFDepositDetails) {
        debugger;
        this.FormIVDetail.lwfccode = this.userName;
        this.FormIVDetail.bankdepositdate = pfLegacyMasterDetails.depositDate;
        this.FormIVDetail.scrollno = 0;
        this.FormIVDetail.depositId = pfLegacyMasterDetails.pfDepositId;

        this.dataService
            .genaratePdfLegacyFormIV(this.FormIVDetail)
            .then((data: any) => {
                debugger;
                var blob = new Blob([data.body], { type: 'application/pdf' });
                const blobUrl = URL.createObjectURL(blob);
                //window.location.href = blobUrl;
                window.open(blobUrl, "_blank");
                //this.attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
                //this.attachModalFormIV.show();
            });
    }

}
