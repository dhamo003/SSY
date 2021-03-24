import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationcertificatelistComponent } from './utilizationcertificatelist.component';

describe('UtilizationcertificatelistComponent', () => {
  let component: UtilizationcertificatelistComponent;
  let fixture: ComponentFixture<UtilizationcertificatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizationcertificatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizationcertificatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
