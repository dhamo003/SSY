import { async, TestBed } from '@angular/core/testing';
import { AdjustemententryformComponent } from './adjustemententryform.component';
describe('AdjustemententryformComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdjustemententryformComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdjustemententryformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=adjustemententryform.component.spec.js.map