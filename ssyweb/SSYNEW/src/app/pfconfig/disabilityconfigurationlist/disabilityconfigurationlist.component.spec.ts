import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityconfigurationlistComponent } from './disabilityconfigurationlist.component';

describe('DisabilityconfigurationlistComponent', () => {
  let component: DisabilityconfigurationlistComponent;
  let fixture: ComponentFixture<DisabilityconfigurationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityconfigurationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityconfigurationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
