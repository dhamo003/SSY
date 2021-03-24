import { async, TestBed } from '@angular/core/testing';
import { ApprovedFundRequestListComponent } from './approved-fund-request-list.component';
describe('ApprovedFundRequestListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ApprovedFundRequestListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ApprovedFundRequestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=approved-fund-request-list.component.spec.js.map