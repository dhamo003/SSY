import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TresurerDataService } from '../services/tresurer-data.service';
import { UserService } from '../../UserService';
//import { PaymentProcessMasterData } from '../../models/paymentProcessDetails.model';
//import { PaymentProcessModel, PaymentClaims } from '../../claim/models/paymentprocess.model';
import { PaymentReleaseDetailsModel } from '../../models/paymentReleaseDetails.model';
import { pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-payment-released-list',
  templateUrl: './payment-released-list.component.html',
  styleUrls: ['./payment-released-list.component.css']
})
export class PaymentReleasedListComponent implements OnInit {

    paymentReleaseData: PaymentReleaseDetailsModel[]=[];
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: TresurerDataService, private userService: UserService) { }

    ngOnInit() {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
  }
    getPaymentReleaseDetails(id: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getPaymentReleaseDetails(id, pageNo, pageSize)
            .subscribe((data: any) => {
                this.paymentReleaseData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onreviewClick(item: any) {
        debugger;
        this.router.navigate(['tresurer/reviewpaymentrelease', { releaseId: item.paymentReleaseId, processId: item.paymentProcessingId, userId: item.createdBy }], { skipLocationChange: true });

    }
    changepage(page) {
        this.getPaymentReleaseDetails(this.userService.user.deptUserid, this.page, this.pageSize);
    }

}
