import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadangosNewComponent } from './padangos-new.component';

describe('PadangosNewComponent', () => {
  let component: PadangosNewComponent;
  let fixture: ComponentFixture<PadangosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadangosNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadangosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
