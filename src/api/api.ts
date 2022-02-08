import {addColumn} from '../store/column/slice';
import {UserProps, ColumnTypeCreate, ColumnTypeChange} from '../types';
import {apiAuth, instanse} from './instatnse';

export const loginUser = (user: UserProps) => {
  return apiAuth.post('auth/sign-in/', user);
};

export const registerUser = (user: UserProps) => {
  return apiAuth.post('auth/sign-up/', user);
};

export const getColumn = () => {
  return instanse.get('columns/');
};

export const createColumn = (column: ColumnTypeCreate) => {
  return instanse
    .post('columns/', column)
    .then(response => addColumn(response.data));
};

export const deleteColumn = (id: number) => {
  return instanse.delete(`columns/${id}`);
};

export const changeColumn = (id: number, column: ColumnTypeChange) => {
  return instanse.put(`columns/${id}`, column);
};
