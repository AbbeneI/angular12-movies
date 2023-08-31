import { Component, OnInit, Input } from '@angular/core';
import { MOVIES } from '../data';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  movies = MOVIES;
  @Input() movie: Movie = {
    posterPath:
      "https://image.tmdb.org/t/p/w500/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",
    releaseDate: "date",
    title: "oops",
    cast: [
      "hi",
      "hello"
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
