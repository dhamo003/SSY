import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathconfigurationlistComponent } from './deathconfigurationlist.component';

describe('DeathconfigurationlistComponent', () => {
  let component: DeathconfigurationlistComponent;
  let fixture: ComponentFixture<DeathconfigurationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathconfigurationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathconfigurationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
