import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, Params, ActivatedRoute, Data } from '@angular/router';
import { ReceiptBookModel } from '../../models/receiptbook.model';
import { ModalDirective } from "ngx-bootstrap";
import { Subscription } from 'rxjs';
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { BsDatepickerConfig } from "ngx-bootstrap";
import { UserService } from '../../UserService';
import { NewRegUsers } from '../../models/newReg.model';
import { UserType } from '../../claim/pipes/constnts.model';


@Component({
  selector: 'app-receiptbook',
  templateUrl: './receiptbook.component.html',
  styleUrls: ['./receiptbook.component.css']
})
export class ReceiptbookComponent implements OnInit {

    @ViewChild('successModal') public successModal: ModalDirective;
    route$: Subscription;
    dateValid: boolean = true;
    receiptNoFromValid: boolean = true;
    receiptNoToValid: boolean = true;
    agentCodeValid: boolean = true;
    bookNoValid: boolean = true;
    receiptBook: ReceiptBookModel = {} as ReceiptBookModel;
    datePickerConfig: Partial<BsDatepickerConfig>;
    successMessage: string;
    id: number;
    mode: string = "add";
    maxDate: Date;
    totalRows: any;
    agentList: Array<NewRegUsers> = [];
    bookNameValid: boolean = false;
    todayMinIssueDateReq: boolean = false;

    constructor(public router: Router, private route: ActivatedRoute, private dataService: PFConfigDataService, private userService: UserService) {
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({},
            {
                dateInputFormat: 'DD/MM/YYYY',
                showWeekNumbers: false,
                containerClass: 'theme-dark-blue'
            });
    }

    ngOnInit() {
        debugger;
        this.getAgentList();
        this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.id = params["id"] != null ? Number(params["id"]) : 0;
                this.mode = params["mode"] == undefined ? 'add' : params["mode"];
                if (this.mode == "edit" || this.mode == "view")
                    this.getReceiptBookDetails(this.id);
            }
        );
        //console.log(this.receiptBook);
    }
    getReceiptBookDetails(id: any) {
        this.dataService
            .getReceiptBookDetails(id)
            .subscribe((data: any) => {
                debugger;
                this.receiptBook = data;

                this.receiptBook.date = new Date(this.receiptBook.date);
                //this.receiptBook.receiptNoFrom = new Date(this.receiptBook.receiptNoFrom);
                //this.receiptBook.receiptNoTo = new Date(this.receiptBook.receiptNoTo);
            });
    }
    ngOnDestroy() {
        if (this.route$) this.route$.unsubscribe();
    }

    saveReceiptBook(ReceiptBookModel: ReceiptBookModel) {
        debugger;
        if (this.validateConfiguration()) {
            if (this.mode != "view") {
                this.receiptBook.createdBy = this.userService.user.deptUserid;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveReceiptBook(this.receiptBook)
                        .then((data: any) => {
                            if (data) {
                                this.successMessage = "The Receipt Book issuance is completed successfully";
                                this.successModal.show();
                            }
                            else {
                                this.successMessage = "The Receipt Book issuance is not completed";
                                this.successModal.show();
                            }
                        });
                }

            }

        }
    }
    validateConfiguration() {
        debugger;
        let isValid = true;
        if (this.receiptBook.date == undefined) { this.dateValid = isValid = false }
        if (this.receiptBook.agentCode == undefined) { this.agentCodeValid = isValid = false }
        if (this.receiptBook.bookNo == undefined) { this.bookNoValid = isValid = false }
        if (this.receiptBook.receiptNoFrom == undefined)  { this.receiptNoFromValid = isValid = false }
        if (this.receiptBook.receiptNoTo == undefined) { this.receiptNoToValid = isValid = false }
        if (this.bookNameValid == true) { isValid = false }
        if (this.todayMinIssueDateReq == true) { isValid = false }
        return isValid;
    }
    clearContribution() {
        if (this.mode == "add") {
            this.receiptBook = {} as ReceiptBookModel;
        }
    }
    cancelClick() {
        if (this.userService.user.userTpe == UserType.SuperAdmin.toString())
            this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
        else 
            this.router.navigate(['claim/bulkpfdeposit'], { skipLocationChange: true });
    }

    showHistory() {
        this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
    }
    okClick() {
        this.successModal.hide();
    }

    getAgentList() {
        this.dataService
            .getAgentList(0)
            .subscribe((data: any) => {
                this.agentList = data;
            });
    }

    agentChange(eve) {
        this.receiptBook.agentCode = eve;
    }
    validateReceiptBookName() {
        this.bookNameValid = false;
        this.dataService
            .validateReceiptBookName(this.receiptBook.bookNo)
            .subscribe((data: any) => {
                if (data)
                    this.bookNameValid = true;;
            });
    }
    issueDateChange(eve) {
        debugger;
        this.todayMinIssueDateReq = false;
        if (eve != undefined) {
            var issueDate = new Date(eve);
            var timeDiff = (this.maxDate.getTime() - issueDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 0) {
                this.todayMinIssueDateReq = true;
            }
        }
    }
}
