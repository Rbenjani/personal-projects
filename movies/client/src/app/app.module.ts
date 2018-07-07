import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent,
    NewMovieComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
