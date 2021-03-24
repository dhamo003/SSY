import { async, TestBed } from '@angular/core/testing';
import { HealthfamilyconfigurationlistComponent } from './healthfamilyconfigurationlist.component';
describe('HealthfamilyconfigurationlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HealthfamilyconfigurationlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HealthfamilyconfigurationlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=healthfamilyconfigurationlist.component.spec.js.map