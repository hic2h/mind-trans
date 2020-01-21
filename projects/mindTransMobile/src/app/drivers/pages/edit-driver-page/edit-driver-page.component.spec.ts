import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditDriverPageComponent } from "./edit-driver-page.component";

describe("EditDriverPageComponent", () => {
  let component: EditDriverPageComponent;
  let fixture: ComponentFixture<EditDriverPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditDriverPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
