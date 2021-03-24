import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';
import { UserService } from '../../UserService';
import { EntryPoint, UserType } from '../pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-agent-draft',
  templateUrl: './agent-draft.component.html',
  styleUrls: ['./agent-draft.component.css']
})
export class AgentDraftComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;

    claimsData: Claims[]=[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    deleteStatus: boolean = false;
    successMessage: string;
    ssinSearchText: string;
    strSSIN: string;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    entryPoint: any;


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
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint,"0", this.page, this.pageSize);
        //this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getClaimsByAgentID(id, entrypoint, ssin: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getAllDraftClaimsByAgent(id, entrypoint, ssin, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onEditClaimClick(item) {
        this.router.navigate(['claim/agentclaimentry', { claimId: item.claimId, mode: "draft", claimStatus: item.statusId }], { skipLocationChange: true });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    downloadRecept(claim: Claims) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, claim.claimType)
            .then((data: any) => {
                let dd = data;
                var url = window.URL.createObjectURL(data);
                window.open(url);
            });
    }
    okClick() {
        this.successModal.hide();
        this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);

    }
    onDeleteClaimClick(item) {
        if (confirm("Are you sure to proceed ")) {
            this.dataService.deleteClaimById(item.claimId)
                .subscribe((data: any) => {
                    this.deleteStatus = data;
                    if (this.deleteStatus) {
                        this.successMessage = "Your claim was deleted successfully";
                    }
                    else {
                        this.successMessage = "Invalid transaction";
                    }
                    this.successModal.show();

                })
        }
    }
    changepage(page) {
       // this.getClaimsByAgentID(this.userService.user.deptUserid, EntryPoint.Agent, this.page, this.pageSize);
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint,"0", this.page, this.pageSize);
    }
    GetResults() {
        if (this.ssinSearchText != null && this.ssinSearchText != undefined && this.ssinSearchText != "")
            this.strSSIN = this.ssinSearchText.trim();
        else
            this.strSSIN = "0";
        this.getClaimsByAgentID(this.userService.user.deptUserid, this.entryPoint, this.strSSIN, pagination.pageNo, pagination.pageSize);
    }
}
