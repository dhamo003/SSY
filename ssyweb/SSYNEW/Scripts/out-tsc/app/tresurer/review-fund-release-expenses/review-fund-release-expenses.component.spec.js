import { async, TestBed } from '@angular/core/testing';
import { ReviewFundReleaseExpensesComponent } from './review-fund-release-expenses.component';
describe('ReviewFundReleaseExpensesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewFundReleaseExpensesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewFundReleaseExpensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=review-fund-release-expenses.component.spec.js.map