import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';
import { UserService } from '../../UserService';
import { EntryPoint } from '../pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { pagination } from '../../claim/pipes/constnts.model';

@Component({
  selector: 'app-claim-draft',
  templateUrl: './claim-draft.component.html',
  styleUrls: ['./claim-draft.component.css']
})
export class ClaimDraftComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;
    pageOfItems: Array<any>;
    p: number = 1;
    order: string = 'description';
    reverse: boolean = false;
    deleteStatus: boolean = false;
    successMessage: string;
   // claimsData: any = [];
    claimsData: Claims[] = [];
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
    okClick() {
        this.successModal.hide();
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe,"0");
    }
    getDate(datestring: any) {
        return new Date(datestring).toLocaleDateString();
    }
    ngOnInit() {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.page, this.pageSize);
    }
    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    getClaimsByBenID(id, entrypoint, userType, pageNo?: any, pageSize?: any) {
        this.dataService
            .getAllDraftClaimsByBen(id, entrypoint, userType, pageNo, pageSize)
            .subscribe((data: any) => {
                this.claimsData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    onEditClaimClick(item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, mode: "draft", claimStatus: item.statusId }], { skipLocationChange: true });
    }
    onViewClaimClick(item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId }], { skipLocationChange: true });

    }
    downloadRecept(claim: Claims) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, claim.claimType)
            .then((data: any) => {
                let dd = data;
                var url = window.URL.createObjectURL(data);
                window.open(url);
            });
    }

    onDeleteClaimClick(item) {
        if (confirm("Are you sure to proceed ")) {
            this.dataService.deleteClaimById(item.claimId)
                .subscribe((data: any) => {
                    this.deleteStatus = data;
                    if (this.deleteStatus) {
                        this.successMessage = "Your claim was deleted successfully";
                    }
                    else {
                        this.successMessage = "Invalid transaction";
                    }
                    this.successModal.show();
                })
        }
    }
    changepage(page) {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.page, this.pageSize);
    }
}
