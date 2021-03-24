import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TresurerlandingComponent } from './tresurerlanding.component';

describe('AlclandingComponent', () => {
    let component: TresurerlandingComponent;
    let fixture: ComponentFixture<TresurerlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TresurerlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(TresurerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
