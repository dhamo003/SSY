import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfconfiglandingComponent } from './pfconfiglanding.component';

describe('PfconfiglandingComponent', () => {
  let component: PfconfiglandingComponent;
  let fixture: ComponentFixture<PfconfiglandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfconfiglandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfconfiglandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
