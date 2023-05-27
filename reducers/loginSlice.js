import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    message: null,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  clearErrors,
  clearMessage,
} = loginSlice.actions;

export default loginSlice.reducer;
