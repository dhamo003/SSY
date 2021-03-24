import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { PFInterestConfig } from 'src/app/models/pfInterestConfig.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pfinterestconfiglist',
  templateUrl: './pfinterestconfiglist.component.html',
  styleUrls: ['./pfinterestconfiglist.component.css']
})
export class PfinterestconfiglistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public pfConfigList: PFInterestConfig[] = [];

    constructor(public router: Router,private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetPFInterestConfigDetails(this.page, this.pageSize);
    }
    GetPFInterestConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetPFInterestConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.pfConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetPFInterestConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "edit"}], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/pfinterestconfig', { interestConfigId: item.interestConfigId, mode: "view" }], { skipLocationChange: true });
    }
}
