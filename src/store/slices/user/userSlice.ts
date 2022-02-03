import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: string = '';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserName(state, {payload}: PayloadAction<string>) {
      return payload;
    },
  },
});

export const {addUserName} = userSlice.actions;
export default userSlice.reducer;
