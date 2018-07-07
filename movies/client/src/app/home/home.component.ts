import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getLastMovies();
  }

}
