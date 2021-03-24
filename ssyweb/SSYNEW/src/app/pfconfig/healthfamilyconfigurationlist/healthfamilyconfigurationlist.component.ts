import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { BenefitConfigRowWiseData } from 'src/app/models/benefitConfigRowWiseData.model';

@Component({
  selector: 'app-healthfamilyconfigurationlist',
  templateUrl: './healthfamilyconfigurationlist.component.html',
  styleUrls: ['./healthfamilyconfigurationlist.component.css']
})
export class HealthfamilyconfigurationlistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public helConfigList: BenefitConfigRowWiseData[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetHealthFamilyConfigDetails(this.page, this.pageSize);
    }
    GetHealthFamilyConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetHealthFamilyConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.helConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetHealthFamilyConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/healthfamilyconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }
}
