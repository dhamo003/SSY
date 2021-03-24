import { async, TestBed } from '@angular/core/testing';
import { RejectedFundRequestListComponent } from './rejected-fund-request-list.component';
describe('RejectedFundRequestListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RejectedFundRequestListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RejectedFundRequestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rejected-fund-request-list.component.spec.js.map