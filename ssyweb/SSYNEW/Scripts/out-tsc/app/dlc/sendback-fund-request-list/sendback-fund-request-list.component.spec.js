import { async, TestBed } from '@angular/core/testing';
import { SendbackFundRequestListComponent } from './sendback-fund-request-list.component';
describe('SendbackFundRequestListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SendbackFundRequestListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SendbackFundRequestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sendback-fund-request-list.component.spec.js.map