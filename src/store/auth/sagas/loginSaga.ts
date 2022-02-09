import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {loginUser} from '../../../api/api';
import LocalStorageService from '../../../services/LocalStorageService';
import {SagaUserAction, UserAuthResponseDto} from '../../../types';
import {loginUserAction} from '../actions';
import {login} from '../userSlice';

function* loginUserFunc(action: SagaUserAction) {
  const response: AxiosResponse<UserAuthResponseDto> = yield call(() =>
    loginUser(action.payload.user),
  );
  console.log(response);
  const token = response.data.token;
  LocalStorageService.setToken(token);
  yield put(login(response.data.name));
}

function* loginUserSaga() {
  yield takeEvery(loginUserAction, loginUserFunc);
}

export default loginUserSaga;
