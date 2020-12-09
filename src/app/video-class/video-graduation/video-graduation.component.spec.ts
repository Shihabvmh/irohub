import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGraduationComponent } from './video-graduation.component';

describe('VideoGraduationComponent', () => {
  let component: VideoGraduationComponent;
  let fixture: ComponentFixture<VideoGraduationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGraduationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
