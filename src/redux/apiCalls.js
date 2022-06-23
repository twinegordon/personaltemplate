import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

// Login user
export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://exprestemplate.herokuapp.com/api/auth/login",
      userInfo
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};