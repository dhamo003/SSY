import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { PFCollectionDetails, PFCollectionDetailsList } from '../models/pf.collectiondetails.model';
import { ClaimConstants, pagination, PFDepositeStatus } from '../pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { PFDepositDetails, PFDepositDtlDetails } from '../models/pf.deposit.details.model';
import { RloBankDetails } from 'src/app/models/rlobankdetails.model';
import { NewRegUsers } from 'src/app/models/newReg.model';
import { WorkFlowMaster } from 'src/app/models/workerTypeDetails.model';
import * as FileSaver from 'file-saver';
import { GeneratePayInSlipDetails } from '../models/generatePayInSlip.model';
import { URLSearchParams } from "@angular/http"
import { environment } from 'src/environments/environment';
import { LwcBankMst } from 'src/app/models/lwcBankMst.model';

@Component({
    selector: 'app-agent-pf-deposit',
    templateUrl: './agent-pf-deposit.component.html',
    styleUrls: ['./agent-pf-deposit.component.css']
})
export class AgentPfDepositComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('pdfModal') public pdfModal: ModalDirective;

    successMessage: string;
    datePickerConfig: any;
    toDayDate: Date;
    userName: string;
    userCode: string;
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //PFCollectionDetails: PFCollectionDetails = {} as PFCollectionDetails;
    PFDepositDetails: PFDepositDetails = {} as PFDepositDetails;
    //PFDepositDetailsObj: PFDepositDtlDetails = {} as PFDepositDtlDetails;
    depositDateReq: boolean = true;
    depositDate: Date;
    bankId: number;
    rloOfficeId: number;
    bankDetails: Array<LwcBankMst> = [];
    agentDetails: NewRegUsers = {} as NewRegUsers;
    sumofAmount: number = 0;
    selectedAll: any;
    selectedCollectionsList: Array<number> = [];
    PFCollectionDetails1: PFCollectionDetailsList[];

    WorkerTypeList: WorkFlowMaster[];
    workerTypeId: number;
    showErrorMessage: boolean = false;
    depositBankReq: boolean = true;
    workerTypeReq: boolean = true;
    generatePayInSlip: GeneratePayInSlipDetails = {} as GeneratePayInSlipDetails;
    encData: string;
    isGrips: boolean = false;
    isWorkerTypeSelected: boolean = false;
    gripsDeptCode: string = '';
    gripsDeptCodeError: boolean = true;
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
        //this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending,0, this.page, this.pageSize);
        this.getAgentDetailsForDeposit(this.user.user.deptUserid);
        this.getWorkerTypeDetails();
       
    }
    getAgentDetailsForDeposit(userId: any) {
        this.dataService
            .getAgentDetailsForDeposit(userId)
            .subscribe((data: any) => {
                this.agentDetails = data;

                if (this.agentDetails != null)
                {
                    if (this.agentDetails.agentRLOInformation != null)
                        this.rloOfficeId = this.agentDetails.agentRLOInformation.rloOfficeId;
                    //this.getSubDivRLOBankDetails(this.agentDetails.subDivId)
                }
            });


    }
    getPFPendingDepositItemsByAgent(userId: any, status: any, workerTypeId: any,pageNo: any, pageSize: any) {
        this.dataService
            .getPFDepositDetailsByAgentId(userId, 0, workerTypeId, pageNo, pageSize)
            .subscribe((data: any) => {
                this.PFCollectionDetails1 = data;
                //this.PFCollectionDetails = data;
                //this.totalRows = this.PFCollectionDetails.rowCount;
                if (this.PFCollectionDetails1 != null && this.PFCollectionDetails1.length > 0) {
                    this.selectedAll = true;
                    this.selectAll();
                }
                else {
                    this.selectedAll = false;
                }
            });


    }
    changepage(page) {
        //this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending, page, this.pageSize);
    }

    submitPFDepositDetails(DepositDetails: PFCollectionDetailsList[]) {
        debugger;
        if (this.validatePFDeposit()) {
            this.selectedCollections();
            this.showErrorMessage = false;
            if (this.selectedCollectionsList != null && this.selectedCollectionsList.length > 0) {
                this.PFDepositDetails.agentNo = this.user.user.deptUserid;
                this.PFDepositDetails.rloOfficeId = this.rloOfficeId;
                //this.PFDepositDetails.bankId = this.bankId;
                this.PFDepositDetails.lwcBankCode = this.bankId;
                this.PFDepositDetails.payinSlipNo = 0;
                this.PFDepositDetails.collectionIds = this.selectedCollectionsList;
                this.PFDepositDetails.workerTypeId = this.workerTypeId;
                this.PFDepositDetails.depositDate = this.depositDate;

                if (this.isGrips) {
                    if (confirm("Do you want to proceed with GRIPS")) {
                        this.PFDepositDetails.mode = "grips";
                        this.PFDepositDetails.lwcBankCode = 0;
                        this.dataService
                            .submitPFDepositDetails(this.PFDepositDetails)
                            .then((data: any) => {
                                debugger;
                                if (data) {
                                    this.encData = data;
                                    var input = <HTMLInputElement>document.getElementById('ENCDATA');
                                    input.value = this.encData;
                                    var input1 = <HTMLInputElement>document.getElementById('DEPT_CD');
                                    input1.value = this.gripsDeptCode;
                                    
                                    var myForm = <HTMLFormElement>document.getElementById('form1');
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
                }
                else {
                    if (confirm("Are you sure to proceed")) {
                        this.PFDepositDetails.mode = "default";
                        this.dataService
                            .submitPFDepositDetails(this.PFDepositDetails)
                            .then((data: any) => {
                                debugger;
                                if (data == "true") {
                                    this.successMessage = "PF amount sucessfully deposited";
                                }
                                else {
                                    this.successMessage = "Invalid transaction";
                                }
                                this.successModal.show();
                            });
                    }
                }

            }
            else { this.showErrorMessage = true; }
        }
    }

    okClick() {
        this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending,0, this.page, this.pageSize);
        this.depositDate = null;
        this.sumofAmount = 0;
        this.workerTypeId = 0;
        this.bankId = 0;
        this.successModal.hide();
    }
    getSubDivRLOBankDetails(id: any, workerTypeId:any) {
        this.dataService
            .getSubDivRLOBankDetails(id, workerTypeId)
            .subscribe((data: any) => {
                this.bankDetails = data;
            });
    }
    getLWCBankDetails(userId: any, workerTypeId: any) {
        this.dataService
            .getLWCBankDetails(userId, workerTypeId)
            .subscribe((data: any) => {
                this.bankDetails = data;
            });
    }
    selectAll() {
        debugger;
        this.sumofAmount = 0;
        for (var i = 0; i < this.PFCollectionDetails1.length; i++) {
            this.PFCollectionDetails1[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.PFCollectionDetails1[i].collectionAmount;
            }
        }
    }
    checkIfAllSelected(itemData) {
        this.selectedAll = this.PFCollectionDetails1.every(function (item: any) {
            return item.selected == true;
        })

        if (itemData.selected == true) { this.sumofAmount += itemData.collectionAmount; }
        else { this.sumofAmount -= itemData.collectionAmount; }
    }
    selectedCollections() {
        var res = this.PFCollectionDetails1.filter(x => x.selected == true);
        this.selectedCollectionsList = [];
        for (var i = 0; i < res.length; i++) {
            this.selectedCollectionsList.push(res[i].pfCollectionId);
        }
    }
    getWorkerTypeDetails() {
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe((data: any) => {
                this.WorkerTypeList = data;              
            });
    }
    workerTypeChange(typeId) {
        debugger;
        this.gripsDeptCodeError = true;
        this.selectedCollectionsList = [];
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        //this.getSubDivRLOBankDetails(this.agentDetails.subDivId, typeId);
        this.getLWCBankDetails(this.user.user.deptUserid, typeId);
        this.getPFPendingDepositItemsByAgent(this.user.user.deptUserid, PFDepositeStatus.pending, typeId, this.page, this.pageSize);
        this.isWorkerTypeSelected = true;
        this.gripsDeptCode = this.WorkerTypeList.find(a => a.workerTypeId == typeId).gripsDeptCode;
        if (this.isGrips && (this.gripsDeptCode == '' || this.gripsDeptCode == undefined))
            this.gripsDeptCodeError = false;
    }

    validatePFDeposit(): boolean {
        debugger;
        let isValid = true;
        this.workerTypeReq = this.depositBankReq = this.depositDateReq = true;
        //this.showErrorMessage = false;
        if (this.depositDate == undefined || this.depositDate == null) { this.depositDateReq = isValid = false; }
        if (this.workerTypeId == undefined || this.workerTypeId == null) { this.workerTypeReq = isValid = false; }
        if (!this.isGrips) {
            if (this.bankId == undefined || this.bankId == null) { this.depositBankReq = isValid = false; }
        }
        else {
            if (this.gripsDeptCode == '' || this.gripsDeptCode == undefined) { this.gripsDeptCodeError = isValid = false; }
        }
        return isValid;
    }
    GenaratePdf() {
        if (this.validatePFDeposit())
            this.pdfModal.show();
    }
    downLoadPdf(type) {
        debugger;
        this.generatePayInSlip.depositDate = this.depositDate;
        this.generatePayInSlip.depositBankId = this.bankId;
        this.generatePayInSlip.agentName = this.userName;
        this.generatePayInSlip.agentCode = this.userCode;
        this.generatePayInSlip.totalAmount = this.sumofAmount;
        this.generatePayInSlip.deptUserId = this.user.user.deptUserid;
        this.dataService
            .genaratePdfPayInSlip(this.generatePayInSlip)
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
                    FileSaver.saveAs(blob, "PayIn-Slip.pdf");
                }
                this.pdfModal.hide();
            });
    }
    radioChange(id: any) {
        this.gripsDeptCodeError = true;
        this.isGrips = (id == 1 ? false : true);
        if (this.isGrips && (this.gripsDeptCode == '' || this.gripsDeptCode == undefined))
            this.gripsDeptCodeError = false;
    }
}
