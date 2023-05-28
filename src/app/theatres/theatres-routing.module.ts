import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreLandingComponent } from './components/theatre-landing/theatre-landing.component';

const routes: Routes = [
    {
        path:':id',
        component: TheatreLandingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatresRoutingModule { }
