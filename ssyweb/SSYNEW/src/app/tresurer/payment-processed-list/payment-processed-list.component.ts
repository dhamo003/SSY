import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TresurerDataService } from '../services/tresurer-data.service';
import { UserService } from '../../UserService';
import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';
import { pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-payment-processed-list',
  templateUrl: './payment-processed-list.component.html',
  styleUrls: ['./payment-processed-list.component.css']
})
export class PaymentProcessedListComponent implements OnInit {
    paymentProcessData: PaymentProcessMasterData[]=[];
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: TresurerDataService, private userService: UserService) { }

    ngOnInit() {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
  }
    getPaymentProcessDetails(id: any, type: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getTreasurerPaymentProcesses(id, type, pageNo, pageSize)
            .subscribe((data: any) => {
                this.paymentProcessData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onreviewClick(item: any) {
        this.router.navigate(['tresurer/paymentrelease', { processId: item.paymentProcessingID, alcId: item.createdBy  }], { skipLocationChange:true });
     
    }
    changepage(page) {
        this.getPaymentProcessDetails(this.userService.user.deptUserid, this.userService.user.userTpe, this.page, this.pageSize);
    }

}
