import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getColumn = (state: RootState, columnId: number) =>
  state.column.columns.find(column => column.id === columnId);

export const selectColumnById = createSelector(getColumn, column => column);
