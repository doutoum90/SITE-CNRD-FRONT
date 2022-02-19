import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListAdherantComponent } from "./list-adherant.component";

describe("ListAdherantComponent", () => {
  let component: ListAdherantComponent;
  let fixture: ComponentFixture<ListAdherantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAdherantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
