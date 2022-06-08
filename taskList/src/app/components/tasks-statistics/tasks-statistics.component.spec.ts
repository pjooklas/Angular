import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksStatisticsComponent } from './tasks-statistics.component';

describe('TasksStatisticsComponent', () => {
  let component: TasksStatisticsComponent;
  let fixture: ComponentFixture<TasksStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
