import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenPfDetailsComponent } from './ben-pf-details.component';

describe('BenPfDetailsComponent', () => {
  let component: BenPfDetailsComponent;
  let fixture: ComponentFixture<BenPfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenPfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenPfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
