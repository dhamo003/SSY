import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationstructureComponent } from './organizationstructure.component';

describe('OrganizationstructureComponent', () => {
  let component: OrganizationstructureComponent;
  let fixture: ComponentFixture<OrganizationstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
