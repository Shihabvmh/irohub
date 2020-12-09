import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementDeskComponent } from './placement-desk.component';

describe('PlacementDeskComponent', () => {
  let component: PlacementDeskComponent;
  let fixture: ComponentFixture<PlacementDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
