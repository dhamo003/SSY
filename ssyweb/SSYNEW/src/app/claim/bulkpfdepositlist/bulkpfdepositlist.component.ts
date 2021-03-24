import { Component, OnInit, ViewChild } from '@angular/core';
import { PFDepositDetails, PFDeposits } from '../models/pf.deposit.details.model';
import { PFCollectionDetailsList } from '../models/pf.collectiondetails.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { pagination, PFDepositeStatus } from '../pipes/constnts.model';
import { AttachmentType } from '../pipes/constnts.model';
import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { ModalDirective } from 'ngx-bootstrap';
import { PFLegacyMaster } from '../models/pfLegacyMaster.model';


@Component({
    selector: 'app-bulkpfdepositlist',
    templateUrl: './bulkpfdepositlist.component.html',
    styleUrls: ['./bulkpfdepositlist.component.css']
})
export class BulkpfdepositlistComponent implements OnInit {
    @ViewChild('payInSlipModal') public payInSlipModal: ModalDirective;
    @ViewChild('collectionsModal') public collectionsModal: ModalDirective;
    toDayDate: Date;
    datePickerConfig: any;
    userName: string;
    userCode: string;
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
   // pfDepositDetails: PFDepositDetails = {} as PFDepositDetails;
    pfCollectionDetails: PFCollectionDetailsList[] = [];
    successMessage: string;
    payInSlipUploaded: boolean = true;
    dateOfDepostValid: boolean = true;
    payInSlipNumberValid: boolean = true;
    bankDepositDate: Date;
    scrollNumber: number;
    payInSlipCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    depositId: number;
    pfDepositDetails: PFLegacyMaster[] = [];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) {
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
        this.toDayDate = new Date();
    }

    ngOnInit() {
        this.userName = this.user.user.userName;
        this.userCode = this.user.user.userTypeName;

        this.getLegacyPFDetails(this.user.user.deptUserid, this.page, this.pageSize);
        //this.getPFDeposits(this.user.user.deptUserid, Number(this.user.user.userTpe), PFDepositeStatus.deposited, this.page, this.pageSize);
    }
    getLegacyPFDetails(userId: any, pageNo: any, pageSize: any) {
        this.dataService
            .getLegacyPFDetails(userId, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pfDepositDetails = data.results;
                this.totalRows = data.rowCount;
            });
    }

    getPFDeposits(userId: any, userType:any, status: any, pageNo: any, pageSize: any) {
        this.dataService
            .getPFDeposits(userId, userType, status, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pfDepositDetails = data.results;
                this.totalRows = data.rowCount;

                //this.viewCollections(0);
            });
    }
    changepage(page) {
       // this.getPFDeposits(this.user.user.deptUserid, Number(this.user.user.userTpe), PFDepositeStatus.deposited, this.page, this.pageSize);
        this.getLegacyPFDetails(this.user.user.deptUserid, this.page, this.pageSize);
    }

    onFileChanged(inputValue: any): void {
        var file: File = inputValue.target.files[0];
        if (file.type === "application/pdf" || file.type.includes("image/")) {
            if (file.size > 2000000) {
                alert("File is too big!");
                return;
            };
            var myReader: FileReader = new FileReader();
            myReader.onloadend = (e) => {
                const model: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
                model.fileName = file.name;
                model.filePath = "test";
                model.fileContent = myReader.result.toString().split(',')[1];
                model.statusId = 1;

                model.attachmentType = AttachmentType.PayinSlip;
                model.pfDepositId = this.depositId;
                model.createdBy = this.user.user.deptUserid;

                //this.payInSlip = model;
                this.payInSlipCertificate = model;
            }
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    }
    okClick() {
        this.getPFDeposits(this.user.user.deptUserid, Number(this.user.user.userTpe), PFDepositeStatus.deposited, this.page, this.pageSize);
    }
    upload(details: PFDepositDetails) {
        this.depositId = details.pfDepositId;
        this.payInSlipModal.show();
    }
    savePaySlip() {
        if (this.validatePayInSlip()) {
            this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.payInSlipCertificate)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "PayIn Slip Uploaded successfully";
                        }
                        else {
                            this.successMessage = "PayIn Slip Not Uploaded";
                        }
                        this.payInSlipModal.hide();
                    });
            }
        }

    }
    validatePayInSlip(): boolean {
        let isValid = true;
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) { isValid = this.dateOfDepostValid = false; }
        if (this.scrollNumber == null && this.scrollNumber == undefined) { isValid = this.payInSlipNumberValid = false; }
        if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) { isValid = this.payInSlipUploaded = false; }
        return isValid;
    }

    //viewCollections(pfLegacyMasterId: number) {
    //    this.router.navigate(['claim/bulkpfdepositcollectionlist', { pfLegacyMasterId: pfLegacyMasterId }], { skipLocationChange: true });
    //}
    onEditCollection(pfLegacyMasterId: number) {
        this.router.navigate(['claim/bulkpfdeposit', { pfLegacyMasterId: pfLegacyMasterId }], { skipLocationChange: true });
    }
}
