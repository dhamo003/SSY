import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundReleaseComponent } from './fund-release.component';

describe('FundReleaseComponent', () => {
  let component: FundReleaseComponent;
  let fixture: ComponentFixture<FundReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
