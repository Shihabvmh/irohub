import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpIosComponent } from './admin-live-exp-ios.component';

describe('AdminLiveExpIosComponent', () => {
  let component: AdminLiveExpIosComponent;
  let fixture: ComponentFixture<AdminLiveExpIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
