import loginSlice from "@/reducers/loginSlice";
import userSlice from "@/reducers/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
  },
});

export default Store;
