import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {

  private id;
  public movie: any;

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
      this.movieService.savePoster(fileList[0], this.movie.id);
    }
  }
}
