import {TestBed} from '@angular/core/testing';

import {LocalStorageBookService} from './local-storage-book.service';

describe('LocalStorageBookService', () => {
  let service: LocalStorageBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
