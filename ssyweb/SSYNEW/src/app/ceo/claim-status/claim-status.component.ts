import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeoDataService } from '../services/ceo-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.css']
})
export class ClaimStatusComponent implements OnInit {

    public claimsData: Claims[] = [];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    claimReferenceNoText: string;
    ssinSearchText: string;
    strSSIN: string;
    strClaimRefNo: string;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    constructor(public router: Router, private dataService: CeoDataService, private userService: UserService) {

    }
    onreviewClick(item: any) {
        this.router.navigate(['ceo/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "claimstatus", workflowId: ((item.statusId >= 2 && item.statusId <= 7 || item.statusId ==16) ? WorkflowTrans.workflow : WorkflowTrans.workflowreferral) }], { skipLocationChange: true });

    }
    onTrackClaimClick(item) {
        this.router.navigate(['ceo/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "claimstatus", workflowId: ((item.statusId >= 2 && item.statusId <= 7 || item.statusId == 16) ? WorkflowTrans.workflow : WorkflowTrans.workflowreferral) }], { skipLocationChange: true });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    }
    ngOnInit() {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferApprovedbyDLC, WorkflowTrans.workflowreferral,"0","0", this.page, this.pageSize);
    }

    getApprovalClaims(id: number, type: any, status: any, wfId: any, ssin: any, claimRefNo: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getClaimStatusClaims(id, type, ssin, claimRefNo, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
   
    changepage(page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferApprovedbyDLC, WorkflowTrans.workflowreferral,"0","0", this.page, this.pageSize);
    }
    GetResults() {
        if ((this.ssinSearchText != null && this.ssinSearchText != undefined) || (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined)) {
            if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
                this.strSSIN = this.ssinSearchText.trim();
            else
                this.strSSIN = "0";

            if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
                this.strClaimRefNo = this.claimReferenceNoText.trim();
            else
                this.strClaimRefNo = "0";
           
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferApprovedbyDLC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }

    }
}
