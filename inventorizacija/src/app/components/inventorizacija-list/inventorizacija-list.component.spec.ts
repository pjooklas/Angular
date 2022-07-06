import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorizacijaListComponent } from './inventorizacija-list.component';

describe('InventorizacijaListComponent', () => {
  let component: InventorizacijaListComponent;
  let fixture: ComponentFixture<InventorizacijaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorizacijaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorizacijaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
