import { TestBed, inject } from '@angular/core/testing';

import { UnidadesService } from './unidades.service';

describe('UnidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnidadesService]
    });
  });

  it('should ...', inject([UnidadesService], (service: UnidadesService) => {
    expect(service).toBeTruthy();
  }));
});
