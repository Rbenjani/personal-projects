import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { HeaderComponent } from './header/header.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent,
    NewMovieComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    EditMovieComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
