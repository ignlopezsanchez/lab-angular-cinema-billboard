import { Component, OnInit } from '@angular/core';
import { MyMoviesService } from '../Services/my-movies.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-MyMovieComponent',
  templateUrl: './MyMovieComponent.component.html',
  styleUrls: ['./MyMovieComponent.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  newMovie:object;
  movieId:number;
  constructor(private theMovies:MyMoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.params["_value"].id)
    // let id = Number(this.route.params["_value"].id);
    // this.newMovie = this.theMovies.getMovie(id);
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']));
    this.newMovie = this.theMovies.getMovie(this.movieId);
  }

}
