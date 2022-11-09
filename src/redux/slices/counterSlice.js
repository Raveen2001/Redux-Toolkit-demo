import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: null,
  reducers: {
    increment: (state) => {
      if (state !== null) state += 1;
      else state = 0;

      return state;
    },

    decrement: (state) => {
      if (state !== null) state -= 1;
      else state = 0;

      return state;
    },

    incrementByAmount: (state, action) => {
      console.log(action);
      if (state !== null) state += action.payload;
      else state = 0;

      return state;
    },
  },
});

// {
//     reducer: ,
//     actions: {}
// }

const { reducer, actions } = counterSlice;

export const { increment, decrement, incrementByAmount } = actions;

export default reducer;
