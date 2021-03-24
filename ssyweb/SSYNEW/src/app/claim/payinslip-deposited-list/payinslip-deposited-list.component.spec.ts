import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInSlipDepositedListComponent } from './payinslip-deposited-list.component';

describe('PayInSlipDepositedListComponent', () => {
    let component: PayInSlipDepositedListComponent;
    let fixture: ComponentFixture<PayInSlipDepositedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [PayInSlipDepositedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PayInSlipDepositedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
