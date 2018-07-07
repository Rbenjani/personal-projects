import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDaoService {

  constructor(private http: HttpClient) { }

  getLastMovies(): Observable<any> {
    return this.http.get('/api/lastMovies');
  }
}
