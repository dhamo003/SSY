import { async, TestBed } from '@angular/core/testing';
import { LegacypfdetailsComponent } from './legacypfdetails.component';
describe('LegacypfdetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LegacypfdetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LegacypfdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=legacypfdetails.component.spec.js.map