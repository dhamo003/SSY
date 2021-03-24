import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackClaimNomineeComponent } from './track-claim-nominee.component';

describe('TrackClaimNomineeComponent', () => {
  let component: TrackClaimNomineeComponent;
  let fixture: ComponentFixture<TrackClaimNomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackClaimNomineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackClaimNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
