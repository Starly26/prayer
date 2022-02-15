import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getPrayers} from '../../../api/api';
import {PrayersTypeDto} from '../../../types';
import {putPrayersAction} from '../actions';
import {loadingPrayers, putPrayers} from '../slice';

function* receivePrayers() {
  try {
    yield put(loadingPrayers(true));
    const response: AxiosResponse<PrayersTypeDto> = yield call(getPrayers);
    const prayers: PrayersTypeDto = response.data;

    yield put(putPrayers(prayers));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingPrayers(false));
  }
}

function* receivePrayersSaga() {
  yield takeEvery(putPrayersAction, receivePrayers);
}

export default receivePrayersSaga;
