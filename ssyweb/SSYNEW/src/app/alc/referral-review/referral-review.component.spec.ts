import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralReviewComponent } from './referral-review.component';

describe('ReferralReviewComponent', () => {
  let component: ReferralReviewComponent;
  let fixture: ComponentFixture<ReferralReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
