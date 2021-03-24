import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TresurerDataService } from '../services/tresurer-data.service';
import { Claims } from '../../claim/models/claims.model';
import { FundRequest } from '../../models/fundRequest.model';
import { UserService } from '../../UserService';
import { ClaimStatus, WorkflowTrans, pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-pending-fund-release-list',
  templateUrl: './pending-fund-release-list.component.html',
  styleUrls: ['./pending-fund-release-list.component.css']
})
export class PendingFundReleaseListComponent implements OnInit {
    //public claimsData: Claims[]=[];
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


    constructor(public router: Router, private dataService: TresurerDataService, private userService: UserService) {

    }

    ngOnInit() {
        debugger;
        //this.getFundReleaseDetails(this.userService.user.deptUserid, this.userService.user.userTpe, WorkflowTrans.fundworkflow, ClaimStatus.ApprovebyBoard);
        this.getFundReleaseDetails(this.userService.user.deptUserid, ClaimStatus.ApprovebyBoard, this.page, this.pageSize);

    }

    getFundReleaseDetails(id: number, statusId: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getFundReleaseDetails(id, statusId, pageNo, pageSize)
            .subscribe((data: any) => {
                this.fundRequest = data.results;
                this.totalRows = data.rowCount;
                //console.log(this.fundRequest);
            });
    }

    onreviewClick(item: any, index:any) {
        if (item.fundRequestType == 1) // Claims Fund Request
            this.router.navigate(['tresurer/fundrelease', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId, mode: "pending", chronologicalOrder:index }], { skipLocationChange: true });
        else if (item.fundRequestType == 2) // Expenses Fund Request
            this.router.navigate(['tresurer/reviewfundreleaseexpenses', { fundReleaseOrderHdrId: item.fundReleaseOrderHdrId, alcId: item.alcId }], { skipLocationChange: true });
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
    changepage(page) {
        this.getFundReleaseDetails(this.userService.user.deptUserid, ClaimStatus.ApprovebyBoard, this.page, this.pageSize);
    }

}
