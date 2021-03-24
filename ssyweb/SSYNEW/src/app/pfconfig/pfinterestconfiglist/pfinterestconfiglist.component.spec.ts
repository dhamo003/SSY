import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfinterestconfiglistComponent } from './pfinterestconfiglist.component';

describe('PfinterestconfiglistComponent', () => {
  let component: PfinterestconfiglistComponent;
  let fixture: ComponentFixture<PfinterestconfiglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfinterestconfiglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfinterestconfiglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
