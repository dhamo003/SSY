import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { ClaimLandingComponent } from './claimlanding.component';
import { ClaimEntryComponent } from './claim-entry/claim-entry.component';
import { Routes, RouterModule } from '@angular/router';
import { ClaimViewComponent } from './claim-view/claim-view.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimDataService } from './services/claim-data.service';
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { ClaimTrackComponent } from './claim-track/claim-track.component';
import { ModalModule, AccordionModule, BsDatepickerModule } from "ngx-bootstrap";
import { AgentClaimsComponent } from './agent-claims/agent-claims.component';
import { AgentClaimEntryComponent } from './agent-claim-entry/agent-claim-entry.component';
import { NumberOnlyDirective } from './directives/number.directive';
import { ClaimDraftComponent } from './claim-draft/claim-draft.component';
import { AgentDraftComponent } from './agent-draft/agent-draft.component';
import { ClaimsReferralComponent } from './claims-referral/claims-referral.component';
import { AgentReferrallComponent } from './agent-referrall/agent-referrall.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LegacyListComponent } from './legacy-list/legacy-list.component';
import { LegacyClaimEntryComponent } from './legacy-claim-entry/legacy-claim-entry.component';
import { ClaimviewdataComponent } from './claimviewdata/claimviewdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentPfCollectionFormComponent } from './agent-pf-collection-form/agent-pf-collection-form.component';
import { AgentPfDepositComponent } from './agent-pf-deposit/agent-pf-deposit.component';
import { AgentPfDepositedListComponent } from './agent-pf-deposited-list/agent-pf-deposited-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BulkpfdepositComponent } from './bulkpfdeposit/bulkpfdeposit.component';
import { BulkpfdepositlistComponent } from './bulkpfdepositlist/bulkpfdepositlist.component';
import { BulkpfdepositcollectionListComponent } from './bulkpfdepositcollection-list/bulkpfdepositcollection-list.component';
import { PayInSlipDepositedListComponent } from './payinslip-deposited-list/payinslip-deposited-list.component';
import { BenPfDetailsComponent } from './ben-pf-details/ben-pf-details.component';
import { LegacypfdetailsComponent } from './legacypfdetails/legacypfdetails.component';
import { SubmittedlegacypfdetailsComponent } from './submittedlegacypfdetails/submittedlegacypfdetails.component';
import { AdjustemententryformComponent } from './adjustemententryform/adjustemententryform.component';
import { GripsresponseComponent } from './gripsresponse/gripsresponse.component';


const routes: Routes = [
    {
        path: '',
        component: ClaimLandingComponent,
        children: [
            { path: '', redirectTo: 'Entry', pathMatch: 'full' },
            { path: 'Entry', component: ClaimEntryComponent },
            { path: 'ClaimTrack', component: ClaimTrackComponent },
            { path: 'ClaimView', component: ClaimViewComponent },
            { path: 'ClaimView/:claimId/:claimType/:tranctionId', component: ClaimViewComponent },
            { path: 'Entry/:claimId/:claimType', component: ClaimEntryComponent },
            { path: 'Claims', component: ClaimsComponent },
            { path: 'agentclaims', component: AgentClaimsComponent },
            { path: 'agentclaimentry', component: AgentClaimEntryComponent },
            { path: 'agentclaimentry/:claimId/:claimType', component: AgentClaimEntryComponent },
            { path: 'claimdraft', component: ClaimDraftComponent },
            { path: 'agentdraft', component: AgentDraftComponent },
            { path: 'agentreferral', component: AgentReferrallComponent },
            { path: 'referralclaims', component: ClaimsReferralComponent },
            { path: 'legacylist', component: LegacyListComponent },
            { path: 'legacyclaimentry', component: LegacyClaimEntryComponent },
            { path: 'PfCollectionForm', component: AgentPfCollectionFormComponent },
            { path: 'PfDeposit', component: AgentPfDepositComponent },
            { path: 'PfDepositedList', component: AgentPfDepositedListComponent },
           // { path: 'bulkpfdeposit', component: BulkpfdepositComponent },
            { path: 'bulkpfdepositlist', component: BulkpfdepositlistComponent },
            { path: 'bulkpfdepositcollectionlist', component: BulkpfdepositcollectionListComponent },
            { path: 'pfPayInSlipDepositedList', component: PayInSlipDepositedListComponent },
            { path: 'benpfdetails', component: BenPfDetailsComponent },
            { path: 'bulkpfdeposit', component: LegacypfdetailsComponent },
            { path: 'submittedlegacypfdetails', component: SubmittedlegacypfdetailsComponent },
            { path: 'adjustemententryform', component: AdjustemententryformComponent },
            { path: 'gripsresponse', component: GripsresponseComponent }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, PdfViewerModule, DataTableModule, ModalModule.forRoot(), AccordionModule.forRoot(), BsDatepickerModule.forRoot(), RouterModule.forChild(routes), NgbModule, NgMultiSelectDropDownModule.forRoot()
  ],
    declarations: [ClaimEntryComponent, NumberOnlyDirective, AgentClaimEntryComponent, AgentClaimsComponent, ClaimViewComponent, ClaimLandingComponent, ClaimsComponent, GrdFilterPipe, ClaimTrackComponent, ClaimDraftComponent, AgentDraftComponent, ClaimsReferralComponent, AgentReferrallComponent, LegacyListComponent, LegacyClaimEntryComponent, ClaimviewdataComponent, AgentPfCollectionFormComponent, AgentPfDepositComponent, AgentPfDepositedListComponent, BulkpfdepositComponent, BulkpfdepositlistComponent, BulkpfdepositcollectionListComponent, PayInSlipDepositedListComponent, BenPfDetailsComponent, LegacypfdetailsComponent, SubmittedlegacypfdetailsComponent, AdjustemententryformComponent, GripsresponseComponent],
    providers: [ClaimDataService]
})
export class ClaimModule { }
