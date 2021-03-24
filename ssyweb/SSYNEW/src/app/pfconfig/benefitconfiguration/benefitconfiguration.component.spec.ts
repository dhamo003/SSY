import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitconfigurationComponent } from './benefitconfiguration.component';

describe('BenefitconfigurationComponent', () => {
  let component: BenefitconfigurationComponent;
  let fixture: ComponentFixture<BenefitconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
