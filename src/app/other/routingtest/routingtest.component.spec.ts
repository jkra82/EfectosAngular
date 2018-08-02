import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingtestComponent } from './routingtest.component';

describe('RoutingtestComponent', () => {
  let component: RoutingtestComponent;
  let fixture: ComponentFixture<RoutingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
