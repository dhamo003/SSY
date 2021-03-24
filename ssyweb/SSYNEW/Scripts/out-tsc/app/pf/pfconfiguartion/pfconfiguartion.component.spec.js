import { async, TestBed } from '@angular/core/testing';
import { PfconfiguartionComponent } from './pfconfiguartion.component';
describe('PfconfiguartionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfconfiguartionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfconfiguartionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfconfiguartion.component.spec.js.map