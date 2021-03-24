import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendbackFundRequestListComponent } from './sendback-fund-request-list.component';

describe('SendbackFundRequestListComponent', () => {
  let component: SendbackFundRequestListComponent;
  let fixture: ComponentFixture<SendbackFundRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendbackFundRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendbackFundRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
