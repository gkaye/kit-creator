import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationReducer";
import cartReducer from "./cartReducer";
import templateReducer from "./templateReducer";

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    cart: cartReducer,
    template: templateReducer,
  },
});
