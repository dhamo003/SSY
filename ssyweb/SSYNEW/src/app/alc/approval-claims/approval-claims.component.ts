import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../../claim/pipes/constnts.model';

@Component({
    selector: 'app-approval-claims',
    templateUrl: './approval-claims.component.html',
    styleUrls: ['./approval-claims.component.css']
})
export class ApprovalClaimsComponent implements OnInit {
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

    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    constructor(public router: Router, private dataService: AlcDataService, private userService: UserService) {

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
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ApprovedbyALC, WorkflowTrans.workflow, "0","0",this.page, this.pageSize);
    }
    onreviewClick(item: any) {
        this.router.navigate(['alc/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "approve", workflowId: WorkflowTrans.workflow, chronologicalOrder: -1 }], { skipLocationChange: true });

    }
    onTrackClaimClick(item) {
        this.router.navigate(['alc/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "approval", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    }
    getApprovalClaims(id: number, type: any, status: any,wfId:any,ssin:any,claimRefNo:any,pageNo?:any,pageSize?:any) {
        this.dataService
            .GetPendingApprovals(id, type, status,wfId, ssin,claimRefNo,pageNo,pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
                console.log(this.claimsData);
            });
    }

    //page change event
    changepage(page) {
        this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ApprovedbyALC, WorkflowTrans.workflow,"0","0", page, this.pageSize);
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
            //this.dataService
            //    .getSearchPendingApprovals(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ApprovedbyALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, ClaimStatus.ApprovedbyALC, WorkflowTrans.workflow, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }

    }
}
