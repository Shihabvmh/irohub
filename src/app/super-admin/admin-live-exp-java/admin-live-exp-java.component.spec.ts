import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpJavaComponent } from './admin-live-exp-java.component';

describe('AdminLiveExpJavaComponent', () => {
  let component: AdminLiveExpJavaComponent;
  let fixture: ComponentFixture<AdminLiveExpJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
