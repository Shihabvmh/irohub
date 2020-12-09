import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBeginnerAndroidComponent } from './admin-live-beginner-android.component';

describe('AdminLiveBeginnerAndroidComponent', () => {
  let component: AdminLiveBeginnerAndroidComponent;
  let fixture: ComponentFixture<AdminLiveBeginnerAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBeginnerAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBeginnerAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
