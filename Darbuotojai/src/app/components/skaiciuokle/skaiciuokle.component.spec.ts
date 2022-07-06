import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaiciuokleComponent } from './skaiciuokle.component';

describe('SkaiciuokleComponent', () => {
  let component: SkaiciuokleComponent;
  let fixture: ComponentFixture<SkaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaiciuokleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tite turi buti PVM skaiciuokle', () => {
    let compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('PVM skaiciuokle');
  });

  it('10eur pvm turi buti 12.1', ()=>{
    component.kaina=10;
    expect(component.skaiciuotiPVM()).toEqual(12.1);
  })

  it('PVM atvaizduojamas, kai irasyta kaina', ()=>{
    component.kaina=10;
    let compiled=fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.vat').textContent).toContain('12.1');
  })

});
