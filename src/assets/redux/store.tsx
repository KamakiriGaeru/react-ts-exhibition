import { configureStore } from '@reduxjs/toolkit';
import pointSlice from './slice/pointSlice';

const store = configureStore({
  reducer: {
    point: pointSlice,
  },
});

//Redux全体の状態ツリーの型の定義
//userSelectorでstateを取得する際に使用
export type RootState = ReturnType<typeof store.getState>;

//Redux全体のdispatchの型の定義
//userDispatchでdispatchを取得する際に使用
export type AppDispatch = typeof store.dispatch;

export default store;