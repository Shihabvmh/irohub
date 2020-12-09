import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayVideoComponent } from './video-play-video.component';

describe('VideoPlayVideoComponent', () => {
  let component: VideoPlayVideoComponent;
  let fixture: ComponentFixture<VideoPlayVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
