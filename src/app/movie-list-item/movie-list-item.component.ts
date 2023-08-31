import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie = {
    id: 0,
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
