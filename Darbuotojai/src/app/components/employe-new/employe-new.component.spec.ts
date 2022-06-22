import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeNewComponent } from './employe-new.component';

describe('EmployeNewComponent', () => {
  let component: EmployeNewComponent;
  let fixture: ComponentFixture<EmployeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
