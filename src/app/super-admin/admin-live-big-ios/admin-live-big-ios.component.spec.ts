import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBigIosComponent } from './admin-live-big-ios.component';

describe('AdminLiveBigIosComponent', () => {
  let component: AdminLiveBigIosComponent;
  let fixture: ComponentFixture<AdminLiveBigIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBigIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBigIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
