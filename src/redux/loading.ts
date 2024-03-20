import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0",
};

const loadingReducer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading_rdx: (state: any, action: any) => {
      state.value = action.payload;
    }

  },
});
export default loadingReducer.reducer;
export const {
  loading_rdx,

} = loadingReducer.actions;
