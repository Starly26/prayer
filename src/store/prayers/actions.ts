import {createAction} from '@reduxjs/toolkit';
import {ChangePrayerType, CreatePrayerType} from '../../types';

export const putPrayersAction = createAction('putPrayers');

export const deletePrayerAction = createAction('deletePrayer', (id: number) => {
  return {
    payload: {
      id,
    },
  };
});

export const createPrayerAction = createAction(
  'createPrayer',
  (prayer: CreatePrayerType) => {
    return {
      payload: {
        prayer,
      },
    };
  },
);

export const changePrayerAction = createAction(
  'changePrayer',
  (prayer: ChangePrayerType) => {
    return {payload: {prayer}};
  },
);
