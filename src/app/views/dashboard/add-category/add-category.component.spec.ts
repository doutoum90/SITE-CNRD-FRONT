import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryomponent } from './add-category.component';

describe('AddCategoryomponent', () => {
  let component: AddCategoryomponent;
  let fixture: ComponentFixture<AddCategoryomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
