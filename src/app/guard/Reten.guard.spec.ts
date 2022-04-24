import { TestBed } from '@angular/core/testing';

import { RetenGuard } from './Reten.guard';

describe('RetenGuard', () => {
  let guard: RetenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RetenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
