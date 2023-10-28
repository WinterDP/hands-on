import { TestBed } from '@angular/core/testing';

import { EntryInfinityScrollService } from './entry-infinity-scroll.service';

describe('EntryInfinityScrollService', () => {
  let service: EntryInfinityScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryInfinityScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
