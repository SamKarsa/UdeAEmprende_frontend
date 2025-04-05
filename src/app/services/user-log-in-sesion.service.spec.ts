import { TestBed } from '@angular/core/testing';

import { UserLogInSesionService } from './user-log-in-sesion.service';

describe('UserLogInSesionService', () => {
  let service: UserLogInSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogInSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
