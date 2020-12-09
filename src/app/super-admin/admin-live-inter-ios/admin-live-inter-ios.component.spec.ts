import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterIosComponent } from './admin-live-inter-ios.component';

describe('AdminLiveInterIosComponent', () => {
  let component: AdminLiveInterIosComponent;
  let fixture: ComponentFixture<AdminLiveInterIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
