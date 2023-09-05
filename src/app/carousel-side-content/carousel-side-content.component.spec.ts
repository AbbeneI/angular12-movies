import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSideContentComponent } from './carousel-side-content.component';

describe('CarouselSideContentComponent', () => {
  let component: CarouselSideContentComponent;
  let fixture: ComponentFixture<CarouselSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSideContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
