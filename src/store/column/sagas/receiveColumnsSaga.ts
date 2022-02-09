import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getColumn} from '../../../api/api';
import {ColumnResponseDto} from '../../../types';
import {putColumnsAction} from '../actions';
import {loadingColumn, putColumns} from '../slice';

function* receiveColumns() {
  try {
    yield put(loadingColumn(true));
    const response: AxiosResponse<ColumnResponseDto> = yield call(getColumn);
    const columns: ColumnResponseDto = response.data;

    yield put(putColumns(columns));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingColumn(false));
  }
}

function* receiveColumnsSaga() {
  yield takeEvery(putColumnsAction, receiveColumns);
}

export default receiveColumnsSaga;
