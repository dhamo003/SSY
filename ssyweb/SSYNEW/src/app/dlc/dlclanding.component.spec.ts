import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlclandingComponent } from './dlclanding.component';

describe('DlclandingComponent', () => {
  let component: DlclandingComponent;
  let fixture: ComponentFixture<DlclandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlclandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlclandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
