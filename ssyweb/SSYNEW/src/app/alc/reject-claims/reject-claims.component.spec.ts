import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectClaimsComponent } from './reject-claims.component';

describe('RejectClaimsComponent', () => {
  let component: RejectClaimsComponent;
  let fixture: ComponentFixture<RejectClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
