import { async, TestBed } from '@angular/core/testing';
import { ReceiptbookComponent } from './receiptbook.component';
describe('ReceiptbookComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReceiptbookComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReceiptbookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=receiptbook.component.spec.js.map