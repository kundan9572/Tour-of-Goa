import { TestBed } from '@angular/core/testing';

import { GoaServiceService } from './goa-service.service';

describe('GoaServiceService', () => {
  let service: GoaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
