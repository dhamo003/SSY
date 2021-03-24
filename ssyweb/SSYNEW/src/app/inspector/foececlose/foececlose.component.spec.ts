import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoececloseComponent } from './foececlose.component';

describe('FoececloseComponent', () => {
  let component: FoececloseComponent;
  let fixture: ComponentFixture<FoececloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoececloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoececloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
