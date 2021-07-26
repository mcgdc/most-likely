import { TestBed } from '@angular/core/testing';

import { MostLikelyQsService } from './most-likely-qs.service';

describe('MostLikelyQsService', () => {
  let service: MostLikelyQsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostLikelyQsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
