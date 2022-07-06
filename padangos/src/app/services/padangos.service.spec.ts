import { TestBed } from '@angular/core/testing';

import { PadangosService } from './padangos.service';

describe('PadangosService', () => {
  let service: PadangosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadangosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
