import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const isLoad = (state: RootState) => {
  return state.user.isLoading;
};

export const selectLoader = createSelector(isLoad, state => state);
