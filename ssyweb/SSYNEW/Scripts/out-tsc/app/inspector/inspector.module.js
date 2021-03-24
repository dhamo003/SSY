var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectorlandingComponent } from './inspectorlanding.component';
import { PendingApprovalClaimsComponent } from './pending-approval-claims/pending-approval-claims.component';
import { ApprovalClaimsComponent } from './approval-claims/approval-claims.component';
import { RejectClaimsComponent } from './reject-claims/reject-claims.component';
import { SendbackClaimsComponent } from './sendback-claims/sendback-claims.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InspectorDataService } from './services/inspector-data.service';
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { ReviewclaimsComponent } from './reviewclaims/reviewclaims.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FoececloseComponent } from './foececlose/foececlose.component';
import { TimetrackComponent } from './timetrack/timetrack.component';
import { ClaimviewdataComponent } from './claimviewdata/claimviewdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ModalModule, AccordionModule, BsDatepickerModule } from "ngx-bootstrap";
import { InspectorLegacyListComponent } from './inspector-legacy-list/inspector-legacy-list.component';
import { InspectorLegacyClaimEntryComponent } from './inspector-legacy-claim-entry/inspector-legacy-claim-entry.component';
import { SearchStudentComponent } from './search-student/search-student.component';
var routes = [
    {
        path: '',
        component: InspectorlandingComponent,
        children: [
            { path: '', redirectTo: 'pendingapprovalclaims', pathMatch: 'full' },
            { path: 'pendingapprovalclaims', component: PendingApprovalClaimsComponent },
            { path: 'approvalclaims', component: ApprovalClaimsComponent },
            { path: 'rejectclaims', component: RejectClaimsComponent },
            { path: 'sendbackclaims', component: SendbackClaimsComponent },
            { path: 'reviewclaims', component: ReviewclaimsComponent },
            { path: 'forcecloseclaims', component: FoececloseComponent },
            { path: 'forcecloseclaims', component: FoececloseComponent },
            { path: 'claimtrack', component: TimetrackComponent },
            { path: 'claimstatus', component: ClaimStatusComponent },
            { path: 'reviewclaims/:claimId/:/claimType/:tranctionId', component: ReviewclaimsComponent },
            { path: 'inspectorlegacylist', component: InspectorLegacyListComponent },
            { path: 'inspectorlegacyclaimentry', component: InspectorLegacyClaimEntryComponent },
            { path: 'searchstudent', component: SearchStudentComponent },
        ]
    },
];
var InspectorModule = /** @class */ (function () {
    function InspectorModule() {
    }
    InspectorModule = __decorate([
        NgModule({
            imports: [
                CommonModule, FormsModule, ModalModule, AccordionModule, ReactiveFormsModule, PdfViewerModule, DataTableModule, RouterModule.forChild(routes), NgbModule, BsDatepickerModule.forRoot()
            ],
            providers: [InspectorDataService],
            declarations: [InspectorlandingComponent, GrdFilterPipe, PendingApprovalClaimsComponent, ApprovalClaimsComponent, RejectClaimsComponent, SendbackClaimsComponent, ReviewclaimsComponent, FoececloseComponent, TimetrackComponent, ClaimviewdataComponent, ClaimStatusComponent, InspectorLegacyListComponent, InspectorLegacyClaimEntryComponent, SearchStudentComponent]
        })
    ], InspectorModule);
    return InspectorModule;
}());
export { InspectorModule };
//# sourceMappingURL=inspector.module.js.map