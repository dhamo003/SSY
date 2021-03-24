import { async, TestBed } from '@angular/core/testing';
import { BulkpfdepositComponent } from './bulkpfdeposit.component';
describe('BulkpfdepositComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BulkpfdepositComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BulkpfdepositComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bulkpfdeposit.component.spec.js.map