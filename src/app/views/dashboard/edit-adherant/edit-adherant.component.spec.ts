import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditAdherantComponent } from "./edit-adherant.component";

describe("EditAdherantComponent", () => {
  let component: EditAdherantComponent;
  let fixture: ComponentFixture<EditAdherantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAdherantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
