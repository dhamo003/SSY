import { async, TestBed } from '@angular/core/testing';
import { PendingApprovalClaimsComponent } from './pending-approval-claims.component';
describe('PendingApprovalClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PendingApprovalClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PendingApprovalClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pending-approval-claims.component.spec.js.map