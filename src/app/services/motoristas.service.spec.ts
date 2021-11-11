import { TestBed } from '@angular/core/testing';

import { MotoristasService } from './motoristas.service';

describe('MotoristasService', () => {
  let service: MotoristasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoristasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
