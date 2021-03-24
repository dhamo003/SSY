import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPfCollectionFormComponent } from './agent-pf-collection-form.component';

describe('AgentPfCollectionFormComponent', () => {
  let component: AgentPfCollectionFormComponent;
  let fixture: ComponentFixture<AgentPfCollectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPfCollectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPfCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
