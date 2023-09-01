import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('content') contentEl!: ElementRef<HTMLElement>;

  constructor() {
  }

  ngAfterViewInit() {
  }

  titleBoxOffice = 'Top Movies in Theatres';
  titleStreaming = "Top Streaming Movies";
}
