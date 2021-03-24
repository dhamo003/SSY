import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFundRequestComponent } from './review-fund-request.component';

describe('ReviewFundRequestComponent', () => {
  let component: ReviewFundRequestComponent;
  let fixture: ComponentFixture<ReviewFundRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFundRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFundRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
