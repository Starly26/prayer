import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getComments} from '../../../api/api';
import {CommentTypeDto} from '../../../types';
import {putCommentsAction} from '../actions';
import {loadingComments, putComments} from '../slice';

function* receiveComments() {
  try {
    yield put(loadingComments(true));
    const response: AxiosResponse<CommentTypeDto> = yield call(getComments);
    const comments = response.data;

    yield put(putComments(comments));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingComments(false));
  }
}

function* receiveCommentsSaga() {
  yield takeEvery(putCommentsAction, receiveComments);
}

export default receiveCommentsSaga;
