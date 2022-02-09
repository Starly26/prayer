import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import LocalStorageService from '../../services/LocalStorageService';

type StateType = {
  name: string;
  authorization: boolean;
  isLoading: boolean;
};

const initialState = {
  name: '',
  authorization: false,
  isLoading: false,
} as StateType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, {payload}: PayloadAction<string>) {
      state.authorization = true;
      state.name = payload;
    },
    logout(state) {
      LocalStorageService.resetToken();
      state.authorization = false;
    },
    loading(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
      console.log('loading');
    },
  },
});

export const {login, logout, loading} = userSlice.actions;
export default userSlice.reducer;
