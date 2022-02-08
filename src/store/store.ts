import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReduser from './auth/userSlice';
import columnReduser from './column/slice';
import columnSaga from './column/saga';

const rootReducer = combineReducers({
  user: userReduser,
  column: columnReduser,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(columnSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
