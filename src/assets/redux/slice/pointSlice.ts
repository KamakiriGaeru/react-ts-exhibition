import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//型を定義
interface PointState {
  inputPoint: number;
}

//初期値
const initialState: PointState = { inputPoint: 0 }

//リデューサーを定義
const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    pointAdd: (state, action:PayloadAction<number>) => {
      state.inputPoint += action.payload
    }
  }
});

export const { pointAdd } = pointSlice.actions;
export default pointSlice.reducer;