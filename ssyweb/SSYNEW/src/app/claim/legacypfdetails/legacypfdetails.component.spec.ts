import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacypfdetailsComponent } from './legacypfdetails.component';

describe('LegacypfdetailsComponent', () => {
  let component: LegacypfdetailsComponent;
  let fixture: ComponentFixture<LegacypfdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacypfdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacypfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
