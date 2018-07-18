import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  // TODO: change to Movie type
  public movie: any;
  public editForm: FormGroup;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Buscamos la película a partir del id que trae en la dirección
    this.route.params.subscribe(params => {
      this.movieService.getMovie(params['id']).subscribe(
        movie => {
          this.movie = movie;
          // Creamos el formulario con los datos de la película
          this.editForm = this.fb.group({
            'title': new FormControl(movie.title, [Validators.required]),
            'originalTitle': new FormControl(movie.originalTitle),
            'runtime': new FormControl(movie.runtime),
            'year': new FormControl(movie.year)
          });
        }
      );
    });
  }

}
