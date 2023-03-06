import { TestBed } from '@angular/core/testing';

import { VgorganizerService } from './vgorganizer.service';

describe('VgorganizerService', () => {
  let service: VgorganizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VgorganizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
