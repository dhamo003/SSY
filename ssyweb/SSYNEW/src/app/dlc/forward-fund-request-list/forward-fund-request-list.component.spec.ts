import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardFundRequestListComponent } from './forward-fund-request-list.component';

describe('ForwardFundRequestListComponent', () => {
  let component: ForwardFundRequestListComponent;
  let fixture: ComponentFixture<ForwardFundRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardFundRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardFundRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
