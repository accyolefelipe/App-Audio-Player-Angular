import { TestBed } from '@angular/core/testing';

import { File2Service } from './file2.service';

describe('File2Service', () => {
  let service: File2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(File2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
