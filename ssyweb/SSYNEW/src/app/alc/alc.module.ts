import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlclandingComponent } from './alclanding.component';
import { PendingApprovalClaimsComponent } from './pending-approval-claims/pending-approval-claims.component';
import { ApprovalClaimsComponent } from './approval-claims/approval-claims.component';
import { RejectClaimsComponent } from './reject-claims/reject-claims.component';
import { SendbackClaimsComponent } from './sendback-claims/sendback-claims.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AlcDataService } from './services/alc-data.service';
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { ReviewclaimsComponent } from './reviewclaims/reviewclaims.component';
import { ModalModule, AccordionModule } from "ngx-bootstrap";
import { ReferClaimsComponent } from './refer-claims/refer-claims.component';
import { ReferralReviewComponent } from './referral-review/referral-review.component';
import { ReferralRejectClaimsComponent } from './referral-reject-claims/referral-reject-claims.component';
import { ReferralApprovalClaimsComponent } from './referral-approval-claims/referral-approval-claims.component';
import { ReferralSendbackClaimsComponent } from './referral-sendback-claims/referral-sendback-claims.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PaymentProcessingComponent } from './payment-processing/payment-processing.component';
import { FundRequestComponent } from './fund-request/fund-request.component';
import { ReviewfundrequestComponent } from './reviewfundrequest/reviewfundrequest.component';
import { FundRequestedClaimsComponent } from './fund-requested-claims/fund-requested-claims.component';
import { TimetrackComponent } from './timetrack/timetrack.component';
//import { PaymentProcessedListComponent } from './payment-processed-list/payment-processed-list.component';
import { PaymentprocessedlistComponent } from './paymentprocessedlist/paymentprocessedlist.component';
import { ReviewpaymentprocessComponent } from './reviewpaymentprocess/reviewpaymentprocess.component';
import { ClaimviewdataComponent } from './claimviewdata/claimviewdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ReviewfundrequestexpensesComponent } from './reviewfundrequestexpenses/reviewfundrequestexpenses.component';
import { UtilizationcertificateComponent } from './utilizationcertificate/utilizationcertificate.component';
import { UtilizationcertificatelistComponent } from './utilizationcertificatelist/utilizationcertificatelist.component';
import { BsDatepickerModule } from "ngx-bootstrap";
import { PfinterestcalculationComponent } from './pfinterestcalculation/pfinterestcalculation.component';
import { SearchStudentComponent } from './search-student/search-student.component';
const routes: Routes = [
    {
        path: '',
        component: AlclandingComponent,
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: PendingApprovalClaimsComponent },
            { path: 'approvalclaims', component: ApprovalClaimsComponent },
            { path: 'rejectclaims', component: RejectClaimsComponent },
            { path: 'sendbackclaims', component: SendbackClaimsComponent },
            { path: 'reviewclaims', component: ReviewclaimsComponent },
            { path: 'referclaims', component: ReferClaimsComponent },
            { path: 'referralreview', component: ReferralReviewComponent },
            { path: 'referralreject', component: ReferralRejectClaimsComponent },
            { path: 'referralapproval', component: ReferralApprovalClaimsComponent },
            { path: 'referralsendback', component: ReferralSendbackClaimsComponent },
            { path: 'paymentprocessing', component: PaymentProcessingComponent },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: ReviewclaimsComponent },
            { path: 'fundrequest', component: FundRequestComponent },
            { path: 'reviewfundrequest', component: ReviewfundrequestComponent },
            { path: 'fundrequestedclaims', component: FundRequestedClaimsComponent },
            { path: 'claimtrack', component: TimetrackComponent },
            { path: 'paymentprocessedlist', component: PaymentprocessedlistComponent },
            { path: 'reviewpaymentprocess', component: ReviewpaymentprocessComponent },
            { path: 'claimstatus', component: ClaimStatusComponent },
            { path: 'reviewfundrequestexpenses', component: ReviewfundrequestexpensesComponent },
            { path: 'utilizationcertificatelist', component: UtilizationcertificatelistComponent },
            { path: 'utilizationcertificate', component: UtilizationcertificateComponent },
            { path: 'pfinterestcalculation', component: PfinterestcalculationComponent },
        ]
    },
];
@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, PdfViewerModule, ModalModule, AccordionModule, DataTableModule, RouterModule.forChild(routes), NgMultiSelectDropDownModule.forRoot(), NgbModule.forRoot(), BsDatepickerModule.forRoot()
    ],
    providers: [AlcDataService],
    declarations: [AlclandingComponent,GrdFilterPipe, PendingApprovalClaimsComponent, ApprovalClaimsComponent, RejectClaimsComponent, SendbackClaimsComponent, ReviewclaimsComponent, ReferClaimsComponent, ReferralReviewComponent, ReferralRejectClaimsComponent, ReferralApprovalClaimsComponent, ReferralSendbackClaimsComponent, PaymentProcessingComponent, FundRequestComponent, ReviewfundrequestComponent, FundRequestedClaimsComponent, TimetrackComponent, PaymentprocessedlistComponent, ReviewpaymentprocessComponent, ClaimviewdataComponent, ClaimStatusComponent, ReviewfundrequestexpensesComponent, UtilizationcertificateComponent, UtilizationcertificatelistComponent, PfinterestcalculationComponent, SearchStudentComponent]
})
export class AlcModule { }
