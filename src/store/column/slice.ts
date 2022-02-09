import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {ChangeColumnType, ColumnType} from '../../types';

type InitialColumnState = {
  columns: ColumnType[];
  isLoading: boolean;
};

const initialState: InitialColumnState = {
  columns: [],
  isLoading: false,
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    putColumns(state, {payload}: PayloadAction<ColumnType[]>) {
      state.columns = payload;
    },
    loadingColumn(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    addColumn(state, {payload}: PayloadAction<ColumnType>) {
      state.columns.push(payload);
    },
    deleteColumnSlice(state, {payload}: PayloadAction<number>) {
      state.columns = state.columns.filter(column => column.id !== payload);
    },
    changeColumnSlice(state, {payload}: PayloadAction<ChangeColumnType>) {
      const currentState = current(state.columns);
      const column = currentState.find(item => item.id === payload.id);

      if (!column) {
        return;
      }

      state.columns = currentState.map(item => {
        if (item.id === column.id) {
          return {
            ...column,
            title: payload.title,
            description: payload.description,
          };
        }

        return item;
      });
    },
  },
});

export const {
  addColumn,
  putColumns,
  deleteColumnSlice,
  changeColumnSlice,
  loadingColumn,
} = columnSlice.actions;
export default columnSlice.reducer;
