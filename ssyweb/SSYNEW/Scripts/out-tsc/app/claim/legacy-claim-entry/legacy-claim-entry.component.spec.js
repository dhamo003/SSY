import { async, TestBed } from '@angular/core/testing';
import { LegacyClaimEntryComponent } from './legacy-claim-entry.component';
describe('LegacyClaimEntryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LegacyClaimEntryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LegacyClaimEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=legacy-claim-entry.component.spec.js.map