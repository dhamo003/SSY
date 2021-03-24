import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { BenefitConfigRowWiseData } from 'src/app/models/benefitConfigRowWiseData.model';


@Component({
  selector: 'app-disabilityconfigurationlist',
  templateUrl: './disabilityconfigurationlist.component.html',
  styleUrls: ['./disabilityconfigurationlist.component.css']
})
export class DisabilityconfigurationlistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public disConfigList: BenefitConfigRowWiseData[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetDisabilityConfigDetails(this.page, this.pageSize);
    }
    GetDisabilityConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetDisabilityConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.disConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetDisabilityConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/disabilityconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }
}
