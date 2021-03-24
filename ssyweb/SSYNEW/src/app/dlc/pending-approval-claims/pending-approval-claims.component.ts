import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';
import { UserService } from '../../UserService';


@Component({
  selector: 'app-pending-approval-claims',
  templateUrl: './pending-approval-claims.component.html',
  styleUrls: ['./pending-approval-claims.component.css']
})
export class PendingApprovalClaimsComponent implements OnInit {

    claimsData: Claims[]=[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: DlcDataService, private userService: UserService) {

    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    onreviewClick(item: any, index: number) {
        this.router.navigate(['dlc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "pending", claimAmount: item.claimAmount, chronologicalOrder: index }], { skipLocationChange: true });

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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral, this.page, this.pageSize);
    }
    onTrackClaimClick(item) {
        this.router.navigate(['dlc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "pending", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    }
    getApprovalClaims(id: number, type: any, status: any, wfId: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
                console.log(this.claimsData);
            });
    }
    changepage(page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral, this.page, this.pageSize);
    }

}
