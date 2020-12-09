import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterPythonComponent } from './admin-live-inter-python.component';

describe('AdminLiveInterPythonComponent', () => {
  let component: AdminLiveInterPythonComponent;
  let fixture: ComponentFixture<AdminLiveInterPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
