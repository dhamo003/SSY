import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkpfdepositlistComponent } from './bulkpfdepositlist.component';

describe('BulkpfdepositlistComponent', () => {
  let component: BulkpfdepositlistComponent;
  let fixture: ComponentFixture<BulkpfdepositlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkpfdepositlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkpfdepositlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
