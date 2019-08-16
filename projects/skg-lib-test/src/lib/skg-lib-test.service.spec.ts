import { TestBed } from '@angular/core/testing';

import { SkgLibTestService } from './skg-lib-test.service';

describe('SkgLibTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkgLibTestService = TestBed.get(SkgLibTestService);
    expect(service).toBeTruthy();
  });
});
