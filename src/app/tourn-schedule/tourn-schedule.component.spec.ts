import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournScheduleComponent } from './tourn-schedule.component';

describe('TournScheduleComponent', () => {
  let component: TournScheduleComponent;
  let fixture: ComponentFixture<TournScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
