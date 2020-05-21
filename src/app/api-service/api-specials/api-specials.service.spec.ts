import { TestBed } from '@angular/core/testing';

import { ApiSpecialsService } from './api-specials.service';

describe('ApiSpecialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSpecialsService = TestBed.get(ApiSpecialsService);
    expect(service).toBeTruthy();
  });
});
