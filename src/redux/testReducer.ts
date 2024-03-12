import { createSlice } from "@reduxjs/toolkit";

const testReducer = createSlice({
  name: "test",
  initialState:[],
  reducers: {
    
    wRemove: (state :any, action:any) => {
      return  state.test = action.payload
    },

  },
});
export default testReducer.reducer;
export const {
  addtest,
  wRemove
} = testReducer.actions;
