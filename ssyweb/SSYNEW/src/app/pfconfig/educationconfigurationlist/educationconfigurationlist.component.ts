import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/claim/pipes/constnts.model';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { Router } from '@angular/router';
import { BenefitConfigRowWiseData } from 'src/app/models/benefitConfigRowWiseData.model';

@Component({
  selector: 'app-educationconfigurationlist',
  templateUrl: './educationconfigurationlist.component.html',
  styleUrls: ['./educationconfigurationlist.component.css']
})
export class EducationconfigurationlistComponent implements OnInit {

    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    public eduConfigList: BenefitConfigRowWiseData[] = [];

    constructor(public router: Router, private dataService: PFConfigDataService) { }

    ngOnInit() {
        this.GetEducationConfigDetails(this.page, this.pageSize);
    }
    GetEducationConfigDetails(pageNo: any, pageSize: any) {
        debugger;
        this.dataService
            .GetEducationConfigDetails(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.eduConfigList = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changePage(page) {
        this.GetEducationConfigDetails(page, this.pageSize);
    }
    onEditClick(item: any) {
        this.router.navigate(['pfconfig/educationconfiguration', { rowId: item.id, status: item.status, mode: "edit", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    onViewClick(item: any) {
        this.router.navigate(['pfconfig/educationconfiguration', { rowId: item.id, status: item.status, mode: "view", noofTimesId: item.noofTimes }], { skipLocationChange: true });
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }
}
