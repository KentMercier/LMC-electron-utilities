import { TestBed } from '@angular/core/testing';

import { LocalCrudServiceService } from './local-crud-service.service';

describe('LocalCrudServiceService', () => {
  let service: LocalCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
