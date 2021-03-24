import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSendbackClaimsComponent } from './referral-sendback-claims.component';

describe('ReferralSendbackClaimsComponent', () => {
  let component: ReferralSendbackClaimsComponent;
  let fixture: ComponentFixture<ReferralSendbackClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralSendbackClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralSendbackClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
