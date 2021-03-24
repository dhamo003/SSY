import { Component, OnInit } from '@angular/core';
import { InspectorDataService } from '../services/inspector-data.service';
import { Claims } from '../../claim/models/claims.model';
import { UserService } from '../../UserService';
import { WorkflowTrans,pagination } from '../../claim/pipes/constnts.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
    claimsData: Claims[] = [];
    nameValid: boolean = true;
    studentName: string;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: InspectorDataService, private userService: UserService) {

    }
    searchStudent() {
        debugger;
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    }
    ngOnInit() {
        //this.getEducationClaimsSubmittedbyStudentName('montu', this.page, this.pageSize);
    }
    getEducationClaimsSubmittedbyStudentName(name: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getEducationClaimsSubmittedbyStudentName(name, pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onreviewClick(item: any) {
        this.router.navigate(['inspector/reviewclaims', { claimId: item.claimId, claimType: item.claimType, transactionId: item.transactionId, mode: "search", workflowId: WorkflowTrans.workflow, chronologicalOrder: -1 }], { skipLocationChange: true });
    }
    onTrackClaimClick(item) {
        this.router.navigate(['inspector/claimtrack', { transactionId: item.transactionId, tranctionType: item.claimType, mode: "search", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    }
    changepage(page) {
        this.getEducationClaimsSubmittedbyStudentName(this.studentName, this.page, this.pageSize);
    }
}
