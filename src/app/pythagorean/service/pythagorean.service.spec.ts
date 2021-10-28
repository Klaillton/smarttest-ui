import { TestBed } from '@angular/core/testing';

import { PythagoreanService } from './pythagorean.service';

describe('PythagoreanService', () => {
  let service: PythagoreanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythagoreanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
