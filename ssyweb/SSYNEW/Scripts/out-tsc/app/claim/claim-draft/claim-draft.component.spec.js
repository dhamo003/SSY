import { async, TestBed } from '@angular/core/testing';
import { ClaimDraftComponent } from './claim-draft.component';
describe('ClaimDraftComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClaimDraftComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ClaimDraftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=claim-draft.component.spec.js.map