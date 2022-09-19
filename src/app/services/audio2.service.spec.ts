import { TestBed } from '@angular/core/testing';

import { Audio2Service } from './audio2.service';

describe('Audio2Service', () => {
  let service: Audio2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Audio2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
