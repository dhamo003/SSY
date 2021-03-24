import { Component, OnInit } from '@angular/core';
import { PFConfigurationModel } from '../../models/pfconfiguration.model';
import { pagination } from '../../claim/pipes/constnts.model';
import { Router } from '@angular/router';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { UserService } from '../../UserService';
@Component({
    selector: 'app-pfconfigurationlist',
    templateUrl: './pfconfigurationlist.component.html',
    styleUrls: ['./pfconfigurationlist.component.css']
})
export class PfconfigurationlistComponent implements OnInit {
    public configurationData: PFConfigurationModel[] = [];

    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    constructor(public router: Router, private dataService: PFConfigDataService, private userService: UserService) {

    }

    ngOnInit() {
        this.getPFConfigurations(this.page, this.pageSize);
    }

    getPFConfigurations(pageNo?: any, pageSize?: any) {
        this.dataService
            .getPFConfigurations(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.configurationData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changepage(page) {
        this.getPFConfigurations(this.page, this.pageSize);
    }
    onEditClick(item: any) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "edit" }], { skipLocationChange: true });
    }
    onViewClick(item) {
        debugger;
        this.router.navigate(['pfconfig/pfconfiguration', { pfConfigurationId: item.pfConfigurationId, mode: "view" }], { skipLocationChange: true });
    }
    cancelClick() {
        window.location.href = "pfconfig/benefitconfiguration";
    }
}