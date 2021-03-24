import { async, TestBed } from '@angular/core/testing';
import { UploaddocumentsComponent } from './uploaddocuments.component';
describe('UploaddocumentsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UploaddocumentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UploaddocumentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=uploaddocuments.component.spec.js.map