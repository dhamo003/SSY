import { async, TestBed } from '@angular/core/testing';
import { InspectorLegacyClaimEntryComponent } from './inspector-legacy-claim-entry.component';
describe('InspectorLegacyClaimEntryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InspectorLegacyClaimEntryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InspectorLegacyClaimEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inspector-legacy-claim-entry.component.spec.js.map