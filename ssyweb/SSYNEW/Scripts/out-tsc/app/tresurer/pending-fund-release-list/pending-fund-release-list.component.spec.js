import { async, TestBed } from '@angular/core/testing';
import { PendingFundReleaseListComponent } from './pending-fund-release-list.component';
describe('PendingFundReleaseListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PendingFundReleaseListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PendingFundReleaseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pending-fund-release-list.component.spec.js.map