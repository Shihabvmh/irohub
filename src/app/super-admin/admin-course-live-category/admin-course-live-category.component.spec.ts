import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseLiveCategoryComponent } from './admin-course-live-category.component';

describe('AdminCourseLiveCategoryComponent', () => {
  let component: AdminCourseLiveCategoryComponent;
  let fixture: ComponentFixture<AdminCourseLiveCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseLiveCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseLiveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
