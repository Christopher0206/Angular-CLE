import { TestBed } from '@angular/core/testing';

import { SensoresindividualService } from './sensoresindividual.service';

describe('SensoresindividualService', () => {
  let service: SensoresindividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensoresindividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
