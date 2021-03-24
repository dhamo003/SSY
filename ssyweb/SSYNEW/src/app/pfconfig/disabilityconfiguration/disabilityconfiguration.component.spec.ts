import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityconfigurationComponent } from './disabilityconfiguration.component';

describe('DisabilityconfigurationComponent', () => {
  let component: DisabilityconfigurationComponent;
  let fixture: ComponentFixture<DisabilityconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
