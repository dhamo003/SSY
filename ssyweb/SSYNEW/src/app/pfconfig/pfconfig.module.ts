import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule, AccordionModule, BsDatepickerModule } from "ngx-bootstrap";
import { DataTableModule } from "angular-6-datatable";
import { GrdFilterPipe } from '../claim/pipes/grd-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from "@angular/router";
import { PfconfiglandingComponent } from './pfconfiglanding.component';
import { PFConfigDataService } from "./services/pfconfig-data.services";
import { PfintertconfigComponent } from './pfintertconfig/pfintertconfig.component';
import { PfinterestconfiglistComponent } from './pfinterestconfiglist/pfinterestconfiglist.component';
import { PfcommissionconfigComponent } from './pfcommissionconfig/pfcommissionconfig.component';
import { PfcommissionconfiglistComponent } from './pfcommissionconfiglist/pfcommissionconfiglist.component';
import { PfconfigurationComponent } from './pfconfiguration/pfconfiguration.component';
import { PfconfigurationlistComponent } from './pfconfigurationlist/pfconfigurationlist.component';
import { ReceiptbookComponent } from './receiptbook/receiptbook.component';
import { ReceiptbooklistComponent } from './receiptbooklist/receiptbooklist.component';
import { EducationconfigurationComponent } from './educationconfiguration/educationconfiguration.component';
import { EducationconfigurationlistComponent } from './educationconfigurationlist/educationconfigurationlist.component';
import { HealthfamilyconfigurationlistComponent } from './healthfamilyconfigurationlist/healthfamilyconfigurationlist.component';
import { HealthfamilyconfigurationComponent } from './healthfamilyconfiguration/healthfamilyconfiguration.component';
import { DisabilityconfigurationlistComponent } from './disabilityconfigurationlist/disabilityconfigurationlist.component';
import { DisabilityconfigurationComponent } from './disabilityconfiguration/disabilityconfiguration.component';
import { DeathconfigurationComponent } from './deathconfiguration/deathconfiguration.component';
import { DeathconfigurationlistComponent } from './deathconfigurationlist/deathconfigurationlist.component';
import { BenefitconfigurationComponent } from './benefitconfiguration/benefitconfiguration.component';

const routes: Routes = [
    {
        path: '',
        component: PfconfiglandingComponent,
        children: [
            { path: '', redirectTo: 'pfinterestconfig', pathMatch: 'full' },
            { path: 'pfinterestconfig', component: PfintertconfigComponent },
            { path: 'pfinterestconfiglist', component: PfinterestconfiglistComponent },
            { path: 'pfcommissionconfig', component: PfcommissionconfigComponent },
            { path: 'pfcommissionconfiglist', component: PfcommissionconfiglistComponent },
            { path: 'pfconfiguration', component: PfconfigurationComponent },
            { path: 'pfconfigurationlist', component: PfconfigurationlistComponent },
            { path: 'receiptbook', component: ReceiptbookComponent },
            { path: 'receiptbooklist', component: ReceiptbooklistComponent },
            { path: 'educationconfiguration', component: EducationconfigurationComponent },
            { path: 'educationconfigurationlist', component: EducationconfigurationlistComponent },
            { path: 'healthfamilyconfiguration', component: HealthfamilyconfigurationComponent },
            { path: 'healthfamilyconfigurationlist', component: HealthfamilyconfigurationlistComponent },
            { path: 'disabilityconfiguration', component: DisabilityconfigurationComponent },
            { path: 'disabilityconfigurationlist', component: DisabilityconfigurationlistComponent },
            { path: 'deathconfiguration', component: DeathconfigurationComponent },
            { path: 'deathconfigurationlist', component: DeathconfigurationlistComponent },
            { path: 'benefitconfiguration', component: BenefitconfigurationComponent },
        ]
    },
];
@NgModule({

    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, BsDatepickerModule, ModalModule.forRoot(), NgbModule,
        RouterModule.forChild(routes)
    ],
    providers: [PFConfigDataService],
    declarations: [PfconfiglandingComponent, PfintertconfigComponent, PfinterestconfiglistComponent, PfcommissionconfigComponent, PfcommissionconfiglistComponent, PfconfigurationComponent, PfconfigurationlistComponent, ReceiptbookComponent, ReceiptbooklistComponent, EducationconfigurationComponent, EducationconfigurationlistComponent, HealthfamilyconfigurationlistComponent, HealthfamilyconfigurationComponent, DisabilityconfigurationlistComponent, DisabilityconfigurationComponent, DeathconfigurationComponent, DeathconfigurationlistComponent, BenefitconfigurationComponent]
})
export class PfconfigModule { }
