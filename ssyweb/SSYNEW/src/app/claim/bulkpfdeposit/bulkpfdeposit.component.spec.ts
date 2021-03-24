import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkpfdepositComponent } from './bulkpfdeposit.component';

describe('BulkpfdepositComponent', () => {
  let component: BulkpfdepositComponent;
  let fixture: ComponentFixture<BulkpfdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkpfdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkpfdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
