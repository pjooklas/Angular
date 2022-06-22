import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaujasReceptasComponent } from './naujas-receptas.component';

describe('NaujasReceptasComponent', () => {
  let component: NaujasReceptasComponent;
  let fixture: ComponentFixture<NaujasReceptasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaujasReceptasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaujasReceptasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
