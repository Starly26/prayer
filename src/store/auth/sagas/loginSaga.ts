import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {loginUser} from '../../../api/api';
import LocalStorageService from '../../../services/LocalStorageService';
import {LoginUserActionType, UserAuthResponseDto} from '../../../types';
import {loginUserAction} from '../actions';
import {loading, login} from '../userSlice';

function* loginUserFunc(action: LoginUserActionType) {
  try {
    yield put(loading(true));
    const response: AxiosResponse<UserAuthResponseDto> = yield call(() =>
      loginUser(action.payload.user),
    );
    const token = response.data.token;
    LocalStorageService.setToken(token);
    yield put(login(response.data.name));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loading(false));
  }
}

function* loginUserSaga() {
  yield takeEvery(loginUserAction, loginUserFunc);
}

export default loginUserSaga;
