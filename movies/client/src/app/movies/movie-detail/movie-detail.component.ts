import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private id;
  public movie: any;
  public poster: File;

  constructor(private movieService: MovieService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.movieService.getMovie(this.id).subscribe(
      movie => {
        this.movie = movie;
      }
    );
  }

  fileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.poster = fileList[0];
    }
  }

  savePoster(form: NgForm) {
    if (form.valid) {
      this.movieService.savePoster(this.poster, this.movie.id);
    }
  }
}
