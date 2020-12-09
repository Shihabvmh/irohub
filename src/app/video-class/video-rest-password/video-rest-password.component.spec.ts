import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRestPasswordComponent } from './video-rest-password.component';

describe('VideoRestPasswordComponent', () => {
  let component: VideoRestPasswordComponent;
  let fixture: ComponentFixture<VideoRestPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoRestPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
