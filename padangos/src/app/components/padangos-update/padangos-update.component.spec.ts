import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadangosUpdateComponent } from './padangos-update.component';

describe('PadangosUpdateComponent', () => {
  let component: PadangosUpdateComponent;
  let fixture: ComponentFixture<PadangosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadangosUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadangosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
