import { TestBed } from '@angular/core/testing';

import { LogAuthService } from './log-auth.service';

describe('LogAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogAuthService = TestBed.get(LogAuthService);
    expect(service).toBeTruthy();
  });
});
