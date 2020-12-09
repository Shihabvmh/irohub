import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBigPythonComponent } from './admin-live-big-python.component';

describe('AdminLiveBigPythonComponent', () => {
  let component: AdminLiveBigPythonComponent;
  let fixture: ComponentFixture<AdminLiveBigPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBigPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBigPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
