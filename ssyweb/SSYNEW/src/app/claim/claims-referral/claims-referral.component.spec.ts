import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsReferralComponent } from './claims-referral.component';

describe('ClaimsReferralComponent', () => {
  let component: ClaimsReferralComponent;
  let fixture: ComponentFixture<ClaimsReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
