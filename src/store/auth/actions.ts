import {createAction} from '@reduxjs/toolkit';
import {UserProps} from '../../types';

export const registerUserAction = createAction(
  'loginUser',
  (user: UserProps) => {
    return {
      payload: {
        user,
      },
    };
  },
);

export const loginUserAction = createAction('loginUser', (user: UserProps) => {
  return {
    payload: {
      user,
    },
  };
});
