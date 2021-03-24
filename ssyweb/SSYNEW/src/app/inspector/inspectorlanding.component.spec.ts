import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorlandingComponent } from './inspectorlanding.component';

describe('InspectorlandingComponent', () => {
  let component: InspectorlandingComponent;
  let fixture: ComponentFixture<InspectorlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
