import {TestBed} from '@angular/core/testing';

import {HttpBasedBookServiceService} from './http-based-book-service.service';

describe('HttpBasedBookServiceService', () => {
  let service: HttpBasedBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasedBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
