import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoActivityComponent } from './video-activity.component';

describe('VideoActivityComponent', () => {
  let component: VideoActivityComponent;
  let fixture: ComponentFixture<VideoActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
