import { async, TestBed } from '@angular/core/testing';
import { PfinterestconfiglistComponent } from './pfinterestconfiglist.component';
describe('PfinterestconfiglistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PfinterestconfiglistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PfinterestconfiglistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pfinterestconfiglist.component.spec.js.map