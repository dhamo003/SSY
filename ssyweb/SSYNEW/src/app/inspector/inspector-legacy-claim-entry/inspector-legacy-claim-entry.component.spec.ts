import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorLegacyClaimEntryComponent } from './inspector-legacy-claim-entry.component';

describe('InspectorLegacyClaimEntryComponent', () => {
  let component: InspectorLegacyClaimEntryComponent;
  let fixture: ComponentFixture<InspectorLegacyClaimEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorLegacyClaimEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorLegacyClaimEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
