import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Order } from "../../type/types";

type OrderState = {
  order: Order[];
};

const initialState: OrderState = {
  order: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order[]>) => {
      state.order = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
