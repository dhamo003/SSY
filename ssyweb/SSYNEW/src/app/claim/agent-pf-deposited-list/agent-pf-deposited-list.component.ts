import { Component, OnInit, ViewChild} from '@angular/core';
import { PFDepositDetails, PFDeposits } from '../models/pf.deposit.details.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { pagination, PFDepositeStatus } from '../pipes/constnts.model';
import { AttachmentType } from '../pipes/constnts.model';
import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { ModalDirective } from 'ngx-bootstrap';
import { PFDepositAttachmentsModel } from '../models/pf.attachments';
import { FormIVDetails } from '../models/formIV.model';
import * as FileSaver from 'file-saver';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agent-pf-deposited-list',
  templateUrl: './agent-pf-deposited-list.component.html',
  styleUrls: ['./agent-pf-deposited-list.component.css']
})
export class AgentPfDepositedListComponent implements OnInit {
    @ViewChild('payInSlipModal') public payInSlipModal: ModalDirective;
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('pdfModal') public pdfModal: ModalDirective;
    //@ViewChild('repayModal') public repayModal: ModalDirective;
    @ViewChild('pfDepositModal') public pfDepositModal: ModalDirective;
    @ViewChild('gripsFormIVModal') public gripsFormIVModal: ModalDirective;
    @ViewChild('attachModal') public attachModal: ModalDirective;

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
    //payInSlipNumberValid: boolean = true;
    bankDepositDate: Date;
    scrollNumber: number;
    data: PFDepositAttachmentsModel = {} as PFDepositAttachmentsModel;
    payInSlipCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    depositId: number;
    //mainUpload: AttachmentModel;
    formIVCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    formIVUploaded: boolean = true;
    FormIVDetail: FormIVDetails = {} as FormIVDetails;
    isVisible: boolean = false;
    encData: string;
    pfDepositId: number;
    attachments: PayInSlipAttachmentModel[] = [];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService, private httpClient: HttpClient, private sanitizer: DomSanitizer) {
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
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.page, this.pageSize);
    }

    getPFDepositedItemsByAgent(userId: any, status: any, pageNo: any, pageSize: any) {
        this.dataService
            .getPFDepositStatusDetailsByAgentId(userId, status, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pFDepositDetails = data;
                this.totalRows = this.pFDepositDetails.rowCount;
            });
    }
    changepage(page) {
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, page, this.pageSize);
    }

    onFileChanged(inputValue: any, attachmentType: string): void {
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

                model.attachmentType = attachmentType == "payinslip" ? AttachmentType.PayinSlip : AttachmentType.FormIV;
                model.pfDepositId = this.depositId;
                model.createdBy = this.user.user.deptUserid;

                //this.payInSlip = model;
                 if (attachmentType == "payinslip")
                     this.payInSlipCertificate = model;
                 else
                     this.formIVCertificate = model;
            }
            myReader.readAsDataURL(file);
        }
        else {
            alert("Only accept pdf and images");
        }
    }
    okClick() {
        this.successModal.hide();
        this.getPFDepositedItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.deposited, this.page, this.pageSize);
    }
    upload(details: PFDepositDetails) {
        this.depositId = details.pfDepositId;
        this.clearData();
        this.payInSlipModal.show();
    }
    uploadGripsFormIV(details: PFDepositDetails) {
        this.depositId = details.pfDepositId;
        this.bankDepositDate = details.depositDate;
        this.isVisible = false;
        //this.clearData();
        this.payInSlipCertificate = {} as PayInSlipAttachmentModel;
        this.formIVCertificate = {} as PayInSlipAttachmentModel;
        this.gripsFormIVModal.show();
    }
    savePaySlip() {
        debugger;
        if (this.validatePayInSlip()) {
            this.data.bankDepositDate = this.bankDepositDate;
            this.data.scrollNumber = (this.scrollNumber == undefined || this.scrollNumber == null) ? 0 : this.scrollNumber;
            this.data.payInSlipAttachment = this.payInSlipCertificate;
            this.data.formIVAttachment = this.formIVCertificate;
            //this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            //this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.data)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "PayIn Slip Uploaded successfully";
                        }
                        else {
                            this.successMessage = "PayIn Slip Not Uploaded";
                        }
                        this.payInSlipModal.hide();
                        this.successModal.show();

                    });
            }
        }

    }
    saveGripsFormIV() {
        debugger;
        if (this.validateForFormIV()) {
            this.data.bankDepositDate = this.bankDepositDate;
            this.data.scrollNumber = 0;
            this.data.payInSlipAttachment = null;
            this.data.formIVAttachment = this.formIVCertificate;
            //this.payInSlipCertificate.bankDepositDate = this.bankDepositDate;
            //this.payInSlipCertificate.scrollNumber = this.scrollNumber;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .savePayInSlip(this.data)
                    .then((data: any) => {
                        if (data) {
                            this.successMessage = "Form IV Uploaded successfully";
                        }
                        else {
                            this.successMessage = "Form IV Not Uploaded";
                        }
                        this.gripsFormIVModal.hide();
                        this.successModal.show();

                    });
            }
        }
    }
    validatePayInSlip(): boolean {
        debugger;
        let isValid = this.dateOfDepostValid = this.payInSlipUploaded = this.formIVUploaded = true; //this.payInSlipNumberValid =
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) { isValid = this.dateOfDepostValid = false; }
       // if (this.scrollNumber == null && this.scrollNumber == undefined) { isValid = this.payInSlipNumberValid = false; }
        if (this.payInSlipCertificate.fileName == null && this.payInSlipCertificate.fileName == undefined) { isValid = this.payInSlipUploaded = false; }
        if (this.formIVCertificate.fileName == null && this.formIVCertificate.fileName == undefined) { isValid = this.formIVUploaded = false; }
        return isValid;
    }
    validateForFormIV(): boolean {
        debugger;
        let isValid = true; //this.payInSlipNumberValid = 
        if (this.formIVCertificate.fileName == null && this.formIVCertificate.fileName == undefined) { isValid = this.formIVUploaded = false; }
        return isValid;
    }
    clearData() {
        this.bankDepositDate = null;
        this.scrollNumber = null;
        this.isVisible = false;
        this.payInSlipCertificate = {} as PayInSlipAttachmentModel;
        this.formIVCertificate = {} as PayInSlipAttachmentModel;
    }
    GenaratePdf() {
        this.dateOfDepostValid = true;
        if (this.bankDepositDate == null && this.bankDepositDate == undefined) { this.dateOfDepostValid = false; }
        else
            this.pdfModal.show();
    }
    GenarateGripsFormIV() {
            this.pdfModal.show();
    }
    downLoadPdf(type) {
        debugger;
        this.FormIVDetail.lwfccode = this.userName;
        this.FormIVDetail.bankdepositdate = this.bankDepositDate;
        this.FormIVDetail.scrollno = (this.scrollNumber == null || this.scrollNumber == undefined ? 0 : this.scrollNumber);
        this.FormIVDetail.depositId = this.depositId;

        this.dataService
            .genaratePdfFormIV(this.FormIVDetail)
            .then((data: any) => {
                debugger;
                var blob = new Blob([data.body], { type: 'application/pdf' });
                if (type == 'print') {
                    const blobUrl = URL.createObjectURL(blob);
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = blobUrl;
                    document.body.appendChild(iframe);
                    iframe.contentWindow.print();
                }
                else {
                    FileSaver.saveAs(blob, "Form-IV.pdf");
                }
                this.pdfModal.hide();
                this.isVisible = true;
            });
    }
    onRePayClick(item: PFDepositDetails) {
        debugger;
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .repayToGrips(item.pfDepositId)
                .subscribe((data: any) => {
                    debugger;
                    if (data) {
                        this.encData = data;
                        var input = <HTMLInputElement>document.getElementById('ENCDATA');
                        input.value = this.encData;
                        var input1 = <HTMLInputElement>document.getElementById('DEPT_CD');
                        input1.value = item.gripsDeptCode;

                        var myForm = <HTMLFormElement>document.getElementById('form2');
                        myForm.action = environment.gripsurl;
                        myForm.submit();
                        //this.successMessage = "PF amount sucessfully deposited";
                    }
                    else {
                        this.successMessage = "Invalid transaction";
                        this.successModal.show();
                    }
                    //this.successModal.show();
                });

        }
        //this.repayModal.show();
    }
    postData() {
        var myForm = <HTMLFormElement>document.getElementById('form1');
        myForm.submit();
    }
    onVerifyClick(item: PFDepositDetails) {
        if (confirm("Are you sure to proceed ")) {
            this.dataService
                .postDoubleVerificationGrips(item.pfDepositId)
                .subscribe((data: any) => {
                    debugger;
                    if (data) {
                        this.encData = data;
                        var input = <HTMLInputElement>document.getElementById('xmlString');
                        input.value = this.encData;
                        var input1 = <HTMLInputElement>document.getElementById('Dept_Cd');
                        input1.value = item.gripsDeptCode;
                        var myForm = <HTMLFormElement>document.getElementById('form1');
                        myForm.action = environment.gripsverifyurl;
                        myForm.submit();
                    }
                    else {
                        this.successMessage = "Invalid transaction";
                        this.successModal.show();
                    }
                });

        }

    }
    onPDFViewClick(item: PFDepositDetails) {
        debugger;
        this.pfDepositId = item.pfDepositId;
        this.pfDepositModal.show();
    }
    downLoadPFDetailsPdf(type) {
        debugger;
        this.dataService
            .downloadPFDepositDetails(this.pfDepositId)
            .then((data: any) => {
                var blob = new Blob([data.body], { type: 'application/pdf' });
                if (type == 'print') {
                    const blobUrl = URL.createObjectURL(blob);
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = blobUrl;
                    document.body.appendChild(iframe);
                    iframe.contentWindow.print();
                }
                else {
                    FileSaver.saveAs(blob, "PFDepositDetails.pdf");
                }
                this.pfDepositModal.hide();
            });
    }
    getAttachments(pfdepositId: number) {
        debugger;
        //this.isVisible = true;
        this.dataService.getPFDepositAttachments(pfdepositId)
            .subscribe((data: any) => {
                if (data) {
                    this.attachments = data;
                    if (this.attachments != null && this.attachments.length > 0) {
                        for (var j = 0; j < this.attachments.length; j++) {
                            //let attachment = this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                            if (this.attachments[j].fileName.split('.')[this.attachments[j].fileName.split('.').length - 1] == 'pdf') {
                                this.attachments[j].attachmenturl = this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + this.attachments[j].fileContent);
                            }
                        }
                        //this.attachments = payInSlip;
                    }
                    this.attachModal.show();
                }
            });
       
    }
}
