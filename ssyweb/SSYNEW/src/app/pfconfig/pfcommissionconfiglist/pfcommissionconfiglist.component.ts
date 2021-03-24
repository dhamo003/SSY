import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';

import { Router } from '@angular/router';
import { PFCommissionConfig } from 'src/app/models/pfCommissionConfig.model';

@Component({
  selector: 'app-pfcommissionconfiglist',
  templateUrl: './pfcommissionconfiglist.component.html',
  styleUrls: ['./pfcommissionconfiglist.component.css']
})
export class PfcommissionconfiglistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public pfConfigList: PFCommissionConfig[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetPFCommissionConfigDetails(this.page, this.pageSize);
    }
    GetPFCommissionConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetPFCommissionConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pfConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetPFCommissionConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "edit" }], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/pfcommissionconfig', { commissionConfigId: item.commissionConfigId, mode: "view" }], { skipLocationChange: true });
    }

}
