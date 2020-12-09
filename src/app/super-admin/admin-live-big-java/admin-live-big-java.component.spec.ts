import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBigJavaComponent } from './admin-live-big-java.component';

describe('AdminLiveBigJavaComponent', () => {
  let component: AdminLiveBigJavaComponent;
  let fixture: ComponentFixture<AdminLiveBigJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBigJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBigJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
