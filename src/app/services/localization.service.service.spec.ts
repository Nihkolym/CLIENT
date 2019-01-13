import { TestBed } from '@angular/core/testing';

import { Localization.ServiceService } from './localization.service.service';

describe('Localization.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Localization.ServiceService = TestBed.get(Localization.ServiceService);
    expect(service).toBeTruthy();
  });
});
