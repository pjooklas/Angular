import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngridientasComponent } from './add-ingridientas.component';

describe('AddIngridientasComponent', () => {
  let component: AddIngridientasComponent;
  let fixture: ComponentFixture<AddIngridientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngridientasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngridientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
