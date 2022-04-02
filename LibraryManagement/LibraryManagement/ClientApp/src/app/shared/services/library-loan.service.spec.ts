import { TestBed } from '@angular/core/testing';

import { LibraryLoanService } from './library-loan.service';

describe('LibraryLoanService', () => {
  let service: LibraryLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
