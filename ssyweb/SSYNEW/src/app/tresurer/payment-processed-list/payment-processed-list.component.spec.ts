import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProcessedListComponent } from './payment-processed-list.component';

describe('PaymentProcessedListComponent', () => {
  let component: PaymentProcessedListComponent;
  let fixture: ComponentFixture<PaymentProcessedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProcessedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcessedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
