import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedFundRequestListComponent } from './approved-fund-request-list.component';

describe('ApprovedFundRequestListComponent', () => {
  let component: ApprovedFundRequestListComponent;
  let fixture: ComponentFixture<ApprovedFundRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedFundRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedFundRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
