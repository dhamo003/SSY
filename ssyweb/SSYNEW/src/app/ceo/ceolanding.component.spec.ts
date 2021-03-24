import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeolandingComponent } from './ceolanding.component';

describe('CeolandingComponent', () => {
  let component: CeolandingComponent;
  let fixture: ComponentFixture<CeolandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeolandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeolandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
