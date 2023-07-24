import { createSlice } from "@reduxjs/toolkit";

type DrawerState = {
  isOpen: boolean;
};

const initialState: DrawerState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
const drawerReducer = drawerSlice.reducer;
export default drawerReducer;
