import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptasDetailsComponent } from './receptas-details.component';

describe('ReceptasDetailsComponent', () => {
  let component: ReceptasDetailsComponent;
  let fixture: ComponentFixture<ReceptasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
