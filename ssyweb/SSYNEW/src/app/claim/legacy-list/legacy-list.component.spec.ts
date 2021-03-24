import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyListComponent } from './legacy-list.component';

describe('LegacyListComponent', () => {
  let component: LegacyListComponent;
  let fixture: ComponentFixture<LegacyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
