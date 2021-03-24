import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfconfiguartionComponent } from './pfconfiguartion.component';

describe('PfconfiguartionComponent', () => {
  let component: PfconfiguartionComponent;
  let fixture: ComponentFixture<PfconfiguartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfconfiguartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfconfiguartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
