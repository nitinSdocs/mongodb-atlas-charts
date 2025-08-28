import { TestBed } from '@angular/core/testing';

import { JwtCreationService } from './jwt-creation.service';

describe('JwtCreationService', () => {
  let service: JwtCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
