import { Component, OnInit } from '@angular/core';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';
import { Utilization } from '../models/utilization.model';
import { UserService } from '../../UserService';
import { LovConstants, ClaimConstants, ClaimStatus, EntryPoint, AttachmentType, WorkflowTrans, pagination } from '../pipes/constnts.model';
@Component({
    selector: 'app-claims',
    templateUrl: './claims.component.html',
    styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

    claimsData: Claims[]=[];
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    IsBeneficiary: boolean = false;
    UtilizationDetails: Utilization[] = [];
    group: any[];
    result: any[];
    claimReferenceNoText: string;
    ssinSearchText: string;
    strSSIN: string;
    strClaimRefNo: string;
    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end

    constructor(public router: Router, private dataService: ClaimDataService, private userService: UserService) {

    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    }

    ngOnInit() {

        //this.getClaimsByBenID(14843, EntryPoint.Agent);

        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe,"0", this.page, this.pageSize);
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getTypeName(claimType: string) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    }
    getClaimsByBenID(id, entrypoint, userType, claimRefNo: any, pageNo?: any, pageSize?: any) {
        this.dataService
            .getClaimsByBenficiary(id, entrypoint, userType, claimRefNo, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
                if (this.userService.user.userTpe == "10"){
                    this.IsBeneficiary = true;
                    this.getClaimUtilizationDetails();
                }
                console.log(data);
            });
    }
    onEditClaimClick(item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, tranctionType: item.claimType, claimStatus: item.statusId }], { skipLocationChange: true });
    }
    onViewClaimClick(item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "claim", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    downloadRecept(claim: Claims) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then((data: any) => {
                let dd = data;
                var url = window.URL.createObjectURL(data);
                window.open(url);
            });
    }
    onTrackClaimClick(item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    }
    getClaimUtilizationDetails() {
        this.dataService
            .getClaimConfigurationMaster()
            .subscribe((data: any) => {
                this.group = [];
                this.result = [];
                var groups = new Set(this.claimsData.map(item => item.claimType));
                groups.forEach(g =>
                    this.group.push({
                        name: g,
                        values: this.claimsData.filter(i => i.claimType === g)
                    }
                    ));
                for (let i = 0; i < this.group.length; i++) {
                    let sumClaimAmount = 0;
                    let sumApprovedAmount = 0;
                    for (let j = 0; j < this.group[i].values.length; j++) {
                        sumClaimAmount += this.group[i].values[j].claimAmount;
                        sumApprovedAmount += this.group[i].values[j].approvedAmount;
                    }
                    this.result.push({
                        claimName: this.group[i].name,
                        claimAmount: sumClaimAmount,
                        approvedAmount: sumApprovedAmount
                    });
                }
                for (let k = 0; k < data.length; k++) {
                    let isAdd: boolean = false;
                    for (let l = 0; l < this.result.length; l++) {
                        if (data[k].claimName == this.result[l].claimName) {
                            const test = { ...data[k], ...this.result[l] };
                            this.UtilizationDetails.push({
                                claimName: test.claimName,
                                claimAmount: test.claimAmount,
                                approvedAmount: test.approvedAmount,
                                annualLimit: test.annualLimit
                            });
                            isAdd = true;
                            break;
                        }
                    }
                    if (!isAdd) {
                        this.UtilizationDetails.push({
                            claimName: data[k].claimName,
                            claimAmount: 0,
                            approvedAmount: 0,
                            annualLimit: data[k].annualLimit
                        });
                    }                    
                }
            })
    }
    changepage(page) {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe,"0", this.page, this.pageSize);
    }
    GetResults() {
        if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
            this.strClaimRefNo = this.claimReferenceNoText.trim();
        else
            this.strClaimRefNo = "0";
        //this.dataService
        //    .getSearchClaimsByBenficiary(this.userService.user.deptUserid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
        //    .subscribe((data: any) => {
        //        this.claimsData = data.results;
        //        this.totalRows = data.rowCount;
        //    });
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
    }
}
