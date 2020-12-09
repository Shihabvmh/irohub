import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpCoursesComponent } from './admin-live-exp-courses.component';

describe('AdminLiveExpCoursesComponent', () => {
  let component: AdminLiveExpCoursesComponent;
  let fixture: ComponentFixture<AdminLiveExpCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
