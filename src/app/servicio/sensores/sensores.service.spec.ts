import { TestBed } from '@angular/core/testing';

import { SensorService } from './sensores.service';

describe('SensorService', () => {
  let service: SensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
