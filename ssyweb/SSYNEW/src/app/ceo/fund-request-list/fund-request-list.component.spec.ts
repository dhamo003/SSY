import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestListComponent } from './fund-request-list.component';

describe('FundRequestListComponent', () => {
  let component: FundRequestListComponent;
  let fixture: ComponentFixture<FundRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
