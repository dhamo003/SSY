import { Component, OnInit } from '@angular/core';
import { ReceiptBookModel } from '../../models/receiptbook.model';
import { pagination } from '../../claim/pipes/constnts.model';
import { Router } from '@angular/router';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { UserService } from '../../UserService';

@Component({
  selector: 'app-receiptbooklist',
  templateUrl: './receiptbooklist.component.html',
  styleUrls: ['./receiptbooklist.component.css']
})
export class ReceiptbooklistComponent implements OnInit {
    public receiptBookData: ReceiptBookModel[] = [];

    //Paging props start
    page: number = pagination.pageNo;
    totalRows: any;
    pageSize: number = pagination.pageSize;
    //Paging props end
    constructor(public router: Router, private dataService: PFConfigDataService, private userService: UserService) {

    }

    ngOnInit() {
        this.getReceiptBooks(this.page, this.pageSize);
    }

    getReceiptBooks(pageNo?: any, pageSize?: any) {
        this.dataService
            .getReceiptBooks(pageNo, pageSize)
            .subscribe((data: any) => {
                debugger;
                this.receiptBookData = data.results;
                this.totalRows = data.rowCount;
            });
    }
    changepage(page) {
        this.getReceiptBooks(this.page, this.pageSize);
    }
    onViewClick(item) {
        debugger;
        this.router.navigate(['pfconfig/receiptbook', { id: item.id, mode: "view" }], { skipLocationChange: true });
    }
}