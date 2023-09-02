import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/600x400/FF5733/FFFFFF',
    'https://via.placeholder.com/600x400/33FF57/FFFFFF',
    'https://via.placeholder.com/600x400/5733FF/FFFFFF'
  ];

  constructor(private carouselConfig: NgbCarouselConfig) {
    // Customize the interval here (e.g., set to 3 seconds)
    carouselConfig.interval = 5000; // 3000 milliseconds (3 seconds)
  }

  ngOnInit(): void {

  }

}
