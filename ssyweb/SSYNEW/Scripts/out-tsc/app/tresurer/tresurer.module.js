var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule, AccordionModule } from "ngx-bootstrap";
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { RouterModule } from "@angular/router";
import { TresurerlandingComponent } from "./tresurerlanding.component";
import { PaymentReleaseComponent } from "./payment-release/payment-release.component";
import { TresurerDataService } from "./services/tresurer-data.service";
import { FundReleaseListComponent } from './fund-release-list/fund-release-list.component';
import { FundReleaseComponent } from './fund-release/fund-release.component';
import { PaymentProcessedListComponent } from './payment-processed-list/payment-processed-list.component';
import { PendingFundReleaseListComponent } from './pending-fund-release-list/pending-fund-release-list.component';
import { PaymentReleasedListComponent } from './payment-released-list/payment-released-list.component';
import { ReviewpaymentreleaseComponent } from './reviewpaymentrelease/reviewpaymentrelease.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
;
import { ReviewFundReleaseExpensesComponent } from './review-fund-release-expenses/review-fund-release-expenses.component';
var routes = [
    {
        path: '',
        component: TresurerlandingComponent,
        children: [
            { path: '', redirectTo: 'paymentrelease', pathMatch: 'full' },
            { path: 'paymentrelease', component: PaymentReleaseComponent },
            { path: 'fundreleaselist', component: FundReleaseListComponent },
            { path: 'fundrelease', component: FundReleaseComponent },
            { path: 'paymentprocessedlist', component: PaymentProcessedListComponent },
            { path: 'pendingfundreleaselist', component: PendingFundReleaseListComponent },
            { path: 'paymentreleasedlist', component: PaymentReleasedListComponent },
            { path: 'reviewpaymentrelease', component: ReviewpaymentreleaseComponent },
            { path: 'reviewfundreleaseexpenses', component: ReviewFundReleaseExpensesComponent }
        ]
    },
];
var TresurerModule = /** @class */ (function () {
    function TresurerModule() {
    }
    TresurerModule = __decorate([
        NgModule({
            imports: [
                CommonModule, FormsModule, ReactiveFormsModule, ModalModule, AccordionModule, DataTableModule, NgbModule,
                RouterModule.forChild(routes)
            ],
            providers: [TresurerDataService],
            declarations: [TresurerlandingComponent, PaymentReleaseComponent, FundReleaseListComponent, GrdFilterPipe, FundReleaseComponent, PaymentProcessedListComponent, PendingFundReleaseListComponent, PaymentReleasedListComponent, ReviewpaymentreleaseComponent, ReviewFundReleaseExpensesComponent],
        })
    ], TresurerModule);
    return TresurerModule;
}());
export { TresurerModule };
//# sourceMappingURL=tresurer.module.js.map