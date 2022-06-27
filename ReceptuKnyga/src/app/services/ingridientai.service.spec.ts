import { TestBed } from '@angular/core/testing';

import { IngridientaiService } from './ingridientai.service';

describe('IngridientaiService', () => {
  let service: IngridientaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngridientaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
