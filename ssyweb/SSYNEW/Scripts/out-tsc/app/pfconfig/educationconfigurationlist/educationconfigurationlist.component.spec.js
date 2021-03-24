import { async, TestBed } from '@angular/core/testing';
import { EducationconfigurationlistComponent } from './educationconfigurationlist.component';
describe('EducationconfigurationlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EducationconfigurationlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EducationconfigurationlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=educationconfigurationlist.component.spec.js.map