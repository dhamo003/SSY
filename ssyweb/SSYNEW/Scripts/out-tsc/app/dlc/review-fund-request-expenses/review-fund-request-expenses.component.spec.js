import { async, TestBed } from '@angular/core/testing';
import { ReviewFundRequestExpensesComponent } from './review-fund-request-expenses.component';
describe('ReviewFundRequestExpensesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewFundRequestExpensesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewFundRequestExpensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=review-fund-request-expenses.component.spec.js.map