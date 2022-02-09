import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {createComment} from '../../../api/api';
import {CreateCommentTypeDto, CommentCreateActionType} from '../../../types';
import {addNewCommentId} from '../../prayers/slice';
import {createCommentAction} from '../actions';
import {addComment, loadingComments} from '../slice';

function* newComment(action: CommentCreateActionType) {
  try {
    yield put(loadingComments(true));
    const response: AxiosResponse<CreateCommentTypeDto> = yield call(() =>
      createComment(action.payload.comment),
    );
    const comment = response.data;
    const ids = {prayerId: comment.prayerId, commentId: comment.id};
    yield put(addComment(comment));
    yield put(addNewCommentId(ids));
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(loadingComments(false));
  }
}

function* createCommentSaga() {
  yield takeEvery(createCommentAction, newComment);
}

export default createCommentSaga;
