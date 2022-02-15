import {call, put, takeEvery} from 'redux-saga/effects';
import {changePrayer} from '../../../api/api';
import {PrayerChangeActionType} from '../../../types';
import {changePrayerAction} from '../actions';
import {changePrayerSlice} from '../slice';

function* changePrayerFn(actions: PrayerChangeActionType) {
  try {
    const prayer = actions.payload.prayer;
    yield call(() => changePrayer(prayer));
    yield put(changePrayerSlice(prayer));
  } catch (e: any) {
    console.log(e.message);
  }
}

function* changePrayerSaga() {
  yield takeEvery(changePrayerAction, changePrayerFn);
}

export default changePrayerSaga;
