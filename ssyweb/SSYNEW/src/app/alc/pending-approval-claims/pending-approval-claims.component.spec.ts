import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalClaimsComponent } from './pending-approval-claims.component';

describe('PendingApprovalClaimsComponent', () => {
  let component: PendingApprovalClaimsComponent;
  let fixture: ComponentFixture<PendingApprovalClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApprovalClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApprovalClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
