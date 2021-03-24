import { async, TestBed } from '@angular/core/testing';
import { ReferralRejectClaimsComponent } from './referral-reject-claims.component';
describe('ReferralRejectClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReferralRejectClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReferralRejectClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=referral-reject-claims.component.spec.js.map