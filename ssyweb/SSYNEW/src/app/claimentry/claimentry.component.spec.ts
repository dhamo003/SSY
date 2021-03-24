import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimentryComponent } from './claimentry.component';

describe('ClaimentryComponent', () => {
  let component: ClaimentryComponent;
  let fixture: ComponentFixture<ClaimentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
