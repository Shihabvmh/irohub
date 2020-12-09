import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHeaderSidebarComponent } from './video-header-sidebar.component';

describe('VideoHeaderSidebarComponent', () => {
  let component: VideoHeaderSidebarComponent;
  let fixture: ComponentFixture<VideoHeaderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoHeaderSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHeaderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
