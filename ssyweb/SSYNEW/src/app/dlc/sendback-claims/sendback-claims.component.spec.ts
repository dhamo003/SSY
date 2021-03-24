import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendbackClaimsComponent } from './sendback-claims.component';

describe('SendbackClaimsComponent', () => {
  let component: SendbackClaimsComponent;
  let fixture: ComponentFixture<SendbackClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendbackClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendbackClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
