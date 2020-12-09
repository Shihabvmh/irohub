import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpPythonComponent } from './admin-live-exp-python.component';

describe('AdminLiveExpPythonComponent', () => {
  let component: AdminLiveExpPythonComponent;
  let fixture: ComponentFixture<AdminLiveExpPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
