import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGraduationComponent } from './admin-graduation.component';

describe('AdminGraduationComponent', () => {
  let component: AdminGraduationComponent;
  let fixture: ComponentFixture<AdminGraduationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGraduationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
