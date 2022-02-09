import {call, put, takeEvery} from 'redux-saga/effects';
import {deleteColumn} from '../../../api/api';
import {ColumnDeleteActionType} from '../../../types';
import {deleteColumnAction} from '../actions';
import {deleteColumnSlice} from '../slice';

function* delColumn(action: ColumnDeleteActionType) {
  try {
    yield call(() => deleteColumn(action.payload.id));
    yield put(deleteColumnSlice(action.payload.id));
  } catch (e: any) {
    console.log(e.message);
  } finally {
  }
}

function* deleteColumnSaga() {
  yield takeEvery(deleteColumnAction, delColumn);
}

export default deleteColumnSaga;
