import { TestBed } from '@angular/core/testing';

import { LoginHandlerServiceService } from './login-handler-service.service';

describe('LoginHandlerServiceService', () => {
  let service: LoginHandlerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
