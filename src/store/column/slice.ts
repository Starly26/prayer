import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChangeColumnType, ColumnType} from '../../types';

type InitialColumnState = {
  columns: ColumnType[];
};

const initialState: InitialColumnState = {
  columns: [],
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    putColumns(state, {payload}: PayloadAction<ColumnType[]>) {
      if (payload) {
        state.columns = payload;
      }
      console.log('payload', payload);
    },
    addColumn(state, {payload}: PayloadAction<ColumnType>) {
      state.columns.push(payload);
      console.log('slice', payload);
    },
    deleteColumn(state, {payload}: PayloadAction<number>) {
      state.columns = state.columns.filter(column => column.id === payload);
    },
    changeColumn(state, {payload}: PayloadAction<ChangeColumnType>) {
      const column = state.columns.find(item => item.id === payload.id);
      if (column) {
        column.title === payload.title;
        column.description === payload.description;
      }
    },
  },
});

export const {addColumn, putColumns, deleteColumn, changeColumn} =
  columnSlice.actions;
export default columnSlice.reducer;
