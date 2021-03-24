import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { InspectorDataService } from '../services/inspector-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { ClaimStatus, pagination } from '../../claim/pipes/constnts.model';
import { LegacyClaims } from '../../models/LegacyClaims';
import { UserType } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-inspector-legacy-list',
  templateUrl: './inspector-legacy-list.component.html',
  styleUrls: ['./inspector-legacy-list.component.css']
})
export class InspectorLegacyListComponent implements OnInit {

    legacyClaimsData: LegacyClaims[];
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: InspectorDataService, private userService: UserService) {

    }

    ngOnInit() {
        this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
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
        this.getLegacyClaimsList(this.userService.user.deptUserid, this.page, this.pageSize);
    }

}
