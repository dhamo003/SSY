import { async, TestBed } from '@angular/core/testing';
import { FundReleaseListComponent } from './fund-release-list.component';
describe('FundReleaseListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FundReleaseListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FundReleaseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fund-release-list.component.spec.js.map