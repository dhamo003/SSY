import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimEntryNomineeComponent } from './claim-entry-nominee.component';

describe('ClaimEntryNomineeComponent', () => {
  let component: ClaimEntryNomineeComponent;
  let fixture: ComponentFixture<ClaimEntryNomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimEntryNomineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimEntryNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
