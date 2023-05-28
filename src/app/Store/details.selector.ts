// details.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DetailsState } from './details.reducer';

const getDetailsState = createFeatureSelector<DetailsState>('details');

export const getDetailsData = createSelector(
  getDetailsState,
  state => state.data
);
export const getDetailsCache = createSelector(getDetailsState, state => state.cache);
