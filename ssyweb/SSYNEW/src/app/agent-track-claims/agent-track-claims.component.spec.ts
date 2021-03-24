import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTrackClaimsComponent } from './agent-track-claims.component';

describe('AgentTrackClaimsComponent', () => {
  let component: AgentTrackClaimsComponent;
  let fixture: ComponentFixture<AgentTrackClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentTrackClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTrackClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
