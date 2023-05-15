import { TestBed } from '@angular/core/testing';

import { ProductAuthGuardService } from './product-auth-guard.service';

describe('ProductAuthGuardService', () => {
  let service: ProductAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
