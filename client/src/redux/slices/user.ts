import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../type/types";

type UserState = {
  userInformation: User | null;
  isLogin: boolean;
};

const storedUserState = localStorage.getItem("userState");
const initialState: UserState = storedUserState
  ? JSON.parse(storedUserState)
  : {
      userInformation: null,
      isLogin: false,
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
      localStorage.setItem("userState", JSON.stringify(state));
    },
    userLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
      localStorage.setItem("userState", JSON.stringify(state));
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
