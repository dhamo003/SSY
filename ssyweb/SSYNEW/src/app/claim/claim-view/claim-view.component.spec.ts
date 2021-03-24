import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimViewComponent } from './claim-view.component';

describe('ClaimViewComponent', () => {
  let component: ClaimViewComponent;
  let fixture: ComponentFixture<ClaimViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
