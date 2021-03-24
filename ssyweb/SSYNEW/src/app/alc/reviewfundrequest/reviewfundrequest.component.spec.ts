import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewfundrequestComponent } from './reviewfundrequest.component';

describe('ReviewfundrequestComponent', () => {
  let component: ReviewfundrequestComponent;
  let fixture: ComponentFixture<ReviewfundrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfundrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewfundrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
