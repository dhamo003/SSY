import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripsresponseComponent } from './gripsresponse.component';

describe('GripsresponseComponent', () => {
  let component: GripsresponseComponent;
  let fixture: ComponentFixture<GripsresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripsresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripsresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
