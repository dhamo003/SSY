import { async, TestBed } from '@angular/core/testing';
import { DeathconfigurationComponent } from './deathconfiguration.component';
describe('DeathconfigurationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeathconfigurationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeathconfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deathconfiguration.component.spec.js.map