import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveBigPhpComponent } from './admin-live-big-php.component';

describe('AdminLiveBigPhpComponent', () => {
  let component: AdminLiveBigPhpComponent;
  let fixture: ComponentFixture<AdminLiveBigPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveBigPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveBigPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
