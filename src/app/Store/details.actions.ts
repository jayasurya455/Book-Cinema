// details.actions.ts
import { createAction, props } from '@ngrx/store';
import { Details } from '../shared/models/details';

export const getAllDetails = createAction('[Details] Get All Details', props<{ userName: string }>());
export const getAllDetailsSuccess = createAction('[Details] Get All Details Success', props<{params: any, data: Details }>());
export const getAllDetailsFailure = createAction('[Details] Get All Details Failure', props<{ error: any }>());
