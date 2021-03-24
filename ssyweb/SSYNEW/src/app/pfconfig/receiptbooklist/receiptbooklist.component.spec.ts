import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptbooklistComponent } from './receiptbooklist.component';

describe('ReceiptbooklistComponent', () => {
  let component: ReceiptbooklistComponent;
  let fixture: ComponentFixture<ReceiptbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
