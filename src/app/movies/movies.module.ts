import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        LandingComponent
      ],
      imports: [
        CommonModule,
        MoviesRoutingModule,
        SharedModule
      ]
})
export class MoviesModule { }
