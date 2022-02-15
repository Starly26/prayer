import {call, put, takeEvery} from 'redux-saga/effects';
import {changeColumn} from '../../../api/api';
import {ColumnChangeActionType} from '../../../types';
import {changeColumnAction} from '../actions';
import {changeColumnSlice, loading} from '../slice';

function* changeColumnFn(action: ColumnChangeActionType) {
  try {
    yield put(loading(true));
    const column = action.payload.column;
    yield call(() => changeColumn(column));
    yield put(changeColumnSlice(column));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loading(false));
  }
}

function* changeColumnSaga() {
  yield takeEvery(changeColumnAction, changeColumnFn);
}

export default changeColumnSaga;
