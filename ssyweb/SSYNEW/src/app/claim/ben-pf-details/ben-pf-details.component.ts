import { Component, OnInit } from '@angular/core';
import { BeneficiaryPFDetails } from 'src/app/models/benpfdetails.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/UserService';
import { ClaimDataService } from '../services/claim-data.service';
import { pagination, UserType } from '../pipes/constnts.model';

@Component({
  selector: 'app-ben-pf-details',
  templateUrl: './ben-pf-details.component.html',
  styleUrls: ['./ben-pf-details.component.css']
})
export class BenPfDetailsComponent implements OnInit {

    public benPFDetails: BeneficiaryPFDetails[] = [];
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    ssnNoValid: boolean = true;
    ssin: any;
    isVisibleBenPFDetails: boolean = false;
    isMessageVisible: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) { }

  ngOnInit() {
  }
    searchSSINNo(id: any) {
        if (id != undefined && id.trim() != "") {
            this.getBeneficiaryPFDetails(id, this.page, this.pageSize);
        }
        else
            this.ssnNoValid = false;
    }
    getBeneficiaryPFDetails(id: any, page: any, pageSize:any) {
        this.dataService
            .getBeneficiaryPFDetails(id.trim(), page, pageSize)
            .subscribe((data: any) => {
                debugger;
                if (data != null && (data.rowCount > 0)) {
                    this.isVisibleBenPFDetails = true;
                    this.benPFDetails = data.results;
                    this.totalRows = data.rowCount;
                    this.isMessageVisible = false;
                }
                else {
                    this.isVisibleBenPFDetails = false;
                    this.isMessageVisible = true;
                }
            });
    }
    changePage(page) {
        debugger;
        this.getBeneficiaryPFDetails(this.ssin, page, this.pageSize);
    }
    cancelClick() {
        debugger;
        if (this.user.user.userTpe == UserType.Beneficiary.toString())
           // this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
            window.location.href = "Home/Dashboard";
        else
            window.location.href = "Home/DeptDashboard";
    }
}
