import { TestBed } from '@angular/core/testing';

import { FirebaseCrudService } from './firebase-crud.service';

describe('FirebaseCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseCrudService = TestBed.get(FirebaseCrudService);
    expect(service).toBeTruthy();
  });
});
