import { TestBed } from '@angular/core/testing';

import { ApiRecipesService } from './api-recipes.service';

describe('ApiRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRecipesService = TestBed.get(ApiRecipesService);
    expect(service).toBeTruthy();
  });
});
