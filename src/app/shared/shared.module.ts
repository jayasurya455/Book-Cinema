import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';

export { SearchBarComponent } from './components/search-bar/search-bar.component';
export { HeaderComponent } from './components/header/header.component';
export { MovieDetailsComponent } from './components/movie-details/movie-details.component';
export { SearchPipe } from './pipes/search/search.pipe';




@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    NavigationBarComponent,
    MovieDetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchBarComponent,
    HeaderComponent,
    MovieDetailsComponent,
    SearchPipe
  ],
})
export class SharedModule { }
