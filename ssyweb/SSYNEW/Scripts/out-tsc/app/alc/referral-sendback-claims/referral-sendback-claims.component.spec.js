import { async, TestBed } from '@angular/core/testing';
import { ReferralSendbackClaimsComponent } from './referral-sendback-claims.component';
describe('ReferralSendbackClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReferralSendbackClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReferralSendbackClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=referral-sendback-claims.component.spec.js.map