import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFundRequestExpensesComponent } from './review-fund-request-expenses.component';

describe('ReviewFundRequestExpensesComponent', () => {
  let component: ReviewFundRequestExpensesComponent;
  let fixture: ComponentFixture<ReviewFundRequestExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFundRequestExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFundRequestExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
