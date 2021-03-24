import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpaymentreleaseComponent } from './reviewpaymentrelease.component';

describe('ReviewpaymentreleaseComponent', () => {
  let component: ReviewpaymentreleaseComponent;
  let fixture: ComponentFixture<ReviewpaymentreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewpaymentreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewpaymentreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
