import { TestBed } from '@angular/core/testing';

import { Login.ResolverService } from './login.resolver.service';

describe('Login.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Login.ResolverService = TestBed.get(Login.ResolverService);
    expect(service).toBeTruthy();
  });
});
