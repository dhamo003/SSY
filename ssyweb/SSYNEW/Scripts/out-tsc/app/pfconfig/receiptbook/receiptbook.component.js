var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { PFConfigDataService } from '../services/pfconfig-data.services';
import { UserService } from '../../UserService';
import { UserType } from '../../claim/pipes/constnts.model';
var ReceiptbookComponent = /** @class */ (function () {
    function ReceiptbookComponent(router, route, dataService, userService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.dateValid = true;
        this.receiptNoFromValid = true;
        this.receiptNoToValid = true;
        this.agentCodeValid = true;
        this.bookNoValid = true;
        this.receiptBook = {};
        this.mode = "add";
        this.agentList = [];
        this.bookNameValid = false;
        this.todayMinIssueDateReq = false;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ReceiptbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.getAgentList();
        this.route$ = this.route.params.subscribe(function (params) {
            _this.id = params["id"] != null ? Number(params["id"]) : 0;
            _this.mode = params["mode"] == undefined ? 'add' : params["mode"];
            if (_this.mode == "edit" || _this.mode == "view")
                _this.getReceiptBookDetails(_this.id);
        });
        //console.log(this.receiptBook);
    };
    ReceiptbookComponent.prototype.getReceiptBookDetails = function (id) {
        var _this = this;
        this.dataService
            .getReceiptBookDetails(id)
            .subscribe(function (data) {
            debugger;
            _this.receiptBook = data;
            _this.receiptBook.date = new Date(_this.receiptBook.date);
            //this.receiptBook.receiptNoFrom = new Date(this.receiptBook.receiptNoFrom);
            //this.receiptBook.receiptNoTo = new Date(this.receiptBook.receiptNoTo);
        });
    };
    ReceiptbookComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReceiptbookComponent.prototype.saveReceiptBook = function (ReceiptBookModel) {
        var _this = this;
        debugger;
        if (this.validateConfiguration()) {
            if (this.mode != "view") {
                this.receiptBook.createdBy = this.userService.user.deptUserid;
                if (confirm("Are you sure to proceed ")) {
                    this.dataService
                        .saveReceiptBook(this.receiptBook)
                        .then(function (data) {
                        if (data) {
                            _this.successMessage = "The Receipt Book issuance is completed successfully";
                            _this.successModal.show();
                        }
                        else {
                            _this.successMessage = "The Receipt Book issuance is not completed";
                            _this.successModal.show();
                        }
                    });
                }
            }
        }
    };
    ReceiptbookComponent.prototype.validateConfiguration = function () {
        debugger;
        var isValid = true;
        if (this.receiptBook.date == undefined) {
            this.dateValid = isValid = false;
        }
        if (this.receiptBook.agentCode == undefined) {
            this.agentCodeValid = isValid = false;
        }
        if (this.receiptBook.bookNo == undefined) {
            this.bookNoValid = isValid = false;
        }
        if (this.receiptBook.receiptNoFrom == undefined) {
            this.receiptNoFromValid = isValid = false;
        }
        if (this.receiptBook.receiptNoTo == undefined) {
            this.receiptNoToValid = isValid = false;
        }
        if (this.bookNameValid == true) {
            isValid = false;
        }
        if (this.todayMinIssueDateReq == true) {
            isValid = false;
        }
        return isValid;
    };
    ReceiptbookComponent.prototype.clearContribution = function () {
        if (this.mode == "add") {
            this.receiptBook = {};
        }
    };
    ReceiptbookComponent.prototype.cancelClick = function () {
        if (this.userService.user.userTpe == UserType.SuperAdmin.toString())
            this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
        else
            this.router.navigate(['claim/bulkpfdeposit'], { skipLocationChange: true });
    };
    ReceiptbookComponent.prototype.showHistory = function () {
        this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
    };
    ReceiptbookComponent.prototype.okClick = function () {
        this.successModal.hide();
    };
    ReceiptbookComponent.prototype.getAgentList = function () {
        var _this = this;
        this.dataService
            .getAgentList(0)
            .subscribe(function (data) {
            _this.agentList = data;
        });
    };
    ReceiptbookComponent.prototype.agentChange = function (eve) {
        this.receiptBook.agentCode = eve;
    };
    ReceiptbookComponent.prototype.validateReceiptBookName = function () {
        var _this = this;
        this.bookNameValid = false;
        this.dataService
            .validateReceiptBookName(this.receiptBook.bookNo)
            .subscribe(function (data) {
            if (data)
                _this.bookNameValid = true;
            ;
        });
    };
    ReceiptbookComponent.prototype.issueDateChange = function (eve) {
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
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReceiptbookComponent.prototype, "successModal", void 0);
    ReceiptbookComponent = __decorate([
        Component({
            selector: 'app-receiptbook',
            templateUrl: './receiptbook.component.html',
            styleUrls: ['./receiptbook.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, PFConfigDataService, UserService])
    ], ReceiptbookComponent);
    return ReceiptbookComponent;
}());
export { ReceiptbookComponent };
//# sourceMappingURL=receiptbook.component.js.map