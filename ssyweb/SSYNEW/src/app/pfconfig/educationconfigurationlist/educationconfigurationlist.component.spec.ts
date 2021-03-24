import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationconfigurationlistComponent } from './educationconfigurationlist.component';

describe('EducationconfigurationlistComponent', () => {
  let component: EducationconfigurationlistComponent;
  let fixture: ComponentFixture<EducationconfigurationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationconfigurationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationconfigurationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
