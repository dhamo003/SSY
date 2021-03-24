import { async, TestBed } from '@angular/core/testing';
import { SubmittedlegacypfdetailsComponent } from './submittedlegacypfdetails.component';
describe('SubmittedlegacypfdetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SubmittedlegacypfdetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SubmittedlegacypfdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=submittedlegacypfdetails.component.spec.js.map