import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getColumn} from '../../api/api';
import {ColumnResponseDto} from '../../types';
import {putColumnsAction} from './actions';
import {putColumns} from './slice';

function* createColumns() {
  const response: AxiosResponse<ColumnResponseDto> = yield call(getColumn);
  const columns: ColumnResponseDto = response.data;
  console.log(columns);
  yield put(putColumns(columns));
}

function* columnSaga() {
  yield takeEvery(putColumnsAction, createColumns);
}

export default columnSaga;
