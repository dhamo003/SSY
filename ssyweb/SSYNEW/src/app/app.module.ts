import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './UserService';
import { UserUrl } from './models/userurl.model';
import { ClaimEntryNomineeComponent } from './claim-entry-nominee/claim-entry-nominee.component';
import { ApiService } from './services/api.service';
import { DropdownListService } from './services/dropdown-list.service';
import { ToasterService } from './services/toaster.service';
import { SpinnerService } from './services/spinner.service';
import { GlobalErrorHandlingService } from './services/global-error-handling.service';
import { AddAuthorizationHeader } from './services/add-authorization-header.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, AccordionModule, AlertModule, BsDatepickerModule } from "ngx-bootstrap";
import { ClaimNomineeDataService } from './services/claim-data.service';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NumberOnlyDirective } from './number.directive';
import { AtomSpinnerModule } from 'angular-epic-spinners'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ExcelService } from './services/excel.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { FundRequestListComponent } from './ceo/fund-request-list/fund-request-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrackClaimNomineeComponent } from './track-claim-nominee/track-claim-nominee.component';
import { PfconfiguartionComponent } from './pf/pfconfiguartion/pfconfiguartion.component';



@NgModule({
    declarations: [
        AppComponent,
        ClaimEntryNomineeComponent,
        NumberOnlyDirective,
        TrackClaimNomineeComponent,
        PfconfiguartionComponent//,
        //FundRequestListComponent
        
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgDatepickerModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        AtomSpinnerModule,
        NgbModule,
        PdfViewerModule,
        RouterModule.forRoot([
            {
                path: 'claim',
                loadChildren: './claim/claim.module#ClaimModule',
            },
            {
                path: 'inspector',
                loadChildren: './inspector/inspector.module#InspectorModule',
            },
            {
                path: 'dlc',
                loadChildren: './dlc/dlc.module#DlcModule',
            },
            {
                path: 'alc',
                loadChildren: './alc/alc.module#AlcModule',
            },
            {
                path: 'tresurer',
                loadChildren: './tresurer/tresurer.module#TresurerModule',
            },
            {
                path: 'ceo',
                loadChildren: './ceo/ceo.module#CeoModule',
            },
            {
                path: 'nominee', component: ClaimEntryNomineeComponent
            },
            {
                path: 'trackclaimnominee', component: TrackClaimNomineeComponent
            },
            {
                path: 'pfconfig',
                loadChildren: './pfconfig/pfconfig.module#PfconfigModule',
            },
        ])
    ],
    providers: [UserService, UserUrl, ApiService, ExcelService,
       ClaimNomineeDataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddAuthorizationHeader,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
