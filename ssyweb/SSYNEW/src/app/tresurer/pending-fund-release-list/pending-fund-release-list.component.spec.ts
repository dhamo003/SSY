import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFundReleaseListComponent } from './pending-fund-release-list.component';

describe('PendingFundReleaseListComponent', () => {
  let component: PendingFundReleaseListComponent;
  let fixture: ComponentFixture<PendingFundReleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingFundReleaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFundReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
