import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import nameSlice from "./slices/nameSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    cnt: counterSlice,
    name: nameSlice,
    product: productSlice,
    //...
  },
});
