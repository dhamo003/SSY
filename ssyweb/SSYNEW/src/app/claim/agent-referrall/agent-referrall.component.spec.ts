import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReferrallComponent } from './agent-referrall.component';

describe('AgentReferrallComponent', () => {
  let component: AgentReferrallComponent;
  let fixture: ComponentFixture<AgentReferrallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentReferrallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentReferrallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
