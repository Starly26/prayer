import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReduser from './auth/userSlice';
import columnReduser from './column/slice';
import rootSaga from './rootSaga';
import prayerReduser from './prayers/slice';
import commentReduser from './comments/slice';

const rootReducer = combineReducers({
  user: userReduser,
  column: columnReduser,
  prayer: prayerReduser,
  comment: commentReduser,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
