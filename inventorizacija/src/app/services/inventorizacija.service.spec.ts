import { TestBed } from '@angular/core/testing';

import { InventorizacijaService } from './inventorizacija.service';

describe('InventorizacijaService', () => {
  let service: InventorizacijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorizacijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
