import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterJavaComponent } from './admin-live-inter-java.component';

describe('AdminLiveInterJavaComponent', () => {
  let component: AdminLiveInterJavaComponent;
  let fixture: ComponentFixture<AdminLiveInterJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
