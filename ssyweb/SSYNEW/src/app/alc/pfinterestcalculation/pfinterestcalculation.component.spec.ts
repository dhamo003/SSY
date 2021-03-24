import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfinterestcalculationComponent } from './pfinterestcalculation.component';

describe('PfinterestcalculationComponent', () => {
  let component: PfinterestcalculationComponent;
  let fixture: ComponentFixture<PfinterestcalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfinterestcalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfinterestcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
