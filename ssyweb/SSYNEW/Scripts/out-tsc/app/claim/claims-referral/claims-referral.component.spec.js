import { async, TestBed } from '@angular/core/testing';
import { ClaimsReferralComponent } from './claims-referral.component';
describe('ClaimsReferralComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClaimsReferralComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ClaimsReferralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=claims-referral.component.spec.js.map