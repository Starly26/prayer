import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {
  AddNewCommentId,
  ChangePrayerType,
  CreatePrayerTypeDto,
  PrayersType,
} from '../../types';

type InitialPrayernState = {
  prayers: PrayersType[];
  isLoading: boolean;
};

const initialState: InitialPrayernState = {
  prayers: [],
  isLoading: false,
};

const prayersSlice = createSlice({
  name: 'prayer',
  initialState,
  reducers: {
    putPrayers(state, {payload}: PayloadAction<PrayersType[]>) {
      state.prayers = payload;
    },
    loadingPrayers(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    addPrayer(state, {payload}: PayloadAction<CreatePrayerTypeDto>) {
      state.prayers.push(payload);
    },
    deletePrayerSlice(state, {payload}: PayloadAction<number>) {
      state.prayers = state.prayers.filter(prayer => prayer.id !== payload);
    },
    addNewCommentId(state, {payload}: PayloadAction<AddNewCommentId>) {
      const prayer = state.prayers.find(item => item.id === payload.prayerId);
      prayer?.commentsIds?.push(payload.commentId);
    },
    changePrayerSlice(state, {payload}: PayloadAction<ChangePrayerType>) {
      const currentState = current(state.prayers);
      const prayer = currentState.find(item => item.id === payload.id);

      if (!prayer) {
        return;
      }
      state.prayers = currentState.map(item => {
        if (item.id === prayer.id) {
          return {
            ...prayer,
            title: payload.title,
            description: payload.description,
            checked: payload.checked,
          };
        }

        return item;
      });
    },
  },
});

export const {
  putPrayers,
  addPrayer,
  deletePrayerSlice,
  changePrayerSlice,
  loadingPrayers,
  addNewCommentId,
} = prayersSlice.actions;
export default prayersSlice.reducer;
