import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeItemComponent } from './employe-item.component';

describe('EmployeItemComponent', () => {
  let component: EmployeItemComponent;
  let fixture: ComponentFixture<EmployeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
