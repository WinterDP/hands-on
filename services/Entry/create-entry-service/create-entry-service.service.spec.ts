import { TestBed } from '@angular/core/testing';

import { CreateEntryServiceService } from './create-entry-service.service';

describe('CreateEntryServiceService', () => {
  let service: CreateEntryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEntryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
