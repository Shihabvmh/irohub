import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchManagementComponent } from './admin-batch-management.component';

describe('AdminBatchManagementComponent', () => {
  let component: AdminBatchManagementComponent;
  let fixture: ComponentFixture<AdminBatchManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
