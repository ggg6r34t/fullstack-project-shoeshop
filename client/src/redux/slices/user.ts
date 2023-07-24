import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../type/types";

type UserState = {
  userInformation: User | null;
  isLogin: boolean;
};

const initialState: UserState = {
  userInformation: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
    },
    userLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
