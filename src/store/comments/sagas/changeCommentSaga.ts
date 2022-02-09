import {call, put, takeEvery} from 'redux-saga/effects';
import {changeComment} from '../../../api/api';
import {CommentChangeActionType} from '../../../types';
import {changeCommentAction} from '../actions';
import {changeCommentSlice} from '../slice';

function* changeCommentFn(actions: CommentChangeActionType) {
  try {
    const comment = actions.payload.comment;
    yield call(() => changeComment(comment));
    yield put(changeCommentSlice(comment));
  } catch (e: any) {
    console.log(e.message);
  }
}

function* changeCommentSaga() {
  yield takeEvery(changeCommentAction, changeCommentFn);
}

export default changeCommentSaga;
