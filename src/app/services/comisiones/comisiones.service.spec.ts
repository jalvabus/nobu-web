import { TestBed, inject } from '@angular/core/testing';

import { ComisionesService } from './comisiones.service';

describe('ComisionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComisionesService]
    });
  });

  it('should ...', inject([ComisionesService], (service: ComisionesService) => {
    expect(service).toBeTruthy();
  }));
});
