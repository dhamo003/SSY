import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfintertconfigComponent } from './pfintertconfig.component';

describe('PfintertconfigComponent', () => {
  let component: PfintertconfigComponent;
  let fixture: ComponentFixture<PfintertconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfintertconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfintertconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
