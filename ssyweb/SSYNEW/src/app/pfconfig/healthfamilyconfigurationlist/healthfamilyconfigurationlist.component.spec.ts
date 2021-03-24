import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthfamilyconfigurationlistComponent } from './healthfamilyconfigurationlist.component';

describe('HealthfamilyconfigurationlistComponent', () => {
  let component: HealthfamilyconfigurationlistComponent;
  let fixture: ComponentFixture<HealthfamilyconfigurationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthfamilyconfigurationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthfamilyconfigurationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
