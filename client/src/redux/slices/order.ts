import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Order } from "../../type/types";

type OrderState = {
  orders: Order[];
};

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
