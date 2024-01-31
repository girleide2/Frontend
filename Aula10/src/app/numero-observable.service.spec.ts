import { TestBed } from '@angular/core/testing';

import { NumeroObservableService } from './numero-observable.service';

describe('NumeroObservableService', () => {
  let service: NumeroObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
