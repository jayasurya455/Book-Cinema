// details.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {
  getAllDetails,
  getAllDetailsSuccess,
  getAllDetailsFailure,
} from './details.actions';
import { Details } from '../shared/models/details';

export interface DetailsState {
  data: Details | null;
  cache: { [key: string]: any };
  loading: boolean;
  error: any;
}

export const initialState: DetailsState = {
  data: null,
  cache: {},
  loading: false,
  error: null,
};

export const detailsReducer = createReducer(
  initialState,
  on(getAllDetails, (state) => ({ ...state, loading: true, error: null })),
  on(getAllDetailsSuccess, (state, { params, data }) => ({
    ...state,
    cache: {
        ...state.cache,
        [params]: data,
    },
    loading: false,
    data,
  })),
  on(getAllDetailsFailure, (state, { error }) => ({
    ...state,
    cache: {},
    loading: false,
    error,
  }))
);
