import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {createPrayer} from '../../../api/api';
import {CreatePrayerTypeDto, PrayerCreateActionType} from '../../../types';
import {createPrayerAction} from '../actions';
import {addPrayer, loadingPrayers} from '../slice';

function* newPrayer(action: PrayerCreateActionType) {
  try {
    yield put(loadingPrayers(true));
    const response: AxiosResponse<CreatePrayerTypeDto> = yield call(() =>
      createPrayer(action.payload.prayer),
    );
    const prayer = response.data;
    yield put(addPrayer(prayer));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingPrayers(false));
  }
}

function* createPrayerSaga() {
  yield takeEvery(createPrayerAction, newPrayer);
}

export default createPrayerSaga;
