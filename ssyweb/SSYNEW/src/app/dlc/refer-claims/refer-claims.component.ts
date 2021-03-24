import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DlcDataService } from '../services/dlc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-refer-claims',
  templateUrl: './refer-claims.component.html',
  styleUrls: ['./refer-claims.component.css']
})
export class ReferClaimsComponent implements OnInit {

    public claimsData: Claims[]=[];
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

    constructor(public router: Router, private dataService: DlcDataService, private userService: UserService) {

    }
    onreviewClick(item: any) {
        this.router.navigate(['dlc/referralreview', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId }], { skipLocationChange: true });

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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral,"0","0", this.page, this.pageSize);
    }

    getApprovalClaims(id: number, type: any, status: any, wfId: any, ssin: any, claimRefNo: any, pageNo?: any, pageSize?: any) {
        debugger;
        this.dataService
            .GetPendingApprovals(id, type, status, wfId, ssin, claimRefNo, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
                console.log(this.claimsData);
            });
    }
    changepage(page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral,"0","0", this.page, this.pageSize);
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
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ReferedtoDLC, WorkflowTrans.workflowreferral, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }

    }
}
