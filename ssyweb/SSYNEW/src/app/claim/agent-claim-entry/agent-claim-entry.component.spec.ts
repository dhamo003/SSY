import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentClaimEntryComponent } from './agent-claim-entry.component';

describe('AgentClaimEntryComponent', () => {
  let component: AgentClaimEntryComponent;
  let fixture: ComponentFixture<AgentClaimEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentClaimEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentClaimEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
