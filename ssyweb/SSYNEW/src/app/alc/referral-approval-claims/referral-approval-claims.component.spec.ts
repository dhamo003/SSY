import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralApprovalClaimsComponent } from './referral-approval-claims.component';

describe('ReferralApprovalClaimsComponent', () => {
  let component: ReferralApprovalClaimsComponent;
  let fixture: ComponentFixture<ReferralApprovalClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralApprovalClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralApprovalClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
