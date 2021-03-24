import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedFundRequestListComponent } from './rejected-fund-request-list.component';

describe('RejectedFundRequestListComponent', () => {
  let component: RejectedFundRequestListComponent;
  let fixture: ComponentFixture<RejectedFundRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedFundRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedFundRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
