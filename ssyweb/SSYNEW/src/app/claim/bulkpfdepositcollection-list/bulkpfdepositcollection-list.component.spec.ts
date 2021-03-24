import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkpfdepositcollectionListComponent } from './bulkpfdepositcollection-list.component';

describe('BulkpfdepositcollectionListComponent', () => {
  let component: BulkpfdepositcollectionListComponent;
  let fixture: ComponentFixture<BulkpfdepositcollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkpfdepositcollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkpfdepositcollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
