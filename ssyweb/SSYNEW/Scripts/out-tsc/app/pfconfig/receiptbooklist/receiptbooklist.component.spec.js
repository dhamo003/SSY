import { async, TestBed } from '@angular/core/testing';
import { ReceiptbooklistComponent } from './receiptbooklist.component';
describe('ReceiptbooklistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReceiptbooklistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReceiptbooklistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=receiptbooklist.component.spec.js.map