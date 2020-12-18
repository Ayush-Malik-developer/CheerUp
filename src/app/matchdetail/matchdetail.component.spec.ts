import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchdetailComponent } from './matchdetail.component';

describe('MatchdetailComponent', () => {
  let component: MatchdetailComponent;
  let fixture: ComponentFixture<MatchdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
