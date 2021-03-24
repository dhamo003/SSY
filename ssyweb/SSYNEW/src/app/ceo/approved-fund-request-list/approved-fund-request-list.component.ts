import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CeoDataService } from '../services/ceo-data.service';
import { Claims } from '../../claim/models/claims.model';
import { FundRequest } from '../../models/fundRequest.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination, ClaimConstants } from '../../claim/pipes/constnts.model';
import { ModalDirective, BsDatepickerConfig } from 'ngx-bootstrap';
import { FundRequestExpensesDtlList } from '../../models/expenses.model';
import { FundClaimList } from '../../models/fundRequestedClaimsDetails.model';

@Component({
  selector: 'app-approved-fund-request-list',
  templateUrl: './approved-fund-request-list.component.html',
  styleUrls: ['./approved-fund-request-list.component.css']
})
export class ApprovedFundRequestListComponent implements OnInit {
    @ViewChild('expensesModal') public expensesModal: ModalDirective;
    public claimsData: Claims[];
    public fundRequest: FundRequest[]=[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    headertext: string;
    expensesData: FundRequestExpensesDtlList[];
    claimsReqData: FundClaimList[];
    isclaimDta: boolean = false;
    datePickerConfig: Partial<BsDatepickerConfig>;
    maxDate: any;
    rloSearchText: string;
    fundRequestNoText: string;
    requestDateText: Date;
    strRLO: string;
    strFundRequestNo: number;
    strRequestDate: string;

    constructor(public router: Router, private dataService: CeoDataService, private userService: UserService) {
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
    }
    onreviewClick(item: any) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['ceo/fundrequest', { fundRequestId: item.fundRequestNumber, mode: 'view', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow, chronologicalOrder:-1 }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['ceo/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: 'view', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    }
    onEditreviewClick(item: any) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['ceo/fundrequest', { fundRequestId: item.fundRequestNumber, mode: 'edit', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['ceo/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, mode: 'edit', alcId: item.createdBy, routeMode: 'approved', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    }

    ngOnInit() {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, "0", 0, "0", this.page, this.pageSize);
    }
    getFundRequestedClaims(id: number, type: any, wfType: any, statusId: any,rlo: any, fundRequestNo:any,requestDate: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getFundRequestedClaims(id, type, wfType, statusId, rlo, fundRequestNo, requestDate, pageNo, pageSize)
            .subscribe((data: any) => {
                this.fundRequest = data.results;
                this.totalRows = data.rowCount;
                //console.log(this.fundRequest);
            });
    }
    changepage(page) {
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard,"0",0,"0", this.page, this.pageSize);
    }
    GetResults() {
        debugger;
        if ((this.rloSearchText != null && this.rloSearchText != undefined) || (this.fundRequestNoText != null && this.fundRequestNoText != undefined) || (this.requestDateText != null && this.requestDateText != undefined)) {
            if (this.rloSearchText != null && this.rloSearchText != undefined && this.rloSearchText != "")
                this.strRLO = this.rloSearchText.trim();
            else
                this.strRLO = "0";

            if (this.fundRequestNoText != null && this.fundRequestNoText != undefined && this.fundRequestNoText != "")
                this.strFundRequestNo = Number(this.fundRequestNoText);
            else
                this.strFundRequestNo = 0;
            if (this.requestDateText != null && this.requestDateText != undefined) {
                this.strRequestDate = this.requestDateText.toISOString();
                var x = this.requestDateText.getUTCDate();
                var y = this.requestDateText.toDateString();
                var z = this.requestDateText.toLocaleDateString();
                var x1 = this.requestDateText.toLocaleString();
                var y1 = this.requestDateText.toUTCString();
            }
            else
                this.strRequestDate = "0";
            this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, this.strRLO, this.strFundRequestNo, this.strRequestDate, pagination.pageNo, pagination.pageSize);
        }
        else
            this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard, "0", 0, "0", this.page, this.pageSize);
    }
    getDetails(type: string, id: number) {
        if (type == "Expenses") {
            this.dataService
                .getFundRequestedExpensesById(id)
                .subscribe((data: any) => {
                    this.expensesData = data.fundRequestExpensesDtlList;
                    this.headertext = "Expenses Details";
                    this.isclaimDta = false;
                    this.expensesModal.show();
                });
        }
        else {
            this.dataService
                .getFundRequestedClaimsById(id, this.userService.user.userTpe)
                .subscribe((data: any) => {
                    debugger;
                    this.claimsReqData = data.fundClaimList;
                    this.headertext = "Claims Details";
                    this.isclaimDta = true;
                    this.expensesModal.show();


                });
        }
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
}
