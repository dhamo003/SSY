import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferClaimsComponent } from './refer-claims.component';

describe('ReferClaimsComponent', () => {
  let component: ReferClaimsComponent;
  let fixture: ComponentFixture<ReferClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
