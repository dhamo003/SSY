import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfcommissionconfigComponent } from './pfcommissionconfig.component';

describe('PfcommissionconfigComponent', () => {
  let component: PfcommissionconfigComponent;
  let fixture: ComponentFixture<PfcommissionconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfcommissionconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfcommissionconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
