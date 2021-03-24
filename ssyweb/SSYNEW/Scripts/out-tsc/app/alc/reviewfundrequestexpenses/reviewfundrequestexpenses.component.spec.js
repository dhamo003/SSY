import { async, TestBed } from '@angular/core/testing';
import { ReviewfundrequestexpensesComponent } from './reviewfundrequestexpenses.component';
describe('ReviewfundrequestexpensesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewfundrequestexpensesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewfundrequestexpensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviewfundrequestexpenses.component.spec.js.map