import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, pagination } from '../../claim/pipes/constnts.model';
import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';

@Component({
  selector: 'app-paymentprocessedlist',
  templateUrl: './paymentprocessedlist.component.html',
  styleUrls: ['./paymentprocessedlist.component.css']
})
export class PaymentprocessedlistComponent implements OnInit {
    paymentProcessData: PaymentProcessMasterData[] = [];
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    constructor(public router: Router, private dataService: AlcDataService, private userService: UserService) {

    }

    ngOnInit() {
        debugger;
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize); //ClaimStatus.PaymentProcessingbyALC
    }
    getPaymentProcessDetails(id: any, statusId: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getPaymentProcessDetails(id, statusId, pageNo, pageSize)
            .subscribe((data: any) => {
                //this.paymentProcessData = data;
                this.paymentProcessData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onreviewClick(item: any) {
        debugger;
        this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view",statusId:item.statusId }], { skipLocationChange: true });
    }
    changepage(page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, 0, this.page, this.pageSize);
    }

}