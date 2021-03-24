import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalClaimsComponent } from './approval-claims.component';

describe('ApprovalClaimsComponent', () => {
  let component: ApprovalClaimsComponent;
  let fixture: ComponentFixture<ApprovalClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
