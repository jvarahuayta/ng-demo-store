import { TestBed } from '@angular/core/testing';

import { BackofficeGuardService } from './backoffice-guard.service';

describe('BackofficeGuardService', () => {
  let service: BackofficeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackofficeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
