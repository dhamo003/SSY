import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendbackClaimsComponent } from './sendback-claims/sendback-claims.component';
import { ApprovalClaimsComponent } from './approval-claims/approval-claims.component';
import { RejectClaimsComponent } from './reject-claims/reject-claims.component';
import { PendingApprovalClaimsComponent } from './pending-approval-claims/pending-approval-claims.component';
import { DlclandingComponent } from './dlclanding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DlcDataService } from './services/dlc-data.service';
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { ReviewclaimsComponent } from './reviewclaims/reviewclaims.component';
import { ModalModule, AccordionModule } from "ngx-bootstrap";
import { ReferClaimsComponent } from './refer-claims/refer-claims.component';
import { ReferralReviewComponent } from './referral-review/referral-review.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FundRequestedClaimsComponent } from './fund-requested-claims/fund-requested-claims.component';
import { ReviewFundRequestComponent } from './review-fund-request/review-fund-request.component';
import { SendbackFundRequestListComponent } from './sendback-fund-request-list/sendback-fund-request-list.component';
import { ForwardFundRequestListComponent } from './forward-fund-request-list/forward-fund-request-list.component';
import { TimetrackComponent } from './timetrack/timetrack.component';
import { ClaimviewdataComponent } from './claimviewdata/claimviewdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ReviewFundRequestExpensesComponent } from './review-fund-request-expenses/review-fund-request-expenses.component';
import { UtilizationcertificateComponent } from './utilizationcertificate/utilizationcertificate.component';
import { UtilizationcertificatelistComponent } from './utilizationcertificatelist/utilizationcertificatelist.component';
import { BsDatepickerModule } from "ngx-bootstrap";
import { PfinterestcalculationComponent } from './pfinterestcalculation/pfinterestcalculation.component';
const routes: Routes = [
    {
        path: '',
        component: DlclandingComponent,
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: PendingApprovalClaimsComponent },
            { path: 'approvalclaims', component: ApprovalClaimsComponent },
            { path: 'rejectclaims', component: RejectClaimsComponent },
            { path: 'sendbackclaims', component: SendbackClaimsComponent },
            { path: 'reviewclaims', component: ReviewclaimsComponent },
            { path: 'referclaims', component: ReferClaimsComponent },
            { path: 'referralreview', component: ReferralReviewComponent },
            { path: 'fundrequestedclaims', component: FundRequestedClaimsComponent },
            { path: 'reviewfundrequest', component: ReviewFundRequestComponent },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: ReviewclaimsComponent },
            { path: 'sendbackfundrequestlist', component: SendbackFundRequestListComponent },
            { path: 'forwardfundrequestlist', component: ForwardFundRequestListComponent },
            { path: 'claimtrack', component: TimetrackComponent },
            { path: 'claimstatus', component: ClaimStatusComponent },
            { path: 'reviewfundrequestexpenses', component: ReviewFundRequestExpensesComponent },
            { path: 'utilizationcertificatelist', component: UtilizationcertificatelistComponent },
            { path: 'utilizationcertificate', component: UtilizationcertificateComponent },
            { path: 'pfinterestcalculation', component: PfinterestcalculationComponent },

        ]
    },
];
@NgModule({
  imports: [
      CommonModule, FormsModule, ModalModule, AccordionModule, ReactiveFormsModule, PdfViewerModule, DataTableModule, RouterModule.forChild(routes), NgbModule, BsDatepickerModule.forRoot()
    ],
    providers: [DlcDataService],
    declarations: [SendbackClaimsComponent, GrdFilterPipe, ApprovalClaimsComponent, RejectClaimsComponent, PendingApprovalClaimsComponent, DlclandingComponent, ReviewclaimsComponent, ReferClaimsComponent, ReferralReviewComponent, FundRequestedClaimsComponent, ReviewFundRequestComponent, SendbackFundRequestListComponent, ForwardFundRequestListComponent, TimetrackComponent, ClaimviewdataComponent, ClaimStatusComponent, ReviewFundRequestExpensesComponent, UtilizationcertificateComponent, UtilizationcertificatelistComponent, PfinterestcalculationComponent]
   })
export class DlcModule { }
