import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_PATH } from './constants/constants';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/' + APP_PATH.movies,
        pathMatch: 'full',
      },
      {
        path: APP_PATH.movies,
        loadChildren: () => import('../movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: APP_PATH.theatres,
        loadChildren: () => import('../theatres/theatres.module').then((m) => m.TheatresModule),
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
