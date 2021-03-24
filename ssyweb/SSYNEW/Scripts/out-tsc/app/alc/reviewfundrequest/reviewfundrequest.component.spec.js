import { async, TestBed } from '@angular/core/testing';
import { ReviewfundrequestComponent } from './reviewfundrequest.component';
describe('ReviewfundrequestComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReviewfundrequestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReviewfundrequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reviewfundrequest.component.spec.js.map