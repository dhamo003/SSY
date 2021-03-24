import { async, TestBed } from '@angular/core/testing';
import { DisabilityconfigurationComponent } from './disabilityconfiguration.component';
describe('DisabilityconfigurationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DisabilityconfigurationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DisabilityconfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=disabilityconfiguration.component.spec.js.map