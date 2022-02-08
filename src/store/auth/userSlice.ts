import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import LocalStorageService from '../../services/LocalStorageService';

type StateType = {
  name: string;
  authorization: boolean;
};

const initialState = {
  name: '',
  authorization: false,
} as StateType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, {payload}: PayloadAction<string>) {
      state.authorization = true;
      state.name = payload;
      console.log('login', payload);
    },
    logout(state) {
      LocalStorageService.resetToken();
      state.authorization = false;
      console.log('out');
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
