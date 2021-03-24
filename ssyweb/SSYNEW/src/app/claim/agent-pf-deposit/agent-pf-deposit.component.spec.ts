import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPfDepositComponent } from './agent-pf-deposit.component';

describe('AgentPfDepositComponent', () => {
  let component: AgentPfDepositComponent;
  let fixture: ComponentFixture<AgentPfDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPfDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPfDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
