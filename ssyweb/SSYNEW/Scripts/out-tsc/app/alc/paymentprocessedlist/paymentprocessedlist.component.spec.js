import { async, TestBed } from '@angular/core/testing';
import { PaymentprocessedlistComponent } from './paymentprocessedlist.component';
describe('PaymentprocessedlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PaymentprocessedlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PaymentprocessedlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=paymentprocessedlist.component.spec.js.map