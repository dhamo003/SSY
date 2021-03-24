import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimviewComponent } from './claimview.component';

describe('ClaimviewComponent', () => {
  let component: ClaimviewComponent;
  let fixture: ComponentFixture<ClaimviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
