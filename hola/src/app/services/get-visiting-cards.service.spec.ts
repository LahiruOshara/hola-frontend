import { TestBed, inject } from '@angular/core/testing';

import { GetVisitingCardsService } from './get-visiting-cards.service';

describe('GetVisitingCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVisitingCardsService]
    });
  });

  it('should be created', inject([GetVisitingCardsService], (service: GetVisitingCardsService) => {
    expect(service).toBeTruthy();
  }));
});
