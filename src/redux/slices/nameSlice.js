import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setText: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = nameSlice;
export default reducer;
export const { setText } = actions;
