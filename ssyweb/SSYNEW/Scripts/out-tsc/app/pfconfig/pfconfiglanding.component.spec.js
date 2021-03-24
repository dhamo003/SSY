import { async, TestBed } from '@angular/core/testing';
import { PfconfiglandingComponent } from './pfconfiglanding.component';
describe('PfconfiglandingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfconfiglandingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfconfiglandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfconfiglanding.component.spec.js.map