import { Injectable } from '@angular/core';
import { MovieInterface } from './movie-interface'
import movies from '../../sample-movies';

@Injectable()
export class MyMoviesService {
  movies:Array<MovieInterface> = movies;

constructor() { }
getMovies():Array<MovieInterface>{

  return movies;
}
getMovie(id):MovieInterface{
  const movie = this.movies.filter((e) => e.id===id)
  return movie[0];
}
}
