import {createAction} from '@reduxjs/toolkit';
import {ChangeCommentType, CreateCommentType} from '../../types';

export const putCommentsAction = createAction('putComments');

export const deleteCommentAction = createAction(
  'deleteComment',
  (id: number) => {
    return {
      payload: {
        id,
      },
    };
  },
);

export const createCommentAction = createAction(
  'createComment',
  (comment: CreateCommentType) => {
    return {
      payload: {
        comment,
      },
    };
  },
);

export const changeCommentAction = createAction(
  'changeComment',
  (comment: ChangeCommentType) => {
    return {payload: {comment}};
  },
);
