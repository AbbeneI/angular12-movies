import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../data';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = MOVIES;
  constructor() { }

  ngOnInit(): void {
  }

}
