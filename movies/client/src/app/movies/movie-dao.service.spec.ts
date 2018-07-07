import { TestBed, inject } from '@angular/core/testing';

import { MovieDaoService } from './movie-dao.service';

describe('MovieDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDaoService]
    });
  });

  it('should be created', inject([MovieDaoService], (service: MovieDaoService) => {
    expect(service).toBeTruthy();
  }));
});
