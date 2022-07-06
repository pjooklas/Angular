import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorizacijaUpdateComponent } from './inventorizacija-update.component';

describe('InventorizacijaUpdateComponent', () => {
  let component: InventorizacijaUpdateComponent;
  let fixture: ComponentFixture<InventorizacijaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorizacijaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorizacijaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
