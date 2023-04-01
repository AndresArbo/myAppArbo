import { TestBed } from '@angular/core/testing';

import { ServicioArboService } from './servicio-arbo.service';

describe('ServicioArboService', () => {
  let service: ServicioArboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioArboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
