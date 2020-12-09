import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBeginnerCoursesComponent } from './admin-live-beginner-courses.component';

describe('AdminLiveBeginnerCoursesComponent', () => {
  let component: AdminLiveBeginnerCoursesComponent;
  let fixture: ComponentFixture<AdminLiveBeginnerCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBeginnerCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBeginnerCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
