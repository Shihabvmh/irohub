import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchTimetableComponent } from './admin-batch-timetable.component';

describe('AdminBatchTimetableComponent', () => {
  let component: AdminBatchTimetableComponent;
  let fixture: ComponentFixture<AdminBatchTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
