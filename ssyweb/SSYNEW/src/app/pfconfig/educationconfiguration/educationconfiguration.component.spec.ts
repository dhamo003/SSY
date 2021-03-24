import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationconfigurationComponent } from './educationconfiguration.component';

describe('EducationconfigurationComponent', () => {
  let component: EducationconfigurationComponent;
  let fixture: ComponentFixture<EducationconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
