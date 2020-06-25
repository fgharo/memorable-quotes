import { TestBed } from '@angular/core/testing';

import { DroppyService } from './droppy.service';

describe('DroppyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroppyService = TestBed.get(DroppyService);
    expect(service).toBeTruthy();
  });
});
