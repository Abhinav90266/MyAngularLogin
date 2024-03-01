import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dashguardGuard } from './dashguard.guard';

describe('dashguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dashguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
