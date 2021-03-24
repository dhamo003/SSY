import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthfamilyconfigurationComponent } from './healthfamilyconfiguration.component';

describe('HealthfamilyconfigurationComponent', () => {
  let component: HealthfamilyconfigurationComponent;
  let fixture: ComponentFixture<HealthfamilyconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthfamilyconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthfamilyconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
