import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralRejectClaimsComponent } from './referral-reject-claims.component';

describe('ReferralRejectClaimsComponent', () => {
  let component: ReferralRejectClaimsComponent;
  let fixture: ComponentFixture<ReferralRejectClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralRejectClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralRejectClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
