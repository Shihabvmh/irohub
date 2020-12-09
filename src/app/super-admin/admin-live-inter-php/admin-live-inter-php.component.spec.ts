import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveInterPhpComponent } from './admin-live-inter-php.component';

describe('AdminLiveInterPhpComponent', () => {
  let component: AdminLiveInterPhpComponent;
  let fixture: ComponentFixture<AdminLiveInterPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveInterPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveInterPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
