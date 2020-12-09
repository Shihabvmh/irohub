import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterCoursesComponent } from './admin-live-inter-courses.component';

describe('AdminLiveInterCoursesComponent', () => {
  let component: AdminLiveInterCoursesComponent;
  let fixture: ComponentFixture<AdminLiveInterCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
