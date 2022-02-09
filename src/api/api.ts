import {
  UserProps,
  ColumnTypeCreate,
  ColumnTypeChange,
  CreatePrayerType,
  ChangePrayerType,
  CreateCommentType,
  ChangeCommentType,
} from '../types';
import {apiAuth, instanse} from './instatnse';

export const loginUser = (user: UserProps) => {
  return apiAuth.post('auth/sign-in/', user);
};

export const registerUser = (user: UserProps) => {
  return apiAuth.post('auth/sign-up/', user);
};

export const getColumn = () => {
  return instanse.get('columns/');
};

export const createColumn = (column: ColumnTypeCreate) => {
  return instanse.post('columns/', column);
};

export const deleteColumn = (columnId: number) => {
  return instanse.delete(`columns/${columnId}`);
};

export const changeColumn = (column: ColumnTypeChange) => {
  return instanse.put(`columns/${column.id}`, {
    title: column.title,
    description: column.description,
  });
};

export const getPrayers = () => {
  return instanse.get('prayers');
};

export const createPrayer = (prayer: CreatePrayerType) => {
  return instanse.post(`columns/${prayer.columnId}/prayers`, {
    title: prayer.title,
    description: prayer.description,
    checked: prayer.checked,
  });
};

export const changePrayer = (prayer: ChangePrayerType) => {
  return instanse.put(`prayers/${prayer.id}`, {
    title: prayer.title,
    description: prayer.description,
    checked: prayer.checked,
  });
};

export const deletePrayer = (prayerId: number) => {
  return instanse.delete(`prayers/${prayerId}`);
};

export const getComments = () => {
  return instanse.get('comments');
};

export const createComment = (comment: CreateCommentType) => {
  return instanse.post(`prayers/${comment.prayerId}/comments`, {
    body: comment.body,
  });
};

export const changeComment = (comment: ChangeCommentType) => {
  return instanse.put(`comments/${comment.id}`, {body: comment.body});
};

export const deleteComment = (commentId: number) => {
  return instanse.delete(`comments/${commentId}`);
};
