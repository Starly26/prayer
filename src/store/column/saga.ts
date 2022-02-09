import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getColumn} from '../../api/api';
import {ColumnResponseDto} from '../../types';
import {putColumnsAction} from './actions';
import {putColumns} from './slice';

function* receiveColumns() {
  try {
    const response: AxiosResponse<ColumnResponseDto> = yield call(getColumn);
    console.log('receive', response);

    const columns: ColumnResponseDto = response.data;

    yield put(putColumns(columns));
  } catch (e) {
    console.log(e);
  }
}

function* columnSaga() {
  yield takeEvery(putColumnsAction, receiveColumns);
}

export default columnSaga;
