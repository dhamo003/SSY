import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule, AccordionModule } from "ngx-bootstrap";
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { RouterModule, Routes } from "@angular/router";
import { FundRequestListComponent } from './fund-request-list/fund-request-list.component';
import { CeolandingComponent } from './ceolanding.component';
import { CeoDataService } from "./services/ceo-data.service";
import { FundRequestComponent } from './fund-request/fund-request.component';
import { SendbackFundRequestListComponent } from './sendback-fund-request-list/sendback-fund-request-list.component';
import { ApprovedFundRequestListComponent } from './approved-fund-request-list/approved-fund-request-list.component';
import { RejectedFundRequestListComponent } from './rejected-fund-request-list/rejected-fund-request-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ReviewclaimsComponent } from './reviewclaims/reviewclaims.component';
import { ClaimviewdataComponent } from './claimviewdata/claimviewdata.component';
import { TimetrackComponent } from './timetrack/timetrack.component';
import { ReviewFundRequestExpensesComponent } from './review-fund-request-expenses/review-fund-request-expenses.component';
import { UtilizationcertificateComponent } from './utilizationcertificate/utilizationcertificate.component';
import { UtilizationcertificatelistComponent } from './utilizationcertificatelist/utilizationcertificatelist.component';
import { BsDatepickerModule } from "ngx-bootstrap";
const routes: Routes = [
    {
        path: '',
        component: CeolandingComponent,
        children: [
            { path: '', redirectTo: 'fundrequestlist', pathMatch: 'full' },
            { path: 'fundrequestlist', component: FundRequestListComponent },
            { path: 'fundrequest', component: FundRequestComponent },
            { path: 'sendbackfundrequestlist', component: SendbackFundRequestListComponent },
            { path: 'approvedfundrequestlist', component: ApprovedFundRequestListComponent },
            { path: 'rejectedfundrequestlist', component: RejectedFundRequestListComponent },
            { path: 'claimstatus', component: ClaimStatusComponent },
            { path: 'reviewclaims', component: ReviewclaimsComponent },
            { path: 'claimtrack', component: TimetrackComponent },
            { path: 'reviewfundrequestexpenses', component: ReviewFundRequestExpensesComponent },
            { path: 'utilizationcertificatelist', component: UtilizationcertificatelistComponent },
            { path: 'utilizationcertificate', component: UtilizationcertificateComponent },
        ]
    },
];
@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, ModalModule, AccordionModule, DataTableModule, NgbModule,
        RouterModule.forChild(routes), BsDatepickerModule.forRoot()
    ],
    providers: [CeoDataService],
    declarations: [FundRequestListComponent, CeolandingComponent, GrdFilterPipe, FundRequestComponent, SendbackFundRequestListComponent, ApprovedFundRequestListComponent, RejectedFundRequestListComponent, ClaimStatusComponent, ReviewclaimsComponent, ClaimviewdataComponent, TimetrackComponent, ReviewFundRequestExpensesComponent, UtilizationcertificateComponent, UtilizationcertificatelistComponent]
})
export class CeoModule { }
