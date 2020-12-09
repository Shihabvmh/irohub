import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiveExpPhpComponent } from './admin-live-exp-php.component';

describe('AdminLiveExpPhpComponent', () => {
  let component: AdminLiveExpPhpComponent;
  let fixture: ComponentFixture<AdminLiveExpPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLiveExpPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiveExpPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
