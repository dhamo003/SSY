import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfundrequestexpensesComponent } from './reviewfundrequestexpenses.component';

describe('ReviewfundrequestexpensesComponent', () => {
  let component: ReviewfundrequestexpensesComponent;
  let fixture: ComponentFixture<ReviewfundrequestexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfundrequestexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewfundrequestexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
