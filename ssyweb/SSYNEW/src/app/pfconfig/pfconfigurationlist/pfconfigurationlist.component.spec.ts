import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfconfigurationlistComponent } from './pfconfigurationlist.component';

describe('PfconfigurationlistComponent', () => {
  let component: PfconfigurationlistComponent;
  let fixture: ComponentFixture<PfconfigurationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfconfigurationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfconfigurationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
