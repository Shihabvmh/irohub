import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessedIdeasComponent } from './admin-processed-ideas.component';

describe('AdminProcessedIdeasComponent', () => {
  let component: AdminProcessedIdeasComponent;
  let fixture: ComponentFixture<AdminProcessedIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProcessedIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProcessedIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
