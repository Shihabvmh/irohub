import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBigAndroidViewModuleComponent } from './admin-live-big-android-view-module.component';

describe('AdminLiveBigAndroidViewModuleComponent', () => {
  let component: AdminLiveBigAndroidViewModuleComponent;
  let fixture: ComponentFixture<AdminLiveBigAndroidViewModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBigAndroidViewModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBigAndroidViewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
