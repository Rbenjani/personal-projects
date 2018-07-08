import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  // This service shold be created by the root application injector
  // TODO: change to MovieModule injector
  providedIn: 'root'
})
export class MovieDaoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getLastMovies(): Observable<any> {
    return this.http.get('/api/lastMovies');
  }

  getMovie(id: string): Observable<any> {
    return this.http.get('/api/movie/' + id, this.httpOptions);
  }

  saveNewMovie(movie: any) {
    console.log(movie);
    this.http.post('/api/newMovie', movie, this.httpOptions)
      .subscribe(data => {
        console.log('resultado', data);
      });
  }

  savePoster(poster: any, id: string) {
    const fd = new FormData();
    fd.append('id', id);
    fd.append('poster', poster);
    this.http.post('/api/savePoster', fd).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
