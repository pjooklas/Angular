import { TestBed } from '@angular/core/testing';

import { ReceptaiServiceService } from './receptai-service.service';

describe('ReceptaiServiceService', () => {
  let service: ReceptaiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptaiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
