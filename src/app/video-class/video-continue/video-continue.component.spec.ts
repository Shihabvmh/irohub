import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContinueComponent } from './video-continue.component';

describe('VideoContinueComponent', () => {
  let component: VideoContinueComponent;
  let fixture: ComponentFixture<VideoContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
