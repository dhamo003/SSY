import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDraftComponent } from './claim-draft.component';

describe('ClaimDraftComponent', () => {
  let component: ClaimDraftComponent;
  let fixture: ComponentFixture<ClaimDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
