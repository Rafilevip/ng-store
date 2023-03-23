import { TestBed } from '@angular/core/testing';

import { Productyervice } from './product.service';

describe('ProductyService', () => {
  let service: Productyervice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productyervice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
