// details.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { getAllDetails, getAllDetailsSuccess, getAllDetailsFailure } from './details.actions';
import { CinemaService } from '../shared/services/cinema.service';
import { Store, select } from '@ngrx/store';
import { getDetailsCache } from './details.selector';

@Injectable()
export class DetailsEffects {
  constructor(private actions$: Actions, private http: HttpClient, private cinemaService: CinemaService, private store: Store) {}

  getAllDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllDetails),
      withLatestFrom(this.store.pipe(select(getDetailsCache))),
      filter(([action, cache]) => !cache[action.userName]),
      switchMap(([action]) =>
        this.cinemaService.getAllDetails(action.userName).pipe(
          map(response => getAllDetailsSuccess({ params: action.userName, data: response })),
          catchError(error => of(getAllDetailsFailure({ error })))
        )
      )
    )
  );
}
