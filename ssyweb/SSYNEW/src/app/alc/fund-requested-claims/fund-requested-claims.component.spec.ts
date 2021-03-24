import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestedClaimsComponent } from './fund-requested-claims.component';

describe('FundRequestedClaimsComponent', () => {
  let component: FundRequestedClaimsComponent;
  let fixture: ComponentFixture<FundRequestedClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRequestedClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRequestedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
