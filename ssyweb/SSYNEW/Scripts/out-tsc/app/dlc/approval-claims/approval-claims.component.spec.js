import { async, TestBed } from '@angular/core/testing';
import { ApprovalClaimsComponent } from './approval-claims.component';
describe('ApprovalClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ApprovalClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ApprovalClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=approval-claims.component.spec.js.map