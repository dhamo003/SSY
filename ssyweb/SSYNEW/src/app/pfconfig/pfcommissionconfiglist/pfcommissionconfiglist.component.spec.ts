import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfcommissionconfiglistComponent } from './pfcommissionconfiglist.component';

describe('PfcommissionconfiglistComponent', () => {
  let component: PfcommissionconfiglistComponent;
  let fixture: ComponentFixture<PfcommissionconfiglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfcommissionconfiglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfcommissionconfiglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
