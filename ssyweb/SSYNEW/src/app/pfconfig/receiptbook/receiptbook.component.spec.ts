import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptbookComponent } from './receiptbook.component';

describe('ReceiptbookComponent', () => {
  let component: ReceiptbookComponent;
  let fixture: ComponentFixture<ReceiptbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
