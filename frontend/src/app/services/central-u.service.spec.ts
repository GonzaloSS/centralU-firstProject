import { TestBed } from '@angular/core/testing';

import { CentralUService } from './central-u.service';

describe('CentralUService', () => {
  let service: CentralUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
