import { TestBed } from '@angular/core/testing';

import { ListFligthService } from './list-fligth.service';

describe('ListFligthService', () => {
  let service: ListFligthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFligthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
