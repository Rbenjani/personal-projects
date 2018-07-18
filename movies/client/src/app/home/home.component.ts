import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @HostBinding('class') hostClass = 'home-container';
  
  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getLastMovies();
  }

}
