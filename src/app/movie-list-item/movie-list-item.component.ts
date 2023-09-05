import { Component, OnInit, Input, Inject, Pipe } from '@angular/core';
import { Movie } from '../movie';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})

export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie = {
    id: 0,
    posterPath: "",
    releaseDate: "",
    title: "",
    cast: ["", ""]
  };

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MovieListItemDialogContent, {
      data: this.movie,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'movie-list-item-dialog-content',
  templateUrl: 'movie-list-item-dialog-content.html',
  styleUrls: ['./movie-list-item-dialog-content.css']
})
export class MovieListItemDialogContent {
  constructor(
    public dialogRef: MatDialogRef<MovieListItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}