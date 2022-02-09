import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ChangeCommentType,
  CommentType,
  CreateCommentTypeDto,
} from '../../types';

type InitialCommentsState = {
  comments: CommentType[];
  isLoading: boolean;
};

const initialState: InitialCommentsState = {
  comments: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    putComments(state, {payload}: PayloadAction<CommentType[]>) {
      state.comments = payload;
    },
    addComment(state, {payload}: PayloadAction<CreateCommentTypeDto>) {
      state.comments.push(payload);
    },
    loadingComments(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    deleteCommentSlice(state, {payload}: PayloadAction<number>) {
      state.comments = state.comments.filter(comment => comment.id !== payload);
    },
    changeCommentSlice(state, {payload}: PayloadAction<ChangeCommentType>) {
      const comment = state.comments.find(item => item.id === payload.id);
      if (!comment) {
        return;
      }
      comment.body = payload.body;
    },
  },
});

export const {
  putComments,
  addComment,
  deleteCommentSlice,
  changeCommentSlice,
  loadingComments,
} = commentSlice.actions;
export default commentSlice.reducer;
