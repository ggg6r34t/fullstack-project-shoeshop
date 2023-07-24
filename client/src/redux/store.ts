import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import cartReducer from "./slices/cart";
import productDetailReducer from "./slices/productDetail";
import userReducer from "./slices/user";
import drawerReducer from "./slices/toggleDrawer";
import orderReducer from "./slices/order";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    drawer: drawerReducer,
    users: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
