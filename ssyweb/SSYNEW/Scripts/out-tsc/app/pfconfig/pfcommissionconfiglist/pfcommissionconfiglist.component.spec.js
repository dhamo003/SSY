import { async, TestBed } from '@angular/core/testing';
import { PfcommissionconfiglistComponent } from './pfcommissionconfiglist.component';
describe('PfcommissionconfiglistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfcommissionconfiglistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfcommissionconfiglistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfcommissionconfiglist.component.spec.js.map