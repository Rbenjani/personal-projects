import { Injectable } from '@angular/core';
import { MovieDaoService } from './movie-dao.service';
import { Movie } from './movie';
import { Observable } from '../../../node_modules/rxjs';

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

  getMovie(id: string): Observable<any> {
    return this.dao.getMovie(id);
  }

  saveNewMovie(movie: any) {
    this.dao.saveNewMovie(movie);
  }

  savePoster(value: any, id: string) {
    this.dao.savePoster(value, id);
  }
}
