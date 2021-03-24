import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpaymentprocessComponent } from './reviewpaymentprocess.component';

describe('ReviewpaymentprocessComponent', () => {
  let component: ReviewpaymentprocessComponent;
  let fixture: ComponentFixture<ReviewpaymentprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewpaymentprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewpaymentprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
