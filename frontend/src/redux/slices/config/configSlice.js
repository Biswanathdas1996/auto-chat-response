import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "English",
  test: true,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateLanguage } = configSlice.actions;

export default configSlice.reducer;
