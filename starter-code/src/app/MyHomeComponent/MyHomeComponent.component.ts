import { Component, OnInit } from '@angular/core';
import { MyMoviesService } from '../Services/my-movies.service'
@Component({
  selector: 'app-MyHomeComponent',
  templateUrl: './MyHomeComponent.component.html',
  styleUrls: ['./MyHomeComponent.component.css'],
  providers: [MyMoviesService]
})

export class MyHomeComponentComponent implements OnInit {
  newMovies: Array<Object>;
  constructor(private theMovies:MyMoviesService) { }

  ngOnInit() {
    this.newMovies = this.theMovies.getMovies();
  }

}
