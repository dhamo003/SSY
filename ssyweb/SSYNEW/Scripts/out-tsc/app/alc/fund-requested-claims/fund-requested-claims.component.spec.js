import { async, TestBed } from '@angular/core/testing';
import { FundRequestedClaimsComponent } from './fund-requested-claims.component';
describe('FundRequestedClaimsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FundRequestedClaimsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FundRequestedClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fund-requested-claims.component.spec.js.map