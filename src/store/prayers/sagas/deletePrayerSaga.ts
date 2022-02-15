import {call, put, takeEvery} from 'redux-saga/effects';
import {deletePrayer} from '../../../api/api';
import {PrayerDeleteActionType} from '../../../types';
import {deletePrayerAction} from '../actions';
import {deletePrayerSlice} from '../slice';

function* delPrayer(action: PrayerDeleteActionType) {
  try {
    yield call(() => deletePrayer(action.payload.id));
    yield put(deletePrayerSlice(action.payload.id));
  } catch (e: any) {
    console.log(e.message);
  }
}

function* deletePrayerSaga() {
  yield takeEvery(deletePrayerAction, delPrayer);
}

export default deletePrayerSaga;
