import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  public newMovieForm: FormGroup;

  constructor(private movieService: MovieService, private fb: FormBuilder) { }

  ngOnInit() {
    // Reactive Form
    this.newMovieForm = this.fb.group({
      'title': new FormControl(null, Validators.required),
      'originalTitle': new FormControl(null),
      'runtime': new FormControl(null, [Validators.min(1)]),
      'year': new FormControl(null, [Validators.min(1885)])
    });
  }

  onSubmit() {
    if (this.newMovieForm.valid) {
      this.movieService.saveNewMovie(this.newMovieForm.value);
    }
  }
}
