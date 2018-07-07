import { Injectable } from '@angular/core';
import { MovieDaoService } from './movie-dao.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  lastMovies: any[];

  constructor(private dao: MovieDaoService) { }

  getLastMovies() {
    this.dao.getLastMovies().subscribe(
      movies => {
        this.lastMovies = movies;
      }
    );
  }
}
