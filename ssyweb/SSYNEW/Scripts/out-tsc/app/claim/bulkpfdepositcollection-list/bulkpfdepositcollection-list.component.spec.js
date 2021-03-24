import { async, TestBed } from '@angular/core/testing';
import { BulkpfdepositcollectionListComponent } from './bulkpfdepositcollection-list.component';
describe('BulkpfdepositcollectionListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BulkpfdepositcollectionListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BulkpfdepositcollectionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bulkpfdepositcollection-list.component.spec.js.map