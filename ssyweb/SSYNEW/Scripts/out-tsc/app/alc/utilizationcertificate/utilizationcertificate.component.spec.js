import { async, TestBed } from '@angular/core/testing';
import { UtilizationcertificateComponent } from './utilizationcertificate.component';
describe('UtilizationcertificateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UtilizationcertificateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UtilizationcertificateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=utilizationcertificate.component.spec.js.map