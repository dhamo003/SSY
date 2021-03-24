import { Component, OnInit } from '@angular/core';
import { Claims } from '../models/claims.model';
import { Router } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from '../../UserService';
import { EntryPoint, WorkflowTrans, ClaimConstants, pagination, UserType } from '../pipes/constnts.model';

@Component({
  selector: 'app-agent-referrall',
  templateUrl: './agent-referrall.component.html',
  styleUrls: ['./agent-referrall.component.css']
})
export class AgentReferrallComponent implements OnInit {

    claimsData: Claims[]=[];
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
    entryPoint: number;

    constructor(public router: Router, private dataService: ClaimDataService, private userService: UserService) {

    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    }

    ngOnInit() {
        if (this.userService.user.userTpe == UserType.CA.toString())
            this.entryPoint = EntryPoint.CA;
        else if (this.userService.user.userTpe == UserType.Lwfc.toString())
            this.entryPoint = EntryPoint.Lwfc;
        else
            this.entryPoint = EntryPoint.Agent;

        this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, "0","0",this.page, this.pageSize);
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getReferralClaimsByAgentID(id, entrypoint, ssin: any, claimRefNo: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getAllReferralClaimsByAgent(id, entrypoint, ssin, claimRefNo, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    trackClaim(item) {
        this.router.navigate(['claim/ClaimTrack'], { skipLocationChange: true });
    }
    onEditClaimClick(item) {
        this.router.navigate(['claim/agentclaimentry', { claimId: item.claimId, mode: "referal", claimStatus: item.statusId, tranctionType: item.claimType}], { skipLocationChange: true });
    }
    onViewClaimClick(item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "referal", workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    }
    onTrackClaimClick(item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "agentreferal", workflowId: WorkflowTrans.workflowreferral}], { skipLocationChange: true });
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    downloadRecept(claim: Claims) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then((data: any) => {
                let dd = data;
                var url = window.URL.createObjectURL(data);
                window.open(url);
            });
    }
    changepage(page) {
        this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint,"0","0", this.page, this.pageSize);
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
            //    .getSearchAllReferralClaimsByAgent(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
            //    .subscribe((data: any) => {
            //        this.claimsData = data.results;
            //        this.totalRows = data.rowCount;
            //    });
            this.getReferralClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
        }

    }
}
