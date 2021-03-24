import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReleaseComponent } from './payment-release.component';

describe('PaymentReleaseComponent', () => {
  let component: PaymentReleaseComponent;
  let fixture: ComponentFixture<PaymentReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
