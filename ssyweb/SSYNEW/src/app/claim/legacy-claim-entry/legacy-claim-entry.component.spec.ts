import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyClaimEntryComponent } from './legacy-claim-entry.component';

describe('LegacyClaimEntryComponent', () => {
  let component: LegacyClaimEntryComponent;
  let fixture: ComponentFixture<LegacyClaimEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyClaimEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyClaimEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
