import { async, TestBed } from '@angular/core/testing';
import { PfconfigurationlistComponent } from './pfconfigurationlist.component';
describe('PfconfigurationlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfconfigurationlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfconfigurationlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfconfigurationlist.component.spec.js.map