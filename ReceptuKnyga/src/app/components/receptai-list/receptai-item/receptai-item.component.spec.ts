import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptaiItemComponent } from './receptai-item.component';

describe('ReceptaiItemComponent', () => {
  let component: ReceptaiItemComponent;
  let fixture: ComponentFixture<ReceptaiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptaiItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptaiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
