import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewclaimsComponent } from './reviewclaims.component';

describe('ReviewclaimsComponent', () => {
  let component: ReviewclaimsComponent;
  let fixture: ComponentFixture<ReviewclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
