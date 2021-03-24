import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReleasedListComponent } from './payment-released-list.component';

describe('PaymentReleasedListComponent', () => {
  let component: PaymentReleasedListComponent;
  let fixture: ComponentFixture<PaymentReleasedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReleasedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReleasedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
