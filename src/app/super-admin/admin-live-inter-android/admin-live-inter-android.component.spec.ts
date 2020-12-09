import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterAndroidComponent } from './admin-live-inter-android.component';

describe('AdminLiveInterAndroidComponent', () => {
  let component: AdminLiveInterAndroidComponent;
  let fixture: ComponentFixture<AdminLiveInterAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
