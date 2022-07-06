import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorizacijaNewComponent } from './inventorizacija-new.component';

describe('InventorizacijaNewComponent', () => {
  let component: InventorizacijaNewComponent;
  let fixture: ComponentFixture<InventorizacijaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorizacijaNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorizacijaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
