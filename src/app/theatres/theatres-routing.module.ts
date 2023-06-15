import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreLandingComponent } from './components/theatre-landing/theatre-landing.component';
import { TheatreBookSeatsComponent } from './components/theatre-book-seats/theatre-book-seats.component';
import { APP_PATH } from '../Main/constants/constants';

const routes: Routes = [
    {
        path:':id',
        component: TheatreLandingComponent
    },
    {
        path:':id/'+ APP_PATH.bookSeats,
        component: TheatreBookSeatsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatresRoutingModule { }
