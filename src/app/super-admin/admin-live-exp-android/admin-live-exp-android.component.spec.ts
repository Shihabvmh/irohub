import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpAndroidComponent } from './admin-live-exp-android.component';

describe('AdminLiveExpAndroidComponent', () => {
  let component: AdminLiveExpAndroidComponent;
  let fixture: ComponentFixture<AdminLiveExpAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
