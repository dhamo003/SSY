import { async, TestBed } from '@angular/core/testing';
import { ReviewpaymentreleaseComponent } from './reviewpaymentrelease.component';
describe('ReviewpaymentreleaseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewpaymentreleaseComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewpaymentreleaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviewpaymentrelease.component.spec.js.map