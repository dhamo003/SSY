import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { FundRequest } from '../../models/fundRequest.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination, ClaimConstants  } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { FundRequestExpensesDtlList } from '../../models/expenses.model';
import { FundClaimList } from '../../models/fundRequestedClaimsDetails.model';

@Component({
    selector: 'app-fund-requested-claims',
    templateUrl: './fund-requested-claims.component.html',
    styleUrls: ['./fund-requested-claims.component.css']
})
export class FundRequestedClaimsComponent implements OnInit {

    @ViewChild('expensesModal') public expensesModal: ModalDirective;
    public claimsData: Claims[];
    public fundRequest: FundRequest[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    claimStatusIds: any;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    headertext: string;
    expensesData: FundRequestExpensesDtlList[];
    claimsReqData: FundClaimList[];
    isclaimDta: boolean = false;

    constructor(public router: Router, private dataService: DlcDataService, private userService: UserService) {

    }

    onreviewClick(item: any, index: number) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['dlc/reviewfundrequest', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: WorkflowTrans.fundworkflow, chronologicalOrder: index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['dlc/reviewfundrequestexpenses', { fundRequestId: item.fundRequestNumber, alcId: item.createdBy, mode: 'pending', workflowId: WorkflowTrans.fundworkflow }], { skipLocationChange: true });
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
        this.claimStatusIds = ClaimStatus.FundRequestFromALC + "," + ClaimStatus.SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, this.claimStatusIds, this.page, this.pageSize);
    }

    getFundRequestedClaims(id: number, type: any, wfId: any,statusId: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getFundRequestedClaims(id, type, wfId, statusId, pageNo, pageSize)
            .subscribe((data: any) => {
                this.fundRequest = data.results;
                this.totalRows = data.rowCount;
                //console.log(this.fundRequest);
            });
    }
    changepage(page) {
        this.claimStatusIds = ClaimStatus.FundRequestFromALC + "," + ClaimStatus.SendBackbyBoard;
        this.getFundRequestedClaims(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, this.claimStatusIds, this.page, this.pageSize);
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
                .getFundRequestedClaimsById(id)
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
