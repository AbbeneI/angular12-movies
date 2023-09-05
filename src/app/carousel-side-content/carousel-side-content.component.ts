import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-side-content',
  templateUrl: './carousel-side-content.component.html',
  styleUrls: ['./carousel-side-content.component.css']
})
export class CarouselSideContentComponent implements OnInit {
  @Input() title: string = '';
  @Input() src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
