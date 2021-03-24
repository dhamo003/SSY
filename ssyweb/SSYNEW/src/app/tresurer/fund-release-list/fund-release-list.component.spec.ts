import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundReleaseListComponent } from './fund-release-list.component';

describe('FundReleaseListComponent', () => {
  let component: FundReleaseListComponent;
  let fixture: ComponentFixture<FundReleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundReleaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
