import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPackUpgradeComponent } from './video-pack-upgrade.component';

describe('VideoPackUpgradeComponent', () => {
  let component: VideoPackUpgradeComponent;
  let fixture: ComponentFixture<VideoPackUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPackUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPackUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
