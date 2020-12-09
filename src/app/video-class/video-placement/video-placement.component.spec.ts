import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlacementComponent } from './video-placement.component';

describe('VideoPlacementComponent', () => {
  let component: VideoPlacementComponent;
  let fixture: ComponentFixture<VideoPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
