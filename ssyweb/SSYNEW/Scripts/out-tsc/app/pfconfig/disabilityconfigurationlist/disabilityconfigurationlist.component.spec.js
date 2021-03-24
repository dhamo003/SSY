import { async, TestBed } from '@angular/core/testing';
import { DisabilityconfigurationlistComponent } from './disabilityconfigurationlist.component';
describe('DisabilityconfigurationlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DisabilityconfigurationlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DisabilityconfigurationlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=disabilityconfigurationlist.component.spec.js.map