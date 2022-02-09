import {all} from 'redux-saga/effects';
import loginUserSaga from './auth/sagas/loginSaga';
import registerSaga from './auth/sagas/registerSaga';
import columnSaga from './column/saga';

export default function* rootSaga() {
  yield all([columnSaga(), registerSaga(), loginUserSaga()]);
}
