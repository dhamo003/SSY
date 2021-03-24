import { async, TestBed } from '@angular/core/testing';
import { ReferralApprovalClaimsComponent } from './referral-approval-claims.component';
describe('ReferralApprovalClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReferralApprovalClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReferralApprovalClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=referral-approval-claims.component.spec.js.map