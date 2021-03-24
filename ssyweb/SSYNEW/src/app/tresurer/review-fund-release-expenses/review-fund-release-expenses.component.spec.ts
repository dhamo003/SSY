import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFundReleaseExpensesComponent } from './review-fund-release-expenses.component';

describe('ReviewFundReleaseExpensesComponent', () => {
  let component: ReviewFundReleaseExpensesComponent;
  let fixture: ComponentFixture<ReviewFundReleaseExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFundReleaseExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFundReleaseExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
