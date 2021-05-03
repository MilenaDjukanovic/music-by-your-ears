import { TestBed } from '@angular/core/testing';

import { BackgroundChangeService } from './background-change.service';

describe('BackgroundChangeService', () => {
  let service: BackgroundChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
