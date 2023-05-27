import { loginFailure, loginStart, loginSuccess } from "@/reducers/loginSlice";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
} from "@/reducers/userSlice";
import axios from "axios";

export const fetchLogin = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const { data } = await axios.post("/api/login", { email, password });

    dispatch(loginSuccess(data));
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
    }
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(getUserStart());

    const { data } = await axios.get("/api/myprofile?token=" + token);

    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error.response.data.message));
  }
};
