import { async, TestBed } from '@angular/core/testing';
import { BulkpfdepositlistComponent } from './bulkpfdepositlist.component';
describe('BulkpfdepositlistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BulkpfdepositlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BulkpfdepositlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bulkpfdepositlist.component.spec.js.map