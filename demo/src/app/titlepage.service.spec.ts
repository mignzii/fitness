import { TestBed } from '@angular/core/testing';

import { TitlepageService } from './titlepage.service';

describe('TitlepageService', () => {
  let service: TitlepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
