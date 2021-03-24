import { async, TestBed } from '@angular/core/testing';
import { UtilizationcertificatelistComponent } from './utilizationcertificatelist.component';
describe('UtilizationcertificatelistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UtilizationcertificatelistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UtilizationcertificatelistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=utilizationcertificatelist.component.spec.js.map