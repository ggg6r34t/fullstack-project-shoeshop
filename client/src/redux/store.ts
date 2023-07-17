import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
// import cartReducer from "./slices/cart";
import productDetailsReducer from "./slices/productDetail";
import themeReducer from "./slices/themeMode";
import textColorReducer from "./slices/textColor";
import IsLoggedInReducer from "./slices/isLoggedIn";

const store = configureStore({
  reducer: {
    userLogin: IsLoggedInReducer,
    // cart: cartReducer,
    products: productReducer,
    productDetails: productDetailsReducer,
    color: textColorReducer,
    themes: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
