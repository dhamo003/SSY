import { async, TestBed } from '@angular/core/testing';
import { ReviewpaymentprocessComponent } from './reviewpaymentprocess.component';
describe('ReviewpaymentprocessComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewpaymentprocessComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewpaymentprocessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviewpaymentprocess.component.spec.js.map