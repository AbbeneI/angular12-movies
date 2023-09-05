import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundGridComponent } from './background-grid/background-grid.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselSideContentComponent } from './carousel-side-content/carousel-side-content.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    MovieSearchComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MovieListItemComponent,
    BackgroundGridComponent,
    CarouselComponent,
    CarouselSideContentComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
