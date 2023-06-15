import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatresRoutingModule } from './theatres-routing.module';
import { TheatreLandingComponent } from './components/theatre-landing/theatre-landing.component';
import { SharedModule } from '../shared/shared.module';
import { TheatreBookSeatsComponent } from './components/theatre-book-seats/theatre-book-seats.component';


@NgModule({
  declarations: [
    TheatreLandingComponent,
    TheatreBookSeatsComponent
  ],
  imports: [
    CommonModule,
    TheatresRoutingModule,
    SharedModule
  ]
})
export class TheatresModule { }
