import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDraftComponent } from './agent-draft.component';

describe('AgentDraftComponent', () => {
  let component: AgentDraftComponent;
  let fixture: ComponentFixture<AgentDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
