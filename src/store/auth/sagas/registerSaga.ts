import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {registerUser} from '../../../api/api';
import LocalStorageService from '../../../services/LocalStorageService';
import {RegisterUserActionType, UserAuthResponseDto} from '../../../types';
import {putColumns} from '../../column/slice';
import {registerUserAction} from '../actions';
import {loading, login} from '../userSlice';

function* registrationUser(action: RegisterUserActionType) {
  try {
    yield put(loading(true));
    const response: AxiosResponse<UserAuthResponseDto> = yield call(() =>
      registerUser(action.payload.user),
    );
    const token = response.data.token;
    const columns = response.data.columns;
    yield put(login(action.payload.user.name!));
    LocalStorageService.setToken(token);
    yield put(putColumns(columns));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loading(false));
  }
}

function* registerSaga() {
  yield takeEvery(registerUserAction, registrationUser);
}

export default registerSaga;
