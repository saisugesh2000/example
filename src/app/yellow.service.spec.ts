import { TestBed } from '@angular/core/testing';

import { YellowService } from './yellow.service';

describe('YellowService', () => {
  let service: YellowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YellowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
