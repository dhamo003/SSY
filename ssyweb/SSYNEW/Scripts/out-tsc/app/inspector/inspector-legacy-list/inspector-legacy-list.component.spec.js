import { async, TestBed } from '@angular/core/testing';
import { InspectorLegacyListComponent } from './inspector-legacy-list.component';
describe('InspectorLegacyListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InspectorLegacyListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InspectorLegacyListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inspector-legacy-list.component.spec.js.map