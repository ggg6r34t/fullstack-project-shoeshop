import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IsLoggedInState = {
  isLogin: boolean;
};

const initialState: IsLoggedInState = {
  isLogin: false,
};

const IsLoggedInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const IsLoggedInActions = IsLoggedInSlice.actions;
const IsLoggedInReducer = IsLoggedInSlice.reducer;
export default IsLoggedInReducer;
