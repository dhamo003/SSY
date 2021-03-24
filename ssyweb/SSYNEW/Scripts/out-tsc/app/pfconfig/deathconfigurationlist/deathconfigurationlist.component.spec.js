import { async, TestBed } from '@angular/core/testing';
import { DeathconfigurationlistComponent } from './deathconfigurationlist.component';
describe('DeathconfigurationlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeathconfigurationlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeathconfigurationlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deathconfigurationlist.component.spec.js.map