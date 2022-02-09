import {all} from 'redux-saga/effects';
import loginUserSaga from './auth/sagas/loginSaga';
import registerSaga from './auth/sagas/registerSaga';
import changeColumnSaga from './column/sagas/changeColumnSaga';
import createColumnSaga from './column/sagas/createColumnSaga';
import deleteColumnSaga from './column/sagas/deleteColumnSaga';
import receiveColumnsSaga from './column/sagas/receiveColumnsSaga';
import changeCommentSaga from './comments/sagas/changeCommentSaga';
import createCommentSaga from './comments/sagas/createCommentSaga';
import deleteCommentSaga from './comments/sagas/deleteCommentSaga';
import receiveCommentsSaga from './comments/sagas/receiveCommentSaga';
import changePrayerSaga from './prayers/sagas/changePrayerSaga';
import createPrayerSaga from './prayers/sagas/createPrayerSaga';
import deletePrayerSaga from './prayers/sagas/deletePrayerSaga';
import receivePrayersSaga from './prayers/sagas/receivePrayersSaga';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginUserSaga(),
    receiveColumnsSaga(),
    createColumnSaga(),
    deleteColumnSaga(),
    changeColumnSaga(),
    receivePrayersSaga(),
    createPrayerSaga(),
    deletePrayerSaga(),
    changePrayerSaga(),
    receiveCommentsSaga(),
    createCommentSaga(),
    deleteCommentSaga(),
    changeCommentSaga(),
  ]);
}
