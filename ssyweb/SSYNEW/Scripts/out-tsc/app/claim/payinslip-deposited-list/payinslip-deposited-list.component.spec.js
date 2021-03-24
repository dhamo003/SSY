import { async, TestBed } from '@angular/core/testing';
import { PayInSlipDepositedListComponent } from './payinslip-deposited-list.component';
describe('PayInSlipDepositedListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PayInSlipDepositedListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PayInSlipDepositedListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payinslip-deposited-list.component.spec.js.map