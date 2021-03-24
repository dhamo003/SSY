import { async, TestBed } from '@angular/core/testing';
import { PfintertconfigComponent } from './pfintertconfig.component';
describe('PfintertconfigComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfintertconfigComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfintertconfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfintertconfig.component.spec.js.map