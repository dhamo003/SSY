import { async, TestBed } from '@angular/core/testing';
import { PfinterestcalculationComponent } from './pfinterestcalculation.component';
describe('PfinterestcalculationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfinterestcalculationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfinterestcalculationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfinterestcalculation.component.spec.js.map