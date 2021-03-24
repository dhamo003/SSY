import { async, TestBed } from '@angular/core/testing';
import { ClaimEntryNomineeComponent } from './claim-entry-nominee.component';
describe('ClaimEntryNomineeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClaimEntryNomineeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ClaimEntryNomineeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=claim-entry-nominee.component.spec.js.map