import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathconfigurationComponent } from './deathconfiguration.component';

describe('DeathconfigurationComponent', () => {
  let component: DeathconfigurationComponent;
  let fixture: ComponentFixture<DeathconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
