import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MovieService } from '../movie.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let movieService;
  let getMoviesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    movieService = jasmine.createSpyObj('MovieService', ['getMovies']);
    // getMoviesSpy = movieService.getMovies.and.returnValue(of(MOVIES));
    TestBed
      .configureTestingModule({
        declarations: [DashboardComponent, MovieSearchComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: MovieService, useValue: movieService }]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Movies" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Movies');
  });

  it('should call movieService', waitForAsync(() => {
    expect(getMoviesSpy.calls.any()).toBe(true);
  }));

  it('should display 4 links', waitForAsync(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));
});
