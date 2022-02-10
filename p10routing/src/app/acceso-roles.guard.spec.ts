import { TestBed } from '@angular/core/testing';

import { AccesoRolesGuard } from './acceso-roles.guard';

describe('AccesoRolesGuard', () => {
  let guard: AccesoRolesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesoRolesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
