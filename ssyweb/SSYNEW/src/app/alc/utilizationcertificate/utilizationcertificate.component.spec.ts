import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationcertificateComponent } from './utilizationcertificate.component';

describe('UtilizationcertificateComponent', () => {
  let component: UtilizationcertificateComponent;
  let fixture: ComponentFixture<UtilizationcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizationcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizationcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
