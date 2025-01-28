import { TestBed } from '@angular/core/testing';

import { AngularStorageService } from './angular-storage.service';

describe('AngularStorageService', () => {
  let service: AngularStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
