import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestComponent } from './fund-request.component';

describe('FundRequestComponent', () => {
  let component: FundRequestComponent;
  let fixture: ComponentFixture<FundRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
