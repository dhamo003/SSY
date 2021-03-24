import { async, TestBed } from '@angular/core/testing';
import { ForwardFundRequestListComponent } from './forward-fund-request-list.component';
describe('ForwardFundRequestListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ForwardFundRequestListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ForwardFundRequestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forward-fund-request-list.component.spec.js.map