import {createAction} from '@reduxjs/toolkit';
import {ChangeColumnType, ColumnTypeCreate} from '../../types';

export const putColumnsAction = createAction('putColumn');

export const createColumnAction = createAction(
  'createColumn',
  (column: ColumnTypeCreate) => {
    return {
      payload: {
        column,
      },
    };
  },
);

export const deleteColumnAction = createAction('deleteColumn', (id: number) => {
  return {
    payload: {
      id,
    },
  };
});

export const changeColumnAction = createAction(
  'changeColumn',
  (column: ChangeColumnType) => {
    return {payload: {column}};
  },
);
