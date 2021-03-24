import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentprocessedlistComponent } from './paymentprocessedlist.component';

describe('PaymentprocessedlistComponent', () => {
  let component: PaymentprocessedlistComponent;
  let fixture: ComponentFixture<PaymentprocessedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentprocessedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentprocessedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
