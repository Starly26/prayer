import {call, put, takeEvery} from 'redux-saga/effects';
import {deleteComment} from '../../../api/api';
import {CommentDeleteActionType} from '../../../types';
import {deleteCommentAction} from '../actions';
import {deleteCommentSlice} from '../slice';

function* delComment(action: CommentDeleteActionType) {
  try {
    yield call(() => deleteComment(action.payload.id));
    yield put(deleteCommentSlice(action.payload.id));
  } catch (e: any) {
    console.log(e.message);
  }
}

function* deleteCommentSaga() {
  yield takeEvery(deleteCommentAction, delComment);
}

export default deleteCommentSaga;
