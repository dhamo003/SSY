import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, pagination  } from '../../claim/pipes/constnts.model';
import { LegacyClaims } from '../../models/LegacyClaims';
import { UserType } from '../pipes/constnts.model';

@Component({
  selector: 'app-legacy-list',
  templateUrl: './legacy-list.component.html',
  styleUrls: ['./legacy-list.component.css']
})
export class LegacyListComponent implements OnInit {
    legacyClaimsData: LegacyClaims[];
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: ClaimDataService, private userService: UserService) {

    }

    ngOnInit() {
        //if (this.userService.user.userTpe == UserType.Inspector.toString()) {
        //    this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
        //}
        //else {
            this.getLegacyClaimsList(this.userService.user.userid, this.page, this.pageSize);
        //}
        
  }
    getLegacyClaimsList(id: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getLegacyClaimsList(id, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.legacyClaimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onreviewClick(item: any) {
        debugger;
       // this.router.navigate(['alc/reviewpaymentprocess', { paymentProcessId: item.paymentProcessingID, mode: "view", statusId: item.statusId }], { skipLocationChange: true });
    }
    changepage(page) {
        this.getLegacyClaimsList(this.userService.user.userid, this.page, this.pageSize);
    }

}
