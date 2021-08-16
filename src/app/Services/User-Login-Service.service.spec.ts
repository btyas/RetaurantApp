/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserLoginServiceService } from './User-Login-Service.service';

describe('Service: UserLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLoginServiceService]
    });
  });

  it('should ...', inject([UserLoginServiceService], (service: UserLoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
