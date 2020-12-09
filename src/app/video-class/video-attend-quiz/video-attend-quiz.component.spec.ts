import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAttendQuizComponent } from './video-attend-quiz.component';

describe('VideoAttendQuizComponent', () => {
  let component: VideoAttendQuizComponent;
  let fixture: ComponentFixture<VideoAttendQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAttendQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAttendQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
