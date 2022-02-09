import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {createColumn} from '../../../api/api';
import {ColumnCreateActionType, ColumnType} from '../../../types';
import {createColumnAction} from '../actions';
import {loadingColumn, addColumn} from '../slice';

function* newColumn(action: ColumnCreateActionType) {
  try {
    yield put(loadingColumn(true));
    const response: AxiosResponse<ColumnType> = yield call(() =>
      createColumn(action.payload.column),
    );
    const column = response.data;

    yield put(addColumn(column));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingColumn(false));
  }
}

function* createColumnSaga() {
  yield takeEvery(createColumnAction, newColumn);
}

export default createColumnSaga;
