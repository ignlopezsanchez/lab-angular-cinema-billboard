/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyMoviesService } from './my-movies.service';

describe('Service: MyMovies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMoviesService]
    });
  });

  it('should ...', inject([MyMoviesService], (service: MyMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
