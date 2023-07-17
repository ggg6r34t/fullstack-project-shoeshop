import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type ProductDetailsState = {
  productDetails: Product;
  isLoading: boolean;
};

const initialState: ProductDetailsState = {
  productDetails: {
    _id: "",
    title: "",
    image: "",
    additionalImage: [""],
    price: 0,
    product_details: "",
    category: "",
    sizes: [""],
    material: "",
    color: "",
    insole: "",
    outsole: "",
    heel_height: "",
    heel_type: "",
    sale: false,
  },
  isLoading: true,
};

const searchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = searchSlice.actions;
const productDetailsReducer = searchSlice.reducer;
export default productDetailsReducer;
