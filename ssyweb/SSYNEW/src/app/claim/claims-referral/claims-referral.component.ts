import { Component, OnInit } from '@angular/core';
import { Claims } from '../models/claims.model';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { UserService } from '../../UserService';
import { EntryPoint, ClaimStatus, WorkflowTrans, ClaimConstants, pagination } from '../pipes/constnts.model';

@Component({
  selector: 'app-claims-referral',
  templateUrl: './claims-referral.component.html',
  styleUrls: ['./claims-referral.component.css']
})
export class ClaimsReferralComponent implements OnInit {
    claimsData: Claims[]=[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    claimReferenceNoText: string;
    strClaimRefNo: string;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: ClaimDataService, private userService: UserService) {

    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    ngOnInit() {
        //Todo: change parameters 
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe,"0",this.page, this.pageSize);
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getReferralClaimsByBenID(id, entrypoint, userType,claimRefNo: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getAllReferralClaimsByBenficiary(id, entrypoint, userType, claimRefNo, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
                console.log(data);
            });
    }
    onEditClaimClick(item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, tranctionType: item.claimType, claimStatus: item.statusId, mode: "referal" }], { skipLocationChange: true });
    }
    onViewClaimClick(item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "referal", workflowId: WorkflowTrans.workflowreferral  }], { skipLocationChange: true });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
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
    onTrackClaimClick(item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflow, mode: "referal"}], { skipLocationChange: true });
        //this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflowreferral }], { skipLocationChange: true });
    }
    changepage(page) {
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe,"0", this.page, this.pageSize);
    }
    GetResults() {
        if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
            this.strClaimRefNo = this.claimReferenceNoText.trim();
        else
            this.strClaimRefNo = "0";
        //this.dataService
        //    .getSearchAllReferralClaimsByBenficiary(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
        //    .subscribe((data: any) => {
        //        this.claimsData = data.results;
        //        this.totalRows = data.rowCount;
        //    });
        this.getReferralClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
    }
}
