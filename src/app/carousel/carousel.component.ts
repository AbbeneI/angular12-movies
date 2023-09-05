import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private carouselConfig: NgbCarouselConfig) {
    // Customize the interval here (e.g., set to 3 seconds)
    carouselConfig.interval = 5000; // 3000 milliseconds (3 seconds)
  }

  ngOnInit(): void {

  }

}
