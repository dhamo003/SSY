import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTrackComponent } from './claim-track.component';

describe('ClaimTrackComponent', () => {
  let component: ClaimTrackComponent;
  let fixture: ComponentFixture<ClaimTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
