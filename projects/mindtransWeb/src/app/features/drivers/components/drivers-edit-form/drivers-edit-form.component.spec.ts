import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversEditFormComponent } from './drivers-edit-form.component';

describe('DriversEditFormComponent', () => {
  let component: DriversEditFormComponent;
  let fixture: ComponentFixture<DriversEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
