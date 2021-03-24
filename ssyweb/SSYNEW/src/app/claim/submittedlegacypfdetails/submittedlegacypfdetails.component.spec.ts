import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedlegacypfdetailsComponent } from './submittedlegacypfdetails.component';

describe('SubmittedlegacypfdetailsComponent', () => {
  let component: SubmittedlegacypfdetailsComponent;
  let fixture: ComponentFixture<SubmittedlegacypfdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedlegacypfdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedlegacypfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
