import { async, TestBed } from '@angular/core/testing';
import { OrganizationstructureComponent } from './organizationstructure.component';
describe('OrganizationstructureComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OrganizationstructureComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OrganizationstructureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=organizationstructure.component.spec.js.map