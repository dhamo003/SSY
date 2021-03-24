import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { BenefitConfigRowWiseData } from 'src/app/models/benefitConfigRowWiseData.model';

@Component({
  selector: 'app-deathconfigurationlist',
  templateUrl: './deathconfigurationlist.component.html',
  styleUrls: ['./deathconfigurationlist.component.css']
})
export class DeathconfigurationlistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public deathConfigList: BenefitConfigRowWiseData[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetDeathConfigDetails(this.page, this.pageSize);
    }
    GetDeathConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetDeathConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.deathConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetDeathConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/deathconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }
}
