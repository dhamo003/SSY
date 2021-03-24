import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddocumentsComponent } from './uploaddocuments.component';

describe('UploaddocumentsComponent', () => {
  let component: UploaddocumentsComponent;
  let fixture: ComponentFixture<UploaddocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaddocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
