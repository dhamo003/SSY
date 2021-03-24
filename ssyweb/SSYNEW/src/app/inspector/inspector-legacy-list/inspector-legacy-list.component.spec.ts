import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorLegacyListComponent } from './inspector-legacy-list.component';

describe('InspectorLegacyListComponent', () => {
  let component: InspectorLegacyListComponent;
  let fixture: ComponentFixture<InspectorLegacyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorLegacyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorLegacyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
