import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptaiListComponent } from './receptai-list.component';

describe('ReceptaiListComponent', () => {
  let component: ReceptaiListComponent;
  let fixture: ComponentFixture<ReceptaiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptaiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
