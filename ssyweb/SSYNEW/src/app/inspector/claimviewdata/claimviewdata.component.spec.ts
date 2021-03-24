import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimviewdataComponent } from './claimviewdata.component';

describe('ClaimviewdataComponent', () => {
  let component: ClaimviewdataComponent;
  let fixture: ComponentFixture<ClaimviewdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimviewdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
