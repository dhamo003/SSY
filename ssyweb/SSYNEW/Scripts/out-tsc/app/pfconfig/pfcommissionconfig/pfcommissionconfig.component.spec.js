import { async, TestBed } from '@angular/core/testing';
import { PfcommissionconfigComponent } from './pfcommissionconfig.component';
describe('PfcommissionconfigComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfcommissionconfigComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfcommissionconfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfcommissionconfig.component.spec.js.map