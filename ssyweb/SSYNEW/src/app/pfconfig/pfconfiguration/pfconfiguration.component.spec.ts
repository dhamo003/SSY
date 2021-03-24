import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfconfigurationComponent } from './pfconfiguration.component';

describe('PfconfigurationComponent', () => {
  let component: PfconfigurationComponent;
  let fixture: ComponentFixture<PfconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
