import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadangosListComponent } from './padangos-list.component';

describe('PadangosListComponent', () => {
  let component: PadangosListComponent;
  let fixture: ComponentFixture<PadangosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadangosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadangosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
