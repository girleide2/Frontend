import { TestBed } from '@angular/core/testing';

import { ConsertaCanoService } from './conserta-cano.service';

describe('ConsertaCanoService', () => {
  let service: ConsertaCanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsertaCanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
