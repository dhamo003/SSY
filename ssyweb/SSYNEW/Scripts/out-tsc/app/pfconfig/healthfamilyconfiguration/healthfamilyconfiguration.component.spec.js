import { async, TestBed } from '@angular/core/testing';
import { HealthfamilyconfigurationComponent } from './healthfamilyconfiguration.component';
describe('HealthfamilyconfigurationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HealthfamilyconfigurationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HealthfamilyconfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=healthfamilyconfiguration.component.spec.js.map