/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceiveChefNameService } from './Receive-Chef-Name.service';

describe('Service: ReceiveChefName', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiveChefNameService]
    });
  });

  it('should ...', inject([ReceiveChefNameService], (service: ReceiveChefNameService) => {
    expect(service).toBeTruthy();
  }));
});
