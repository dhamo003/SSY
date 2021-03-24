import { async, TestBed } from '@angular/core/testing';
import { TrackClaimNomineeComponent } from './track-claim-nominee.component';
describe('TrackClaimNomineeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrackClaimNomineeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrackClaimNomineeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=track-claim-nominee.component.spec.js.map