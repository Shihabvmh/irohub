import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFacultyComponent } from './consult-faculty.component';

describe('ConsultFacultyComponent', () => {
  let component: ConsultFacultyComponent;
  let fixture: ComponentFixture<ConsultFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
