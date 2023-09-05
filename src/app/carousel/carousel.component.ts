import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  contentTitle: string = "Lorem Ipsum";

  imgSrc: string[] = [
    "https://observer.com/wp-content/uploads/sites/2/2021/06/thor.jpg?quality=80&w=970",
    "https://variety.com/wp-content/uploads/2016/07/15-suicide-squad.jpg?w=700",
    "https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:371/u:https://cdn.flickeringmyth.com/wp-content/uploads/2017/10/the-dark-knight-20-1200-1200-675-675-crop-000000-600x338.jpg"
  ]

  constructor(private carouselConfig: NgbCarouselConfig) {
    // Customize the interval here (e.g., set to 3 seconds)
    carouselConfig.interval = 5000; // 3000 milliseconds (3 seconds)
  }

  ngOnInit(): void {

  }

}
