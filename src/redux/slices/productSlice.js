import { createSlice } from "@reduxjs/toolkit";

// {
//     'oviya': {price: priceless, description: 'hi', quantity: 1}
// }

const productSlice = createSlice({
  name: "products",
  initialState: {},

  //   {
  //     name: 'oviya',
  //     value: {}
  //   }
  reducers: {
    createItem: (state, action) => {
      const data = action.payload;
      state = {
        ...state,
        [data.name]: data.value,
      };

      console.log(state);
      return state;
    },
  },
});

const { reducer, actions } = productSlice;

export default reducer;
export const { createItem } = actions;
