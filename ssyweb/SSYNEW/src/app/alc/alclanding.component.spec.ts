import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlclandingComponent } from './alclanding.component';

describe('AlclandingComponent', () => {
  let component: AlclandingComponent;
  let fixture: ComponentFixture<AlclandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlclandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlclandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
