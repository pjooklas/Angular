import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LietausRezervuarasComponent } from './lietaus-rezervuaras.component';

describe('LietausRezervuarasComponent', () => {
  let component: LietausRezervuarasComponent;
  let fixture: ComponentFixture<LietausRezervuarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LietausRezervuarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LietausRezervuarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
