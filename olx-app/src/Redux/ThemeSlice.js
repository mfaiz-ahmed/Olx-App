import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "white",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, data) => {
      state.color = data.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
