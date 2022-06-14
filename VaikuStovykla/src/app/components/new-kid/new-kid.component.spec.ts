import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKidComponent } from './new-kid.component';

describe('NewKidComponent', () => {
  let component: NewKidComponent;
  let fixture: ComponentFixture<NewKidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewKidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
