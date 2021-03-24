import { Component, OnInit } from '@angular/core';
import { PFCollectionDetailsList } from '../models/pf.collectiondetails.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClaimDataService } from '../services/claim-data.service';
import { UserService } from 'src/app/UserService';
import { Subscription } from 'rxjs';
import { PFLegacyDtl1 } from '../models/pfLegacyMaster.model';
@Component({
  selector: 'app-bulkpfdepositcollection-list',
  templateUrl: './bulkpfdepositcollection-list.component.html',
  styleUrls: ['./bulkpfdepositcollection-list.component.css']
})
export class BulkpfdepositcollectionListComponent implements OnInit {

    pfDepositId: number;
    private route$: Subscription;
    pfCollectionDetails1: PFCollectionDetailsList[] = [];
    pfCollectionDetails: PFLegacyDtl1[] = [];

    constructor(public router: Router, private route: ActivatedRoute, private dataService: ClaimDataService, private user: UserService) { }

    ngOnInit() {
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.pfDepositId = params["pfLegacyMasterId"];
            }
        );
        this.viewCollections()
  }
    viewCollections() {
        this.dataService
            .getLegacyPFCollections(this.pfDepositId)
            .subscribe((data: any) => {
                debugger;
                this.pfCollectionDetails = data;
            });

    }
    viewCollections1() {
        this.dataService
            .getCollections(this.pfDepositId)
            .subscribe((data: any) => {
                debugger;
                this.pfCollectionDetails1 = data;
            });

    }
    cancelClick() {
        window.location.href = "Agent/submittedlegacypfdetails";
    }
}
