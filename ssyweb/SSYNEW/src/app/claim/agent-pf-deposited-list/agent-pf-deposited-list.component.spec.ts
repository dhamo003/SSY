import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPfDepositedListComponent } from './agent-pf-deposited-list.component';

describe('AgentPfDepositedListComponent', () => {
  let component: AgentPfDepositedListComponent;
  let fixture: ComponentFixture<AgentPfDepositedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPfDepositedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPfDepositedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
