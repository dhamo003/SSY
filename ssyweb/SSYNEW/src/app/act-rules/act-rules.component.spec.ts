import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActRulesComponent } from './act-rules.component';

describe('ActRulesComponent', () => {
  let component: ActRulesComponent;
  let fixture: ComponentFixture<ActRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
