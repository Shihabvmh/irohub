import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAttendComponent } from './quiz-attend.component';

describe('QuizAttendComponent', () => {
  let component: QuizAttendComponent;
  let fixture: ComponentFixture<QuizAttendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAttendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
