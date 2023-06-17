import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { DatesAvailableComponent } from './components/dates-available/dates-available.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookSeatsComponent } from './components/book-seats/book-seats.component';

export { SearchBarComponent } from './components/search-bar/search-bar.component';
export { HeaderComponent } from './components/header/header.component';
export { MovieDetailsComponent } from './components/movie-details/movie-details.component';
export { SearchPipe } from './pipes/search/search.pipe';
export { DatesAvailableComponent } from './components/dates-available/dates-available.component';
export { FooterComponent } from './components/footer/footer.component';
export { BookSeatsComponent } from './components/book-seats/book-seats.component';




@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    NavigationBarComponent,
    MovieDetailsComponent,
    SearchPipe,
    DatesAvailableComponent,
    FooterComponent,
    BookSeatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchBarComponent,
    HeaderComponent,
    MovieDetailsComponent,
    SearchPipe,
    DatesAvailableComponent,
    FooterComponent,
    BookSeatsComponent
  ],
})
export class SharedModule { }
